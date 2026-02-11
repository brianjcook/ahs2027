const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const CONTENT_DIR = path.join(ROOT, "content");
const INPUT_GLOB = /_questions\.(docx|md)$/i;

function readDocxAsMarkdown(filePath) {
  try {
    const md = execFileSync(
      "pandoc",
      ["-f", "docx", "-t", "gfm", "--wrap=none", filePath],
      { encoding: "utf8" }
    );
    return md;
  } catch (err) {
    console.warn(`WARN: pandoc failed for ${path.basename(filePath)}: ${err.message}`);
    return null;
  }
}

function readFileUtf8(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function normalizeLines(md) {
  const cleaned = md.replace(/^\uFEFF/, "");
  return cleaned.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
}

function extractSection(lines, startPattern, endPattern) {
  const startIdx = lines.findIndex((l) => startPattern.test(l));
  if (startIdx === -1) return "";
  const endIdx = lines.findIndex((l, i) => i > startIdx && endPattern.test(l));
  const slice = lines.slice(startIdx + 1, endIdx === -1 ? undefined : endIdx);
  return slice.join("\n").trim();
}

function extractRules(lines) {
  const section = extractSection(lines, /^##\s+Rules\s*$/i, /^##\s+/);
  if (!section) return [];
  return section
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

function extractTitle(lines) {
  const line = lines.find((l) => /^#\s+/.test(l));
  return line ? line.replace(/^#\s+/, "").trim() : "";
}

function parseTable(lines) {
  const headerIdx = lines.findIndex(
    (l) => /\|\s*Question\s*\|\s*Response Options\s*\|\s*Rationales\s*\|\s*Citations\s*\|/i.test(l)
  );
  if (headerIdx === -1) return [];
  const rows = [];
  for (let i = headerIdx + 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line.includes("|")) break;
    const cells = line
      .split("|")
      .map((c) => c.trim())
      .filter((c, idx, arr) => !(idx === 0 && c === "") && !(idx === arr.length - 1 && c === ""));
    if (cells.length < 4) continue;
    rows.push({
      question: cells[0],
      responseOptions: cells[1],
      rationales: cells[2],
      citations: cells[3],
    });
  }
  return rows;
}

function stripBold(text) {
  return text.replace(/^\*\*(.*)\*\*$/, "$1").trim();
}

function parseQuestionCell(cell) {
  const text = stripBold(cell);
  const match = text.match(/^(Q\d+)\.\s*(.+)$/);
  if (!match) {
    return { id: null, text };
  }
  return { id: match[1], text: match[2].trim() };
}

function splitOptions(raw) {
  return raw.split(/\s*\/\s*/).map((o) => o.trim()).filter(Boolean);
}

function guessType(questionText, options) {
  const lower = questionText.toLowerCase();
  const optLower = options.map((o) => o.toLowerCase());

  if (options.length === 2 && optLower.includes("yes") && optLower.includes("no")) {
    return "boolean";
  }

  if (lower.includes("evidence (choose one)") || lower.includes("evidence") && lower.includes("choose one")) {
    return "evidence";
  }

  if (
    lower.includes("how many") ||
    lower.startsWith("when") ||
    lower.startsWith("how often") ||
    lower.startsWith("how long") ||
    lower.includes("choose one")
  ) {
    return "single";
  }

  if (
    lower.startsWith("which") ||
    lower.startsWith("how did") ||
    lower.startsWith("in which") ||
    lower.startsWith("how are") ||
    lower.startsWith("how does") ||
    lower.startsWith("how were")
  ) {
    return options.length > 2 ? "multi" : "single";
  }

  return options.length > 2 ? "multi" : "single";
}

function parseHardFailConditions(lines) {
  const start = lines.findIndex((l) => l.startsWith("### Hard-Fail Conditions"));
  if (start === -1) return [];
  const items = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("### ") || line.startsWith("## ")) break;
    if (line.startsWith("- ")) items.push(line.slice(2));
  }
  return items;
}

function parseRequiredCombinations(lines) {
  const start = lines.findIndex((l) => l.startsWith("### Required Combinations"));
  if (start === -1) return [];
  const items = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("### ") || line.startsWith("## ")) break;
    if (line.startsWith("- ")) items.push(line.slice(2));
  }
  return items;
}

function parseEligibilityDecision(lines) {
  const start = lines.findIndex((l) => l.startsWith("### Eligibility Decision"));
  if (start === -1) return "";
  const slice = [];
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("### ") || line.startsWith("## ")) break;
    if (line.length) slice.push(line);
  }
  return slice.join(" ").trim();
}

function buildShowIf(questions, hardFailItems) {
  const hardFailYesNo = new Set();
  for (const item of hardFailItems) {
    let match = normalizeRuleLine(item).match(/^Q(\d+)\s+is\s+"([^"]+)"/i);
    if (match) {
      const qid = `Q${match[1]}`;
      const val = match[2].replace(/\.$/, "").toLowerCase();
      if (val === "no") hardFailYesNo.add(qid);
      continue;
    }
    match = normalizeRuleLine(item).match(/^Any of Q(\d+)\s+through\s+Q(\d+)\s+is\s+"([^"]+)"/i);
    if (match) {
      const start = parseInt(match[1], 10);
      const end = parseInt(match[2], 10);
      const val = match[3].replace(/\.$/, "").toLowerCase();
      if (val === "no") {
        for (let i = start; i <= end; i++) {
          hardFailYesNo.add(`Q${i}`);
        }
      }
    }
  }

  const priorYesNo = [];
  for (const q of questions) {
    q.showIf = priorYesNo.map((id) => ({ id, equals: "Yes" }));
    if (q.type === "boolean" && hardFailYesNo.has(q.id)) {
      priorYesNo.push(q.id);
    }
  }
}

function normalizeRuleLine(line) {
  return line
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/\.\s*$/g, "")
    .trim();
}

function applyExplicitRules(questions, rules) {
  if (!rules.length) return false;
  const byId = new Map(questions.map((q) => [q.id, q]));
  let applied = false;

  for (const rule of rules) {
    let match = rule.match(/^show\s+(Q\d+)\s+if\s+(Q\d+)\s*=\s*"([^"]+)"$/i);
    if (match) {
      const target = byId.get(match[1]);
      if (target) {
        if (!target.showIf) target.showIf = [];
        target.showIf.push({ id: match[2], equals: match[3] });
        applied = true;
      }
      continue;
    }

    match = rule.match(/^show\s+(Q\d+)\s+if\s+(Q\d+)\s+includes\s+"([^"]+)"$/i);
    if (match) {
      const target = byId.get(match[1]);
      if (target) {
        if (!target.showIf) target.showIf = [];
        target.showIf.push({ id: match[2], includes: match[3] });
        applied = true;
      }
    }
  }

  return applied;
}

function parseMarkdown(md, source) {
  const lines = normalizeLines(md);
  const title = extractTitle(lines);
  const criterionText = extractSection(
    lines,
    /^\*\*Criterion \(Original\):\*\*/,
    /^##\s+/
  );
  const rules = extractRules(lines);
  const questionsTable = parseTable(lines);
  const hardFail = parseHardFailConditions(lines);
  const required = parseRequiredCombinations(lines);
  const eligibility = parseEligibilityDecision(lines);

  const questions = questionsTable.map((row) => {
    const q = parseQuestionCell(row.question);
    const options = splitOptions(row.responseOptions);
    const type = guessType(q.text, options);
    const allowOther = options.some((o) => /other\s*\(specify\)/i.test(o));
    return {
      id: q.id || `Q${Math.random().toString(36).slice(2, 6)}`,
      text: q.text,
      type,
      options,
      allowOther,
      rationales: row.rationales,
      citations: row.citations,
    };
  });

  const hasExplicit = applyExplicitRules(questions, rules);
  if (!hasExplicit) buildShowIf(questions, hardFail);

  return {
    id: title ? title.split(":")[0].trim() : "",
    title,
    criterionText,
    questions,
    scoring: {
      hardFail,
      required,
      eligibility,
    },
    rules,
    source,
  };
}

function readAdminContent() {
  const filePath = path.join(CONTENT_DIR, "criteria.json");
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.criteria)) return null;
    return { data, filePath };
  } catch (err) {
    console.warn(`WARN: failed to read admin content: ${err.message}`);
    return null;
  }
}

function mergeCriteria(parsed, admin) {
  if (!admin) return parsed;
  const byId = new Map(parsed.map((c) => [c.id, c]));
  for (const crit of admin.criteria) {
    if (!crit || !crit.id) continue;
    byId.set(crit.id, crit);
  }
  return Array.from(byId.values());
}

function build() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  const files = fs.readdirSync(ROOT).filter((f) => INPUT_GLOB.test(f));
  const byBase = new Map();
  for (const file of files) {
    const base = file.replace(/\.(docx|md)$/i, "");
    const item = byBase.get(base) || {};
    if (file.toLowerCase().endsWith(".docx")) item.docx = file;
    if (file.toLowerCase().endsWith(".md")) item.md = file;
    byBase.set(base, item);
  }

  const criteria = [];
  for (const [base, pair] of byBase.entries()) {
    const docxPath = pair.docx ? path.join(ROOT, pair.docx) : null;
    const mdPath = pair.md ? path.join(ROOT, pair.md) : null;

    let md = null;
    let sourceType = "md";
    let sourceFile = mdPath ? path.basename(mdPath) : "";

    if (docxPath) {
      md = readDocxAsMarkdown(docxPath);
      sourceType = "docx";
      sourceFile = path.basename(docxPath);
      if (!md && mdPath && fs.existsSync(mdPath)) {
        md = readFileUtf8(mdPath);
        sourceType = "md";
        sourceFile = path.basename(mdPath);
      }
    } else if (mdPath) {
      md = readFileUtf8(mdPath);
      sourceType = "md";
      sourceFile = path.basename(mdPath);
    }

    if (!md) continue;
    let parsed = parseMarkdown(md, {
      type: sourceType,
      filename: sourceFile,
    });

    const needsFallback =
      (!parsed.title || !parsed.questions.length || !parsed.criterionText) &&
      mdPath &&
      sourceType === "docx";

    if (needsFallback) {
      const fallbackMd = readFileUtf8(mdPath);
      parsed = parseMarkdown(fallbackMd, {
        type: "md",
        filename: path.basename(mdPath),
      });
    }

    if (!parsed.title) {
      parsed.title = base.replace(/_/g, " ").trim();
      parsed.id = base.split("_")[0].toUpperCase();
    }

    criteria.push(parsed);
  }

  const admin = readAdminContent();
  const merged = mergeCriteria(criteria, admin ? admin.data : null);

  // Define topic metadata
  const topicDefinitions = {
    'LWP': { id: 'LWP', title: 'Local Wellness Policy' },
    'SHS': { id: 'SHS', title: 'School Health Services' },
    'NFA': { id: 'NFA', title: 'Nutrition & Food Access' },
    'PEA': { id: 'PEA', title: 'Physical Education & Activity' },
    'SWB': { id: 'SWB', title: 'Staff Well-Being' },
    'FCE': { id: 'FCE', title: 'Family & Community Engagement' },
    'SEH': { id: 'SEH', title: 'Social-Emotional Health' },
  };

  // Add topicId to each criterion based on its ID prefix
  const criteriaWithTopics = merged.map((criterion) => {
    const match = criterion.id?.match(/^([A-Z]+)-/);
    const topicId = match ? match[1] : 'unassigned';
    return {
      ...criterion,
      topicId,
    };
  });

  // Sort criteria: first by topicId, then by numeric suffix (e.g., S5 before S11)
  criteriaWithTopics.sort((a, b) => {
    // First sort by topic
    if (a.topicId !== b.topicId) {
      return a.topicId.localeCompare(b.topicId);
    }

    // Within same topic, sort by numeric suffix
    const aMatch = a.id?.match(/S(\d+)$/);
    const bMatch = b.id?.match(/S(\d+)$/);

    if (aMatch && bMatch) {
      const aNum = parseInt(aMatch[1], 10);
      const bNum = parseInt(bMatch[1], 10);
      return aNum - bNum;
    }

    // Fallback to alphabetical
    return (a.id || '').localeCompare(b.id || '');
  });

  // Generate topics array from criteria
  const topicsSet = new Set(criteriaWithTopics.map(c => c.topicId).filter(Boolean));
  const topics = Array.from(topicsSet)
    .map(topicId => topicDefinitions[topicId] || { id: topicId, title: topicId })
    .sort((a, b) => a.title.localeCompare(b.title));

  const output = {
    generatedAt: new Date().toISOString(),
    topics,
    criteria: criteriaWithTopics,
  };

  const outPath = path.join(DATA_DIR, "questions.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), "utf8");
  console.log(`Wrote ${outPath} (${criteria.length} criteria)`);
}

build();

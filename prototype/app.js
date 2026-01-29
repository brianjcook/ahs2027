const state = {
  data: null,
  selectedId: null,
  answers: {},
};

const el = {
  criteriaList: document.getElementById("criteriaList"),
  header: document.getElementById("criterionHeader"),
  questions: document.getElementById("questionsContainer"),
  explainSummary: document.getElementById("explainSummary"),
  explainVisibility: document.getElementById("explainVisibility"),
  explainEligibility: document.getElementById("explainEligibility"),
  status: document.getElementById("dataStatus"),
  timestamp: document.getElementById("dataTimestamp"),
};

function fetchData() {
  return fetch(`../data/questions.json?t=${Date.now()}`)
    .then((res) => res.json())
    .then((data) => {
      const prev = state.data?.generatedAt;
      state.data = data;
      if (!state.selectedId && data.criteria.length) {
        state.selectedId = data.criteria[0].id;
      }
      renderCriteriaList();
      renderCriterion();
      el.status.textContent = "Synced";
      el.timestamp.textContent = `Last updated: ${new Date(data.generatedAt).toLocaleString()}`;
      if (prev && prev !== data.generatedAt) {
        el.status.textContent = "Updated";
      }
    })
    .catch(() => {
      el.status.textContent = "Error loading data";
    });
}

function renderCriteriaList() {
  el.criteriaList.innerHTML = "";
  state.data.criteria.forEach((crit) => {
    const item = document.createElement("div");
    item.className = "criteria-item" + (crit.id === state.selectedId ? " active" : "");
    const status = getCriterionStatus(crit);
    item.innerHTML = `
      <span class="nav-status ${status.className}" aria-hidden="true">${status.icon}</span>
      <span>${crit.id || crit.title}</span>
    `;
    item.addEventListener("click", () => {
      state.selectedId = crit.id;
      renderCriteriaList();
      renderCriterion();
    });
    el.criteriaList.appendChild(item);
  });
}

function ensureAnswers(criterionId) {
  if (!state.answers[criterionId]) state.answers[criterionId] = {};
  return state.answers[criterionId];
}

function getCriterionStatus(crit) {
  const answers = ensureAnswers(crit.id);
  const answeredCount = Object.keys(answers).length;
  if (!answeredCount) {
    return { icon: "−", className: "status-unanswered" };
  }
  const evaluation = evaluateCriterion(crit, answers);
  if (evaluation.eligible) {
    return { icon: "✔", className: "status-eligible" };
  }
  if (evaluation.hardFails.length) {
    return { icon: "✘", className: "status-ineligible" };
  }
  return { icon: "◐", className: "status-in-progress" };
}

function renderCriterion() {
  const crit = state.data.criteria.find((c) => c.id === state.selectedId);
  if (!crit) return;
  const answers = ensureAnswers(crit.id);

  el.header.innerHTML = `
    <h2>${crit.title}</h2>
    <div class="criterion-text">${convertDashListsToUL(crit.criterionText || "")}</div>
  `;

  el.questions.innerHTML = "";
  const visibilityReport = [];
  crit.questions.forEach((q) => {
    const visible = shouldShowQuestion(q, answers);
    if (!visible) {
      visibilityReport.push(q);
      return;
    }
    const card = document.createElement("div");
    card.className = "question-card";

    const titleDiv = document.createElement("div");
    titleDiv.className = "question-title";
    titleDiv.innerHTML = `${q.id}. ${q.text}`;

    if (q.rationales && q.rationales.trim() && q.rationales !== "None provided.") {
      const rationaleLink = document.createElement("a");
      rationaleLink.className = "rationale-link";
      rationaleLink.href = "#";
      rationaleLink.innerHTML = "See rationale &rsaquo;";
      rationaleLink.addEventListener("click", (e) => {
        e.preventDefault();
        showRationaleModal(q);
      });
      titleDiv.appendChild(rationaleLink);
    }

    card.appendChild(titleDiv);
    const optionsWrap = document.createElement("div");
    optionsWrap.className = "options";

    if (q.type === "multi") {
      renderMultiOptions(optionsWrap, crit.id, q, answers);
    } else {
      renderSingleOptions(optionsWrap, crit.id, q, answers);
    }
    card.appendChild(optionsWrap);
    el.questions.appendChild(card);
  });

  renderExplain(crit, answers, visibilityReport);
}

function renderSingleOptions(container, criterionId, q, answers) {
  const name = `${criterionId}-${q.id}`;
  q.options.forEach((opt) => {
    const wrapper = document.createElement("label");
    wrapper.className = "option";
    const input = document.createElement("input");
    input.type = q.type === "evidence" ? "radio" : "radio";
    input.name = name;
    input.value = opt;
    input.checked = answers[q.id]?.value === opt;
    input.addEventListener("change", () => {
      answers[q.id] = { value: opt, otherText: answers[q.id]?.otherText || "" };
      renderCriterion();
    });
    wrapper.appendChild(input);
    wrapper.appendChild(document.createTextNode(opt));
    container.appendChild(wrapper);

    if (q.allowOther && /other\s*\(specify\)/i.test(opt)) {
      const otherInput = document.createElement("input");
      otherInput.type = "text";
      otherInput.placeholder = "Specify other…";
      otherInput.value = answers[q.id]?.otherText || "";
      otherInput.addEventListener("input", (e) => {
        answers[q.id] = {
          value: opt,
          otherText: e.target.value,
        };
      });
      if (answers[q.id]?.value === opt) {
        container.appendChild(otherInput);
      }
    }
  });
}

function renderMultiOptions(container, criterionId, q, answers) {
  const selected = new Set(answers[q.id]?.values || []);
  q.options.forEach((opt) => {
    const wrapper = document.createElement("label");
    wrapper.className = "option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = opt;
    input.checked = selected.has(opt);
    input.addEventListener("change", () => {
      if (input.checked) selected.add(opt);
      else selected.delete(opt);
      answers[q.id] = {
        values: Array.from(selected),
        otherText: answers[q.id]?.otherText || "",
      };
      renderCriterion();
    });
    wrapper.appendChild(input);
    wrapper.appendChild(document.createTextNode(opt));
    container.appendChild(wrapper);
  });

  if (q.allowOther && selected.has(q.options.find((o) => /other\s*\(specify\)/i.test(o)))) {
    const otherInput = document.createElement("input");
    otherInput.type = "text";
    otherInput.placeholder = "Specify other…";
    otherInput.value = answers[q.id]?.otherText || "";
    otherInput.addEventListener("input", (e) => {
      answers[q.id] = {
        values: Array.from(selected),
        otherText: e.target.value,
      };
    });
    container.appendChild(otherInput);
  }
}

function convertDashListsToUL(text) {
  if (!text) return text;

  // Split by lines and identify dash list blocks
  const lines = text.split('\n');
  let result = [];
  let inList = false;
  let listItems = [];

  lines.forEach((line, idx) => {
    const isDashLine = /^\s*-\s+/.test(line);

    if (isDashLine) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      // Extract the content after the dash
      listItems.push(line.replace(/^\s*-\s+/, '').trim());
    } else {
      if (inList) {
        // End of list, output the <ul>
        result.push('<ul>');
        listItems.forEach(item => {
          result.push(`<li>${item}</li>`);
        });
        result.push('</ul>');
        inList = false;
        listItems = [];
      }
      if (line.trim()) {
        result.push(line);
      }
    }
  });

  // Handle list at end of text
  if (inList) {
    result.push('<ul>');
    listItems.forEach(item => {
      result.push(`<li>${item}</li>`);
    });
    result.push('</ul>');
  }

  return result.join('\n');
}

function shouldShowQuestion(q, answers) {
  if (!q.showIf || !q.showIf.length) return true;
  return q.showIf.every((rule) => {
    const answer = answers[rule.id];
    if (!answer) return false;
    if (rule.equals !== undefined) {
      return answer.value === rule.equals;
    }
    if (rule.includes !== undefined) {
      if (Array.isArray(answer.values)) return answer.values.includes(rule.includes);
      return false;
    }
    return false;
  });
}

function renderExplain(crit, answers, hiddenQuestions) {
  const summary = [];
  const answeredCount = crit.questions.filter((q) => answers[q.id]).length;
  summary.push(`Answered ${answeredCount} of ${crit.questions.length} questions.`);
  if (crit.rules && crit.rules.length) {
    summary.push("Question flow is driven by explicit rules.");
  } else {
    summary.push("Question flow is driven by key eligibility checks.");
  }
  el.explainSummary.textContent = summary.join(" ");

  const visibilityList = crit.questions.map((q) => {
    const rules = (q.showIf || []).map((r) => {
      if (r.equals !== undefined) return `${r.id} = "${r.equals}"`;
      if (r.includes !== undefined) return `${r.id} includes "${r.includes}"`;
      return "";
    }).filter(Boolean);
    const visible = shouldShowQuestion(q, answers);
    const status = visible ? "visible" : "hidden";
    const mark = visible ? "✔" : "✘";
    const conditionText = rules.length ? `— ${rules.join(" and ")}` : "— always shown";
    return `<li class="visibility-item ${status}"><span class="vis-mark">${mark}</span><span>${q.id} ${conditionText}</span></li>`;
  });
  el.explainVisibility.innerHTML = `
    <strong>Question Visibility</strong>
    <ul>${visibilityList.join("")}</ul>
  `;

  const evaluation = evaluateCriterion(crit, answers);
  const statusInfo = getEligibilityStatusInfo(crit, answers, evaluation);
  const requiredHtml = buildRequirementChecklist(crit.scoring.required || [], evaluation.requiredMissing);
  const hardFailHtml = evaluation.hardFails.length
    ? `<ul>${evaluation.hardFails.map((h) => `<li>${h}</li>`).join("")}</ul>`
    : "<div>No automatic disqualifiers triggered.</div>";

  el.explainEligibility.innerHTML = `
    <strong>Eligibility status</strong>
    <div class="eligibility-status ${statusInfo.className}">
      <span class="eligibility-icon">${statusInfo.icon}</span>
      ${statusInfo.label}
    </div>
    <div class="explain-sub">Automatic disqualifiers:</div>
    ${hardFailHtml}
    <div class="explain-sub">Required items checklist:</div>
    ${requiredHtml}
  `;
}

function getEligibilityStatusInfo(crit, answers, evaluation) {
  const answeredCount = Object.keys(answers).length;
  if (!answeredCount) {
    return { label: "Unanswered", icon: "−", className: "status-unanswered" };
  }
  if (evaluation.eligible) {
    return { label: "Eligible", icon: "✔", className: "status-eligible" };
  }
  if (evaluation.hardFails.length) {
    return { label: "Not eligible", icon: "✘", className: "status-ineligible" };
  }
  return { label: "In progress", icon: "◐", className: "status-in-progress" };
}

function evaluateCriterion(crit, answers) {
  const hardFailRules = parseHardFailRules(crit.scoring.hardFail || []);
  const requiredRules = parseRequiredRules(crit.scoring.required || []);
  const hardFails = [];
  const requiredMissing = [];

  hardFailRules.forEach((rule) => {
    if (evaluateRule(rule, answers, true)) {
      hardFails.push(rule.raw);
    }
  });

  requiredRules.forEach((rule) => {
    if (!evaluateRule(rule, answers, false)) {
      requiredMissing.push(rule.raw);
    }
  });

  return {
    eligible: hardFails.length === 0 && requiredMissing.length === 0,
    hardFails,
    requiredMissing,
  };
}

function parseHardFailRules(lines) {
  const rules = [];
  lines.forEach((line) => {
    const clean = normalizeRuleLine(line);
    let match = clean.match(/^Any of (Q\d+)\s+through\s+(Q\d+)\s+is\s+"([^"]+)"/i);
    if (match) {
      const start = parseInt(match[1].slice(1), 10);
      const end = parseInt(match[2].slice(1), 10);
      const value = normalizeRuleValue(match[3]);
      for (let i = start; i <= end; i++) {
        rules.push({ id: `Q${i}`, op: "equals", value, raw: line });
      }
      return;
    }
    match = clean.match(/^(Q\d+)\s+is\s+"([^"]+)"(?:\s+or\s+"([^"]+)")?/i);
    if (match) {
      const values = [match[2], match[3]].filter(Boolean).map(normalizeRuleValue);
      rules.push({ id: match[1], op: "equalsAny", value: values, raw: line });
      return;
    }
    match = clean.match(/^(Q\d+)\s+is\s+not\s+"([^"]+)"/i);
    if (match) {
      rules.push({ id: match[1], op: "notEquals", value: normalizeRuleValue(match[2]), raw: line });
    }
  });
  return rules;
}

function parseRequiredRules(lines) {
  const rules = [];
  lines.forEach((line) => {
    const clean = normalizeRuleLine(line);
    let match = clean.match(/^(Q\d+)\s+includes\s+at\s+least\s+(\d+)/i);
    if (match) {
      rules.push({ id: match[1], op: "minIncludes", value: parseInt(match[2], 10), raw: line });
      return;
    }
    match = clean.match(/^(Q\d+)\s+includes\s+"([^"]+)"/i);
    if (match) {
      rules.push({ id: match[1], op: "includes", value: normalizeRuleValue(match[2]), raw: line });
      return;
    }
    match = clean.match(/^(Q\d+)\s+has\s+one\s+evidence\s+item\s+provided/i);
    if (match) {
      rules.push({ id: match[1], op: "hasAnswer", value: true, raw: line });
      return;
    }
    match = clean.match(/^(Q\d+)\s+includes\s+at\s+least\s+1\s+active\s+matching\s+method\s+\((.+)\)/i);
    if (match) {
      const options = match[2].split(",").map((s) => normalizeRuleValue(s.trim()));
      rules.push({ id: match[1], op: "includesAny", value: options, raw: line });
      return;
    }
  });
  return rules;
}

function evaluateRule(rule, answers, isHardFail) {
  const answer = answers[rule.id];
  if (!answer) return false;
  const value = answer.value;
  const values = answer.values || [];
  const effectiveValue = value || (values.length === 1 ? values[0] : null);

  switch (rule.op) {
    case "equals":
      return effectiveValue === rule.value;
    case "equalsAny":
      return effectiveValue ? rule.value.includes(effectiveValue) : false;
    case "notEquals":
      return effectiveValue !== rule.value;
    case "minIncludes":
      return values.length >= rule.value;
    case "includes":
      return values.includes(rule.value);
    case "includesAny":
      return values.some((v) => rule.value.includes(v));
    case "hasAnswer":
      return !!value || values.length > 0;
    default:
      return isHardFail ? false : true;
  }
}

function buildRequirementChecklist(requiredLines, missing) {
  if (!requiredLines.length) return "<div>No required items listed.</div>";
  const missingSet = new Set(missing);
  const rows = requiredLines.map((line) => {
    const ok = !missingSet.has(line);
    const mark = ok ? "✔" : "✘";
    const status = ok ? "visible" : "hidden";
    return `<li class="requirements-list-item ${status}"><span class="vis-mark">${mark}</span><span>${line}</span></li>`;
  });
  return `<ul class="requirements-list">${rows.join("")}</ul>`;
}

function normalizeRuleLine(line) {
  return line
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/\.\s*$/g, "")
    .trim();
}

function normalizeRuleValue(value) {
  return value.replace(/\.$/, "").trim();
}

function parseRationaleToList(rationaleText) {
  if (!rationaleText || rationaleText.trim() === "") return "";

  // Match pattern: "Expert name: rationale text until next expert or end"
  // Lookahead finds next expert (capital letter + text + colon) or end of string
  const pattern = /([A-Za-z][^:]*?):\s*([^]*?)(?=\s+[A-Z][^:]+:|$)/g;
  const matches = [...rationaleText.matchAll(pattern)];

  if (matches.length === 0) {
    // If no matches, return the original text
    return rationaleText;
  }

  const items = matches.map(match => {
    const expert = match[1].trim();
    const rationale = match[2].trim();
    return `<li><strong>${expert}:</strong> ${rationale}</li>`;
  });

  return `<ul>${items.join("")}</ul>`;
}

function showRationaleModal(question) {
  // Remove existing modal if any
  const existing = document.getElementById("rationaleModal");
  if (existing) existing.remove();

  const rationaleHtml = parseRationaleToList(question.rationales);

  // Create modal
  const modal = document.createElement("div");
  modal.id = "rationaleModal";
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Rationale: ${question.id}</h3>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="modal-question">${question.text}</div>
        <div class="modal-rationale">${rationaleHtml}</div>
      </div>
    </div>
  `;

  // Close handlers
  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  // Escape key handler
  const escHandler = (e) => {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", escHandler);
    }
  };
  document.addEventListener("keydown", escHandler);

  document.body.appendChild(modal);
}

fetchData();
setInterval(fetchData, 5000);

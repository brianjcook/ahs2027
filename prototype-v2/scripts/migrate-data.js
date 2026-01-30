/**
 * Data Migration Script
 * Converts to new format with:
 * - Unique question IDs (Q001, Q002, etc.)
 * - Topics with structured hierarchy
 * - Structured scoring rules
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../../data/questions.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Define topics based on Award Guide
const topics = [
  {
    id: "T001",
    title: "Local Wellness Policy",
    description: "Standards related to wellness policy development, implementation, and assessment"
  },
  {
    id: "T002",
    title: "School Health Services",
    description: "Standards related to health services and health promotion"
  },
  {
    id: "T003",
    title: "Physical Education",
    description: "Standards related to physical education curriculum and instruction"
  },
  {
    id: "T004",
    title: "Physical Activity",
    description: "Standards related to physical activity opportunities and promotion"
  },
  {
    id: "T005",
    title: "Health Education",
    description: "Standards related to health education curriculum and instruction"
  }
];

// Map criterion IDs to topic IDs
const criterionToTopic = {
  'LWP': 'T001',
  'SHS': 'T002',
  'PE': 'T003',
  'PA': 'T004',
  'HE': 'T005'
};

// Generate unique question IDs
let questionCounter = 1;
const questionIdMap = {}; // Maps old ID (criterion + local ID) -> new ID

// First pass: Generate unique IDs for all questions
data.criteria.forEach(criterion => {
  criterion.questions.forEach(question => {
    const oldKey = `${criterion.id}_${question.id}`;
    const newId = `Q${String(questionCounter).padStart(3, '0')}`;
    questionIdMap[oldKey] = newId;
    questionCounter++;
  });
});

// Second pass: Update questions with new IDs and fix references
data.criteria.forEach(criterion => {
  // Add topicId to criterion
  const prefix = criterion.id.split('-')[0];
  criterion.topicId = criterionToTopic[prefix] || 'T001';

  // Update question IDs and conditional logic
  criterion.questions.forEach(question => {
    const oldKey = `${criterion.id}_${question.id}`;
    question.id = questionIdMap[oldKey];

    // Update showIf conditions
    if (question.showIf && Array.isArray(question.showIf)) {
      question.showIf.forEach(condition => {
        const oldConditionKey = `${criterion.id}_${condition.id}`;
        if (questionIdMap[oldConditionKey]) {
          condition.id = questionIdMap[oldConditionKey];
        }
      });
    }

    // Update repeatedFor if present
    if (question.repeatedFor) {
      const oldRepeatedKey = `${criterion.id}_${question.repeatedFor}`;
      if (questionIdMap[oldRepeatedKey]) {
        question.repeatedFor = questionIdMap[oldRepeatedKey];
      }
    }
  });

  // Convert scoring rules to structured format
  if (criterion.scoring) {
    criterion.scoring.hardFail = convertRulesToStructured(criterion.scoring.hardFail || [], criterion.id, questionIdMap);
    criterion.scoring.required = convertRulesToStructured(criterion.scoring.required || [], criterion.id, questionIdMap);
  }
});

// Add topics to data
data.topics = topics;

// Save migrated data
const outputPath = path.join(__dirname, '../../data/questions-migrated.json');
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log('✅ Migration complete!');
console.log(`   Total questions: ${questionCounter - 1}`);
console.log(`   Topics: ${topics.length}`);
console.log(`   Output: ${outputPath}`);

/**
 * Convert text-based rules to structured format
 */
function convertRulesToStructured(rules, criterionId, idMap) {
  return rules.filter(rule => {
    // Filter out "None." entries
    if (rule === 'None.' || rule === 'None') return false;
    return true;
  }).map(rule => {
    // Parse different rule patterns

    // Pattern: "Q1 is "Value.""
    let match = rule.match(/^Q(\d+) is "([^"]+)\.?"$/);
    if (match) {
      const oldKey = `${criterionId}_Q${match[1]}`;
      return {
        questionId: idMap[oldKey] || `Q${match[1]}`,
        operator: 'equals',
        value: match[2],
        description: rule
      };
    }

    // Pattern: "Q1 is not "Value.""
    match = rule.match(/^Q(\d+) is not "([^"]+)\.?"$/);
    if (match) {
      const oldKey = `${criterionId}_Q${match[1]}`;
      return {
        questionId: idMap[oldKey] || `Q${match[1]}`,
        operator: 'notEquals',
        value: match[2],
        description: rule
      };
    }

    // Pattern: "Any of Q1 through Q7 is "No.""
    match = rule.match(/^Any of Q(\d+) through Q(\d+) is "([^"]+)\.?"$/);
    if (match) {
      const start = parseInt(match[1]);
      const end = parseInt(match[2]);
      const questionIds = [];
      for (let i = start; i <= end; i++) {
        const oldKey = `${criterionId}_Q${i}`;
        questionIds.push(idMap[oldKey] || `Q${i}`);
      }
      return {
        questionIds: questionIds,
        operator: 'anyEquals',
        value: match[3],
        description: rule
      };
    }

    // Pattern: "Q5 includes at least 3 roles."
    match = rule.match(/^Q(\d+) includes at least (\d+)/);
    if (match) {
      const oldKey = `${criterionId}_Q${match[1]}`;
      return {
        questionId: idMap[oldKey] || `Q${match[1]}`,
        operator: 'includesMinimum',
        minimumCount: parseInt(match[2]),
        description: rule
      };
    }

    // Pattern: "Q8 has one evidence item provided."
    match = rule.match(/^Q(\d+) has .* provided/);
    if (match) {
      const oldKey = `${criterionId}_Q${match[1]}`;
      return {
        questionId: idMap[oldKey] || `Q${match[1]}`,
        operator: 'isAnswered',
        description: rule
      };
    }

    // Pattern: "Q1 includes at least 3 situations (excluding "We don't provide"), OR Q1 selects only "We don't provide" and Q1a is completed."
    if (rule.includes(' OR ')) {
      return {
        operator: 'complex',
        rule: rule,
        description: rule
      };
    }

    // Default: keep as text for manual review
    return {
      operator: 'text',
      rule: rule,
      description: rule
    };
  });
}

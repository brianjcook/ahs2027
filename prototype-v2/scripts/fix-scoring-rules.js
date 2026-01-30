/**
 * Fix Scoring Rules
 * Remove trailing periods from values that don't match options
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../../data/questions.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

let fixCount = 0;

// Fix all criteria
data.criteria.forEach(criterion => {
  if (!criterion.scoring) return;

  // Fix hard-fail rules
  if (criterion.scoring.hardFail) {
    criterion.scoring.hardFail.forEach(rule => {
      if (rule.value && rule.value.endsWith('.')) {
        const withoutPeriod = rule.value.slice(0, -1);
        // Check if any question has this option without period
        const question = criterion.questions.find(q => q.id === rule.questionId);
        if (question && question.options && question.options.includes(withoutPeriod)) {
          console.log(`Fixing ${criterion.id} ${rule.questionId}: "${rule.value}" → "${withoutPeriod}"`);
          rule.value = withoutPeriod;
          fixCount++;
        }
      }
    });
  }

  // Fix required rules
  if (criterion.scoring.required) {
    criterion.scoring.required.forEach(rule => {
      if (rule.value && rule.value.endsWith('.')) {
        const withoutPeriod = rule.value.slice(0, -1);
        const question = criterion.questions.find(q => q.id === rule.questionId);
        if (question && question.options && question.options.includes(withoutPeriod)) {
          console.log(`Fixing ${criterion.id} ${rule.questionId}: "${rule.value}" → "${withoutPeriod}"`);
          rule.value = withoutPeriod;
          fixCount++;
        }
      }
    });
  }
});

// Save updated data
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`✅ Fixed ${fixCount} scoring rule values!`);

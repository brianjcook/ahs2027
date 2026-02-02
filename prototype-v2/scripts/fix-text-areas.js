/**
 * Fix Text Area Questions
 * Convert "single" questions with "Text area" option to "text" type
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
  criterion.questions.forEach(question => {
    // Check if it's a single-select with only "Text area" option
    if (question.type === 'single' &&
        question.options &&
        question.options.length === 1 &&
        question.options[0].toLowerCase().includes('text area')) {

      console.log(`Fixing ${criterion.id} ${question.id}: Converting to text type`);
      question.type = 'text';
      question.multiline = true;
      delete question.options;
      delete question.allowOther;
      fixCount++;
    }
  });
});

// Save updated data
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`✅ Fixed ${fixCount} text area questions!`);

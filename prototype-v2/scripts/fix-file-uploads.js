/**
 * Fix File Upload Questions
 * Convert "single" questions with "File upload" option to "evidence" type
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
    // Check if it's a single-select with only "File upload" option
    if (question.type === 'single' &&
        question.options &&
        question.options.length === 1 &&
        question.options[0].toLowerCase().includes('file upload')) {

      console.log(`Fixing ${criterion.id} ${question.id}: Converting to evidence type`);
      question.type = 'evidence';
      question.options = ['File upload'];
      fixCount++;
    }
  });
});

// Save updated data
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`✅ Fixed ${fixCount} file upload questions!`);

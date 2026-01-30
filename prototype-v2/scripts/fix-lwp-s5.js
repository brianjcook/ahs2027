/**
 * Fix LWP-S5 Questions
 * Corrects Q027 and Q028 conditional logic and question types
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../../data/questions.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Find LWP-S5 criterion
const lwpS5 = data.criteria.find(c => c.id === 'LWP-S5');

if (lwpS5) {
  // Fix Q027 - Should be text area with conditional
  const q027 = lwpS5.questions.find(q => q.id === 'Q027');
  if (q027) {
    q027.text = "Please explain your school's approach to not providing foods or beverages.";
    q027.type = "text";
    q027.multiline = true;
    delete q027.options;
    q027.showIf = [
      {
        id: "Q026",
        includes: "We don't provide foods or beverages at our school"
      }
    ];
    console.log('✅ Fixed Q027');
  }

  // Fix Q028 - Should be repeated question
  const q028 = lwpS5.questions.find(q => q.id === 'Q028');
  if (q028) {
    q028.text = "How does your school ensure compliance with Smart Snacks standards for this situation?";
    q028.type = "multi";
    q028.repeatedFor = "Q026";
    q028.showIf = [
      {
        id: "Q026",
        operator: "notIncludes",
        value: "We don't provide foods or beverages at our school"
      }
    ];
    console.log('✅ Fixed Q028');
  }
}

// Save updated data
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('✅ LWP-S5 questions fixed!');

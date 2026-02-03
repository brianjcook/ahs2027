const fs = require('fs');

// Read the questions file
const data = JSON.parse(fs.readFileSync('./data/questions.json', 'utf8'));

// Define questions for PEA criteria
const peaQuestions = {
  "PEA-S8": "To what extent does your school provide physical education?",
  "PEA-S9": "To what extent do physical education teachers use a sequential physical education curriculum at your school?",
  "PEA-S11": "To what extent are students provided opportunities for physical activity during the school day?",
  "PEA-S13": "To what extent does your school address physical activity and disciplinary practices?",
  "PEA-S14": "To what extent are your school's facilities open outside of school hours?",
  "PEA-S15": "To what extent does your school have a process in place to collaborate with community organizations to support physical activity for students?",
  "PEA-S16": "To what extent does your school support active transportation initiatives?"
};

// Update PEA criteria with questions
let count = 0;
for (const criterion of data.criteria) {
  if (peaQuestions[criterion.id]) {
    criterion.question = peaQuestions[criterion.id];
    count++;
  }
}

// Write back to file
fs.writeFileSync('./data/questions.json', JSON.stringify(data, null, 2), 'utf8');

console.log(`Added questions to ${count} PEA criteria`);

# Conditional Logic System

## Overview

The application implements a sophisticated conditional logic system that controls question visibility based on user answers. This enables dynamic, branching forms where questions appear or hide based on previous responses.

## Core Concepts

### 1. The `showIf` Property

Questions can include a `showIf` array that defines conditions for visibility:

```json
{
  "id": "Q2",
  "text": "Follow-up question?",
  "showIf": [
    { "id": "Q1", "equals": "Yes" }
  ]
}
```

This question only appears if Q1's answer equals "Yes".

### 2. Conditional Operators

The system supports two conditional operators:

#### `equals` - Exact Match

Shows question if the referenced question's answer exactly matches the specified value.

**Use case**: Boolean or single-select questions

```json
{
  "showIf": [
    { "id": "Q1", "equals": "Yes" }
  ]
}
```

**Examples**:
- Show Q2 only if Q1 = "Yes"
- Show Q5 only if Q3 = "This school year"
- Show Q10 only if Q7 = "Option A"

#### `includes` - Array Contains

Shows question if the referenced question's answer (array) includes the specified value.

**Use case**: Multi-select questions

```json
{
  "showIf": [
    { "id": "Q5", "includes": "School meals" }
  ]
}
```

**Examples**:
- Show Q6 only if Q5 includes "School meals"
- Show Q8 only if Q2 includes "Classroom parties"

### 3. Multiple Conditions (AND Logic)

Questions can have multiple conditions that ALL must be true:

```json
{
  "showIf": [
    { "id": "Q1", "equals": "Yes" },
    { "id": "Q2", "includes": "Option A" }
  ]
}
```

This question only shows if:
- Q1 = "Yes" **AND**
- Q2 includes "Option A"

**Note**: There is currently no OR logic. All conditions must be satisfied.

## Dynamic Question Repetition (`repeatedFor`)

### Overview

The `repeatedFor` property creates multiple instances of a question, one for each selected option in a multi-select question.

### Use Case: Per-Situation Questions (LWP-S5)

**Scenario**: Ask how compliance is ensured for each situation where food is provided.

**Q1** (Multi-select):
```json
{
  "id": "Q1",
  "text": "In which situations does your school provide foods?",
  "type": "multi",
  "options": [
    "Classroom rewards",
    "Classroom parties",
    "School celebrations",
    "After-school programs"
  ]
}
```

**Q2** (Repeated question):
```json
{
  "id": "Q2",
  "text": "How do you ensure compliance for {situation}?",
  "type": "multi",
  "repeatedFor": "Q1",
  "options": [
    "Written policy",
    "Staff training",
    "Approved foods list",
    "Pre-approval process"
  ]
}
```

### How It Works

1. User selects options in Q1: ["Classroom parties", "School celebrations"]
2. System generates Q2 twice:
   - **Q2_Classroom_parties**: "How do you ensure compliance for Classroom parties?"
   - **Q2_School_celebrations**: "How do you ensure compliance for School celebrations?"
3. Each instance stores answers independently
4. Eligibility checks ensure all repeated questions are answered

### Implementation Details

#### Generated Question IDs

```javascript
// Original question ID: "Q2"
// Selected option: "Classroom parties"
// Generated ID: "Q2_Classroom_parties"

const generatedId = `${questionId}_${optionValue.replace(/\s+/g, '_')}`;
```

#### Text Interpolation

The `{situation}` placeholder is replaced with the actual option text:

```javascript
// Template: "How do you ensure compliance for {situation}?"
// Option: "Classroom parties"
// Result: "How do you ensure compliance for Classroom parties?"

const interpolatedText = questionText.replace(/{situation}/g, optionText);
```

#### Answer Storage

Answers are stored with the generated ID:

```javascript
answers = {
  "Q1": ["Classroom parties", "School celebrations"],
  "Q2_Classroom_parties": ["Written policy", "Staff training"],
  "Q2_School_celebrations": ["Approved foods list"]
}
```

### Conditional Logic with Repeated Questions

Repeated questions can also use `showIf` to hide themselves:

```json
{
  "id": "Q2",
  "text": "How do you ensure compliance for {situation}?",
  "type": "multi",
  "repeatedFor": "Q1",
  "showIf": [
    { "id": "Q1", "excludes": "We don't provide foods" }
  ],
  "options": ["Policy", "Training", "Checklist"]
}
```

This repeats Q2 for each Q1 selection EXCEPT "We don't provide foods".

**Note**: `excludes` operator is not yet implemented but shown as future enhancement.

## Advanced Patterns

### Pattern 1: Gating Question

Hide all follow-up questions if initial answer is "No":

```json
[
  {
    "id": "Q1",
    "text": "Do you have a policy?",
    "type": "boolean",
    "options": ["Yes", "No"]
  },
  {
    "id": "Q2",
    "text": "When was it adopted?",
    "type": "single",
    "showIf": [{ "id": "Q1", "equals": "Yes" }],
    "options": ["This year", "Last year", "2+ years ago"]
  },
  {
    "id": "Q3",
    "text": "How is it communicated?",
    "type": "multi",
    "showIf": [{ "id": "Q1", "equals": "Yes" }],
    "options": ["Website", "Newsletter", "Email"]
  }
]
```

### Pattern 2: Cascading Conditions

Chain conditions where Q3 depends on Q2, which depends on Q1:

```json
[
  {
    "id": "Q1",
    "type": "boolean",
    "options": ["Yes", "No"]
  },
  {
    "id": "Q2",
    "type": "single",
    "showIf": [{ "id": "Q1", "equals": "Yes" }],
    "options": ["Option A", "Option B"]
  },
  {
    "id": "Q3",
    "type": "multi",
    "showIf": [
      { "id": "Q1", "equals": "Yes" },
      { "id": "Q2", "equals": "Option A" }
    ],
    "options": ["Sub-option 1", "Sub-option 2"]
  }
]
```

### Pattern 3: Multi-Select Branching

Show different follow-ups based on which options are selected:

```json
[
  {
    "id": "Q1",
    "type": "multi",
    "options": ["School meals", "Vending", "School store"]
  },
  {
    "id": "Q2_meals",
    "text": "Details about school meals?",
    "showIf": [{ "id": "Q1", "includes": "School meals" }]
  },
  {
    "id": "Q2_vending",
    "text": "Details about vending?",
    "showIf": [{ "id": "Q1", "includes": "Vending" }]
  },
  {
    "id": "Q2_store",
    "text": "Details about school store?",
    "showIf": [{ "id": "Q1", "includes": "School store" }]
  }
]
```

### Pattern 4: Exception Handling with Text Input

Show text input for "Other" selections:

```json
[
  {
    "id": "Q1",
    "type": "multi",
    "options": ["Option A", "Option B", "Other"],
    "allowOther": false
  },
  {
    "id": "Q1a",
    "text": "Please specify 'Other':",
    "type": "text",
    "showIf": [{ "id": "Q1", "includes": "Other" }]
  }
]
```

## Implementation Reference

### Evaluation Function

```javascript
/**
 * Evaluates whether a question should be shown based on current answers
 * @param {Object} question - Question object with showIf rules
 * @param {Object} answers - Current form answers
 * @returns {boolean} - True if question should be shown
 */
function shouldShowQuestion(question, answers) {
  // No showIf means always show
  if (!question.showIf || question.showIf.length === 0) {
    return true;
  }

  // All conditions must be true (AND logic)
  return question.showIf.every((rule) => {
    const refAnswer = answers[rule.id];

    // No answer yet means don't show
    if (refAnswer === undefined || refAnswer === null) {
      return false;
    }

    // Handle "equals" operator
    if (rule.equals !== undefined) {
      return refAnswer === rule.equals;
    }

    // Handle "includes" operator (for multi-select)
    if (rule.includes !== undefined) {
      return Array.isArray(refAnswer) && refAnswer.includes(rule.includes);
    }

    return false;
  });
}
```

### Repeated Question Generator

```javascript
/**
 * Generates repeated question instances based on multi-select answer
 * @param {Object} question - Question with repeatedFor property
 * @param {Object} answers - Current form answers
 * @returns {Array} - Array of generated question objects
 */
function generateRepeatedQuestions(question, answers) {
  if (!question.repeatedFor) {
    return [question];
  }

  const refAnswer = answers[question.repeatedFor];

  // No selections yet, don't generate
  if (!Array.isArray(refAnswer) || refAnswer.length === 0) {
    return [];
  }

  // Generate one question per selected option
  return refAnswer.map((option) => {
    const generatedId = `${question.id}_${option.replace(/\s+/g, '_')}`;
    return {
      ...question,
      id: generatedId,
      text: question.text.replace(/{situation}/g, option),
      originalId: question.id,
      situationValue: option
    };
  });
}
```

## Testing Conditional Logic

### Test Cases

1. **Simple equals condition**
   - Set Q1 = "Yes", verify Q2 appears
   - Set Q1 = "No", verify Q2 disappears

2. **Simple includes condition**
   - Select "Option A" in Q1, verify Q2 appears
   - Deselect "Option A", verify Q2 disappears

3. **Multiple AND conditions**
   - Set Q1 = "Yes" only, verify Q3 does NOT appear
   - Set Q1 = "Yes" AND Q2 = "Option A", verify Q3 appears

4. **Repeated questions**
   - Select 2 options in Q1, verify 2 instances of Q2 appear
   - Deselect 1 option, verify only 1 instance remains
   - Select 0 options, verify no Q2 instances appear

5. **Cascading conditions**
   - Set Q1 = "No", verify Q2 and Q3 both disappear
   - Set Q1 = "Yes", set Q2 = "No", verify Q3 disappears
   - Set Q1 = "Yes", set Q2 = "Yes", verify Q3 appears

## Future Enhancements

### Potential Additions

1. **OR Logic**
   ```json
   {
     "showIfAny": [
       { "id": "Q1", "equals": "Yes" },
       { "id": "Q2", "equals": "Yes" }
     ]
   }
   ```

2. **NOT/Excludes Operator**
   ```json
   {
     "showIf": [
       { "id": "Q1", "excludes": "None" }
     ]
   }
   ```

3. **Comparison Operators**
   ```json
   {
     "showIf": [
       { "id": "Q1", "greaterThan": 5 }
     ]
   }
   ```

4. **Complex Expressions**
   ```json
   {
     "showIf": "(Q1 = 'Yes' AND Q2 = 'Yes') OR Q3 = 'Maybe'"
   }
   ```

## Troubleshooting

### Question Not Appearing

**Check**:
1. Are all `showIf` conditions met?
2. Is the referenced question ID correct?
3. Has the referenced question been answered?
4. Is the comparison value exact (case-sensitive)?

### Question Not Disappearing

**Check**:
1. Is the answer being properly cleared when conditions change?
2. Is the component re-rendering on answer updates?
3. Are there multiple conflicting `showIf` rules?

### Repeated Questions Not Generating

**Check**:
1. Is `repeatedFor` pointing to a multi-select question?
2. Has the multi-select question been answered?
3. Are any options selected?
4. Is the question ID generator creating valid IDs?

---

**Last Updated**: 2026-01-29
**Version**: 2.0

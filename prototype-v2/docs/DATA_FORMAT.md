# Question Data Format

## Overview

This document defines the JSON schema for questions, criteria, and eligibility rules used by the application.

## Top-Level Structure

```json
{
  "criteria": [
    {
      "id": "LWP-S1",
      "title": "Criterion Title",
      "description": "Criterion description...",
      "questions": [ /* Question objects */ ],
      "eligibility": { /* Eligibility rules */ }
    }
  ]
}
```

## Criterion Object

```json
{
  "id": "string",              // Unique criterion identifier (e.g., "LWP-S1")
  "title": "string",           // Display title
  "description": "string",     // HTML/Markdown description
  "questions": [Question],     // Array of question objects
  "eligibility": Eligibility   // Eligibility rules object
}
```

## Question Object

### Base Properties

All questions share these properties:

```json
{
  "id": "string",              // Unique question ID within criterion (e.g., "Q1")
  "text": "string",            // Question text displayed to user
  "type": "string",            // Question type (see types below)
  "rationales": "string",      // Optional: Expert rationale text
  "citations": "string",       // Optional: Citation or reference text
  "showIf": [ConditionalRule], // Optional: Conditional display rules
  "repeatedFor": "string"      // Optional: ID of multi-select question to repeat for
}
```

### Question Types

#### 1. Boolean Question

Yes/No questions.

```json
{
  "id": "Q1",
  "text": "Does your school have a policy?",
  "type": "boolean",
  "options": ["Yes", "No"]
}
```

**Answer format**: `"Yes"` or `"No"` (string)

#### 2. Single-Select Question

Choose one option from a list (radio buttons).

```json
{
  "id": "Q2",
  "text": "When was the policy adopted?",
  "type": "single",
  "options": [
    "This school year",
    "Last school year",
    "2+ years ago"
  ]
}
```

**Answer format**: Single string from options array

#### 3. Multi-Select Question

Choose multiple options from a list (checkboxes).

```json
{
  "id": "Q3",
  "text": "Which situations apply?",
  "type": "multi",
  "options": [
    "Classroom rewards",
    "Classroom parties",
    "School celebrations"
  ],
  "allowOther": false          // Optional: Allow "Other (specify)" option
}
```

**Answer format**: Array of strings from options array
- Example: `["Classroom rewards", "School celebrations"]`

**With "Other" option**:
```json
{
  "type": "multi",
  "options": ["Option A", "Option B"],
  "allowOther": true
}
```

Answer includes "Other" with text:
```json
{
  "Q3": ["Option A", "Other"],
  "Q3_other": "User-specified text here"
}
```

#### 4. Evidence Question

File upload or link submission.

```json
{
  "id": "Q4",
  "text": "Evidence (choose one)",
  "type": "evidence",
  "options": [
    "Upload policy document",
    "Upload assessment results",
    "Provide a link to the document"
  ]
}
```

**Answer format**: Object with type and value
```json
{
  "Q4": {
    "type": "Upload policy document",
    "value": "file-object-or-url"
  }
}
```

#### 5. Text Question

Free-form text input.

```json
{
  "id": "Q1a",
  "text": "Please explain your situation:",
  "type": "text",
  "multiline": true            // Optional: Use textarea instead of input
}
```

**Answer format**: String
- Example: `"User entered text here"`

### Conditional Rules

Questions can be conditionally shown using `showIf`:

```json
{
  "id": "Q2",
  "text": "Follow-up question",
  "showIf": [
    { "id": "Q1", "equals": "Yes" },
    { "id": "Q3", "includes": "Option A" }
  ]
}
```

**ConditionalRule Object**:
```json
{
  "id": "string",              // Question ID to check
  "equals": "string",          // Optional: Answer must equal this value
  "includes": "string"         // Optional: Answer array must include this value
}
```

**Logic**: All rules in `showIf` array must be true (AND logic).

### Repeated Questions

Questions can be repeated for each selected option in a multi-select question:

```json
{
  "id": "Q2",
  "text": "How do you ensure compliance for {situation}?",
  "type": "multi",
  "repeatedFor": "Q1",         // Repeat for each Q1 selection
  "options": [
    "Written policy",
    "Staff training"
  ]
}
```

**Generated IDs**: `Q2_Classroom_parties`, `Q2_School_celebrations`, etc.

**Text interpolation**: `{situation}` replaced with option text

## Eligibility Object

```json
{
  "hardFail": [
    "Q1 is \"No\"",
    "Q3 is \"More than 3 years ago\""
  ],
  "required": [
    "Q2 includes at least 1 tool",
    "Q5 has one evidence item provided"
  ],
  "decision": "Eligible if all required combinations are true and no hard-fail conditions are met."
}
```

### Eligibility Properties

#### `hardFail` (Array of strings)

Conditions that automatically disqualify a criterion.

**Supported patterns**:
- Simple equality: `"Q1 is \"Yes\""`
- Negative: `"Q1 is not \"Yes\""`
- Range: `"Any of Q1 through Q5 is \"No\""`
- Or: `"Q1 is \"X\" or \"Y\""`

#### `required` (Array of strings)

Conditions that must all be met for eligibility.

**Supported patterns**:
- Minimum count: `"Q2 includes at least 3 venues"`
- Has value: `"Q5 has one evidence item provided"`
- Inclusion: `"Q1 includes at least 1 active matching method"`

#### `decision` (String)

Human-readable description of the eligibility decision logic.

## Complete Example

```json
{
  "criteria": [
    {
      "id": "LWP-S2",
      "title": "Measure Progress on Wellness Policy Implementation",
      "description": "<p>Our school uses an evidence-based assessment tool...</p>",
      "questions": [
        {
          "id": "Q1",
          "text": "Does your school use an evidence-based assessment tool?",
          "type": "boolean",
          "options": ["Yes", "No"],
          "rationales": "Local Wellness Policy expert: Confirms the required measurement practice exists...",
          "citations": "None provided."
        },
        {
          "id": "Q2",
          "text": "When did your school most recently use an assessment tool?",
          "type": "single",
          "showIf": [
            { "id": "Q1", "equals": "Yes" }
          ],
          "options": [
            "This school year (within the past 12 months)",
            "Last school year (within the past 2 years)",
            "The year before last (within the past 3 years)",
            "More than 3 years ago",
            "We have never used an assessment tool"
          ]
        },
        {
          "id": "Q3",
          "text": "Which evidence-based assessment tool(s) has your school used?",
          "type": "multi",
          "showIf": [
            { "id": "Q1", "equals": "Yes" }
          ],
          "options": [
            "Thriving Schools Integrated Assessment (Action Center)",
            "WellSAT (Wellness School Assessment Tool)",
            "School Health Index (CDC)",
            "District wellness policy assessment tool",
            "State wellness policy assessment tool",
            "Other evidence-based tool (specify)"
          ],
          "allowOther": true
        },
        {
          "id": "Q4",
          "text": "How were assessment results used?",
          "type": "multi",
          "showIf": [
            { "id": "Q1", "equals": "Yes" }
          ],
          "options": [
            "Reported to the wellness policy team",
            "Set or updated measurable goals",
            "Informed a wellness action plan",
            "Shared with district leadership",
            "Other (specify)"
          ],
          "allowOther": true
        },
        {
          "id": "Q5",
          "text": "Evidence (choose one)",
          "type": "evidence",
          "showIf": [
            { "id": "Q1", "equals": "Yes" }
          ],
          "options": [
            "Upload assessment results or report",
            "Upload Action Center download or screenshot",
            "Provide a link to the assessment results"
          ]
        }
      ],
      "eligibility": {
        "hardFail": [
          "Q1 is \"No\"",
          "Q2 is \"More than 3 years ago\" or \"We have never used an assessment tool\""
        ],
        "required": [
          "Q3 includes at least 1 tool",
          "Q5 has one evidence item provided"
        ],
        "decision": "Eligible if all required combinations are true and no hard-fail conditions are met."
      }
    }
  ]
}
```

## Answer Storage Format

Answers are stored in a flat object keyed by question ID:

```json
{
  "Q1": "Yes",
  "Q2": "This school year (within the past 12 months)",
  "Q3": [
    "WellSAT (Wellness School Assessment Tool)",
    "School Health Index (CDC)"
  ],
  "Q4": [
    "Reported to the wellness policy team",
    "Set or updated measurable goals"
  ],
  "Q5": {
    "type": "Upload assessment results or report",
    "value": "file-object-here"
  }
}
```

For repeated questions:

```json
{
  "Q1": ["Classroom parties", "School celebrations"],
  "Q2_Classroom_parties": ["Written policy", "Staff training"],
  "Q2_School_celebrations": ["Approved foods list"]
}
```

## Validation Rules

### Question ID
- Must be unique within a criterion
- Should follow pattern: Q1, Q2, Q3, etc.
- Can include suffixes for variants: Q1a, Q2_meals, etc.

### Question Type
- Must be one of: `boolean`, `single`, `multi`, `evidence`, `text`
- Invalid types will cause render errors

### Options Array
- Required for: `boolean`, `single`, `multi`, `evidence`
- Not used for: `text`
- Must have at least 2 options for `boolean`, `single`, `multi`

### showIf Rules
- Referenced question ID must exist
- Referenced question must appear before dependent question
- Cannot create circular dependencies

### repeatedFor
- Must reference a `multi` type question
- Referenced question must appear before repeated question
- Cannot chain repeated questions (Q3 cannot repeat for Q2 if Q2 repeats for Q1)

## Migration from Markdown

The build script (`tools/build-questions.js`) converts markdown tables to this JSON format:

**Markdown format**:
```markdown
| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Question text?** | Option A / Option B | Rationale text | Citation text |
```

**Converted to**:
```json
{
  "id": "Q1",
  "text": "Question text?",
  "type": "single",
  "options": ["Option A", "Option B"],
  "rationales": "Rationale text",
  "citations": "Citation text"
}
```

See `MIGRATION_GUIDE.md` for full details on the conversion process.

---

**Last Updated**: 2026-01-29
**Version**: 2.0

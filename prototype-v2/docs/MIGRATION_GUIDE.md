# Content Migration Guide

## Overview

This guide explains how to migrate content from the existing vanilla JS prototype to the new React application, and how to add or modify questions going forward.

## Important: No Migration Needed!

**The React app uses the same data format** as the vanilla JS prototype. Your existing workflow continues:

1. Edit `*.md` files in the project root
2. Run `node tools/build-questions.js` (or auto-build via GitHub Actions)
3. The React app automatically picks up changes via the same `questions.json` file

## Data Flow Unchanged

```
Markdown Files (lwp_s*.md)
        ↓
tools/build-questions.js (Pandoc)
        ↓
data/questions.json
        ↓
NEW: React App (instead of vanilla JS)
```

The only change is the **presentation layer** (React instead of vanilla JS).

## How to Add/Edit Questions

### 1. Edit Markdown Files

Example from `lwp_s2_questions.md`:

```markdown
| **Q1. Does your school use an evidence-based assessment tool?** | Yes / No | Rationale text | Citation |
| **Q2. When did your school most recently use an assessment tool?** | This school year / Last school year / More than 3 years ago | Rationale text | Citation |
```

### 2. Build Script Converts to JSON

The build script automatically converts markdown to:

```json
{
  "id": "Q1",
  "text": "Does your school use an evidence-based assessment tool?",
  "type": "boolean",
  "options": ["Yes", "No"],
  "rationales": "Rationale text",
  "citations": "Citation"
}
```

### 3. React App Renders It

The React app reads `questions.json` and renders the appropriate components.

## Question Type Detection

The build script automatically detects question types:

| Options Pattern | Detected Type | React Component |
|-----------------|---------------|-----------------|
| `Yes / No` | `boolean` | BooleanQuestion |
| `Option A / Option B / Option C` | `single` | SingleQuestion |
| `Multiple options (multi-select implied)` | `multi` | MultiQuestion |
| `Upload ... / Provide a link` | `evidence` | EvidenceQuestion |
| *Manual override in JSON* | `text` | TextQuestion |

## Adding Conditional Logic

### Simple Condition

In your markdown, add to the scoring section:

```markdown
### Conditional Display (optional)
- Q2 shows if Q1 = "Yes"
- Q3 shows if Q1 = "Yes"
```

The build script converts this to `showIf` rules:

```json
{
  "id": "Q2",
  "showIf": [{ "id": "Q1", "equals": "Yes" }]
}
```

### Multi-Select Condition

```markdown
- Q5 shows if Q3 includes "School meals"
```

Converts to:

```json
{
  "id": "Q5",
  "showIf": [{ "id": "Q3", "includes": "School meals" }]
}
```

### Multiple Conditions (AND logic)

```markdown
- Q6 shows if Q1 = "Yes" AND Q2 = "This school year"
```

Converts to:

```json
{
  "id": "Q6",
  "showIf": [
    { "id": "Q1", "equals": "Yes" },
    { "id": "Q2", "equals": "This school year" }
  ]
}
```

## Adding Dynamic Repeated Questions

### Example: LWP-S5 Per-Situation Questions

**Markdown:**

```markdown
| **Q1. In which situations does your school provide foods?** | Classroom rewards / Classroom parties / School celebrations | Multi-select |
| **Q2. How do you ensure compliance for {situation}?** | Written policy / Staff training / Approved foods list | Repeated for Q1 |
```

**Build Script Adds:**

```json
{
  "id": "Q2",
  "text": "How do you ensure compliance for {situation}?",
  "type": "multi",
  "repeatedFor": "Q1",
  "options": ["Written policy", "Staff training", "Approved foods list"]
}
```

**React App Generates:**

If user selects "Classroom parties" and "School celebrations" in Q1, the app creates:

- Q2_Classroom_parties: "How do you ensure compliance for Classroom parties?"
- Q2_School_celebrations: "How do you ensure compliance for School celebrations?"

## Eligibility Rules

Eligibility rules are defined in the markdown scoring section:

```markdown
### Hard-Fail Conditions
- Q1 is "No"
- Q2 is "More than 3 years ago"

### Required Combinations
- Q3 includes at least 1 tool
- Q5 has one evidence item provided
```

These are parsed by the build script and stored in the `eligibility` object.

## Manual JSON Overrides

If you need to manually override the generated JSON:

### Option 1: Edit questions.json Directly

After build, edit `data/questions.json` to add custom properties:

```json
{
  "id": "Q1",
  "text": "Question text",
  "type": "text",
  "multiline": true,
  "showIf": [{ "id": "Q0", "equals": "Yes" }]
}
```

**Warning**: Manual edits will be overwritten on next build!

### Option 2: Use Admin Content Override

Create `content/criteria.json` with overrides:

```json
{
  "LWP-S2": {
    "questions": [
      {
        "id": "Q1",
        "customProperty": "value"
      }
    ]
  }
}
```

The build script merges these overrides into the final output.

### Option 3: Modify Build Script

For permanent changes, update `tools/build-questions.js` to generate the desired structure.

## Adding New Question Types

### 1. Create Component

Create `src/components/questions/CustomQuestion.jsx`:

```jsx
export default function CustomQuestion({ question, answer, onChange }) {
  return (
    <div className="question custom-question">
      <label>{question.text}</label>
      {/* Your custom UI here */}
    </div>
  );
}
```

### 2. Register in Criterion Component

Edit `src/components/Criterion.jsx`:

```jsx
import CustomQuestion from './questions/CustomQuestion';

// In renderQuestion function:
case 'custom':
  return <CustomQuestion key={question.id} {...props} />;
```

### 3. Update Build Script

Modify `tools/build-questions.js` to detect and generate `type: "custom"` when needed.

### 4. Document It

Add to `docs/DATA_FORMAT.md` under "Question Types" section.

## Testing Changes

### Local Testing

1. Edit markdown file
2. Run build: `cd ahs2027 && node tools/build-questions.js`
3. Start dev server: `cd prototype-v2 && npm run dev`
4. Open http://localhost:5173
5. Test your changes

### Production Testing

1. Push changes to GitHub
2. GitHub Actions auto-builds `questions.json`
3. React app picks up changes (30-second polling)
4. Verify on live site

## Common Migration Tasks

### Task: Add a new criterion

1. Create `lwp_s7_questions.md` in project root
2. Follow existing format with questions table
3. Run build script
4. New criterion appears in sidebar automatically

### Task: Change question order

1. Edit markdown file and reorder rows in the table
2. Run build script
3. Questions appear in new order

### Task: Add conditional question

1. Add question to markdown
2. Add conditional rule to scoring section
3. Run build script
4. Question appears/disappears based on answers

### Task: Add repeated question (like LWP-S5)

1. Mark base question as `Repeated for Q#`
2. Use `{situation}` placeholder in question text
3. Run build script
4. React app generates instances automatically

### Task: Change eligibility rules

1. Edit "Hard-Fail Conditions" or "Required Combinations" section
2. Run build script
3. Eligibility evaluation updates automatically

## Troubleshooting

### Question not appearing

**Check**:
1. Is the markdown formatted correctly?
2. Did you run the build script?
3. Is there a `showIf` condition that's not met?
4. Check browser console for errors

### Question appearing when it shouldn't

**Check**:
1. Are the `showIf` conditions correct?
2. Is the referenced question ID spelled correctly?
3. Is the comparison value exact (case-sensitive)?

### Repeated questions not generating

**Check**:
1. Is `repeatedFor` pointing to a multi-select question?
2. Has the multi-select question been answered?
3. Is the placeholder (`{situation}`) in the question text?

### Eligibility showing wrong status

**Check**:
1. Are eligibility rules correctly formatted in markdown?
2. Did the build script parse them correctly? (Check questions.json)
3. Are question IDs referenced in rules correct?
4. Check browser console for evaluation errors

## For the Engineering Team

### When to Edit Markdown vs Code

**Edit Markdown** for:
- Question text changes
- Adding/removing/reordering questions
- Changing response options
- Updating eligibility rules
- Adding simple conditional logic

**Edit Code** for:
- New question types with custom UI
- Complex conditional logic not supported by markdown
- UI/UX improvements
- Performance optimizations
- New features (save/load, validation, etc.)

### Key Files Reference

| Task | File to Edit |
|------|-------------|
| Question content | `lwp_s*.md` (root directory) |
| Build logic | `tools/build-questions.js` |
| Conditional engine | `src/utils/conditionalLogic.js` |
| Eligibility engine | `src/utils/eligibilityEngine.js` |
| Question components | `src/components/questions/*.jsx` |
| Styles | `src/App.css` |
| Data schema | `docs/DATA_FORMAT.md` |

### Development Workflow

```bash
# Start dev server (terminal 1)
cd prototype-v2
npm run dev

# Watch and rebuild questions (terminal 2)
cd ..
node tools/watch-questions.js

# Edit markdown files
# Changes auto-rebuild and app auto-refreshes
```

### Production Build

```bash
cd prototype-v2
npm run build

# Output goes to prototype-v2/dist/
# Deploy dist/ folder to hosting
```

---

**Last Updated**: 2026-01-29
**Version**: 2.0

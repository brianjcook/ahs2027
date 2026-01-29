# Architecture Documentation

## Overview

This is a React-based application for the America's Healthiest Schools 2027 Award Application. The application renders dynamic forms based on JSON data derived from Markdown question files.

## Project Structure

```
prototype-v2/
├── docs/                       # Documentation for engineering team
│   ├── CONDITIONAL_LOGIC.md   # How conditional questions work
│   ├── DATA_FORMAT.md         # JSON schema and question types
│   └── MIGRATION_GUIDE.md     # Content migration instructions
├── src/
│   ├── components/            # React components
│   │   ├── questions/         # Question type components
│   │   │   ├── BooleanQuestion.jsx
│   │   │   ├── SingleQuestion.jsx
│   │   │   ├── MultiQuestion.jsx
│   │   │   ├── EvidenceQuestion.jsx
│   │   │   ├── TextQuestion.jsx
│   │   │   └── RepeatedQuestion.jsx
│   │   ├── Criterion.jsx      # Single criterion container
│   │   ├── Sidebar.jsx        # Navigation sidebar
│   │   └── EligibilityPanel.jsx # Eligibility status display
│   ├── utils/                 # Utility functions
│   │   ├── conditionalLogic.js # showIf evaluation engine
│   │   ├── eligibilityEngine.js # Eligibility rule evaluation
│   │   └── questionRenderer.js # Question rendering logic
│   ├── hooks/                 # Custom React hooks
│   │   ├── useQuestions.js    # Data fetching and caching
│   │   └── useFormState.js    # Form state management
│   ├── App.jsx                # Main application component
│   └── main.jsx              # Application entry point
├── public/
└── data/ (parent directory)   # Generated JSON files
    └── questions.json

```

## Data Flow

```
Markdown Files (*.md)
        ↓
build-questions.js (Node.js + Pandoc)
        ↓
questions.json (generated)
        ↓
React App (fetch + 30s polling)
        ↓
Component Tree (conditional rendering)
        ↓
User Interface
```

## Key Concepts

### 1. Questions Data Structure

Questions are defined in JSON with this structure:

```json
{
  "id": "Q1",
  "text": "Question text here?",
  "type": "boolean|single|multi|evidence|text",
  "options": ["Option 1", "Option 2"],
  "allowOther": false,
  "showIf": [
    { "id": "Q1", "equals": "Yes" }
  ],
  "repeatedFor": "Q1",
  "rationales": "Expert rationale text",
  "citations": "Citation text"
}
```

### 2. Conditional Logic (`showIf`)

Questions can be conditionally displayed based on answers to other questions:

- **`equals`**: Shows question if answer exactly matches
- **`includes`**: Shows question if multi-select answer includes option

See `docs/CONDITIONAL_LOGIC.md` for full details.

### 3. Dynamic Question Repetition (`repeatedFor`)

Questions can be repeated for each option selected in a multi-select question. Used for per-situation compliance questions (e.g., LWP-S5).

Example:
```json
{
  "id": "Q2",
  "text": "How do you ensure compliance for {situation}?",
  "type": "multi",
  "repeatedFor": "Q1",
  "options": ["Policy", "Training", "Checklist"]
}
```

If Q1 has ["Classroom parties", "School celebrations"] selected, this renders Q2 twice with {situation} replaced.

### 4. Eligibility Evaluation

Each criterion has eligibility rules:

- **Hard-Fail Conditions**: Automatic disqualifiers
- **Required Conditions**: Must be met for eligibility
- **Eligibility Decision**: Final status determination

See `src/utils/eligibilityEngine.js` for implementation.

## State Management

The application uses React's built-in state management:

- **`useState`**: Component-level state for answers
- **`useEffect`**: Data fetching and polling
- **Custom hooks**: Shared logic for form state and data management

No external state management library (Redux, etc.) is needed at this stage.

## Styling Approach

Currently using vanilla CSS. Consider migrating to:
- **Tailwind CSS** for rapid development
- **CSS Modules** for component-scoped styles
- **Styled Components** for CSS-in-JS approach

## Future Enhancements

### Immediate (Next Phase)
- Add form validation and error messages
- Implement file upload handling
- Add progress saving (localStorage or backend)
- Create admin interface for editing

### Short-term
- Add backend API for data persistence
- Implement user authentication
- Add collaborative editing features
- Create review/approval workflows

### Long-term
- Real-time collaboration (multiple users)
- Version control for applications
- Reporting and analytics dashboard
- Integration with external systems

## Development Workflow

### Local Development
```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Content Updates
1. Edit `*.md` question files in project root
2. Run `node tools/build-questions.js` (or auto-build via GitHub Actions)
3. React app auto-refreshes with new data (30s polling)

### Adding New Question Types
1. Create component in `src/components/questions/`
2. Register in `src/utils/questionRenderer.js`
3. Update `docs/DATA_FORMAT.md` with new type
4. Add example in `docs/MIGRATION_GUIDE.md`

## Testing Strategy

### Unit Tests (Recommended)
- Test conditional logic engine with various showIf combinations
- Test eligibility engine with different rule scenarios
- Test individual question components

### Integration Tests
- Test full criterion rendering with conditional questions
- Test form state management across questions
- Test eligibility calculation with real data

### E2E Tests (Future)
- Test complete application flow
- Test file uploads and evidence submission
- Test admin editing workflows

## Performance Considerations

### Current
- Small dataset (<100 questions) renders quickly
- 30-second polling is lightweight
- No performance bottlenecks expected

### Future Optimizations
- Implement React.memo() for question components
- Add virtual scrolling for long criterion lists
- Lazy load criteria (only load visible)
- Optimize eligibility calculations (memoization)

## Security Considerations

### Current (Prototype)
- Client-side only, no sensitive data
- No authentication required
- Files stored locally

### Production Requirements
- Add authentication (OAuth, JWT)
- Implement authorization (role-based access)
- Secure file uploads (validation, virus scanning)
- HTTPS required for all traffic
- CSRF protection for forms
- XSS protection (sanitize user input)

## Browser Support

### Target Browsers
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

### Minimum Requirements
- ES6 support
- Fetch API support
- LocalStorage support

## Deployment

### Static Hosting (Current)
- GitHub Pages
- Netlify
- Vercel

### Production Deployment (Future)
- AWS (S3 + CloudFront)
- Azure Static Web Apps
- Google Cloud Platform

## Contact & Support

For questions about this architecture, contact the development team or refer to inline code documentation.

---

**Last Updated**: 2026-01-29
**Version**: 2.0 (React Migration)

# Quick Start Guide

## ✅ Setup Complete!

The React application is ready to run.

## Start the Development Server

```bash
cd C:\Users\Brian.Cook\ahs2027\prototype-v2
npm run dev
```

Then open your browser to: **http://localhost:5173**

## What You'll See

1. **Sidebar** - List of all 7 criteria with status icons
2. **Main Content** - Currently selected criterion with questions
3. **Eligibility Panel** - Real-time eligibility status

## Test the Features

### Test Basic Questions
1. Click on **LWP-S1** in the sidebar
2. Answer Q1 = "Yes"
3. Watch Q2-Q7 appear (conditional logic!)
4. Fill out questions and see eligibility status update

### Test Dynamic Questions (LWP-S5)
1. Click on **LWP-S5** in the sidebar
2. In Q1, select multiple situations (e.g., "Classroom parties", "School celebrations")
3. Watch Q2 appear **multiple times** - once for each situation!
4. Each instance asks about compliance for that specific situation

### Test All Criteria
- Navigate through all 7 criteria using the sidebar
- Try different answer combinations
- Watch eligibility status change in real-time

## What Just Happened?

### Files Created

**Documentation** (for your engineering team):
- `ARCHITECTURE.md` - System architecture overview
- `docs/CONDITIONAL_LOGIC.md` - **Critical!** How dynamic questions work
- `docs/DATA_FORMAT.md` - JSON schema reference
- `docs/MIGRATION_GUIDE.md` - Content editing guide
- `README.md` - Full project documentation

**Source Code**:
- `src/App.jsx` - Main application
- `src/components/Criterion.jsx` - Criterion container
- `src/components/Sidebar.jsx` - Navigation
- `src/components/questions/*.jsx` - Question type components (5 types)
- `src/utils/conditionalLogic.js` - **Core engine** for showIf and repeatedFor
- `src/utils/eligibilityEngine.js` - Eligibility evaluation
- `src/App.css` - Complete styling

**Configuration**:
- `vite.config.js` - Vite configuration
- `package.json` - NPM scripts including `copy-data`
- `scripts/copy-data.js` - Data copying script

### Data Flow (Unchanged!)

Your existing workflow still works:

```
1. Edit lwp_s*.md files (project root)
2. Run: node tools/build-questions.js
3. Run: npm run copy-data (in prototype-v2)
4. React app auto-refreshes (30-second polling)
```

## Key Features Implemented

### ✅ Conditional Logic (showIf)
- Questions show/hide based on answers
- `equals` operator for exact matches
- `includes` operator for multi-select
- Multiple conditions with AND logic

### ✅ Dynamic Question Repetition (repeatedFor)
- Generate multiple question instances
- One per selected multi-select option
- Text interpolation with `{situation}` placeholder
- **Solves your LWP-S5 requirement!**

### ✅ Eligibility Evaluation
- Hard-fail conditions (automatic disqualifiers)
- Required conditions (must all be met)
- Real-time status updates
- Visual indicators (✔ ✘ ◐ −)

### ✅ Auto-sync Data
- Polls questions.json every 30 seconds
- No page refresh needed
- Same as vanilla JS prototype

## For Your Engineering Team

**Most Important Documents to Read:**

1. **docs/CONDITIONAL_LOGIC.md** ⭐ START HERE
   - How showIf works
   - How repeatedFor works
   - Code examples
   - Test cases

2. **ARCHITECTURE.md**
   - Overall system design
   - Component structure
   - State management
   - Future enhancements

3. **docs/DATA_FORMAT.md**
   - JSON schema
   - Question types
   - Answer formats
   - Validation rules

4. **docs/MIGRATION_GUIDE.md**
   - How to add/edit content
   - Common tasks
   - Troubleshooting

## Next Steps

### Immediate (You)
1. Start dev server: `npm run dev`
2. Test all 7 criteria
3. Verify LWP-S5 dynamic questions work
4. Check that conditional logic works

### Short-term (Engineering Team)
1. Read documentation (start with CONDITIONAL_LOGIC.md)
2. Review code structure
3. Plan backend integration
4. Set up testing framework
5. Add user authentication

### Long-term (Production)
1. Backend API for data persistence
2. Real file upload handling
3. User authentication & authorization
4. Form validation
5. Analytics & reporting
6. Collaborative editing

## Troubleshooting

**Server won't start?**
```bash
cd C:\Users\Brian.Cook\ahs2027\prototype-v2
npm install
npm run dev
```

**Data not loading?**
```bash
npm run copy-data
```

**Questions not appearing?**
- Check browser console (F12)
- Verify questions.json exists in public/data/
- Check conditional logic rules

## Support

- **Architecture questions** → See ARCHITECTURE.md
- **Conditional logic** → See docs/CONDITIONAL_LOGIC.md
- **Data format** → See docs/DATA_FORMAT.md
- **Content editing** → See docs/MIGRATION_GUIDE.md

---

**Status**: ✅ Ready to run
**Framework**: React 18 + Vite
**Node.js**: v24.13.0
**Last Updated**: 2026-01-29

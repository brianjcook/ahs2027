# AHS 2027 Award Application - React Prototype

React-based application for the America's Healthiest Schools 2027 Award Application.

## Quick Start

```bash
# Install dependencies
npm install

# Copy data from parent directory
npm run copy-data

# Start development server
npm run dev
```

Then open http://localhost:5173

## For Your Engineering Team

This is a production-ready React application with comprehensive documentation:

### 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Overall system architecture and design
- **[docs/CONDITIONAL_LOGIC.md](./docs/CONDITIONAL_LOGIC.md)** - How conditional questions work (critical!)
- **[docs/DATA_FORMAT.md](./docs/DATA_FORMAT.md)** - JSON schema and question types
- **[docs/MIGRATION_GUIDE.md](./docs/MIGRATION_GUIDE.md)** - How to add/edit content

**Start with CONDITIONAL_LOGIC.md** - it explains the dynamic question system.

### 🏗️ Project Structure

```
prototype-v2/
├── docs/                          # Team documentation
│   ├── CONDITIONAL_LOGIC.md       # ⭐ Read this first!
│   ├── DATA_FORMAT.md
│   └── MIGRATION_GUIDE.md
├── src/
│   ├── components/
│   │   ├── questions/             # Question type components
│   │   │   ├── BooleanQuestion.jsx
│   │   │   ├── SingleQuestion.jsx
│   │   │   ├── MultiQuestion.jsx
│   │   │   ├── TextQuestion.jsx
│   │   │   └── EvidenceQuestion.jsx
│   │   ├── Criterion.jsx          # Criterion container
│   │   └── Sidebar.jsx            # Navigation
│   ├── utils/
│   │   ├── conditionalLogic.js    # ⭐ Core conditional engine
│   │   └── eligibilityEngine.js   # Eligibility evaluation
│   ├── App.jsx                    # Main app
│   └── App.css                    # Styles
├── public/
│   └── data/ (copied from parent)
└── package.json
```

### 🔑 Key Features

**Dynamic Conditional Questions**
- Questions show/hide based on answers (`showIf`)
- Supports `equals` and `includes` operators
- Multiple conditions with AND logic
- See `docs/CONDITIONAL_LOGIC.md`

**Repeated Questions (LWP-S5)**
- Generate multiple question instances
- One per selected option in multi-select
- Text interpolation with `{situation}` placeholder
- See `src/utils/conditionalLogic.js`

**Eligibility Evaluation**
- Hard-fail conditions (automatic disqualifiers)
- Required conditions (must all be met)
- Real-time status updates
- See `src/utils/eligibilityEngine.js`

**Auto-sync Data**
- Polls `data/questions.json` every 30 seconds
- No page refresh needed for content updates
- Same workflow as vanilla JS prototype

### 🛠️ Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Copy latest data from parent directory
npm run copy-data
```

### 📝 Content Editing Workflow

**No code changes needed for content!**

1. Edit `lwp_s*.md` files in project root (parent directory)
2. Run `node tools/build-questions.js` (parent directory)
3. Run `npm run copy-data` (this directory)
4. React app auto-refreshes with new content

Or use GitHub Actions for automatic builds.

### 🎨 Styling

Currently using vanilla CSS in `src/App.css`. Consider migrating to:
- **Tailwind CSS** - Recommended for rapid development
- **CSS Modules** - For component-scoped styles
- **Styled Components** - For CSS-in-JS approach

### 🧪 Testing (Future)

Recommended testing setup:

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

Test priorities:
1. Conditional logic engine (`conditionalLogic.test.js`)
2. Eligibility engine (`eligibilityEngine.test.js`)
3. Question components
4. Full form flows

### 🚀 Deployment

#### Option 1: GitHub Pages

1. Update `vite.config.js`:
   ```js
   base: '/ahs2027/prototype-v2/'
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy dist/ folder to GitHub Pages
   ```

#### Option 2: Netlify/Vercel

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploys on push

#### Option 3: Custom Server

1. Build: `npm run build`
2. Serve `dist/` folder with any static server
3. Ensure `data/questions.json` is accessible

### 🔐 Production Considerations

**Before going live, implement:**

1. **Authentication** - User login system
2. **Data Persistence** - Save progress to database
3. **File Uploads** - Real file upload handling (currently placeholder)
4. **Form Validation** - Client and server-side validation
5. **Error Handling** - Better error messages and recovery
6. **Accessibility** - WCAG 2.1 AA compliance
7. **Security** - CSRF protection, input sanitization
8. **Analytics** - Track usage and completion rates

### 🐛 Troubleshooting

**Data not loading?**
- Run `npm run copy-data`
- Check that `public/data/questions.json` exists
- Check browser console for fetch errors

**Questions not appearing?**
- Check conditional logic (`showIf` rules)
- Verify question IDs in console
- See docs/CONDITIONAL_LOGIC.md

**Styles not applying?**
- Clear browser cache
- Check App.css loaded in DevTools
- Verify class names match CSS

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (need 20.19+ or 22.12+)

### 📞 Support

For questions about:
- **Architecture** → See ARCHITECTURE.md
- **Conditional logic** → See docs/CONDITIONAL_LOGIC.md
- **Data format** → See docs/DATA_FORMAT.md
- **Content editing** → See docs/MIGRATION_GUIDE.md

### 🎯 Next Steps for Engineering Team

1. **Read Documentation** (30 min)
   - Start with docs/CONDITIONAL_LOGIC.md
   - Skim ARCHITECTURE.md
   - Reference DATA_FORMAT.md as needed

2. **Run Locally** (10 min)
   - `npm install && npm run copy-data && npm run dev`
   - Test all 7 criteria
   - Try conditional questions

3. **Plan Enhancements** (discuss)
   - Backend API integration
   - User authentication
   - Real file uploads
   - Form validation
   - Testing strategy

4. **Set Up Development**
   - Configure Git workflow
   - Set up CI/CD pipeline
   - Add linting/formatting (ESLint, Prettier)
   - Implement testing framework

### 🔄 Migration from Vanilla JS

**Good news**: Content migration is zero-effort!

- Same `data/questions.json` format
- Same build pipeline
- Same markdown source files
- Only the UI layer changed (vanilla JS → React)

See docs/MIGRATION_GUIDE.md for details.

---

**Version**: 2.0
**Framework**: React 18 + Vite
**Status**: Production-ready prototype
**Last Updated**: 2026-01-29

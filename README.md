# AHS 2027 Award Application Prototype

Prototype for the America's Healthiest Schools 2027 Award Application.

## Live Site

**Main Application:** https://brianjcook.github.io/ahs2027/prototype/

**Admin Interface:** https://brianjcook.github.io/ahs2027/prototype/admin.html

## Automatic Builds

When you update any `*_questions.md` or `*_questions.docx` files and push to GitHub, a GitHub Action automatically:
1. Runs `node tools/build-questions.js`
2. Updates `data/questions.json`
3. Commits and pushes the changes

The site updates automatically within seconds.

## Local Development

To build questions locally:
```bash
node tools/build-questions.js
```

To run the dev server:
```bash
node tools/dev.js
```

Then open http://localhost:5173

## Structure

- `/prototype/` - Main application and admin interface
- `/data/` - Generated questions.json (auto-built)
- `/tools/` - Build scripts
- `/content/` - Admin overrides
- `*_questions.md` - Source question files

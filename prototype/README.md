# Award Prototype (Auto-Synced)

This prototype renders the award questions from `_questions.docx` or `_questions.md` files.

## Run locally

1. Build the data once:
   ```
   node tools/build-questions.js
   ```

2. Start watch + dev server:
   ```
   node tools/dev.js
   ```

3. Open:
   ```
   http://localhost:5173
   ```

When a question file changes, `data/questions.json` updates automatically and the UI will refresh within ~5 seconds.

## Admin editor

Open:
```
http://localhost:5173/prototype/admin.html
```

Saving from the admin UI writes to `content/criteria.json` and overrides matching criteria IDs during the build.

## SharePoint static build

This builds a static version into your synced SharePoint folder:
```
node tools/build-site.js
```

Auto-run on every change:
```
node tools/watch-site.js
```

The default output is:
```
C:\Users\Brian.Cook\ALLIANCE FOR A HEALTHIER GENERATION\Technology Team - Prototype
```

Override with:
```
$env:SITE_DIR="C:\path\to\folder"
node tools/build-site.js
```

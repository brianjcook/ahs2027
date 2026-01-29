# Deployment Guide

## Live URLs

### Old Vanilla JS Prototype
**URL**: https://brianjcook.github.io/ahs2027/prototype/
**Status**: ✅ Active (unchanged)
**Source**: `/prototype/` directory

### New React Prototype
**URL**: https://brianjcook.github.io/ahs2027/prototype-react/
**Status**: ✅ Active (deployed)
**Source**: Built from `/prototype-v2/` directory

## Directory Structure

```
ahs2027/
├── prototype/              # Old vanilla JS prototype (live)
├── prototype-v2/           # React source code
│   ├── src/               # React components and utilities
│   ├── docs/              # Engineering documentation
│   └── public/            # Static assets
└── prototype-react/        # Built React app (deployed, auto-generated)
```

## Automatic Deployment

### How It Works

1. **Edit Source**: Make changes in `/prototype-v2/src/`
2. **Push to GitHub**: Commit and push changes
3. **Auto-Build**: GitHub Actions workflow triggers
4. **Auto-Deploy**: Built files copied to `/prototype-react/`
5. **Live Update**: GitHub Pages serves the new version

### Deployment Workflow

File: `.github/workflows/deploy-react.yml`

**Triggers**:
- Push to `main` branch affecting `/prototype-v2/**`
- Changes to `/data/questions.json`
- Manual trigger via GitHub Actions UI

**Steps**:
1. Checkout code
2. Install Node.js and dependencies
3. Build React app (`npm run build`)
4. Copy `dist/*` to `/prototype-react/`
5. Commit and push changes

## Manual Deployment

If you need to deploy manually:

```bash
# 1. Navigate to prototype-v2
cd prototype-v2

# 2. Build the app
npm run build

# 3. Copy to deployment directory
cd ..
rm -rf prototype-react
mkdir prototype-react
cp -r prototype-v2/dist/* prototype-react/

# 4. Commit and push
git add prototype-react
git commit -m "Manual deploy React prototype"
git push
```

## Content Updates

### Updating Questions (Both Prototypes)

1. Edit markdown files (`lwp_s*.md`)
2. Run build: `node tools/build-questions.js`
3. Push changes
4. **Old prototype**: Updates automatically (polls questions.json)
5. **React prototype**: GitHub Actions rebuilds and redeploys

### Updating React Code Only

1. Edit files in `/prototype-v2/src/`
2. Test locally: `cd prototype-v2 && npm run dev`
3. Push changes
4. GitHub Actions auto-deploys to `/prototype-react/`

## GitHub Pages Configuration

**Current Settings** (in repository settings):
- Source: Deploy from branch `main`
- Directory: `/` (root)
- Both `/prototype/` and `/prototype-react/` served

**If you need to verify/update**:
1. Go to: https://github.com/brianjcook/ahs2027/settings/pages
2. Ensure "Deploy from a branch" is selected
3. Branch: `main`, Folder: `/ (root)`

## Troubleshooting

### React prototype not loading?

1. Check GitHub Actions: https://github.com/brianjcook/ahs2027/actions
2. Verify `/prototype-react/` folder exists in repo
3. Check GitHub Pages settings
4. Wait 1-2 minutes for deployment

### Changes not appearing?

1. Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)
2. Check if GitHub Actions completed
3. Verify files in `/prototype-react/` were updated
4. Check browser console for errors

### Build failing?

1. Check GitHub Actions logs for errors
2. Test build locally: `cd prototype-v2 && npm run build`
3. Check Node.js version in workflow (needs 22+)
4. Verify `data/questions.json` exists

## Monitoring

### Check Deployment Status

**GitHub Actions**: https://github.com/brianjcook/ahs2027/actions

Look for "Deploy React Prototype" workflow runs.

**Status Indicators**:
- 🟢 Green checkmark = Deployed successfully
- 🔴 Red X = Build/deploy failed
- 🟡 Yellow circle = In progress

### View Deployment Logs

1. Go to Actions tab
2. Click on workflow run
3. Click on "build-and-deploy" job
4. View logs for each step

## Rollback

If you need to rollback to a previous version:

```bash
# 1. Find the commit hash of the working version
git log --oneline prototype-react/

# 2. Checkout that version
git checkout <commit-hash> -- prototype-react/

# 3. Commit and push
git add prototype-react/
git commit -m "Rollback React prototype to <commit-hash>"
git push
```

## Future Enhancements

### Separate Build Branch

Consider deploying from `gh-pages` branch for cleaner separation:

**Benefits**:
- No build artifacts in `main` branch
- Cleaner git history
- Easier to review code changes

**Implementation**:
1. Update workflow to use `peaceiris/actions-gh-pages@v3`
2. Deploy to `gh-pages` branch
3. Update GitHub Pages settings to deploy from `gh-pages`

### Preview Deployments

Add PR preview deployments using Netlify or Vercel:

**Benefits**:
- Test changes before merging
- Share previews with team
- Automatic preview URLs

## Summary

✅ **Old Prototype**: https://brianjcook.github.io/ahs2027/prototype/
✅ **React Prototype**: https://brianjcook.github.io/ahs2027/prototype-react/

Both are live and will remain available side-by-side. The React prototype auto-deploys on every push to main.

---

**Last Updated**: 2026-01-29
**Deployment Status**: ✅ Active

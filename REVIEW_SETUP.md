# Review System Setup Instructions

The review system has been deployed but requires one-time setup in your Vercel dashboard.

## Setup Steps

### 1. Enable Vercel Blob Storage

1. Go to https://vercel.com/dashboard
2. Select your `ahs2027` project
3. Click on the **Storage** tab in the top navigation
4. Click **Create Database** or **Connect Store**
5. Select **Blob** from the options
6. Follow the prompts to create a Blob store
   - Name it something like `ahs2027-reviews`
   - Select your region (closest to your team)
7. Click **Create**

### 2. Connect Blob to Your Project

Vercel will automatically:
- Create the `BLOB_READ_WRITE_TOKEN` environment variable
- Connect it to your project
- Redeploy your app with the new environment variable

**No additional configuration needed!** The environment variable is automatically available to your API routes.

### 3. Verify It's Working

1. Wait for the deployment to complete (~1-2 minutes)
2. Visit https://ahs2027.vercel.app/
3. Select any criterion
4. Look for the **Review** panel on the right side
5. Try:
   - Changing the criterion status
   - Adding a comment (enter your name and comment text)
   - Expanding a question and adding a review

The data should persist across page refreshes and be visible to all users!

## Features

### Criterion-Level Review
- **Status dropdown**: Not Reviewed / Under Review / Needs Updates / Approved
- **Comments**: Multiple users can add comments with their names and timestamps
- **Delete**: Each comment has an × button to remove it

### Question-Level Review
- **Accordion**: Click ▶ to expand each question
- **Status**: Same 4 statuses as criterion level
- **Comments**: Per-question comment threads

### Auto-Save
- Changes save automatically
- "Saving..." indicator appears bottom-right
- All team members see updates on refresh

## How It Works

1. **Storage**: Reviews stored in Vercel Blob as JSON
2. **API**: Serverless function at `/api/reviews`
3. **Multi-user**: Open access (anyone with URL can review)
4. **Data structure**:
   ```json
   {
     "FCE-S6": {
       "status": "Under Review",
       "comments": [
         {
           "id": "1708287600000",
           "author": "Sarah K.",
           "text": "Need clarification on community partners",
           "timestamp": "2026-02-18T20:45:00Z"
         }
       ],
       "questions": {
         "Q1": {
           "status": "Approved",
           "comments": [...]
         }
       }
     }
   }
   ```

## Troubleshooting

### Reviews not saving?
- Check Vercel dashboard > Storage to verify Blob is connected
- Check Vercel deployment logs for errors
- Verify `BLOB_READ_WRITE_TOKEN` is set in Environment Variables

### Panel not showing?
- Hard refresh (Ctrl+Shift+R)
- Check browser console for JavaScript errors
- Verify deployment completed successfully

### Lost data?
- Check Vercel dashboard > Storage > Blob
- Click on `reviews.json` to see the raw data
- Data persists until manually deleted

## Cost

Vercel Blob free tier includes:
- 500K reads per month
- 100K writes per month
- 100 GB bandwidth per month

**Should be plenty for your team's review workflow!**

## Need Help?

Contact Vercel support or check:
- https://vercel.com/docs/storage/vercel-blob
- https://vercel.com/docs/functions/serverless-functions

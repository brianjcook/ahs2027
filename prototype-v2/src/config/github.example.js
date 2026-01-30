/**
 * GitHub Configuration Template
 *
 * SETUP INSTRUCTIONS:
 * 1. Copy this file and rename it to: github.js
 * 2. Create a GitHub Personal Access Token at: https://github.com/settings/tokens
 *    - Click "Generate new token (classic)"
 *    - Give it a name like "AHS Admin Panel"
 *    - Check scope: "repo" (full control of private repositories)
 *    - Click "Generate token" and copy it
 * 3. Paste your token in the token field below
 * 4. Save the file
 *
 * NOTE: github.js is in .gitignore and will NOT be committed to the repository
 */

export const GITHUB_CONFIG = {
  owner: 'brianjcook',
  repo: 'ahs2027',
  branch: 'main',
  dataPath: 'data/questions.json',
  // Paste your GitHub Personal Access Token here:
  token: 'PASTE_YOUR_TOKEN_HERE'
};

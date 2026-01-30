/**
 * Vercel Serverless Function
 * Handles GitHub commits from the admin panel
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check admin password
  const { password, data, commitMessage, sha } = req.body;

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // GitHub API configuration from environment variables
  const GITHUB_CONFIG = {
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH || 'main',
    dataPath: process.env.GITHUB_DATA_PATH || 'data/questions.json',
    token: process.env.GITHUB_TOKEN
  };

  const API_BASE = 'https://api.github.com';
  const url = `${API_BASE}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataPath}`;

  // Encode content to base64
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');

  try {
    // Commit to GitHub
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: commitMessage,
        content: content,
        sha: sha,
        branch: GITHUB_CONFIG.branch
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error: error.message });
    }

    const result = await response.json();
    return res.status(200).json({ success: true, sha: result.content.sha });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

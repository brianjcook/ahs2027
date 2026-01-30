/**
 * Vercel Serverless Function
 * Reads questions.json from GitHub
 */

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check admin password
  const password = req.headers['x-admin-password'];

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
  const url = `${API_BASE}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataPath}?ref=${GITHUB_CONFIG.branch}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${GITHUB_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error: error.message });
    }

    const result = await response.json();
    const content = Buffer.from(result.content, 'base64').toString('utf-8');

    return res.status(200).json({
      data: JSON.parse(content),
      sha: result.sha
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

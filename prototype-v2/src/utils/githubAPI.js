/**
 * GitHub API Client
 * Handles reading and writing to the GitHub repository
 */

const API_BASE = 'https://api.github.com';

// Lazy load config to avoid build errors when file doesn't exist
async function getConfig() {
  try {
    const configModule = await import('../config/github.js');
    return configModule.GITHUB_CONFIG;
  } catch {
    // Config file not found - return placeholder
    return {
      owner: '',
      repo: '',
      branch: 'main',
      dataPath: '',
      token: ''
    };
  }
}

/**
 * Get the current questions.json file from GitHub
 */
export async function getQuestionsData() {
  const config = await getConfig();
  const url = `${API_BASE}/repos/${config.owner}/${config.repo}/contents/${config.dataPath}?ref=${config.branch}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${config.token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  const content = atob(data.content); // Decode base64
  return {
    data: JSON.parse(content),
    sha: data.sha // Need this for updating
  };
}

/**
 * Commit updated questions.json to GitHub
 */
export async function updateQuestionsData(newData, commitMessage, sha) {
  const config = await getConfig();
  const url = `${API_BASE}/repos/${config.owner}/${config.repo}/contents/${config.dataPath}`;

  const content = btoa(JSON.stringify(newData, null, 2)); // Encode to base64

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${config.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: commitMessage,
      content: content,
      sha: sha,
      branch: config.branch
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to update data: ${error.message}`);
  }

  return await response.json();
}

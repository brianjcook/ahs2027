/**
 * GitHub API Client
 * Handles reading and writing to the GitHub repository
 */

import { GITHUB_CONFIG } from '../config/github';

const API_BASE = 'https://api.github.com';

/**
 * Get the current questions.json file from GitHub
 */
export async function getQuestionsData() {
  const url = `${API_BASE}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataPath}?ref=${GITHUB_CONFIG.branch}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${GITHUB_CONFIG.token}`,
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
  const url = `${API_BASE}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.dataPath}`;

  const content = btoa(JSON.stringify(newData, null, 2)); // Encode to base64

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
    throw new Error(`Failed to update data: ${error.message}`);
  }

  return await response.json();
}

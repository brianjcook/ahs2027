/**
 * Vercel API Client
 * Calls serverless functions instead of GitHub directly
 */

// Store password in memory for the session
let adminPassword = sessionStorage.getItem('adminPassword') || null;

export function setAdminPassword(password) {
  adminPassword = password;
  sessionStorage.setItem('adminPassword', password);
}

export function clearAdminPassword() {
  adminPassword = null;
  sessionStorage.removeItem('adminPassword');
}

export function hasAdminPassword() {
  return !!adminPassword;
}

/**
 * Get the current questions.json file via Vercel API
 */
export async function getQuestionsData() {
  if (!adminPassword) {
    throw new Error('Admin password not set');
  }

  const response = await fetch('/api/github-read', {
    method: 'GET',
    headers: {
      'X-Admin-Password': adminPassword
    }
  });

  if (!response.ok) {
    if (response.status === 401) {
      clearAdminPassword();
      throw new Error('Invalid password');
    }
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch data');
  }

  return await response.json();
}

/**
 * Commit updated questions.json via Vercel API
 */
export async function updateQuestionsData(newData, commitMessage, sha) {
  if (!adminPassword) {
    throw new Error('Admin password not set');
  }

  const response = await fetch('/api/github-commit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: adminPassword,
      data: newData,
      commitMessage: commitMessage,
      sha: sha
    })
  });

  if (!response.ok) {
    if (response.status === 401) {
      clearAdminPassword();
      throw new Error('Invalid password');
    }
    const error = await response.json();
    throw new Error(error.error || 'Failed to update data');
  }

  return await response.json();
}

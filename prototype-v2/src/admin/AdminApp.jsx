/**
 * Admin Application
 * Interface for editing application criteria and questions
 */

import { useState, useEffect } from 'react';
import { getQuestionsData, updateQuestionsData, setAdminPassword, hasAdminPassword } from '../utils/vercelAPI';
import CriteriaList from './CriteriaList';
import CriterionEditor from './CriterionEditor';
import AdminLogin from './AdminLogin';
import './Admin.css';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAdminPassword());
  const [data, setData] = useState(null);
  const [sha, setSha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCriterionId, setSelectedCriterionId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Handle login
  const handleLogin = async (password) => {
    setAdminPassword(password);
    setIsAuthenticated(true);
    setError(null);
  };

  // Load data from GitHub
  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getQuestionsData();
      setData(result.data);
      setSha(result.sha);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Save data to GitHub
  const handleSave = async () => {
    try {
      setSaving(true);
      setSaveMessage('');

      const commitMessage = `Update application data via admin panel\n\nCo-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`;

      const result = await updateQuestionsData(data, commitMessage, sha);
      setSha(result.content.sha); // Update SHA for next save
      setSaveMessage('✓ Saved successfully! Changes will deploy shortly.');

      setTimeout(() => setSaveMessage(''), 5000);
    } catch (err) {
      setSaveMessage(`✗ Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  // Update a criterion
  const handleUpdateCriterion = (updatedCriterion) => {
    const newData = {
      ...data,
      criteria: data.criteria.map(c =>
        c.id === updatedCriterion.id ? updatedCriterion : c
      )
    };
    setData(newData);
  };

  // Add a new criterion
  const handleAddCriterion = () => {
    const newId = `NEW-${Date.now()}`;
    const newCriterion = {
      id: newId,
      title: 'New Criterion',
      criterionText: '',
      questions: [],
      scoring: {
        hardFail: [],
        required: [],
        eligibility: '- Eligible if all required combinations are true and no hard-fail conditions are met. - Not eligible otherwise.'
      },
      rules: [],
      source: {
        type: 'admin',
        filename: 'admin-created'
      }
    };

    setData({
      ...data,
      criteria: [...data.criteria, newCriterion]
    });
    setSelectedCriterionId(newId);
  };

  // Delete a criterion
  const handleDeleteCriterion = (criterionId) => {
    if (!confirm('Are you sure you want to delete this criterion?')) return;

    setData({
      ...data,
      criteria: data.criteria.filter(c => c.id !== criterionId)
    });

    if (selectedCriterionId === criterionId) {
      setSelectedCriterionId(null);
    }
  };

  const selectedCriterion = data?.criteria.find(c => c.id === selectedCriterionId);

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (loading) {
    return (
      <div className="admin-app">
        <div className="loading">Loading data from GitHub...</div>
      </div>
    );
  }

  if (error) {
    const isAuthError = error.includes('password') || error.includes('401');
    return (
      <div className="admin-app">
        <div className="error">
          <h2>Error Loading Data</h2>
          <p>{error}</p>
          {isAuthError ? (
            <button onClick={() => {
              setIsAuthenticated(false);
              setError(null);
            }}>Re-enter Password</button>
          ) : (
            <button onClick={loadData}>Retry</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-app">
      <header className="admin-header">
        <div>
          <h1>Admin Panel</h1>
          <p className="subtitle">2027 Award Application - Content Management</p>
        </div>
        <div className="header-actions">
          <button onClick={loadData} className="btn-secondary" disabled={saving}>
            Reload from GitHub
          </button>
          <button onClick={handleSave} className="btn-primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save & Commit'}
          </button>
        </div>
      </header>

      {saveMessage && (
        <div className={`save-message ${saveMessage.startsWith('✓') ? 'success' : 'error'}`}>
          {saveMessage}
        </div>
      )}

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="sidebar-header">
            <h2>Criteria</h2>
            <button onClick={handleAddCriterion} className="btn-add">+ Add New</button>
          </div>
          <CriteriaList
            criteria={data.criteria}
            selectedId={selectedCriterionId}
            onSelect={setSelectedCriterionId}
            onDelete={handleDeleteCriterion}
          />
        </aside>

        <main className="admin-content">
          {selectedCriterion ? (
            <CriterionEditor
              criterion={selectedCriterion}
              onChange={handleUpdateCriterion}
            />
          ) : (
            <div className="no-selection">
              <p>Select a criterion from the sidebar to edit, or create a new one.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

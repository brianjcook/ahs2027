/**
 * Main Application Component
 *
 * Handles data fetching, state management, and rendering of criteria
 */

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Criterion from './components/Criterion';
import { evaluateEligibility } from './utils/eligibilityEngine';
import { clearHiddenAnswers } from './utils/conditionalLogic';
import './App.css';

// Data source - can be configured for different environments
// Use relative path that works with Vite's base configuration
const DATA_URL = `${import.meta.env.BASE_URL}data/questions.json`;
const POLL_INTERVAL = 30000; // 30 seconds

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentCriterionId, setCurrentCriterionId] = useState(null);

  // Fetch questions data
  useEffect(() => {
    fetchData();

    // Poll for updates every 30 seconds
    const interval = setInterval(fetchData, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Set initial criterion when data loads
  useEffect(() => {
    if (data && data.criteria && data.criteria.length > 0 && !currentCriterionId) {
      setCurrentCriterionId(data.criteria[0].id);
    }
  }, [data, currentCriterionId]);

  // Fetch data from JSON file
  async function fetchData() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
      setLoading(false);
    }
  }

  // Handle answer changes
  function handleAnswerChange(questionId, value) {
    setAnswers((prev) => {
      const updated = {
        ...prev,
        [questionId]: value
      };

      // Clean up hidden answers
      const currentCriterion = data?.criteria.find((c) => c.id === currentCriterionId);
      if (currentCriterion) {
        return clearHiddenAnswers(currentCriterion.questions, updated);
      }

      return updated;
    });
  }

  // Calculate status for all criteria
  function getStatusMap() {
    if (!data || !data.criteria) {
      return {};
    }

    const statusMap = {};
    for (const criterion of data.criteria) {
      const result = evaluateEligibility(criterion.eligibility, answers, criterion.questions);
      statusMap[criterion.id] = result.status;
    }
    return statusMap;
  }

  // Loading state
  if (loading) {
    return (
      <div className="app-loading">
        <div className="spinner"></div>
        <p>Loading questions...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="app-error">
        <h2>Error Loading Data</h2>
        <p>{error}</p>
        <button onClick={fetchData}>Retry</button>
      </div>
    );
  }

  // No data state
  if (!data || !data.criteria || data.criteria.length === 0) {
    return (
      <div className="app-error">
        <h2>No Data Available</h2>
        <p>No criteria found in the data file.</p>
      </div>
    );
  }

  const currentCriterion = data.criteria.find((c) => c.id === currentCriterionId);
  const statusMap = getStatusMap();

  return (
    <div className="app">
      <Sidebar
        criteria={data.criteria}
        currentCriterionId={currentCriterionId}
        onSelectCriterion={setCurrentCriterionId}
        statusMap={statusMap}
      />

      <main className="main-content">
        {currentCriterion ? (
          <Criterion
            criterion={currentCriterion}
            answers={answers}
            onAnswerChange={handleAnswerChange}
          />
        ) : (
          <div className="no-criterion">
            <p>Select a criterion from the sidebar to begin.</p>
          </div>
        )}
      </main>
    </div>
  );
}

/**
 * RightPanels Component
 *
 * Container for Eligibility and Review panels with accordion functionality
 */

import { useState } from 'react';
import EligibilityPanel from './EligibilityPanel';
import ReviewPanel from './ReviewPanel';
import './RightPanels.css';

export default function RightPanels({ criterion, answers, eligibilityResult, visibleQuestions }) {
  const [openPanels, setOpenPanels] = useState({
    eligibility: true,
    review: true
  });

  function togglePanel(panelName) {
    setOpenPanels(prev => ({
      ...prev,
      [panelName]: !prev[panelName]
    }));
  }

  return (
    <div className="right-panels-container">
      {/* Eligibility Panel */}
      <div className="panel-section">
        <button
          className="panel-header"
          onClick={() => togglePanel('eligibility')}
        >
          <span className="panel-toggle">{openPanels.eligibility ? '▼' : '▶'}</span>
          <span className="panel-title">Explain</span>
        </button>
        {openPanels.eligibility && (
          <div className="panel-content">
            <EligibilityPanel
              criterion={criterion}
              answers={answers}
              eligibilityResult={eligibilityResult}
              allQuestions={criterion?.questions || []}
              visibleQuestions={visibleQuestions}
            />
          </div>
        )}
      </div>

      {/* Review Panel */}
      <div className="panel-section">
        <button
          className="panel-header"
          onClick={() => togglePanel('review')}
        >
          <span className="panel-toggle">{openPanels.review ? '▼' : '▶'}</span>
          <span className="panel-title">Review</span>
        </button>
        {openPanels.review && (
          <div className="panel-content">
            <ReviewPanel criterion={criterion} />
          </div>
        )}
      </div>
    </div>
  );
}

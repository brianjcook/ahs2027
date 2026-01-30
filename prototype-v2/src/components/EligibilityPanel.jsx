/**
 * EligibilityPanel Component
 *
 * Right-side panel showing eligibility status and rules
 */

import { getHiddenReason } from '../utils/conditionalLogic';

export default function EligibilityPanel({ criterion, answers, eligibilityResult, allQuestions, visibleQuestions }) {
  if (!criterion) {
    return (
      <div className="explain">
        <div className="explain-card">
          <div className="explain-summary">
            <h3>Eligibility Status</h3>
            <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
              Select a criterion to view eligibility rules and status.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).filter(key =>
    allQuestions.some(q => q.id === key)
  ).length;

  const statusInfo = getStatusInfo(eligibilityResult.status, answeredCount);

  return (
    <div className="explain">
      <div className="explain-card">
        <div className="explain-summary">
          Answered {answeredCount} of {allQuestions.length} questions.
          Question flow is driven by explicit rules.
        </div>

        {/* Question Visibility */}
        <div className="explain-block">
          <strong>Question Visibility</strong>
          <ul className="visibility-list">
            {allQuestions.map((question) => {
              const visible = visibleQuestions.some(vq => vq.id === question.id);
              const reason = getHiddenReason(question, answers);
              const conditionText = reason ? `— ${reason}` : '— always shown';

              return (
                <li key={question.id} className={`visibility-item ${visible ? 'visible' : 'hidden'}`}>
                  <span className="vis-mark">{visible ? '✔' : '✘'}</span>
                  <span>{question.id} {conditionText}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Eligibility Status */}
        <div className="explain-block">
          <strong>Eligibility Status</strong>
          <div className={`eligibility-status ${statusInfo.className}`}>
            <span className="eligibility-icon">{statusInfo.icon}</span>
            {statusInfo.label}
          </div>

          {/* Automatic Disqualifiers */}
          <div className="explain-sub">Automatic disqualifiers:</div>
          {eligibilityResult.hardFails && eligibilityResult.hardFails.length > 0 ? (
            <ul className="requirements-list">
              {eligibilityResult.hardFails.map((condition, i) => (
                <li key={i} className="requirements-list-item hidden">
                  <span className="vis-mark">✘</span>
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '4px' }}>
              No automatic disqualifiers triggered.
            </div>
          )}

          {/* Required Items Checklist */}
          <div className="explain-sub">Required items checklist:</div>
          {criterion.eligibility && criterion.eligibility.required ? (
            <ul className="requirements-list">
              {criterion.eligibility.required.map((condition, i) => {
                const isMissing = eligibilityResult.missingRequired?.includes(condition);
                return (
                  <li key={i} className={`requirements-list-item ${isMissing ? 'hidden' : 'visible'}`}>
                    <span className="vis-mark">{isMissing ? '✘' : '✔'}</span>
                    <span>{condition}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '4px' }}>
              No required conditions defined.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getStatusInfo(status, answeredCount) {
  if (answeredCount === 0) {
    return { label: 'Unanswered', icon: '−', className: 'status-unanswered' };
  }
  if (status === 'eligible') {
    return { label: 'Eligible', icon: '✔', className: 'status-eligible' };
  }
  if (status === 'not_eligible') {
    return { label: 'Not eligible', icon: '✘', className: 'status-ineligible' };
  }
  return { label: 'In progress', icon: '◐', className: 'status-in-progress' };
}

/**
 * Criterion Component
 *
 * Renders a single criterion with all its questions and eligibility status
 */

import { getVisibleQuestions } from '../utils/conditionalLogic';
import { evaluateEligibility, getStatusText, getStatusIcon, getStatusClass } from '../utils/eligibilityEngine';
import BooleanQuestion from './questions/BooleanQuestion';
import SingleQuestion from './questions/SingleQuestion';
import MultiQuestion from './questions/MultiQuestion';
import TextQuestion from './questions/TextQuestion';
import EvidenceQuestion from './questions/EvidenceQuestion';

export default function Criterion({ criterion, answers, onAnswerChange }) {
  // Get questions that should be visible based on current answers
  const visibleQuestions = getVisibleQuestions(criterion.questions, answers);

  // Evaluate eligibility status
  const eligibilityResult = evaluateEligibility(criterion.eligibility, answers, criterion.questions);

  // Render appropriate question component based on type
  const renderQuestion = (question) => {
    const answer = answers[question.id];
    const props = {
      question,
      answer,
      onChange: onAnswerChange
    };

    switch (question.type) {
      case 'boolean':
        return <BooleanQuestion key={question.id} {...props} />;
      case 'single':
        return <SingleQuestion key={question.id} {...props} />;
      case 'multi':
        return <MultiQuestion key={question.id} {...props} />;
      case 'text':
        return <TextQuestion key={question.id} {...props} />;
      case 'evidence':
        return <EvidenceQuestion key={question.id} {...props} />;
      default:
        console.warn('Unknown question type:', question.type);
        return null;
    }
  };

  return (
    <div className="criterion">
      <div className="criterion-header">
        <h2>
          <span className="criterion-id">{criterion.id}</span>
          {criterion.title}
        </h2>
        <div className={`eligibility-status ${getStatusClass(eligibilityResult.status)}`}>
          <span className="status-icon">{getStatusIcon(eligibilityResult.status)}</span>
          <span className="status-text">{getStatusText(eligibilityResult.status)}</span>
        </div>
      </div>

      {criterion.description && (
        <div
          className="criterion-description"
          dangerouslySetInnerHTML={{ __html: criterion.description }}
        />
      )}

      <div className="questions">
        {visibleQuestions.map((question) => renderQuestion(question))}
      </div>

      {/* Eligibility Panel */}
      <div className="eligibility-panel">
        <h3>Eligibility Status</h3>

        {eligibilityResult.hardFails.length > 0 && (
          <div className="hard-fails">
            <h4>❌ Hard-Fail Conditions</h4>
            <ul>
              {eligibilityResult.hardFails.map((condition, i) => (
                <li key={i}>{condition}</li>
              ))}
            </ul>
          </div>
        )}

        {eligibilityResult.missingRequired.length > 0 && (
          <div className="missing-required">
            <h4>⚠️ Missing Requirements</h4>
            <ul>
              {eligibilityResult.missingRequired.map((condition, i) => (
                <li key={i}>{condition}</li>
              ))}
            </ul>
          </div>
        )}

        {eligibilityResult.status === 'eligible' && (
          <div className="eligible-message">
            <h4>✅ All requirements met!</h4>
          </div>
        )}

        <p className="eligibility-decision">
          <strong>Decision Logic:</strong> {criterion.eligibility?.decision}
        </p>
      </div>
    </div>
  );
}

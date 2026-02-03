/**
 * Criterion Component
 *
 * Renders a single criterion with all its questions
 */

import { useState } from 'react';
import { getVisibleQuestions } from '../utils/conditionalLogic';
import BooleanQuestion from './questions/BooleanQuestion';
import SingleQuestion from './questions/SingleQuestion';
import MultiQuestion from './questions/MultiQuestion';
import TextQuestion from './questions/TextQuestion';
import EvidenceQuestion from './questions/EvidenceQuestion';
import URLQuestion from './questions/URLQuestion';
import CriterionInfoModal from './CriterionInfoModal';

export default function Criterion({ criterion, answers, onAnswerChange }) {
  const [showCriterionInfo, setShowCriterionInfo] = useState(false);

  // Get questions that should be visible based on current answers
  const visibleQuestions = getVisibleQuestions(criterion.questions, answers);

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
      case 'url':
        return <URLQuestion key={question.id} {...props} />;
      default:
        console.warn('Unknown question type:', question.type);
        return null;
    }
  };

  return (
    <div className="criterion">
      <div className="criterion-header">
        <h2>{criterion.title}</h2>
        <button
          className="info-link"
          onClick={() => setShowCriterionInfo(true)}
          aria-label="View criterion definition"
        >
          View criterion definition
        </button>
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

      {showCriterionInfo && (
        <CriterionInfoModal
          criterion={criterion}
          onClose={() => setShowCriterionInfo(false)}
        />
      )}
    </div>
  );
}

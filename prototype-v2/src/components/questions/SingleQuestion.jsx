/**
 * SingleQuestion Component
 *
 * Renders a single-select question with radio buttons
 */

import { useState } from 'react';
import QuestionRationaleModal from '../QuestionRationaleModal';

export default function SingleQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);

  const handleChange = (e) => {
    onChange(question.id, e.target.value);
  };

  return (
    <>
      <div className="question single-question">
        <label className="question-label">
          <span className="question-id">{question.id}.</span> {question.text}
          {question.rationales && (
            <a
              href="#"
              className="rationale-link"
              onClick={(e) => {
                e.preventDefault();
                setShowRationale(true);
              }}
            >
              See rationale &gt;
            </a>
          )}
        </label>

        <div className="options">
          {question.options.map((option) => (
            <label key={option} className="option">
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={answer === option}
                onChange={handleChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {showRationale && (
        <QuestionRationaleModal
          question={question}
          onClose={() => setShowRationale(false)}
        />
      )}
    </>
  );
}

/**
 * TextQuestion Component
 *
 * Renders a free-form text input question
 */

import { useState } from 'react';
import QuestionRationaleModal from '../QuestionRationaleModal';

export default function TextQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);

  const handleChange = (e) => {
    onChange(question.id, e.target.value);
  };

  return (
    <>
      <div className="question text-question">
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

        {question.multiline ? (
          <textarea
            className="text-input"
            value={answer || ''}
            onChange={handleChange}
            rows="4"
            placeholder="Enter your response..."
          />
        ) : (
          <input
            type="text"
            className="text-input"
            value={answer || ''}
            onChange={handleChange}
            placeholder="Enter your response..."
          />
        )}
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

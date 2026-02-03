/**
 * URLQuestion Component
 *
 * Renders a URL input question with validation
 */

import { useState } from 'react';
import QuestionRationaleModal from '../QuestionRationaleModal';

export default function URLQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);
  const [error, setError] = useState('');

  const validateURL = (url) => {
    if (!url) return '';

    try {
      new URL(url);
      return '';
    } catch (e) {
      return 'Please enter a valid URL (e.g., https://example.com)';
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const validationError = validateURL(value);
    setError(validationError);

    // Only save valid URLs or empty values
    if (!validationError || !value) {
      onChange(question.id, value);
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setError(validateURL(value));
  };

  return (
    <>
      <div className="question url-question">
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

        <div className="url-input-container">
          <input
            type="url"
            className={`url-input ${error ? 'error' : ''}`}
            placeholder="https://example.com"
            value={answer || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error && <div className="error-message">{error}</div>}
        </div>

        {answer && !error && (
          <div className="url-preview">
            <strong>URL:</strong>{' '}
            <a href={answer} target="_blank" rel="noopener noreferrer">
              {answer}
            </a>
          </div>
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

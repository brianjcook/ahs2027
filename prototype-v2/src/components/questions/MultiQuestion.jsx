/**
 * MultiQuestion Component
 *
 * Renders a multi-select question with checkboxes
 */

import { useState } from 'react';
import Modal from '../Modal';

export default function MultiQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);
  const selectedValues = Array.isArray(answer) ? answer : [];

  const handleChange = (option, checked) => {
    let newValue;
    if (checked) {
      newValue = [...selectedValues, option];
    } else {
      newValue = selectedValues.filter((v) => v !== option);
    }
    onChange(question.id, newValue);
  };

  const handleOtherText = (text) => {
    onChange(`${question.id}_other`, text);
  };

  return (
    <>
      <div className="question multi-question">
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
                type="checkbox"
                value={option}
                checked={selectedValues.includes(option)}
                onChange={(e) => handleChange(option, e.target.checked)}
              />
              <span>{option}</span>
            </label>
          ))}

          {question.allowOther && (
            <div className="other-option">
              <label className="option">
                <input
                  type="checkbox"
                  value="Other"
                  checked={selectedValues.includes('Other')}
                  onChange={(e) => handleChange('Other', e.target.checked)}
                />
                <span>Other (specify):</span>
              </label>
              {selectedValues.includes('Other') && (
                <input
                  type="text"
                  className="other-text"
                  placeholder="Please specify..."
                  onChange={(e) => handleOtherText(e.target.value)}
                />
              )}
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showRationale}
        onClose={() => setShowRationale(false)}
        title="Question Rationale"
      >
        <div className="modal-question">{question.text}</div>
        <div className="modal-rationale">{question.rationales}</div>
      </Modal>
    </>
  );
}

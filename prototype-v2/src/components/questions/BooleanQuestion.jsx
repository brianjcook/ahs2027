/**
 * BooleanQuestion Component
 *
 * Renders a Yes/No question with radio buttons
 */

import { useState } from 'react';
import Modal from '../Modal';

export default function BooleanQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);

  const handleChange = (e) => {
    onChange(question.id, e.target.value);
  };

  return (
    <>
      <div className="question boolean-question">
        <label className="question-label">
          {question.text}
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

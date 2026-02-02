/**
 * EvidenceQuestion Component
 *
 * Renders an evidence upload/link question
 */

import { useState } from 'react';
import Modal from '../Modal';

export default function EvidenceQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);

  // If only one option and it's a file upload, auto-select it
  const isSingleFileUpload = question.options.length === 1 &&
                             question.options[0].toLowerCase().includes('upload');

  const selectedType = answer?.type || (isSingleFileUpload ? question.options[0] : null);

  const handleTypeChange = (type) => {
    onChange(question.id, { type, value: null });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const answerObj = {
        type: selectedType || question.options[0],
        value: file.name // In production, this would upload the file
      };
      console.log('EvidenceQuestion handleFileChange:', {
        questionId: question.id,
        file: file.name,
        selectedType,
        answerObj,
        currentAnswer: answer
      });
      onChange(question.id, answerObj);
    }
  };

  const handleLinkChange = (e) => {
    onChange(question.id, {
      type: selectedType,
      value: e.target.value
    });
  };

  return (
    <>
      <div className="question evidence-question">
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

        {isSingleFileUpload ? (
          // Single file upload - show directly without radio button
          <div className="evidence-input">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>
        ) : (
          // Multiple options - show radio buttons
          <div className="options">
            {question.options.map((option) => (
              <div key={option} className="evidence-option">
                <label className="option">
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={selectedType === option}
                    onChange={() => handleTypeChange(option)}
                  />
                  <span>{option}</span>
                </label>

                {selectedType === option && (
                  <div className="evidence-input">
                    {option.toLowerCase().includes('upload') ? (
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    ) : (
                      <input
                        type="url"
                        placeholder="Enter URL..."
                        value={answer?.value || ''}
                        onChange={handleLinkChange}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {answer?.value && (
          <div className="evidence-preview">
            <strong>Selected:</strong> {answer.value}
          </div>
        )}
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

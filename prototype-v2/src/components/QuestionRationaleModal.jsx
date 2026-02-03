/**
 * QuestionRationaleModal Component
 *
 * Modal displaying question rationales from multiple expert perspectives
 */

import { useEffect } from 'react';

export default function QuestionRationaleModal({ question, onClose }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Parse rationales from string format
  const parseRationales = (rationalesString) => {
    if (!rationalesString) return [];

    // Split by expert type pattern (word/phrase followed by colon)
    const parts = rationalesString.split(/(?=[A-Z][^:]*:)/);

    return parts
      .filter(part => part.trim())
      .map(part => {
        const colonIndex = part.indexOf(':');
        if (colonIndex === -1) return null;

        const expert = part.substring(0, colonIndex).trim();
        const rationale = part.substring(colonIndex + 1).trim();

        return { expert, rationale };
      })
      .filter(Boolean);
  };

  const rationales = parseRationales(question.rationales);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Question Rationale</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="question-text">
            <strong>{question.id}:</strong> {question.text}
          </div>

          {rationales.length > 0 ? (
            <div className="rationales-list">
              <h4>Expert Perspectives</h4>
              <ul>
                {rationales.map((item, index) => (
                  <li key={index}>
                    <strong>{item.expert}:</strong> {item.rationale}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="no-rationale">
              No rationale provided for this question.
            </div>
          )}

          {question.citations && question.citations !== "None provided." && (
            <div className="citations">
              <h4>Citations</h4>
              <p>{question.citations}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

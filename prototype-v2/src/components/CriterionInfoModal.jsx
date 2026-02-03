/**
 * CriterionInfoModal Component
 *
 * Modal displaying criterion text and "Fully in place" definition
 */

import { useEffect } from 'react';

export default function CriterionInfoModal({ criterion, onClose }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Parse criterion text to extract question and bullets
  const parseCriterionText = (text) => {
    if (!text) return { intro: '', bullets: [] };

    // Split on bullet points (• or -)
    const parts = text.split(/\n\s*[•\-]\s*/);

    // First part is the intro text
    const intro = parts[0].trim();

    // Remaining parts are bullets
    const bullets = parts.slice(1)
      .map(b => b.trim())
      .filter(b => b.length > 0);

    return { intro, bullets };
  };

  const definitionText = criterion.fullyInPlaceDefinition || criterion.criterionText;
  const { intro, bullets } = parseCriterionText(definitionText);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{criterion.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-body">
          {criterion.question && (
            <div className="criterion-info-section">
              <h4>Question</h4>
              <div className="criterion-question">
                {criterion.question}
              </div>
            </div>
          )}

          <div className="criterion-info-section">
            <h4>Fully in Place Definition</h4>
            <div className="criterion-definition">
              {intro}
              {bullets.length > 0 && (
                <ul>
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {criterion.notes && (
            <div className="criterion-info-section">
              <h4>Notes</h4>
              <div className="criterion-notes">
                {criterion.notes}
              </div>
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

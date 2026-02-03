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
          <div className="criterion-info-section">
            <h4>Fully in Place Definition</h4>
            <div className="criterion-definition">
              {criterion.fullyInPlaceDefinition || criterion.criterionText}
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

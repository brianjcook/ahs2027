/**
 * CriteriaList Component
 * Lists all criteria in the sidebar
 */

export default function CriteriaList({ criteria, selectedId, onSelect, onDelete }) {
  return (
    <div className="criteria-list">
      {criteria.map(criterion => (
        <div
          key={criterion.id}
          className={`criterion-item ${selectedId === criterion.id ? 'active' : ''}`}
        >
          <button
            className="criterion-button"
            onClick={() => onSelect(criterion.id)}
          >
            <div className="criterion-id">{criterion.id}</div>
            <div className="criterion-title">{criterion.title}</div>
            <div className="criterion-meta">
              {criterion.questions.length} question{criterion.questions.length !== 1 ? 's' : ''}
            </div>
          </button>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(criterion.id);
            }}
            title="Delete criterion"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

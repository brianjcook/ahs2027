/**
 * Sidebar Component
 *
 * Navigation sidebar showing all criteria
 */

export default function Sidebar({ criteria, currentCriterionId, onSelectCriterion, statusMap }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Criteria</div>
      <div className="criteria-nav">
        {criteria.map((criterion) => {
          const status = statusMap[criterion.id] || 'unknown';
          const isActive = criterion.id === currentCriterionId;

          // Map status to icon class
          const statusClass = status === 'not_eligible' ? 'status-not-eligible' :
                              status === 'in_progress' ? 'status-in-progress' :
                              status === 'eligible' ? 'status-eligible' : '';

          return (
            <button
              key={criterion.id}
              className={`criterion-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCriterion(criterion.id)}
            >
              <span className={`nav-icon ${statusClass}`}>
                {getStatusIcon(status)}
              </span>
              <span className="nav-text">{criterion.id}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function getStatusIcon(status) {
  const iconMap = {
    eligible: '✔',
    not_eligible: '✘',
    in_progress: '◐',
    unknown: '−'
  };
  return iconMap[status] || '−';
}

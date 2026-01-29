/**
 * Sidebar Component
 *
 * Navigation sidebar showing all criteria
 */

import { getStatusIcon } from '../utils/eligibilityEngine';

export default function Sidebar({ criteria, currentCriterionId, onSelectCriterion, statusMap }) {
  return (
    <div className="sidebar">
      <h1>AHS 2027 Award Application</h1>

      <nav className="criteria-nav">
        {criteria.map((criterion) => {
          const status = statusMap[criterion.id] || 'unknown';
          const isActive = criterion.id === currentCriterionId;

          return (
            <button
              key={criterion.id}
              className={`criterion-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCriterion(criterion.id)}
            >
              <span className="nav-icon">{getStatusIcon(status)}</span>
              <div className="nav-text">
                <div className="nav-id">{criterion.id}</div>
                <div className="nav-title">{criterion.title}</div>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

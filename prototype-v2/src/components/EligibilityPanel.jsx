/**
 * EligibilityPanel Component
 *
 * Right-side panel showing eligibility status and rules
 */

export default function EligibilityPanel({ criterion, eligibilityResult }) {
  if (!criterion) {
    return (
      <div className="explain">
        <div className="explain-card">
          <div className="explain-summary">
            <h3>Eligibility Status</h3>
            <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
              Select a criterion to view eligibility rules and status.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const statusClass = eligibilityResult.status.replace('_', '-');

  return (
    <div className="explain">
      <div className="explain-card">
        <div className="explain-summary">
          <h3>{criterion.title}</h3>
          <div className="criterion-id">{criterion.id}</div>
        </div>

        {/* Current Status */}
        <div className="explain-block">
          <h4>
            📊 Current Status
          </h4>
          <div className={`status-badge ${statusClass}`}>
            {getStatusIcon(eligibilityResult.status)} {getStatusText(eligibilityResult.status)}
          </div>
        </div>

        {/* Hard-Fail Conditions */}
        {eligibilityResult.hardFails && eligibilityResult.hardFails.length > 0 && (
          <div className="explain-block">
            <h4>❌ Hard-Fail Conditions Triggered</h4>
            <ul>
              {eligibilityResult.hardFails.map((condition, i) => (
                <li key={i}>{condition}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Missing Requirements */}
        {eligibilityResult.missingRequired && eligibilityResult.missingRequired.length > 0 && (
          <div className="explain-block">
            <h4>⚠️ Missing Requirements</h4>
            <ul>
              {eligibilityResult.missingRequired.map((condition, i) => (
                <li key={i}>{condition}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Eligible Message */}
        {eligibilityResult.status === 'eligible' && (
          <div className="explain-block">
            <h4>✅ All Requirements Met</h4>
            <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>
              This criterion meets all eligibility requirements.
            </p>
          </div>
        )}

        {/* Eligibility Decision Logic */}
        {criterion.eligibility?.decision && (
          <div className="eligibility-decision">
            <strong>Decision Logic:</strong> {criterion.eligibility.decision}
          </div>
        )}
      </div>
    </div>
  );
}

function getStatusText(status) {
  const statusMap = {
    eligible: 'Eligible',
    not_eligible: 'Not Eligible',
    in_progress: 'In Progress',
    unknown: 'Unknown'
  };
  return statusMap[status] || 'Unknown';
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

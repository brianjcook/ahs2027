/**
 * RuleEditor Component
 * Form for editing a single structured scoring rule
 */

export default function RuleEditor({ rule, questions, onChange, onDelete }) {
  const handleFieldChange = (field, value) => {
    onChange({ ...rule, [field]: value });
  };

  const operators = [
    { value: 'equals', label: 'equals' },
    { value: 'notEquals', label: 'does not equal' },
    { value: 'includes', label: 'includes (multi-select)' },
    { value: 'includesMinimum', label: 'includes at least N items' },
    { value: 'anyEquals', label: 'any of these equals' },
    { value: 'isAnswered', label: 'is answered' },
    { value: 'greaterThan', label: 'is greater than' },
    { value: 'lessThan', label: 'is less than' }
  ];

  const needsValue = !['isAnswered'].includes(rule.operator);
  const needsMinimumCount = rule.operator === 'includesMinimum';
  const needsMultipleQuestions = rule.operator === 'anyEquals';

  return (
    <div className="rule-editor">
      <div className="rule-fields">
        {!needsMultipleQuestions ? (
          <div className="rule-field">
            <label>Question</label>
            <select
              value={rule.questionId || ''}
              onChange={(e) => handleFieldChange('questionId', e.target.value)}
            >
              <option value="">Select question...</option>
              {questions.map(q => (
                <option key={q.id} value={q.id}>
                  {q.id}: {q.text.substring(0, 50)}...
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="rule-field">
            <label>Questions (select multiple)</label>
            <select
              multiple
              size="5"
              value={rule.questionIds || []}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, opt => opt.value);
                handleFieldChange('questionIds', selected);
              }}
            >
              {questions.map(q => (
                <option key={q.id} value={q.id}>
                  {q.id}: {q.text.substring(0, 50)}...
                </option>
              ))}
            </select>
            <small>Hold Ctrl/Cmd to select multiple</small>
          </div>
        )}

        <div className="rule-field">
          <label>Operator</label>
          <select
            value={rule.operator || 'equals'}
            onChange={(e) => handleFieldChange('operator', e.target.value)}
          >
            {operators.map(op => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
        </div>

        {needsMinimumCount && (
          <div className="rule-field">
            <label>Minimum Count</label>
            <input
              type="number"
              min="1"
              value={rule.minimumCount || 1}
              onChange={(e) => handleFieldChange('minimumCount', parseInt(e.target.value))}
            />
          </div>
        )}

        {needsValue && !needsMinimumCount && (
          <div className="rule-field">
            <label>Value</label>
            <input
              type="text"
              value={rule.value || ''}
              onChange={(e) => handleFieldChange('value', e.target.value)}
              placeholder="Enter value..."
            />
          </div>
        )}
      </div>

      <div className="rule-description">
        <label>Description (optional)</label>
        <input
          type="text"
          value={rule.description || ''}
          onChange={(e) => handleFieldChange('description', e.target.value)}
          placeholder="Human-readable description..."
        />
      </div>

      <button
        type="button"
        onClick={onDelete}
        className="btn-icon delete"
        title="Delete rule"
      >
        × Delete
      </button>
    </div>
  );
}

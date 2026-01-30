/**
 * ScoringEditor Component (New Version)
 * Form for editing structured scoring/eligibility rules
 */

import RuleEditor from './RuleEditor';

export default function ScoringEditor({ scoring, questions, onChange }) {
  const handleAddRule = (ruleType) => {
    const newRule = {
      questionId: '',
      operator: 'equals',
      value: '',
      description: ''
    };

    onChange({
      ...scoring,
      [ruleType]: [...(scoring[ruleType] || []), newRule]
    });
  };

  const handleUpdateRule = (ruleType, index, updatedRule) => {
    const rules = [...(scoring[ruleType] || [])];
    rules[index] = updatedRule;
    onChange({
      ...scoring,
      [ruleType]: rules
    });
  };

  const handleDeleteRule = (ruleType, index) => {
    onChange({
      ...scoring,
      [ruleType]: scoring[ruleType].filter((_, i) => i !== index)
    });
  };

  const handleEligibilityChange = (text) => {
    onChange({
      ...scoring,
      eligibility: text
    });
  };

  const hardFailRules = scoring.hardFail || [];
  const requiredRules = scoring.required || [];

  return (
    <div className="form-section scoring-editor">
      <h2>Scoring & Eligibility Rules</h2>

      <div className="help-box">
        <h4>How Scoring Works:</h4>
        <ul>
          <li><strong>Hard Fail:</strong> If ANY of these rules are true, the criterion automatically fails</li>
          <li><strong>Required:</strong> ALL of these rules must be true for eligibility (if no hard-fail)</li>
        </ul>
      </div>

      <div className="rules-section">
        <div className="section-header-small">
          <h3>Hard Fail Conditions</h3>
          <button
            type="button"
            onClick={() => handleAddRule('hardFail')}
            className="btn-small"
          >
            + Add Rule
          </button>
        </div>
        <small>If ANY of these conditions are true, the criterion automatically fails:</small>

        {hardFailRules.length === 0 ? (
          <div className="empty-rules">No hard-fail rules defined. Click "+ Add Rule" to create one.</div>
        ) : (
          <div className="rules-list">
            {hardFailRules.map((rule, index) => (
              <RuleEditor
                key={index}
                rule={rule}
                questions={questions}
                onChange={(updated) => handleUpdateRule('hardFail', index, updated)}
                onDelete={() => handleDeleteRule('hardFail', index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="rules-section">
        <div className="section-header-small">
          <h3>Required Conditions</h3>
          <button
            type="button"
            onClick={() => handleAddRule('required')}
            className="btn-small"
          >
            + Add Rule
          </button>
        </div>
        <small>ALL of these conditions must be true for eligibility:</small>

        {requiredRules.length === 0 ? (
          <div className="empty-rules">No required rules defined. Click "+ Add Rule" to create one.</div>
        ) : (
          <div className="rules-list">
            {requiredRules.map((rule, index) => (
              <RuleEditor
                key={index}
                rule={rule}
                questions={questions}
                onChange={(updated) => handleUpdateRule('required', index, updated)}
                onDelete={() => handleDeleteRule('required', index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="form-group">
        <label>Eligibility Description</label>
        <textarea
          value={scoring.eligibility || ''}
          onChange={(e) => handleEligibilityChange(e.target.value)}
          rows="4"
          placeholder="Describe how eligibility is determined..."
        />
        <small>
          Human-readable description of the eligibility logic. Shown to reviewers.
        </small>
      </div>

      <div className="question-reference">
        <h4>Questions in this criterion:</h4>
        <ul>
          {questions.map(q => (
            <li key={q.id}>
              <strong>{q.id}</strong>: {q.text} <em>({q.type})</em>
              {q.options && q.options.length > 0 && (
                <div className="option-list">
                  Options: {q.options.join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

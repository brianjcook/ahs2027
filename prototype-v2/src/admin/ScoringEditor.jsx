/**
 * ScoringEditor Component
 * Form for editing scoring/eligibility rules
 */

export default function ScoringEditor({ scoring, questions, onChange }) {
  const handleHardFailChange = (text) => {
    const rules = text.split('\n').filter(r => r.trim());
    onChange({
      ...scoring,
      hardFail: rules
    });
  };

  const handleRequiredChange = (text) => {
    const rules = text.split('\n').filter(r => r.trim());
    onChange({
      ...scoring,
      required: rules
    });
  };

  const handleEligibilityChange = (text) => {
    onChange({
      ...scoring,
      eligibility: text
    });
  };

  return (
    <div className="form-section scoring-editor">
      <h2>Scoring & Eligibility Rules</h2>

      <div className="help-box">
        <h4>Rule Syntax Examples:</h4>
        <ul>
          <li><code>Q1 is "Yes."</code> - Checks if Q1 equals "Yes"</li>
          <li><code>Q2 is not "Option A."</code> - Checks if Q2 does not equal "Option A"</li>
          <li><code>Q3 includes "Value"</code> - Checks if multi-select Q3 includes "Value"</li>
          <li><code>Any of Q1 through Q4 is "No."</code> - Checks if any question in range is "No"</li>
        </ul>
      </div>

      <div className="form-group">
        <label>Hard Fail Conditions</label>
        <textarea
          value={scoring.hardFail?.join('\n') || ''}
          onChange={(e) => handleHardFailChange(e.target.value)}
          rows="8"
          placeholder='Q1 is "No."&#10;Q2 is not "4 or more."&#10;Any of Q1 through Q4 is "No."'
        />
        <small>
          One rule per line. If ANY of these conditions are true, the criterion automatically fails.
        </small>
      </div>

      <div className="form-group">
        <label>Required Conditions</label>
        <textarea
          value={scoring.required?.join('\n') || ''}
          onChange={(e) => handleRequiredChange(e.target.value)}
          rows="8"
          placeholder='Q1 is "Yes."&#10;Q2 includes at least 3 items.'
        />
        <small>
          One rule per line. ALL of these conditions must be true for eligibility (if no hard-fail).
        </small>
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

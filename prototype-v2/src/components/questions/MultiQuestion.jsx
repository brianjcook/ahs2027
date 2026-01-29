/**
 * MultiQuestion Component
 *
 * Renders a multi-select question with checkboxes
 */

export default function MultiQuestion({ question, answer, onChange }) {
  const selectedValues = Array.isArray(answer) ? answer : [];

  const handleChange = (option, checked) => {
    let newValue;
    if (checked) {
      newValue = [...selectedValues, option];
    } else {
      newValue = selectedValues.filter((v) => v !== option);
    }
    onChange(question.id, newValue);
  };

  const handleOtherText = (text) => {
    onChange(`${question.id}_other`, text);
  };

  return (
    <div className="question multi-question">
      <label className="question-label">
        {question.text}
        {question.rationales && (
          <button
            type="button"
            className="rationale-btn"
            onClick={() => alert(question.rationales)}
            title="View rationale"
          >
            ℹ️
          </button>
        )}
      </label>

      <div className="options">
        {question.options.map((option) => (
          <label key={option} className="option-label">
            <input
              type="checkbox"
              value={option}
              checked={selectedValues.includes(option)}
              onChange={(e) => handleChange(option, e.target.checked)}
            />
            <span>{option}</span>
          </label>
        ))}

        {question.allowOther && (
          <div className="other-option">
            <label className="option-label">
              <input
                type="checkbox"
                value="Other"
                checked={selectedValues.includes('Other')}
                onChange={(e) => handleChange('Other', e.target.checked)}
              />
              <span>Other (specify):</span>
            </label>
            {selectedValues.includes('Other') && (
              <input
                type="text"
                className="other-text"
                placeholder="Please specify..."
                onChange={(e) => handleOtherText(e.target.value)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

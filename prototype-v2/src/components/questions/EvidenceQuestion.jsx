/**
 * EvidenceQuestion Component
 *
 * Renders an evidence upload/link question
 */

export default function EvidenceQuestion({ question, answer, onChange }) {
  const selectedType = answer?.type || null;

  const handleTypeChange = (type) => {
    onChange(question.id, { type, value: null });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(question.id, {
        type: selectedType,
        value: file.name // In production, this would upload the file
      });
    }
  };

  const handleLinkChange = (e) => {
    onChange(question.id, {
      type: selectedType,
      value: e.target.value
    });
  };

  return (
    <div className="question evidence-question">
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
          <div key={option} className="evidence-option">
            <label className="option-label">
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={selectedType === option}
                onChange={() => handleTypeChange(option)}
              />
              <span>{option}</span>
            </label>

            {selectedType === option && (
              <div className="evidence-input">
                {option.toLowerCase().includes('upload') ? (
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                ) : (
                  <input
                    type="url"
                    placeholder="Enter URL..."
                    value={answer?.value || ''}
                    onChange={handleLinkChange}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {answer?.value && (
        <div className="evidence-preview">
          <strong>Selected:</strong> {answer.value}
        </div>
      )}
    </div>
  );
}

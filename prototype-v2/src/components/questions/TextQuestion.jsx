/**
 * TextQuestion Component
 *
 * Renders a free-form text input question
 */

export default function TextQuestion({ question, answer, onChange }) {
  const handleChange = (e) => {
    onChange(question.id, e.target.value);
  };

  return (
    <div className="question text-question">
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

      {question.multiline ? (
        <textarea
          className="text-input"
          value={answer || ''}
          onChange={handleChange}
          rows="4"
          placeholder="Enter your response..."
        />
      ) : (
        <input
          type="text"
          className="text-input"
          value={answer || ''}
          onChange={handleChange}
          placeholder="Enter your response..."
        />
      )}
    </div>
  );
}

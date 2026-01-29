/**
 * SingleQuestion Component
 *
 * Renders a single-select question with radio buttons
 */

export default function SingleQuestion({ question, answer, onChange }) {
  const handleChange = (e) => {
    onChange(question.id, e.target.value);
  };

  return (
    <div className="question single-question">
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
              type="radio"
              name={question.id}
              value={option}
              checked={answer === option}
              onChange={handleChange}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

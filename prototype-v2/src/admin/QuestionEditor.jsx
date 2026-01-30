/**
 * QuestionEditor Component
 * Form for editing a single question
 */

import { useState } from 'react';

export default function QuestionEditor({
  question,
  index,
  totalQuestions,
  allQuestions,
  onChange,
  onDelete,
  onMove
}) {
  const [expanded, setExpanded] = useState(false);

  const handleFieldChange = (field, value) => {
    onChange({
      ...question,
      [field]: value
    });
  };

  const handleOptionsChange = (optionsText) => {
    const options = optionsText.split('\n').filter(o => o.trim());
    handleFieldChange('options', options);
  };

  const handleAddCondition = () => {
    const newCondition = { id: 'Q1', equals: '' };
    handleFieldChange('showIf', [...question.showIf, newCondition]);
  };

  const handleUpdateCondition = (condIndex, field, value) => {
    const newShowIf = [...question.showIf];
    newShowIf[condIndex] = { ...newShowIf[condIndex], [field]: value };
    handleFieldChange('showIf', newShowIf);
  };

  const handleDeleteCondition = (condIndex) => {
    handleFieldChange('showIf', question.showIf.filter((_, i) => i !== condIndex));
  };

  return (
    <div className="question-editor">
      <div className="question-header">
        <div className="question-summary">
          <span className="question-number">{question.id}</span>
          <span className="question-type-badge">{question.type}</span>
          <span className="question-preview">{question.text || '(untitled)'}</span>
          {question.showIf.length > 0 && (
            <span className="conditional-badge" title="Has conditional logic">
              ⚡ Conditional
            </span>
          )}
        </div>
        <div className="question-actions">
          <button
            onClick={() => onMove('up')}
            disabled={index === 0}
            title="Move up"
            className="btn-icon"
          >
            ↑
          </button>
          <button
            onClick={() => onMove('down')}
            disabled={index === totalQuestions - 1}
            title="Move down"
            className="btn-icon"
          >
            ↓
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="btn-icon"
            title={expanded ? 'Collapse' : 'Expand'}
          >
            {expanded ? '−' : '+'}
          </button>
          <button onClick={onDelete} className="btn-icon delete" title="Delete">
            ×
          </button>
        </div>
      </div>

      {expanded && (
        <div className="question-form">
          <div className="form-row">
            <div className="form-group">
              <label>Question ID</label>
              <input
                type="text"
                value={question.id}
                onChange={(e) => handleFieldChange('id', e.target.value)}
                placeholder="Q1"
              />
            </div>

            <div className="form-group">
              <label>Question Type</label>
              <select
                value={question.type}
                onChange={(e) => handleFieldChange('type', e.target.value)}
              >
                <option value="boolean">Boolean (Yes/No)</option>
                <option value="single">Single Select</option>
                <option value="multi">Multi Select</option>
                <option value="text">Text Input</option>
                <option value="evidence">Evidence Upload</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Question Text</label>
            <textarea
              value={question.text}
              onChange={(e) => handleFieldChange('text', e.target.value)}
              rows="3"
              placeholder="Enter the question text..."
            />
          </div>

          {(question.type === 'single' || question.type === 'multi' || question.type === 'boolean' || question.type === 'evidence') && (
            <div className="form-group">
              <label>Options (one per line)</label>
              <textarea
                value={question.options?.join('\n') || ''}
                onChange={(e) => handleOptionsChange(e.target.value)}
                rows="6"
                placeholder="Option 1&#10;Option 2&#10;Option 3"
              />
            </div>
          )}

          {question.type === 'multi' && (
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={question.allowOther || false}
                  onChange={(e) => handleFieldChange('allowOther', e.target.checked)}
                />
                Allow "Other" option with text input
              </label>
            </div>
          )}

          {question.type === 'text' && (
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={question.multiline || false}
                  onChange={(e) => handleFieldChange('multiline', e.target.checked)}
                />
                Multiline textarea
              </label>
            </div>
          )}

          <div className="form-group">
            <label>Rationales</label>
            <textarea
              value={question.rationales || ''}
              onChange={(e) => handleFieldChange('rationales', e.target.value)}
              rows="4"
              placeholder="Explanation of why this question is asked..."
            />
          </div>

          <div className="form-group">
            <label>Citations</label>
            <textarea
              value={question.citations || ''}
              onChange={(e) => handleFieldChange('citations', e.target.value)}
              rows="2"
              placeholder="References or citations..."
            />
          </div>

          {/* Conditional Logic Section */}
          <div className="form-group conditional-section">
            <div className="section-header-small">
              <label>Conditional Logic (Show If...)</label>
              <button
                type="button"
                onClick={handleAddCondition}
                className="btn-small"
              >
                + Add Condition
              </button>
            </div>
            {question.showIf.length === 0 ? (
              <small>This question is always visible. Add conditions to show it conditionally.</small>
            ) : (
              <div className="conditions-list">
                <small>Show this question when ALL of these conditions are true:</small>
                {question.showIf.map((condition, condIndex) => (
                  <div key={condIndex} className="condition-row">
                    <select
                      value={condition.id}
                      onChange={(e) => handleUpdateCondition(condIndex, 'id', e.target.value)}
                    >
                      <option value="">Select question...</option>
                      {allQuestions.map(q => (
                        <option key={q.id} value={q.id}>{q.id}</option>
                      ))}
                    </select>

                    <select
                      value={condition.equals !== undefined ? 'equals' : 'includes'}
                      onChange={(e) => {
                        const newCond = { id: condition.id };
                        if (e.target.value === 'equals') {
                          newCond.equals = condition.includes || '';
                        } else {
                          newCond.includes = condition.equals || '';
                        }
                        handleFieldChange('showIf',
                          question.showIf.map((c, i) => i === condIndex ? newCond : c)
                        );
                      }}
                    >
                      <option value="equals">equals</option>
                      <option value="includes">includes</option>
                    </select>

                    <input
                      type="text"
                      value={condition.equals !== undefined ? condition.equals : condition.includes}
                      onChange={(e) => {
                        const field = condition.equals !== undefined ? 'equals' : 'includes';
                        handleUpdateCondition(condIndex, field, e.target.value);
                      }}
                      placeholder="value"
                    />

                    <button
                      type="button"
                      onClick={() => handleDeleteCondition(condIndex)}
                      className="btn-icon delete"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Repeated Question Pattern */}
          {question.repeatedFor && (
            <div className="form-group">
              <label>Repeated For (Advanced)</label>
              <input
                type="text"
                value={question.repeatedFor || ''}
                onChange={(e) => handleFieldChange('repeatedFor', e.target.value)}
                placeholder="e.g., Q1"
              />
              <small>Creates a copy of this question for each selected option in the referenced question</small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

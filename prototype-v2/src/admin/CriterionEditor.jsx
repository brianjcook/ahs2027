/**
 * CriterionEditor Component
 * Form for editing a single criterion
 */

import { useState } from 'react';
import QuestionEditor from './QuestionEditor';
import ScoringEditor from './ScoringEditor2';

export default function CriterionEditor({ criterion, onChange, topics }) {
  const [activeTab, setActiveTab] = useState('basic');

  const handleFieldChange = (field, value) => {
    onChange({
      ...criterion,
      [field]: value
    });
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: `Q${criterion.questions.length + 1}`,
      text: '',
      type: 'boolean',
      options: ['Yes', 'No'],
      allowOther: false,
      rationales: '',
      citations: 'None provided.',
      showIf: []
    };

    onChange({
      ...criterion,
      questions: [...criterion.questions, newQuestion]
    });
  };

  const handleUpdateQuestion = (index, updatedQuestion) => {
    const newQuestions = [...criterion.questions];
    newQuestions[index] = updatedQuestion;
    onChange({
      ...criterion,
      questions: newQuestions
    });
  };

  const handleDeleteQuestion = (index) => {
    if (!confirm('Delete this question?')) return;

    onChange({
      ...criterion,
      questions: criterion.questions.filter((_, i) => i !== index)
    });
  };

  const handleMoveQuestion = (index, direction) => {
    const newQuestions = [...criterion.questions];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newQuestions.length) return;

    [newQuestions[index], newQuestions[targetIndex]] = [newQuestions[targetIndex], newQuestions[index]];
    onChange({
      ...criterion,
      questions: newQuestions
    });
  };

  return (
    <div className="criterion-editor">
      <div className="editor-tabs">
        <button
          className={activeTab === 'basic' ? 'active' : ''}
          onClick={() => setActiveTab('basic')}
        >
          Basic Info
        </button>
        <button
          className={activeTab === 'questions' ? 'active' : ''}
          onClick={() => setActiveTab('questions')}
        >
          Questions ({criterion.questions.length})
        </button>
        <button
          className={activeTab === 'scoring' ? 'active' : ''}
          onClick={() => setActiveTab('scoring')}
        >
          Scoring Rules
        </button>
      </div>

      <div className="editor-content">
        {activeTab === 'basic' && (
          <div className="form-section">
            <h2>Basic Information</h2>

            <div className="form-group">
              <label>Criterion ID</label>
              <input
                type="text"
                value={criterion.id}
                onChange={(e) => handleFieldChange('id', e.target.value)}
                placeholder="e.g., LWP-S1"
              />
              <small>Unique identifier for this criterion</small>
            </div>

            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={criterion.title}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                placeholder="e.g., LWP-S1: Wellness Policy Coordination Team"
              />
            </div>

            <div className="form-group">
              <label>Topic</label>
              <select
                value={criterion.topicId || ''}
                onChange={(e) => handleFieldChange('topicId', e.target.value || null)}
              >
                <option value="">No Topic</option>
                {topics && topics.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </select>
              <small>Assign this criterion to a topic for organization</small>
            </div>

            <div className="form-group">
              <label>Criterion Text</label>
              <textarea
                value={criterion.criterionText}
                onChange={(e) => handleFieldChange('criterionText', e.target.value)}
                rows="6"
                placeholder="Description of what the criterion requires..."
              />
              <small>This is the main description shown to applicants</small>
            </div>
          </div>
        )}

        {activeTab === 'questions' && (
          <div className="form-section">
            <div className="section-header">
              <h2>Questions</h2>
              <button onClick={handleAddQuestion} className="btn-primary">
                + Add Question
              </button>
            </div>

            {criterion.questions.length === 0 ? (
              <div className="empty-state">
                <p>No questions yet. Click "Add Question" to create one.</p>
              </div>
            ) : (
              <div className="questions-list">
                {criterion.questions.map((question, index) => (
                  <QuestionEditor
                    key={index}
                    question={question}
                    index={index}
                    totalQuestions={criterion.questions.length}
                    allQuestions={criterion.questions}
                    onChange={(updated) => handleUpdateQuestion(index, updated)}
                    onDelete={() => handleDeleteQuestion(index)}
                    onMove={(direction) => handleMoveQuestion(index, direction)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'scoring' && (
          <ScoringEditor
            scoring={criterion.scoring}
            questions={criterion.questions}
            onChange={(updatedScoring) => handleFieldChange('scoring', updatedScoring)}
          />
        )}
      </div>
    </div>
  );
}

/**
 * ReviewPanel Component
 *
 * Displays review status and comments for criteria and questions
 * Supports multi-user collaboration with distinct comment objects
 */

import { useState, useEffect } from 'react';
import './ReviewPanel.css';

const REVIEW_STATUSES = [
  'Not Reviewed',
  'Under Review',
  'Needs Updates',
  'Approved'
];

export default function ReviewPanel({ criterion }) {
  const [reviews, setReviews] = useState({});
  const [criterionStatus, setCriterionStatus] = useState('Not Reviewed');
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [questionComments, setQuestionComments] = useState({});
  const [saving, setSaving] = useState(false);

  // Load reviews from API
  useEffect(() => {
    loadReviews();
  }, []);

  // Update local state when criterion changes
  useEffect(() => {
    if (criterion && reviews[criterion.id]) {
      const criterionReview = reviews[criterion.id];
      setCriterionStatus(criterionReview.status || 'Not Reviewed');
    } else {
      setCriterionStatus('Not Reviewed');
    }
  }, [criterion, reviews]);

  async function loadReviews() {
    try {
      const response = await fetch('/api/reviews');
      const result = await response.json();
      setReviews(result.data || {});
    } catch (error) {
      console.error('Failed to load reviews:', error);
    }
  }

  async function saveReviews(updatedReviews) {
    setSaving(true);
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedReviews),
      });

      if (response.ok) {
        setReviews(updatedReviews);
      } else {
        console.error('Failed to save reviews');
      }
    } catch (error) {
      console.error('Failed to save reviews:', error);
    } finally {
      setSaving(false);
    }
  }

  function handleStatusChange(status) {
    const updated = { ...reviews };
    if (!updated[criterion.id]) {
      updated[criterion.id] = { comments: [], questions: {} };
    }
    updated[criterion.id].status = status;
    setCriterionStatus(status);
    saveReviews(updated);
  }

  function handleAddComment() {
    if (!newCommentText.trim()) return;

    const updated = { ...reviews };
    if (!updated[criterion.id]) {
      updated[criterion.id] = { status: criterionStatus, comments: [], questions: {} };
    }
    if (!updated[criterion.id].comments) {
      updated[criterion.id].comments = [];
    }

    const comment = {
      id: Date.now().toString(),
      author: newCommentAuthor.trim() || 'Anonymous',
      text: newCommentText.trim(),
      timestamp: new Date().toISOString(),
    };

    updated[criterion.id].comments.push(comment);
    saveReviews(updated);
    setNewCommentText('');
  }

  function handleDeleteComment(commentId) {
    const updated = { ...reviews };
    if (updated[criterion.id]?.comments) {
      updated[criterion.id].comments = updated[criterion.id].comments.filter(
        c => c.id !== commentId
      );
      saveReviews(updated);
    }
  }

  function getUniqueQuestionId(questionId) {
    return `${criterion.id}-${questionId}`;
  }

  function handleQuestionStatusChange(questionId, status) {
    const uniqueId = getUniqueQuestionId(questionId);
    const updated = { ...reviews };
    if (!updated[criterion.id]) {
      updated[criterion.id] = { status: criterionStatus, comments: [], questions: {} };
    }
    if (!updated[criterion.id].questions[uniqueId]) {
      updated[criterion.id].questions[uniqueId] = { comments: [] };
    }
    updated[criterion.id].questions[uniqueId].status = status;
    saveReviews(updated);
  }

  function handleAddQuestionComment(questionId, author, text) {
    if (!text.trim()) return;

    const uniqueId = getUniqueQuestionId(questionId);
    const updated = { ...reviews };
    if (!updated[criterion.id]) {
      updated[criterion.id] = { status: criterionStatus, comments: [], questions: {} };
    }
    if (!updated[criterion.id].questions[uniqueId]) {
      updated[criterion.id].questions[uniqueId] = { comments: [] };
    }
    if (!updated[criterion.id].questions[uniqueId].comments) {
      updated[criterion.id].questions[uniqueId].comments = [];
    }

    const comment = {
      id: Date.now().toString(),
      author: author.trim() || 'Anonymous',
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    updated[criterion.id].questions[uniqueId].comments.push(comment);
    saveReviews(updated);
  }

  function handleDeleteQuestionComment(questionId, commentId) {
    const uniqueId = getUniqueQuestionId(questionId);
    const updated = { ...reviews };
    if (updated[criterion.id]?.questions[uniqueId]?.comments) {
      updated[criterion.id].questions[uniqueId].comments =
        updated[criterion.id].questions[uniqueId].comments.filter(
          c => c.id !== commentId
        );
      saveReviews(updated);
    }
  }

  function toggleQuestion(questionId) {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  if (!criterion) {
    return <div className="review-panel">Select a criterion to review</div>;
  }

  const criterionReview = reviews[criterion.id] || { comments: [], questions: {} };
  const criterionComments = criterionReview.comments || [];

  return (
    <div className="review-panel">
      <h3>Review</h3>

      {/* Criterion Status */}
      <div className="review-section">
        <label className="review-label">Criterion Status</label>
        <select
          value={criterionStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="review-status-select"
          disabled={saving}
        >
          {REVIEW_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      {/* Criterion Comments */}
      <div className="review-section">
        <label className="review-label">Criterion Comments</label>

        <div className="comment-list">
          {criterionComments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{formatTimestamp(comment.timestamp)}</span>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="comment-delete"
                  title="Delete comment"
                >×</button>
              </div>
              <div className="comment-text">{comment.text}</div>
            </div>
          ))}
        </div>

        <div className="add-comment">
          <input
            type="text"
            placeholder="Your name"
            value={newCommentAuthor}
            onChange={(e) => setNewCommentAuthor(e.target.value)}
            className="comment-author-input"
          />
          <textarea
            placeholder="Add a comment..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            className="comment-text-input"
            rows={3}
          />
          <button
            onClick={handleAddComment}
            disabled={!newCommentText.trim() || saving}
            className="btn-add-comment"
          >
            Add Comment
          </button>
        </div>
      </div>

      {/* Question Reviews */}
      <div className="review-section">
        <label className="review-label">Question Reviews</label>

        {criterion.questions.map(question => {
          const uniqueId = getUniqueQuestionId(question.id);
          const isExpanded = expandedQuestions.has(question.id);
          const questionReview = criterionReview.questions[uniqueId] || { comments: [] };
          const qComments = questionReview.comments || [];

          return (
            <QuestionReview
              key={question.id}
              question={question}
              uniqueId={uniqueId}
              isExpanded={isExpanded}
              onToggle={() => toggleQuestion(question.id)}
              status={questionReview.status || 'Not Reviewed'}
              comments={qComments}
              onStatusChange={(status) => handleQuestionStatusChange(question.id, status)}
              onAddComment={(author, text) => handleAddQuestionComment(question.id, author, text)}
              onDeleteComment={(commentId) => handleDeleteQuestionComment(question.id, commentId)}
              formatTimestamp={formatTimestamp}
              saving={saving}
            />
          );
        })}
      </div>

      {saving && <div className="review-saving">Saving...</div>}
    </div>
  );
}

function QuestionReview({
  question,
  uniqueId,
  isExpanded,
  onToggle,
  status,
  comments,
  onStatusChange,
  onAddComment,
  onDeleteComment,
  formatTimestamp,
  saving
}) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  function handleAdd() {
    onAddComment(author, text);
    setText('');
  }

  return (
    <div className="question-review">
      <button
        className="question-review-header"
        onClick={onToggle}
      >
        <span className="question-toggle">{isExpanded ? '▼' : '▶'}</span>
        <span className="question-id">{uniqueId}</span>
        <div className="question-badges">
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
          <span className={`question-status status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
            {status}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="question-review-content">
          <div className="question-text">{question.text}</div>

          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="review-status-select"
            disabled={saving}
          >
            {REVIEW_STATUSES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <div className="comment-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-time">{formatTimestamp(comment.timestamp)}</span>
                  <button
                    onClick={() => onDeleteComment(comment.id)}
                    className="comment-delete"
                    title="Delete comment"
                  >×</button>
                </div>
                <div className="comment-text">{comment.text}</div>
              </div>
            ))}
          </div>

          <div className="add-comment">
            <input
              type="text"
              placeholder="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="comment-author-input"
            />
            <textarea
              placeholder="Add a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="comment-text-input"
              rows={2}
            />
            <button
              onClick={handleAdd}
              disabled={!text.trim() || saving}
              className="btn-add-comment-sm"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Sidebar Component
 *
 * Navigation sidebar showing criteria grouped by topics with accordions
 */

import { useState } from 'react';

// Define topic groupings
const TOPICS = {
  'LWP': {
    title: 'Local Wellness Policy',
    prefix: 'LWP'
  },
  'SHS': {
    title: 'School Health Services',
    prefix: 'SHS'
  },
  'PE': {
    title: 'Physical Education',
    prefix: 'PE'
  },
  'PA': {
    title: 'Physical Activity',
    prefix: 'PA'
  },
  'HE': {
    title: 'Health Education',
    prefix: 'HE'
  }
};

export default function Sidebar({ criteria, currentCriterionId, onSelectCriterion, statusMap, topics }) {
  // Group criteria by topicId
  const groupedCriteria = {};

  criteria.forEach((criterion) => {
    const topicId = criterion.topicId || 'unassigned';
    if (!groupedCriteria[topicId]) {
      groupedCriteria[topicId] = [];
    }
    groupedCriteria[topicId].push(criterion);
  });

  // Initialize all topics as open by default
  const [openTopics, setOpenTopics] = useState(() => {
    const initial = {};
    if (topics) {
      topics.forEach(topic => {
        initial[topic.id] = true;
      });
    }
    return initial;
  });

  const toggleTopic = (prefix) => {
    setOpenTopics(prev => ({
      ...prev,
      [prefix]: !prev[prefix]
    }));
  };

  // Calculate topic-level status
  const getTopicStatus = (criteriaInTopic) => {
    const statuses = criteriaInTopic.map(c => statusMap[c.id] || 'unanswered');

    // If ANY criterion is not_eligible, topic is not_eligible
    if (statuses.includes('not_eligible')) {
      return 'not_eligible';
    }

    // If ALL criteria are eligible, topic is eligible
    if (statuses.every(s => s === 'eligible')) {
      return 'eligible';
    }

    // If none are answered (all unanswered), topic is unanswered
    if (statuses.every(s => s === 'unanswered')) {
      return 'unanswered';
    }

    // Otherwise, in progress
    return 'in_progress';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-title">Navigation</div>
      <div className="topics-list">
        {topics && topics.map((topic) => {
          const criteriaInTopic = groupedCriteria[topic.id] || [];
          const topicStatus = criteriaInTopic.length > 0 ? getTopicStatus(criteriaInTopic) : 'unknown';
          const isOpen = openTopics[topic.id];
          const statusClass = getStatusClass(topicStatus);

          return (
            <div key={topic.id} className="topic-group">
              <button
                className="topic-header"
                onClick={() => toggleTopic(topic.id)}
              >
                <span className="topic-toggle">{isOpen ? '▼' : '▶'}</span>
                <span className={`nav-icon ${statusClass}`}>
                  {getStatusIcon(topicStatus)}
                </span>
                <span className="topic-title">{topic.title}</span>
              </button>

              {isOpen && (
                <div className="topic-criteria">
                  {criteriaInTopic.length > 0 ? (
                    criteriaInTopic.map((criterion) => {
                      const status = statusMap[criterion.id] || 'unknown';
                      const isActive = criterion.id === currentCriterionId;
                      const criterionStatusClass = getStatusClass(status);

                      return (
                        <button
                          key={criterion.id}
                          className={`criterion-nav-item ${isActive ? 'active' : ''}`}
                          onClick={() => onSelectCriterion(criterion.id)}
                        >
                          <span className={`nav-icon ${criterionStatusClass}`}>
                            {getStatusIcon(status)}
                          </span>
                          <span className="nav-text">{criterion.id}</span>
                        </button>
                      );
                    })
                  ) : (
                    <div className="no-criteria">No criteria yet</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function getStatusClass(status) {
  return status === 'not_eligible' ? 'status-not-eligible' :
         status === 'in_progress' ? 'status-in-progress' :
         status === 'eligible' ? 'status-eligible' :
         status === 'unanswered' ? 'status-unanswered' : '';
}

function getStatusIcon(status) {
  const iconMap = {
    eligible: '✔',
    not_eligible: '✘',
    in_progress: '◐',
    unanswered: '−',
    unknown: '−'
  };
  return iconMap[status] || '−';
}

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

export default function Sidebar({ criteria, currentCriterionId, onSelectCriterion, statusMap }) {
  // Group criteria by topic
  const groupedCriteria = {};

  criteria.forEach((criterion) => {
    const prefix = criterion.id.split('-')[0];
    if (!groupedCriteria[prefix]) {
      groupedCriteria[prefix] = [];
    }
    groupedCriteria[prefix].push(criterion);
  });

  // Initialize all topics as open by default
  const [openTopics, setOpenTopics] = useState(() => {
    const initial = {};
    Object.keys(groupedCriteria).forEach(prefix => {
      initial[prefix] = true;
    });
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
    const statuses = criteriaInTopic.map(c => statusMap[c.id] || 'unknown');

    // If ANY criterion is not_eligible, topic is not_eligible
    if (statuses.includes('not_eligible')) {
      return 'not_eligible';
    }

    // If ALL criteria are eligible, topic is eligible
    if (statuses.every(s => s === 'eligible')) {
      return 'eligible';
    }

    // If none are answered (all unknown), topic is unknown
    if (statuses.every(s => s === 'unknown')) {
      return 'unknown';
    }

    // Otherwise, in progress
    return 'in_progress';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-title">Criteria</div>
      <div className="topics-list">
        {Object.entries(groupedCriteria).map(([prefix, criteriaInTopic]) => {
          const topic = TOPICS[prefix] || { title: prefix, prefix };
          const topicStatus = getTopicStatus(criteriaInTopic);
          const isOpen = openTopics[prefix];
          const statusClass = getStatusClass(topicStatus);

          return (
            <div key={prefix} className="topic-group">
              <button
                className="topic-header"
                onClick={() => toggleTopic(prefix)}
              >
                <span className="topic-toggle">{isOpen ? '▼' : '▶'}</span>
                <span className={`nav-icon ${statusClass}`}>
                  {getStatusIcon(topicStatus)}
                </span>
                <span className="topic-title">{topic.title}</span>
              </button>

              {isOpen && (
                <div className="topic-criteria">
                  {criteriaInTopic.map((criterion) => {
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
                  })}
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
         status === 'eligible' ? 'status-eligible' : '';
}

function getStatusIcon(status) {
  const iconMap = {
    eligible: '✔',
    not_eligible: '✘',
    in_progress: '◐',
    unknown: '−'
  };
  return iconMap[status] || '−';
}

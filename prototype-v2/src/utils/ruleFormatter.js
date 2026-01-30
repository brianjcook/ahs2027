/**
 * Rule Formatter
 * Converts structured scoring rules to human-readable text
 */

export function formatRule(rule) {
  // Handle text/legacy format
  if (typeof rule === 'string') {
    // Skip "None." entries
    if (rule === 'None.' || rule === 'None') {
      return null;
    }
    return rule;
  }

  // Handle structured format
  if (typeof rule === 'object') {
    // Use description if available
    if (rule.description) {
      return rule.description;
    }

    // Generate description from rule
    const { questionId, questionIds, operator, value, minimumCount } = rule;

    switch (operator) {
      case 'equals':
        return `${questionId} equals "${value}"`;

      case 'notEquals':
        return `${questionId} does not equal "${value}"`;

      case 'includes':
        return `${questionId} includes "${value}"`;

      case 'includesMinimum':
        return `${questionId} includes at least ${minimumCount} item${minimumCount !== 1 ? 's' : ''}`;

      case 'anyEquals':
        return `Any of ${questionIds?.join(', ')} equals "${value}"`;

      case 'isAnswered':
        return `${questionId} is answered`;

      case 'greaterThan':
        return `${questionId} is greater than ${value}`;

      case 'lessThan':
        return `${questionId} is less than ${value}`;

      case 'text':
      case 'complex':
        return rule.rule || rule.description || 'Complex rule';

      default:
        return JSON.stringify(rule);
    }
  }

  return String(rule);
}

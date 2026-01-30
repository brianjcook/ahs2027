/**
 * Eligibility Evaluation Engine
 *
 * This module evaluates whether a criterion's eligibility requirements are met
 * based on the current form answers.
 *
 * Eligibility has three components:
 * 1. Hard-Fail Conditions - Automatic disqualifiers
 * 2. Required Conditions - Must all be met for eligibility
 * 3. Eligibility Decision - Final determination
 *
 * See docs/CONDITIONAL_LOGIC.md for full documentation.
 */

/**
 * Evaluates the eligibility status for a criterion
 *
 * @param {Object} eligibility - Eligibility rules object
 * @param {Array<string>} eligibility.hardFail - Hard-fail condition strings
 * @param {Array<string>} eligibility.required - Required condition strings
 * @param {string} eligibility.decision - Human-readable decision logic
 * @param {Object} answers - Current form answers
 * @param {Array<Object>} questions - All questions in the criterion
 * @returns {Object} - Eligibility result object
 *
 * @example
 * const eligibility = {
 *   hardFail: ['Q1 is "No"'],
 *   required: ['Q2 includes at least 1 tool'],
 *   decision: 'Eligible if all required met and no hard-fails'
 * };
 * const answers = { Q1: 'Yes', Q2: ['Tool A'] };
 * evaluateEligibility(eligibility, answers, questions);
 * // Returns: { status: 'eligible', hardFails: [], missingRequired: [] }
 */
export function evaluateEligibility(eligibility, answers, questions) {
  if (!eligibility) {
    return {
      status: 'unknown',
      hardFails: [],
      missingRequired: [],
      message: 'No eligibility rules defined'
    };
  }

  // Evaluate hard-fail conditions
  const hardFails = evaluateHardFails(eligibility.hardFail || [], answers);

  // If any hard-fail is triggered, not eligible
  if (hardFails.length > 0) {
    return {
      status: 'not_eligible',
      hardFails,
      missingRequired: [],
      message: 'Hard-fail condition(s) triggered'
    };
  }

  // Evaluate required conditions
  const missingRequired = evaluateRequired(eligibility.required || [], answers, questions);

  // Check if all required conditions are met
  if (missingRequired.length === 0) {
    return {
      status: 'eligible',
      hardFails: [],
      missingRequired: [],
      message: 'All eligibility requirements met'
    };
  }

  // Some requirements missing but no hard-fails
  return {
    status: 'in_progress',
    hardFails: [],
    missingRequired,
    message: 'Some requirements not yet met'
  };
}

/**
 * Evaluates hard-fail conditions
 *
 * @param {Array<string>} conditions - Array of hard-fail condition strings
 * @param {Object} answers - Current form answers
 * @returns {Array<string>} - Array of triggered hard-fail descriptions
 *
 * @private
 */
function evaluateHardFails(conditions, answers) {
  const triggered = [];

  for (const condition of conditions) {
    if (evaluateCondition(condition, answers)) {
      triggered.push(condition);
    }
  }

  return triggered;
}

/**
 * Evaluates required conditions
 *
 * @param {Array<string>} conditions - Array of required condition strings
 * @param {Object} answers - Current form answers
 * @param {Array<Object>} questions - All questions in criterion
 * @returns {Array<string>} - Array of unmet required condition descriptions
 *
 * @private
 */
function evaluateRequired(conditions, answers, questions) {
  const missing = [];

  for (const condition of conditions) {
    if (!evaluateCondition(condition, answers)) {
      missing.push(condition);
    }
  }

  return missing;
}

/**
 * Evaluates a single condition (string or structured object)
 *
 * Supports both formats:
 * - Text: "Q1 is \"Yes\""
 * - Structured: { questionId: "Q001", operator: "equals", value: "Yes" }
 *
 * @param {string|Object} condition - Condition string or object to evaluate
 * @param {Object} answers - Current form answers
 * @returns {boolean} - True if condition is met
 *
 * @private
 */
function evaluateCondition(condition, answers) {
  // Handle structured format (new)
  if (typeof condition === 'object' && condition.operator) {
    return evaluateStructuredCondition(condition, answers);
  }

  // Handle text format (legacy) - call the original text parser
  return evaluateTextCondition(condition, answers);
}

/**
 * Evaluates a structured condition object
 */
function evaluateStructuredCondition(condition, answers) {
  const { questionId, questionIds, operator, value, minimumCount } = condition;

  switch (operator) {
    case 'equals':
      return answers[questionId] === value;

    case 'notEquals':
      return answers[questionId] !== value;

    case 'includes':
      return Array.isArray(answers[questionId]) && answers[questionId].includes(value);

    case 'includesMinimum':
      return Array.isArray(answers[questionId]) && answers[questionId].length >= (minimumCount || 0);

    case 'anyEquals':
      if (!questionIds || !Array.isArray(questionIds)) return false;
      return questionIds.some(qid => answers[qid] === value);

    case 'isAnswered':
      const answer = answers[questionId];
      if (answer === undefined || answer === null || answer === '') return false;
      if (typeof answer === 'object' && answer.value) return true;
      return true;

    case 'greaterThan':
      return Number(answers[questionId]) > Number(value);

    case 'lessThan':
      return Number(answers[questionId]) < Number(value);

    case 'text':
    case 'complex':
      // Fallback to text parsing for complex rules
      return evaluateTextCondition(condition.rule || condition.description, answers);

    default:
      console.warn('Unknown operator:', operator, condition);
      return false;
  }
}

/**
 * Evaluates a text condition string (legacy format)
 */
function evaluateTextCondition(condition, answers) {
  // Pattern: Q1 is "Value"
  const isPattern = /^(\w+)\s+is\s+"([^"]+)"$/i;
  const isMatch = condition.match(isPattern);
  if (isMatch) {
    const [, questionId, value] = isMatch;
    return answers[questionId] === value;
  }

  // Pattern: Q1 is not "Value"
  const isNotPattern = /^(\w+)\s+is\s+not\s+"([^"]+)"$/i;
  const isNotMatch = condition.match(isNotPattern);
  if (isNotMatch) {
    const [, questionId, value] = isNotMatch;
    return answers[questionId] !== value;
  }

  // Pattern: Q1 is "Value1" or "Value2"
  const isOrPattern = /^(\w+)\s+is\s+"([^"]+)"\s+or\s+"([^"]+)"$/i;
  const isOrMatch = condition.match(isOrPattern);
  if (isOrMatch) {
    const [, questionId, value1, value2] = isOrMatch;
    return answers[questionId] === value1 || answers[questionId] === value2;
  }

  // Pattern: Any of Q1 through Q5 is "No"
  const anyOfPattern = /^Any\s+of\s+(\w+)\s+through\s+(\w+)\s+is\s+"([^"]+)"$/i;
  const anyOfMatch = condition.match(anyOfPattern);
  if (anyOfMatch) {
    const [, startId, endId, value] = anyOfMatch;
    return checkRangeForValue(startId, endId, value, answers);
  }

  // Pattern: Q2 includes at least 3 venues
  const includesCountPattern = /^(\w+)\s+includes\s+at\s+least\s+(\d+)/i;
  const includesCountMatch = condition.match(includesCountPattern);
  if (includesCountMatch) {
    const [, questionId, minCount] = includesCountMatch;
    const answer = answers[questionId];
    return Array.isArray(answer) && answer.length >= parseInt(minCount, 10);
  }

  // Pattern: Q5 has one evidence item provided
  const hasEvidencePattern = /^(\w+)\s+has\s+one\s+evidence\s+item\s+provided/i;
  const hasEvidenceMatch = condition.match(hasEvidencePattern);
  if (hasEvidenceMatch) {
    const [, questionId] = hasEvidenceMatch;
    const answer = answers[questionId];
    return answer && typeof answer === 'object' && answer.type && answer.value;
  }

  // Pattern: Q1 includes at least 1 active matching method
  const includesActivePattern = /^(\w+)\s+includes\s+at\s+least\s+(\d+)\s+active/i;
  const includesActiveMatch = condition.match(includesActivePattern);
  if (includesActiveMatch) {
    const [, questionId, minCount] = includesActiveMatch;
    const answer = answers[questionId];
    return Array.isArray(answer) && answer.length >= parseInt(minCount, 10);
  }

  // Pattern: For each situation selected in Q1, Q2 includes at least 1 compliance method
  const perSituationPattern = /^For\s+each\s+situation\s+selected\s+in\s+(\w+),\s+(\w+)\s+includes\s+at\s+least\s+(\d+)/i;
  const perSituationMatch = condition.match(perSituationPattern);
  if (perSituationMatch) {
    const [, refQuestionId, questionId, minCount] = perSituationMatch;
    return checkPerSituationCompliance(refQuestionId, questionId, parseInt(minCount, 10), answers);
  }

  console.warn('Unknown condition format:', condition);
  return false;
}
// End of evaluateTextCondition

/**
 * Checks if any question in a range has a specific value
 *
 * @param {string} startId - Starting question ID (e.g., "Q1")
 * @param {string} endId - Ending question ID (e.g., "Q5")
 * @param {string} value - Value to check for
 * @param {Object} answers - Current form answers
 * @returns {boolean} - True if any question in range equals value
 *
 * @private
 */
function checkRangeForValue(startId, endId, value, answers) {
  // Extract numeric parts (e.g., "Q1" -> 1)
  const startNum = parseInt(startId.replace(/\D/g, ''), 10);
  const endNum = parseInt(endId.replace(/\D/g, ''), 10);
  const prefix = startId.replace(/\d/g, '');

  for (let i = startNum; i <= endNum; i++) {
    const questionId = `${prefix}${i}`;
    if (answers[questionId] === value) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if all repeated question instances meet minimum requirement
 *
 * @param {string} refQuestionId - Multi-select question ID (e.g., "Q1")
 * @param {string} questionId - Base question ID that repeats (e.g., "Q2")
 * @param {number} minCount - Minimum number of selections required
 * @param {Object} answers - Current form answers
 * @returns {boolean} - True if all instances meet requirement
 *
 * @private
 */
function checkPerSituationCompliance(refQuestionId, questionId, minCount, answers) {
  const refAnswer = answers[refQuestionId];

  // No selections means requirement is met (nothing to check)
  if (!Array.isArray(refAnswer) || refAnswer.length === 0) {
    return true;
  }

  // Check each repeated instance
  for (const option of refAnswer) {
    // Skip exclusion patterns
    if (/^We don't/i.test(option) || /^No\s/i.test(option)) {
      continue;
    }

    // Generate expected question ID
    const instanceId = `${questionId}_${option.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`;
    const instanceAnswer = answers[instanceId];

    // Check if answer meets minimum count
    if (!Array.isArray(instanceAnswer) || instanceAnswer.length < minCount) {
      return false;
    }
  }

  return true;
}

/**
 * Gets a human-readable status message
 *
 * @param {string} status - Status code ('eligible', 'not_eligible', 'in_progress', 'unknown')
 * @returns {string} - Display text for status
 */
export function getStatusText(status) {
  const statusMap = {
    eligible: 'Eligible',
    not_eligible: 'Not Eligible',
    in_progress: 'In Progress',
    unknown: 'Unknown'
  };

  return statusMap[status] || 'Unknown';
}

/**
 * Gets a status icon for display
 *
 * @param {string} status - Status code
 * @returns {string} - Icon character
 */
export function getStatusIcon(status) {
  const iconMap = {
    eligible: '✔',
    not_eligible: '✘',
    in_progress: '◐',
    unknown: '−'
  };

  return iconMap[status] || '−';
}

/**
 * Gets a CSS class name for status styling
 *
 * @param {string} status - Status code
 * @returns {string} - CSS class name
 */
export function getStatusClass(status) {
  return `status-${status.replace('_', '-')}`;
}

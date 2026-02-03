/**
 * Conditional Logic Engine
 *
 * This module handles the evaluation of conditional display rules for questions.
 * Questions can be conditionally shown/hidden based on answers to other questions.
 *
 * Supported operators:
 * - `equals`: Answer must exactly match a value
 * - `includes`: Answer array must contain a value (for multi-select questions)
 * - `notIncludes`: Answer array must NOT contain a value (for multi-select negation)
 *
 * See docs/CONDITIONAL_LOGIC.md for full documentation.
 */

/**
 * Evaluates whether a question should be displayed based on its showIf rules
 *
 * @param {Object} question - Question object with optional showIf array
 * @param {Object} answers - Current form answers keyed by question ID
 * @returns {boolean} - True if question should be shown, false otherwise
 *
 * @example
 * const question = {
 *   id: "Q2",
 *   showIf: [{ id: "Q1", equals: "Yes" }]
 * };
 * const answers = { Q1: "Yes" };
 * shouldShowQuestion(question, answers); // returns true
 */
export function shouldShowQuestion(question, answers) {
  // No showIf rules means always show
  if (!question.showIf || question.showIf.length === 0) {
    return true;
  }

  // All conditions must be true (AND logic)
  return question.showIf.every((rule) => evaluateRule(rule, answers));
}

/**
 * Evaluates a single conditional rule
 *
 * @param {Object} rule - Conditional rule object
 * @param {string} rule.id - Question ID to check
 * @param {string} [rule.equals] - Value that answer must equal
 * @param {string} [rule.includes] - Value that answer array must include
 * @param {Object} answers - Current form answers
 * @returns {boolean} - True if rule is satisfied
 *
 * @private
 */
function evaluateRule(rule, answers) {
  const refAnswer = answers[rule.id];

  // No answer yet means condition is not met
  if (refAnswer === undefined || refAnswer === null) {
    return false;
  }

  // Handle "equals" operator (for boolean/single-select)
  if (rule.equals !== undefined) {
    return refAnswer === rule.equals;
  }

  // Handle "includes" operator (for multi-select)
  if (rule.includes !== undefined) {
    // Answer must be an array containing the specified value
    return Array.isArray(refAnswer) && refAnswer.includes(rule.includes);
  }

  // Handle "notIncludes" operator (for multi-select negation)
  if (rule.operator === 'notIncludes' && rule.value !== undefined) {
    // Answer must be an array that does NOT contain the specified value
    return Array.isArray(refAnswer) && !refAnswer.includes(rule.value);
  }

  // Unknown operator
  console.warn('Unknown conditional operator in rule:', rule);
  return false;
}

/**
 * Generates repeated question instances based on multi-select answers
 *
 * When a question has a `repeatedFor` property, it creates multiple instances
 * of that question - one for each selected option in the referenced multi-select question.
 *
 * @param {Object} question - Question object with optional repeatedFor property
 * @param {Object} answers - Current form answers
 * @returns {Array<Object>} - Array of question objects (original or generated instances)
 *
 * @example
 * const question = {
 *   id: "Q2",
 *   text: "How do you ensure compliance for {situation}?",
 *   repeatedFor: "Q1",
 *   options: ["Policy", "Training"]
 * };
 * const answers = {
 *   Q1: ["Classroom parties", "School celebrations"]
 * };
 * // Returns 2 question objects with interpolated text and generated IDs
 */
export function generateRepeatedQuestions(question, answers) {
  // No repetition needed
  if (!question.repeatedFor) {
    return [question];
  }

  const refAnswer = answers[question.repeatedFor];

  // No selections yet or invalid answer format
  if (!Array.isArray(refAnswer) || refAnswer.length === 0) {
    return [];
  }

  // Filter out exclusions if specified
  const filteredOptions = filterExclusions(refAnswer, question);

  // Generate one question instance per selected option
  return filteredOptions.map((option, index) => {
    const generatedId = `${question.id}.${index + 1}`;

    return {
      ...question,
      id: generatedId,
      text: interpolateText(question.text, option),
      originalId: question.id,
      situationValue: option,
      situationIndex: index,
      isRepeated: true
    };
  });
}

/**
 * Filters out options that should be excluded from repetition
 *
 * @param {Array<string>} options - Selected options from multi-select
 * @param {Object} question - Question object
 * @returns {Array<string>} - Filtered options
 *
 * @private
 */
function filterExclusions(options, question) {
  // Common exclusion patterns
  const exclusionPatterns = [
    /^We don't/i,
    /^No\s/i,
    /^None\b/i
  ];

  return options.filter((option) => {
    return !exclusionPatterns.some((pattern) => pattern.test(option));
  });
}

/**
 * Generates a unique question ID for a repeated instance
 *
 * Converts spaces to underscores and removes special characters
 *
 * @param {string} baseId - Original question ID (e.g., "Q2")
 * @param {string} option - Option value (e.g., "Classroom parties")
 * @returns {string} - Generated ID (e.g., "Q2_Classroom_parties")
 *
 * @private
 */
function generateQuestionId(baseId, option) {
  // Replace spaces with underscores and remove special characters
  const sanitized = option
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '');

  return `${baseId}_${sanitized}`;
}

/**
 * Interpolates placeholder text with actual option value
 *
 * Replaces {situation} or {option} placeholders with the actual text
 *
 * @param {string} text - Text with placeholders
 * @param {string} value - Value to insert
 * @returns {string} - Interpolated text
 *
 * @private
 */
function interpolateText(text, value) {
  return text
    .replace(/{situation}/g, value)
    .replace(/{option}/g, value);
}

/**
 * Gets all visible questions for a criterion based on current answers
 *
 * This handles both conditional logic (showIf) and dynamic repetition (repeatedFor)
 *
 * @param {Array<Object>} questions - Array of question objects
 * @param {Object} answers - Current form answers
 * @returns {Array<Object>} - Array of visible question objects
 *
 * @example
 * const questions = [
 *   { id: "Q1", type: "multi", options: ["A", "B"] },
 *   { id: "Q2", showIf: [{ id: "Q1", includes: "A" }] }
 * ];
 * const answers = { Q1: ["A"] };
 * getVisibleQuestions(questions, answers); // Returns both Q1 and Q2
 */
export function getVisibleQuestions(questions, answers) {
  const visibleQuestions = [];

  for (const question of questions) {
    // Check if question should be shown based on conditional logic
    if (!shouldShowQuestion(question, answers)) {
      continue;
    }

    // Generate repeated instances if applicable
    const instances = generateRepeatedQuestions(question, answers);
    visibleQuestions.push(...instances);
  }

  return visibleQuestions;
}

/**
 * Gets a human-readable explanation of why a question is hidden
 *
 * @param {Object} question - Question object with showIf rules
 * @param {Object} answers - Current form answers
 * @returns {string|null} - Explanation text, or null if question is visible
 *
 * @example
 * const question = {
 *   id: "Q2",
 *   showIf: [{ id: "Q1", equals: "Yes" }]
 * };
 * const answers = { Q1: "No" };
 * getHiddenReason(question, answers); // Returns "Q1 = 'Yes'"
 */
export function getHiddenReason(question, answers) {
  if (!question.showIf || question.showIf.length === 0) {
    return null;
  }

  if (shouldShowQuestion(question, answers)) {
    return null;
  }

  // Build explanation of unmet conditions
  const conditions = question.showIf.map((rule) => {
    if (rule.equals !== undefined) {
      return `${rule.id} = '${rule.equals}'`;
    }
    if (rule.includes !== undefined) {
      return `${rule.id} includes '${rule.includes}'`;
    }
    if (rule.operator === 'notIncludes' && rule.value !== undefined) {
      return `${rule.id} does not include '${rule.value}'`;
    }
    return `${rule.id} (unknown condition)`;
  });

  return conditions.join(' and ');
}

/**
 * Clears answers for questions that are no longer visible
 *
 * When a conditional question becomes hidden, its answer should be cleared
 * to avoid submitting data for questions the user never saw.
 *
 * @param {Array<Object>} allQuestions - All questions in the criterion
 * @param {Object} answers - Current form answers
 * @returns {Object} - Cleaned answers object
 *
 * @example
 * const questions = [
 *   { id: "Q1", type: "boolean", options: ["Yes", "No"] },
 *   { id: "Q2", showIf: [{ id: "Q1", equals: "Yes" }] }
 * ];
 * const answers = { Q1: "No", Q2: "Some answer" };
 * clearHiddenAnswers(questions, answers); // Returns { Q1: "No" }
 */
export function clearHiddenAnswers(allQuestions, answers) {
  const visibleQuestions = getVisibleQuestions(allQuestions, answers);
  const visibleIds = new Set(visibleQuestions.map((q) => q.id));

  const cleanedAnswers = {};

  for (const [questionId, answer] of Object.entries(answers)) {
    // Keep answer if question is visible
    if (visibleIds.has(questionId)) {
      cleanedAnswers[questionId] = answer;
    }
    // Also keep answers for repeated question instances
    else if (questionId.includes('_') &&
             visibleIds.has(questionId.split('_')[0])) {
      cleanedAnswers[questionId] = answer;
    }
  }

  return cleanedAnswers;
}

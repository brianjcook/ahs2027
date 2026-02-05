/**
 * MinuteTableQuestion Component
 *
 * Renders a table for entering minutes for each activity type
 */

import { useState, useEffect } from 'react';
import QuestionRationaleModal from '../QuestionRationaleModal';

export default function MinuteTableQuestion({ question, answer, onChange }) {
  const [showRationale, setShowRationale] = useState(false);
  const [otherValue, setOtherValue] = useState('');
  const [otherMinutes, setOtherMinutes] = useState(0);

  // Initialize answer as object if not already
  const minutes = typeof answer === 'object' && answer !== null ? answer : {};

  // Calculate total
  const total = Object.values(minutes).reduce((sum, val) => {
    const num = parseInt(val) || 0;
    return sum + num;
  }, 0);

  const handleMinuteChange = (option, value) => {
    const numValue = parseInt(value) || 0;
    const newMinutes = {
      ...minutes,
      [option]: numValue
    };
    // Remove entries with 0 minutes to keep data clean
    if (numValue === 0) {
      delete newMinutes[option];
    }
    onChange(question.id, newMinutes);
  };

  const handleOtherLabelChange = (value) => {
    setOtherValue(value);
    if (value && otherMinutes > 0) {
      const newMinutes = { ...minutes };
      // Remove old "Other" key if it exists
      delete newMinutes['Other'];
      newMinutes[value] = otherMinutes;
      onChange(question.id, newMinutes);
    }
  };

  const handleOtherMinutesChange = (value) => {
    const numValue = parseInt(value) || 0;
    setOtherMinutes(numValue);
    if (otherValue && numValue > 0) {
      const newMinutes = {
        ...minutes,
        [otherValue]: numValue
      };
      onChange(question.id, newMinutes);
    } else if (otherValue) {
      const newMinutes = { ...minutes };
      delete newMinutes[otherValue];
      onChange(question.id, newMinutes);
    }
  };

  return (
    <>
      <div className="question minute-table-question">
        <label className="question-label">
          <span className="question-id">{question.id}.</span> {question.text}
          {question.rationales && (
            <a
              href="#"
              className="rationale-link"
              onClick={(e) => {
                e.preventDefault();
                setShowRationale(true);
              }}
            >
              See rationale &gt;
            </a>
          )}
        </label>

        <div className="minute-table">
          <table>
            <thead>
              <tr>
                <th>Activity Type</th>
                <th>Minutes per Day</th>
              </tr>
            </thead>
            <tbody>
              {question.options.map((option) => (
                <tr key={option}>
                  <td>{option}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      value={minutes[option] || ''}
                      onChange={(e) => handleMinuteChange(option, e.target.value)}
                      placeholder="0"
                      className="minute-input"
                    />
                  </td>
                </tr>
              ))}

              {question.allowOther && (
                <tr className="other-row">
                  <td>
                    <input
                      type="text"
                      placeholder="Other (specify)..."
                      value={otherValue}
                      onChange={(e) => handleOtherLabelChange(e.target.value)}
                      className="other-label-input"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="999"
                      value={otherMinutes || ''}
                      onChange={(e) => handleOtherMinutesChange(e.target.value)}
                      placeholder="0"
                      className="minute-input"
                      disabled={!otherValue}
                    />
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="total-row">
                <td><strong>Total</strong></td>
                <td>
                  <strong className={total < 30 ? 'total-insufficient' : 'total-sufficient'}>
                    {total} minutes
                  </strong>
                  {total < 30 && (
                    <span className="total-warning"> (minimum 30 required)</span>
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {showRationale && (
        <QuestionRationaleModal
          question={question}
          onClose={() => setShowRationale(false)}
        />
      )}
    </>
  );
}

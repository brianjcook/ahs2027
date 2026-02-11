# NFA-S11: Adequate Time to Eat School Meals

**Criterion (Original):**
Our school provides all students with at least 20 minutes of uninterrupted time for lunch and 10 minutes of uninterrupted time for breakfast.

## Personas
- Content expert (Nutrition and Food Access): Former school nutrition director and wellness coordinator; deep practice knowledge of school meal programs and food access initiatives.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school provide designated time for students to eat lunch?** | Yes / No | Content expert: Establishes baseline that lunch time exists before assessing adequacy. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without structured meal times. | None provided. |
| **Q2. How much time do students have to eat lunch (from the time they sit down to eat)?** | 25 minutes or more / 20-24 minutes / 15-19 minutes / 10-14 minutes / Less than 10 minutes | Content expert: Captures actual eating time, not total lunch period, to assess adequacy. UI/UX: Five-option scale with clear thresholds makes selection straightforward. Data and evaluation: Distinguishes schools meeting/exceeding standard from those below threshold. Senior front-end engineer: Radio button input with range validation. Senior back-end engineer: Enum for time range with numeric comparison. Product manager: Balances criterion requirement with variation in practice. | None provided. |
| **Q3. Is lunch time uninterrupted (i.e., students are not called away for other activities or announcements during the meal)?** | Yes, always / Mostly (rare interruptions) / No, frequent interruptions | Content expert: Validates that eating time is protected from competing demands. UI/UX: Three-option scale captures practice consistency. Data and evaluation: Distinguishes full implementation from partial practice. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum for interruption frequency. Product manager: Allows schools to indicate occasional exceptions while maintaining rigor. | None provided. |
| **Q4. Does your school provide designated time for students to eat breakfast?** | Yes / No | Content expert: Establishes baseline that breakfast time exists before assessing adequacy. UI/UX: Parallel structure to Q1 maintains flow. Data and evaluation: Clear eligibility anchor for breakfast. Senior front-end engineer: Enables conditional logic for breakfast questions. Senior back-end engineer: Boolean for breakfast time existence. Product manager: Allows schools without breakfast programs to skip detail questions. | None provided. |
| **Q5. How much time do students have to eat breakfast (from the time they sit down to eat)?** | 15 minutes or more / 10-14 minutes / 5-9 minutes / Less than 5 minutes / Not applicable - we do not offer a breakfast program | Content expert: Captures actual eating time for breakfast to assess adequacy. UI/UX: Five-option scale with N/A option allows non-breakfast schools to skip. Data and evaluation: Distinguishes schools meeting standard from those below threshold. Senior front-end engineer: Radio button input with conditional relevance. Senior back-end engineer: Enum for time range with numeric comparison. Product manager: Directly maps to criterion requirement for straightforward scoring. | None provided. |
| **Q6. Is breakfast time uninterrupted (i.e., students are not called away for other activities or announcements during the meal)?** | Yes, always / Mostly (rare interruptions) / No, frequent interruptions / Not applicable - we do not offer a breakfast program | Content expert: Validates that breakfast eating time is protected, parallel to lunch requirement. UI/UX: Three-option scale with N/A maintains consistency. Data and evaluation: Captures practice consistency for breakfast. Senior front-end engineer: Radio button input with conditional logic. Senior back-end engineer: Enum for interruption frequency. Product manager: Balances rigor with realistic variation. | None provided. |
| **Q7. How does your school ensure students have adequate time to eat? (Select all that apply)** | Scheduled lunch periods with adequate duration / Staggered lunch periods to reduce wait time / Efficient cafeteria line operations / Dismissal after students have had time to eat / Master schedule prioritizes meal time / Staff training on meal time protection / Other (specify) | Content expert: Identifies structural and operational practices that protect eating time. UI/UX: Multi-select allows schools to document all time-protection strategies. Data and evaluation: Enables analysis of implementation practices. Senior front-end engineer: Standard checkbox group with optional text. Senior back-end engineer: Array of discrete practices. Product manager: Captures implementation approach without excessive complexity. | None provided. |
| **Q8. Evidence (choose one)** | Master schedule showing meal periods / Meal time policy or procedures / Cafeteria operations plan or monitoring data / Staff training materials on meal time standards | Content expert: Provides tangible proof of adequate and uninterrupted meal time. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "15-19 minutes" or less.
- Q3 is "No, frequent interruptions."
- Q4 is "No" (if school offers breakfast).
- Q5 is "5-9 minutes" or "Less than 5 minutes" (if school offers breakfast).
- Q6 is "No, frequent interruptions" (if school offers breakfast).

### Required Combinations (Must All Be True)
- Q7 includes at least 2 time-protection practices.
- Q8 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

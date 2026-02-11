# NFA-S9: Mitigating Stigma in School Meal Programs

**Criterion (Original):**
Our school does all the following:
- Ensures students with unpaid meal balances receive the standard school meal
- Ensures students with unpaid meal balances are not excluded from school activities
- Protects students' privacy
- Directs all communications about meal balances to families and caregivers, not to students

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
| **Q1. Does your school have practices in place to mitigate stigma associated with school meal programs?** | Yes / No | Content expert: Confirms intentional anti-stigma approach before assessing specific practices. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without stigma-mitigation practices. | None provided. |
| **Q2. Do students with unpaid meal balances receive the standard school meal?** | Yes, always / Yes, with some exceptions / No | Content expert: Validates that meal access is not restricted based on payment status. UI/UX: Three-option scale captures practice nuance. Data and evaluation: Distinguishes full compliance from partial practice. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum for compliance level. Product manager: Allows schools to indicate exceptions while maintaining rigor. | None provided. |
| **Q3. Are students with unpaid meal balances excluded from any school activities?** | No, never excluded / Sometimes excluded / Yes, excluded from certain activities | Content expert: Confirms students are not isolated or punished for family financial circumstances. UI/UX: Three-option scale parallels Q2 structure. Data and evaluation: Captures range of practice while validating criterion requirement. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum for exclusion status. Product manager: Balances criterion requirement with realistic practice variation. | None provided. |
| **Q4. How does your school protect the privacy of students with unpaid meal balances? (Select all that apply)** | Students receive same meal as all other students / Point-of-sale system does not identify meal balance status / No public identification of students with balances / Confidential handling of balance information / No special cards, tickets, or identifiers for students with balances / Other (specify) | Content expert: Identifies specific practices that protect student dignity and privacy. UI/UX: Multi-select allows schools to document all privacy protections. Data and evaluation: Enables analysis of privacy practices. Senior front-end engineer: Standard checkbox group with optional text. Senior back-end engineer: Array of discrete privacy practices. Product manager: Captures comprehensive privacy approach without complexity. | None provided. |
| **Q5. To whom does your school direct communications about unpaid meal balances?** | Families and caregivers only / Both families/caregivers and students / Students only | Content expert: Validates that communication approach does not shame or burden students. UI/UX: Single select makes clear distinction between acceptable and problematic practices. Data and evaluation: Clear threshold for criterion compliance. Senior front-end engineer: Radio button input with simple validation. Senior back-end engineer: Enum value for communication target. Product manager: Directly maps to criterion requirement for straightforward scoring. | None provided. |
| **Q6. What methods does your school use to communicate with families and caregivers about meal balances? (Select all that apply)** | Private email / Phone calls / Letters sent home in sealed envelopes / Secure online portal / Text messages / In-person conversations / Other (specify) | Content expert: Identifies communication channels that maintain family privacy and dignity. UI/UX: Multi-select captures all communication methods. Data and evaluation: Supports analysis of communication practices. Senior front-end engineer: Checkbox group with optional text. Senior back-end engineer: Array of communication methods. Product manager: Ensures communication is documented and appropriate. | None provided. |
| **Q7. Does your school have a written policy on unpaid meal balances that includes anti-stigma provisions?** | Yes / No | Content expert: Confirms formal commitment to anti-stigma practices beyond ad hoc implementation. UI/UX: Simple boolean after detailed practice questions. Data and evaluation: Validates formalization of anti-stigma approach. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for policy existence. Product manager: Ensures practices are embedded in policy, not just informal. | None provided. |
| **Q8. Evidence (choose one)** | Unpaid meal balance policy / Point-of-sale procedures or training materials / Sample family communications about meal balances / Staff training documentation on anti-stigma practices | Content expert: Provides tangible proof of anti-stigma commitment and implementation. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "Yes, excluded from certain activities."
- Q5 is "Both families/caregivers and students" or "Students only."

### Required Combinations (Must All Be True)
- Q4 includes at least 2 privacy protection practices.
- Q6 includes at least 1 communication method.
- Q7 is "Yes."
- Q8 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

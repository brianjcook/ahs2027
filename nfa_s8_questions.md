# NFA-S8: Strategies to Maximize Meal Program Participation

**Criterion (Original):**
Our school implements at least three of the following strategies:
- Breakfast in the classroom
- Second chance breakfast
- Alternative points of sale for reimbursable meals (e.g., outside lines, kiosks, grab and go options, reimbursable vending machines)
- Marketing and merchandising techniques (e.g., attractive presentation, healthy options easily accessible, inviting cafeteria environment)
- Seeking feedback from the school community through taste tests and surveys

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
| **Q1. Does your school implement strategies to maximize participation in school meal programs?** | Yes / No | Content expert: Confirms intentional effort to increase meal access before assessing specific strategies. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without participation strategies. | None provided. |
| **Q2. Which strategies does your school implement to maximize participation in school meal programs? (Select all that apply)** | Breakfast in the classroom / Second chance breakfast / Alternative points of sale for reimbursable meals / Marketing and merchandising techniques / Seeking feedback from the school community through taste tests and surveys / Other (specify) | Content expert: Captures all criterion-specified strategies plus additional innovations. UI/UX: Multi-select aligns with criterion structure and allows comprehensive response. Data and evaluation: Enables counting strategies and analyzing participation approaches. Senior front-end engineer: Standard checkbox group with validation. Senior back-end engineer: Array of discrete values for strategy counting. Product manager: Directly maps to criterion requirements for clear scoring. | None provided. |
| **Q3. How does your school implement breakfast in the classroom?** | Meals delivered to classrooms / Students pick up from cafeteria and bring to classroom / Grab-and-go carts in hallways / Not applicable - we do not offer breakfast in the classroom | Content expert: Identifies delivery model to understand operational approach. UI/UX: Single select with N/A option allows those without this strategy to skip. Data and evaluation: Supports analysis of implementation models. Senior front-end engineer: Radio button input with conditional relevance. Senior back-end engineer: Enum value for implementation type. Product manager: Captures implementation detail without text burden. | None provided. |
| **Q4. How does your school implement second chance breakfast?** | Mid-morning service point / Mobile cart / Extended breakfast service time / Not applicable - we do not offer second chance breakfast | Content expert: Distinguishes between second chance breakfast models to assess accessibility. UI/UX: Single select with N/A option maintains flow. Data and evaluation: Supports analysis of service delivery. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum value for model type. Product manager: Balances detail with efficiency. | None provided. |
| **Q5. What alternative points of sale does your school use for reimbursable meals? (Select all that apply)** | Outside lines / Kiosks / Grab and go options / Reimbursable vending machines / Mobile meal carts / Other (specify) / Not applicable - we do not use alternative points of sale | Content expert: Identifies specific service points that reduce barriers to meal access. UI/UX: Multi-select with N/A allows schools to skip if not applicable. Data and evaluation: Enables analysis of service point diversity. Senior front-end engineer: Checkbox group with conditional logic. Senior back-end engineer: Array of values for point-of-sale analysis. Product manager: Captures service model detail efficiently. | None provided. |
| **Q6. What marketing and merchandising techniques does your school use? (Select all that apply)** | Attractive food presentation / Healthy options made easily accessible / Inviting cafeteria environment / Menu promotion and branding / Student ambassadors or peer promotion / Digital menu boards / Other (specify) / Not applicable - we do not use marketing and merchandising techniques | Content expert: Identifies behavioral economics and customer service practices that increase meal appeal. UI/UX: Multi-select with examples aids recall. Data and evaluation: Supports analysis of marketing practices. Senior front-end engineer: Checkbox group with optional text. Senior back-end engineer: Discrete values for technique analysis. Product manager: Captures diverse practices without excessive detail. | None provided. |
| **Q7. How does your school seek feedback from the school community on meal programs? (Select all that apply)** | Taste tests with students / Surveys to students / Surveys to families / Focus groups / Comment cards or suggestion boxes / Menu advisory committees / Other (specify) / Not applicable - we do not seek feedback | Content expert: Validates participatory approach to menu planning and continuous improvement. UI/UX: Multi-select captures all feedback mechanisms. Data and evaluation: Enables analysis of engagement practices. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Array of feedback methods. Product manager: Ensures feedback is documented without complexity. | None provided. |
| **Q8. Evidence (choose one)** | Meal service schedule or operational plan / Photos of meal service points or marketing materials / Survey results or feedback summary / Participation data showing implementation impact | Content expert: Provides tangible proof of strategy implementation. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."

### Required Combinations (Must All Be True)
- Q2 includes at least 3 strategies from the criterion list (excluding "Other").
- For each strategy selected in Q2, the corresponding detail question (Q3-Q7) must not be "Not applicable" or empty.
- Q8 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

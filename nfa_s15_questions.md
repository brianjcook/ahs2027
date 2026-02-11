# NFA-S15: Nutrition Education Opportunities for Families and Caregivers

**Criterion (Original):**
Our school does all the following:
- Provides opportunities for nutrition education to families and caregivers at least once per year
- Uses at least three methods to communicate about these opportunities
- Communicates about these opportunities in languages that reflect the diversity of the school community
- Conducts these opportunities in a way that is culturally responsive to the needs of the school community

Note: Examples of nutrition education opportunities are including families and caregivers in nutrition education homework assignments, providing cooking classes, or inviting parents to school-sponsored events such as family wellness nights or cooking demonstrations.

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
| **Q1. Does your school provide nutrition education opportunities for families and caregivers?** | Yes / No | Content expert: Confirms family engagement component exists before assessing quality. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without family nutrition education. | None provided. |
| **Q2. How often does your school provide nutrition education opportunities for families and caregivers?** | Multiple times per year / Once per year / Less than once per year | Content expert: Validates frequency requirement while capturing range of practice. UI/UX: Three-option scale with clear thresholds. Data and evaluation: Distinguishes schools meeting/exceeding standard from those below threshold. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum for frequency with threshold validation. Product manager: Directly maps to criterion requirement for straightforward scoring. | None provided. |
| **Q3. What types of nutrition education opportunities does your school provide for families and caregivers? (Select all that apply)** | Nutrition education homework assignments / Cooking classes or demonstrations / Family wellness nights / Nutrition workshops / Cafeteria tours / Taste testing events / Take-home materials or resources / School garden family events / Other (specify) | Content expert: Captures diversity of engagement approaches from passive to active participation. UI/UX: Multi-select with examples from criterion note aids recall. Data and evaluation: Enables analysis of opportunity types. Senior front-end engineer: Standard checkbox group with optional text. Senior back-end engineer: Array of discrete opportunity types. Product manager: Ensures schools document range of offerings without complexity. | None provided. |
| **Q4. How does your school communicate about nutrition education opportunities to families and caregivers? (Select all that apply)** | School newsletter or email / School website or portal / Social media / Parent-teacher conferences / Text messages or mobile app notifications / Flyers or posters sent home / Phone calls / Community partners / Letters sent home / Other (specify) | Content expert: Identifies communication channels to ensure all families are aware of opportunities. UI/UX: Multi-select list allows comprehensive response without text burden. Data and evaluation: Enables counting communication methods. Senior front-end engineer: Checkbox group with validation. Senior back-end engineer: Array of discrete values for method counting. Product manager: Directly maps to criterion requirement for three methods. | None provided. |
| **Q5. Are communications about nutrition education opportunities provided in languages that reflect the diversity of your school community?** | Yes / No | Content expert: Validates linguistic accessibility of opportunity information. UI/UX: Direct question after method selection provides context. Data and evaluation: Captures equity dimension of communication. Senior front-end engineer: Simple boolean following multi-select. Senior back-end engineer: Boolean flag for language diversity. Product manager: Ensures language access without requiring extensive documentation. | None provided. |
| **Q6. What languages are used to communicate about nutrition education opportunities? (Select all that apply)** | English / Spanish / Chinese / Vietnamese / Arabic / Other (specify all languages) | Content expert: Documents linguistic diversity in communications to serve all families. UI/UX: Multi-select with common languages plus Other field. Data and evaluation: Supports analysis of language access. Senior front-end engineer: Checkbox group with text input for additional languages. Senior back-end engineer: Array of language values. Product manager: Captures language diversity without excessive complexity. | None provided. |
| **Q7. Are nutrition education opportunities conducted in a way that is culturally responsive to the needs of your school community?** | Yes / No | Content expert: Validates that content and delivery are tailored to community culture, not just translated. UI/UX: Direct question focuses on cultural adaptation. Data and evaluation: Captures quality dimension beyond language access. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for cultural responsiveness. Product manager: Ensures equity focus in program delivery. | None provided. |
| **Q8. How does your school ensure nutrition education opportunities are culturally responsive? (Select all that apply)** | Incorporate culturally relevant foods and recipes / Co-created with family input / Led by culturally matched facilitators or community leaders / Timed to align with cultural or community events / Address cultural food traditions and practices / Use culturally relevant examples and imagery / Other (specify) | Content expert: Identifies specific practices that demonstrate cultural responsiveness in nutrition education. UI/UX: Multi-select with concrete examples aids recall. Data and evaluation: Supports analysis of cultural responsiveness practices. Senior front-end engineer: Checkbox group with optional text. Senior back-end engineer: Discrete values for practice analysis. Product manager: Balances rigor with practical implementation evidence. | None provided. |
| **Q9. Evidence (choose one)** | Event flyers or communications in multiple languages / Event agenda or photos / Attendance records / Participant feedback or evaluation | Content expert: Provides tangible proof of family nutrition education opportunities and cultural responsiveness. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "Less than once per year."
- Q5 is "No."
- Q7 is "No."

### Required Combinations (Must All Be True)
- Q3 includes at least 1 opportunity type.
- Q4 includes at least 3 communication methods.
- Q6 includes at least 1 language (if school community is linguistically diverse).
- Q8 includes at least 1 cultural responsiveness practice.
- Q9 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

# NFA-S7: Communication with School Community

**Criterion (Original):**
Our school does all the following:
- Communicates with the school community at least once per year
- Uses at least three culturally responsive methods to communicate

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
| **Q1. Does your school communicate with the school community about policies and practices regarding nutrition and food access?** | Yes / No | Content expert: Establishes that communication exists before assessing quality. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools not meeting baseline. | None provided. |
| **Q2. How often does your school communicate with the school community about nutrition and food access policies and practices?** | Multiple times per year / Once per year / Less than once per year | Content expert: Validates frequency requirement while capturing range of practice. UI/UX: Clear intervals make selection straightforward. Data and evaluation: Supports threshold validation and comparability. Senior front-end engineer: Radio button input with simple logic. Senior back-end engineer: Stored as enum for frequency threshold check. Product manager: Balances criterion requirement with practical variation. | None provided. |
| **Q3. Which methods does your school use to communicate about nutrition and food access policies and practices? (Select all that apply)** | School newsletter or email / School website or portal / Social media / Parent-teacher conferences / Family events or open houses / Text messages or mobile app notifications / Flyers or posters / Community meetings / Letters sent home / Other (specify) | Content expert: Captures diversity of communication channels to reach all families. UI/UX: Multi-select list allows comprehensive response without text burden. Data and evaluation: Enables counting methods and analyzing communication reach. Senior front-end engineer: Standard checkbox group with validation. Senior back-end engineer: Array of discrete values for method counting. Product manager: Ensures schools document multiple channels without complexity. | None provided. |
| **Q4. Are the communication methods you use culturally responsive to the needs of your school community?** | Yes / No | Content expert: Validates that methods are tailored to community demographics and preferences. UI/UX: Direct question after method selection provides context. Data and evaluation: Captures quality dimension of communication. Senior front-end engineer: Simple boolean following multi-select. Senior back-end engineer: Boolean flag for cultural responsiveness. Product manager: Ensures equity focus without requiring extensive documentation. | None provided. |
| **Q5. How does your school ensure communications are culturally responsive? (Select all that apply)** | Translated into languages spoken by families / Use visual or graphic formats for accessibility / Shared through trusted community liaisons / Timed to align with cultural or community events / Co-created with family input / Incorporate culturally relevant examples or images / Other (specify) | Content expert: Identifies specific practices that demonstrate cultural responsiveness in nutrition communication. UI/UX: Multi-select with concrete examples aids recall. Data and evaluation: Supports analysis of equity practices. Senior front-end engineer: Checkbox group with optional text. Senior back-end engineer: Discrete values for practice analysis. Product manager: Balances rigor with practical implementation evidence. | None provided. |
| **Q6. Evidence (choose one)** | Sample communications (newsletters, emails, flyers, etc.) / Communications plan or calendar / Website screenshots or social media posts / Event agendas or attendance records | Content expert: Provides tangible proof of communication frequency and cultural responsiveness. UI/UX: Single evidence requirement keeps submission manageable. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "Less than once per year."
- Q4 is "No."

### Required Combinations (Must All Be True)
- Q3 includes at least 3 communication methods.
- Q5 includes at least 1 cultural responsiveness practice.
- Q6 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

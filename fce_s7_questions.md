# FCE-S7: Collaboration with Community Organizations

**Criterion (Original):**
Our school's process for collaborating with community organizations includes all the following:
- Shared goals
- Defined roles and responsibilities
- Ongoing communication
- Evaluation plans

Note: Examples of partnerships to support family and community engagement include afterschool programs, food and clothing banks, housing assistance programs, social service agencies, and health care services.

## Personas
- Content expert (Family and Community Engagement): Former family engagement coordinator and community schools director; deep practice knowledge of family partnerships and community collaboration.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school collaborate with community organizations to support family and community engagement?** | Yes / No | Content expert: Confirms the partnership exists. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without partnerships. | None provided. |
| **Q2. Do you have shared goals with your community organization partners?** | Yes / No | Content expert: Validates alignment between school and partners. UI/UX: Direct question keeps decision fast. Data and evaluation: Separates partnership existence from quality. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures partnership is intentional, not ad hoc. | None provided. |
| **Q3. Are roles and responsibilities defined with your community organization partners?** | Yes / No | Content expert: Confirms structure and clarity in the partnership. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures partnership formalization. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with best practice for sustainable partnerships. | None provided. |
| **Q4. Is there ongoing communication with your community organization partners?** | Yes / No | Content expert: Distinguishes active from dormant partnerships. UI/UX: Single decision point maintains flow. Data and evaluation: Enables assessment of partnership maintenance. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures partnerships are operationally active. | None provided. |
| **Q5. Do you have evaluation plans in place for your collaboration with community organizations?** | Yes / No | Content expert: Confirms continuous improvement mindset. UI/UX: Final gate question before details. Data and evaluation: Validates accountability component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures partnership quality is monitored. | None provided. |
| **Q6. Which types of community organizations does your school partner with?** | Afterschool program providers / Food bank or pantry / Clothing bank / Housing assistance program / Social service agency / Health care provider / Mental health or counseling service / Youth development organization / Faith-based organization / Library or cultural institution / Business or employer / Other (specify) | Content expert: Validates breadth of community support. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables partner-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures partner diversity without overwhelming detail. | None provided. |
| **Q7. How often does your school communicate with community organization partners?** | Weekly / Monthly / Quarterly / Annually / As needed | Content expert: Frequency indicates partnership intensity. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable expectations. | None provided. |
| **Q8. What methods are used for ongoing communication?** | Regular meetings (in-person or virtual) / Email updates / Shared case management system or database / Phone calls / Shared planning documents / Joint professional development / Other (specify) | Content expert: Confirms communication is structured, not ad hoc. UI/UX: Familiar channels make selection easy. Data and evaluation: Supports analysis of communication practices. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures communication is documented and intentional. | None provided. |
| **Q9. What does your evaluation plan measure or assess?** | Achievement of shared goals / Family participation and satisfaction / Student outcomes or benefits / Partnership effectiveness and sustainability / Resource utilization / Other (specify) | Content expert: Ensures evaluation is meaningful and actionable. UI/UX: Multi-select captures evaluation scope. Data and evaluation: Supports quality assurance and continuous improvement. Senior front-end engineer: Checkbox group format. Senior back-end engineer: Evaluation components support reporting. Product manager: Demonstrates accountability and learning orientation. | None provided. |
| **Q10. Evidence (choose one)** | Memorandum of Understanding (MOU) or partnership agreement / Meeting notes or communication log / Evaluation plan or partnership review document | Content expert: Provides tangible proof of formal partnership. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q6 includes at least 1 organization type.
- Q7 is not empty (any frequency selected).
- Q8 includes at least 2 communication methods.
- Q9 includes at least 2 evaluation measures.
- Q10 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

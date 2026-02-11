# SHS-S6: Collaboration with Community-Based Health Providers

**Criterion (Original):**
Our school's process for collaborating with community-based health providers to support school health services includes all the following:
- Shared goals
- Defined roles and responsibilities
- Ongoing communication
- Evaluation plans

Note: Examples of community-based health providers include hospitals, federally qualified health centers (FQHCs), community mental/behavioral health professionals, psychiatrists, primary care physicians, and other health care providers.

## Personas
- Content expert (School Health Services): Former school nurse and health education teacher; deep practice knowledge of school health services and community partnerships.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school collaborate with community-based health providers to support school health services?** | Yes / No | Content expert: Confirms the partnership exists. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without partnerships. | None provided. |
| **Q2. Do you have shared goals with your community-based health provider partners?** | Yes / No | Content expert: Validates alignment between school and partners. UI/UX: Direct question keeps decision fast. Data and evaluation: Separates partnership existence from quality. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures partnership is intentional, not ad hoc. | None provided. |
| **Q3. Are roles and responsibilities defined with your community-based health provider partners?** | Yes / No | Content expert: Confirms structure and clarity in the partnership. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures partnership formalization. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with best practice for sustainable partnerships. | None provided. |
| **Q4. Is there ongoing communication with your community-based health provider partners?** | Yes / No | Content expert: Distinguishes active from dormant partnerships. UI/UX: Single decision point maintains flow. Data and evaluation: Enables assessment of partnership maintenance. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures partnerships are operationally active. | None provided. |
| **Q5. Do you have evaluation plans in place for your collaboration with community-based health providers?** | Yes / No | Content expert: Confirms continuous improvement mindset. UI/UX: Final gate question before details. Data and evaluation: Validates accountability component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures partnership quality is monitored. | None provided. |
| **Q6. Which types of community-based health providers does your school partner with?** | Hospital / Federally Qualified Health Center (FQHC) / Community mental or behavioral health provider / Psychiatrist / Primary care physician or medical practice / Dental provider / Public health department / Other (specify) | Content expert: Validates breadth of health support. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables partner-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures partner diversity without overwhelming detail. | None provided. |
| **Q7. How often does your school communicate with community-based health provider partners?** | Weekly / Monthly / Quarterly / Annually / As needed | Content expert: Frequency indicates partnership intensity. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable expectations. | None provided. |
| **Q8. What methods are used for ongoing communication?** | Regular meetings (in-person or virtual) / Email updates / Shared case management system / Phone calls / Shared data dashboard / Other (specify) | Content expert: Confirms communication is structured, not ad hoc. UI/UX: Familiar channels make selection easy. Data and evaluation: Supports analysis of communication practices. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures communication is documented and intentional. | None provided. |
| **Q9. Evidence (choose one)** | Memorandum of Understanding (MOU) or partnership agreement / Meeting notes or communication log / Evaluation plan or partnership review document | Content expert: Provides tangible proof of formal partnership. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q6 includes at least 1 provider type.
- Q7 is not empty (any frequency selected).
- Q8 includes at least 2 communication methods.
- Q9 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

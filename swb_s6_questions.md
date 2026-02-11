# SWB-S6: Gathering Input from Staff on Staff Well-Being Policies and Practices

**Criterion (Original):**
Our school does all the following:
- Gathers input from all staff (including non-instructional staff) at least once per year
- Uses at least three inclusive and culturally responsive methods to gather input, including mechanisms to provide anonymous input
- Communicates results of input in languages that reflect the diversity of all staff at least once per year
- Analyzes demographics of respondents to ensure input is representative of all staff and job-types

## Personas
- Content expert (Staff Well-Being): Former school principal and staff wellness coordinator; deep practice knowledge of educator well-being and organizational culture.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school gather input from staff on policies and practices regarding staff well-being?** | Yes / No | Content expert: Confirms the feedback process exists before evaluating components. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without input processes. | None provided. |
| **Q2. Is input gathered from all staff (including non-instructional staff)?** | Yes / No | Content expert: Ensures equity and inclusiveness across all staff roles. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures reach of input gathering. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Aligns with best practice for comprehensive staff voice. | None provided. |
| **Q3. Is input gathered at least once per year?** | Yes / No | Content expert: Validates consistency and regularity of feedback collection. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Establishes minimum frequency threshold. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures ongoing commitment to staff input. | None provided. |
| **Q4. Does your school use at least three methods to gather input from staff?** | Yes / No | Content expert: Confirms multiple pathways for staff to provide feedback. UI/UX: Single decision point maintains flow. Data and evaluation: Validates methodological diversity. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures accessibility of input mechanisms. | None provided. |
| **Q5. Do the methods for gathering input include mechanisms for anonymous feedback?** | Yes / No | Content expert: Ensures psychological safety for candid feedback. UI/UX: Clear question reduces interpretation burden. Data and evaluation: Validates confidentiality component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures staff can share honestly without fear. | None provided. |
| **Q6. Are the methods for gathering input inclusive and culturally responsive?** | Yes / No | Content expert: Confirms methods are accessible and respectful of diverse staff. UI/UX: Direct yes/no reduces ambiguity. Data and evaluation: Captures equity component of input gathering. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures all voices can be heard equitably. | None provided. |
| **Q7. Does your school communicate results of staff input at least once per year?** | Yes / No | Content expert: Validates closed-loop communication and transparency. UI/UX: Clear gate question for communication practices. Data and evaluation: Captures accountability component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures staff see their input valued and acted upon. | None provided. |
| **Q8. Are results communicated in languages that reflect the diversity of all staff?** | Yes / No | Content expert: Confirms linguistic accessibility and cultural responsiveness. UI/UX: Final gate question before details. Data and evaluation: Validates equity in communication. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures all staff can access and understand results. | None provided. |
| **Q9. Does your school analyze demographics of respondents to ensure input is representative of all staff and job types?** | Yes / No | Content expert: Confirms intentional analysis of participation patterns. UI/UX: Clear question about data analysis practices. Data and evaluation: Validates representativeness component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures input reflects all voices, not just the loudest. | None provided. |
| **Q10. How often does your school gather input from staff on well-being policies and practices?** | Once per year / Twice per year / Quarterly / Monthly / Ongoing throughout the year | Content expert: Frequency indicates commitment to continuous feedback. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable expectations. | None provided. |
| **Q11. What methods does your school use to gather input from staff?** | Anonymous surveys / Focus groups / One-on-one interviews / Suggestion box (physical or digital) / Town halls or all-staff meetings / Advisory committees / Exit interviews / Pulse surveys / Other (specify) | Content expert: Validates diversity and accessibility of input methods. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables method analysis across schools. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures methodological diversity without overwhelming detail. | None provided. |
| **Q12. Which staff roles are included in the input-gathering process?** | Teachers / Administrators / Instructional support staff / Cafeteria staff / Custodial staff / Transportation staff / Paraprofessionals / Office staff / Other non-instructional staff (specify) | Content expert: Validates truly inclusive participation across all roles. UI/UX: Comprehensive list ensures all staff types are considered. Data and evaluation: Enables equity analysis of participation. Senior front-end engineer: Standard checkbox group with Other field. Senior back-end engineer: Categories support role-based reporting. Product manager: Ensures all staff voices are sought, not just instructional roles. | None provided. |
| **Q13. How are results of staff input communicated?** | Email summary / Staff meetings / Newsletters / Dashboard or data portal / Posted results in staff areas / Website or intranet / Language-translated documents / Other (specify) | Content expert: Confirms accessible and transparent communication practices. UI/UX: Familiar channels make selection easy. Data and evaluation: Supports analysis of communication practices. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures communication is intentional and accessible. | None provided. |
| **Q14. Evidence (choose one)** | Staff survey or input-gathering tool with summary of results / Communication to staff showing results in multiple languages / Demographic analysis report showing respondent representation / Meeting notes or presentation showing results shared with staff | Content expert: Provides tangible proof of comprehensive input process. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."
- Q6 is "No."
- Q7 is "No."
- Q8 is "No."
- Q9 is "No."

### Required Combinations (Must All Be True)
- Q10 is not empty (any frequency selected).
- Q11 includes at least 3 methods (must include at least 1 anonymous method).
- Q12 includes at least 3 staff role types (must include at least 1 non-instructional role).
- Q13 includes at least 2 communication methods.
- Q14 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

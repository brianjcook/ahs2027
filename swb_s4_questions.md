# SWB-S4: Professional Learning on Staff Well-Being

**Criterion (Original):**
Our school provides continuous professional learning that is all the following:
- Available for all staff (including non-instructional staff) at least once per year
- Inclusive of content on self-care, boundaries, and stress management
- Aligned with school improvement efforts
- Job-embedded, with coaching supports

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
| **Q1. Does your school provide professional learning on staff well-being?** | Yes / No | Content expert: Confirms the program exists before evaluating components. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without programs. | None provided. |
| **Q2. Is professional learning on staff well-being available to all staff (including non-instructional staff)?** | Yes / No | Content expert: Ensures equity and inclusiveness across all staff roles. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures reach of professional learning. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Aligns with best practice for comprehensive staff support. | None provided. |
| **Q3. Is professional learning on staff well-being offered at least once per year?** | Yes / No | Content expert: Validates consistency and sustainability of the program. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Establishes minimum frequency threshold. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures ongoing commitment to staff well-being. | None provided. |
| **Q4. Does the professional learning include content on self-care, boundaries, and stress management?** | Yes / No | Content expert: Confirms essential well-being topics are addressed. UI/UX: Single decision point maintains flow. Data and evaluation: Validates content quality and relevance. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures professional learning addresses core well-being needs. | None provided. |
| **Q5. Is the professional learning on staff well-being aligned with school improvement efforts?** | Yes / No | Content expert: Ensures integration with broader school goals and priorities. UI/UX: Clear question reduces interpretation burden. Data and evaluation: Validates strategic alignment. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures well-being is integrated into school culture. | None provided. |
| **Q6. Is the professional learning job-embedded with coaching supports?** | Yes / No | Content expert: Confirms implementation support for application in daily practice. UI/UX: Final gate question before details. Data and evaluation: Captures sustainability mechanism. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures learning transfers to practice. | None provided. |
| **Q7. How often is professional learning on staff well-being provided?** | Once per year / Twice per year / Quarterly / Monthly / Ongoing throughout the year | Content expert: Frequency indicates commitment and depth of support. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable expectations. | None provided. |
| **Q8. What topics are included in the professional learning on staff well-being?** | Self-care strategies / Setting and maintaining boundaries / Stress management techniques / Work-life balance / Mindfulness or meditation / Mental health awareness / Burnout prevention / Other (specify) | Content expert: Validates breadth and depth of well-being content. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables topic analysis across schools. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures content diversity without overwhelming detail. | None provided. |
| **Q9. What coaching supports are provided for job-embedded professional learning?** | One-on-one coaching / Peer coaching / Small group coaching / Mentoring / Observation with feedback / Co-planning or co-teaching / Follow-up sessions / Other (specify) | Content expert: Confirms structured support for implementation. UI/UX: Familiar support types make selection easy. Data and evaluation: Supports analysis of coaching practices. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures coaching is intentional and sustained. | None provided. |
| **Q10. Which staff roles participate in professional learning on staff well-being?** | Teachers / Administrators / Instructional support staff / Cafeteria staff / Custodial staff / Transportation staff / Paraprofessionals / Office staff / Other non-instructional staff (specify) | Content expert: Validates truly inclusive participation across all roles. UI/UX: Comprehensive list ensures all staff types are considered. Data and evaluation: Enables equity analysis of participation. Senior front-end engineer: Standard checkbox group with Other field. Senior back-end engineer: Categories support role-based reporting. Product manager: Ensures commitment to all staff, not just instructional roles. | None provided. |
| **Q11. Evidence (choose one)** | Professional learning calendar or schedule / Professional learning agenda and attendance records / Coaching plan or coaching log / School improvement plan showing alignment with well-being professional learning | Content expert: Provides tangible proof of comprehensive professional learning. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."
- Q6 is "No."

### Required Combinations (Must All Be True)
- Q7 is not empty (any frequency selected).
- Q8 includes at least 3 topics (must include self-care, boundaries, and stress management).
- Q9 includes at least 1 coaching support type.
- Q10 includes at least 3 staff role types (must include at least 1 non-instructional role).
- Q11 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

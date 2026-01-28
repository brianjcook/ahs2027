# SHS-S5: School Resource Mapping to Support School Health Services

**Criterion (Original):**
Our school’s resource mapping process includes all the following:
- Identifying existing programs, services, and resources in the school and in the community
- Informing the school community about the available resources
- Matching students and families with available resources to address needs and support student achievement
- Identifying community partners to support unmet needs

## Personas
- Content expert (School Health Services): Former school nurse and health education teacher; deep practice knowledge of school health services and family referrals.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. In your resource mapping process, does your school identify existing programs, services, and resources in the school and in the community?** | Yes / No | Content expert: Validates the foundational inventory step. UI/UX: Simple yes/no avoids a long combined checklist. Data and evaluation: Enables clear, component-level fidelity tracking. Senior front-end engineer: Supports branching without complex validation. Senior back-end engineer: Stores as a boolean for rules-based scoring. Product manager: Reduces cognitive load while keeping rigor. | None provided. |
| **Q2. In your resource mapping process, does your school inform the school community about available resources?** | Yes / No | Content expert: Confirms outreach is part of the process. UI/UX: Short, direct question with a single decision. Data and evaluation: Separates availability from communication. Senior front-end engineer: Straightforward input with low error risk. Senior back-end engineer: Boolean flag supports scoring logic. Product manager: Clarifies whether the map is actively shared. | None provided. |
| **Q3. In your resource mapping process, does your school match students and families to resources to address needs and support student achievement?** | Yes / No | Content expert: Distinguishes active matching from passive lists. UI/UX: Yes/no keeps the question quick to answer. Data and evaluation: Isolates the core service delivery action. Senior front-end engineer: Enables conditional follow-ups. Senior back-end engineer: Boolean flag supports eligibility checks. Product manager: Reinforces that matching is required for credit. | None provided. |
| **Q4. In your resource mapping process, does your school identify community partners to support unmet needs?** | Yes / No | Content expert: Verifies external support for gaps. UI/UX: Keeps the initial gate simple and fast. Data and evaluation: Enables discrete measurement of partnerships. Senior front-end engineer: Clean gating for later partner detail. Senior back-end engineer: Simple boolean for scoring. Product manager: Ensures the unmet-needs component is explicit. | None provided. |
| **Q5. How often did your school complete or update its resource mapping in the past 12 months?** | More than once per year / Once per year / Less than once per year / Not in the past 12 months | Content expert: Frequency indicates whether the process is active and maintained. UI/UX: Single select keeps the question quick to answer. Data and evaluation: Supports comparability across schools and years. Senior front-end engineer: Straightforward radio input with low error risk. Senior back-end engineer: Easy to store as an enum for reporting. Product manager: Captures recency without requiring documentation. | None provided. |
| **Q6. Which resource categories were included in your mapping?** | School-based health services / Mental and behavioral health / Nutrition and food access / Physical activity / Housing insecurity / Transportation / Health insurance and benefits enrollment / Family support and parenting resources / Other (specify) | Content expert: Validates breadth across health and social drivers. UI/UX: Multi-select list with an Other field keeps detail structured. Data and evaluation: Enables category-level gap analysis. Senior front-end engineer: Checkbox group is easy to implement and validate. Senior back-end engineer: Categories map to stable reference data. Product manager: Balances depth with a clear, bounded list. | None provided. |
| **Q7. How did you inform families, students, and staff about available resources?** | School website / Printed materials sent home / Email / Text or communication app / In-person events or meetings / Student services office / Staff training or briefing / Other (specify) | Content expert: Confirms dissemination beyond a static list. UI/UX: Uses familiar channels so schools can answer quickly. Data and evaluation: Supports analysis of outreach practices. Senior front-end engineer: Standard multi-select with optional text. Senior back-end engineer: Captures outreach modes without free text sprawl. Product manager: Ensures the criterion is not just documented but communicated. | None provided. |
| **Q8. How are students and families matched to resources when needs are identified?** | Warm handoff or referral by school staff / Referral form or ticket system / Direct scheduling by school staff / Resource list provided for self-navigation / Other (specify) | Content expert: Distinguishes active support from passive sharing. UI/UX: Options are concrete and easy to recognize. Data and evaluation: Enables assessment of referral intensity. Senior front-end engineer: Conditional text input only when needed. Senior back-end engineer: Methods map to discrete values for scoring. Product manager: Clarifies whether matching is actually operationalized. | None provided. |
| **Q9. Approximately how many students or families were matched to resources in the last 12 months?** | 0 / 1-9 / 10-49 / 50-99 / 100-249 / 250+ | Content expert: Measures real-world usage of the system. UI/UX: Ranged options reduce precision pressure. Data and evaluation: Quantifies reach without requiring exact counts. Senior front-end engineer: Simple single-select input. Senior back-end engineer: Stored as a bucket for analysis. Product manager: Helps reviewers gauge scale quickly. | None provided. |
| **Q10. Which community partner types are included to address unmet needs?** | Public health department / Hospital or clinic / Behavioral health provider / Food bank or pantry / Community-based nonprofit / Faith-based organization / Local government social services / Other (specify) | Content expert: Confirms external partnerships for gaps the school cannot fill. UI/UX: Clear list of recognizable partner types. Data and evaluation: Provides partner mix data for equity insights. Senior front-end engineer: Multi-select pattern is consistent with other checklist questions. Senior back-end engineer: Partner types map to controlled vocabulary. Product manager: Reinforces the unmet-needs component of the criterion. | None provided. |
| **Q11. How did you identify gaps or unmet needs in your mapping?** | Staff review of referral outcomes / Family or student surveys / Community partner feedback / School data (attendance, nurse visits, discipline, etc.) / Other (specify) | Content expert: Confirms a feedback loop, not just a one-time list. UI/UX: Lets schools select multiple signals without narrative. Data and evaluation: Distinguishes data-driven from anecdotal approaches. Senior front-end engineer: Reuses multi-select component and validation. Senior back-end engineer: Captures audit-friendly evidence sources. Product manager: Helps reviewers see how mapping informs improvement. | None provided. |
| **Q12. Evidence (choose one)** | Upload a current resource map or directory / Provide a link to the resource directory / Upload a communication sample (flyer, email, or website screenshot) | Content expert: Provides tangible proof without overburdening schools. UI/UX: Single required evidence keeps the step light. Data and evaluation: Optional artifacts support spot checks and QA. Senior front-end engineer: One-of-three input is straightforward to implement. Senior back-end engineer: Stores a single evidence artifact per submission. Product manager: Balances verification needs with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Any of Q1 through Q4 is "No."
- Q5 is "Not in the past 12 months."
- Q9 is "0."

### Required Combinations (Must All Be True)
- Q6 includes at least 3 resource categories.
- Q7 includes at least 2 communication channels.
- Q8 includes at least 1 active matching method (Warm handoff, Referral form or ticket system, Direct scheduling).
- Q10 includes at least 1 community partner type.
- Q11 includes at least 1 gap-identification method.
- Q12 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

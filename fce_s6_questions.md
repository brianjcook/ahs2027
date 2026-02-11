# FCE-S6: Collaboration with Families on Social Drivers of Health

**Criterion (Original):**
Our school does all the following:
- Collaborates with families and caregivers to identify needs related to social drivers of health
- Connects families and caregivers to relevant supports and resources (e.g., food access, healthcare, housing, interpretation/translation services, and transportation)

Note: Social drivers of health refer to the conditions in which people are born, grow, live, work, and age that affect health outcomes, such as economic stability, education access, healthcare access, neighborhood environment, and social context.

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
| **Q1. Does your school collaborate with families and caregivers to identify needs related to social drivers of health?** | Yes / No | Content expert: Confirms the school engages families in needs assessment. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without this practice. | None provided. |
| **Q2. What methods does your school use to identify family needs related to social drivers of health?** | Home visits / Family conferences or meetings / Surveys or needs assessments / Community listening sessions / Referrals from school staff (counselors, nurses, social workers) / Other (specify) | Content expert: Validates multiple pathways for understanding family needs. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables analysis of identification practices. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures method diversity without overwhelming detail. | None provided. |
| **Q3. Does your school connect families and caregivers to relevant supports and resources?** | Yes / No | Content expert: Distinguishes between identification and action. UI/UX: Clear binary choice maintains flow. Data and evaluation: Separates assessment from intervention. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures schools move from awareness to action. | None provided. |
| **Q4. What types of supports and resources does your school connect families to?** | Food access programs / Healthcare services / Housing assistance / Interpretation/translation services / Transportation services / Mental health services / Employment assistance / Childcare services / Legal services / Utility assistance / Other (specify) | Content expert: Confirms comprehensive approach to social drivers of health. UI/UX: Familiar categories make selection efficient. Data and evaluation: Enables resource-type analysis across schools. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Resource types map to discrete values. Product manager: Captures breadth of support without excessive detail. | None provided. |
| **Q5. How does your school maintain information about community resources?** | Centralized resource directory or database / Referral tracking system / Partnership agreements with community organizations / Dedicated staff member maintains resource list / Regional or district resource database / Other (specify) | Content expert: Validates infrastructure for sustainable connections. UI/UX: Single select ensures clarity on primary approach. Data and evaluation: Supports analysis of resource management practices. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances implementation detail with reasonable expectations. | None provided. |
| **Q6. How does your school track referrals to community supports?** | Formal referral tracking system / Case management notes / Spreadsheet or database / Follow-up conversations with families / Feedback from community partners / We do not formally track referrals / Other (specify) | Content expert: Confirms accountability and follow-through. UI/UX: Clear options with "do not track" choice maintains honesty. Data and evaluation: Captures tracking practices for quality assessment. Senior front-end engineer: Radio button with validation. Senior back-end engineer: Single value for scoring logic. Product manager: Acknowledges reality while encouraging best practice. | None provided. |
| **Q7. How frequently does your school review and update its approach to identifying and addressing family needs?** | Monthly / Quarterly / Semester / Annually / As needed / We do not formally review | Content expert: Continuous improvement mindset is essential. UI/UX: Standard intervals with flexible option. Data and evaluation: Enables comparison of review cycles. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum. Product manager: Balances rigor with practical constraints. | None provided. |
| **Q8. Evidence (choose one)** | Resource directory or list of community supports / Referral tracking log or case management notes / Needs assessment results or family survey data | Content expert: Provides tangible proof of systematic approach. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q3 is "No."
- Q6 is "We do not formally track referrals."

### Required Combinations (Must All Be True)
- Q2 includes at least 2 methods.
- Q4 includes at least 3 resource types.
- Q5 is not empty (any system selected).
- Q7 is not "We do not formally review."
- Q8 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

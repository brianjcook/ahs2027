# LWP-S5: Standards for Foods and Beverages Provided (Not Sold)

**Criterion (Original):**
Our school ensures all foods and beverages provided, but not sold, to students during the school day meet or exceed the Smart Snacks in School nutrition standards*.
Note: This includes all foods and beverages that are not part of a federally reimbursed child nutrition program, such as foods or beverages provided to students for rewards, incentives, classroom parties (e.g., birthday parties, holiday parties), or school-wide celebrations.

## Personas
- Local Wellness Policy content expert: Former district administrator and school wellness coordinator; leads wellness policy implementation and stakeholder engagement.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school ensure foods and beverages provided (not sold) to students during the school day meet or exceed Smart Snacks standards?** | Yes / No | Local Wellness Policy expert: Confirms the core compliance requirement. UI/UX: Simple gate reduces unnecessary follow-ups. Data and evaluation: Establishes a clear eligibility anchor. Senior front-end engineer: Supports branching without complexity. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Keeps the flow efficient for non-qualifying schools. | None provided. |
| **Q2. In which situations does your school apply the Smart Snacks standards to foods and beverages that are provided (not sold)?** | Classroom rewards or incentives / Classroom parties / School-wide celebrations / Classroom snacks / After-school or enrichment programs during the school day / Other (specify) | Local Wellness Policy expert: Confirms coverage across common non-sale contexts. UI/UX: Checklist keeps answers structured. Data and evaluation: Supports context-specific analysis. Senior front-end engineer: Standard multi-select component. Senior back-end engineer: Controlled values for reporting. Product manager: Makes the scope visible for reviewers. | None provided. |
| **Q3. How does your school ensure compliance with Smart Snacks standards for provided foods and beverages?** | Written policy or guidance / Staff training or briefings / Approved foods list / Pre-approval or review process / Other (specify) | Local Wellness Policy expert: Verifies an operational compliance mechanism. UI/UX: Multi-select keeps responses concise. Data and evaluation: Captures implementation methods. Senior front-end engineer: Checkbox group is easy to implement. Senior back-end engineer: Stores as discrete values. Product manager: Ensures the process is more than a statement. | None provided. |
| **Q4. Evidence (choose one)** | Policy or guidance document / Communication to staff or families / Approved foods list | Local Wellness Policy expert: Provides proof with minimal burden. UI/UX: Single evidence requirement. Data and evaluation: Supports spot checks and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores a single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."

### Required Combinations (Must All Be True)
- Q2 includes at least 3 situations.
- Q3 includes at least 1 compliance method.
- Q4 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

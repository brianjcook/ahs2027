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
| **Q1. In which situations does your school provide (not sell) foods and/or beverages?** | Classroom rewards or incentives / Classroom parties / School-wide celebrations / Classroom snacks / After-school or enrichment programs during the school day / We don't provide foods or beverages at our school | Local Wellness Policy expert: Confirms coverage across common non-sale contexts. UI/UX: Checklist keeps answers structured. Data and evaluation: Supports context-specific analysis. Senior front-end engineer: Standard multi-select component. Senior back-end engineer: Controlled values for reporting. Product manager: Makes the scope visible for reviewers. | None provided. |
| **Q1a. (Conditional) If "We don't provide foods or beverages at our school" is selected:** Please explain your school's approach. | Text area | Local Wellness Policy expert: Captures context for unusual situations. UI/UX: Only shown when needed. Data and evaluation: Provides qualitative context. Senior front-end engineer: Conditional text input. Senior back-end engineer: Optional field based on Q1 response. Product manager: Allows for edge cases without blocking. | None provided. |
| **Q2. (Per-situation) For each situation selected in Q1 (except "We don't provide"): How does your school ensure compliance with Smart Snacks standards for [situation]?** | Written policy or guidance / Staff training or briefings / Approved foods list / Pre-approval or review process / Other (specify) | Local Wellness Policy expert: Verifies situation-specific compliance mechanisms. UI/UX: Asked once per selected situation for specificity. Data and evaluation: Captures implementation methods per context. Senior front-end engineer: Repeated question set based on Q1 selections. Senior back-end engineer: Stores per-situation compliance data. Product manager: Ensures compliance is documented for each context. | None provided. |
| **Q3. Evidence (choose one)** | Policy or guidance document / Communication to staff or families / Approved foods list | Local Wellness Policy expert: Provides proof with minimal burden. UI/UX: Single evidence requirement. Data and evaluation: Supports spot checks and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores a single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- None.

### Required Combinations (Must All Be True)
- Q1 includes at least 3 situations (excluding "We don't provide"), OR Q1 selects only "We don't provide" and Q1a is completed.
- For each situation selected in Q1 (except "We don't provide"), Q2 includes at least 1 compliance method for that situation.
- Q3 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

### Implementation Notes
- Q1a (text explanation) is conditionally shown only when "We don't provide foods or beverages at our school" is selected.
- Q2 is asked separately for each situation selected in Q1, except for "We don't provide foods or beverages at our school".
- If only "We don't provide" is selected, Q2 is skipped entirely.

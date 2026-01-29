# LWP-S2: Measure Progress on Wellness Policy Implementation

**Criterion (Original):**
Our school uses an evidence-based* assessment tool(s) to measure progress made in implementing the district wellness policy at least once every three years.

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
| **Q1. Does your school use an evidence-based assessment tool to measure progress on district wellness policy implementation?** | Yes / No | Local Wellness Policy expert: Confirms the required measurement practice exists. UI/UX: Simple gate reduces unnecessary follow-ups. Data and evaluation: Establishes eligibility for measurement. Senior front-end engineer: Enables conditional flows. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Keeps the process lightweight for non-qualifying schools. | None provided. |
| **Q2. When did your school most recently use an assessment tool?** | This school year (within the past 12 months) / Last school year (within the past 2 years) / The year before last (within the past 3 years) / More than 3 years ago / We have never used an assessment tool | Local Wellness Policy expert: Checks recency against the three-year requirement. UI/UX: Single select avoids date entry. Data and evaluation: Supports longitudinal analysis. Senior front-end engineer: Simple radio input. Senior back-end engineer: Enum for reporting. Product manager: Matches the criterion threshold. | None provided. |
| **Q3. Which evidence-based assessment tool(s) has your school used in the past 3 years?** | Thriving Schools Integrated Assessment (Action Center) / WellSAT (Wellness School Assessment Tool) / School Health Index (CDC) / District wellness policy assessment tool / State wellness policy assessment tool / Other evidence-based tool (specify) | Local Wellness Policy expert: Captures approved pathways without forcing a narrative. UI/UX: Short checklist with optional text. Data and evaluation: Supports tool-level reporting. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Controlled values with an other field. Product manager: Ensures the tool requirement is visible. | None provided. |
| **Q4. How were assessment results used?** | Reported to the wellness policy team / Set or updated measurable goals / Informed a wellness action plan / Shared with district leadership / Other (specify) | Local Wellness Policy expert: Shows the assessment drives action. UI/UX: Multi-select keeps responses structured. Data and evaluation: Indicates use of results. Senior front-end engineer: Checkbox group is easy to implement. Senior back-end engineer: Stores as discrete values. Product manager: Encourages actionable use without heavy burden. | None provided. |
| **Q5. Evidence (choose one)** | Upload assessment results or report / Upload Action Center download or screenshot / Provide a link to the assessment results | Local Wellness Policy expert: Provides verification without excessive burden. UI/UX: Single evidence requirement. Data and evaluation: Supports spot checks and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores a single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "More than 3 years ago" or "We have never used an assessment tool."

### Required Combinations (Must All Be True)
- Q3 includes at least 1 tool.
- Q5 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

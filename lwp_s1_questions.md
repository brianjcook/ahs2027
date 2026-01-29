# LWP-S1: Wellness Policy Coordination Team

**Criterion (Original):**
Our school has a team* that does all the following:
- Coordinates implementation of the district wellness policy at our school
- Ensures members are representative* of our school community*
- Meets at least four times per year

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
| **Q1. In your wellness policy implementation process, does your school have a wellness policy team?** | Yes / No | Local Wellness Policy expert: Confirms the required governance structure exists. UI/UX: Simple gate avoids unnecessary follow-ups. Data and evaluation: Establishes a clear eligibility anchor. Senior front-end engineer: Enables branching without complex validation. Senior back-end engineer: Stores as a boolean for rules-based scoring. Product manager: Reduces burden for non-qualifying schools. | None provided. |
| **Q2. Does the wellness policy team coordinate implementation of the district wellness policy at your school?** | Yes / No | Local Wellness Policy expert: Verifies the team is operational, not nominal. UI/UX: Direct wording keeps decision fast. Data and evaluation: Separates team existence from function. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Clarifies accountability for implementation. | None provided. |
| **Q3. Are wellness policy team members representative of your school community?** | Yes / No | Local Wellness Policy expert: Ensures stakeholder representation is intentional. UI/UX: Keeps cognitive load low with a single choice. Data and evaluation: Captures equity-related governance. Senior front-end engineer: Supports conditional detail in later questions. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with program expectations for representation. | None provided. |
| **Q4. How many times did the wellness policy team meet in the past 12 months?** | 4 or more / 2-3 / 1 / 0 | Local Wellness Policy expert: Confirms ongoing coordination. UI/UX: Single select reduces ambiguity. Data and evaluation: Normalizes frequency for comparison. Senior front-end engineer: Simple radio input. Senior back-end engineer: Enum supports reporting. Product manager: Matches the criterion threshold. | None provided. |
| **Q5. Which roles are represented on the wellness policy team?** | School administrators / Teachers / School health services staff / Food service staff / Students / Families or caregivers / Community partners / School counselors or mental health staff / Physical education teachers or coaches / Support staff or paraprofessionals / School board members / Before/after school program staff / Parent-Teacher Association (PTA/PTO) representatives / Other (specify) | Local Wellness Policy expert: Validates broad representation. UI/UX: Checklist keeps data structured. Data and evaluation: Enables role-mix analysis. Senior front-end engineer: Standard multi-select component. Senior back-end engineer: Maps to controlled role values. Product manager: Makes representation criteria visible for reviewers. | None provided. |
| **Q6. Evidence (choose one)** | Team roster / Meeting agendas or minutes / Wellness policy implementation plan that references the team | Local Wellness Policy expert: Provides proof with minimal burden. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports spot checks and QA. Senior front-end engineer: One-of-three input is easy to implement. Senior back-end engineer: Stores a single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is not "4 or more."

### Required Combinations (Must All Be True)
- Q5 includes at least 2 roles.
- Q6 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

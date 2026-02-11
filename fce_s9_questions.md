# FCE-S9: Communicating Community-Based Supports to Families

**Criterion (Original):**
Our school does all the following:
- Communicates to families and caregivers at least once per year
- Uses at least three culturally responsive methods to communicate

Note: Community-based supports refer to resources and services available in the community that can support student and family wellbeing, such as health services, food assistance, housing support, mental health services, recreation programs, and educational resources.

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
| **Q1. Does your school communicate with families and caregivers about community-based supports available to them?** | Yes / No | Content expert: Confirms school shares resource information with families. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without communication practices. | None provided. |
| **Q2. How frequently does your school communicate about community-based supports?** | Multiple times per year / Annually / Less than annually / As needed or upon request | Content expert: Frequency indicates proactive versus reactive approach. UI/UX: Clear intervals with flexible option. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances best practice with resource realities. | None provided. |
| **Q3. What types of community-based supports does your school communicate about? (Select all that apply)** | Health services / Mental health and counseling / Food assistance programs / Housing support / Childcare services / Financial assistance or benefits enrollment / Employment and job training / Legal services / Recreation and youth programs / Educational resources (libraries, tutoring) / Transportation services / Other (specify) | Content expert: Validates comprehensive approach to family support. UI/UX: Multi-select list with Other field captures breadth. Data and evaluation: Enables analysis of resource types communicated. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Demonstrates holistic support for families. | None provided. |
| **Q4. What methods does your school use to communicate about community-based supports? (Select all that apply)** | Newsletters (print or email) / School website / Social media / Text messages / Robocalls or phone calls / Flyers or posters / Family meetings or events / Resource fairs / Parent-teacher conferences / Student backpack mail / Community partner outreach / Other (specify) | Content expert: Multiple channels increase reach and accessibility. UI/UX: Familiar options make selection straightforward. Data and evaluation: Captures communication strategy diversity. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Methods map to discrete values. Product manager: Recognizes varied family communication preferences. | None provided. |
| **Q5. Are your communication methods culturally responsive?** | Yes / No | Content expert: Cultural responsiveness ensures information is accessible and relevant. UI/UX: Direct yes/no maintains flow. Data and evaluation: Validates equity component. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with equity and inclusion goals. | None provided. |
| **Q6. How does your school ensure communication methods are culturally responsive? (Select all that apply)** | Provided in multiple languages / Use images and visual aids / Consider literacy levels and avoid jargon / Delivered through trusted community members or liaisons / Reflect cultural values and communication styles / Available in multiple formats (written, verbal, digital) / Timed to align with cultural or community events / Other (specify) | Content expert: Demonstrates intentional cultural responsiveness strategies. UI/UX: Comprehensive list shows depth of equity practices. Data and evaluation: Captures implementation of cultural responsiveness. Senior front-end engineer: Multi-select format. Senior back-end engineer: Strategies map to equity frameworks. Product manager: Validates removal of communication barriers. | None provided. |
| **Q7. How does your school maintain and update information about community-based supports?** | Dedicated staff person or team / Regular partnerships with community organizations / Online database or resource directory / District or regional resource network / Periodic review and update process / Other (specify) | Content expert: Current information is essential for effective referrals. UI/UX: Single select identifies primary approach. Data and evaluation: Supports analysis of resource management. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum. Product manager: Balances detail with efficiency. | None provided. |
| **Q8. Does your school track family engagement with communicated resources?** | Yes, systematically / Yes, informally / No | Content expert: Tracking reveals effectiveness and informs improvements. UI/UX: Three-level scale acknowledges varied capacity. Data and evaluation: Captures accountability practices. Senior front-end engineer: Radio button format. Senior back-end engineer: Ordered enum for scoring. Product manager: Recognizes spectrum of tracking sophistication. | None provided. |
| **Q9. Evidence (choose one)** | Sample communications about community supports (newsletter, flyer, website screenshot) / Resource directory or list shared with families / Communication plan or calendar showing when information is shared | Content expert: Provides tangible proof of communication practices. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "Less than annually" (must be at least annually).
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q3 includes at least 3 types of supports.
- Q4 includes at least 3 communication methods.
- Q6 includes at least 3 cultural responsiveness strategies.
- Q7 is not empty (any maintenance approach selected).
- Q9 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

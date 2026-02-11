# FCE-S8: Gathering Input on Family and Community Engagement Policies

**Criterion (Original):**
Our school does all the following:
- Gathers input from the school community and the public at least once per year
- Uses at least three inclusive and culturally responsive methods to gather input, including mechanisms to provide anonymous input
- Communicates results of input in languages that reflect the diversity of the community at least once per year
- Analyzes demographics of respondents to ensure input is representative of the school community

Note: School community includes students, families, caregivers, school staff, and community partners. Inclusive methods ensure all voices can be heard, including those who face barriers to participation. Culturally responsive methods honor and respect the diverse backgrounds and experiences of the community.

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
| **Q1. Does your school gather input from the school community and the public on policies and practices regarding family and community engagement?** | Yes / No | Content expert: Confirms school seeks stakeholder voice. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without input practices. | None provided. |
| **Q2. How frequently does your school gather this input?** | Multiple times per year / Annually / Every other year / Less frequently | Content expert: Frequency indicates commitment to ongoing engagement. UI/UX: Clear intervals make selection straightforward. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances ideal practice with resource constraints. | None provided. |
| **Q3. What methods does your school use to gather input? (Select all that apply)** | Surveys (online or paper) / Focus groups / Community forums or town halls / Interviews (one-on-one or small group) / Comment boxes or suggestion forms / Advisory councils or committees / School events with feedback opportunities / Social media or online platforms / Other (specify) | Content expert: Validates multiple pathways for engagement. UI/UX: Multi-select list with Other field captures diverse approaches. Data and evaluation: Enables method analysis and best practice identification. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Recognizes schools use varied strategies. | None provided. |
| **Q4. Do your input methods include mechanisms for anonymous feedback?** | Yes / No | Content expert: Anonymity increases honest feedback, especially on sensitive topics. UI/UX: Direct yes/no maintains flow. Data and evaluation: Captures critical inclusivity feature. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures safe spaces for candid input. | None provided. |
| **Q5. Are your input methods inclusive and culturally responsive?** | Yes / No | Content expert: Confirms methods honor diverse backgrounds and remove barriers. UI/UX: Simple choice keeps momentum. Data and evaluation: Validates equity component. Senior front-end engineer: Clean boolean. Senior back-end engineer: Boolean for scoring. Product manager: Aligns with equity principles. | None provided. |
| **Q6. How does your school ensure methods are inclusive and culturally responsive? (Select all that apply)** | Offered in multiple languages / Available in multiple formats (online, paper, in-person) / Scheduled at varied times to accommodate different schedules / Accessible to people with disabilities / Conducted in community locations (not just at school) / Use plain language and avoid jargon / Incorporate culturally relevant communication styles / Other (specify) | Content expert: Demonstrates intentional equity practices. UI/UX: Comprehensive list shows depth of accessibility. Data and evaluation: Captures equity strategy implementation. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Strategies map to equity frameworks. Product manager: Validates removal of participation barriers. | None provided. |
| **Q7. Does your school communicate results of input back to the community?** | Yes / No | Content expert: Closing the feedback loop builds trust and engagement. UI/UX: Clear yes/no advances flow. Data and evaluation: Separates input from communication. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring logic. Product manager: Ensures accountability and transparency. | None provided. |
| **Q8. How does your school communicate results? (Select all that apply)** | Newsletters or email updates / School website / Social media / Community meetings or presentations / Reports in multiple languages / Individual responses to contributors / Posted in school and community locations / Other (specify) | Content expert: Validates transparent communication practices. UI/UX: Familiar channels make selection efficient. Data and evaluation: Supports analysis of communication strategies. Senior front-end engineer: Multi-select format. Senior back-end engineer: Communication methods map to discrete values. Product manager: Ensures information reaches diverse audiences. | None provided. |
| **Q9. Are results communicated in languages that reflect the diversity of your community?** | Yes / No / Not applicable (community is monolingual) | Content expert: Language access is fundamental to equity. UI/UX: N/A option acknowledges varied contexts. Data and evaluation: Captures linguistic equity. Senior front-end engineer: Three-option radio button. Senior back-end engineer: Enum with null-equivalent option. Product manager: Recognizes reality of community demographics. | None provided. |
| **Q10. Does your school analyze demographics of respondents to ensure input is representative of the school community?** | Yes / No | Content expert: Demographic analysis reveals participation gaps. UI/UX: Straightforward yes/no maintains pace. Data and evaluation: Validates representativeness check. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for eligibility. Product manager: Ensures input reflects full community, not just vocal minority. | None provided. |
| **Q11. What demographic information does your school analyze? (Select all that apply)** | Race/ethnicity / Language spoken at home / Grade level / Role (student, family member, staff, community) / Socioeconomic indicators / Gender / Disability status / Other (specify) | Content expert: Comprehensive demographic analysis reveals equity gaps. UI/UX: Multi-select captures analytical depth. Data and evaluation: Supports equity and inclusion assessment. Senior front-end engineer: Checkbox group format. Senior back-end engineer: Demographic categories support reporting. Product manager: Demonstrates commitment to representative engagement. | None provided. |
| **Q12. Evidence (choose one)** | Input gathering results or summary report / Communication to community about results / Demographic analysis of respondents | Content expert: Provides tangible proof of systematic process. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "Less frequently" (must be at least annually).
- Q4 is "No."
- Q5 is "No."
- Q7 is "No."
- Q9 is "No" (unless "Not applicable" is selected).
- Q10 is "No."

### Required Combinations (Must All Be True)
- Q3 includes at least 3 methods.
- Q6 includes at least 3 strategies.
- Q8 includes at least 2 communication methods.
- Q11 includes at least 3 demographic categories.
- Q12 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

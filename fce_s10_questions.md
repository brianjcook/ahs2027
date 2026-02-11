# FCE-S10: Resources for Families to Support Student Success

**Criterion (Original):**
Our school provides all the following:
- Tools to facilitate ongoing, two-way communication between school staff and families and caregivers
- Technology options to link families and caregivers to the classroom
- Supplementary educational resources to support learning at home
- Opportunities for families and caregivers to network with each other

Note: Two-way communication enables families to both receive information and share input, questions, or concerns. Technology options may include learning management systems, classroom apps, or virtual meeting platforms. Supplementary resources help families support their children's learning outside of school hours.

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
| **Q1. Does your school provide tools to facilitate ongoing, two-way communication between school staff and families and caregivers?** | Yes / No | Content expert: Two-way communication is foundation of family engagement. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without communication tools. | None provided. |
| **Q2. What tools does your school provide for two-way communication? (Select all that apply)** | Learning management system (e.g., Canvas, Google Classroom) / School communication app (e.g., ClassDojo, Remind, ParentSquare) / Email / Text messaging / Phone calls / Video conferencing / Parent portal / In-person meetings / Home visits / Other (specify) | Content expert: Multiple tools increase accessibility and meet varied preferences. UI/UX: Multi-select list with Other field captures comprehensive approach. Data and evaluation: Enables tool type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Recognizes schools use multiple communication channels. | None provided. |
| **Q3. Does your school provide technology options to link families and caregivers to the classroom?** | Yes / No | Content expert: Technology connection increases family awareness and involvement. UI/UX: Clear yes/no maintains flow. Data and evaluation: Separates general communication from classroom connection. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures families can access classroom information. | None provided. |
| **Q4. What technology options does your school provide? (Select all that apply)** | Learning management system access / Classroom website or blog / Virtual classroom visits or livestreaming / Online grade book or progress tracker / Digital portfolios of student work / Video conferencing for parent-teacher meetings / Classroom communication apps / Email updates from teachers / Other (specify) | Content expert: Validates multiple pathways for classroom connection. UI/UX: Familiar technology options make selection efficient. Data and evaluation: Captures technology implementation breadth. Senior front-end engineer: Multi-select format. Senior back-end engineer: Options map to discrete values. Product manager: Demonstrates varied approaches to classroom transparency. | None provided. |
| **Q5. Does your school provide supplementary educational resources to support learning at home?** | Yes / No | Content expert: Home learning resources extend school impact. UI/UX: Direct yes/no advances flow. Data and evaluation: Validates academic support component. Senior front-end engineer: Clean boolean. Senior back-end engineer: Boolean for scoring logic. Product manager: Ensures families have tools to support learning. | None provided. |
| **Q6. What types of supplementary resources does your school provide? (Select all that apply)** | Homework help guides or tips / Learning activity suggestions / Educational websites or apps / Books or reading materials / Math or literacy games / Subject-specific resources aligned to curriculum / Videos or tutorials / Access to online learning platforms / Family learning workshops or trainings / Other (specify) | Content expert: Diverse resources meet varied learning needs and family capacities. UI/UX: Multi-select captures resource variety. Data and evaluation: Supports resource type analysis. Senior front-end engineer: Checkbox group format. Senior back-end engineer: Resource categories support reporting. Product manager: Validates comprehensive support for home learning. | None provided. |
| **Q7. Does your school provide opportunities for families and caregivers to network with each other?** | Yes / No | Content expert: Family-to-family connections build community and mutual support. UI/UX: Straightforward yes/no maintains pace. Data and evaluation: Captures peer support component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for eligibility. Product manager: Ensures families can connect beyond school-to-family communication. | None provided. |
| **Q8. What opportunities does your school provide for family networking? (Select all that apply)** | Parent organization (PTA/PTO) / Family engagement events / Parent education workshops / School volunteer opportunities / Social events (potlucks, celebrations) / Online family communities or groups / Grade-level or classroom family meetings / Mentorship or buddy programs for new families / Family resource center / Other (specify) | Content expert: Multiple opportunities accommodate varied schedules and preferences. UI/UX: Comprehensive list with Other captures full range. Data and evaluation: Enables networking strategy analysis. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Opportunity types map to stable categories. Product manager: Demonstrates commitment to family community building. | None provided. |
| **Q9. Are family engagement resources accessible to all families, including those with language, technology, or other barriers?** | Yes / No | Content expert: Equity requires removing barriers to access. UI/UX: Clear yes/no focuses on accessibility. Data and evaluation: Validates equity implementation. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for scoring. Product manager: Aligns with inclusion and equity principles. | None provided. |
| **Q10. How does your school ensure accessibility? (Select all that apply)** | Resources provided in multiple languages / Technology devices or internet access provided / Resources in multiple formats (digital, print, verbal) / Technical support or training offered / Low-literacy or visual formats available / Accommodations for families with disabilities / Flexible scheduling for events and meetings / Childcare provided at events / Transportation assistance / Other (specify) | Content expert: Multiple accessibility strategies remove participation barriers. UI/UX: Comprehensive list demonstrates equity commitment. Data and evaluation: Captures accessibility implementation depth. Senior front-end engineer: Multi-select format. Senior back-end engineer: Strategies map to equity frameworks. Product manager: Ensures all families can benefit from resources. | None provided. |
| **Q11. Evidence (choose one)** | Sample of communication tool or platform used / Examples of supplementary resources provided to families / Event calendar or description of family networking opportunities / Accessibility plan or documentation of supports | Content expert: Provides tangible proof of resource provision. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q3 is "No."
- Q5 is "No."
- Q7 is "No."
- Q9 is "No."

### Required Combinations (Must All Be True)
- Q2 includes at least 2 communication tools.
- Q4 includes at least 2 technology options.
- Q6 includes at least 3 resource types.
- Q8 includes at least 2 networking opportunities.
- Q10 includes at least 3 accessibility strategies.
- Q11 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

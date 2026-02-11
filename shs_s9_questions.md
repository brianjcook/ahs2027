# SHS-S9: Provision of School Health Services

**Criterion (Original):**
School nurses* or other qualified staff* provide school health services* based on the following:
- Health needs of students
- A needs assessment conducted at least once per year

## Personas
- Content expert (School Health Services): Former school nurse and health education teacher; deep practice knowledge of school health services and community partnerships.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school have qualified staff (school nurses or other qualified staff) who provide school health services?** | Yes / No | Content expert: Confirms presence of qualified personnel. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes baseline staffing requirement. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without qualified staff. | None provided. |
| **Q2. Are school health services at your school based on the health needs of students?** | Yes / No | Content expert: Validates student-centered approach to service delivery. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures whether services are responsive vs. generic. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures services are relevant to student population. | None provided. |
| **Q3. Does your school conduct a needs assessment to identify student health needs?** | Yes / No | Content expert: Confirms data-driven planning exists. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures presence of assessment process. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with evidence-based practice. | None provided. |
| **Q4. Is the health needs assessment conducted at least once per year?** | Yes / No | Content expert: Validates assessment is current and recurring. UI/UX: Single decision point maintains flow. Data and evaluation: Ensures assessment is not outdated. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures continuous improvement cycle. | None provided. |
| **Q5. What types of health needs are assessed? (Select all that apply)** | Physical health conditions / Mental and behavioral health needs / Chronic disease management / Immunization status / Vision and hearing / Dental health / Nutrition and food security / Other (specify) | Content expert: Captures breadth of health assessment. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables analysis of assessment comprehensiveness. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Balances specificity with respondent burden. | None provided. |
| **Q6. What methods does your school use to conduct the health needs assessment? (Select all that apply)** | Student health records review / Student or family surveys / Staff observations and referrals / Health screenings / Community health data / School health office visit data / Other (specify) | Content expert: Validates assessment methods are diverse and evidence-based. UI/UX: Familiar methods make selection easy. Data and evaluation: Supports analysis of assessment rigor. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures assessment is systematic, not anecdotal. | None provided. |
| **Q7. Who is involved in conducting or interpreting the health needs assessment? (Select all that apply)** | School nurse / Other qualified health staff / School administrators / Teachers / Families and caregivers / Students / Community health partners / Other (specify) | Content expert: Confirms stakeholder engagement in assessment process. UI/UX: Clear role categories facilitate selection. Data and evaluation: Enables analysis of collaborative approach. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Roles stored as enumerated values. Product manager: Balances comprehensiveness with practical completion. | None provided. |
| **Q8. How are the results of the health needs assessment used? (Select all that apply)** | Plan school health services / Allocate resources / Train staff / Develop health education programming / Connect students to community resources / Inform school improvement plans / Other (specify) | Content expert: Validates assessment drives action, not just data collection. UI/UX: Action-oriented options are intuitive. Data and evaluation: Measures assessment impact. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Uses stored as discrete categories. Product manager: Ensures assessment has operational value. | None provided. |
| **Q9. Evidence (choose one)** | Health needs assessment report or summary / School health services plan based on assessment / Meeting notes showing assessment findings and action planning | Content expert: Provides tangible proof of assessment process. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."

### Required Combinations (Must All Be True)
- Q5 includes at least 2 types of health needs.
- Q6 includes at least 2 assessment methods.
- Q7 includes at least 1 qualified staff member (school nurse or other qualified health staff).
- Q8 includes at least 2 uses of assessment results.
- Q9 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

# SHS-S11: Addressing Chronic Health Conditions

**Criterion (Original):**
Our school addresses chronic health conditions* among students in all the following ways:
- Ensures that school nurses* or other qualified staff* are available to dispense/deliver medications when needed
- Provides appropriate training for all staff that dispense/deliver medications
- Provides case management
- Provides referrals as needed

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
| **Q1. Does your school have students with chronic health conditions?** | Yes / No | Content expert: Confirms relevance of criterion to school population. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes applicability. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without applicable population. | None provided. |
| **Q2. Are school nurses or other qualified staff available to dispense/deliver medications when needed?** | Yes / No | Content expert: Validates medication management infrastructure. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures essential staffing component. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures safe medication administration. | None provided. |
| **Q3. Do all staff who dispense/deliver medications receive appropriate training?** | Yes / No | Content expert: Confirms competency and safety protocols. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures training requirement. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with safety and legal requirements. | None provided. |
| **Q4. Does your school provide case management for students with chronic health conditions?** | Yes / No | Content expert: Validates coordinated care approach. UI/UX: Single decision point maintains flow. Data and evaluation: Measures support structure. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures comprehensive student support. | None provided. |
| **Q5. Does your school provide referrals as needed for students with chronic health conditions?** | Yes / No | Content expert: Confirms connection to external resources. UI/UX: Final gate question before details. Data and evaluation: Validates referral component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures students access appropriate care. | None provided. |
| **Q6. What chronic health conditions does your school address? (Select all that apply)** | Asthma / Diabetes / Food allergies / Seizure disorders / Heart conditions / Severe allergies requiring epinephrine / Mental health conditions requiring medication / ADHD / Other conditions requiring daily medication / Other (specify) | Content expert: Validates breadth of conditions managed. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables condition-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures condition diversity without overwhelming detail. | None provided. |
| **Q7. How are staff trained to dispense/deliver medications? (Select all that apply)** | School nurse-led training / District-provided training program / Licensed healthcare provider training / State-approved training course / Online certification program / Annual refresher training / Competency assessment / Other (specify) | Content expert: Confirms training quality and consistency. UI/UX: Familiar training methods make selection easy. Data and evaluation: Supports analysis of training approaches. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures training is systematic and credible. | None provided. |
| **Q8. What case management activities does your school provide for students with chronic health conditions? (Select all that apply)** | Individual health care plans / Coordination with families / Coordination with healthcare providers / Monitoring student health status / Medication tracking / Emergency action plans / Communication with teachers about student needs / Transition planning / Other (specify) | Content expert: Validates comprehensiveness of case management. UI/UX: Clear activity categories facilitate selection. Data and evaluation: Enables analysis of case management quality. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Activities stored as enumerated values. Product manager: Balances thoroughness with practical implementation. | None provided. |
| **Q9. What types of referrals does your school provide? (Select all that apply)** | Primary care physicians / Specialists (e.g., endocrinologists, pulmonologists) / Community health centers / Mental health providers / Dental providers / Social services / School-based health centers / Insurance enrollment assistance / Other (specify) | Content expert: Confirms connection to full spectrum of care. UI/UX: Comprehensive but intuitive options. Data and evaluation: Measures referral network breadth. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Referral types stored as discrete categories. Product manager: Ensures holistic approach to chronic condition management. | None provided. |
| **Q10. How does your school ensure medications are available when needed? (Select all that apply)** | Maintain emergency medications on site / Store student-specific medications securely / Have backup medications available / Stock medications in multiple locations (e.g., nurse's office, classroom) / Communicate with families about medication refills / Have protocols for medication administration during field trips / Other (specify) | Content expert: Validates medication accessibility and safety. UI/UX: Practical strategies are easy to identify. Data and evaluation: Captures medication management quality. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Strategies stored as discrete flags. Product manager: Ensures medications are accessible when needed. | None provided. |
| **Q11. Evidence (choose one)** | Sample individual health care plan or medication administration plan / Training records for medication administration / Case management log or referral tracking system | Content expert: Provides tangible proof of chronic condition management. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q6 includes at least 2 chronic health conditions.
- Q7 includes at least 2 training methods.
- Q8 includes at least 3 case management activities.
- Q9 includes at least 2 types of referrals.
- Q10 includes at least 2 medication availability strategies.
- Q11 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

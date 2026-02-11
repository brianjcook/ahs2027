# SHS-S10: Physical Health Screenings

**Criterion (Original):**
Our school conducts physical health screenings* (e.g., hearing, vision, asthma, dental) that are all the following:
- Overseen by school nurses* or other qualified staff*
- Conducted using evidence-based* tools and procedures at least once per year
- Completed by staff with appropriate training
- Compliant with national referral and rescreening guidelines

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
| **Q1. Does your school conduct physical health screenings for students?** | Yes / No | Content expert: Confirms screenings are provided. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without screening programs. | None provided. |
| **Q2. Are physical health screenings overseen by school nurses or other qualified staff?** | Yes / No | Content expert: Validates qualified oversight ensures quality and compliance. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures supervision requirement. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures professional accountability. | None provided. |
| **Q3. Are the screenings conducted using evidence-based tools and procedures?** | Yes / No | Content expert: Confirms screenings meet professional standards. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures quality assurance component. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with best practice standards. | None provided. |
| **Q4. Are physical health screenings conducted at least once per year?** | Yes / No | Content expert: Validates frequency ensures early detection. UI/UX: Single decision point maintains flow. Data and evaluation: Measures consistency of screening program. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures screenings are current and routine. | None provided. |
| **Q5. Are the screenings completed by staff with appropriate training?** | Yes / No | Content expert: Confirms personnel competency. UI/UX: Final gate question before details. Data and evaluation: Validates training component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures quality implementation. | None provided. |
| **Q6. Are the screenings compliant with national referral and rescreening guidelines?** | Yes / No | Content expert: Validates follow-up protocols are in place. UI/UX: Clear yes/no reduces interpretation burden. Data and evaluation: Captures compliance requirement. Senior front-end engineer: Boolean input. Senior back-end engineer: Stored as compliance flag. Product manager: Ensures screenings lead to appropriate action. | None provided. |
| **Q7. What types of physical health screenings does your school conduct? (Select all that apply)** | Vision / Hearing / Dental / Asthma / Height and weight (BMI) / Blood pressure / Scoliosis / Other (specify) | Content expert: Validates comprehensiveness of screening program. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables screening-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures screening diversity without overwhelming detail. | None provided. |
| **Q8. How often are staff who conduct screenings trained?** | Before each screening period / Annually / Every two years / As needed when procedures change / Initial training only | Content expert: Frequency indicates commitment to quality. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable expectations. | None provided. |
| **Q9. What evidence-based tools or protocols does your school use for screenings? (Select all that apply)** | State department of health protocols / American Academy of Pediatrics guidelines / National Association of School Nurses protocols / Vision screening tools (e.g., Snellen chart, LEA symbols) / Hearing screening tools (e.g., audiometer) / Dental screening protocols / Other evidence-based protocols (specify) | Content expert: Confirms alignment with professional standards. UI/UX: Familiar protocols make selection easy. Data and evaluation: Supports analysis of quality measures. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Protocols map to discrete values. Product manager: Ensures evidence-based practice. | None provided. |
| **Q10. How does your school handle referrals when screenings identify concerns? (Select all that apply)** | Notify families with referral recommendations / Provide rescreening as indicated by guidelines / Track referral completion / Connect families to community health resources / Follow up with families / Document in student health records / Other (specify) | Content expert: Validates complete screening-to-care pathway. UI/UX: Process-oriented options are clear. Data and evaluation: Captures referral quality. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Actions stored as discrete flags. Product manager: Ensures screenings lead to improved health outcomes. | None provided. |
| **Q11. Evidence (choose one)** | Screening protocol or procedure manual / Training records for screening staff / Screening data report with referral rates | Content expert: Provides tangible proof of systematic screening program. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."
- Q6 is "No."

### Required Combinations (Must All Be True)
- Q7 includes at least 2 types of screenings.
- Q8 is not empty (any training frequency selected).
- Q9 includes at least 1 evidence-based tool or protocol.
- Q10 includes at least 3 referral handling methods.
- Q11 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

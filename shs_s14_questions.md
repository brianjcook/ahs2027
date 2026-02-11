# SHS-S14: Collaboration with Families and Caregivers

**Criterion (Original):**
School nurses* or other qualified staff* collaborate with families and caregivers of students with health concerns in all the following ways:
- Provide referrals to community-based health providers* as needed
- Interact in a manner that is culturally responsive*
- Communicate in languages that reflect the diversity* of the community
- Collaborate continuously throughout the school year

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
| **Q1. Do school nurses or other qualified staff collaborate with families and caregivers of students with health concerns?** | Yes / No | Content expert: Confirms family engagement exists. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without family collaboration. | None provided. |
| **Q2. Do qualified staff provide referrals to community-based health providers as needed?** | Yes / No | Content expert: Validates connection to external health resources. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures referral component. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures families receive needed resources. | None provided. |
| **Q3. Do qualified staff interact with families in a manner that is culturally responsive?** | Yes / No | Content expert: Confirms culturally competent practice. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures cultural responsiveness requirement. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with equity and inclusion goals. | None provided. |
| **Q4. Do qualified staff communicate with families in languages that reflect the diversity of the community?** | Yes / No | Content expert: Validates language accessibility. UI/UX: Single decision point maintains flow. Data and evaluation: Measures linguistic accessibility. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures communication equity. | None provided. |
| **Q5. Do qualified staff collaborate with families continuously throughout the school year?** | Yes / No | Content expert: Confirms ongoing partnership, not episodic contact. UI/UX: Final gate question before details. Data and evaluation: Validates continuous collaboration. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures sustained family engagement. | None provided. |
| **Q6. What types of health concerns prompt collaboration with families? (Select all that apply)** | Chronic health conditions / Mental and behavioral health / Acute illnesses or injuries / Medication management / Immunization status / Health screenings with concerns / Attendance related to health / Developmental or learning concerns / Other (specify) | Content expert: Validates breadth of health collaboration. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables concern-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures collaboration scope without overwhelming detail. | None provided. |
| **Q7. How do qualified staff provide referrals to families? (Select all that apply)** | Written referral information / Verbal explanation of referral / Direct connection to provider / Follow-up to check if referral was completed / List of multiple provider options / Assistance with scheduling appointments / Help with insurance or eligibility / Translation of referral materials / Other (specify) | Content expert: Confirms referral support is comprehensive. UI/UX: Familiar referral methods make selection easy. Data and evaluation: Supports analysis of referral quality. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures referrals are actionable. | None provided. |
| **Q8. What culturally responsive practices does your school use when collaborating with families? (Select all that apply)** | Respect for diverse family structures / Awareness of cultural health beliefs / Flexible communication schedules / Use of cultural liaisons or navigators / Staff training on cultural competence / Adaptation of materials for cultural relevance / Incorporation of family preferences / Recognition of cultural celebrations or practices / Other (specify) | Content expert: Validates depth of cultural responsiveness. UI/UX: Clear practice categories facilitate selection. Data and evaluation: Enables analysis of cultural competence. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Practices stored as enumerated values. Product manager: Balances comprehensiveness with practical implementation. | None provided. |
| **Q9. What languages are used to communicate with families? (Select all that apply)** | English / Spanish / Mandarin / Cantonese / Vietnamese / Arabic / Somali / Hmong / French / Haitian Creole / Portuguese / Other (specify) | Content expert: Confirms linguistic diversity is addressed. UI/UX: Common languages plus Other field is efficient. Data and evaluation: Measures language accessibility. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Languages stored as discrete categories. Product manager: Captures language support without exhaustive list. | None provided. |
| **Q10. How does your school ensure language accessibility for families? (Select all that apply)** | Professional interpreters / Bilingual staff / Translation services for written materials / Video or phone interpretation / Translated forms and documents / Multilingual communication platforms / Family preference for language documented / Other (specify) | Content expert: Validates translation and interpretation infrastructure. UI/UX: Practical methods are intuitive. Data and evaluation: Captures language support quality. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Methods stored as discrete flags. Product manager: Ensures effective multilingual communication. | None provided. |
| **Q11. How do qualified staff collaborate with families throughout the school year? (Select all that apply)** | Regular check-in meetings / Phone calls or emails / Participation in IEP or 504 meetings / Progress updates on health goals / Communication about health concerns as they arise / Inclusion in care planning / Follow-up after health events / Survey or feedback opportunities / Other (specify) | Content expert: Confirms continuous and varied collaboration. UI/UX: Collaboration methods are clear and familiar. Data and evaluation: Measures engagement quality. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Methods stored as enumerated values. Product manager: Ensures meaningful family partnership. | None provided. |
| **Q12. How does your school train staff on collaborating with families? (Select all that apply)** | Cultural competence training / Language access training / Family engagement best practices / Health communication skills / Training on referral resources / Trauma-informed approaches / Strategies for working with diverse families / Other (specify) | Content expert: Validates staff preparation for family collaboration. UI/UX: Training topics are intuitive. Data and evaluation: Captures staff development component. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Training types stored as discrete flags. Product manager: Ensures staff have skills for effective collaboration. | None provided. |
| **Q13. Evidence (choose one)** | Sample communication log showing ongoing family collaboration / Family engagement plan or protocol / Training materials on culturally responsive family collaboration and language access | Content expert: Provides tangible proof of family collaboration practices. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q6 includes at least 3 types of health concerns.
- Q7 includes at least 3 referral methods.
- Q8 includes at least 3 culturally responsive practices.
- Q9 includes at least 1 language (any language selected).
- Q10 includes at least 2 language accessibility methods.
- Q11 includes at least 3 collaboration methods.
- Q12 includes at least 2 training topics.
- Q13 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

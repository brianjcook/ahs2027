# SHS-S16: Referral Pathway for Students with Health Concerns

**Criterion (Original):**
School nurses* or other qualified staff* oversee a referral pathway* that includes all the following:
- A process for contacting families and caregivers to obtain consent
- Trainings for all staff on the referral pathway*
- Partnerships with community-based healthcare providers*
- Regular review of outcomes to assess/improve effectiveness of the pathway

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
| **Q1. Does your school have a referral pathway for students with health concerns?** | Yes / No | Content expert: Confirms systematic referral process exists. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without referral pathways. | None provided. |
| **Q2. Is the referral pathway overseen by school nurses or other qualified staff?** | Yes / No | Content expert: Validates professional oversight of referral process. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures qualified leadership component. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures clinical competence in referral management. | None provided. |
| **Q3. Does the referral pathway include a process for contacting families and caregivers to obtain consent?** | Yes / No | Content expert: Confirms family involvement and legal/ethical practice. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures consent requirement. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with privacy and family engagement requirements. | None provided. |
| **Q4. Are all staff trained on the referral pathway?** | Yes / No | Content expert: Validates school-wide awareness and capacity. UI/UX: Single decision point maintains flow. Data and evaluation: Measures training comprehensiveness. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures any staff member can initiate referrals. | None provided. |
| **Q5. Does the referral pathway include partnerships with community-based healthcare providers?** | Yes / No | Content expert: Confirms connection to care continuum. UI/UX: Clear question about partnership component. Data and evaluation: Validates external collaboration. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures referrals connect to actual services. | None provided. |
| **Q6. Does your school regularly review outcomes to assess and improve the effectiveness of the referral pathway?** | Yes / No | Content expert: Confirms continuous quality improvement. UI/UX: Final gate question before details. Data and evaluation: Captures evaluation requirement. Senior front-end engineer: Boolean input. Senior back-end engineer: Stored as evaluation flag. Product manager: Ensures pathway is monitored and refined. | None provided. |
| **Q7. What types of health concerns trigger use of the referral pathway? (Select all that apply)** | Physical health concerns / Mental and behavioral health concerns / Dental health concerns / Vision concerns / Hearing concerns / Chronic disease management / Substance use concerns / Nutrition concerns / Developmental concerns / Social determinants of health / Other (specify) | Content expert: Validates comprehensiveness of referral scope. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables concern-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures pathway breadth without overwhelming detail. | None provided. |
| **Q8. What steps are included in your consent process? (Select all that apply)** | Explain reason for referral to family / Obtain written consent / Document consent in student record / Provide information about the referred service / Allow family to ask questions / Offer consent forms in family's preferred language / Respect family decision if consent is declined / Follow up if consent is not returned / Other (specify) | Content expert: Confirms consent process is comprehensive and respectful. UI/UX: Familiar consent steps make selection easy. Data and evaluation: Supports analysis of consent quality. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Steps map to discrete values. Product manager: Ensures ethical and legally compliant process. | None provided. |
| **Q9. How are staff trained on the referral pathway? (Select all that apply)** | Orientation for new staff / Annual training for all staff / Written procedures or manual / Demonstration or role-play / Online training modules / Train-the-trainer approach / Just-in-time guidance / Ongoing coaching or support / Other (specify) | Content expert: Validates training accessibility and reinforcement. UI/UX: Clear training formats facilitate selection. Data and evaluation: Enables analysis of training approaches. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Methods stored as enumerated values. Product manager: Balances training thoroughness with staff time. | None provided. |
| **Q10. What types of community-based healthcare providers are part of your referral pathway partnerships? (Select all that apply)** | Primary care physicians / Mental health providers / Specialists (e.g., cardiologists, endocrinologists) / Federally Qualified Health Centers (FQHCs) / School-based health centers / Dental providers / Public health department / Hospitals / Community health organizations / Insurance navigators / Social service agencies / Other (specify) | Content expert: Confirms breadth of referral network. UI/UX: Comprehensive provider types are intuitive. Data and evaluation: Measures partnership diversity. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Provider types stored as discrete categories. Product manager: Captures network without requiring exhaustive list. | None provided. |
| **Q11. How does your school track referrals through the pathway? (Select all that apply)** | Referral log or database / Electronic health record / Case management system / Follow-up with families / Communication with healthcare providers / Outcome tracking / Closed-loop referral system / Regular reports to staff / Other (specify) | Content expert: Validates referral accountability and completion. UI/UX: Tracking methods are practical and clear. Data and evaluation: Captures data infrastructure quality. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Methods stored as discrete flags. Product manager: Ensures referrals are monitored to completion. | None provided. |
| **Q12. How often does your school review the effectiveness of the referral pathway?** | Monthly / Quarterly / Twice per year / Annually / As needed when issues arise / Continuously as part of quality improvement | Content expert: Frequency indicates commitment to improvement. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with practical review capacity. | None provided. |
| **Q13. What data does your school review to assess referral pathway effectiveness? (Select all that apply)** | Number of referrals made / Referral completion rates / Time from referral to connection / Student outcomes after referral / Family satisfaction / Barriers to completing referrals / Provider feedback / Staff feedback / Equity of referrals across student groups / Other (specify) | Content expert: Confirms data-driven quality improvement. UI/UX: Data types are clear and measurable. Data and evaluation: Validates comprehensive evaluation approach. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Data types stored as enumerated values. Product manager: Ensures evaluation is meaningful and actionable. | None provided. |
| **Q14. What improvements has your school made to the referral pathway based on outcome reviews? (Select all that apply)** | Streamlined consent process / Expanded provider partnerships / Improved staff training / Enhanced tracking system / Increased follow-up with families / Addressed equity gaps / Simplified referral forms / Improved communication with providers / Added language access supports / Have not yet made improvements / Other (specify) | Content expert: Validates continuous improvement is operationalized. UI/UX: Improvement examples help schools reflect on changes. Data and evaluation: Measures quality improvement actions. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Improvements stored as discrete flags. Product manager: Ensures evaluation leads to action. | None provided. |
| **Q15. Evidence (choose one)** | Referral pathway protocol or procedure manual / Training materials on the referral pathway / Referral tracking report with outcomes data | Content expert: Provides tangible proof of systematic referral pathway. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

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
- Q7 includes at least 3 types of health concerns.
- Q8 includes at least 4 consent process steps.
- Q9 includes at least 2 training methods.
- Q10 includes at least 3 types of healthcare providers.
- Q11 includes at least 3 tracking methods.
- Q12 is not empty (any review frequency selected).
- Q13 includes at least 3 types of data reviewed.
- Q14 includes at least 1 improvement made (or "Have not yet made improvements" is acceptable if pathway is new).
- Q15 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

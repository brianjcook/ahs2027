# SHS-S13: Addressing Medical Emergencies

**Criterion (Original):**
School nurses* or other qualified staff* participate in creating and executing a plan to address medical emergencies* that includes all the following:
- Procedures for assessing, managing, and referring students and staff members to the appropriate level of care
- Training for all staff (including non-instructional staff*) on emergency procedures
- Requiring the stocking, administration, and tracking of emergency medications

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
| **Q1. Does your school have a plan to address medical emergencies?** | Yes / No | Content expert: Confirms emergency preparedness foundation. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without emergency plans. | None provided. |
| **Q2. Do school nurses or other qualified staff participate in creating the medical emergency plan?** | Yes / No | Content expert: Validates professional expertise in plan development. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures qualified involvement. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures clinical competence in planning. | None provided. |
| **Q3. Do school nurses or other qualified staff participate in executing the medical emergency plan?** | Yes / No | Content expert: Confirms professional involvement in implementation. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures execution component. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures qualified oversight during emergencies. | None provided. |
| **Q4. Does the plan include procedures for assessing, managing, and referring students and staff to the appropriate level of care?** | Yes / No | Content expert: Validates comprehensive response protocols. UI/UX: Single decision point maintains flow. Data and evaluation: Measures plan completeness. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures emergency response pathway is defined. | None provided. |
| **Q5. Are all staff (including non-instructional staff) trained on emergency procedures?** | Yes / No | Content expert: Confirms school-wide preparedness. UI/UX: Clear scope (all staff) reduces ambiguity. Data and evaluation: Captures comprehensive training requirement. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures any staff member can respond initially. | None provided. |
| **Q6. Does your school require the stocking of emergency medications?** | Yes / No | Content expert: Validates medication availability for emergencies. UI/UX: Direct question maintains flow. Data and evaluation: Captures supply readiness. Senior front-end engineer: Boolean input. Senior back-end engineer: Stored as requirement flag. Product manager: Ensures medications are accessible. | None provided. |
| **Q7. Does your school have protocols for the administration of emergency medications?** | Yes / No | Content expert: Confirms safe medication delivery procedures. UI/UX: Parallel structure to Q6 aids completion. Data and evaluation: Validates administration component. Senior front-end engineer: Boolean input. Senior back-end engineer: Protocol flag for scoring. Product manager: Ensures medications can be administered safely. | None provided. |
| **Q8. Does your school track the administration of emergency medications?** | Yes / No | Content expert: Validates accountability and quality improvement. UI/UX: Final gate question before details. Data and evaluation: Captures documentation requirement. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures medication use is monitored. | None provided. |
| **Q9. What types of medical emergencies does your plan address? (Select all that apply)** | Severe allergic reactions (anaphylaxis) / Asthma attacks / Seizures / Diabetic emergencies / Cardiac events / Choking / Severe bleeding or trauma / Head injuries / Overdose or poisoning / Mental health crises / Other (specify) | Content expert: Validates plan comprehensiveness. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables emergency-type analysis. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures emergency diversity without overwhelming detail. | None provided. |
| **Q10. What emergency medications does your school stock? (Select all that apply)** | Epinephrine auto-injectors / Albuterol inhalers / Glucagon / Naloxone (Narcan) / Aspirin / AED (Automated External Defibrillator) / Insulin / Anti-seizure medication / Other (specify) | Content expert: Confirms medication preparedness. UI/UX: Familiar medications make selection easy. Data and evaluation: Supports analysis of medication readiness. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Medications map to discrete values. Product manager: Ensures critical medications are available. | None provided. |
| **Q11. How often are staff trained on emergency procedures?** | Upon hire / Annually / Every two years / Before each school year / As needed when protocols change / Ongoing throughout the year | Content expert: Frequency indicates preparedness quality. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable training burden. | None provided. |
| **Q12. What training methods are used for emergency procedures? (Select all that apply)** | In-person demonstrations / Video training modules / Hands-on practice / Simulation drills / Online courses / CPR and first aid certification / Train-the-trainer model / Other (specify) | Content expert: Validates training quality and engagement. UI/UX: Clear training formats are easy to identify. Data and evaluation: Enables analysis of training approaches. Senior front-end engineer: Standard multi-select. Senior back-end engineer: Methods stored as enumerated values. Product manager: Ensures training is effective and accessible. | None provided. |
| **Q13. How does your school ensure emergency medications remain available and up-to-date? (Select all that apply)** | Regular inventory checks / Expiration date monitoring / Automated reordering system / Designated staff responsible for supplies / Multiple locations for medication storage / Backup supply maintained / Restocking protocol after use / Other (specify) | Content expert: Confirms medication management systems. UI/UX: Practical strategies are intuitive. Data and evaluation: Captures supply chain quality. Senior front-end engineer: Multi-select with Other option. Senior back-end engineer: Strategies stored as discrete categories. Product manager: Ensures medications are ready when needed. | None provided. |
| **Q14. How are emergency medication administrations documented? (Select all that apply)** | Written log / Electronic health record / Incident report form / Notification to families / Notification to healthcare providers / Quality improvement review / Other (specify) | Content expert: Validates comprehensive documentation and follow-up. UI/UX: Documentation methods are familiar and clear. Data and evaluation: Measures tracking quality. Senior front-end engineer: Multi-select with Other. Senior back-end engineer: Documentation types stored as discrete flags. Product manager: Ensures accountability and continuous improvement. | None provided. |
| **Q15. Evidence (choose one)** | Medical emergency plan document / Training records for staff on emergency procedures / Emergency medication inventory log and administration tracking record | Content expert: Provides tangible proof of emergency preparedness. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."
- Q6 is "No."
- Q7 is "No."
- Q8 is "No."

### Required Combinations (Must All Be True)
- Q9 includes at least 3 types of medical emergencies.
- Q10 includes at least 2 emergency medications.
- Q11 is not empty (any training frequency selected).
- Q12 includes at least 2 training methods.
- Q13 includes at least 3 medication management strategies.
- Q14 includes at least 2 documentation methods.
- Q15 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

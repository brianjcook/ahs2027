# SEH-S9: Gathering Input from Families and Caregivers on Social-Emotional Health

**Criterion (Original):**
Our school does all the following:
- Gathers input from all families and caregivers at least once per year
- Uses at least three inclusive and culturally responsive methods to gather input, including mechanisms to provide anonymous input
- Communicates results of input in languages that reflect the diversity of all families and caregivers at least once per year
- Analyzes demographics of input to ensure responses are representative of all families and caregivers

Note: This criterion focuses on gathering input on policies and practices regarding social-emotional health.

## Personas
- Content expert (Social-Emotional Health): Former school counselor and SEL coordinator; deep practice knowledge of mental health supports and social-emotional learning.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school gather input from families and caregivers on policies and practices regarding social-emotional health?** | Yes / No | Content expert: Confirms the school actively seeks family voice on SEH matters. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without family input processes. | None provided. |
| **Q2. Does your school gather input from all families and caregivers at least once per year?** | Yes / No | Content expert: Ensures input gathering is systematic and inclusive, not limited to select groups. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures frequency and universality. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Aligns with equity principles and annual planning cycles. | None provided. |
| **Q3. How many different methods does your school use to gather input from families and caregivers?** | 1 method / 2 methods / 3 or more methods | Content expert: Multiple methods ensure accessibility for diverse communication preferences. UI/UX: Clear quantity options avoid confusion. Data and evaluation: Supports threshold validation (at least 3 required). Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as integer for comparison logic. Product manager: Balances rigor with realistic implementation. | None provided. |
| **Q4. Which methods does your school use to gather input from families and caregivers on social-emotional health?** | Surveys (paper or digital) / Focus groups or listening sessions / One-on-one conversations or interviews / Community forums or town halls / Anonymous suggestion boxes or forms / Advisory committees with family representation / Text message or phone-based feedback / Home visits / Other (specify) | Content expert: Validates variety of engagement approaches that respect different comfort levels. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables method-type analysis and verification of minimum 3. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Methods map to stable reference data. Product manager: Captures method diversity without overwhelming detail. | None provided. |
| **Q5. Are the methods used to gather input inclusive and culturally responsive?** | Yes / No | Content expert: Confirms methods are designed to reach families from all backgrounds and cultures. UI/UX: Single decision point maintains flow. Data and evaluation: Captures intentionality of approach. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures equity is considered in engagement design. | None provided. |
| **Q6. Do the methods include mechanisms for families and caregivers to provide anonymous input?** | Yes / No | Content expert: Anonymous options encourage honest feedback, especially on sensitive SEH topics. UI/UX: Direct question with clear intent. Data and evaluation: Validates safety component of input process. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures families feel safe sharing concerns. | None provided. |
| **Q7. Does your school communicate results of input back to families and caregivers at least once per year?** | Yes / No | Content expert: Closing the loop demonstrates transparency and respect for family voice. UI/UX: Simple yes/no keeps cognitive load low. Data and evaluation: Captures bidirectional communication. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Aligns with best practice for meaningful engagement. | None provided. |
| **Q8. Are results communicated in languages that reflect the diversity of all families and caregivers?** | Yes / No | Content expert: Language accessibility is essential for equitable communication with multilingual communities. UI/UX: Final gate question for communication practices. Data and evaluation: Validates linguistic equity. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures translation is not an afterthought. | None provided. |
| **Q9. What languages are used to communicate results to families and caregivers?** | English / Spanish / Mandarin / Cantonese / Vietnamese / Arabic / Haitian Creole / Portuguese / French / Korean / Russian / Tagalog / Other (specify) | Content expert: Identifies specific languages served, demonstrating commitment to linguistic diversity. UI/UX: Multi-select list reflects common school languages. Data and evaluation: Supports language access analysis. Senior front-end engineer: Standard checkbox group with Other. Senior back-end engineer: Languages map to reference data. Product manager: Captures language diversity without excessive burden. | None provided. |
| **Q10. Does your school analyze the demographics of input to ensure responses are representative of all families and caregivers?** | Yes / No | Content expert: Demographic analysis identifies gaps in whose voices are being heard. UI/UX: Clear question about evaluation practice. Data and evaluation: Validates continuous improvement mindset. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures equity is monitored, not assumed. | None provided. |
| **Q11. Which demographic factors does your school analyze when reviewing input from families and caregivers?** | Race/ethnicity / Primary language spoken at home / Grade level of students / Socioeconomic status / Students with disabilities / Students receiving special education services / English Learner status / LGBTQ+ families / Foster care status / Other (specify) | Content expert: Multiple demographic lenses reveal equity gaps in family engagement. UI/UX: Familiar categories make selection straightforward. Data and evaluation: Supports analysis of representativeness practices. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Categories map to discrete values. Product manager: Ensures analysis is comprehensive and equity-focused. | None provided. |
| **Q12. Evidence (choose one)** | Family input survey or instrument with response data / Meeting notes or documentation from family engagement sessions / Communication to families showing results (e.g., newsletter, letter, website post) / Demographic analysis report or summary | Content expert: Provides tangible proof of systematic family input process. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "1 method" or "2 methods" (must be "3 or more methods").
- Q5 is "No."
- Q6 is "No."
- Q7 is "No."
- Q8 is "No."
- Q10 is "No."

### Required Combinations (Must All Be True)
- Q4 includes at least 3 input methods.
- Q4 includes at least one method that allows anonymous input (e.g., "Anonymous suggestion boxes or forms" or "Surveys (paper or digital)").
- Q9 includes at least 1 language.
- Q11 includes at least 3 demographic factors.
- Q12 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

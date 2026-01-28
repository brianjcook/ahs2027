# LWP-S4: Standards for Foods and Beverages Sold

**Criterion (Original):**
Our school ensures all the following:
- All foods and beverages sold to students during the school day meet or exceed the USDA's federal regulations for school meal programs*
- All foods and beverages sold to students during the school day meet or exceed the Smart Snacks in School nutrition standards*, including all school meals, a la carte vending, school stores, snack or food carts, and any food-based fundraising*
- We follow fundraising exemptions and guidance set by our state agency, which must also adhere to the Smart Snacks in School nutrition standards*

## Personas
- Local Wellness Policy content expert: Former district administrator and school wellness coordinator; leads wellness policy implementation and stakeholder engagement.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school ensure all foods and beverages sold to students during the school day meet or exceed USDA school meal program regulations?** | Yes / No | Local Wellness Policy expert: Confirms baseline compliance for sales. UI/UX: Simple yes/no reduces burden. Data and evaluation: Establishes a clear eligibility anchor. Senior front-end engineer: Supports branching without complexity. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Keeps the flow efficient. | None provided. |
| **Q2. Does your school ensure all foods and beverages sold to students during the school day meet or exceed Smart Snacks in School standards across all sales venues?** | Yes / No | Local Wellness Policy expert: Verifies comprehensive Smart Snacks compliance. UI/UX: Direct yes/no for quick response. Data and evaluation: Enables consistent scoring across schools. Senior front-end engineer: Simple boolean input. Senior back-end engineer: Boolean flag for eligibility. Product manager: Makes the requirement explicit. | None provided. |
| **Q3. Does your school follow state fundraising exemptions and guidance that adhere to Smart Snacks standards?** | Yes / No | Local Wellness Policy expert: Confirms alignment with state guidance. UI/UX: Single decision reduces complexity. Data and evaluation: Captures compliance with exemptions. Senior front-end engineer: Straightforward boolean input. Senior back-end engineer: Boolean for scoring. Product manager: Ensures the fundraising condition is met. | None provided. |
| **Q4. Which sales venues are covered by your Smart Snacks compliance process?** | School meals / A la carte / Vending machines / School store / Snack or food carts / Food-based fundraising / Other (specify) | Local Wellness Policy expert: Confirms coverage across all required venues. UI/UX: Checklist keeps data structured. Data and evaluation: Enables venue-level analysis. Senior front-end engineer: Standard multi-select component. Senior back-end engineer: Controlled values for reporting. Product manager: Makes scope visible to reviewers. | None provided. |
| **Q5. Evidence (choose one)** | Nutrition standards policy / Vendor or vending contract language / Compliance checklist or audit summary | Local Wellness Policy expert: Provides proof with minimal burden. UI/UX: Single evidence requirement. Data and evaluation: Supports spot checks and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores a single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."

### Required Combinations (Must All Be True)
- Q4 includes at least 3 venues.
- Q5 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

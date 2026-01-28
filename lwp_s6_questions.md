# LWP-S6: Limit Marketing and Advertising of Foods and Beverages

**Criterion (Original):**
Our school limits all marketing and advertising of foods and beverages on the school campus* during the school day (e.g., on book covers, coupons for foods or beverages, advertising on vending machines, and digital media) to only food and beverages that meet or exceed the Smart Snacks in School nutrition standards*.

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
| **Q1. Does your school limit all marketing and advertising of foods and beverages on campus during the school day to items that meet Smart Snacks standards?** | Yes / No | Local Wellness Policy expert: Confirms the core restriction requirement. UI/UX: Simple gate reduces burden. Data and evaluation: Establishes a clear eligibility anchor. Senior front-end engineer: Supports branching without complexity. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Keeps the flow efficient for non-qualifying schools. | None provided. |
| **Q2. Which marketing or advertising locations and media are covered by this restriction?** | Vending machines / School store / Posters or signage / Digital media or websites / Book covers / Coupons or flyers / Sponsorships or branded materials / Other (specify) | Local Wellness Policy expert: Confirms coverage across common marketing channels. UI/UX: Checklist keeps answers structured. Data and evaluation: Enables channel-level analysis. Senior front-end engineer: Standard multi-select component. Senior back-end engineer: Controlled values for reporting. Product manager: Makes scope visible to reviewers. | None provided. |
| **Q3. How does your school enforce or monitor this restriction?** | Written policy or guidance / Vendor or sponsorship contract language / Pre-approval process for marketing materials / Periodic compliance review / Other (specify) | Local Wellness Policy expert: Verifies operational enforcement. UI/UX: Multi-select keeps responses concise. Data and evaluation: Captures enforcement methods. Senior front-end engineer: Checkbox group is easy to implement. Senior back-end engineer: Stores as discrete values. Product manager: Ensures the requirement is actionable. | None provided. |
| **Q4. Evidence (choose one)** | Policy or guidance document / Contract language or vendor clause / Photos or screenshots of compliant marketing | Local Wellness Policy expert: Provides proof with minimal burden. UI/UX: Single evidence requirement. Data and evaluation: Supports spot checks and QA. Senior front-end engineer: One-of-three input is straightforward. Senior back-end engineer: Stores a single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."

### Required Combinations (Must All Be True)
- Q2 includes at least 3 locations or media.
- Q3 includes at least 1 enforcement method.
- Q4 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

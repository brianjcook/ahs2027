# SWB-S11: Spaces for Staff to Take Breaks

**Criterion (Original):**
Our school has space(s) that do all the following:
- Provide easily accessible space(s) for all staff (including non-instructional staff) to take breaks
- Encourage relaxation
- Foster positive staff interactions
- Allow for acute stress-management

Note: These functions may occur in one space or be distributed throughout multiple spaces.

## Personas
- Content expert (Staff Well-Being): Former school principal and staff wellness coordinator; deep practice knowledge of educator well-being and organizational culture.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Does your school have dedicated space(s) for staff to take breaks?** | Yes / No | Content expert: Confirms physical infrastructure for staff well-being exists. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without dedicated spaces. | None provided. |
| **Q2. Are the staff break space(s) easily accessible to all staff (including non-instructional staff)?** | Yes / No | Content expert: Ensures equity and accessibility across all staff roles. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures accessibility component. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures all staff can benefit from break spaces. | None provided. |
| **Q3. Do the staff break space(s) encourage relaxation?** | Yes / No | Content expert: Validates design supports restorative breaks. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Captures relaxation function. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures spaces serve well-being purpose. | None provided. |
| **Q4. Do the staff break space(s) foster positive staff interactions?** | Yes / No | Content expert: Confirms spaces support relationship building and community. UI/UX: Single decision point maintains flow. Data and evaluation: Validates social function of spaces. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures spaces support staff connection. | None provided. |
| **Q5. Do the staff break space(s) allow for acute stress management?** | Yes / No | Content expert: Validates spaces support immediate well-being needs. UI/UX: Clear question reduces interpretation burden. Data and evaluation: Captures stress-management function. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures spaces provide refuge during difficult moments. | None provided. |
| **Q6. How many staff break spaces does your school have?** | One multi-purpose space / Two spaces / Three or more spaces / Multiple small spaces throughout the building | Content expert: Understands distribution and accessibility of break options. UI/UX: Single select with clear space count options. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Captures whether functions are centralized or distributed. | None provided. |
| **Q7. Where are staff break spaces located?** | Staff lounge or teacher's lounge / Wellness room / Quiet room / Outdoor space (patio, garden) / Conference room available for breaks / Multiple locations throughout the building / Other (specify) | Content expert: Validates location diversity and accessibility. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables location analysis across schools. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures location diversity without overwhelming detail. | None provided. |
| **Q8. What features or amenities do staff break spaces include to encourage relaxation?** | Comfortable seating / Natural light or windows / Plants or natural elements / Calming colors or decor / Quiet or noise-reduced environment / Temperature control / Reading materials / Soft lighting / Other (specify) | Content expert: Confirms intentional design for relaxation and restoration. UI/UX: Familiar amenity types make selection easy. Data and evaluation: Supports analysis of relaxation features. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures spaces are intentionally designed for well-being. | None provided. |
| **Q9. What features or amenities support positive staff interactions in break spaces?** | Tables for group seating / Coffee or beverage station / Shared kitchen or refrigerator / Games or conversation starters / Comfortable group seating areas / Community bulletin board / Space for potlucks or shared meals / Other (specify) | Content expert: Validates social infrastructure that fosters connection. UI/UX: Clear social amenity options reduce cognitive load. Data and evaluation: Enables social feature analysis across schools. Senior front-end engineer: Standard checkbox group with Other field. Senior back-end engineer: Categories support amenity-based reporting. Product manager: Ensures spaces facilitate community building. | None provided. |
| **Q10. What features or amenities support acute stress management in break spaces?** | Private or semi-private areas / Soundproofing or quiet zones / Comfortable seating for individual use / Calming visuals or artwork / Access to mindfulness resources or apps / Stress management tools (fidgets, breathing guides) / Option for dim lighting / Other (specify) | Content expert: Confirms spaces address immediate stress and overwhelm. UI/UX: Standard stress-management options are familiar. Data and evaluation: Supports analysis of stress-management features. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures spaces provide immediate relief when needed. | None provided. |
| **Q11. Who has access to staff break spaces?** | All teachers / All administrators / All instructional support staff / All non-instructional staff (cafeteria, custodial, office, etc.) / All staff regardless of role | Content expert: Validates truly inclusive access across all staff. UI/UX: Comprehensive role list ensures all groups are considered. Data and evaluation: Enables equity analysis of space access. Senior front-end engineer: Standard checkbox group or single select for "all staff". Senior back-end engineer: Categories support role-based reporting. Product manager: Ensures spaces are equitable and welcoming to all. | None provided. |
| **Q12. How are staff informed about break spaces and their purpose?** | Included in staff handbook / Mentioned during new staff orientation / Signage in or near spaces / Announced at staff meetings / Included in building map or directory / Shared via email or staff communication / Other (specify) | Content expert: Confirms staff awareness ensures utilization of spaces. UI/UX: Familiar communication methods make selection easy. Data and evaluation: Supports analysis of awareness practices. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures spaces are visible and their purpose is clear. | None provided. |
| **Q13. Evidence (choose one)** | Photos or floor plan showing staff break space(s) / Staff handbook or communication describing break spaces and their purpose / Space reservation system or usage log showing staff access / Staff survey data about break space usage and satisfaction | Content expert: Provides tangible proof of functional break spaces. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "No."
- Q3 is "No."
- Q4 is "No."
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q6 is not empty (any space configuration selected).
- Q7 includes at least 1 location.
- Q8 includes at least 3 relaxation features.
- Q9 includes at least 2 social interaction features.
- Q10 includes at least 2 stress-management features.
- Q11 confirms all staff have access (or selects all role categories).
- Q12 includes at least 2 communication methods.
- Q13 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

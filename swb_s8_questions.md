# SWB-S8: Promoting Opportunities for Staff to Establish Positive Relationships

**Criterion (Original):**
Our school promotes positive relationship building in all the following ways:
- Beginning meetings with a relationship-building activity (e.g., icebreaker, connection question)
- Hosting all-staff events (e.g., potlucks, coffee talks) at least quarterly
- Reviewing data to determine staff perceptions of relationships with colleagues at least once per year

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
| **Q1. Does your school intentionally promote opportunities for staff to establish positive relationships with each other?** | Yes / No | Content expert: Confirms intentional relationship-building practices exist. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Establishes clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without formal practices. | None provided. |
| **Q2. Do staff meetings begin with a relationship-building activity?** | Yes / No | Content expert: Validates routine integration of relationship building into regular meetings. UI/UX: Direct question keeps decision fast. Data and evaluation: Captures consistency of practice. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Supports deterministic scoring. Product manager: Ensures relationship building is normalized, not special events only. | None provided. |
| **Q3. Does your school host all-staff events to promote positive relationships?** | Yes / No | Content expert: Confirms dedicated opportunities for staff connection beyond meetings. UI/UX: Keeps cognitive load low with simple choice. Data and evaluation: Validates event-based relationship building. Senior front-end engineer: Straightforward validation. Senior back-end engineer: Boolean flag for eligibility. Product manager: Ensures multiple pathways for relationship building. | None provided. |
| **Q4. Are all-staff events hosted at least quarterly?** | Yes / No | Content expert: Validates frequency ensures sustained relationship development. UI/UX: Single decision point maintains flow. Data and evaluation: Establishes minimum frequency threshold. Senior front-end engineer: Clean boolean input. Senior back-end engineer: Simple scoring logic. Product manager: Ensures events are regular, not one-time occurrences. | None provided. |
| **Q5. Does your school review data on staff perceptions of relationships with colleagues?** | Yes / No | Content expert: Confirms data-driven approach to relationship quality. UI/UX: Clear question reduces interpretation burden. Data and evaluation: Validates measurement component. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures relationship building is monitored and improved. | None provided. |
| **Q6. Is data on staff perceptions of relationships reviewed at least once per year?** | Yes / No | Content expert: Ensures regular assessment of relationship quality. UI/UX: Final gate question before details. Data and evaluation: Establishes minimum review frequency. Senior front-end engineer: Standard boolean. Senior back-end engineer: Boolean for scoring threshold. Product manager: Ensures ongoing attention to relationship health. | None provided. |
| **Q7. How often are all-staff events hosted?** | Quarterly / Monthly / Bi-monthly / Every six weeks / More frequently than quarterly | Content expert: Frequency indicates commitment to staff connection. UI/UX: Single select with clear intervals. Data and evaluation: Supports comparability across schools. Senior front-end engineer: Radio button input. Senior back-end engineer: Stored as enum for reporting. Product manager: Balances rigor with reasonable expectations. | None provided. |
| **Q8. What types of relationship-building activities are used to begin meetings?** | Icebreaker questions / Connection questions or prompts / Brief team-building exercises / Gratitude sharing / Check-in questions / Mindfulness or breathing exercises / Celebrations or shout-outs / Other (specify) | Content expert: Validates variety and intentionality of relationship-building strategies. UI/UX: Multi-select list with Other field keeps detail structured. Data and evaluation: Enables activity type analysis across schools. Senior front-end engineer: Standard checkbox group. Senior back-end engineer: Categories map to stable reference data. Product manager: Captures activity diversity without overwhelming detail. | None provided. |
| **Q9. What types of all-staff events are hosted to promote positive relationships?** | Potlucks or shared meals / Coffee talks or morning meetups / Social gatherings after work / Team-building activities / Celebrations (birthdays, milestones) / Volunteer or service events / Wellness activities (walks, yoga) / Cultural celebrations / Other (specify) | Content expert: Confirms diverse opportunities for staff connection. UI/UX: Familiar event types make selection easy. Data and evaluation: Supports analysis of event diversity. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures events appeal to diverse staff preferences. | None provided. |
| **Q10. What data sources are used to determine staff perceptions of relationships with colleagues?** | Staff climate survey / Staff well-being survey / Focus groups / One-on-one interviews / Exit interviews / Pulse surveys / Observation or walkthrough data / Other (specify) | Content expert: Validates multiple data sources for comprehensive understanding. UI/UX: Standard data source options are familiar. Data and evaluation: Enables data source analysis across schools. Senior front-end engineer: Standard checkbox group with Other field. Senior back-end engineer: Categories support data-based reporting. Product manager: Ensures perception measurement is robust. | None provided. |
| **Q11. How are data on staff relationships used to improve practices?** | Shared with staff / Used to plan professional learning / Used to design relationship-building activities / Used to inform school improvement planning / Discussed in leadership team meetings / Used to set goals for staff culture / Other (specify) | Content expert: Confirms data leads to action and improvement. UI/UX: Clear use-case options reduce cognitive load. Data and evaluation: Validates data-to-action process. Senior front-end engineer: Multi-select with optional text. Senior back-end engineer: Methods map to discrete values. Product manager: Ensures data collection has purpose and impact. | None provided. |
| **Q12. Evidence (choose one)** | Meeting agenda showing relationship-building activity / Calendar or schedule of all-staff events with attendance records / Staff survey results showing relationship perception data / Action plan or improvement plan based on relationship data | Content expert: Provides tangible proof of comprehensive relationship-building practices. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-four input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

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
- Q7 is not empty (any frequency selected).
- Q8 includes at least 2 relationship-building activity types.
- Q9 includes at least 2 event types.
- Q10 includes at least 1 data source.
- Q11 includes at least 2 uses of relationship data.
- Q12 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

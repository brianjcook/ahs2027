# NFA-S16: Collaboration Between Nutrition Services Staff and Teachers

**Criterion (Original):**
Nutrition services staff and teachers collaborate to provide culturally responsive nutrition education opportunities for all students at least once per year.

Note: Examples of collaboration include student tours of the cafeteria, meet and greets with cafeteria staff, preparation and/or presentation of nutrition education lessons, cooking demonstrations, and tasting parties.

## Personas
- Content expert (Nutrition and Food Access): Former school nutrition director and wellness coordinator; deep practice knowledge of school meal programs and food access initiatives.
- UI/UX design expert: Specializes in low-friction forms, progressive disclosure, and accessible response patterns.
- Data and evaluation expert: Focuses on measurable outcomes, comparability, and reporting-ready data.
- Senior front-end engineer: Builds React SPA flows; prioritizes conditional logic and manageable input types.
- Senior back-end engineer: Designs normalized data models and rules-based validation.
- Product manager: Balances user burden, reviewer efficiency, and program goals.

## Questions

| Question | Response Options | Rationales | Citations |
| --- | --- | --- | --- |
| **Q1. Do nutrition services staff and teachers at your school collaborate to provide nutrition education opportunities for students?** | Yes / No | Content expert: Confirms cross-functional collaboration exists before assessing quality. UI/UX: Simple gate question avoids unnecessary follow-ups. Data and evaluation: Clear eligibility anchor. Senior front-end engineer: Enables branching logic. Senior back-end engineer: Boolean for rules-based scoring. Product manager: Reduces burden for schools without this collaboration. | None provided. |
| **Q2. How often do nutrition services staff and teachers collaborate to provide nutrition education opportunities?** | Multiple times per year / Once per year / Less than once per year | Content expert: Validates frequency requirement while capturing range of practice. UI/UX: Three-option scale with clear thresholds. Data and evaluation: Distinguishes schools meeting/exceeding standard from those below threshold. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum for frequency with threshold validation. Product manager: Directly maps to criterion requirement for straightforward scoring. | None provided. |
| **Q3. What types of collaborative nutrition education opportunities do nutrition services staff and teachers provide? (Select all that apply)** | Cafeteria tours / Meet and greets with cafeteria staff / Joint preparation of nutrition education lessons / Joint presentation of nutrition education lessons / Cooking demonstrations / Tasting parties / School garden activities / Menu planning activities / Other (specify) | Content expert: Captures diversity of collaboration models from simple to complex integration. UI/UX: Multi-select with examples from criterion note aids recall. Data and evaluation: Enables analysis of collaboration types. Senior front-end engineer: Standard checkbox group with optional text. Senior back-end engineer: Array of discrete collaboration types. Product manager: Ensures schools document range of practices without complexity. | None provided. |
| **Q4. Are all students able to participate in these collaborative nutrition education opportunities?** | Yes, all students / Most students / Some students / No | Content expert: Validates universal access to nutrition education, not just select groups. UI/UX: Four-option scale captures reach of opportunities. Data and evaluation: Distinguishes universal implementation from limited access. Senior front-end engineer: Radio button input. Senior back-end engineer: Enum for reach validation. Product manager: Ensures criterion focus on equity and universal access. | None provided. |
| **Q5. Are the collaborative nutrition education opportunities culturally responsive to the needs of your student population?** | Yes / No | Content expert: Validates that collaboration produces culturally relevant nutrition education. UI/UX: Direct question focuses on cultural adaptation. Data and evaluation: Captures quality dimension of collaboration. Senior front-end engineer: Standard boolean input. Senior back-end engineer: Boolean flag for cultural responsiveness. Product manager: Ensures equity focus in collaborative programming. | None provided. |
| **Q6. How are the collaborative nutrition education opportunities made culturally responsive? (Select all that apply)** | Incorporate culturally relevant foods / Use culturally relevant examples and stories / Taught in students' home languages when appropriate / Address cultural food traditions and practices / Co-planned with input from diverse students and families / Include diverse nutrition services staff and teachers / Other (specify) | Content expert: Identifies specific practices that make nutrition education culturally responsive. UI/UX: Multi-select with concrete examples aids recall. Data and evaluation: Supports analysis of cultural responsiveness practices. Senior front-end engineer: Checkbox group with optional text. Senior back-end engineer: Discrete values for practice analysis. Product manager: Balances rigor with practical implementation evidence. | None provided. |
| **Q7. How do nutrition services staff and teachers plan and coordinate these collaborative opportunities? (Select all that apply)** | Regular planning meetings / Shared lesson plans or curriculum / Coordinated schedules / Joint professional learning / Communication through liaison or coordinator / Other (specify) | Content expert: Identifies structural supports that enable sustained collaboration. UI/UX: Multi-select captures all coordination mechanisms. Data and evaluation: Enables analysis of collaboration infrastructure. Senior front-end engineer: Checkbox group with optional text. Senior back-end engineer: Array of coordination practices. Product manager: Ensures collaboration is systematic, not ad hoc. | None provided. |
| **Q8. Evidence (choose one)** | Joint lesson plans or activity descriptions / Photos of collaborative activities / Schedule or calendar of collaborative opportunities / Participation records showing all students included / Staff collaboration agreement or planning documents | Content expert: Provides tangible proof of nutrition services-teacher collaboration and universal reach. UI/UX: Single evidence requirement is efficient. Data and evaluation: Supports verification and QA. Senior front-end engineer: One-of-five input is straightforward. Senior back-end engineer: Stores single artifact per submission. Product manager: Balances verification with applicant effort. | None provided. |

## Scoring Framework (Eligibility Logic)
This framework is intended for rules-based eligibility decisions. If any hard-fail condition is met, the criterion is not awarded.

### Hard-Fail Conditions (Not Eligible)
- Q1 is "No."
- Q2 is "Less than once per year."
- Q4 is "Some students" or "No."
- Q5 is "No."

### Required Combinations (Must All Be True)
- Q3 includes at least 1 collaboration type.
- Q6 includes at least 1 cultural responsiveness practice.
- Q7 includes at least 1 coordination mechanism.
- Q8 has one evidence item provided.

### Eligibility Decision
- Eligible if all required combinations are true and no hard-fail conditions are met.
- Not eligible otherwise.

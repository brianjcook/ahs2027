const fs = require('fs');

// Read the questions file
const data = JSON.parse(fs.readFileSync('./data/questions.json', 'utf8'));

// Define rationales for PEA questions
const peaRationales = {
  "Q046": "Physical Education expert: Confirms foundational PE program exists. UI/UX: Simple gate reduces cognitive load. Data and evaluation: Establishes clear baseline for analysis. Senior front-end engineer: Enables conditional branching. Senior back-end engineer: Boolean storage for scoring logic. Product manager: Efficient screening for non-qualifying schools.",
  "Q047": "Physical Education expert: Verifies comprehensive grade-level coverage. UI/UX: Multi-select allows precise reporting. Data and evaluation: Supports grade-level gap analysis. Senior front-end engineer: Standard checkbox implementation. Senior back-end engineer: Array storage enables filtering. Product manager: Demonstrates program breadth to reviewers.",
  "Q048": "Physical Education expert: Identifies inappropriate waiver practices. UI/UX: Binary choice simplifies decision-making. Data and evaluation: Flags policy compliance issues. Senior front-end engineer: Straightforward boolean input. Senior back-end engineer: Triggers conditional logic for Q049. Product manager: Surfaces potential disqualifiers early.",
  "Q049": "Physical Education expert: Distinguishes acceptable from unacceptable waivers. UI/UX: Clear options prevent ambiguity. Data and evaluation: Captures waiver reason distribution. Senior front-end engineer: Multi-select with conditional display. Senior back-end engineer: Validates against approved categories. Product manager: Ensures policy alignment with federal standards.",
  "Q050": "Physical Education expert: Establishes curriculum foundation. UI/UX: Gate question minimizes unnecessary questions. Data and evaluation: Baseline for curriculum quality assessment. Senior front-end engineer: Simple boolean control flow. Senior back-end engineer: Boolean for scoring requirements. Product manager: Fast path for schools without defined curriculum.",
  "Q051": "Physical Education expert: Measures curriculum quality dimensions. UI/UX: Self-explanatory options with descriptions. Data and evaluation: Assesses alignment with best practices. Senior front-end engineer: Multi-select for multiple characteristics. Senior back-end engineer: Array comparison for requirements. Product manager: Makes quality standards transparent.",
  "Q052": "Physical Education expert: Verifies consistent implementation. UI/UX: Direct yes/no reduces friction. Data and evaluation: Identifies implementation gaps. Senior front-end engineer: Boolean input for consistency check. Senior back-end engineer: Required flag for eligibility. Product manager: Ensures curriculum isn't optional.",
  "Q053": "Physical Education expert: Reveals implementation support mechanisms. UI/UX: Concrete examples aid recognition. Data and evaluation: Identifies professional development patterns. Senior front-end engineer: Multi-select with negative option. Senior back-end engineer: Validates against hard fail condition. Product manager: Distinguishes documentation from practice.",
  "Q054": "Physical Education expert: Confirms non-PE activity opportunities. UI/UX: Clear gate question. Data and evaluation: Establishes activity program existence. Senior front-end engineer: Boolean for conditional display. Senior back-end engineer: Hard fail trigger. Product manager: Quick screen for ineligible schools.",
  "Q055": "Physical Education expert: Catalogs activity opportunity types. UI/UX: Familiar activity categories. Data and evaluation: Supports activity type analysis. Senior front-end engineer: Standard multi-select pattern. Senior back-end engineer: Array storage for reporting. Product manager: Shows program variety to reviewers.",
  "Q056": "Physical Education expert: Measures time against 30-minute standard. UI/UX: Ranges reduce estimation burden. Data and evaluation: Quantifies compliance levels. Senior front-end engineer: Single-select radio input. Senior back-end engineer: Range comparison for requirements. Product manager: Aligns with national recommendations.",
  "Q057": "Physical Education expert: Ensures equitable access. UI/UX: Simple yes/no for equity check. Data and evaluation: Flags access disparities. Senior front-end engineer: Boolean input. Senior back-end engineer: Required condition check. Product manager: Reinforces equity expectations.",
  "Q058": "Physical Education expert: Confirms policy existence. UI/UX: Gate reduces questions for schools without policy. Data and evaluation: Baseline for disciplinary practice assessment. Senior front-end engineer: Boolean for branching. Senior back-end engineer: Hard fail trigger. Product manager: Efficient screening mechanism.",
  "Q059": "Physical Education expert: Identifies specific prohibited practices. UI/UX: Explicit prohibitions prevent misinterpretation. Data and evaluation: Assesses policy comprehensiveness. Senior front-end engineer: Multi-select for multiple prohibitions. Senior back-end engineer: Validates minimum required selections. Product manager: Makes prohibitions explicit and verifiable.",
  "Q060": "Physical Education expert: Verifies policy dissemination. UI/UX: Common communication channels. Data and evaluation: Measures implementation support. Senior front-end engineer: Multi-select with negative option. Senior back-end engineer: Hard fail for no communication. Product manager: Ensures policy isn't just on paper.",
  "Q061": "Physical Education expert: Confirms enforcement mechanisms. UI/UX: Concrete compliance strategies. Data and evaluation: Identifies accountability gaps. Senior front-end engineer: Multi-select pattern. Senior back-end engineer: Hard fail validation. Product manager: Distinguishes policy from practice.",
  "Q062": "Physical Education expert: Establishes community access. UI/UX: Clear gate question. Data and evaluation: Baseline for facility access assessment. Senior front-end engineer: Boolean for conditional display. Senior back-end engineer: Hard fail trigger. Product manager: Efficient screening for ineligible schools.",
  "Q063": "Physical Education expert: Identifies accessible facility types. UI/UX: Recognizable facility categories. Data and evaluation: Catalogs community resources. Senior front-end engineer: Multi-select implementation. Senior back-end engineer: Array storage. Product manager: Demonstrates resource sharing.",
  "Q064": "Physical Education expert: Verifies community member access. UI/UX: Clear access level categories. Data and evaluation: Measures access equity. Senior front-end engineer: Multi-select for access types. Senior back-end engineer: Validates general community access. Product manager: Ensures broad community benefit.",
  "Q065": "Physical Education expert: Confirms access timing. UI/UX: Standard time period options. Data and evaluation: Assesses availability patterns. Senior front-end engineer: Multi-select for times. Senior back-end engineer: Array validation. Product manager: Shows accessibility scope.",
  "Q066": "Physical Education expert: Measures outreach effectiveness. UI/UX: Common communication methods. Data and evaluation: Identifies communication gaps. Senior front-end engineer: Multi-select with negative option. Senior back-end engineer: Hard fail validation. Product manager: Ensures information accessibility.",
  "Q067": "Physical Education expert: Establishes partnership foundation. UI/UX: Gate minimizes questions. Data and evaluation: Baseline for collaboration assessment. Senior front-end engineer: Boolean branching. Senior back-end engineer: Hard fail trigger. Product manager: Efficient screening mechanism.",
  "Q068": "Physical Education expert: Identifies partner types. UI/UX: Recognizable organization categories. Data and evaluation: Maps partnership landscape. Senior front-end engineer: Multi-select pattern. Senior back-end engineer: Array storage. Product manager: Demonstrates community connections.",
  "Q069": "Physical Education expert: Assesses collaboration quality. UI/UX: Self-explanatory elements. Data and evaluation: Measures partnership maturity. Senior front-end engineer: Multi-select for elements. Senior back-end engineer: Validates all four elements. Product manager: Distinguishes formal from informal partnerships.",
  "Q070": "Physical Education expert: Measures communication frequency. UI/UX: Standard frequency options. Data and evaluation: Quantifies engagement levels. Senior front-end engineer: Single-select radio. Senior back-end engineer: Enum storage. Product manager: Provides context for partnership strength.",
  "Q071": "Physical Education expert: Catalogs partnership outcomes. UI/UX: Concrete opportunity types. Data and evaluation: Measures partnership impact. Senior front-end engineer: Multi-select pattern. Senior back-end engineer: Array validation. Product manager: Shows tangible benefits.",
  "Q072": "Physical Education expert: Establishes active transportation program. UI/UX: Clear gate question. Data and evaluation: Baseline for transportation assessment. Senior front-end engineer: Boolean branching. Senior back-end engineer: Hard fail trigger. Product manager: Efficient screening mechanism.",
  "Q073": "Physical Education expert: Measures community engagement. UI/UX: Recognizable engagement methods. Data and evaluation: Assesses stakeholder involvement. Senior front-end engineer: Multi-select with negative. Senior back-end engineer: Hard fail validation. Product manager: Ensures community buy-in.",
  "Q074": "Physical Education expert: Verifies equity considerations. UI/UX: Explicit equity strategies. Data and evaluation: Identifies equity gaps. Senior front-end engineer: Multi-select pattern. Senior back-end engineer: Hard fail for no equity focus. Product manager: Reinforces inclusive practices.",
  "Q075": "Physical Education expert: Confirms safety infrastructure. UI/UX: Simple yes/no for route designation. Data and evaluation: Flags safety planning. Senior front-end engineer: Boolean input. Senior back-end engineer: Required condition. Product manager: Ensures basic safety measures.",
  "Q076": "Physical Education expert: Catalogs program activities. UI/UX: Familiar event types. Data and evaluation: Measures program variety. Senior front-end engineer: Multi-select with none option. Senior back-end engineer: Hard fail validation. Product manager: Demonstrates active programming.",
  "Q077": "Physical Education expert: Verifies safety education. UI/UX: Concrete education methods. Data and evaluation: Assesses safety preparation. Senior front-end engineer: Multi-select pattern. Senior back-end engineer: Hard fail for no education. Product manager: Ensures student readiness.",
  "Q078": "Physical Education expert: Confirms evaluation practices. UI/UX: Standard evaluation methods. Data and evaluation: Identifies continuous improvement. Senior front-end engineer: Multi-select pattern. Senior back-end engineer: Hard fail validation. Product manager: Ensures data-driven improvements."
};

// Update PEA questions with rationales
let count = 0;
for (const criterion of data.criteria) {
  if (criterion.id.startsWith('PEA-')) {
    for (const question of criterion.questions) {
      if (peaRationales[question.id]) {
        question.rationales = peaRationales[question.id];
        question.citations = "None provided.";
        count++;
      }
    }
  }
}

// Write back to file
fs.writeFileSync('./data/questions.json', JSON.stringify(data, null, 2), 'utf8');

console.log(`Added rationales to ${count} PEA questions`);

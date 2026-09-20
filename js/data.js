/* ============================================================
   CONTENT FILE — the easiest place to change text, photos, links.
   Edit, save, commit, push. No other file needs to change.
   ============================================================ */

/* Main photo in "The absence" section. Put the file in images/memorial/ */
const ABSENCE_IMG = {
  src: "images/memorial/absence-main.jpeg",
  alt: "The memorial (describe your photo)"
};

const GALLERY = [
  { caption: "Wall_Of_honor", src: "images/memorial/wall-of-honour.jpg" },
  { caption: "“Daddy’s Poem” plaque", src: "images/memorial/daddys-poem-plaque.jpeg" },
  { caption: "“We Remember” panel", src: "images/memorial/we-remember-panel.jpeg" },
  { caption: "Obelisk", src: "images/memorial/obelisk.jpeg" },
  { caption: "Vijayanta tank", src: "images/memorial/vijayanta-tank.jpeg" },
  { caption: "Aircraft / helicopter", src: "images/memorial/aircraft-helicopter.jpg" }
];
/* Sources. Paste each URL between the quotes on the right ("" = no link yet). */
const SRC = [
  ["Caswell, M. — symbolic annihilation and community archives", ""],
  ["Christen, K. — archival authority; CARE principles", ""],
  ["Stoler, A. L. — Along the Archival Grain", ""],
  ["Derrida, J. — Archive Fever", ""],
  ["Mbembe, A. — The Power of the Archive and its Limits", ""],
  ["Your survey: “Memory, Silence and the Archive” (Google Form responses)", ""],
  ["PLACEHOLDER — National Military Memorial official page / your visit notes", ""]
];

const MEM = {
  "Names":      ["Every name engraved on the Wall of Honour and Roll of Honour is permanent and public.", "Only the individual who served. The wife, mother or child who lived the aftermath has no line, no name."],
  "Regiment":   ["Regimental records place each soldier in a unit, a lineage and an institutional history.", "The household built around a regiment’s postings, and the families who moved with it or waited for it."],
  "Decorations":["Gallantry and service are formally recorded, dated and honoured.", "What it cost the family: the daughter who knew her father mainly through his medals."],
  "Equipment":  ["The decommissioned Vijayanta tank, aircraft and helicopter show the material machinery of war.", "Domestic objects, letters, photographs — the material culture of waiting."]
};
const HOT = [
  "What about the wife who managed the household alone?",
  "What about the mother who kept speaking of him for decades?",
  "What about the daughter who knew him mainly through his medals?"
];
const PROP = {
  "Rationale": "Families outside cantonment towns are doubly excluded: even informal visibility (veteran associations, reunions) skews toward urban, well-connected families. The archive is pan-India, with a physical wing as the primary access point given rural and low-bandwidth realities.",
  "Community & consent": "Built with families via trusted intermediaries — war widows’ associations and veteran welfare organisations — rather than direct outside solicitation. Every item carries a consent status.",
  "Metadata & access": "Five fields per item: Relationship · Access Tier · Material Type · Conflict/Posting Period · Consent Status. Tiered access (public / family-only / private) is technically enforced.",
  "Format & language": "Multilingual; testimony is kept in the original language. Physical-digital hybrid, sustained by a consortium of memorial trust, university archive department and veteran welfare organisations."
};
/* Archive room: [type, title, what it is, why it matters, whose memory]. Replace samples with real, consented items. */
const ITEMS = [
  ["Photograph", "Sample item — replace with a contributed photograph", "A family image: a farewell, a school event, a posting town.", "Shows domestic life the service record never captures.", "The person who chose to share it, with consent status shown."],
  ["Letter", "Sample item — replace with a contributed letter", "A written letter or story between soldier and family.", "Carries the experience of distance and unpredictable communication.", "Wife, mother, child or soldier — named only if the contributor agrees."],
  ["Oral testimony", "Sample item — replace with a contributed recording", "An audio recording kept in the contributor’s original language.", "Lets memory be spoken, not translated into official categories.", "The speaker, with the access tier they set."],
  ["Object", "Sample item — replace with a contributed object", "An epitaph, keepsake or household object.", "Turns waiting and mourning into something material.", "The family that holds it."]
];
const SW = {
  record: ["Postings", "Rank", "Decorations", "Dates", "Regiment", "Equipment"],
  memory: ["Waiting", "Mourning", "Domestic labour", "Inherited, fragmentary memory", "Managing alone", "Keeping his name spoken"]
};
const REFL = {
  "The institution": "Institutions hold resources, but the Memorial’s own categories produced the silence.",
  "The families": "Families hold the memories and the right to decide how they appear (CARE).",
  "Shared, families in charge": "The counter-archive answer: consortium support, with authority resting on contributors."
};

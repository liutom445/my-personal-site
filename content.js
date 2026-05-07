// ─────────────────────────────────────────────────────────────────────────────
// content.js — All site content lives here.
// To update the site: edit values below. Add/remove items in arrays freely.
// ─────────────────────────────────────────────────────────────────────────────

window.SITE_CONTENT = {
  // ── Masthead ──
  masthead: {
    publication: "The Ann Arbor Quarterly",
    issueNo: "VOL. XXVI",
    issueDate: "Spring · MMXXVI",
    price: "USD 0.00",
    headline: "Hongyi Liu",
    subhead: "On Causal Inference, Real-World Evidence, and the Quiet Mathematics of Population Health",
    dateline: "Filed from Ann Arbor, Michigan · School of Public Health",
    kicker: "A Personal Dispatch",
  },

  // ── Front-page index (the four chapters) ──
  chapters: [
    {
      no: "I",
      page: "p. 02",
      slug: "about",
      kicker: "The Profile",
      title: "About the Author",
      blurb: "A short biography in three movements: education, training, and the curious paths that lead a person to study causes rather than correlations.",
    },
    {
      no: "II",
      page: "p. 14",
      slug: "research",
      kicker: "The Notebook",
      title: "Research & Selected Papers",
      blurb: "Recent and ongoing inquiries into causal machine learning, EHR-derived evidence, and the statistical machinery behind clinical decisions.",
    },
    {
      no: "III",
      page: "p. 27",
      slug: "coursework",
      kicker: "The Archive",
      title: "Coursework & Technical Notes",
      blurb: "A small library of lecture notes, derivations, and minor technical observations — kept in the open in case they prove useful to someone, somewhere.",
    },
    {
      no: "IV",
      page: "p. 38",
      slug: "contact",
      kicker: "The Correspondence",
      title: "Letters & Addenda",
      blurb: "How to write, where to find the curriculum vitae, and a directory of categories and tags for the more particular reader.",
    },
  ],

  // ── About page ──
  about: {
    chapter: "Chapter I",
    title: "About the Author",
    standfirst:
      "A doctoral candidate in biostatistics, presently engaged in the construction of statistical instruments for the analysis of healthcare data at scale.",
    bio: [
      "Hongyi Liu is a PhD candidate in Biostatistics at the University of Michigan, where his work concerns causal inference, machine learning, and the analysis of real-world evidence drawn from large electronic health record systems.",
      "His research aims to render visible the otherwise invisible mechanisms by which treatments, exposures, and policies produce their effects — a task complicated, agreeably, by the fact that the data were never collected with such questions in mind.",
      "Outside the seminar room he is a methodical reader, a passable cook, and an occasional correspondent on matters statistical.",
    ],
    education: [
      { yr: "2022 — present", deg: "Ph.D. Candidate, Biostatistics", inst: "University of Michigan, Ann Arbor" },
      { yr: "2020 — 2022", deg: "M.S., Biostatistics", inst: "University of Michigan, Ann Arbor" },
      { yr: "2016 — 2020", deg: "B.S., Statistics & Mathematics", inst: "Undergraduate Institution" },
    ],
    interests: [
      "Causal inference",
      "Machine learning for treatment effects",
      "Electronic health records",
      "Survival analysis",
      "Doubly robust estimation",
      "Real-world evidence",
    ],
    portraitCaption: "Fig. 1 — The Author, drawn from memory.",
  },

  // ── Research page ──
  research: {
    chapter: "Chapter II",
    title: "Research & Selected Papers",
    standfirst:
      "Below: a working list of papers, preprints, and projects, accompanied by brief notes on what each was attempting to accomplish.",
    papers: [
      {
        no: "01",
        year: "2026",
        venue: "Working Paper",
        title: "Doubly Robust Estimation of Heterogeneous Treatment Effects under Informative Censoring",
        coauthors: "with collaborators",
        note: "Concerns the estimation of conditional average treatment effects when follow-up is curtailed by mechanisms that are themselves outcome-dependent.",
        tag: "Causal ML",
      },
      {
        no: "02",
        year: "2025",
        venue: "Statistics in Medicine",
        title: "Targeted Learning for Time-Varying Treatments in Electronic Health Records",
        coauthors: "with collaborators",
        note: "A tutorial-flavored paper on TMLE for longitudinal exposures, with a worked example in chronic disease management.",
        tag: "TMLE",
      },
      {
        no: "03",
        year: "2025",
        venue: "JAMIA",
        title: "Phenotype Algorithms for Real-World Evidence: A Validation Study",
        coauthors: "with collaborators",
        note: "An empirical study of how phenotype definition choices propagate into downstream causal estimates.",
        tag: "EHR",
      },
      {
        no: "04",
        year: "2024",
        venue: "Biostatistics",
        title: "Sensitivity Analysis for Unmeasured Confounding in Survival Outcomes",
        coauthors: "with collaborators",
        note: "An accessible treatment of the E-value and its relatives, adapted for time-to-event settings.",
        tag: "Sensitivity",
      },
    ],
    coursework: [
      { code: "BIOSTAT 866", name: "Advanced Inference" },
      { code: "BIOSTAT 830", name: "Causal Inference" },
      { code: "STATS 620", name: "Stochastic Processes" },
      { code: "BIOSTAT 821", name: "Survival Analysis" },
      { code: "EECS 545", name: "Machine Learning" },
      { code: "BIOSTAT 810", name: "Probability & Statistics II" },
    ],
    tags: [
      "causal-inference", "machine-learning", "EHR", "survival",
      "TMLE", "doubly-robust", "real-world-evidence", "phenotype",
      "sensitivity-analysis", "longitudinal", "biostatistics",
    ],
  },

  // ── Footer / contact ──
  contact: {
    email: "liutom@umich.edu",
    cv: "#",
    github: "liutom445",
    scholar: "#",
    orcid: "0000-0000-0000-0000",
  },
};

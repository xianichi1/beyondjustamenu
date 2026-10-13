# beyond just a menu

A minimalist, two-page web platform and anonymous archive exploring the labor, lived experiences, and cultural realities behind food consumption in Toronto and beyond.

---

## Concept Overview
While ethnic cuisine is widely consumed and franchised across urban centers, the working conditions, racial microaggressions, and lived realities of workers and diasporic communities often remain invisible. 

**beyond just a menu** provides:
1. **A Quiet, Anonymous Submission Space**: A distraction-free writing surface for food service workers, community members, and diners to share untold experiences without tracking or surveillance.
2. **A Curated Resource & Reading Directory**: Connecting readers to investigative journalism, labor advocacy groups (such as the Workers' Action Centre and CCNCTO), and direct support networks.

---

## 2-Page Website Architecture
Built with pure, semantic HTML5, CSS3, and modern Vanilla JavaScript:

- **`index.html` (Page 1 — Voices & Submissions)**:
  - Anonymous submission form with real-time word and character counting.
  - Client-side persistence (`localStorage`) with pre-seeded authentic community narratives.
  - Header button navigation directly linking to the resources page.
- **`resources.html` (Page 2 — Resources & Articles)**:
  - Curated directory of critical essays, investigative reports, community land trusts, and labor support.
  - Categorized into *Articles & Essays*, *Community Organizations*, and *Support & Mental Health*.
  - Clean return navigation back to the submissions page.
- **`style.css`**:
  - Restrained editorial typography (`Newsreader` serif + `Plus Jakarta Sans` + `JetBrains Mono`).
  - Warm minimalist paper palette, responsive mobile-first layout, and accessible focus states.
- **`script.js`**:
  - Interactive validation, live counter calculations, and dynamic DOM rendering for new anonymous submissions.
- **`W3SCHOOLS_CITATIONS.md`**:
  - Academic citation mapping linking all web techniques to official W3Schools documentation.

---

## How to Run
Simply open `index.html` in any modern web browser or deploy directly with GitHub Pages. Zero build dependencies required.

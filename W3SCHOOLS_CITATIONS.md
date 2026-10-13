# Code Citations & W3Schools References

This document maps all web development techniques, CSS properties, HTML structures, and JavaScript APIs utilized in this project to their corresponding **W3Schools** tutorials and official web standards. This document is formatted for export to PDF or submission with academic design coursework.

---

## 1. CSS3 Animations & Keyframes
- **Topic:** `@keyframes` rules, animation timing, and smooth state transitions
- **W3Schools Reference:** [CSS3 Animations (w3schools.com)](https://www.w3schools.com/css/css3_animations.asp)
- **Usage in Code:**
  - `style.css` & `public/style.css`: `@keyframes gentleFloat` generates the subtle bobbing animation for the boba mascot cup; `@keyframes blink` controls typewriter cursor pulsing.
  - `components/PaperTearTransition.jsx`: Smooth opacity and slide-in keyframes for transitions between Step 1, Step 3, and Step 4.

---

## 2. CSS3 Flexbox Layout
- **Topic:** Flexible Box Layout (`display: flex`, `justify-content`, `align-items`, `flex-direction`)
- **W3Schools Reference:** [CSS Flexbox (w3schools.com)](https://www.w3schools.com/css/css3_flexbox.asp)
- **Usage in Code:**
  - `style.css` & `public/style.css`: `.phone-container` and `body` center the mobile phone viewport both horizontally and vertically.
  - `index.html` & `public/index.html`: Vertically stacks voucher headers, boba cups, and interactive buttons with exact centering.

---

## 3. CSS Grid Layout
- **Topic:** Two-dimensional grid container system (`display: grid`, `grid-template-columns`, `gap`)
- **W3Schools Reference:** [CSS Grid Layout (w3schools.com)](https://www.w3schools.com/css/css_grid.asp)
- **Usage in Code:**
  - `style.css` (Step 3 Provocation): `.stats-grid` renders the side-by-side comparative statistic cards for Pew Research and Stats Canada data (`grid-template-columns: 1fr 1fr`).

---

## 4. Modal Dialogs (Popups)
- **Topic:** CSS & JavaScript popup overlays with backdrop blur and centered dialog containers
- **W3Schools Reference:** [How TO - CSS / JS Modal Boxes (w3schools.com)](https://www.w3schools.com/howto/howto_css_modals.asp)
- **Usage in Code:**
  - `index.html` & `public/index.html`: Fixed backdrop overlays (`.modal-backdrop`) with blurred background and centered `.modal-card` dialogs for `#modal-citations`, `#modal-action`, and `#modal-helplines`.
  - `script.js` & `public/script.js`: `openModal()` and `closeModal()` event handlers toggling `.open` classes on target dialogs.

---

## 5. Scalable Vector Graphics (SVG) & Paths
- **Topic:** SVG syntax, `<path>` bezier curves (`M`, `Q`, `C`), `<circle>`, and `<rect>`
- **W3Schools Reference:** [HTML SVG (w3schools.com)](https://www.w3schools.com/graphics/svg_intro.asp) & [SVG Path (w3schools.com)](https://www.w3schools.com/graphics/svg_path.asp)
- **Usage in Code:**
  - `index.html` & `public/index.html`: Handcrafted vector illustration of the boba cup, curved drinking straw, translucent cup lid, tapioca pearls with shine reflections, and happy/sad facial expressions.
  - `style.css`: Metallic staple graphics with realistic gradient highlights, shadows, and staple holes.
  - `components/PaperTearTransition.jsx`: Jagged tear edge geometry and staple layers.

---

## 6. HTML5 Semantic Elements
- **Topic:** Semantic structuring with `<main>`, `<section>`, `<header>`, `<article>`, `<button>`
- **W3Schools Reference:** [HTML5 Semantic Elements (w3schools.com)](https://www.w3schools.com/html/html5_semantic_elements.asp)
- **Usage in Code:**
  - `index.html` & `public/index.html`: `<main class="phone-container">` enclosing four distinct semantic `<section class="screen">` containers (`#screen-1`, `#screen-2`, `#screen-3`, `#screen-4`).

---

## 7. CSS3 2D Transforms & Cubic Bezier Timing
- **Topic:** `transform: translateX()`, `scale()`, `rotate()`, and `cubic-bezier()` transitions
- **W3Schools Reference:** [CSS 2D Transforms (w3schools.com)](https://www.w3schools.com/css/css3_2dtransforms.asp)
- **Usage in Code:**
  - Interactive tactile feedback on buttons (`:hover`, `:active`).
  - Paper tear animation physics: `.tear-left` and `.tear-right` translating outward (`translateX(-220%) rotate(-3deg)`) with `cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 8. CSS Custom Properties (Variables)
- **Topic:** CSS Variables (`--name`, `var(--name)`)
- **W3Schools Reference:** [CSS Variables (w3schools.com)](https://www.w3schools.com/css/css3_variables.asp)
- **Usage in Code:**
  - `style.css` & `public/style.css`: Palette definition (`--color-pastel-yellow`, `--color-pastel-purple`, `--color-pastel-mint`, `--color-accent-coral`) declared on `:root` and used across styles.

---

## 9. CSS Box Shadows & Borders
- **Topic:** `box-shadow`, `border-radius`, and tactile depth
- **W3Schools Reference:** [CSS Box Shadow (w3schools.com)](https://www.w3schools.com/css/css3_shadows_box.asp) & [CSS Borders (w3schools.com)](https://www.w3schools.com/css/css3_borders.asp)
- **Usage in Code:**
  - Neomorphic pill borders, coupon ticket shadows, metallic staple gradients, and drop shadows on the phone mockup container.

---

## 10. JavaScript Web Audio Synthesis
- **Topic:** `AudioContext`, `OscillatorNode`, `createBuffer`, and `GainNode`
- **W3Schools Reference:** [JavaScript Web APIs (w3schools.com)](https://www.w3schools.com/js/js_api_intro.asp)
- **Usage in Code:**
  - `script.js` & `lib/audio.js`: Synthesizes real-time procedural paper tearing noise (`playPaperRip`) and low-frequency bass impact (`playDarkImpact`) directly in browser memory without external MP3 audio file dependencies.

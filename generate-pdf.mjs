import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const doc = await PDFDocument.create();
  // Standard Letter size: 612 x 792 pt
  const page = doc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);
  const fontMono = await doc.embedFont(StandardFonts.Courier);

  // Background subtle tint / border
  const margin = 28;
  const contentWidth = width - margin * 2; // 556 pt

  // Top header box
  page.drawRectangle({
    x: margin,
    y: height - margin - 52,
    width: contentWidth,
    height: 52,
    color: rgb(0.08, 0.08, 0.1),
  });

  // Top header text
  page.drawText('ACADEMIC CODE CITATIONS & RESEARCH BIBLIOGRAPHY', {
    x: margin + 14,
    y: height - margin - 20,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Interactive Digital Anti-Discrimination Campaign  |  Coursework Citation Sheet', {
    x: margin + 14,
    y: height - margin - 34,
    size: 8,
    font: font,
    color: rgb(0.85, 0.6, 0.65),
  });

  page.drawText('Verified W3Schools References & Empirical Sources  *  Toronto, 2026', {
    x: margin + 14,
    y: height - margin - 45,
    size: 7,
    font: fontMono,
    color: rgb(0.7, 0.7, 0.75),
  });

  // Two columns: Left (W3Schools Code Standards), Right (Empirical Studies & Sources)
  const colGap = 14;
  const colWidth = (contentWidth - colGap) / 2; // ~271 pt each
  const col1X = margin;
  const col2X = margin + colWidth + colGap;
  const colTopY = height - margin - 60;

  // Function to draw section header
  function drawColHeader(x, y, title, subtitle, color) {
    page.drawRectangle({
      x,
      y: y - 20,
      width: colWidth,
      height: 20,
      color: rgb(color[0], color[1], color[2]),
    });
    page.drawText(title, {
      x: x + 8,
      y: y - 13,
      size: 8.5,
      font: fontBold,
      color: rgb(1, 1, 1),
    });
    page.drawText(subtitle, {
      x: x + colWidth - 85,
      y: y - 13,
      size: 6.5,
      font: fontMono,
      color: rgb(0.9, 0.9, 0.9),
    });
  }

  // --- COLUMN 1: W3SCHOOLS CODE CITATIONS ---
  drawColHeader(col1X, colTopY, 'PART I: W3SCHOOLS CODE CITATIONS', '11 TOPICS', [0.15, 0.25, 0.35]);

  const w3Citations = [
    {
      num: '1',
      topic: 'CSS3 Keyframe Animations',
      desc: '@keyframes gentleFloat, blink cursor pulsing',
      ref: 'w3schools.com/css/css3_animations.asp',
      code: 'style.css / PaperTearTransition.jsx',
    },
    {
      num: '2',
      topic: 'CSS3 Flexbox Layout',
      desc: 'display: flex, justify-content, align-items',
      ref: 'w3schools.com/css/css3_flexbox.asp',
      code: 'index.html (.phone-container, .screen)',
    },
    {
      num: '3',
      topic: 'CSS Grid System',
      desc: 'grid-template-columns: 1fr 1fr; gap: 10px',
      ref: 'w3schools.com/css/css_grid.asp',
      code: 'style.css (.stats-grid comparative data)',
    },
    {
      num: '4',
      topic: 'Modal Dialogs & Popups',
      desc: 'Backdrop blur overlays, open/close state logic',
      ref: 'w3schools.com/howto/howto_css_modals.asp',
      code: 'index.html & script.js (.modal-card)',
    },
    {
      num: '5',
      topic: 'Scalable Vector Graphics (SVG)',
      desc: '<svg>, <path> bezier curves, <rect>, <circle>',
      ref: 'w3schools.com/graphics/svg_intro.asp',
      code: 'artboard-7.svg, Boba cup vector artwork',
    },
    {
      num: '6',
      topic: 'HTML5 Semantic Elements',
      desc: '<main>, <section>, <header>, <article>, <button>',
      ref: 'w3schools.com/html/html5_semantic_elements.asp',
      code: 'index.html (Semantic Screen 1-4 architecture)',
    },
    {
      num: '7',
      topic: 'CSS 2D Transforms & Physics',
      desc: 'transform: translateX(), scale(), rotate()',
      ref: 'w3schools.com/css/css3_2dtransforms.asp',
      code: 'style.css (tactile button press, coupon tear)',
    },
    {
      num: '8',
      topic: 'CSS Custom Properties (Vars)',
      desc: 'var(--color-pastel-purple), :root token scoping',
      ref: 'w3schools.com/css/css3_variables.asp',
      code: 'style.css (Central design tokens system)',
    },
    {
      num: '9',
      topic: 'CSS Box Shadows & Perforation',
      desc: 'box-shadow elevation, border-radius, ticket cut',
      ref: 'w3schools.com/css/css3_shadows_box.asp',
      code: 'style.css (skeuomorphic depth & staples)',
    },
    {
      num: '10',
      topic: 'Async Clipboard & Timing State',
      desc: 'navigator.clipboard.writeText, setTimeout timing',
      ref: 'w3schools.com/howto/howto_js_copy_clipboard.asp',
      code: 'script.js (copyCampaignText, transition steps)',
    },
    {
      num: '11',
      topic: 'Google Web Fonts CDN & Fallbacks',
      desc: 'Fredoka, Plus Jakarta Sans, JetBrains Mono',
      ref: 'w3schools.com/howto/howto_google_fonts.asp',
      code: 'index.html (<link rel="stylesheet"> CDN)',
    },
  ];

  let curY1 = colTopY - 26;
  for (const item of w3Citations) {
    // Card box
    const cardH = 50;
    page.drawRectangle({
      x: col1X,
      y: curY1 - cardH,
      width: colWidth,
      height: cardH,
      color: rgb(0.97, 0.975, 0.985),
      borderColor: rgb(0.85, 0.88, 0.92),
      borderWidth: 0.6,
    });

    // Number tag
    page.drawRectangle({
      x: col1X + 4,
      y: curY1 - 13,
      width: 14,
      height: 10,
      color: rgb(0.2, 0.35, 0.5),
    });
    page.drawText(item.num, {
      x: col1X + (item.num.length === 1 ? 9 : 6),
      y: curY1 - 10,
      size: 6.5,
      font: fontBold,
      color: rgb(1, 1, 1),
    });

    // Topic title
    page.drawText(item.topic, {
      x: col1X + 22,
      y: curY1 - 10,
      size: 7.5,
      font: fontBold,
      color: rgb(0.1, 0.15, 0.25),
    });

    // Description
    page.drawText(item.desc, {
      x: col1X + 6,
      y: curY1 - 21,
      size: 6.5,
      font: font,
      color: rgb(0.25, 0.25, 0.3),
    });

    // Code alignment
    page.drawText('Code: ' + item.code, {
      x: col1X + 6,
      y: curY1 - 32,
      size: 6,
      font: fontOblique,
      color: rgb(0.4, 0.45, 0.5),
    });

    // Link/URL
    page.drawText('URL: https://www.' + item.ref, {
      x: col1X + 6,
      y: curY1 - 43,
      size: 6,
      font: fontMono,
      color: rgb(0.08, 0.38, 0.65),
    });

    curY1 -= (cardH + 4);
  }

  // --- COLUMN 2: EMPIRICAL RESEARCH & MEDIA SOURCES ---
  drawColHeader(col2X, colTopY, 'PART II: EMPIRICAL RESEARCH & MEDIA SOURCES', '8 SOURCES', [0.45, 0.15, 0.2]);

  const sources = [
    {
      org: 'PEW RESEARCH CENTER',
      badge: 'Academic Study',
      title: 'Asian Americans & Discrimination During Pandemic',
      stat: '58% of Asian adults report everyday racial slurs or discrimination.',
      url: 'https://www.pewresearch.org/race-and-ethnicity/2023/11/30/asian-americans-and-discrimination-during-the-covid-19-pandemic/',
      scope: 'Empirical study on interpersonal hostility & scapegoating.',
    },
    {
      org: 'STATISTICS CANADA & CCNC TORONTO',
      badge: 'Federal Audit',
      title: 'Addressing Anti-Asian Racism in Canada',
      stat: '301% surge in police-reported hate crimes; 40% in Ontario (GTA).',
      url: 'https://www.canada.ca/en/canadian-heritage/campaigns/asian-heritage-month/anti-asian-racism.html',
      scope: 'Official hate crime audit and community intake reports.',
    },
    {
      org: 'STOP AAPI HATE COALITION',
      badge: 'National Database',
      title: 'National Hate Incident Reporting Database',
      stat: '68% of 3,800+ cases involved verbal slurs; dining/transit key sites.',
      url: 'https://stopaapihate.org/',
      scope: 'National incident intake and community safety research.',
    },
    {
      org: 'UT AUSTIN / ETHICS UNWRAPPED',
      badge: 'Behavioral Study',
      title: 'Anti-Asian Violence and the Bystander Effect',
      stat: 'Explores bystander passivity & behavioral tactics for intervention.',
      url: 'https://ethicsunwrapped.utexas.edu/anti-asian-violence-and-the-bystander-effect',
      scope: 'Ethical analysis of intervention during public hostility.',
    },
    {
      org: 'TIME MAGAZINE',
      badge: 'Cover Investigation',
      title: 'Cover Story: We Are Being Targeted / Attacks Tripled',
      stat: 'Empirical coverage of violence and community solidarity.',
      url: 'https://time.com/5947622/time-cover-anti-asian-american-violence-atlanta-shooting/',
      scope: 'National investigative reporting on hate crimes and mobilization.',
    },
    {
      org: 'PAPER MAGAZINE',
      badge: 'Cultural Feature',
      title: 'Stop AAPI Hate: Global Culture & The Fight for Dignity',
      stat: 'Diasporic creative resistance and cross-cultural unity.',
      url: 'https://www.papermag.com/bts-stop-aapi-hate#rebelltitem1',
      scope: 'Cultural commentary on solidarity through arts and youth media.',
    },
    {
      org: 'OMG LORD & CARRD MASTERLIST',
      badge: 'Mutual Aid Hub',
      title: 'Anti-Asian Violence Resources & Legal Intake Hub',
      stat: 'Verified directories for victim relief, senior escorts & legal intake.',
      url: 'https://anti-asianviolenceresources.carrd.co/',
      scope: 'Masterlist of mutual aid, bail funds, and helpline directories.',
    },
    {
      org: 'DESIGN ARCHIVES (ARE.NA & IT\'S NICE THAT)',
      badge: 'Visual Culture',
      title: 'Asian Hate Signs Archive / Yuk Fun Illustration Feature',
      stat: 'Graphic design documentation of protest placards and artivism.',
      url: 'https://www.are.na/search?q=asian%20hate%20signs',
      scope: 'Visual culture research grounding the project\'s graphic identity.',
    },
  ];

  let curY2 = colTopY - 26;
  for (const item of sources) {
    const cardH = 60;
    page.drawRectangle({
      x: col2X,
      y: curY2 - cardH,
      width: colWidth,
      height: cardH,
      color: rgb(0.99, 0.97, 0.975),
      borderColor: rgb(0.92, 0.84, 0.85),
      borderWidth: 0.6,
    });

    // Organization & Badge
    page.drawText(item.org, {
      x: col2X + 6,
      y: curY2 - 10,
      size: 6.8,
      font: fontBold,
      color: rgb(0.7, 0.15, 0.2),
    });

    page.drawText(item.badge, {
      x: col2X + colWidth - 65,
      y: curY2 - 10,
      size: 5.8,
      font: fontMono,
      color: rgb(0.45, 0.45, 0.5),
    });

    // Title
    page.drawText(item.title, {
      x: col2X + 6,
      y: curY2 - 20,
      size: 7.2,
      font: fontBold,
      color: rgb(0.12, 0.12, 0.15),
    });

    // Key Stat highlight box
    page.drawRectangle({
      x: col2X + 6,
      y: curY2 - 34,
      width: colWidth - 12,
      height: 11,
      color: rgb(0.96, 0.88, 0.89),
    });
    page.drawText('Key Data: ' + item.stat, {
      x: col2X + 9,
      y: curY2 - 31,
      size: 5.8,
      font: fontBold,
      color: rgb(0.65, 0.1, 0.15),
    });

    // Scope description
    page.drawText(item.scope, {
      x: col2X + 6,
      y: curY2 - 43,
      size: 6,
      font: font,
      color: rgb(0.3, 0.3, 0.35),
    });

    // Source link
    page.drawText(item.url.length > 55 ? item.url.slice(0, 52) + '...' : item.url, {
      x: col2X + 6,
      y: curY2 - 53,
      size: 5.5,
      font: fontMono,
      color: rgb(0.1, 0.35, 0.6),
    });

    curY2 -= (cardH + 4);
  }

  // Bottom Footer Box (Emergency Helplines & Coursework Statement)
  const footerH = 46;
  const footerY = margin + 4;
  page.drawRectangle({
    x: margin,
    y: footerY,
    width: contentWidth,
    height: footerH,
    color: rgb(0.96, 0.96, 0.97),
    borderColor: rgb(0.8, 0.8, 0.85),
    borderWidth: 0.6,
  });

  page.drawText('VERIFIED COMMUNITY HELPLINES (TORONTO & GTA)', {
    x: margin + 10,
    y: footerY + 34,
    size: 6.8,
    font: fontBold,
    color: rgb(0.2, 0.2, 0.25),
  });

  page.drawText(
    'Toronto Distress Centres: 416-408-4357  |  Gerstein Crisis Centre: 416-929-5200  |  CCNC Toronto Intake: info@ccnctoronto.ca  |  Victim Services: 416-808-7066',
    {
      x: margin + 10,
      y: footerY + 23,
      size: 5.8,
      font: fontMono,
      color: rgb(0.35, 0.35, 0.4),
    }
  );

  page.drawText(
    'Pedagogical Note: All HTML/CSS/JS techniques conform to W3Schools standards without third-party template frameworks. All cited empirical metrics derive from primary research publications.',
    {
      x: margin + 10,
      y: footerY + 11,
      size: 5.5,
      font: fontOblique,
      color: rgb(0.45, 0.45, 0.5),
    }
  );

  page.drawText('Page 1 of 1 (Single Page Citation Brief)', {
    x: margin + contentWidth - 145,
    y: footerY + 34,
    size: 6.2,
    font: fontMono,
    color: rgb(0.5, 0.2, 0.25),
  });

  const pdfBytes = await doc.save();
  fs.writeFileSync('public/citations.pdf', pdfBytes);
  fs.writeFileSync('citations.pdf', pdfBytes);
  console.log('Successfully generated public/citations.pdf and citations.pdf (' + pdfBytes.length + ' bytes)');
}

generatePDF().catch(console.error);

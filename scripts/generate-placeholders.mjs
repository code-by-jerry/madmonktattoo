import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/placeholders');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createSvg({
  width = 800,
  height = 900,
  tag = "TATTOO ART",
  title = "CUSTOM PIECE",
  symbol = "mandala",
  accent = "#B3122D",
  darkBg = "#0A0A0A",
  midBg = "#151515",
}) {
  let symbolContent = "";

  if (symbol === "mandala") {
    symbolContent = `
      <g stroke="${accent}" stroke-width="1.2" opacity="0.45" fill="none">
        <circle cx="${width/2}" cy="${height/2}" r="140" stroke-dasharray="4 4" />
        <circle cx="${width/2}" cy="${height/2}" r="110" />
        <circle cx="${width/2}" cy="${height/2}" r="75" stroke-dasharray="8 6" />
        <circle cx="${width/2}" cy="${height/2}" r="40" />
        <circle cx="${width/2}" cy="${height/2}" r="12" fill="${accent}" opacity="0.8" />
        <path d="M${width/2 - 160} ${height/2} L${width/2 + 160} ${height/2}" />
        <path d="M${width/2} ${height/2 - 160} L${width/2} ${height/2 + 160}" />
        <path d="M${width/2 - 110} ${height/2 - 110} L${width/2 + 110} ${height/2 + 110}" stroke-dasharray="2 4" />
        <path d="M${width/2 - 110} ${height/2 + 110} L${width/2 + 110} ${height/2 - 110}" stroke-dasharray="2 4" />
        <polygon points="${width/2},${height/2-95} ${width/2+95},${height/2} ${width/2},${height/2+95} ${width/2-95},${height/2}" />
        <polygon points="${width/2},${height/2-65} ${width/2+65},${height/2} ${width/2},${height/2+65} ${width/2-65},${height/2}" stroke-dasharray="3 3"/>
      </g>
    `;
  } else if (symbol === "linework") {
    symbolContent = `
      <g stroke="#EDE8DF" stroke-width="1.5" opacity="0.4" fill="none">
        <path d="M${width/2 - 120} ${height/2 + 120} Q ${width/2 - 50} ${height/2 - 120} ${width/2 + 80} ${height/2 + 80} T ${width/2 + 130} ${height/2 - 100}" />
        <path d="M${width/2 - 90} ${height/2 + 140} Q ${width/2 - 20} ${height/2 - 100} ${width/2 + 110} ${height/2 + 100} T ${width/2 + 160} ${height/2 - 80}" stroke="${accent}" opacity="0.6"/>
        <line x1="${width/2 - 140}" y1="${height/2 + 40}" x2="${width/2 + 140}" y2="${height/2 + 40}" stroke-dasharray="4 6" />
        <circle cx="${width/2}" cy="${height/2 - 30}" r="60" stroke="${accent}" stroke-width="1" />
      </g>
    `;
  } else if (symbol === "monk") {
    symbolContent = `
      <g opacity="0.5" fill="none">
        <circle cx="${width/2}" cy="${height/2 - 50}" r="45" stroke="#EDE8DF" stroke-width="1.5" />
        <path d="M${width/2 - 90} ${height/2 + 120} C ${width/2 - 80} ${height/2 + 20}, ${width/2 + 80} ${height/2 + 20}, ${width/2 + 90} ${height/2 + 120} Z" stroke="#EDE8DF" stroke-width="1.5" />
        <circle cx="${width/2}" cy="${height/2 - 50}" r="80" stroke="${accent}" stroke-width="1" stroke-dasharray="6 6" />
        <circle cx="${width/2}" cy="${height/2 - 50}" r="110" stroke="#EDE8DF" stroke-width="0.75" stroke-dasharray="2 4" />
        <line x1="${width/2}" y1="${height/2 - 160}" x2="${width/2}" y2="${height/2 - 130}" stroke="${accent}" stroke-width="2" />
      </g>
    `;
  } else if (symbol === "raven") {
    symbolContent = `
      <g opacity="0.5" fill="none" stroke="${accent}" stroke-width="1.5">
        <polygon points="${width/2},${height/2-100} ${width/2+70},${height/2} ${width/2+40},${height/2+80} ${width/2},${height/2+40} ${width/2-40},${height/2+80} ${width/2-70},${height/2}" />
        <path d="M${width/2-120} ${height/2} Q ${width/2} ${height/2-60} ${width/2+120} ${height/2}" stroke="#EDE8DF" stroke-width="1" />
        <circle cx="${width/2}" cy="${height/2 - 30}" r="6" fill="${accent}" />
      </g>
    `;
  } else if (symbol === "sigil") {
    symbolContent = `
      <g opacity="0.45" stroke="#EDE8DF" stroke-width="1.2" fill="none">
        <polygon points="${width/2},${height/2-120} ${width/2+100},${height/2+50} ${width/2-100},${height/2+50}" stroke="${accent}" stroke-width="1.5" />
        <polygon points="${width/2},${height/2+120} ${width/2+100},${height/2-50} ${width/2-100},${height/2-50}" stroke="#EDE8DF" stroke-width="1" />
        <circle cx="${width/2}" cy="${height/2}" r="50" stroke="${accent}" stroke-dasharray="4 4" />
        <circle cx="${width/2}" cy="${height/2}" r="10" fill="${accent}" />
      </g>
    `;
  } else {
    symbolContent = `
      <g opacity="0.4" stroke="${accent}" stroke-width="1" fill="none">
        <circle cx="${width/2}" cy="${height/2}" r="90" />
        <circle cx="${width/2}" cy="${height/2}" r="60" stroke-dasharray="4 4" stroke="#EDE8DF"/>
        <line x1="${width/2 - 110}" y1="${height/2}" x2="${width/2 + 110}" y2="${height/2}" />
        <line x1="${width/2}" y1="${height/2 - 110}" x2="${width/2}" y2="${height/2 + 110}" />
      </g>
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="${midBg}"/>
      <stop offset="70%" stop-color="${darkBg}"/>
      <stop offset="100%" stop-color="#040404"/>
    </radialGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(237, 232, 223, 0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>

  <!-- Subtle corner ambient glow -->
  <circle cx="10%" cy="10%" r="200" fill="url(#glowGrad)"/>
  <circle cx="90%" cy="90%" r="220" fill="url(#glowGrad)"/>

  <!-- Border & Frame -->
  <rect x="16" y="16" width="${width - 32}" height="${height - 32}" fill="none" stroke="rgba(237, 232, 223, 0.12)" stroke-width="1"/>
  <rect x="22" y="22" width="${width - 44}" height="${height - 44}" fill="none" stroke="${accent}" stroke-width="0.75" stroke-dasharray="6 8" opacity="0.4"/>

  <!-- Corner corner ticks -->
  <path d="M 16 36 L 16 16 L 36 16" fill="none" stroke="${accent}" stroke-width="2"/>
  <path d="M ${width-16} 36 L ${width-16} 16 L ${width-36} 16" fill="none" stroke="${accent}" stroke-width="2"/>
  <path d="M 16 ${height-36} L 16 ${height-16} L 36 ${height-16}" fill="none" stroke="${accent}" stroke-width="2"/>
  <path d="M ${width-16} ${height-36} L ${width-16} ${height-16} L ${width-36} ${height-16}" fill="none" stroke="${accent}" stroke-width="2"/>

  <!-- Center Symbol Art -->
  ${symbolContent}

  <!-- Studio Emblem Top -->
  <g transform="translate(${width / 2}, 54)">
    <text text-anchor="middle" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="10" letter-spacing="4" fill="#EDE8DF" opacity="0.4">
      MAD MONK TATTOO • STUDIO ARCHIVE
    </text>
  </g>

  <!-- Bottom Labels -->
  <g transform="translate(${width / 2}, ${height - 75})">
    <rect x="-110" y="-18" width="220" height="24" rx="2" fill="#0A0A0A" stroke="${accent}" stroke-width="1" opacity="0.8"/>
    <text text-anchor="middle" y="-2" font-family="'Inter', -apple-system, sans-serif" font-size="10" font-weight="600" letter-spacing="3" fill="${accent}">
      ${tag.toUpperCase()}
    </text>
    <text text-anchor="middle" y="24" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="15" font-weight="600" letter-spacing="2" fill="#EDE8DF">
      ${title.toUpperCase()}
    </text>
    <text text-anchor="middle" y="44" font-family="'Inter', -apple-system, sans-serif" font-size="9" letter-spacing="1.5" fill="#9E9A90">
      CUSTOM BESPOKE INK
    </text>
  </g>
</svg>`;
}

const items = [
  { file: 'hero-tattoo.svg', width: 1920, height: 1080, tag: 'Signature Masterpiece', title: 'Sacred Linework & Dark Blackwork', symbol: 'mandala' },
  { file: 'artist-portrait.svg', width: 800, height: 1000, tag: 'Resident Artist', title: 'Vikram "Monk" Dev', symbol: 'monk' },
  
  // Gallery 1-9
  { file: 'gallery-01.svg', width: 700, height: 950, tag: 'Tattoo 01 // Geometric', title: 'Sacred Mandala Sleeve', symbol: 'mandala' },
  { file: 'gallery-02.svg', width: 700, height: 850, tag: 'Tattoo 02 // Blackwork', title: 'The Raven Sigil', symbol: 'raven' },
  { file: 'gallery-03.svg', width: 700, height: 1000, tag: 'Tattoo 03 // Fine Line', title: 'Vertebral Flora', symbol: 'linework' },
  { file: 'gallery-04.svg', width: 800, height: 800, tag: 'Tattoo 04 // Spiritual', title: 'Vedic Yantra', symbol: 'sigil' },
  { file: 'gallery-05.svg', width: 700, height: 900, tag: 'Tattoo 05 // Linework', title: 'Quietude & Lotus', symbol: 'monk' },
  { file: 'gallery-06.svg', width: 700, height: 850, tag: 'Tattoo 06 // Cover-Up', title: 'Serpent Transformation', symbol: 'raven' },
  { file: 'gallery-07.svg', width: 800, height: 800, tag: 'Tattoo 07 // Realism', title: 'Panther Gaze', symbol: 'mandala' },
  { file: 'gallery-08.svg', width: 800, height: 800, tag: 'Tattoo 08 // Minimal', title: 'Solar Sigil', symbol: 'sigil' },
  { file: 'gallery-09.svg', width: 700, height: 950, tag: 'Tattoo 09 // Blackwork', title: 'Nordic Kuro Band', symbol: 'linework' },

  // Styles 1-8
  { file: 'style-blackwork.svg', width: 600, height: 750, tag: 'Style 01', title: 'Solid Blackwork', symbol: 'raven' },
  { file: 'style-linework.svg', width: 600, height: 750, tag: 'Style 02', title: 'Contour Linework', symbol: 'linework' },
  { file: 'style-fine-line.svg', width: 600, height: 750, tag: 'Style 03', title: 'Single-Needle Fine Line', symbol: 'linework' },
  { file: 'style-geometric.svg', width: 600, height: 750, tag: 'Style 04', title: 'Sacred Geometric', symbol: 'mandala' },
  { file: 'style-realism.svg', width: 600, height: 750, tag: 'Style 05', title: 'Dark Realism', symbol: 'mandala' },
  { file: 'style-coverups.svg', width: 600, height: 750, tag: 'Style 06', title: 'Custom Cover-Ups', symbol: 'raven' },
  { file: 'style-spiritual.svg', width: 600, height: 750, tag: 'Style 07', title: 'Religious & Spiritual', symbol: 'sigil' },
  { file: 'style-minimal.svg', width: 600, height: 750, tag: 'Style 08', title: 'Small & Minimalist', symbol: 'sigil' },
];

for (const item of items) {
  const filePath = path.join(outDir, item.file);
  const svg = createSvg(item);
  fs.writeFileSync(filePath, svg, 'utf-8');
}

console.log(`Generated ${items.length} placeholder SVGs in ${outDir}`);

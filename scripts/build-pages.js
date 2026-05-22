const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const monetagScript =
  '<script src="https://quge5.com/88/tag.min.js" data-zone="242094" async data-cfasync="false"></script>';

const sharedStyles = `
:root{
  --bg:#f8f8f6;--surface:#fff;--border:#e5e4e0;--text:#111110;
  --muted:#6b6a66;--accent:#e8410a;--accent2:#1a56db;
  --font:'Inter',sans-serif;--display:'Outfit',sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--text);font-size:16px;line-height:1.65}
nav{background:#fff;border-bottom:1px solid var(--border);padding:0 1.5rem;height:58px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{font-family:var(--display);font-weight:800;font-size:1.25rem;color:var(--text);text-decoration:none}
.logo span{color:var(--accent)}
.nav-links{display:flex;gap:1.5rem;font-size:.88rem;font-weight:500}
.nav-links a{color:var(--muted);text-decoration:none}
.nav-links a:hover{color:var(--text)}
.breadcrumb{font-size:.82rem;color:var(--muted);padding:.8rem 0;display:flex;gap:.5rem;align-items:center}
.breadcrumb a{color:var(--muted);text-decoration:none}
.breadcrumb a:hover{color:var(--accent)}
.container{max-width:1100px;margin:0 auto;padding:0 1.5rem}
.page-wrap{max-width:1100px;margin:0 auto;padding:2rem 1.5rem;display:grid;grid-template-columns:1fr 300px;gap:2rem}
@media(max-width:800px){.page-wrap{grid-template-columns:1fr}.nav-links{gap:.9rem;font-size:.8rem}}
.ad-slot{background:#fff;border:1.5px dashed var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.75rem;font-family:monospace;letter-spacing:.05em;text-transform:uppercase}
.ad-banner{width:100%;height:90px;margin-bottom:1.5rem}
.ad-sidebar{width:100%;height:250px}
.tool-header{margin-bottom:1.5rem}
.tool-header .icon{font-size:2rem;margin-bottom:.55rem}
.tool-header h1{font-family:var(--display);font-size:1.9rem;font-weight:700;line-height:1.2;margin-bottom:.5rem}
.tool-header p.intro{color:var(--muted);font-size:.97rem;line-height:1.7;max-width:700px}
.tool-body,.info-card,.faq-item{background:#fff;border:1.5px solid var(--border);border-radius:12px}
.tool-body{padding:2rem}
.info-grid,.faq-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
.info-card,.faq-item{padding:1.2rem 1.25rem}
.info-card h2,.faq-title{font-family:var(--display);font-size:1rem;margin-bottom:.45rem}
.info-card p,.info-card li,.faq-item p{color:var(--muted);font-size:.94rem;line-height:1.7}
.info-card ul{padding-left:1.15rem}
.btn{padding:.65rem 1.3rem;border:none;border-radius:7px;font-family:var(--display);font-weight:600;font-size:.9rem;cursor:pointer;transition:all .15s}
.btn-primary{background:var(--text);color:#fff}
.btn-primary:hover{background:var(--accent)}
.btn-outline{background:transparent;color:var(--text);border:1.5px solid var(--border)}
.btn-outline:hover{border-color:var(--text)}
.btn-row{display:flex;gap:.6rem;flex-wrap:wrap;margin:1rem 0}
textarea,input[type=text],input[type=number],input[type=date],select{
  width:100%;padding:.78rem .92rem;border:1.5px solid var(--border);border-radius:8px;
  font-family:var(--font);font-size:.95rem;background:var(--bg);color:var(--text);outline:none
}
textarea{min-height:170px;resize:vertical}
textarea:focus,input:focus,select:focus{border-color:var(--accent2);background:#fff}
.input-row{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1rem}
.input-group{flex:1;min-width:140px}
label{display:block;font-size:.83rem;font-weight:500;color:var(--muted);margin-bottom:.35rem}
.result-box{background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:1rem 1.1rem;font-size:.94rem;line-height:1.65;min-height:62px;white-space:pre-wrap;word-break:break-word}
.result-stats{display:flex;gap:.75rem;flex-wrap:wrap;margin:1rem 0}
.stat-box{flex:1;min-width:92px;background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:.85rem;text-align:center}
.stat-num{font-family:var(--display);font-size:1.45rem;font-weight:800;color:var(--accent)}
.stat-label{font-size:.73rem;color:var(--muted);margin-top:.12rem}
.muted{font-size:.85rem;color:var(--muted);margin-top:.7rem}
.related{margin-top:2rem}
.related h3,.faq-heading{font-family:var(--display);font-size:1.05rem;font-weight:700;margin-bottom:.8rem}
.related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem}
@media(max-width:700px){.related-grid{grid-template-columns:1fr}}
.related-card{background:#fff;border:1.5px solid var(--border);border-radius:8px;padding:.8rem;text-decoration:none;color:var(--text);display:block;font-size:.85rem;font-weight:500}
.related-card:hover{border-color:var(--accent);color:var(--accent)}
.calc-buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:.65rem}
.calc-btn{padding:.95rem;border:1.5px solid var(--border);border-radius:10px;background:var(--bg);color:var(--text);font-family:var(--display);font-size:1rem;font-weight:700;cursor:pointer}
.calc-btn:hover{border-color:var(--accent);background:#fff}
.calc-btn.primary{background:var(--text);color:#fff;border-color:var(--text)}
.calc-btn.primary:hover{background:var(--accent);border-color:var(--accent)}
.calc-btn.wide{grid-column:span 2}
footer{background:var(--text);color:rgba(255,255,255,.45);text-align:center;padding:2rem 1rem;font-size:.82rem;margin-top:3rem}
footer a{color:rgba(255,255,255,.6);text-decoration:none}
footer a:hover{color:#fff}
`;

const relatedLookup = {
  "word-counter": ["case-converter", "reading-time", "line-sorter"],
  "calculator": ["percentage-calculator", "average-calculator", "currency-converter"],
  "currency-converter": ["calculator", "margin-calculator", "savings-goal-calculator"],
  "text-translator": ["case-converter", "word-counter", "text-diff-checker"],
  "case-converter": ["word-counter", "slug-generator", "text-reverser"],
  "percentage-calculator": ["calculator", "margin-calculator", "break-even-calculator"],
  "date-calculator": ["age-calculator", "timestamp-converter", "countdown-timer"],
  "age-calculator": ["date-calculator", "bmi-calculator", "reading-time"],
  "password-generator": ["uuid-generator", "hash-generator", "regex-tester"],
  "qr-code-generator": ["url-encoder", "slug-generator", "text-translator"],
  "line-sorter": ["duplicate-remover", "word-counter", "text-diff-checker"],
  "slug-generator": ["case-converter", "url-encoder", "markdown-preview"],
  "regex-tester": ["json-formatter", "text-diff-checker", "html-escape"],
  "markdown-preview": ["html-escape", "slug-generator", "word-counter"],
  "html-escape": ["markdown-preview", "json-formatter", "url-encoder"],
  "csv-to-json": ["json-to-csv", "json-formatter", "duplicate-remover"],
  "json-to-csv": ["csv-to-json", "json-formatter", "line-sorter"],
  "average-calculator": ["calculator", "ratio-calculator", "percentage-calculator"],
  "ratio-calculator": ["average-calculator", "percentage-calculator", "margin-calculator"],
  "margin-calculator": ["profit-calculator", "break-even-calculator", "currency-converter"],
  "break-even-calculator": ["margin-calculator", "profit-calculator", "roi-calculator"],
  "savings-goal-calculator": ["compound-interest", "calculator", "currency-converter"],
  "loan-affordability-calculator": ["emi-calculator", "calculator", "savings-goal-calculator"],
  "timestamp-converter": ["date-calculator", "timezone-converter", "json-formatter"],
  "text-diff-checker": ["line-sorter", "duplicate-remover", "word-counter"],
  "uuid-generator": ["password-generator", "hash-generator", "regex-tester"],
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugToName(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function faqSchema(page) {
  if (!page.faq || !page.faq.length) return [];
  return [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  }];
}

function pageSchema(page) {
  const pageName = page.h1 || page.name;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": pageName,
      "url": `https://jjafri45.github.io/${page.slug}.html`,
      "description": page.metaDescription,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript and a modern web browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jjafri45.github.io/" },
        { "@type": "ListItem", "position": 2, "name": pageName, "item": `https://jjafri45.github.io/${page.slug}.html` },
      ],
    },
    ...faqSchema(page),
  ];
}

function renderInfoCards(cards) {
  return cards
    .map((card) => {
      const list = card.list
        ? `<ul>${card.list.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";
      return `<section class="info-card"><h2>${card.title}</h2>${card.body.map((p) => `<p>${p}</p>`).join("")}${list}</section>`;
    })
    .join("");
}

function renderFaq(page) {
  if (!page.faq || !page.faq.length) return "";
  return `
    <section class="faq-grid">
      <h2 class="faq-heading">Frequently asked questions</h2>
      ${page.faq
        .map((item) => `<article class="faq-item"><div class="faq-title">${item.q}</div><p>${item.a}</p></article>`)
        .join("")}
    </section>
  `;
}

function renderRelated(page, allTools) {
  const slugs = relatedLookup[page.slug] || [];
  const cards = slugs
    .map((slug) => allTools.find((tool) => tool.slug === slug))
    .filter(Boolean)
    .map((tool) => `<a href="${tool.slug}.html" class="related-card">${tool.name}</a>`)
    .join("");
  return cards ? `<div class="related"><h3>Related Tools</h3><div class="related-grid">${cards}</div></div>` : "";
}

function buildPage(page, allTools) {
  const schema = JSON.stringify(pageSchema(page));
  const pageHeading = page.h1 || page.name;
  return `<!DOCTYPE html>
<html lang="en">
<head>
${monetagScript}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.metaDescription)}">
<meta name="keywords" content="${esc(page.keywords.join(", "))}">
<link rel="canonical" href="https://jjafri45.github.io/${page.slug}.html">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.ogDescription || page.metaDescription)}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://jjafri45.github.io/${page.slug}.html">
<meta property="og:site_name" content="ToolDrop">
<meta name="twitter:card" content="summary">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#111110">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;450;500&display=swap" rel="stylesheet">
<style>${sharedStyles}</style>
<script type="application/ld+json">${schema}</script>
</head>
<body>
<nav>
  <a href="index.html" class="logo">Tool<span>Drop</span></a>
  <div class="nav-links">
    <a href="index.html">All Tools</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="privacy.html">Privacy</a>
  </div>
</nav>
<div class="container"><nav class="breadcrumb"><a href="index.html">Home</a><span>&gt;</span><span>${page.category}</span><span>&gt;</span><span>${page.name}</span></nav></div>
<div class="page-wrap">
  <div class="tool-main">
    <div class="ad-slot ad-banner">[ Ad - 728x90 Banner ]</div>
    <div class="tool-header">
      <div class="icon">${page.icon}</div>
      <h1>${pageHeading}</h1>
      <p class="intro">${page.intro}</p>
    </div>
    <div class="tool-body">
      ${page.toolHtml}
    </div>
    ${renderRelated(page, allTools)}
    <div class="info-grid">
      ${renderInfoCards(page.infoCards)}
    </div>
    ${renderFaq(page)}
    <div class="ad-slot ad-banner" style="margin-top:1.5rem">[ Ad - 728x90 Banner ]</div>
  </div>
  <aside>
    <div class="ad-slot ad-sidebar">[ Ad - 300x250 ]</div>
  </aside>
</div>
<script>
${page.script}
</script>
<footer>
  <p>&copy; 2026 ToolDrop &nbsp;&middot;&nbsp; <a href="about.html">About</a> &nbsp;&middot;&nbsp; <a href="contact.html">Contact</a> &nbsp;&middot;&nbsp; <a href="privacy.html">Privacy</a> &nbsp;&middot;&nbsp; <a href="terms.html">Terms</a> &nbsp;&middot;&nbsp; <a href="advertising-disclosure.html">Advertising Disclosure</a></p>
</footer>
</body>
</html>`;
}

const topTools = [
  {
    slug: "word-counter",
    name: "Word Counter",
    category: "Text Tools",
    icon: "Aa",
    h1: "Free Online Word Counter",
    title: "Word Counter Online | Free Word and Character Count Tool",
    metaDescription:
      "Count words, characters, sentences, paragraphs, and reading time instantly with a free online word counter for essays, blog posts, and captions.",
    ogDescription:
      "Count words, characters, sentences, paragraphs, and reading time instantly in your browser.",
    keywords: ["word counter", "character counter", "reading time calculator", "essay word count"],
    intro:
      "Paste or type any text to instantly count words, characters, sentences, paragraphs, and estimated reading time. Useful for articles, assignments, product copy, captions, and application forms.",
    toolHtml: `
<textarea id="wc-input" placeholder="Paste or type your text here..." oninput="updateWordCounter()"></textarea>
<div class="result-stats">
  <div class="stat-box"><div class="stat-num" id="wc-words">0</div><div class="stat-label">Words</div></div>
  <div class="stat-box"><div class="stat-num" id="wc-chars">0</div><div class="stat-label">Characters</div></div>
  <div class="stat-box"><div class="stat-num" id="wc-nospace">0</div><div class="stat-label">No Spaces</div></div>
  <div class="stat-box"><div class="stat-num" id="wc-sentences">0</div><div class="stat-label">Sentences</div></div>
  <div class="stat-box"><div class="stat-num" id="wc-paragraphs">0</div><div class="stat-label">Paragraphs</div></div>
  <div class="stat-box"><div class="stat-num" id="wc-read">0m</div><div class="stat-label">Read Time</div></div>
</div>
<div class="result-box">Example: a 600 word article usually shows about 3 minutes of reading time at 200 words per minute.</div>
`,
    script: `
function updateWordCounter() {
  const text = document.getElementById('wc-input').value;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\\s+/).length : 0;
  const sentences = text.split(/[.!?]+/).filter((part) => part.trim()).length;
  const paragraphs = text.split(/\\n\\s*\\n/).filter((part) => part.trim()).length || (trimmed ? 1 : 0);
  document.getElementById('wc-words').textContent = words;
  document.getElementById('wc-chars').textContent = text.length;
  document.getElementById('wc-nospace').textContent = text.replace(/\\s/g, '').length;
  document.getElementById('wc-sentences').textContent = sentences;
  document.getElementById('wc-paragraphs').textContent = paragraphs;
  document.getElementById('wc-read').textContent = Math.max(0, Math.ceil(words / 200)) + 'm';
}
updateWordCounter();
`,
    infoCards: [
      {
        title: "How this word counter works",
        body: [
          "The tool checks whitespace-separated words, total characters, character count without spaces, sentence breaks, paragraphs, and estimated reading time. It is intended for fast browser use, so the results update while you type.",
          "This makes it useful when you need quick feedback without opening a document editor or copying text into a paid writing suite.",
        ],
      },
      {
        title: "Examples and use cases",
        body: [
          "Use it to keep a blog post inside a target range, check whether an application answer fits a limit, or estimate how long a product guide or newsletter will take to read.",
        ],
        list: [
          "checking article length before publishing",
          "fitting scholarship or application answers into a word limit",
          "estimating reading time for landing pages and blog posts",
          "reviewing social captions or product descriptions before publishing",
        ],
      },
      {
        title: "Short explanation and limitations",
        body: [
          "Sentence and paragraph totals are approximate because punctuation and formatting vary across writers and platforms. If your text contains abbreviations, code snippets, or unusual line breaks, the counts may differ slightly from what a full editor reports.",
        ],
      },
    ],
    faq: [
      { q: "Does the word counter work for pasted text?", a: "Yes. You can paste text from a document, browser tab, email, or note and the counts update immediately." },
      { q: "How is reading time calculated?", a: "Reading time is estimated from total words using a simple 200 words-per-minute average." },
      { q: "Can I use this for essays and assignments?", a: "Yes. It is useful for essays, assignments, applications, and reports when you need a fast count before submission." },
    ],
  },
  {
    slug: "calculator",
    name: "Calculator",
    category: "Calculators",
    icon: "Calc",
    h1: "Free Online Calculator",
    title: "Online Calculator | Free Basic Calculator for Daily Math",
    metaDescription:
      "Use a free online calculator for quick math, percentages, decimals, and grouped expressions. Fast browser calculator for daily calculations.",
    keywords: ["online calculator", "basic calculator", "percentage calculator", "daily math tool"],
    intro:
      "Use this simple calculator for everyday arithmetic, percentages, decimals, and grouped expressions. It is designed for fast browser use without ads inside the result area or sign-in requirements.",
    toolHtml: `
<div class="input-row">
  <div class="input-group"><label>Expression</label><input type="text" id="calc-input" placeholder="Example: (1200*15)/100"></div>
</div>
<div class="result-box" id="calc-output">Ready.</div>
<div class="calc-buttons" style="margin-top:1rem">
  <button class="calc-btn" onclick="pressCalc('7')">7</button><button class="calc-btn" onclick="pressCalc('8')">8</button><button class="calc-btn" onclick="pressCalc('9')">9</button><button class="calc-btn" onclick="pressCalc('/')">/</button>
  <button class="calc-btn" onclick="pressCalc('4')">4</button><button class="calc-btn" onclick="pressCalc('5')">5</button><button class="calc-btn" onclick="pressCalc('6')">6</button><button class="calc-btn" onclick="pressCalc('*')">*</button>
  <button class="calc-btn" onclick="pressCalc('1')">1</button><button class="calc-btn" onclick="pressCalc('2')">2</button><button class="calc-btn" onclick="pressCalc('3')">3</button><button class="calc-btn" onclick="pressCalc('-')">-</button>
  <button class="calc-btn" onclick="pressCalc('0')">0</button><button class="calc-btn" onclick="pressCalc('.')">.</button><button class="calc-btn" onclick="pressCalc('%')">%</button><button class="calc-btn" onclick="pressCalc('+')">+</button>
  <button class="calc-btn wide" onclick="clearCalc()">Clear</button><button class="calc-btn" onclick="backCalc()">Back</button><button class="calc-btn primary" onclick="runCalc()">=</button>
</div>
<p class="muted">Example use: calculate VAT, bill splits, markups, discounts, and quick totals without opening a spreadsheet.</p>
`,
    script: `
function pressCalc(value){ document.getElementById('calc-input').value += value; }
function clearCalc(){ document.getElementById('calc-input').value=''; document.getElementById('calc-output').textContent='Cleared.'; }
function backCalc(){ const el=document.getElementById('calc-input'); el.value=el.value.slice(0,-1); }
function runCalc(){
  const expr = document.getElementById('calc-input').value.trim();
  const out = document.getElementById('calc-output');
  if(!expr){ out.textContent='Enter a calculation first.'; return; }
  if(!/^[0-9+\\-*/().%\\s]+$/.test(expr)){ out.textContent='Only numbers, spaces, brackets, and + - * / % are allowed.'; return; }
  try {
    const result = Function('"use strict"; return (' + expr + ');')();
    out.textContent = Number.isFinite(result) ? 'Result: ' + result : 'Result is not a finite number.';
  } catch (error) {
    out.textContent = 'Invalid expression.';
  }
}
document.getElementById('calc-input').addEventListener('keydown', function(event){ if(event.key === 'Enter'){ runCalc(); }});
`,
    infoCards: [
      {
        title: "Short explanation",
        body: [
          "This calculator is for general arithmetic. It supports whole numbers, decimals, brackets, and the operators plus, minus, multiply, divide, and percent.",
          "It is useful when you need a result quickly and do not want the overhead of launching a spreadsheet or a heavy calculator app.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["Typical uses include salary percentages, discount checks, bill splitting, and invoice sanity checks."],
        list: [
          "15 percent of 1200",
          "splitting a dinner bill between multiple people",
          "checking a discount before checkout",
          "testing a markup or simple margin idea before using a finance-specific tool",
        ],
      },
      {
        title: "When to use a different tool",
        body: [
          "If you need loan payments, date math, ROI, tax-exclusive amounts, or currency conversion, the dedicated ToolDrop pages are a better fit and give you more context than a basic calculator.",
        ],
      },
    ],
    faq: [
      { q: "Can this calculator handle brackets?", a: "Yes. You can use grouped expressions with parentheses, such as (1200*15)/100." },
      { q: "Does the percent operator work like a spreadsheet?", a: "It behaves like the JavaScript percent operator, which is a remainder operation rather than a spreadsheet percentage button." },
      { q: "Is this calculator good for tax or EMI calculations?", a: "It can do the raw arithmetic, but the dedicated ToolDrop finance tools are better for those specific workflows." },
    ],
  },
  {
    slug: "currency-converter",
    name: "Currency Converter",
    category: "Finance Tools",
    icon: "$",
    h1: "Free Currency Converter",
    title: "Currency Converter | Convert USD, EUR, GBP, PKR, INR and More",
    metaDescription:
      "Convert currencies online with fresh exchange rates. Free browser currency converter for USD, EUR, GBP, PKR, INR, AED, SAR and more.",
    keywords: ["currency converter", "exchange rate tool", "usd to pkr", "eur to inr", "travel money calculator"],
    intro:
      "Convert money between major currencies using fresh public exchange-rate data. Good for travel planning, freelance invoices, online shopping checks, and rough pricing comparisons.",
    toolHtml: `
<div class="input-row">
  <div class="input-group"><label>Amount</label><input type="number" id="cc-amount" min="0" step="0.01" value="100"></div>
  <div class="input-group"><label>From</label><select id="cc-from"></select></div>
  <div class="input-group"><label>To</label><select id="cc-to"></select></div>
</div>
<div class="btn-row"><button class="btn btn-primary" onclick="convertCurrency()">Convert</button></div>
<div class="result-box" id="cc-output">Choose currencies and convert.</div>
<p class="muted" id="cc-meta">Rates source: Frankfurter public API.</p>
`,
    script: `
const ccCurrencies = ['USD','EUR','GBP','AED','SAR','PKR','INR','CAD','AUD','JPY','CNY','CHF','TRY','QAR','KWD','OMR','BHD','SGD'];
const ccFrom = document.getElementById('cc-from');
const ccTo = document.getElementById('cc-to');
ccFrom.innerHTML = ccCurrencies.map((code) => '<option value="' + code + '">' + code + '</option>').join('');
ccTo.innerHTML = ccCurrencies.map((code) => '<option value="' + code + '">' + code + '</option>').join('');
ccFrom.value = 'USD';
ccTo.value = 'PKR';
async function convertCurrency(){
  const amount = parseFloat(document.getElementById('cc-amount').value);
  const from = ccFrom.value;
  const to = ccTo.value;
  const out = document.getElementById('cc-output');
  const meta = document.getElementById('cc-meta');
  if(!Number.isFinite(amount) || amount < 0){ out.textContent = 'Enter a valid positive amount.'; return; }
  if(from === to){ out.textContent = amount.toFixed(2) + ' ' + from + ' = ' + amount.toFixed(2) + ' ' + to; meta.textContent = 'Same currency selected.'; return; }
  out.textContent = 'Fetching latest rate...';
  try {
    const response = await fetch('https://api.frankfurter.dev/v2/rate/' + from + '/' + to);
    const data = await response.json();
    if(!response.ok || !data.rate){ throw new Error('No rate returned'); }
    out.textContent = amount.toFixed(2) + ' ' + from + ' = ' + (amount * data.rate).toFixed(2) + ' ' + to;
    meta.textContent = 'Rate: 1 ' + from + ' = ' + data.rate + ' ' + to + ' | Date: ' + data.date;
  } catch (error) {
    out.textContent = 'Could not fetch exchange rates right now.';
    meta.textContent = 'Try again in a moment.';
  }
}
convertCurrency();
`,
    infoCards: [
      {
        title: "How this converter works",
        body: [
          "This page requests public exchange-rate data and applies the returned rate to the amount you enter. It is suitable for general estimates and quick checks.",
          "You can use it when comparing freelance rates, estimating travel budgets, or checking whether a product price looks reasonable in your local currency.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["The converter is most helpful when speed matters more than perfect settlement precision."],
        list: [
          "travel budget conversion before a trip",
          "cross-border product price checks",
          "invoice comparisons for remote freelance work",
          "rough exchange value checks before speaking to a bank or remittance service",
        ],
      },
      {
        title: "Important limitation",
        body: [
          "This tool does not provide executable trading quotes or guaranteed settlement rates. Banks, card processors, and transfer services may use different rates and add fees on top of the base conversion.",
        ],
      },
    ],
    faq: [
      { q: "Are these rates live bank rates?", a: "No. They are public reference rates and should be treated as estimates, not guaranteed settlement prices." },
      { q: "Can I use this for travel budgeting?", a: "Yes. Travel budgeting is one of the best uses because you usually need a rough conversion quickly." },
      { q: "Why can the final bank amount differ?", a: "Banks and payment processors often add spreads, card fees, or remittance charges on top of the reference rate." },
    ],
  },
  {
    slug: "text-translator",
    name: "Text Translator",
    category: "Text Tools",
    icon: "Lang",
    h1: "Free Text Translator",
    title: "Text Translator | Translate English, Arabic, Urdu, Spanish and More",
    metaDescription:
      "Translate text online between common languages including English, Arabic, Urdu, Spanish, French, German, Hindi and more with a fast browser tool.",
    keywords: ["text translator", "translate online", "english to urdu", "english to arabic", "free translator"],
    intro:
      "Translate short text between common languages directly in your browser. Best for quick phrases, short notes, captions, messages, and everyday multilingual checks.",
    toolHtml: `
<textarea id="tr-input" placeholder="Enter text to translate..."></textarea>
<div class="input-row" style="margin-top:1rem">
  <div class="input-group"><label>From</label><select id="tr-from"></select></div>
  <div class="input-group"><label>To</label><select id="tr-to"></select></div>
</div>
<div class="btn-row"><button class="btn btn-primary" onclick="translateText()">Translate</button></div>
<div class="result-box" id="tr-output">Translation will appear here.</div>
<p class="muted">Best for short text. Translation quality depends on the public provider response and language pair.</p>
`,
    script: `
const trLanguages = [['en','English'],['es','Spanish'],['fr','French'],['de','German'],['ar','Arabic'],['ur','Urdu'],['hi','Hindi'],['pt','Portuguese'],['it','Italian'],['ru','Russian'],['zh-CN','Chinese (Simplified)']];
const trFrom = document.getElementById('tr-from');
const trTo = document.getElementById('tr-to');
trFrom.innerHTML = trLanguages.map(([code, name]) => '<option value="' + code + '">' + name + '</option>').join('');
trTo.innerHTML = trLanguages.map(([code, name]) => '<option value="' + code + '">' + name + '</option>').join('');
trFrom.value = 'en';
trTo.value = 'ur';
async function translateText(){
  const text = document.getElementById('tr-input').value.trim();
  const from = trFrom.value;
  const to = trTo.value;
  const out = document.getElementById('tr-output');
  if(!text){ out.textContent = 'Enter text to translate.'; return; }
  out.textContent = 'Translating...';
  try {
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + encodeURIComponent(from + '|' + to);
    const response = await fetch(url);
    const data = await response.json();
    if(!response.ok || !data.responseData || !data.responseData.translatedText){ throw new Error('No translation returned'); }
    out.textContent = data.responseData.translatedText;
  } catch (error) {
    out.textContent = 'Could not translate right now. Please try again in a moment.';
  }
}
`,
    infoCards: [
      {
        title: "Short explanation",
        body: [
          "This translator is designed for short practical text, not for perfect literary or legal translation. It is intended for quick comprehension, multilingual browsing, and fast wording checks.",
          "That makes it useful when you only need a rough translation quickly and do not want to open a larger translation platform first.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["It works best for short inputs where context is limited but the goal is quick understanding."],
        list: [
          "understanding a short message or caption",
          "checking a phrase before sending a reply",
          "reviewing simple travel or support text",
          "testing multilingual snippets for a website or product listing",
        ],
      },
      {
        title: "When not to rely on it",
        body: [
          "Do not use the output as the sole basis for contracts, legal notices, compliance statements, or medical instructions. Public translation services can miss nuance, dialect, and domain-specific meaning.",
        ],
      },
    ],
    faq: [
      { q: "Is this translator good for long articles?", a: "It is better for short text. Longer articles usually need stronger context handling and human review." },
      { q: "Can I use it for English to Urdu or Arabic?", a: "Yes. English to Urdu and English to Arabic are supported among the common language pairs on the page." },
      { q: "Why should legal or medical text be checked by a person?", a: "Because machine translation can miss nuance or technical meaning, which is risky in legal, medical, or compliance contexts." },
    ],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    category: "Text Tools",
    icon: "Case",
    h1: "Free Online Case Converter",
    title: "Case Converter | Uppercase, Lowercase, Title Case and Sentence Case",
    metaDescription:
      "Convert text to uppercase, lowercase, title case, or sentence case instantly with a free online case converter for copy cleanup and formatting.",
    keywords: ["case converter", "uppercase converter", "title case converter", "sentence case tool"],
    intro:
      "Convert text to uppercase, lowercase, title case, or sentence case instantly. This is useful for headings, product names, lists, social copy, and cleanup work after pasting text from another source.",
    toolHtml: `
<textarea id="ccase-input" placeholder="Paste or type text here..."></textarea>
<div class="btn-row">
  <button class="btn btn-primary" onclick="convertCase('upper')">UPPERCASE</button>
  <button class="btn btn-outline" onclick="convertCase('lower')">lowercase</button>
  <button class="btn btn-outline" onclick="convertCase('title')">Title Case</button>
  <button class="btn btn-outline" onclick="convertCase('sentence')">Sentence case</button>
</div>
<div class="result-box" id="ccase-output">Converted text will appear here.</div>
`,
    script: `
function toTitleCase(text){
  return text.toLowerCase().replace(/\\b\\w/g, (char) => char.toUpperCase());
}
function toSentenceCase(text){
  return text.toLowerCase().replace(/(^\\s*[a-z])|([.!?]\\s+[a-z])/g, (match) => match.toUpperCase());
}
function convertCase(mode){
  const text = document.getElementById('ccase-input').value;
  let output = '';
  if(mode === 'upper') output = text.toUpperCase();
  if(mode === 'lower') output = text.toLowerCase();
  if(mode === 'title') output = toTitleCase(text);
  if(mode === 'sentence') output = toSentenceCase(text);
  document.getElementById('ccase-output').textContent = output || 'Converted text will appear here.';
}
`,
    infoCards: [
      {
        title: "How the converter helps",
        body: [
          "Case conversion is a small but common formatting task. It saves time when you have copied text from email threads, spreadsheets, product feeds, or inconsistent source documents and need clean presentation quickly.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["Common uses range from content editing to commerce operations and simple cleanup work."],
        list: [
          "fixing spreadsheet exports with random capitalization",
          "turning a draft heading into title case",
          "cleaning product names or category labels",
          "normalizing notes before sharing them with another team member",
        ],
      },
      {
        title: "Short explanation and limitation",
        body: [
          "Title case and sentence case are rule-based approximations. Style-guide-specific handling for brand names, acronyms, and minor words may still need manual review.",
        ],
      },
    ],
    faq: [
      { q: "Does title case follow every editorial style guide?", a: "No. It uses a simple rule-based conversion, so style-guide edge cases may still need manual edits." },
      { q: "Can I paste a long block of text?", a: "Yes. The converter works on short snippets and longer text blocks in the same input area." },
      { q: "What is sentence case?", a: "Sentence case keeps text mostly lowercase and capitalizes the beginning of sentences." },
    ],
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    category: "Calculators",
    icon: "%",
    h1: "Free Percentage Calculator",
    title: "Percentage Calculator | Percent Increase, Decrease and Change",
    metaDescription:
      "Calculate percentages, increases, decreases, and percentage changes instantly with a free browser-based percentage calculator.",
    keywords: ["percentage calculator", "percent increase", "percent decrease", "percentage change tool"],
    intro:
      "Calculate percentages, percentage change, increases, and decreases without using a spreadsheet. The tool is useful for prices, grades, discounts, markups, salary changes, and simple business checks.",
    toolHtml: `
<div class="input-row">
  <div class="input-group"><label>Base number</label><input type="number" id="pc-base" value="1200"></div>
  <div class="input-group"><label>Percent</label><input type="number" id="pc-percent" value="15"></div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" onclick="percentageOf()">What is X% of Y?</button>
  <button class="btn btn-outline" onclick="increaseBy()">Increase by %</button>
  <button class="btn btn-outline" onclick="decreaseBy()">Decrease by %</button>
</div>
<div class="result-box" id="pc-output">Choose a percentage action.</div>
`,
    script: `
function getPercentageInputs(){
  return {
    base: parseFloat(document.getElementById('pc-base').value),
    percent: parseFloat(document.getElementById('pc-percent').value),
  };
}
function percentageOf(){
  const { base, percent } = getPercentageInputs();
  document.getElementById('pc-output').textContent = ((base * percent) / 100).toFixed(2) + ' is ' + percent + '% of ' + base + '.';
}
function increaseBy(){
  const { base, percent } = getPercentageInputs();
  document.getElementById('pc-output').textContent = 'Increasing ' + base + ' by ' + percent + '% gives ' + (base * (1 + percent / 100)).toFixed(2) + '.';
}
function decreaseBy(){
  const { base, percent } = getPercentageInputs();
  document.getElementById('pc-output').textContent = 'Decreasing ' + base + ' by ' + percent + '% gives ' + (base * (1 - percent / 100)).toFixed(2) + '.';
}
percentageOf();
`,
    infoCards: [
      {
        title: "What this percentage calculator does",
        body: [
          "The page helps with the most common percentage tasks: finding a percentage of a number, increasing a figure by a percentage, and decreasing a figure by a percentage.",
          "That covers many everyday scenarios without forcing you into a larger spreadsheet workflow.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["The calculator is suitable for both personal and business calculations."],
        list: [
          "working out a 15 percent discount",
          "checking a pay raise or price increase",
          "estimating tax or service charges before using a dedicated tax tool",
          "reviewing sales conversion goals or score improvements",
        ],
      },
      {
        title: "Short explanation",
        body: [
          "Percent means per hundred. The calculator handles the arithmetic for you, but it is still useful to know whether your task is a percentage-of calculation, an increase, or a decrease before you choose the action.",
        ],
      },
    ],
    faq: [
      { q: "What is the difference between percentage of and percentage increase?", a: "Percentage of finds part of a number. Percentage increase adds that proportion on top of the original amount." },
      { q: "Can I use decimals?", a: "Yes. Both the base number and the percentage field accept decimals." },
      { q: "Is this suitable for discounts?", a: "Yes. The decrease function is especially useful for discount checks." },
    ],
  },
  {
    slug: "date-calculator",
    name: "Date Calculator",
    category: "Calculators",
    icon: "Date",
    h1: "Free Date Calculator",
    title: "Date Calculator | Days Between Dates and Date Addition",
    metaDescription:
      "Calculate days between two dates or add days to a date online with a free browser date calculator for schedules, deadlines, and planning.",
    keywords: ["date calculator", "days between dates", "add days to date", "deadline calculator"],
    intro:
      "Calculate the number of days between two dates or add a number of days to a starting date. Useful for planning, deadlines, shipping estimates, travel, and project scheduling.",
    toolHtml: `
<div class="input-row">
  <div class="input-group"><label>Start date</label><input type="date" id="dc-start"></div>
  <div class="input-group"><label>End date</label><input type="date" id="dc-end"></div>
  <div class="input-group"><label>Days to add</label><input type="number" id="dc-add" value="30"></div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" onclick="daysBetween()">Days between dates</button>
  <button class="btn btn-outline" onclick="addDays()">Add days to start date</button>
</div>
<div class="result-box" id="dc-output">Pick dates to begin.</div>
`,
    script: `
const today = new Date().toISOString().slice(0,10);
document.getElementById('dc-start').value = today;
document.getElementById('dc-end').value = today;
function parseDate(id){
  const [year, month, day] = document.getElementById(id).value.split('-').map(Number);
  return new Date(year, month - 1, day);
}
function daysBetween(){
  const start = parseDate('dc-start');
  const end = parseDate('dc-end');
  const diff = Math.round((end - start) / 86400000);
  document.getElementById('dc-output').textContent = 'Difference: ' + diff + ' day(s).';
}
function addDays(){
  const start = parseDate('dc-start');
  const amount = parseInt(document.getElementById('dc-add').value || '0', 10);
  start.setDate(start.getDate() + amount);
  document.getElementById('dc-output').textContent = 'New date: ' + start.toDateString() + '.';
}
daysBetween();
`,
    infoCards: [
      {
        title: "How the date calculator is used",
        body: [
          "Date math comes up constantly in personal planning, HR, logistics, finance, and project work. This tool covers the two most common cases: measuring the gap between dates and adding days to a known starting point.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["A simple date calculator helps when you need a fast answer without setting up formulas elsewhere."],
        list: [
          "counting down to a deadline or event",
          "checking the number of days between order and delivery dates",
          "adding notice periods or trial durations",
          "planning leave, travel windows, or follow-up dates",
        ],
      },
      {
        title: "Short explanation",
        body: [
          "The calculator works in local time using structured date inputs, so it avoids the timezone parsing issues that often appear when dates are entered as free text.",
        ],
      },
    ],
    faq: [
      { q: "Does it calculate in calendar days?", a: "Yes. The difference shown is based on calendar-day separation between the two selected dates." },
      { q: "Can I add a negative number of days?", a: "Yes. A negative value moves backward from the chosen start date." },
      { q: "Why use date inputs instead of typing text?", a: "Structured date inputs avoid browser parsing inconsistencies and timezone mistakes from free-form text." },
    ],
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    category: "Calculators",
    icon: "Age",
    h1: "Free Online Age Calculator",
    title: "Age Calculator | Exact Age in Years, Months and Days",
    metaDescription:
      "Calculate exact age in years, months, and days with a free online age calculator for birthdays, forms, planning, and quick date checks.",
    keywords: ["age calculator", "calculate age online", "birthday age tool", "age in years months days"],
    intro:
      "Calculate exact age in years, months, and days from a date of birth. Useful for forms, birthdays, planning, eligibility checks, and quick personal date calculations.",
    toolHtml: `
<div class="input-row">
  <div class="input-group"><label>Date of birth</label><input type="date" id="age-dob"></div>
  <div class="input-group"><label>As of date</label><input type="date" id="age-asof"></div>
</div>
<div class="btn-row"><button class="btn btn-primary" onclick="calculateAge()">Calculate age</button></div>
<div class="result-box" id="age-output">Select dates to calculate age.</div>
`,
    script: `
const ageToday = new Date().toISOString().slice(0,10);
document.getElementById('age-asof').value = ageToday;
function parts(id){
  const [year, month, day] = document.getElementById(id).value.split('-').map(Number);
  return { year, month, day };
}
function calculateAge(){
  const dobValue = document.getElementById('age-dob').value;
  const asOfValue = document.getElementById('age-asof').value;
  if(!dobValue || !asOfValue){ document.getElementById('age-output').textContent = 'Select both dates first.'; return; }
  let { year: by, month: bm, day: bd } = parts('age-dob');
  let { year: ay, month: am, day: ad } = parts('age-asof');
  if(new Date(ay, am - 1, ad) < new Date(by, bm - 1, bd)){ document.getElementById('age-output').textContent = 'As-of date must be on or after date of birth.'; return; }
  let years = ay - by;
  let months = am - bm;
  let days = ad - bd;
  if(days < 0){
    const prevMonthDays = new Date(ay, am - 1, 0).getDate();
    days += prevMonthDays;
    months -= 1;
  }
  if(months < 0){
    months += 12;
    years -= 1;
  }
  document.getElementById('age-output').textContent = years + ' year(s), ' + months + ' month(s), and ' + days + ' day(s).';
}
`,
    infoCards: [
      {
        title: "What this age calculator does",
        body: [
          "The page computes age from a birth date to a selected as-of date using structured local date values. That avoids the timezone and browser parsing issues that often happen with free-text date inputs.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["The tool is useful anywhere an exact age is needed rather than a rough birth year subtraction."],
        list: [
          "checking form requirements",
          "working out exact age on a specific date",
          "planning birthday milestones",
          "reviewing eligibility cutoffs for classes or programs",
        ],
      },
      {
        title: "Short explanation",
        body: [
          "Exact age depends on whether the birthday has occurred yet in the selected year. That is why the calculator reports years, months, and days instead of only total years.",
        ],
      },
    ],
    faq: [
      { q: "Can I calculate age on a date in the future?", a: "Yes. Set the as-of date to any future date to see the age on that day." },
      { q: "Why not just subtract birth year from current year?", a: "Because exact age depends on whether the birthday has already occurred in the selected year." },
      { q: "Does this avoid timezone issues?", a: "Yes. It uses structured date inputs and local date math instead of parsing free-form date strings." },
    ],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    category: "Developer Tools",
    icon: "Key",
    h1: "Free Password Generator",
    title: "Password Generator | Create Strong Random Passwords Online",
    metaDescription:
      "Generate stronger random passwords online with adjustable length and character types using browser-based secure randomness.",
    keywords: ["password generator", "strong password generator", "random password tool", "secure password creator"],
    intro:
      "Generate stronger random passwords using browser-based cryptographic randomness. Choose the length and character sets you want, then copy the result into your password manager or account setup flow.",
    toolHtml: `
<div class="input-row">
  <div class="input-group"><label>Password length</label><input type="number" id="pw-length" min="8" max="64" value="16"></div>
  <div class="input-group"><label>Options</label>
    <div class="muted">Lowercase, uppercase, numbers, and symbols are included by default.</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" onclick="generatePassword()">Generate password</button>
  <button class="btn btn-outline" onclick="copyPassword()">Copy</button>
</div>
<div class="result-box" id="pw-output">Generate a password to begin.</div>
`,
    script: `
function securePick(chars){
  const max = 256 - (256 % chars.length);
  while(true){
    const value = new Uint8Array(1);
    crypto.getRandomValues(value);
    if(value[0] < max){ return chars[value[0] % chars.length]; }
  }
}
function generatePassword(){
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}?';
  const length = Math.max(8, Math.min(64, parseInt(document.getElementById('pw-length').value || '16', 10)));
  let password = '';
  for(let i = 0; i < length; i += 1){ password += securePick(chars); }
  document.getElementById('pw-output').textContent = password;
}
function copyPassword(){
  const text = document.getElementById('pw-output').textContent;
  if(!text || text === 'Generate a password to begin.') return;
  navigator.clipboard.writeText(text);
}
generatePassword();
`,
    infoCards: [
      {
        title: "Why this generator is useful",
        body: [
          "A dedicated password generator helps you create stronger, less predictable passwords than something chosen by memory or keyboard pattern. This version uses browser cryptographic randomness instead of basic Math.random output.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["Strong random passwords are most useful when paired with a password manager."],
        list: [
          "creating a unique password for a new account",
          "replacing reused passwords on older services",
          "generating a temporary credential before storing it securely",
          "creating random strings for non-public internal access where appropriate",
        ],
      },
      {
        title: "Short explanation and caution",
        body: [
          "The generator creates the password in your browser, but you still need safe storage habits. Copying a strong password into an insecure note or reusing it across sites defeats much of the benefit.",
        ],
      },
    ],
    faq: [
      { q: "Is this more secure than a basic random generator?", a: "Yes. This version uses browser cryptographic randomness rather than the weaker Math.random function." },
      { q: "Should I memorize the generated password?", a: "Usually no. Strong random passwords are best stored in a password manager." },
      { q: "Does the password leave my browser?", a: "The generation happens in the browser. What you do with the copied result afterward is up to you." },
    ],
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    category: "Other Tools",
    icon: "QR",
    h1: "Free QR Code Generator",
    title: "QR Code Generator | Create QR Codes for URLs, Text and Contact Details",
    metaDescription:
      "Generate QR codes online for URLs, plain text, contact details, and quick sharing with a free browser-based QR code generator.",
    keywords: ["qr code generator", "create qr code", "url qr code", "text qr code"],
    intro:
      "Generate QR codes for URLs, plain text, contact details, or other short strings directly in your browser. Useful for posters, menus, packaging, event material, and quick device-to-device sharing.",
    toolHtml: `
<textarea id="qr-input" placeholder="Paste a URL, text, email, phone number, or Wi-Fi string...">https://jjafri45.github.io/</textarea>
<div class="btn-row">
  <button class="btn btn-primary" onclick="makeQr()">Generate QR code</button>
  <button class="btn btn-outline" onclick="downloadQr()">Download image</button>
</div>
<div class="result-box" id="qr-wrap" style="text-align:center">QR code will appear here.</div>
<p class="muted">Tip: shorter text usually creates a cleaner QR code that scans more reliably at smaller print sizes.</p>
`,
    script: `
function makeQr(){
  const value = document.getElementById('qr-input').value.trim();
  const wrap = document.getElementById('qr-wrap');
  if(!value){ wrap.textContent = 'Enter text or a URL first.'; return; }
  const url = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + encodeURIComponent(value);
  wrap.innerHTML = '<img id="qr-image" src="' + url + '" alt="Generated QR code" width="220" height="220">';
}
function downloadQr(){
  const image = document.getElementById('qr-image');
  if(!image) return;
  const link = document.createElement('a');
  link.href = image.src;
  link.download = 'qrcode.png';
  link.click();
}
makeQr();
`,
    infoCards: [
      {
        title: "What this QR code generator is for",
        body: [
          "This page creates QR codes for common short payloads such as links, plain text, contact details, or app-store destinations. It is meant for quick practical use and testing.",
        ],
      },
      {
        title: "Examples and use cases",
        body: ["QR codes are most useful when you need a phone camera to open or capture something quickly."],
        list: [
          "printing a link on posters or packaging",
          "sharing menus or event details without typing a URL",
          "sending someone to a support page or payment link",
          "testing whether a short code scans cleanly before final production",
        ],
      },
      {
        title: "Short explanation",
        body: [
          "Longer strings create denser codes, which can be harder to scan at small sizes or on low-quality prints. If scanning reliability matters, keep the content short and test it on a real phone camera.",
        ],
      },
    ],
    faq: [
      { q: "Can I use this for website URLs?", a: "Yes. URLs are one of the most common and reliable uses for QR codes." },
      { q: "Why do shorter QR payloads scan better?", a: "Because shorter data creates a less dense code, which is easier for cameras to resolve at smaller sizes." },
      { q: "Can I download the generated code?", a: "Yes. After generation you can use the download button to save the image." },
    ],
  },
];

const newTools = [
  {
    slug: "line-sorter", name: "Line Sorter", category: "Text Tools", icon: "Sort",
    title: "Line Sorter | Sort Text Lines Alphabetically or Uniquely",
    metaDescription: "Sort lines alphabetically, reverse them, or remove duplicates with a free online line sorter for lists, tags, and exports.",
    keywords: ["line sorter", "sort text lines", "unique lines", "alphabetize list"],
    intro: "Sort text lines alphabetically, reverse the order, or remove duplicates. Useful for keyword lists, exports, email lists, and copied blocks of text.",
    toolHtml: `<textarea id="ls-input" placeholder="Enter one item per line..."></textarea><div class="btn-row"><button class="btn btn-primary" onclick="sortLines('asc')">Sort A-Z</button><button class="btn btn-outline" onclick="sortLines('desc')">Sort Z-A</button><button class="btn btn-outline" onclick="sortLines('unique')">Unique only</button></div><div class="result-box" id="ls-output">Sorted lines will appear here.</div>`,
    script: `function sortLines(mode){const lines=document.getElementById('ls-input').value.split(/\\r?\\n/).filter(Boolean);let out=[...lines];if(mode==='asc')out.sort((a,b)=>a.localeCompare(b));if(mode==='desc')out.sort((a,b)=>b.localeCompare(a));if(mode==='unique')out=[...new Set(lines)];document.getElementById('ls-output').textContent=out.join('\\n');}`,
    infoCards: [{ title: "Use cases", body: ["Line sorting helps when you are cleaning raw text lists, comparing exports, or preparing structured input for another tool."], list: ["sorting keyword sets", "cleaning tag lists", "removing duplicate entries", "preparing simple imports"] }],
  },
  {
    slug: "slug-generator", name: "Slug Generator", category: "Developer Tools", icon: "Slug",
    title: "Slug Generator | Create Clean URL Slugs from Text",
    metaDescription: "Create clean URL slugs from headings or phrases with a free online slug generator for blog posts, landing pages, and product pages.",
    keywords: ["slug generator", "url slug creator", "seo slug tool", "clean url text"],
    intro: "Turn headings or phrases into clean URL slugs for blog posts, product pages, help articles, and landing pages.",
    toolHtml: `<textarea id="slug-input" placeholder="Enter a title or phrase..."></textarea><div class="btn-row"><button class="btn btn-primary" onclick="makeSlug()">Generate slug</button></div><div class="result-box" id="slug-output">Slug will appear here.</div>`,
    script: `function makeSlug(){const text=document.getElementById('slug-input').value.toLowerCase().normalize('NFKD').replace(/[\\u0300-\\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');document.getElementById('slug-output').textContent=text||'Slug will appear here.';}`,
    infoCards: [{ title: "Examples and use cases", body: ["A slug generator is helpful when you want readable URLs that stay consistent across content systems."], list: ["blog post URLs", "product pages", "documentation pages", "campaign landing pages"] }],
  },
  {
    slug: "regex-tester", name: "Regex Tester", category: "Developer Tools", icon: "RegEx",
    title: "Regex Tester | Test Regular Expressions Online",
    metaDescription: "Test regular expressions online against sample text with a free regex tester for developers, analysts, and data cleanup work.",
    keywords: ["regex tester", "regular expression tester", "pattern matching tool", "developer regex"],
    intro: "Test regular expressions against sample text in the browser and quickly see the matches that your pattern produces.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Pattern</label><input type="text" id="re-pattern" value="\\\\b[a-zA-Z]{4}\\\\b"></div><div class="input-group"><label>Flags</label><input type="text" id="re-flags" value="g"></div></div><textarea id="re-input">This sample text lets you test four word terms and similar patterns.</textarea><div class="btn-row"><button class="btn btn-primary" onclick="testRegex()">Test regex</button></div><div class="result-box" id="re-output">Matches will appear here.</div>`,
    script: `function testRegex(){try{const pattern=document.getElementById('re-pattern').value;const flags=document.getElementById('re-flags').value;const text=document.getElementById('re-input').value;const regex=new RegExp(pattern,flags);const matches=text.match(regex)||[];document.getElementById('re-output').textContent=matches.length?matches.join('\\n'):'No matches found.';}catch(error){document.getElementById('re-output').textContent='Invalid regular expression.';}}`,
    infoCards: [{ title: "Use cases", body: ["Regex testing helps when you are validating patterns before using them in code, search, or cleanup workflows."], list: ["log filtering", "data cleanup", "form validation ideas", "quick pattern experiments"] }],
  },
  {
    slug: "markdown-preview", name: "Markdown Preview", category: "Developer Tools", icon: "MD",
    title: "Markdown Preview | Write Markdown and Preview HTML Output",
    metaDescription: "Write Markdown and preview the rendered output with a free online markdown preview tool for notes, docs, and README drafts.",
    keywords: ["markdown preview", "markdown editor", "readme preview", "markdown tool"],
    intro: "Write basic Markdown and preview the rendered output immediately. Useful for README drafts, docs, notes, and short help content.",
    toolHtml: `<textarea id="md-input"># Sample heading\n\nWrite **bold** text, *italic* text, and lists.\n\n- item one\n- item two</textarea><div class="btn-row"><button class="btn btn-primary" onclick="renderMarkdown()">Preview markdown</button></div><div class="result-box" id="md-output"></div>`,
    script: `function escapeHtml(text){return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}function renderMarkdown(){let text=escapeHtml(document.getElementById('md-input').value);text=text.replace(/^###\\s(.+)$/gm,'<h3>$1</h3>').replace(/^##\\s(.+)$/gm,'<h2>$1</h2>').replace(/^#\\s(.+)$/gm,'<h1>$1</h1>').replace(/\\*\\*(.*?)\\*\\*/g,'<strong>$1</strong>').replace(/\\*(.*?)\\*/g,'<em>$1</em>').replace(/^-\\s(.+)$/gm,'<li>$1</li>');text=text.replace(/(<li>.*<\\/li>)/gs,'<ul>$1</ul>').replace(/\\n\\n/g,'<br><br>');document.getElementById('md-output').innerHTML=text;}renderMarkdown();`,
    infoCards: [{ title: "Use cases", body: ["Markdown preview is useful for quick drafts when you want to see structure before moving content elsewhere."], list: ["README drafting", "knowledge-base notes", "simple docs", "formatted team updates"] }],
  },
  {
    slug: "html-escape", name: "HTML Escape Tool", category: "Developer Tools", icon: "HTML",
    title: "HTML Escape Tool | Escape and Unescape HTML Characters",
    metaDescription: "Escape and unescape HTML special characters online with a free browser tool for code snippets, templates, and docs.",
    keywords: ["html escape", "html unescape", "encode html", "developer tool html"],
    intro: "Escape and unescape HTML special characters for code snippets, documentation, templates, and CMS inputs.",
    toolHtml: `<textarea id="html-input" placeholder="Enter HTML or plain text..."><div>Hello & welcome</div></textarea><div class="btn-row"><button class="btn btn-primary" onclick="escapeHtmlTool()">Escape HTML</button><button class="btn btn-outline" onclick="unescapeHtmlTool()">Unescape HTML</button></div><div class="result-box" id="html-output">Output will appear here.</div>`,
    script: `function escapeHtmlTool(){const text=document.getElementById('html-input').value;document.getElementById('html-output').textContent=text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}function unescapeHtmlTool(){const text=document.getElementById('html-input').value;const area=document.createElement('textarea');area.innerHTML=text;document.getElementById('html-output').textContent=area.value;}escapeHtmlTool();`,
    infoCards: [{ title: "Use cases", body: ["Escaping HTML is helpful when you need to show markup as text rather than render it in the browser."], list: ["documentation snippets", "CMS inputs", "teaching examples", "template debugging"] }],
  },
  {
    slug: "csv-to-json", name: "CSV to JSON", category: "Developer Tools", icon: "CSV",
    title: "CSV to JSON | Convert Comma-Separated Data to JSON Online",
    metaDescription: "Convert CSV data to JSON online with a free tool for lightweight data cleanup, exports, and developer workflows.",
    keywords: ["csv to json", "convert csv json", "data converter", "developer csv tool"],
    intro: "Convert simple comma-separated data into JSON in the browser. Useful for quick data preparation and developer testing.",
    toolHtml: `<textarea id="csv-input">name,email\nAisha,aisha@example.com\nBilal,bilal@example.com</textarea><div class="btn-row"><button class="btn btn-primary" onclick="csvToJson()">Convert to JSON</button></div><div class="result-box" id="csv-output">JSON output will appear here.</div>`,
    script: `function csvToJson(){const rows=document.getElementById('csv-input').value.trim().split(/\\r?\\n/);if(rows.length<2){document.getElementById('csv-output').textContent='Enter a header row and at least one data row.';return;}const headers=rows[0].split(',').map((v)=>v.trim());const data=rows.slice(1).map((row)=>{const cols=row.split(',');const obj={};headers.forEach((header,index)=>obj[header]=cols[index]?.trim()||'');return obj;});document.getElementById('csv-output').textContent=JSON.stringify(data,null,2);}csvToJson();`,
    infoCards: [{ title: "Use cases", body: ["This converter is helpful when you need a quick JSON shape from a simple CSV export without opening a larger data tool."], list: ["API mock data", "simple imports", "sample datasets", "developer testing"] }],
  },
  {
    slug: "json-to-csv", name: "JSON to CSV", category: "Developer Tools", icon: "JSON",
    title: "JSON to CSV | Convert JSON Arrays to CSV Online",
    metaDescription: "Convert JSON arrays to CSV online with a free browser tool for exports, reports, and developer workflow checks.",
    keywords: ["json to csv", "convert json csv", "json exporter", "developer data tool"],
    intro: "Convert a simple JSON array into CSV so you can export or share it in spreadsheet-friendly form.",
    toolHtml: `<textarea id="jcsv-input">[\n  {"name":"Aisha","email":"aisha@example.com"},\n  {"name":"Bilal","email":"bilal@example.com"}\n]</textarea><div class="btn-row"><button class="btn btn-primary" onclick="jsonToCsv()">Convert to CSV</button></div><div class="result-box" id="jcsv-output">CSV output will appear here.</div>`,
    script: `function jsonToCsv(){try{const data=JSON.parse(document.getElementById('jcsv-input').value);if(!Array.isArray(data)||!data.length){throw new Error('Input must be a non-empty JSON array.');}const headers=Object.keys(data[0]);const rows=[headers.join(',')].concat(data.map((row)=>headers.map((header)=>JSON.stringify(row[header]??'')).join(',')));document.getElementById('jcsv-output').textContent=rows.join('\\n');}catch(error){document.getElementById('jcsv-output').textContent='Enter a valid JSON array.';}}jsonToCsv();`,
    infoCards: [{ title: "Use cases", body: ["JSON to CSV conversion is useful when moving small developer datasets into spreadsheet-friendly form."], list: ["simple exports", "report drafts", "spreadsheet review", "mock data conversion"] }],
  },
  {
    slug: "average-calculator", name: "Average Calculator", category: "Calculators", icon: "Avg",
    title: "Average Calculator | Find the Mean of a List of Numbers",
    metaDescription: "Find the mean average of a list of numbers online with a free browser-based average calculator for grades, prices, and metrics.",
    keywords: ["average calculator", "mean calculator", "list average", "number average tool"],
    intro: "Calculate the average of a list of numbers quickly. Useful for grades, prices, scores, times, and lightweight reporting checks.",
    toolHtml: `<textarea id="avg-input">10, 20, 30, 40</textarea><div class="btn-row"><button class="btn btn-primary" onclick="calcAverage()">Calculate average</button></div><div class="result-box" id="avg-output">Average will appear here.</div>`,
    script: `function calcAverage(){const nums=document.getElementById('avg-input').value.split(/[\\s,]+/).map(Number).filter((n)=>Number.isFinite(n));if(!nums.length){document.getElementById('avg-output').textContent='Enter at least one valid number.';return;}const sum=nums.reduce((a,b)=>a+b,0);document.getElementById('avg-output').textContent='Average: '+(sum/nums.length).toFixed(4)+' | Count: '+nums.length;}calcAverage();`,
    infoCards: [{ title: "Use cases", body: ["Average calculations appear in grades, pricing, performance summaries, and quick metric checks."], list: ["test scores", "monthly prices", "daily metrics", "simple KPI reviews"] }],
  },
  {
    slug: "ratio-calculator", name: "Ratio Calculator", category: "Calculators", icon: "Ratio",
    title: "Ratio Calculator | Simplify and Compare Number Ratios",
    metaDescription: "Simplify and compare number ratios online with a free ratio calculator for recipes, business figures, and scaling tasks.",
    keywords: ["ratio calculator", "simplify ratio", "compare ratio", "scale ratio tool"],
    intro: "Simplify ratios and compare two values without doing the manual division yourself. Useful for recipes, scaling, reporting, and business comparisons.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>First value</label><input type="number" id="ratio-a" value="1920"></div><div class="input-group"><label>Second value</label><input type="number" id="ratio-b" value="1080"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="calcRatio()">Simplify ratio</button></div><div class="result-box" id="ratio-output">Ratio output will appear here.</div>`,
    script: `function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;}function calcRatio(){const a=parseFloat(document.getElementById('ratio-a').value);const b=parseFloat(document.getElementById('ratio-b').value);if(!Number.isFinite(a)||!Number.isFinite(b)||b===0){document.getElementById('ratio-output').textContent='Enter valid numbers and keep the second value non-zero.';return;}const factor=gcd(a,b);document.getElementById('ratio-output').textContent='Simplified ratio: '+(a/factor)+':'+(b/factor)+' | Decimal ratio: '+(a/b).toFixed(4);}calcRatio();`,
    infoCards: [{ title: "Use cases", body: ["Ratio simplification is useful when comparing values or scaling numbers into a clearer form."], list: ["screen sizes", "recipe scaling", "budget comparisons", "performance ratios"] }],
  },
  {
    slug: "margin-calculator", name: "Margin Calculator", category: "Finance Tools", icon: "Margin",
    title: "Margin Calculator | Calculate Profit Margin and Markup",
    metaDescription: "Calculate profit margin and markup online with a free finance tool for product pricing, offers, and sales checks.",
    keywords: ["margin calculator", "markup calculator", "profit margin tool", "pricing calculator"],
    intro: "Calculate gross margin and markup from cost and selling price. Useful for e-commerce, freelancing, retail pricing, and proposal work.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Cost</label><input type="number" id="margin-cost" value="50"></div><div class="input-group"><label>Selling price</label><input type="number" id="margin-price" value="80"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="calcMargin()">Calculate margin</button></div><div class="result-box" id="margin-output">Margin output will appear here.</div>`,
    script: `function calcMargin(){const cost=parseFloat(document.getElementById('margin-cost').value);const price=parseFloat(document.getElementById('margin-price').value);if(!Number.isFinite(cost)||!Number.isFinite(price)||price<=0){document.getElementById('margin-output').textContent='Enter valid positive numbers.';return;}const profit=price-cost;const margin=(profit/price)*100;const markup=(profit/cost)*100;document.getElementById('margin-output').textContent='Profit: '+profit.toFixed(2)+' | Margin: '+margin.toFixed(2)+'% | Markup: '+markup.toFixed(2)+'%';}calcMargin();`,
    infoCards: [{ title: "Use cases", body: ["Margin calculations are common in product pricing, offers, and sales decisions."], list: ["pricing products", "checking promotional offers", "freelance proposal margins", "gross profit reviews"] }],
  },
  {
    slug: "break-even-calculator", name: "Break-even Calculator", category: "Finance Tools", icon: "BE",
    title: "Break-even Calculator | Units Needed to Cover Fixed Costs",
    metaDescription: "Calculate break-even units and revenue online with a free finance tool for pricing, launch plans, and small-business checks.",
    keywords: ["break-even calculator", "breakeven units", "break even revenue", "business pricing tool"],
    intro: "Estimate how many units you need to sell to cover fixed costs based on selling price and variable cost per unit.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Fixed costs</label><input type="number" id="be-fixed" value="5000"></div><div class="input-group"><label>Price per unit</label><input type="number" id="be-price" value="25"></div><div class="input-group"><label>Variable cost per unit</label><input type="number" id="be-variable" value="10"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="calcBreakEven()">Calculate break-even</button></div><div class="result-box" id="be-output">Break-even output will appear here.</div>`,
    script: `function calcBreakEven(){const fixed=parseFloat(document.getElementById('be-fixed').value);const price=parseFloat(document.getElementById('be-price').value);const variable=parseFloat(document.getElementById('be-variable').value);if(!Number.isFinite(fixed)||!Number.isFinite(price)||!Number.isFinite(variable)||price<=variable){document.getElementById('be-output').textContent='Price per unit must be greater than variable cost.';return;}const units=Math.ceil(fixed/(price-variable));document.getElementById('be-output').textContent='Break-even units: '+units+' | Break-even revenue: '+(units*price).toFixed(2);}calcBreakEven();`,
    infoCards: [{ title: "Use cases", body: ["Break-even math is helpful before launching a product, offer, or paid campaign."], list: ["new product ideas", "small-business planning", "offer reviews", "campaign target setting"] }],
  },
  {
    slug: "savings-goal-calculator", name: "Savings Goal Calculator", category: "Finance Tools", icon: "Save",
    title: "Savings Goal Calculator | Monthly Savings Needed for a Target",
    metaDescription: "Calculate how much you need to save each month to reach a target amount with a free browser-based savings goal calculator.",
    keywords: ["savings goal calculator", "monthly savings tool", "save for target", "budget savings calculator"],
    intro: "Estimate how much you need to save each month to reach a target amount over a chosen number of months.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Target amount</label><input type="number" id="sg-target" value="120000"></div><div class="input-group"><label>Current savings</label><input type="number" id="sg-current" value="10000"></div><div class="input-group"><label>Months</label><input type="number" id="sg-months" value="12"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="calcSavingsGoal()">Calculate monthly savings</button></div><div class="result-box" id="sg-output">Savings plan output will appear here.</div>`,
    script: `function calcSavingsGoal(){const target=parseFloat(document.getElementById('sg-target').value);const current=parseFloat(document.getElementById('sg-current').value);const months=parseFloat(document.getElementById('sg-months').value);if(!Number.isFinite(target)||!Number.isFinite(current)||!Number.isFinite(months)||months<=0){document.getElementById('sg-output').textContent='Enter valid numbers.';return;}const remaining=Math.max(0,target-current);document.getElementById('sg-output').textContent='Needed each month: '+(remaining/months).toFixed(2)+' | Remaining target: '+remaining.toFixed(2);}calcSavingsGoal();`,
    infoCards: [{ title: "Use cases", body: ["This calculator is helpful for budgeting toward a purchase, emergency fund, or short-term savings target."], list: ["emergency funds", "travel saving", "device purchases", "annual expense planning"] }],
  },
  {
    slug: "loan-affordability-calculator", name: "Loan Affordability Calculator", category: "Finance Tools", icon: "Loan",
    title: "Loan Affordability Calculator | Estimate a Comfortable Monthly Payment",
    metaDescription: "Estimate a comfortable loan payment from income and expense inputs with a free affordability calculator for quick planning.",
    keywords: ["loan affordability calculator", "affordable monthly payment", "loan planning tool", "budget loan estimate"],
    intro: "Estimate a loan payment range that may fit your budget by comparing monthly income, monthly expenses, and a comfort buffer.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Monthly income</label><input type="number" id="la-income" value="3000"></div><div class="input-group"><label>Monthly expenses</label><input type="number" id="la-expenses" value="1800"></div><div class="input-group"><label>Safety buffer</label><input type="number" id="la-buffer" value="300"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="calcAffordability()">Estimate affordable payment</button></div><div class="result-box" id="la-output">Affordability estimate will appear here.</div>`,
    script: `function calcAffordability(){const income=parseFloat(document.getElementById('la-income').value);const expenses=parseFloat(document.getElementById('la-expenses').value);const buffer=parseFloat(document.getElementById('la-buffer').value);if(!Number.isFinite(income)||!Number.isFinite(expenses)||!Number.isFinite(buffer)){document.getElementById('la-output').textContent='Enter valid numbers.';return;}const room=Math.max(0,income-expenses-buffer);document.getElementById('la-output').textContent='Estimated comfortable monthly payment: '+room.toFixed(2)+'. Use this only as a planning guide, not financial advice.';}calcAffordability();`,
    infoCards: [{ title: "Use cases", body: ["This tool is a first-pass planning aid before you move to a proper lender calculation or detailed personal budget."], list: ["car planning", "appliance financing", "budget sanity checks", "pre-lender preparation"] }],
  },
  {
    slug: "timestamp-converter", name: "Timestamp Converter", category: "Developer Tools", icon: "Time",
    title: "Timestamp Converter | Convert Unix Timestamps and Readable Dates",
    metaDescription: "Convert Unix timestamps to readable dates and convert dates back to Unix time with a free online timestamp converter.",
    keywords: ["timestamp converter", "unix timestamp", "epoch converter", "date to unix time"],
    intro: "Convert Unix timestamps to readable dates and convert dates back to Unix time directly in the browser.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Unix timestamp</label><input type="number" id="ts-unix" value="1704067200"></div><div class="input-group"><label>Readable date/time</label><input type="text" id="ts-date" value="2024-01-01T00:00:00Z"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="unixToDate()">Unix to date</button><button class="btn btn-outline" onclick="dateToUnix()">Date to Unix</button></div><div class="result-box" id="ts-output">Timestamp output will appear here.</div>`,
    script: `function unixToDate(){const raw=Number(document.getElementById('ts-unix').value);if(!Number.isFinite(raw)){document.getElementById('ts-output').textContent='Enter a valid Unix timestamp.';return;}const millis=raw>9999999999?raw:raw*1000;document.getElementById('ts-output').textContent=new Date(millis).toISOString();}function dateToUnix(){const value=document.getElementById('ts-date').value.trim();const stamp=Date.parse(value);if(Number.isNaN(stamp)){document.getElementById('ts-output').textContent='Enter a valid date/time string.';return;}document.getElementById('ts-output').textContent='Unix seconds: '+Math.floor(stamp/1000)+' | Unix milliseconds: '+stamp;}unixToDate();`,
    infoCards: [{ title: "Use cases", body: ["Timestamp conversion is helpful in debugging, API work, analytics checks, and log reviews."], list: ["API debugging", "log analysis", "analytics checks", "developer support work"] }],
  },
  {
    slug: "text-diff-checker", name: "Text Diff Checker", category: "Text Tools", icon: "Diff",
    title: "Text Diff Checker | Compare Two Text Blocks Online",
    metaDescription: "Compare two text blocks online with a free text diff checker that highlights line-by-line differences and exact mismatches.",
    keywords: ["text diff checker", "compare text online", "line by line compare", "copy comparison tool"],
    intro: "Compare two text blocks quickly and see whether they match exactly, differ by line count, or contain unique lines on one side.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>Text A</label><textarea id="td-left">Line one\nLine two\nLine three</textarea></div><div class="input-group"><label>Text B</label><textarea id="td-right">Line one\nLine 2\nLine three</textarea></div></div><div class="btn-row"><button class="btn btn-primary" onclick="compareText()">Compare text</button></div><div class="result-box" id="td-output">Comparison output will appear here.</div>`,
    script: `function compareText(){const left=document.getElementById('td-left').value.split(/\\r?\\n/);const right=document.getElementById('td-right').value.split(/\\r?\\n/);const max=Math.max(left.length,right.length);const diffs=[];for(let i=0;i<max;i+=1){if((left[i]||'')!==(right[i]||'')){diffs.push('Line '+(i+1)+': ['+(left[i]||'')+'] vs ['+(right[i]||'')+']');}}document.getElementById('td-output').textContent=diffs.length?diffs.join('\\n'):'Texts match exactly.';}compareText();`,
    infoCards: [{ title: "Use cases", body: ["Text comparison is useful when checking revisions, exports, configuration snippets, or manually edited lists."], list: ["copy review", "list comparison", "config checks", "content QA"] }],
  },
  {
    slug: "uuid-generator", name: "UUID Generator", category: "Developer Tools", icon: "UUID",
    title: "UUID Generator | Create Random UUIDs Online",
    metaDescription: "Generate random UUIDs online with a free browser tool for testing, identifiers, and developer workflow support.",
    keywords: ["uuid generator", "random uuid", "developer id generator", "uuid online"],
    intro: "Generate random UUIDs quickly in your browser for testing, sample data, and lightweight identifier generation.",
    toolHtml: `<div class="input-row"><div class="input-group"><label>How many UUIDs?</label><input type="number" id="uuid-count" value="5" min="1" max="50"></div></div><div class="btn-row"><button class="btn btn-primary" onclick="generateUuids()">Generate UUIDs</button></div><div class="result-box" id="uuid-output">UUID output will appear here.</div>`,
    script: `function generateUuids(){const count=Math.max(1,Math.min(50,parseInt(document.getElementById('uuid-count').value||'5',10)));const values=[];for(let i=0;i<count;i+=1){values.push(crypto.randomUUID());}document.getElementById('uuid-output').textContent=values.join('\\n');}generateUuids();`,
    infoCards: [{ title: "Use cases", body: ["UUID generation is helpful in testing, prototyping, and creating sample identifiers without building a custom script first."], list: ["sample data", "test identifiers", "mock API payloads", "quick dev tasks"] }],
  },
];

const allGenerated = [...topTools, ...newTools];

for (const page of allGenerated) {
  fs.writeFileSync(path.join(root, `${page.slug}.html`), buildPage(page, allGenerated));
}

function updateIndex() {
  const indexPath = path.join(root, "index.html");
  let indexHtml = fs.readFileSync(indexPath, "utf8");
  const toolEntries = allGenerated.map((page) => ({
    id: page.slug,
    cat: page.category,
    icon: page.icon,
    name: page.name,
    desc: page.intro.length > 100 ? page.intro.slice(0, 97) + "..." : page.intro,
  }));
  const match = indexHtml.match(/const TOOLS=(\[.*?\]);/s);
  if (match) {
    const vm = require("vm");
    const existingTools = vm.runInNewContext(match[1]).map((tool) => ({
      ...tool,
      icon: /[^\x20-\x7E]/.test(String(tool.icon || "")) ? initials(tool.name || tool.id || "T") : tool.icon,
    }));
    const merged = [...existingTools.filter((tool) => !toolEntries.find((entry) => entry.id === tool.id)), ...toolEntries];
    indexHtml = indexHtml.replace(/const TOOLS=\[.*?\];/s, `const TOOLS=${JSON.stringify(merged)};`);
    indexHtml = indexHtml.replace(
      /<p>Use \d+ browser-based tools[\s\S]*?<\/p>/,
      `<p>Use ${merged.length} browser-based tools for text work, math, conversion, finance, and lightweight developer tasks. Each tool has its own page, direct URL, and clear supporting policies.</p>`
    );
  }
  fs.writeFileSync(indexPath, indexHtml);
}

function buildSitemap() {
  const pages = fs
    .readdirSync(root)
    .filter((name) => name.endsWith(".html") && name !== "404.html")
    .sort();
  const priority = (name) => (["index.html"].includes(name) ? "1.0" : ["about.html", "contact.html", "privacy.html", "terms.html", "advertising-disclosure.html"].includes(name) ? "0.6" : "0.8");
  const changefreq = (name) => (name === "index.html" ? "weekly" : ["about.html", "contact.html", "privacy.html", "terms.html", "advertising-disclosure.html"].includes(name) ? "yearly" : "monthly");
  const urls = pages
    .map((name) => {
      const loc = name === "index.html" ? "https://jjafri45.github.io/" : `https://jjafri45.github.io/${name}`;
      return `  <url><loc>${loc}</loc><priority>${priority(name)}</priority><changefreq>${changefreq(name)}</changefreq></url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
}

updateIndex();
buildSitemap();

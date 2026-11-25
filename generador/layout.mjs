import { secciones, descargas, contacto, REVISION, PROTOTIPO } from "./contenido.mjs";

// ---------- Utilidades ----------
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const pad = (n) => String(n).padStart(2, "0");
export const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ---------- Íconos (trazos simples, 24×24) ----------
const svg = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true" ${extra}>${d}</svg>`;
export const icon = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  arrowLeft: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  arrowUp: svg('<path d="M12 19V5M6 11l6-6 6 6"/>'),
  ext: svg('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>', 'class="i-ext"'),
  download: svg('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
  file: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
  whatsapp: svg('<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z"/><path d="M9 8.5c.3-.4.9-.3 1.1.1l.6 1.3c.1.3 0 .6-.2.8l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.2-.2.5-.3.8-.2l1.3.6c.4.2.5.8.1 1.1l-.5.5c-.5.5-1.2.7-1.9.4a7.2 7.2 0 0 1-4.3-4.3c-.3-.7-.1-1.4.4-1.9z"/>'),
  menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  heart: svg('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M8.5 11h2l1-2 1.5 4 1-2h1.5"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  alert: svg('<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>'),
  compass: svg('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'),
  users: svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 20a6.5 6.5 0 0 0-3-5.5"/>'),
  pin: svg('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  shield: svg('<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/>'),
  clipboard: svg('<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/>'),
};

// ---------- Logo ----------
const logo = (prefix) => `<span class="brand__mark"><img src="${prefix}assets/img/brand-tree.svg" alt="" width="38" height="38"></span>`;

// ---------- Encabezado ----------
function header(active, prefix) {
  const links = secciones.map((s) =>
    `<a href="${prefix}${s.file}"${active === s.id ? ' aria-current="page"' : ""}>${esc(s.nav)}</a>`).join("");
  return `
<a class="skip-link" href="#contenido">Saltar al contenido</a>
<div class="utility">
  <div class="container">
    <p class="utility__note" style="margin:0">${icon.info}<span>Guía educativa<span class="long">: no reemplaza la consulta médica</span></span></p>
    <div class="utility__tools">
      <a class="utility__cta" href="${prefix}hoja-de-ruta.html"${active === "hoja-de-ruta" ? ' aria-current="page"' : ""}>¿Recién diagnosticado? <span class="long">Tu hoja de ruta</span></a>
      <div class="textsize" role="group" aria-label="Tamaño de letra"><span>Letra</span>
        <button type="button" data-textsize="" aria-pressed="true" aria-label="Tamaño normal">A</button>
        <button type="button" data-textsize="text-lg" aria-pressed="false" aria-label="Letra más grande">A</button>
        <button type="button" data-textsize="text-xl" aria-pressed="false" aria-label="Letra muy grande">A</button>
      </div>
      <a href="mailto:${contacto.email}">${contacto.email}</a>
    </div>
  </div>
</div>
<header class="site-header">
  <div class="container">
    <a class="brand" href="${prefix}index.html" aria-label="Parkinson Chile, ir al inicio">
      ${logo(prefix)}
      <span class="brand__text"><strong>PARKINSON CHILE</strong><small>Entender más. Vivir mejor.</small></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-principal">
      <span class="ico-open">${icon.menu}</span><span class="ico-close" style="display:none">${icon.close}</span><span class="label">Menú</span>
    </button>
    <nav class="main-nav" id="menu-principal" aria-label="Menú principal">
      ${links}
      <a class="btn btn--primary" href="${prefix}descargas.html"${active === "descargas" ? ' aria-current="page"' : ""}>${icon.download}Descargas</a>
    </nav>
  </div>
</header>`;
}

// ---------- Pie ----------
function footer(prefix) {
  const secs = secciones.map((s) => `<li><a href="${prefix}${s.file}">${esc(s.label)}</a></li>`).join("");
  const dls = descargas.filter((d) => d.destacado).map((d) => `<li><a href="${prefix}descargas/${d.id}.pdf" download>${esc(d.title)} (PDF)</a></li>`).join("");
  return `
<aside class="disclaimer" aria-label="Aviso importante">
  <div class="container">${icon.heart}<p><strong>Parkinson Chile es una guía educativa.</strong> La información de este sitio no reemplaza la evaluación, el diagnóstico ni las indicaciones de un médico u otro profesional de la salud.</p></div>
</aside>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">${logo(prefix)}<div><strong>PARKINSON CHILE</strong><span>Entender más. Vivir mejor.</span></div></div>
        <p>Guía informativa, independiente y sin fines de lucro para personas que viven con Parkinson en Chile, sus familias y quienes las acompañan.</p>
      </div>
      <div><h3>La guía</h3><ul><li><a href="${prefix}hoja-de-ruta.html">Hoja de ruta: recién diagnosticados</a></li>${secs}</ul></div>
      <div><h3>Descargas</h3><ul>${dls}<li><a href="${prefix}descargas.html">Ver todas las descargas</a></li></ul></div>
      <div><h3>Contacto</h3><ul>
        <li><a href="mailto:${contacto.email}">${contacto.email}</a></li>
        <li><a href="tel:${contacto.telefonoHref}">${contacto.telefono}</a></li>
        <li><a href="${contacto.whatsapp}" target="_blank" rel="noopener">Escribir por WhatsApp</a></li>
        <li><a href="${prefix}quienes-somos.html#contacto">Formas de colaborar</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Parkinson Chile · parkinsonchile.org</span>
      <span>Información revisada en ${REVISION}. Verifica siempre los datos vigentes con la institución responsable.</span>
    </div>
  </div>
</footer>
<a class="back-top" href="#contenido" aria-label="Volver arriba">${icon.arrowUp}</a>`;
}

// ---------- Documento completo ----------
export function page({ title, description, active, body, prefix = "" }) {
  const fullTitle = title ? `${title} | Parkinson Chile` : "Parkinson Chile — Guía del Parkinson en Chile";
  return `<!doctype html>
<html lang="es-CL">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#075b44">${PROTOTIPO ? '\n<meta name="robots" content="noindex, nofollow">' : ""}
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CL">
<link rel="icon" href="${prefix}assets/img/brand-tree.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${prefix}css/site.css">
<script>try{var t=localStorage.getItem("pc-textsize");if(t)document.documentElement.classList.add(t)}catch(e){}</script>
</head>
<body>
${header(active, prefix)}
<main id="contenido" tabindex="-1">
${body}
</main>
${footer(prefix)}
<script src="${prefix}js/site.js" defer></script>
</body>
</html>
`;
}

// ---------- Bloques reutilizables ----------
export function pageHero({ crumbs, eyebrow, title, lead, img, alt, keyidea }) {
  const bc = crumbs.map((c, i) => i < crumbs.length - 1 ? `<li><a href="${c[1]}">${esc(c[0])}</a></li>` : `<li aria-current="page">${esc(c[0])}</li>`).join("");
  return `
<section class="page-hero">
  <div class="container">
    <nav aria-label="Ruta de navegación"><ol class="breadcrumb">${bc}</ol></nav>
    <div class="page-hero__grid${img ? "" : " page-hero__grid--solo"}">
      <div>
        <span class="eyebrow eyebrow--pill">${esc(eyebrow)}</span>
        <h1>${esc(title)}</h1>
        <p class="lead">${esc(lead)}</p>
        ${keyidea ? `<p class="keyidea"><b>Idea clave</b><span>${esc(keyidea)}</span></p>` : ""}
      </div>
      ${img ? `<div class="page-hero__img"><img src="assets/img/${img}" alt="${esc(alt || "")}" width="800" height="600"></div>` : ""}
    </div>
  </div>
</section>`;
}

/** Índice lateral + versión móvil en chips. items: [[id, título]] ; dls: ids de descargas */
export function withToc(items, dls, content) {
  const ol = items.map((it, i) => `<li><a href="#${it[0]}"><span>${pad(i + 1)}</span>${esc(it[1])}</a></li>`).join("");
  const chips = items.map((it) => `<a href="#${it[0]}">${esc(it[1])}</a>`).join("");
  const dlLinks = dls.map((id) => {
    const d = descargas.find((x) => x.id === id);
    return `<a href="descargas/${d.id}.pdf" download>${icon.download}<span>${esc(d.title)}</span></a>`;
  }).join("");
  return `
<div class="container">
  <div class="with-toc">
    <aside class="toc" aria-label="En esta página">
      <nav class="toc__box" data-toc><p class="toc__title">En esta página</p><ol>${ol}</ol></nav>
      ${dls.length ? `<div class="toc__dl"><p class="toc__title">Descargar en PDF</p>${dlLinks}</div>` : ""}
    </aside>
    <div>
      <nav class="toc-mobile" aria-label="En esta página" data-toc><div class="chips">${chips}</div></nav>
      <div class="content">${content}</div>
    </div>
  </div>
</div>`;
}

export function block(id, n, title, intro, inner) {
  return `
<section class="block" id="${id}" aria-labelledby="${id}-t">
  <header class="block__head"><span class="block__num">${pad(n)}</span><h2 id="${id}-t">${esc(title)}</h2>${intro ? `<p>${esc(intro)}</p>` : ""}</header>
  ${inner}
</section>`;
}

export function cards(rows, { cols = 3, variant = "", numbered = false, illus = null, tag = null } = {}) {
  return `<div class="cards cards--${cols}">${rows.map((r, i) => {
    const v = typeof variant === "function" ? variant(i) : variant;
    const il = illus && illus[r[0]] ? `<img class="card__illu" src="assets/img/ilustraciones/${illus[r[0]]}" alt="" width="64" height="64" loading="lazy">` : "";
    return `<article class="card ${v ? "card--" + v : ""}">${numbered ? `<span class="card__num">${i + 1}</span>` : ""}${il}${tag ? `<span class="card__tag">${esc(tag)}</span>` : ""}<h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></article>`;
  }).join("")}</div>`;
}

export function downloadCard(id, feature = false) {
  const d = descargas.find((x) => x.id === id);
  return `<a class="dl ${feature ? "dl--feature" : ""}" href="descargas/${d.id}.pdf" download>
    <span class="dl__icon">${icon.file}PDF</span>
    <span><strong>${esc(d.title)}</strong><p>${esc(d.desc)}</p><span class="meta">${icon.download}Descargar PDF</span></span>
  </a>`;
}

export function pager(currentId) {
  const i = secciones.findIndex((s) => s.id === currentId);
  const prev = secciones[i - 1];
  const next = secciones[i + 1];
  return `
<div class="container">
  <nav class="pager" aria-label="Recorrido de la guía">
    ${prev ? `<a class="prev" href="${prev.file}"><small>Sección anterior</small><strong>${icon.arrowLeft}${esc(prev.label)}</strong></a>` : ""}
    ${next ? `<a class="next" href="${next.file}"><small>Siguiente sección</small><strong>${esc(next.label)}${icon.arrow}</strong></a>` : `<a class="next" href="descargas.html"><small>Para llevar</small><strong>Todas las descargas${icon.arrow}</strong></a>`}
  </nav>
</div>`;
}

export const extLink = (label, url) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}${icon.ext}</a>`;

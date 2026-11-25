import * as C from "./contenido.mjs";
import { esc, pad } from "./layout.mjs";

// Hoja de estilos para impresión A4
const css = `
@page { size: A4; margin: 16mm 15mm 18mm;
  @bottom-left { content: "Parkinson Chile · parkinsonchile.org · Información educativa revisada en ${C.REVISION}"; font: 7.5pt "Atkinson Hyperlegible Next", Arial, sans-serif; color: #4b6359; }
  @bottom-right { content: "Página " counter(page) " de " counter(pages); font: 7.5pt "Atkinson Hyperlegible Next", Arial, sans-serif; color: #4b6359; }
}
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font-family: "Atkinson Hyperlegible Next", Arial, sans-serif; color: #13352c; font-size: 10.5pt; line-height: 1.5; }
.cover { background: #063d30; color: #e4f2eb; border-radius: 14px; padding: 18px 22px 20px; margin-bottom: 18px; position: relative; overflow: hidden; }
.cover::after { content: ""; position: absolute; right: -40px; top: -40px; width: 180px; height: 180px; border-radius: 50%; background: rgba(200,238,89,.12); }
.cover__brand { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.cover__brand span.m { width: 34px; height: 34px; border-radius: 50%; background: #e9f5ef; display: grid; place-items: center; }
.cover__brand img { width: 26px; height: 26px; }
.cover__brand strong { font-size: 9.5pt; letter-spacing: .08em; color: #fff; display: block; line-height: 1.1; }
.cover__brand small { font-size: 8pt; color: #c8ee59; }
.cover .eyebrow { display: inline-block; background: #c8ee59; color: #063d30; font-size: 7.5pt; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; padding: 3px 10px; border-radius: 99px; margin-bottom: 8px; }
.cover h1 { font-size: 21pt; line-height: 1.15; margin: 0 0 6px; color: #fff; }
.cover p { margin: 0; font-size: 10.5pt; color: #cfe7dc; max-width: 34em; }
h2 { font-size: 13pt; color: #063d30; margin: 18px 0 8px; display: flex; align-items: baseline; gap: 8px; break-after: avoid; }
h2 span { font-size: 8pt; color: #075b44; font-weight: 800; letter-spacing: .08em; }
h3 { font-size: 10.5pt; margin: 0 0 3px; color: #063d30; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.grid--3 { grid-template-columns: 1fr 1fr 1fr; }
.item { border: 1px solid #d9e5df; border-radius: 9px; padding: 9px 11px; break-inside: avoid; background: #fff; }
.item:nth-child(4n+1), .item:nth-child(4n+4) { background: #f3faf6; }
.item p { margin: 0; font-size: 9.5pt; color: #34504a; }
.important { margin-top: 14px; background: #fbf3e3; border: 1px solid #ecdcb8; border-radius: 9px; padding: 9px 12px; font-size: 9.5pt; break-inside: avoid; }
.important strong { color: #8a4b0f; }
.callout { background: #e9f5ef; border-left: 4px solid #075b44; border-radius: 6px; padding: 8px 12px; margin: 8px 0; font-size: 9.5pt; break-inside: avoid; }
ol.steps { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; counter-reset: s; }
ol.steps li { counter-increment: s; display: grid; grid-template-columns: 24px 1fr; gap: 8px; align-items: start; break-inside: avoid; }
ol.steps li::before { content: counter(s); width: 22px; height: 22px; border-radius: 50%; background: #075b44; color: #fff; font-size: 8.5pt; font-weight: 800; display: grid; place-items: center; }
ol.steps p { margin: 0; font-size: 9.5pt; color: #34504a; }
table { width: 100%; border-collapse: collapse; font-size: 8.8pt; }
th { text-align: left; background: #e9f5ef; color: #063d30; font-size: 7.5pt; letter-spacing: .06em; text-transform: uppercase; padding: 6px 8px; }
td { border-top: 1px solid #d9e5df; padding: 6px 8px; vertical-align: top; }
tr { break-inside: avoid; }
td strong { color: #063d30; }
td small { color: #4b6359; display: block; }
.checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 18px; }
.checks li { position: relative; padding-left: 22px; font-size: 9.8pt; }
.checks li::before { content: ""; position: absolute; left: 0; top: 2px; width: 13px; height: 13px; border: 1.6px solid #075b44; border-radius: 3px; }
.questions { list-style: none; padding: 0; margin: 0; display: grid; gap: 0; counter-reset: q; }
.questions li { counter-increment: q; border-bottom: 1px solid #d9e5df; padding: 7px 0 18px 30px; position: relative; font-weight: 700; color: #063d30; font-size: 10pt; break-inside: avoid; }
.questions li::before { content: counter(q); position: absolute; left: 0; top: 6px; width: 21px; height: 21px; border-radius: 50%; background: #c8ee59; color: #063d30; font-size: 8.5pt; display: grid; place-items: center; }
.log td, .log th { border: 1px solid #c9dcd3; height: 26px; }
.log th { font-size: 7pt; }
.lines { border-bottom: 1px solid #c9dcd3; height: 24px; }
.sources { font-size: 8pt; color: #4b6359; margin-top: 10px; word-break: break-word; }
.page-break { break-before: page; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.pros, .cons { border-radius: 9px; padding: 9px 12px; font-size: 9.3pt; break-inside: avoid; }
.pros { background: #e9f5ef; } .cons { background: #fbf0e8; }
.pros ul, .cons ul { margin: 4px 0 0; padding-left: 16px; }
.stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 8px; }
.stat { background: #f3faf6; border-radius: 8px; padding: 7px 10px; break-inside: avoid; }
.stat strong { display: block; font-size: 12pt; color: #063d30; }
.stat p { margin: 0; font-size: 8.3pt; color: #4b6359; }
.disclaimer { margin-top: 16px; padding-top: 8px; border-top: 1px solid #d9e5df; font-size: 8.3pt; color: #4b6359; }
`;

function doc(title, eyebrow, subtitle, body) {
  return `<!doctype html><html lang="es-CL"><head><meta charset="utf-8"><title>${esc(title)} · Parkinson Chile</title>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;700;800&display=swap" rel="stylesheet">
<style>${css}</style></head><body>
<header class="cover">
  <div class="cover__brand"><span class="m"><img src="../../sitio-nuevo/assets/img/brand-tree.svg" alt=""></span><span><strong>PARKINSON CHILE</strong><small>Entender más. Vivir mejor.</small></span></div>
  <span class="eyebrow">${esc(eyebrow)}</span>
  <h1>${esc(title)}</h1>
  <p>${esc(subtitle)}</p>
</header>
${body}
<p class="disclaimer"><strong>Parkinson Chile es una guía educativa.</strong> Esta información no reemplaza la evaluación, el diagnóstico ni las indicaciones de un médico u otro profesional de la salud. Verifica siempre requisitos y datos vigentes con la institución responsable. Contacto: ${C.contacto.email} · ${C.contacto.telefono}.</p>
</body></html>`;
}

const items = (rows, cols = 2) => `<div class="grid ${cols === 3 ? "grid--3" : ""}">${rows.map((r) => `<div class="item"><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></div>`).join("")}</div>`;
const h2 = (n, t) => `<h2><span>${pad(n)}</span>${esc(t)}</h2>`;
const steps = (rows) => `<ol class="steps">${rows.map((r) => `<li><div><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></div></li>`).join("")}</ol>`;

function ficha(key) {
  const f = C.fichas[key];
  const body = f.sections.map((s, i) => h2(i + 1, s[0]) + items(s[1], s[1].length % 3 === 0 && s[1].length !== 6 ? 3 : 2)).join("")
    + (f.important ? `<div class="important"><strong>Importante:</strong> ${esc(f.important)}</div>` : "");
  return doc(f.title, f.eyebrow, f.subtitle, body);
}

const tagLabel = { fonasa: "Fonasa", isapre: "Isapre", trabajo: "Si trabajas", maneja: "Si manejas" };
const rutaCss = `<style>
.stage-h { display: flex; align-items: center; gap: 10px; margin: 16px 0 4px; break-after: avoid; }
.stage-h b { width: 26px; height: 26px; border-radius: 50%; background: #075b44; color: #fff; display: grid; place-items: center; font-size: 10pt; flex: none; }
.stage-h small { display: block; font-size: 7.5pt; letter-spacing: .08em; text-transform: uppercase; color: #075b44; font-weight: 800; }
.stage-h strong { font-size: 13pt; color: #063d30; }
.stage-intro { margin: 0 0 6px 36px; font-size: 9.3pt; color: #4b6359; }
.rsteps { list-style: none; margin: 0 0 0 36px; padding: 0; display: grid; gap: 5px; }
.rsteps li { display: grid; grid-template-columns: 18px 1fr; gap: 8px; break-inside: avoid; border: 1px solid #d9e5df; border-radius: 8px; padding: 7px 10px; }
.rsteps li::before { content: ""; width: 13px; height: 13px; border: 1.6px solid #075b44; border-radius: 3px; margin-top: 2px; }
.rsteps h3 { font-size: 10pt; margin: 0; } .rsteps p { margin: 1px 0 0; font-size: 9pt; color: #34504a; }
.tg { font-size: 6.8pt; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; padding: 1px 6px; border-radius: 99px; background: #e9f5ef; color: #075b44; margin-left: 4px; vertical-align: middle; }
.tg.pv { background: #fde9c8; color: #7a4708; }
</style>`;

export const pdfs = {
  "hoja-de-ruta": () => doc("Mi hoja de ruta", "Recién diagnosticado", "Los primeros pasos después del diagnóstico. Marca cada casilla cuando lo completes: no tienes que hacerlo todo hoy.",
    rutaCss
    + (C.PROTOTIPO ? `<div class="important"><strong>Versión prototipo.</strong> Los puntos marcados “Por validar” son texto nuevo que debe revisarse antes de publicar.</div>` : "")
    + C.hojaDeRuta.map((st, i) => `<div class="stage-h"><b>${i + 1}</b><span><small>${esc(st.when)}</small><strong>${esc(st.title)}</strong></span></div><p class="stage-intro">${esc(st.intro)}</p>
      <ul class="rsteps">${st.steps.map((s) => `<li><div><h3>${esc(s.title)}${(s.tags || []).map((t) => `<span class="tg">${tagLabel[t]}</span>`).join("")}${s.pending && C.PROTOTIPO ? `<span class="tg pv">Por validar</span>` : ""}</h3><p>${esc(s.text)}</p></div></li>`).join("")}</ul>`).join("")
    + `<div class="page-break"></div>` + h2(C.hojaDeRuta.length + 1, "Más adelante: lo que puede venir")
    + `<p style="margin:0 0 8px;font-size:9.3pt;color:#4b6359">Saberlo con tiempo ayuda a prepararse sin alarmarse. No todo le ocurre a todas las personas, ni al mismo ritmo.</p>`
    + `<div class="grid">${C.masAdelante.map((m) => `<div class="item"><h3>${esc(m.title)}${m.pending && C.PROTOTIPO ? ` <span class="tg pv" style="font-size:6.8pt;font-weight:800;padding:1px 6px;border-radius:99px;background:#fde9c8;color:#7a4708">POR VALIDAR</span>` : ""}</h3><p>${esc(m.text)}</p></div>`).join("")}</div>`
    + h2(C.hojaDeRuta.length + 2, "Cuándo consultar antes del próximo control")
    + `<div class="callout">${C.alertas.map((a) => esc(a.text) + (a.pending && C.PROTOTIPO ? ` <span class="tg pv">Por validar</span>` : "")).join("<br>")}<br><strong>Salud Responde (24/7): 600 360 7777.</strong></div>`
    + h2(C.hojaDeRuta.length + 3, "Mis datos importantes")
    + `<table class="log"><tbody>${["Mi neurólogo/a y teléfono", "Mi CESFAM o red GES asignada", "Fecha de la Constancia GES", "Próximo control", "Persona de contacto"].map((r) => `<tr><td style="width:38%"><strong>${r}</strong></td><td></td></tr>`).join("")}</tbody></table>`),


  "preparar-la-consulta": () => doc("Preparar la consulta", "Diagnóstico · Para llevar", "Una buena consulta empieza antes de entrar al box. Completa esta hoja, llévala y anota las respuestas.",
    h2(1, "Qué llevar") + `<ul class="checks">${C.checklistConsulta.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>`
    + `<div class="callout"><strong>No suspendas ni inicies medicamentos para “probar” un síntoma o el diagnóstico sin indicación profesional.</strong></div>`
    + h2(2, "Mis tres prioridades para esta consulta") + `<div class="lines"></div><div class="lines"></div><div class="lines"></div>`
    + h2(3, "Mis medicamentos y suplementos") + `<table class="log"><thead><tr><th style="width:34%">Nombre</th><th>Dosis</th><th>Horarios</th><th style="width:30%">Desde cuándo / observaciones</th></tr></thead><tbody>${"<tr><td></td><td></td><td></td><td></td></tr>".repeat(6)}</tbody></table>`
    + `<div class="page-break"></div>` + h2(4, "10 preguntas para el especialista") + `<ol class="questions">${C.diezPreguntas.map((q) => `<li>${esc(q)}</li>`).join("")}</ol>`
    + `<div class="page-break"></div>` + h2(5, "Registro de síntomas (una semana)")
    + `<p style="font-size:9.3pt;margin:0 0 8px">Marca cómo te sentiste en cada momento del día. <strong>ON</strong> = el medicamento funciona bien; <strong>OFF</strong> = reaparecen lentitud, rigidez o temblor. Anota también caídas, sueño, ánimo, estreñimiento, voz o deglución.</p>`
    + `<table class="log"><thead><tr><th style="width:16%">Día</th><th>Mañana</th><th>Mediodía</th><th>Tarde</th><th>Noche</th><th style="width:28%">Otros síntomas / notas</th></tr></thead><tbody>${["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((d) => `<tr><td><strong>${d}</strong></td><td></td><td></td><td></td><td></td><td></td></tr>`).join("")}</tbody></table>`
    + h2(6, "Respuestas y próximos pasos") + `<p style="font-size:9.3pt;margin:0 0 4px">Derivaciones, órdenes, fecha del próximo control y a quién llamar si empeoras.</p>` + `<div class="lines"></div>`.repeat(6)),

  "ges-62": () => doc("GES Nº 62: cómo usarlo", "Parkinson en Chile", "Garantías exigibles para personas beneficiarias de Fonasa e Isapres.",
    h2(1, "Cuatro garantías") + items(C.ges.garantias)
    + h2(2, "Qué garantiza") + items(C.ges.queGarantiza, 3)
    + h2(3, "Cómo activarlo") + items(C.ges.activar)
    + `<div class="callout">Para usar las garantías hay que atenderse en la red designada. Ante dudas: Minsal, Superintendencia de Salud o Salud Responde (600 360 7777).</div>`
    + h2(4, "Costos y documentos") + items(C.ges.costos, 3)
    + h2(5, "Si incumplen un plazo") + steps(C.ges.plazos)
    + `<div class="page-break"></div>` + h2(6, "Ruta práctica de atención") + steps(C.ruta)
    + C.rutaDetalle.map((s, i) => h2(7 + i, s[0]) + items(s[1])).join("")
    + `<div class="important"><strong>La cobertura, red y copagos pueden cambiar:</strong> verifica siempre la información vigente en auge.minsal.cl y superdesalud.gob.cl antes de tomar decisiones.</div>`),

  "derechos-y-tramites": () => doc("Derechos y trámites", "Parkinson en Chile", "Discapacidad, beneficios, licencia de conducir y pensiones, explicados paso a paso.",
    `<div class="callout"><strong>Idea clave:</strong> tener Parkinson no otorga automáticamente una credencial, pensión o prohibición de manejar. Cada trámite evalúa el impacto funcional con reglas distintas.</div>`
    + h2(1, "Tres vías distintas") + items(C.tresVias, 3)
    + h2(2, "Cómo acreditar discapacidad") + steps(C.discapacidadPasos)
    + h2(3, "Qué puede abrir la inscripción en el Registro Nacional de Discapacidad") + items(C.beneficiosRND)
    + `<div class="page-break"></div>` + h2(4, "Manejar: qué cambia realmente") + items(C.manejo)
    + h2(5, "Pensión de invalidez: no es jubilación anticipada automática") + items(C.pensiones)
    + h2(6, "Dónde preguntar") + items(C.dondePreguntar, 3)),

  medicamentos: () => ficha("medicamentos"),
  ejercicio: () => ficha("ejercicio"),
  alimentacion: () => ficha("alimentacion"),
  "vida-diaria": () => ficha("vida-diaria"),

  "tratamientos-avanzados": () => doc("Tratamientos avanzados: DBS, HIFU y RF", "Vivir con Parkinson", "Opciones para personas cuidadosamente seleccionadas cuyos síntomas ya no se controlan bien con medicamentos.",
    h2(1, "De un vistazo") + `<table><thead><tr><th>Pregunta</th><th>DBS</th><th>HIFU</th><th>RF</th></tr></thead><tbody>${C.comparacion.map((r) => `<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1][0])}</td><td>${esc(r[2][0])}</td><td>${esc(r[3][0])}</td></tr>`).join("")}</tbody></table>`
    + `<div class="callout">Ninguna de estas técnicas detiene la progresión del Parkinson. La indicación requiere evaluación de un equipo especializado.</div>`
    + C.avanzados.map((t, i) => `<div class="page-break"></div>` + h2(i + 2, t.title) + `<p style="margin:0 0 8px;color:#34504a">${esc(t.subtitle)}</p>`
      + `<div class="stat-row">${t.stats.map((s) => `<div class="stat"><strong>${esc(s[0])}</strong><p>${esc(s[1])}</p></div>`).join("")}</div>`
      + `<p style="font-size:8.3pt;color:#4b6359;margin:0 0 8px"><strong>Cómo leer las cifras:</strong> ${esc(t.note)}</p>`
      + `<h3>Cómo funciona</h3>` + items(t.how, 3) + `<h3 style="margin-top:10px">Cuándo puede considerarse</h3>` + items(t.consider, 3)
      + `<div class="two-col" style="margin-top:10px"><div class="pros"><strong>Fortalezas</strong><ul>${t.strengths.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div><div class="cons"><strong>Límites y riesgos</strong><ul>${t.limits.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div></div>`
      + `<p class="sources"><strong>Fuentes:</strong> ${t.sources.map((s) => `${esc(s[0])} (${esc(s[1])})`).join(" · ")}</p>`).join("")),

  "directorio-chile": () => doc("Directorio en Chile", "Parkinson en Chile", "Centros con experiencia informada en DBS, grupos de pacientes por región y fuentes oficiales.",
    h2(1, "Centros médicos con experiencia en DBS")
    + `<table><thead><tr><th>Sector</th><th>Centro / ubicación</th><th>Equipo referente</th><th>Actividad DBS informada</th></tr></thead><tbody>${C.centrosChile.map((c) => `<tr><td>${c.sector}</td><td><strong>${esc(c.name)}</strong><small>${esc(c.place)}</small></td><td>${esc(c.team)}</td><td>${esc(c.dbs)}</td></tr>`).join("")}</tbody></table>`
    + `<p class="sources">Información pública disponible a ${C.REVISION}. Las cifras no constituyen un registro oficial unificado y deben confirmarse con cada centro.</p>`
    + h2(2, "Grupos de pacientes por región")
    + `<table><thead><tr><th>Región</th><th>Organización o red</th><th>Cómo ubicarla</th></tr></thead><tbody>${C.gruposPacientes.map((g) => `<tr><td><strong>${esc(g.region)}</strong></td><td>${esc(g.name)}</td><td>${esc(g.route)}</td></tr>`).join("")}</tbody></table>`
    + `<div class="callout"><strong>Antes de integrarte, confirma:</strong> ${C.gruposChequeo.join(" · ")}.</div>`
    + h2(3, "Fuentes oficiales") + `<table><tbody>${C.fuentesChile.map((f) => `<tr><td style="width:30%"><strong>${esc(f[0])}</strong></td><td>${esc(f[1])}</td><td style="width:32%"><small>${esc(f[2].replace(/^tel:/, ""))}</small></td></tr>`).join("")}</tbody></table>`),

  "recursos-internacionales": () => doc("Recursos internacionales", "Parkinson en el mundo", "Organizaciones, centros de referencia y cuentas recomendadas para seguir aprendiendo.",
    h2(1, "Organizaciones de referencia")
    + `<table><tbody>${C.organizaciones.map((o) => `<tr><td style="width:34%"><strong>${esc(o.name)}</strong><small>${esc(o.scope)}</small></td><td>${esc(o.description)}<small>${esc(o.url)}</small></td></tr>`).join("")}</tbody></table>`
    + `<div class="page-break"></div>` + h2(2, "Diez centros internacionales de referencia")
    + `<table><thead><tr><th>Centro / ciudad</th><th>Fortaleza distintiva</th><th>Terapias</th></tr></thead><tbody>${C.centrosMundo.map((c) => `<tr><td style="width:26%"><strong>${esc(c.name)}</strong><small>${esc(c.city)}</small></td><td>${esc(c.strength)}</td><td style="width:20%">${esc(c.therapy)}</td></tr>`).join("")}</tbody></table>`
    + `<p class="sources">No constituye un ranking. La indicación de cada terapia requiere evaluación médica individual.</p>`
    + C.antesDeContactar.map((s, i) => h2(3 + i, "Antes de contactar un centro: " + s[0].toLowerCase()) + items(s[1], s[1].length === 3 ? 3 : 2)).join("")
    + `<div class="page-break"></div>` + h2(5, "Cuentas recomendadas en Instagram")
    + C.instagram.map((g) => `<h3 style="margin-top:10px">${esc(g.title)}</h3><table><tbody>${g.accounts.map((a) => `<tr><td style="width:12%"><small>${esc(a.region)}</small></td><td style="width:38%"><strong>${esc(a.name)}</strong></td><td>${esc(a.description)}</td></tr>`).join("")}</tbody></table>`).join("")
    + `<p class="sources">Selección revisada en ${C.REVISION}. Instagram no publica un ranking oficial; esta lista refleja reconocimiento y cobertura, no cifras verificadas de seguidores.</p>`),
};

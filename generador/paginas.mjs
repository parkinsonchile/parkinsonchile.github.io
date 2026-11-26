import * as C from "./contenido.mjs";
import { page, pageHero, withToc, block, cards, downloadCard, pager, icon, esc, pad, extLink } from "./layout.mjs";

const HOME = ["Inicio", "index.html"];
const sec = (id) => C.secciones.find((s) => s.id === id);

// =============================================================
// INICIO
// =============================================================
function inicio() {
  const topics = C.secciones.map((s, i) => `
    <a class="topic" href="${s.file}">
      <span class="topic__img${s.img ? "" : " topic__img--logo"}">${s.img ? `<img src="assets/img/${s.img}" alt="" width="640" height="360" loading="lazy">` : `<img src="assets/img/brand-tree.svg" alt="">`}</span>
      <span class="topic__body">
        <span class="topic__num">Sección ${pad(i + 1)} · ${esc(s.kicker)}</span>
        <h3>${esc(s.label)}</h3>
        <p>${esc(s.copy)}</p>
        <span class="topic__more">Entrar${icon.arrow}</span>
      </span>
    </a>`).join("");

  const paths = [
    { ico: icon.compass, title: "Me acaban de diagnosticar", copy: "Una hoja de ruta con lo que conviene hacer la primera semana, el primer mes y el primer año.",
      steps: [["Primera semana: respirar y ordenar", "hoja-de-ruta.html#semana"], ["Primer mes: activar tus derechos", "hoja-de-ruta.html#mes"], ["Primeros meses: armar tu equipo", "hoja-de-ruta.html#trimestre"]] },
    { ico: icon.users, title: "Acompaño a alguien", copy: "Para familiares y personas cuidadoras que quieren ayudar mejor.",
      steps: [["Síntomas: mucho más que temblor", "que-es-el-parkinson.html#sintomas"], ["Vida diaria y autonomía", "vivir-con-parkinson.html#vida-diaria"], ["Derechos y trámites", "parkinson-en-chile.html#derechos"]] },
    { ico: icon.pin, title: "Busco atención en Chile", copy: "Dónde consultar, qué cubre el sistema y con quién conectarse.",
      steps: [["Ruta práctica de atención", "parkinson-en-chile.html#ruta"], ["Centros médicos en Chile", "parkinson-en-chile.html#centros"], ["Grupos de pacientes por región", "parkinson-en-chile.html#grupos"]] },
  ].map((p) => `
    <article class="path">
      <span class="path__icon">${p.ico}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.copy)}</p>
      <ol>${p.steps.map((s) => `<li><a href="${s[1]}">${esc(s[0])}</a></li>`).join("")}</ol>
    </article>`).join("");

  const body = `
<section class="home-hero">
  <div class="container home-hero__grid">
    <div>
      <span class="eyebrow eyebrow--pill">Guía práctica para Chile</span>
      <h1>Guía del Parkinson en Chile</h1>
      <p class="motto">Entender más. Vivir mejor.</p>
      <p class="lead">Información clara, práctica y confiable para personas que viven con Parkinson, sus familias y quienes las acompañan: desde qué es la enfermedad hasta cómo orientarse en el sistema de salud chileno.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="hoja-de-ruta.html">Me acaban de diagnosticar${icon.arrow}</a>
        <a class="btn btn--ghost" href="que-es-el-parkinson.html">Entender qué es el Parkinson</a>
      </div>
    </div>
    <div class="home-hero__media">
      <img src="assets/img/tema-consulta.jpg" alt="Hombre de unos 55 años conversando con su médico en una consulta" width="1400" height="788">
      <div class="home-hero__badge"><span class="ico">${icon.shield}</span><span><strong>Parkinson es GES Nº 62</strong><small>Garantías para personas en Fonasa e Isapres</small></span></div>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="section-head"><div><span class="eyebrow">Para orientarse</span><h2>¿Por dónde empiezo?</h2><p>Elige la situación que más se parece a la tuya y sigue los pasos en orden.</p></div></div>
    <div class="paths">${paths}</div>
  </div>
</section>

<section class="section section--mint" id="temas">
  <div class="container">
    <div class="section-head"><div><span class="eyebrow">La guía completa</span><h2>${["Cero","Una","Dos","Tres","Cuatro","Cinco","Seis","Siete"][C.secciones.length]} secciones, un recorrido</h2><p>Cada sección tiene su propia página, con un índice para ir directo al tema que buscas.</p></div></div>
    <div class="topics">${topics}</div>
  </div>
</section>

<section class="section section--deep">
  <div class="container ges-band">
    <div>
      <span class="eyebrow" style="color:var(--lime)">Atención en Chile</span>
      <p class="ges-band__num">GES <small>Nº</small> 62</p>
      <h2>El Parkinson tiene garantías exigibles</h2>
      <p style="color:#cfe7dc">Para personas beneficiarias de Fonasa e Isapres. Conocerlas te permite exigir acceso, plazos y protección financiera.</p>
      <div class="btn-row mt">
        <a class="btn btn--lime" href="parkinson-en-chile.html#ges">Ver cómo activarlo${icon.arrow}</a>
        <a class="btn btn--ghost-light" href="descargas/ges-62.pdf" download>${icon.download}Guía GES en PDF</a>
      </div>
    </div>
    <div class="guarantees">${C.ges.garantias.map((g) => `<div class="guarantee"><strong>${esc(g[0])}</strong><p>${esc(g[1])}</p></div>`).join("")}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div><span class="eyebrow">Para imprimir y llevar</span><h2>Descargas útiles</h2><p>Las guías detalladas están en PDF para leerlas con calma, imprimirlas o compartirlas con tu equipo de salud.</p></div>
      <a class="btn btn--ghost" href="descargas.html">Ver todas (${C.descargas.length})${icon.arrow}</a>
    </div>
    <div class="downloads downloads--4">${C.descargas.filter((d) => d.destacado).map((d, i) => downloadCard(d.id, i === 0)).join("")}</div>
  </div>
</section>

<section class="section section--sand">
  <div class="container about-teaser">
    <div>
      <span class="eyebrow">Quiénes somos</span>
      <h2>Una guía creada desde Chile, desde la experiencia</h2>
      <blockquote class="quote">“Que ninguna persona tenga que enfrentar sola el Parkinson.”</blockquote>
      <p class="muted">Parkinson Chile es un proyecto independiente y sin fines de lucro, formado el 3 de agosto de 2023 por Diego Figueroa y Andrés Vielva para compartir conocimiento, generar comunidad y facilitar el acceso a recursos confiables.</p>
      <div class="btn-row mt"><a class="btn btn--primary" href="quienes-somos.html">Conocer el proyecto${icon.arrow}</a><a class="btn btn--ghost" href="quienes-somos.html#contacto">Contáctanos</a></div>
    </div>
    <div class="founders">
      <div class="founder"><img src="assets/img/diego-figueroa.jpg" alt="Diego Figueroa" width="128" height="128" loading="lazy"><strong>Diego Figueroa</strong><span>Presidente</span></div>
      <div class="founder"><img src="assets/img/andres-vielva.jpg" alt="Andrés Vielva" width="128" height="128" loading="lazy"><strong>Andrés Vielva</strong><span>Vicepresidente</span></div>
    </div>
  </div>
</section>`;
  return page({ title: "", description: "Guía clara, práctica y confiable sobre el Parkinson en Chile: qué es, diagnóstico, tratamiento, GES Nº 62, derechos, centros y recursos.", active: "inicio", body });
}

// =============================================================
// 1 · QUIÉNES SOMOS
// =============================================================
function quienesSomos() {
  const verbs = [["Informar", "Información clara y confiable para comprender mejor la enfermedad y tomar decisiones informadas."], ["Orientar", "Ayudar a encontrar el camino dentro del sistema de salud chileno: GES, red de atención, derechos y beneficios."], ["Conectar", "Acercar personas, grupos de pacientes, profesionales y organizaciones de Chile y el mundo."], ["Incidir", "Visibilizar las necesidades de las personas con Parkinson y sus familias."]];
  const content = [
    block("origen", 1, "Nuestro origen", "", `
      <div class="cards cards--2">
        <div class="card card--mint"><h3>Una guía creada desde Chile</h3><p>Parkinson Chile es una guía informativa, independiente y sin fines de lucro, creada para entregar información confiable, clara y útil a todas las personas que viven con Parkinson y a sus familias en Chile.</p></div>
        <div class="card"><h3>Desde agosto de 2023</h3><p>El proyecto fue formado el 3 de agosto de 2023 por Diego Figueroa y Andrés Vielva, con el objetivo de compartir conocimiento, generar comunidad y facilitar el acceso a recursos confiables sobre el Parkinson en Chile y en el mundo.</p></div>
      </div>
      <div class="founders mt-l" style="max-width:560px">
        <div class="founder"><img src="assets/img/diego-figueroa.jpg" alt="Diego Figueroa" width="128" height="128" loading="lazy"><strong>Diego Figueroa</strong><span>Presidente</span></div>
        <div class="founder"><img src="assets/img/andres-vielva.jpg" alt="Andrés Vielva" width="128" height="128" loading="lazy"><strong>Andrés Vielva</strong><span>Vicepresidente</span></div>
      </div>`),
    block("mision-vision", 2, "Misión y visión", "Una comunidad construida desde la experiencia, la comprensión y el apoyo mutuo.", `
      <div class="cards cards--2">
        <article class="callout"><p class="eyebrow">Nuestra misión</p><h3>Acompañarnos y ayudarnos mutuamente</h3><p>Acompañarnos, escucharnos y ayudarnos mutuamente, generando una comunidad en la que cada integrante pueda sentirse comprendido por personas que conocen, desde su propia experiencia, lo que significa vivir con esta enfermedad.</p></article>
        <article class="card card--mint"><span class="card__tag">Visión</span><h3>Que ninguna persona enfrente sola el Parkinson</h3><p>Construir una comunidad cercana, respetuosa y solidaria, donde ninguna persona tenga que enfrentar sola las dudas, temores, cambios y desafíos asociados al Parkinson.</p></article>
      </div>`),
    block("proposito", 3, "Qué hacemos", "Nuestro propósito editorial se resume en cuatro verbos.", cards(verbs, { cols: 4, numbered: true })),
    block("contacto", 4, "Contacto", "Si deseas proponer información, advertir una actualización o colaborar con Parkinson Chile, escríbenos o llámanos. Queremos escucharte.", `
      <div class="contact-grid">
        <a class="contact-card" href="mailto:${C.contacto.email}"><span class="ico">${icon.mail}</span><small>Correo electrónico</small><strong>${C.contacto.email}</strong></a>
        <a class="contact-card" href="tel:${C.contacto.telefonoHref}"><span class="ico">${icon.phone}</span><small>Teléfono</small><strong>${C.contacto.telefono}</strong></a>
        <a class="contact-card" href="${C.contacto.whatsapp}" target="_blank" rel="noopener"><span class="ico">${icon.whatsapp}</span><small>WhatsApp</small><strong>Escribir un mensaje</strong></a>
      </div>
      <div class="note mt">${icon.info}<p><strong>Importante:</strong> no podemos responder consultas médicas individuales. Ante síntomas nuevos o urgencias, consulta a tu equipo de salud o llama a Salud Responde: 600 360 7777.</p></div>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Quiénes somos"]], eyebrow: "Sección 01 · Conocernos", title: "Quiénes somos", lead: "Un proyecto nacido de la experiencia y el compromiso. Porque la información también es una forma de cuidado.", img: "tema-vida.jpg", alt: "Pareja de unos 55 años preparando una ensalada en su terraza" })
    + withToc([["origen", "Nuestro origen"], ["mision-vision", "Misión y visión"], ["proposito", "Qué hacemos"], ["contacto", "Contacto"]], [], content)
    + pager("quienes-somos");
  return page({ title: "Quiénes somos", description: "Parkinson Chile: origen, fundadores, misión, visión y contacto.", active: "quienes-somos", body });
}

// =============================================================
// 2 · QUÉ ES EL PARKINSON
// =============================================================
function queEs() {
  const content = [
    block("cerebro", 1, "Qué ocurre en el cerebro", "La explicación simple.", cards(C.cerebro, { cols: 3, numbered: true, variant: "mint" })),
    block("sintomas", 2, "Síntomas: mucho más que temblor", "El patrón es distinto en cada persona. Algunos síntomas no motores pueden aparecer antes que los problemas de movimiento.", `
      <div class="tabs" data-tabs>
        <div class="tabs__list" role="tablist" aria-label="Tipos de síntomas">
          <button type="button" role="tab" id="t-mot" aria-controls="p-mot" aria-selected="true">Motores (movimiento)</button>
          <button type="button" role="tab" id="t-nomot" aria-controls="p-nomot" aria-selected="false" tabindex="-1">No motores</button>
        </div>
        <div class="tabs__panel" role="tabpanel" id="p-mot" aria-labelledby="t-mot">
          <p class="muted">Son los relacionados con el movimiento. No tienen que estar todos presentes. <strong>El temblor no es obligatorio.</strong></p>
          ${cards(C.sintomasMotores, { cols: 3, numbered: true })}
        </div>
        <div class="tabs__panel" role="tabpanel" id="p-nomot" aria-labelledby="t-nomot" hidden>
          <p class="muted">Pueden ser invisibles, aparecer antes que los motores y afectar la calidad de vida tanto o más. <strong>También requieren evaluación y tratamiento.</strong></p>
          ${cards(C.sintomasNoMotores, { cols: 2, variant: "mint" })}
        </div>
      </div>
      <div class="callout mt">
        <p class="eyebrow">¿Cuándo conviene consultar?</p>
        <ul class="dots">
          <li>Cuando uno o varios cambios son persistentes, progresivos o interfieren con actividades cotidianas.</li>
          <li>Un neurólogo, idealmente especialista en trastornos del movimiento, puede orientar mejor.</li>
          <li>Si un síntoma aparece de forma súbita o cambia bruscamente, requiere una evaluación médica oportuna: no debe asumirse que es Parkinson.</li>
        </ul>
      </div>`),
    block("causas", 3, "¿Por qué ocurre?", "No existe una causa única. En la mayoría de las personas intervienen varios factores.", `
      ${cards(C.causas, { cols: 4, variant: "sand" })}
      <div class="callout mt">
        <p class="eyebrow">Antes de los 50</p>
        <h3>Parkinson de inicio joven</h3>
        <p>También puede aparecer en personas laboral y familiarmente activas. Comparte los síntomas centrales, pero exige considerar trabajo, familia, planificación y, en algunos casos, asesoría genética. <strong style="color:var(--lime)">Parkinson no es sinónimo de vejez.</strong></p>
      </div>`),
    block("quien-trata", 4, "¿Qué médico trata el Parkinson?", "La atención especializada permite confirmar el diagnóstico y ajustar el manejo a cada persona.", `
      <div class="cards cards--2">
        <article class="card card--mint"><span class="card__tag">Médico principal</span><h3>Neurólogo/a</h3><p>Diagnostica, indica tratamientos y controla la evolución. Idealmente, un neurólogo especialista en trastornos del movimiento, con experiencia específica en Parkinson. El cuidado puede sumar kinesiología, fonoaudiología y terapia ocupacional.</p></article>
        <article class="card"><h3>Más información confiable</h3>
          <ul class="dots">
            <li>${extLink("Parkinson’s Foundation en español", "https://www.parkinson.org/espanol")}</li>
            <li>${extLink("OMS: datos sobre Parkinson", "https://www.who.int/es/news-room/fact-sheets/detail/parkinson-disease")}</li>
            <li>${extLink("Minsal · GES Nº 62", "https://auge.minsal.cl/problemasdesalud/index/62")}</li>
            <li>${extLink("Buscar especialista (MDS)", "https://www.movementdisorders.org/")}</li>
          </ul>
        </article>
      </div>`),
    block("mitos", 5, "Mitos que conviene dejar atrás", "", `<div class="myths">${C.mitos.map((m) => `<article class="myth"><p class="myth__m"><b>Mito</b>${esc(m[0])}</p><p class="myth__r"><b>Realidad</b>${esc(m[1])}</p></article>`).join("")}</div>
      <p class="source-note">Fuentes: OMS, NINDS, Parkinson’s Foundation, Minsal GES 62 y Movement Disorder Society. Consultadas en ${C.REVISION}.</p>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Qué es el Parkinson"]], eyebrow: "Sección 02 · Comprender", title: "¿Qué es el Parkinson?", lead: "Qué ocurre en el cerebro y por qué no se manifiesta igual en cada persona.", img: "pareja-parque.jpg", alt: "Pareja adulta caminando por un parque arbolado", keyidea: "Es una enfermedad neurológica progresiva, tratable y mucho más amplia que el temblor." })
    + withToc([["cerebro", "Qué ocurre en el cerebro"], ["sintomas", "Síntomas"], ["causas", "Causas e inicio joven"], ["quien-trata", "Qué médico lo trata"], ["mitos", "Mitos"]], ["preparar-la-consulta"], content)
    + pager("que-es-el-parkinson");
  return page({ title: "Qué es el Parkinson", description: "Qué ocurre en el cerebro, síntomas motores y no motores, causas, Parkinson de inicio joven y mitos frecuentes.", active: "que-es-el-parkinson", body });
}

// =============================================================
// 3 · DIAGNÓSTICO
// =============================================================
function diagnostico() {
  const content = [
    block("clinico", 1, "¿Qué significa “diagnóstico clínico”?", "El neurólogo integra varias piezas; ninguna se interpreta de manera aislada.", cards(C.diagnosticoPiezas, { cols: 3, variant: (i) => (i === 1 ? "sand" : "mint") })),
    block("proceso", 2, "Cómo se llega al diagnóstico", "El recorrido puede variar según la persona y los hallazgos de la consulta.", `<ol class="steps">${C.diagnosticoPasos.map((p) => `<li><strong>${esc(p[0])}</strong><p>${esc(p[1])}</p></li>`).join("")}</ol>
      <a class="card card--link card--mint mt" href="hoja-de-ruta.html"><span class="card__tag">¿Ya tienes el diagnóstico?</span><h3>Sigue tu hoja de ruta</h3><p>Qué hacer la primera semana, el primer mes y el primer año: GES, equipo de salud, trabajo y familia.</p><span class="go">Ver mi hoja de ruta${icon.arrow}</span></a>`),
    block("examenes", 3, "Exámenes complementarios: para qué sirven", "Se solicitan según el caso. En una presentación típica, pueden no ser necesarios.", `
      ${cards(C.examenes, { cols: 3 })}
      <div class="note mt">${icon.info}<p>La pregunta útil es: <strong>“¿Este examen cambiará el diagnóstico o la conducta?”</strong></p></div>`),
    block("quien", 4, "¿Quién diagnostica y cuándo pedir otra opinión?", "", `
      <div class="cards cards--2">
        <article class="card card--mint"><span class="card__tag">Neurólogo</span><h3>Diagnostica y coordina</h3><p>Puede diagnosticar, indicar tratamiento y coordinar el seguimiento. La medicina general o familiar suele ser la puerta de entrada y deriva cuando corresponde. El especialista en movimiento es un neurólogo con formación y experiencia específica en Parkinson y trastornos relacionados.</p></article>
        <article class="card card--sand"><span class="card__tag">Segunda opinión</span><h3>Cuándo conviene</h3><ul>${C.segundaOpinion.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></article>
      </div>`),
    block("preparar", 5, "Preparar bien la consulta", "Llevar información concreta facilita que el profesional reconozca patrones.", `
      <div class="card"><ul class="checks checks--two">${C.checklistConsulta.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>
      <div class="note mt">${icon.alert}<p><strong>No suspendas ni inicies medicamentos para “probar” el diagnóstico</strong> sin indicación médica.</p></div>
      <div class="downloads mt">${downloadCard("preparar-la-consulta", true)}</div>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Diagnóstico"]], eyebrow: "Sección 03 · Detectar", title: "Diagnóstico: comprender el proceso", lead: "No existe una prueba única que confirme Parkinson. La evaluación clínica reúne historia, examen neurológico y evolución.", img: "lamina-14.jpg", alt: "Paciente de unos 55 años conversando con su neurólogo, acompañado por su pareja", keyidea: "El diagnóstico puede afinarse con el tiempo." })
    + withToc([["clinico", "Diagnóstico clínico"], ["proceso", "Cómo se llega"], ["examenes", "Exámenes"], ["quien", "Quién diagnostica"], ["preparar", "Preparar la consulta"]], ["preparar-la-consulta"], content)
    + pager("diagnostico");
  return page({ title: "Diagnóstico", description: "Cómo se diagnostica el Parkinson, para qué sirven los exámenes, cuándo pedir otra opinión y cómo preparar la consulta.", active: "diagnostico", body });
}

// =============================================================
// 4 · VIVIR CON PARKINSON
// =============================================================
function resumenFicha(key, n, id, extra = "", illus = null) {
  const f = C.fichas[key];
  // En la web mostramos la primera parte de la ficha; el PDF trae todo.
  const [first, ...rest] = f.sections;
  const others = rest.map((s) => `<li><strong>${esc(s[0])}:</strong> ${s[1].map((r) => esc(r[0])).join(", ")}.</li>`).join("");
  return block(id, n, f.title, f.subtitle, `
    <h3 class="small muted" style="text-transform:uppercase;letter-spacing:.08em">${esc(first[0])}</h3>
    ${cards(first[1], { cols: first[1].length === 4 ? 4 : 3, variant: "mint", illus })}
    ${extra}
    <div class="cards cards--2 mt">
      <div class="card"><h3>También en la guía PDF</h3><ul class="dots">${others}</ul></div>
      ${downloadCard(key, true)}
    </div>
    ${f.important ? `<div class="note mt">${icon.alert}<p>${esc(f.important)}</p></div>` : ""}`);
}

function vivir() {
  const content = [
    block("tratamiento", 1, "Tratamiento: un plan personalizado", "Hoy no detiene ni cura la enfermedad, pero puede controlar síntomas y sostener la vida cotidiana. No existe una combinación única.", `
      ${cards(C.tratamientoObjetivos, { cols: 3, variant: "sand" })}
      <h3 class="mt-l">Cuatro pilares que trabajan juntos</h3>
      ${cards(C.pilares, { cols: 2, numbered: true, variant: "mint" })}
      <h3 class="mt-l">Una persona al centro, un equipo alrededor</h3>
      ${cards(C.equipo, { cols: 3 })}`),
    resumenFicha("medicamentos", 2, "medicamentos"),
    resumenFicha("ejercicio", 3, "ejercicio", `<div class="callout mt"><p class="eyebrow">Referencia semanal</p><h3>150 minutos de actividad</h3><p>Meta adaptable de actividad moderada a vigorosa, distribuida según condición física, síntomas y seguridad. Comienza desde tu nivel real y aumenta gradualmente.</p></div>`, C.ilustraciones),
    resumenFicha("alimentacion", 4, "alimentacion", "", C.ilustraciones),
    resumenFicha("vida-diaria", 5, "vida-diaria"),
    block("avanzados", 6, "Tratamientos avanzados: DBS, HIFU y RF", "Opciones para personas seleccionadas cuyos síntomas ya no se controlan bien con medicamentos. Requieren evaluación especializada.", `
      <div class="cards cards--3">${C.avanzados.map((t) => `<a class="card card--link" href="tratamientos-avanzados.html#${t.id}"><span class="card__tag">${t.short}</span><h3>${esc(t.title)}</h3><p>${esc(t.subtitle)}</p><span class="go">Ver detalle${icon.arrow}</span></a>`).join("")}</div>
      <div class="btn-row mt"><a class="btn btn--primary" href="tratamientos-avanzados.html">Comparar los tres tratamientos${icon.arrow}</a></div>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Vivir con Parkinson"]], eyebrow: "Sección 04 · Acompañar", title: "Vivir con Parkinson", lead: "Vivir con Parkinson no significa dejar de vivir. Información confiable, ejercicio, un tratamiento individualizado y una red de apoyo ayudan a mantener autonomía y calidad de vida.", img: "lamina-13.jpg", alt: "Hombre de unos 50 años haciendo ejercicios de marcha con una kinesióloga", keyidea: "El tratamiento se revisa y ajusta con el tiempo." })
    + withToc([["tratamiento", "Plan de tratamiento"], ["medicamentos", "Medicamentos"], ["ejercicio", "Ejercicio"], ["alimentacion", "Alimentación"], ["vida-diaria", "Vida diaria"], ["avanzados", "Tratamientos avanzados"]], ["medicamentos", "ejercicio", "alimentacion", "vida-diaria", "tratamientos-avanzados"], content)
    + pager("vivir-con-parkinson");
  return page({ title: "Vivir con Parkinson", description: "Tratamiento personalizado, medicamentos, ejercicio, alimentación, vida diaria y tratamientos avanzados (DBS, HIFU, RF).", active: "vivir-con-parkinson", body });
}

// Subpágina: tratamientos avanzados (pestañas)
function avanzados() {
  const tabs = C.avanzados.map((t, i) => `<button type="button" role="tab" id="tab-${t.id}" aria-controls="${t.id}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ""}>${t.short}</button>`).join("");
  const panels = C.avanzados.map((t, i) => `
    <div class="tabs__panel" role="tabpanel" id="${t.id}" aria-labelledby="tab-${t.id}"${i ? " hidden" : ""}>
      <h2>${esc(t.title)}</h2>
      <p class="lead">${esc(t.subtitle)}</p>
      <div class="stats mt">${t.stats.map((s) => `<div class="stat"><strong>${esc(s[0])}</strong><p>${esc(s[1])}</p></div>`).join("")}</div>
      <p class="source-note"><strong>Cómo leer las cifras:</strong> ${esc(t.note)}</p>
      ${t.placement ? `<div class="figure-split mt-l"><div><span class="eyebrow">Ubicación en el cuerpo</span><h3>${esc(t.placement.title)}</h3><p class="muted">${esc(t.placement.copy)}</p><small>${esc(t.placement.note)}</small></div><img src="assets/img/ilustraciones/${t.placement.img}" alt="${esc(t.placement.alt)}" loading="lazy"></div>` : ""}
      <div class="cards cards--2 mt-l">
        <div class="card card--mint"><h3>Cómo funciona</h3><ul class="dots">${t.how.map((h) => `<li><strong>${esc(h[0])}:</strong> ${esc(h[1])}</li>`).join("")}</ul></div>
        <div class="card"><h3>Cuándo puede considerarse</h3><ul class="dots">${t.consider.map((h) => `<li><strong>${esc(h[0])}:</strong> ${esc(h[1])}</li>`).join("")}</ul></div>
      </div>
      <div class="balance mt">
        <div class="pros"><h4>Fortalezas</h4><ul>${t.strengths.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="cons"><h4>Límites y riesgos</h4><ul>${t.limits.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
      </div>
      <p class="sources mt"><strong>Fuentes:</strong> ${t.sources.map((s) => extLink(s[0], s[1])).join(" ")}</p>
    </div>`).join("");
  const cell = (c) => c[1] ? `<span class="pill pill--${c[1]}">${esc(c[0])}</span>` : esc(c[0]);
  const compare = `
    <div class="table-wrap"><table class="data compare">
      <thead><tr><th scope="col">Pregunta</th><th scope="col">DBS</th><th scope="col">HIFU</th><th scope="col">RF</th></tr></thead>
      <tbody>${C.comparacion.map((r) => `<tr><td>${esc(r[0])}</td><td data-label="DBS">${cell(r[1])}</td><td data-label="HIFU">${cell(r[2])}</td><td data-label="RF">${cell(r[3])}</td></tr>`).join("")}</tbody>
    </table></div>`;
  const content = [
    block("vistazo", 1, "De un vistazo", "Las tres técnicas actúan sobre circuitos cerebrales del movimiento, pero de forma muy distinta.", compare + `<div class="note mt">${icon.info}<p>Ninguna detiene la progresión del Parkinson. La indicación depende de los síntomas, la respuesta a medicamentos, la evaluación de un equipo especializado y la disponibilidad en Chile.</p></div>`),
    block("detalle", 2, "Cada tratamiento en detalle", "Elige una técnica para ver cómo funciona, cuándo se evalúa, fortalezas y límites.", `<div class="tabs" data-tabs data-tabs-hash><div class="tabs__list" role="tablist" aria-label="Tratamientos avanzados">${tabs}</div>${panels}</div>`),
    block("en-chile", 3, "¿Dónde se realizan en Chile?", "", `<a class="card card--link" href="parkinson-en-chile.html#centros"><h3>Centros con experiencia informada en DBS</h3><p>Programas públicos y privados, equipos referentes y actividad informada, con fecha y fuente.</p><span class="go">Ver centros en Chile${icon.arrow}</span></a>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Vivir con Parkinson", "vivir-con-parkinson.html"], ["Tratamientos avanzados"]], eyebrow: "Vivir con Parkinson · Tratamientos avanzados", title: "DBS, HIFU y RF", lead: "Qué son, en qué se diferencian y qué conviene saber antes de conversarlo con el equipo tratante.", img: "tema-consulta.jpg", alt: "Persona adulta conversando con su médico sobre alternativas de tratamiento", keyidea: "Son opciones para personas cuidadosamente seleccionadas, no una cura." })
    + withToc([["vistazo", "De un vistazo"], ["detalle", "Cada tratamiento"], ["en-chile", "Dónde en Chile"]], ["tratamientos-avanzados"], content)
    + `<div class="container"><nav class="pager" aria-label="Volver"><a class="prev" href="vivir-con-parkinson.html"><small>Volver a</small><strong>${icon.arrowLeft}Vivir con Parkinson</strong></a><a class="next" href="parkinson-en-chile.html"><small>Siguiente sección</small><strong>Parkinson en Chile${icon.arrow}</strong></a></nav></div>`;
  return page({ title: "Tratamientos avanzados: DBS, HIFU y RF", description: "Estimulación cerebral profunda (DBS), ultrasonido focalizado (HIFU) y radiofrecuencia (RF): cómo funcionan, cuándo se evalúan, fortalezas y límites.", active: "vivir-con-parkinson", body });
}

// =============================================================
// 5 · PARKINSON EN CHILE
// =============================================================
function chile() {
  const rows = (arr) => arr.map((r) => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join("");
  const centros = C.centrosChile.map((c) => `
    <tr data-group="${c.sector === "Público" ? "publico" : "privado"}">
      <td data-label="Sector"><span class="pill ${c.sector === "Público" ? "pill--pub" : "pill--priv"}">${c.sector}</span></td>
      <td data-label="Centro"><strong>${c.url ? `<a href="${c.url}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name)}</strong><small>${esc(c.place)}</small></td>
      <td data-label="Equipo referente">${esc(c.team)}</td>
      <td data-label="Actividad DBS informada">${esc(c.dbs)}</td>
    </tr>`).join("");
  const grupos = C.gruposPacientes.map((g) => `
    <tr><td data-label="Región"><strong>${esc(g.region)}</strong></td><td data-label="Organización o red">${esc(g.name)}</td><td data-label="Cómo ubicarla">${g.url ? `<a href="${g.url}" target="_blank" rel="noopener">${esc(g.route)}</a>` : esc(g.route)}</td></tr>`).join("");

  const content = [
    block("ges", 1, "Parkinson es GES Nº 62", "Garantías exigibles para personas beneficiarias de Fonasa e Isapres.", `
      ${cards(C.ges.garantias, { cols: 4, variant: "mint" })}
      <div class="cards cards--2 mt">
        <div class="card"><h3>Qué garantiza</h3><ul class="dots">${rows(C.ges.queGarantiza)}</ul></div>
        <div class="card"><h3>Cómo activarlo</h3><ul class="dots">${rows(C.ges.activar)}</ul></div>
      </div>
      <div class="callout mt"><p class="eyebrow">Si no cumplen un plazo</p><ol class="steps" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">${C.ges.plazos.map((p) => `<li style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.15)"><strong style="color:#fff">${esc(p[0])}</strong><p style="color:#cfe7dc">${esc(p[1])}</p></li>`).join("")}</ol></div>
      <div class="downloads mt">${downloadCard("ges-62", true)}<a class="card card--link" href="hoja-de-ruta.html#mes"><h3>¿Recién diagnosticado?</h3><p>Sigue los pasos para activar el GES con Fonasa o tu Isapre, en orden.</p><span class="go">Ver la hoja de ruta${icon.arrow}</span></a></div>`),
    block("ruta", 2, "Ruta práctica de atención", "Desde la primera consulta hasta el seguimiento: saber qué sigue reduce incertidumbre.", `
      <ol class="steps">${C.ruta.map((p) => `<li><strong>${esc(p[0])}</strong><p>${esc(p[1])}</p></li>`).join("")}</ol>
      <div class="cards cards--2 mt">${C.rutaDetalle.slice(0, 2).map((s) => `<div class="card"><h3>${esc(s[0])}</h3><ul class="dots">${rows(s[1])}</ul></div>`).join("")}</div>
      <div class="note mt">${icon.clipboard}<p><strong>No salgas sin estos datos:</strong> diagnóstico, medicamentos, Constancia GES, prestador y red asignados, derivaciones y fecha del próximo control.</p></div>`),
    block("derechos", 3, "Derechos, beneficios y apoyos", "Cada apoyo tiene requisitos propios: primero identifica la necesidad y luego la puerta correcta.", `
      ${cards(C.tresVias, { cols: 3, variant: "sand" })}
      <div class="note mt">${icon.info}<p><strong>Idea clave:</strong> tener Parkinson no otorga automáticamente una credencial, pensión o prohibición de manejar. Cada trámite evalúa el impacto funcional con reglas distintas.</p></div>
      <h3 class="mt-l">Cómo acreditar discapacidad</h3>
      <ol class="steps">${C.discapacidadPasos.map((p) => `<li><strong>${esc(p[0])}</strong><p>${esc(p[1])}</p></li>`).join("")}</ol>
      <div class="cards cards--2 mt">
        <div class="card"><h3>Manejar: qué cambia realmente</h3><p>El diagnóstico no cancela automáticamente la licencia Clase B. El gabinete médico municipal evalúa aptitud física, psíquica y seguridad.</p></div>
        <div class="card"><h3>Pensión de invalidez</h3><p>No es jubilación anticipada automática. Se inicia en la AFP y decide la Comisión Médica Regional; la decisión puede apelarse.</p></div>
      </div>
      <div class="downloads mt">${downloadCard("derechos-y-tramites", true)}</div>
      <h3 class="mt-l">Dónde preguntar</h3>
      ${cards(C.dondePreguntar, { cols: 3 })}`),
    block("centros", 4, "Centros médicos con experiencia en DBS", "Principales programas públicos y privados con experiencia informada en estimulación cerebral profunda.", `
      <div class="filters" role="group" aria-label="Filtrar centros" data-filter-for="tabla-centros">
        <button type="button" data-value="todos" aria-pressed="true">Todos (${C.centrosChile.length})</button>
        <button type="button" data-value="publico" aria-pressed="false">Públicos</button>
        <button type="button" data-value="privado" aria-pressed="false">Privados</button>
      </div>
      <div class="table-wrap"><table class="data" id="tabla-centros">
        <thead><tr><th scope="col">Sector</th><th scope="col">Centro / ubicación</th><th scope="col">Equipo referente</th><th scope="col">Actividad DBS informada</th></tr></thead>
        <tbody>${centros}</tbody>
      </table></div>
      <p class="source-note">Información pública disponible a ${C.REVISION}. Las cifras no constituyen un registro oficial unificado y deben confirmarse directamente con cada centro.</p>`),
    block("grupos", 5, "Grupos de pacientes en Chile", "Espacios de orientación, acompañamiento y vida comunitaria, de Arica a Magallanes.", `
      <div class="table-wrap"><table class="data">
        <thead><tr><th scope="col">Región</th><th scope="col">Organización o red</th><th scope="col">Cómo ubicarla</th></tr></thead>
        <tbody>${grupos}</tbody>
      </table></div>
      <div class="card card--mint mt"><h3>Antes de integrarte, conviene confirmar</h3><ul class="checks checks--two">${C.gruposChequeo.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>
      <p class="source-note">Los grupos y sus canales pueden cambiar. Confirma siempre la actividad, los responsables y la forma de contacto antes de compartir información personal.</p>`),
    block("fuentes", 6, "Fuentes oficiales", "Elige la fuente según tu pregunta y confirma siempre cómo aplica a tu situación.", `
      <div class="dir">${C.fuentesChile.map((f) => `<article class="dir__item"><h3>${esc(f[0])}</h3><p>${esc(f[1])}</p><a class="ext" href="${f[2]}"${f[2].startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${f[2].startsWith("tel") ? "Llamar" : "Sitio oficial"} ${icon.ext}</a></article>`).join("")}</div>
      <h3 class="mt-l">Cómo reconocer información confiable</h3>
      <div class="cards cards--3">${C.confiable.map((c, i) => `<article class="card" style="border-top:6px solid ${["#2f8f5b", "#d9a400", "#c0392b"][i]}"><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></article>`).join("")}</div>
      <div class="downloads mt">${downloadCard("directorio-chile")}</div>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Parkinson en Chile"]], eyebrow: "Sección 05 · Orientarse", title: "Parkinson en Chile", lead: "GES Nº 62, ruta de atención, derechos y beneficios, centros médicos y grupos de pacientes, desde Arica a Punta Arenas.", img: "tema-chile.jpg", alt: "Santiago con la cordillera de los Andes nevada al fondo", keyidea: "Para usar las garantías GES hay que atenderse en la red designada." })
    + withToc([["ges", "GES Nº 62"], ["ruta", "Ruta de atención"], ["derechos", "Derechos y trámites"], ["centros", "Centros médicos"], ["grupos", "Grupos de pacientes"], ["fuentes", "Fuentes oficiales"]], ["ges-62", "derechos-y-tramites", "directorio-chile"], content)
    + pager("parkinson-en-chile");
  return page({ title: "Parkinson en Chile", description: "GES Nº 62, ruta de atención, derechos y trámites, centros con experiencia en DBS y grupos de pacientes en Chile.", active: "parkinson-en-chile", body });
}

// =============================================================
// 6 · PARKINSON EN EL MUNDO
// =============================================================
function mundo() {
  const orgs = C.organizaciones.map((o) => `<article class="dir__item"><small>${esc(o.scope)}</small><h3>${esc(o.name)}</h3><p>${esc(o.description)}</p><a class="ext" href="${o.url}" target="_blank" rel="noopener">Sitio oficial ${icon.ext}</a></article>`).join("");
  const cms = C.centrosMundo.map((c) => `<tr><td data-label="Centro"><strong><a href="${c.url}" target="_blank" rel="noopener">${esc(c.name)}</a></strong><small>${esc(c.city)}</small></td><td data-label="Fortaleza distintiva">${esc(c.strength)}</td><td data-label="Terapias"><span class="pill pill--pub" style="white-space:normal">${esc(c.therapy)}</span></td></tr>`).join("");
  const figs = C.figuras.map((f) => `<article class="dir__item"><small>${esc(f.field)}</small><h3>${esc(f.name)}</h3><span class="date">${esc(f.date)}</span><p>${esc(f.description)}</p><a class="ext" href="${f.url}" target="_blank" rel="noopener">Fuente ${icon.ext}</a></article>`).join("");
  const ig = C.instagram.map((g) => `<div class="mt"><h3>${esc(g.title)}</h3><div class="dir">${g.accounts.map((a) => `<article class="dir__item"><small>${esc(a.region)}</small><h3>${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">${esc(a.name)}</a>` : esc(a.name)}</h3><p>${esc(a.description)}</p></article>`).join("")}</div></div>`).join("");

  const content = [
    block("organizaciones", 1, "Organizaciones de referencia", "Instituciones que impulsan investigación, educación, apoyo a pacientes e incidencia pública.", `<div class="dir">${orgs}</div><p class="source-note">Consulta el sitio oficial de cada organización para confirmar programas, cobertura, idioma y formas de participación vigentes.</p>`),
    block("centros", 2, "Diez centros internacionales de referencia", "Instituciones con programas especializados, terapias avanzadas e investigación en Parkinson.", `
      <div class="table-wrap"><table class="data"><thead><tr><th scope="col">Centro / ciudad</th><th scope="col">Fortaleza distintiva</th><th scope="col">Terapias</th></tr></thead><tbody>${cms}</tbody></table></div>
      <p class="source-note">Selección informativa actualizada en ${C.REVISION}. No constituye un ranking: los centros publican métricas diferentes y la indicación de cada terapia requiere evaluación médica individual.</p>
      <div class="cards cards--2 mt">${C.antesDeContactar.map((s) => `<div class="card card--mint"><h3>Antes de contactar un centro: ${esc(s[0].toLowerCase())}</h3><ul class="dots">${s[1].map((r) => `<li><strong>${esc(r[0])}:</strong> ${esc(r[1])}</li>`).join("")}</ul></div>`).join("")}</div>`),
    block("figuras", 3, "Figuras públicas que han vivido con Parkinson", "Sus trayectorias han dado visibilidad a la enfermedad y muestran que cada experiencia es diferente.", `<div class="dir">${figs}</div><div class="note mt">${icon.info}<p><strong>Importante:</strong> estas historias aportan visibilidad, pero no predicen la evolución de otra persona. El diagnóstico, los síntomas y la respuesta al tratamiento son individuales.</p></div>`),
    block("redes", 4, "Cuentas recomendadas en Instagram", "Médicos, terapeutas, investigación y comunidad, en Chile y el mundo.", `${ig}<p class="source-note">Selección elaborada a partir de notas de prensa y directorios institucionales revisados en ${C.REVISION}. Instagram no publica un ranking oficial; esta lista refleja reconocimiento y cobertura, no cifras verificadas de seguidores.</p>`),
  ].join("");
  const body = pageHero({ crumbs: [HOME, ["Parkinson en el mundo"]], eyebrow: "Sección 06 · Explorar", title: "Parkinson en el mundo", lead: "Organizaciones, centros internacionales, figuras públicas y recursos para seguir aprendiendo más allá de Chile.", img: null })
    + withToc([["organizaciones", "Organizaciones"], ["centros", "Centros internacionales"], ["figuras", "Figuras públicas"], ["redes", "Redes sociales"]], ["recursos-internacionales"], content)
    + pager("parkinson-en-el-mundo");
  return page({ title: "Parkinson en el mundo", description: "Organizaciones internacionales, centros de referencia, figuras públicas con Parkinson y cuentas recomendadas.", active: "parkinson-en-el-mundo", body });
}

// =============================================================
// HOJA DE RUTA (recién diagnosticados)
// =============================================================
const pendingTag = (p) => (p && C.PROTOTIPO ? `<span class="pending" title="Texto nuevo: debe revisarse antes de publicar">Por validar</span>` : "");
const tagAttr = (t) => (t && t.length ? ` data-tags="${t.join(" ")}"` : "");

function hojaDeRuta() {
  const totalSteps = C.hojaDeRuta.reduce((n, s) => n + s.steps.length, 0);
  const seg = (group, label, opts) => `
    <div class="seg-group">
      <span class="seg-label" id="lbl-${group}">${esc(label)}</span>
      <div class="seg" role="group" aria-labelledby="lbl-${group}">${opts.map((o) => `<button type="button" data-profile="${group.replace(/-m$/, "")}" data-value="${o[0]}" aria-pressed="false">${esc(o[1])}</button>`).join("")}</div>
    </div>`;

  const profileHtml = (sfx) => seg("prevision" + sfx, "Mi previsión", [["fonasa", "Fonasa"], ["isapre", "Isapre"], ["ambas", "No sé"]])
    + seg("trabajo" + sfx, "¿Trabajas?", [["si", "Sí"], ["no", "No"]])
    + seg("maneja" + sfx, "¿Manejas?", [["si", "Sí"], ["no", "No"]]);

  const stages = C.hojaDeRuta.map((st, i) => `
    <section class="stage" id="${st.id}" aria-labelledby="${st.id}-t" data-stage>
      <span class="stage__dot" aria-hidden="true">${i + 1}</span>
      <header class="stage__head">
        <span class="stage__when">${esc(st.when)}</span>
        <h2 id="${st.id}-t">${esc(st.title)}</h2>
        <p>${esc(st.intro)}</p>
        <span class="stage__count" data-stage-count aria-live="polite"></span>
      </header>
      <ul class="steplist">${st.steps.map((s) => `
        <li${tagAttr(s.tags)}>
          <label class="stepcard">
            <input type="checkbox" data-step="${s.id}">
            <span class="stepcard__box" aria-hidden="true"></span>
            <span class="stepcard__body">
              <strong>${esc(s.title)} ${pendingTag(s.pending)}${(s.tags || []).filter((t) => t === "fonasa" || t === "isapre").map((t) => `<span class="ptag">${t === "fonasa" ? "Fonasa" : "Isapre"}</span>`).join("")}</strong>
              <span class="stepcard__text">${esc(s.text)}</span>
            </span>
          </label>
          ${s.link ? `<a class="steplink" href="${s.link[1]}"${s.link[1].endsWith(".pdf") ? " download" : ""}>${esc(s.link[0])}${icon.arrow}</a>` : ""}
        </li>`).join("")}
      </ul>
    </section>`).join("");

  const later = C.masAdelante.map((m) => `<article class="card"${tagAttr(m.tags)}><h3>${esc(m.title)} ${pendingTag(m.pending)}</h3><p>${esc(m.text)}</p>${m.link ? `<a class="steplink" href="${m.link[1]}">${esc(m.link[0])}${icon.arrow}</a>` : ""}</article>`).join("");


  const nav = C.hojaDeRuta.map((s, i) => `<li><a href="#${s.id}"><span>${pad(i + 1)}</span>${esc(s.when)}</a></li>`).join("")
    + `<li><a href="#mas-adelante"><span>${pad(C.hojaDeRuta.length + 1)}</span>Más adelante</a></li>`;

  const body = pageHero({ crumbs: [HOME, ["Hoja de ruta"]], eyebrow: "Recién diagnosticado", title: "Tu hoja de ruta después del diagnóstico", lead: "Qué hacer esta semana, este mes y este año: los pasos prácticos con Fonasa o tu Isapre, tu equipo de salud, tu trabajo y tu familia. A tu ritmo, un paso a la vez.", img: "contacto-familia.jpg", alt: "Hombre adulto conversando con una familiar en un ambiente cercano", keyidea: "No tienes que hacerlo todo hoy. Marca cada paso cuando lo completes." })
    + (C.PROTOTIPO ? `<div class="container"><div class="proto-banner">${icon.info}<p><strong>Versión prototipo para revisión.</strong> Los puntos marcados <span class="pending">Por validar</span> son texto nuevo que no está en el material aprobado: deben revisarlos los fundadores y, en lo médico o legal, un profesional, antes de publicar.</p></div></div>` : "")
    + `
<div class="container">
  <div class="with-toc">
    <aside class="toc" aria-label="Tu ruta">
      <div class="toc__box profile" data-profile-panel>
        <p class="toc__title">Personaliza tu ruta</p>
        ${profileHtml("")}
      </div>
      <div class="toc__box progress-box">
        <p class="toc__title">Tu avance</p>
        <div class="progress" aria-hidden="true"><span data-progress-bar></span></div>
        <p class="progress__text" data-progress-text aria-live="polite">0 de ${totalSteps} pasos</p>
        <nav data-toc aria-label="Etapas"><ol>${nav}</ol></nav>
        <button type="button" class="linkbtn" data-reset>Reiniciar mis marcas</button>
      </div>
      <div class="toc__dl"><p class="toc__title">Para imprimir</p><a href="descargas/hoja-de-ruta.pdf" download>${icon.download}<span>Mi hoja de ruta (PDF)</span></a><a href="descargas/preparar-la-consulta.pdf" download>${icon.download}<span>Preparar la consulta</span></a></div>
    </aside>
    <div>
      <details class="profile-mobile">
        <summary><span>Personaliza tu ruta</span><span class="progress__text" data-progress-text></span></summary>
        <div class="profile">${profileHtml("-m")}</div>
        <div class="progress" aria-hidden="true"><span data-progress-bar></span></div>
        <button type="button" class="linkbtn" data-reset>Reiniciar mis marcas</button>
      </details>
      <div class="roadmap">${stages}</div>

      <section class="block-plain" id="mas-adelante" aria-labelledby="mas-adelante-t">
        <span class="stage__when">Más adelante</span>
        <h2 id="mas-adelante-t">Lo que puede venir</h2>
        <p class="muted">Saberlo con tiempo ayuda a prepararse sin alarmarse. No todo le ocurre a todas las personas, ni al mismo ritmo.</p>
        <div class="cards cards--3">${later}</div>
      </section>

      <section class="block-plain" id="alertas" aria-labelledby="alertas-t">
        <div class="callout">
          <p class="eyebrow">En cualquier etapa</p>
          <h3 id="alertas-t">Cuándo consultar antes del próximo control</h3>
          <ul class="dots">${C.alertas.map((a) => `<li>${esc(a.text)} ${pendingTag(a.pending)}</li>`).join("")}</ul>
          <p>Orientación profesional 24/7: <a href="tel:6003607777" style="color:var(--lime);font-weight:700">Salud Responde 600 360 7777</a>.</p>
        </div>
      </section>


      <section class="block-plain">
        <div class="downloads">${downloadCard("hoja-de-ruta", true)}${downloadCard("preparar-la-consulta")}${downloadCard("ges-62")}</div>
      </section>
    </div>
  </div>
</div>`;
  return page({ title: "Hoja de ruta para personas recién diagnosticadas", description: "Qué hacer después del diagnóstico de Parkinson: primera semana, primer mes, primeros meses y primer año. GES 62 con Fonasa o Isapre, equipo de salud, trabajo y familia.", active: "hoja-de-ruta", body });
}

// =============================================================
// DESCARGAS
// =============================================================
function descargasPage() {
  const groups = C.secciones.filter((s) => C.descargas.some((d) => d.seccion === s.id)).map((s) => `
    <div class="mt-l"><h2 style="font-size:1.35rem">${esc(s.label)}</h2><div class="downloads">${C.descargas.filter((d) => d.seccion === s.id).map((d) => downloadCard(d.id, d.destacado)).join("")}</div></div>`).join("");
  const body = pageHero({ crumbs: [HOME, ["Descargas"]], eyebrow: "Para imprimir y llevar", title: "Descargas", lead: "Guías en PDF para leer con calma, imprimir, llevar a la consulta o compartir con tu familia. Todas son gratuitas.", img: null })
    + `<div class="container section--tight" style="padding-top:8px">${groups}
      <div class="note mt-l">${icon.info}<p>Información revisada en ${C.REVISION}. Las guías son educativas y no reemplazan la indicación de tu equipo de salud. Si encuentras un dato desactualizado, escríbenos a <a href="mailto:${C.contacto.email}">${C.contacto.email}</a>.</p></div>
    </div>`;
  return page({ title: "Descargas", description: "Guías en PDF de Parkinson Chile: preparar la consulta, GES Nº 62, derechos y trámites, medicamentos, ejercicio, alimentación y más.", active: "descargas", body });
}

export const paginas = {
  "index.html": inicio,
  "quienes-somos.html": quienesSomos,
  "que-es-el-parkinson.html": queEs,
  "diagnostico.html": diagnostico,
  "vivir-con-parkinson.html": vivir,
  "tratamientos-avanzados.html": avanzados,
  "parkinson-en-chile.html": chile,
  "parkinson-en-el-mundo.html": mundo,
  "descargas.html": descargasPage,
  "hoja-de-ruta.html": hojaDeRuta,
};

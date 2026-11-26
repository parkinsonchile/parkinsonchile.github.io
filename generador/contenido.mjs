// =============================================================
// Contenido de Parkinson Chile
// Fuente: sitio publicado (versión 82), presentación 02 y documento
// maestro de traspaso. Para cambiar un texto del sitio o de los PDF,
// se edita aquí y se vuelve a ejecutar: node generador/build.mjs
// =============================================================

export const REVISION = "agosto de 2026";

export const contacto = {
  email: "contacto@parkinsonchile.org",
  telefono: "+56 9 9522 0884",
  telefonoHref: "+56995220884",
  whatsapp: "https://wa.me/56995220884",
};

// ---------- Secciones (las seis del documento maestro) ----------
// Para ocultar una sección sin perder su contenido: oculta: true (no se publica ni aparece en menús).
const todasLasSecciones = [
  { id: "quienes-somos", file: "quienes-somos.html", nav: "Quiénes somos", label: "Quiénes somos", kicker: "Conocernos", img: "tema-vida.jpg",
    copy: "Nuestra historia, misión, visión y las personas detrás de Parkinson Chile." },
  { id: "que-es-el-parkinson", file: "que-es-el-parkinson.html", nav: "Qué es", label: "Qué es el Parkinson", kicker: "Comprender", img: "pareja-parque.jpg",
    copy: "Qué ocurre en el cerebro, síntomas motores y no motores, causas y mitos." },
  { id: "diagnostico", file: "diagnostico.html", nav: "Diagnóstico", label: "Diagnóstico", kicker: "Detectar", img: "lamina-14.jpg",
    copy: "Señales de consulta, cómo se llega al diagnóstico y cómo preparar la cita." },
  { id: "vivir-con-parkinson", file: "vivir-con-parkinson.html", nav: "Vivir con Parkinson", label: "Vivir con Parkinson", kicker: "Acompañar", img: "lamina-13.jpg",
    copy: "Tratamiento, medicamentos, ejercicio, alimentación, vida diaria y tratamientos avanzados." },
  { id: "parkinson-en-chile", file: "parkinson-en-chile.html", nav: "En Chile", label: "Parkinson en Chile", kicker: "Orientarse", img: "tema-chile.jpg",
    copy: "GES Nº 62, ruta de atención, derechos y trámites, centros y grupos de pacientes." },
  { id: "parkinson-en-el-mundo", oculta: true, file: "parkinson-en-el-mundo.html", nav: "En el mundo", label: "Parkinson en el mundo", kicker: "Explorar", img: null,
    copy: "Organizaciones, centros internacionales de referencia y figuras públicas." },
];

// ---------- Descargas (PDF) ----------
const todasLasDescargas = [
  { id: "hoja-de-ruta", title: "Mi hoja de ruta", desc: "Los primeros pasos después del diagnóstico, etapa por etapa, con casillas para marcar.", seccion: "diagnostico", destacado: true },
  { id: "preparar-la-consulta", title: "Preparar la consulta", desc: "Lista para llevar, 10 preguntas para el especialista y un registro de síntomas para completar.", seccion: "diagnostico", destacado: true },
  { id: "ges-62", title: "GES Nº 62: cómo usarlo", desc: "Garantías, cómo activarlo con Fonasa o Isapre, costos, plazos, reclamos y ruta de atención.", seccion: "parkinson-en-chile", destacado: true },
  { id: "derechos-y-tramites", title: "Derechos y trámites", desc: "Credencial de discapacidad, beneficios, licencia de conducir y pensión de invalidez.", seccion: "parkinson-en-chile", destacado: true },
  { id: "medicamentos", title: "Medicamentos", desc: "Principios del tratamiento, familias de fármacos, horarios y comidas.", seccion: "vivir-con-parkinson" },
  { id: "ejercicio", title: "Ejercicio", desc: "Por qué importa, meta semanal de referencia y los cuatro componentes.", seccion: "vivir-con-parkinson" },
  { id: "alimentacion", title: "Alimentación", desc: "Objetivos, una base cotidiana y prioridades prácticas.", seccion: "vivir-con-parkinson" },
  { id: "vida-diaria", title: "Vida diaria y autonomía", desc: "Estrategias, seis áreas a observar y cómo organizar el día.", seccion: "vivir-con-parkinson" },
  { id: "tratamientos-avanzados", title: "Tratamientos avanzados: DBS, HIFU y RF", desc: "Cómo funcionan, cuándo se evalúan, fortalezas, límites y fuentes.", seccion: "vivir-con-parkinson" },
  { id: "directorio-chile", title: "Directorio en Chile", desc: "Centros con experiencia en DBS, grupos de pacientes por región y fuentes oficiales.", seccion: "parkinson-en-chile" },
  { id: "recursos-internacionales", oculta: true, title: "Recursos internacionales", desc: "Organizaciones, centros de referencia y cuentas de Instagram recomendadas.", seccion: "parkinson-en-el-mundo" },
];

export const ocultas = new Set([...todasLasSecciones, ...todasLasDescargas].filter((x) => x.oculta).map((x) => x.id));
export const secciones = todasLasSecciones.filter((s) => !s.oculta);
export const descargas = todasLasDescargas.filter((d) => !d.oculta && !ocultas.has(d.seccion));

// ---------- Hoja de ruta para personas recién diagnosticadas ----------
// PROTOTIPO: mientras sea true, la página muestra el aviso y las etiquetas "Por validar".
export const PROTOTIPO = true;
// tags: "fonasa" | "isapre" | "trabajo" | "maneja"  (sin tags = aplica a todos)
// pending: true = texto nuevo que no está en el material aprobado; debe revisarse antes de publicar.
export const hojaDeRuta = [
  {
    id: "semana", when: "Primera semana", title: "Respirar y ordenar",
    intro: "No necesitas resolver todo esta semana. El objetivo es entender lo básico y no perder papeles.",
    steps: [
      { id: "s1", title: "Date tiempo para procesar la noticia", text: "Es normal sentir miedo, rabia, tristeza o incluso alivio por tener una explicación. Hablarlo con alguien de confianza ayuda.", pending: true },
      { id: "s2", title: "Entiende qué es el Parkinson", text: "Es una enfermedad neurológica progresiva, tratable y mucho más amplia que el temblor. Hoy no tiene cura, pero sí tratamientos que controlan síntomas.", link: ["Qué es el Parkinson", "que-es-el-parkinson.html"] },
      { id: "s3", title: "Pide la Constancia GES", text: "El Parkinson es GES Nº 62. El médico que confirma el diagnóstico completa la Constancia GES: es la llave para activar tus garantías.", link: ["Qué cubre el GES 62", "parkinson-en-chile.html#ges"] },
      { id: "s4", title: "Arma tu carpeta", text: "Guarda en un solo lugar la constancia, el diagnóstico, recetas, exámenes, el prestador asignado, fechas y comprobantes." },
      { id: "s5", title: "No cambies medicamentos por tu cuenta", text: "No suspendas, inicies ni cambies dosis u horarios sin conversar con tu equipo tratante." },
    ],
  },
  {
    id: "mes", when: "Primer mes", title: "Activar tus derechos",
    intro: "Con la constancia en la mano, el siguiente paso es que tu seguro de salud te asigne la red GES.",
    steps: [
      { id: "m1", tags: ["fonasa"], title: "Fonasa: ve a tu CESFAM", text: "La puerta habitual es el CESFAM o consultorio. Confirma la Constancia GES y entrega el formulario donde te indiquen. En la red pública, bajo la Modalidad de Atención Institucional, el copago es cero." },
      { id: "m2", tags: ["isapre"], title: "Isapre: presenta la Constancia GES", text: "Preséntala en tu Isapre para que te asigne la red GES. Para usar las garantías hay que atenderse en esa red; revisa copagos y prestaciones antes de atenderte fuera de ella." },
      { id: "m3", title: "Conoce tus plazos y cómo reclamar", text: "Si no cumplen un plazo GES, tienes 30 días para reclamar ante Fonasa o tu Isapre. Si no se resuelve, puedes reclamar ante la Superintendencia de Salud.", link: ["Plazos y reclamos", "parkinson-en-chile.html#ges"] },
      { id: "m4", tags: ["isapre"], title: "Antes de cambiar de Isapre, infórmate", text: "Un diagnóstico conocido puede considerarse preexistencia al contratar un nuevo plan. Antes de cambiarte, consulta en la Superintendencia de Salud cómo te afecta.", pending: true },
      { id: "m5", title: "Revisa tus seguros complementarios", text: "Si tienes un seguro de salud complementario o catastrófico, revisa la póliza: qué cubre, deducibles, si pide declarar el diagnóstico y plazos para hacerlo.", pending: true },
      { id: "m6", title: "Decide cómo y cuándo contarlo", text: "No hay una forma correcta. Puedes empezar por tu círculo más cercano y avanzar a tu ritmo. Contarlo también permite que otros te apoyen.", pending: true },
    ],
  },
  {
    id: "trimestre", when: "Primeros 3 meses", title: "Armar tu equipo",
    intro: "El tratamiento es más que medicamentos. Este es el momento de sumar movimiento, rehabilitación y buenos registros.",
    steps: [
      { id: "t1", title: "Ten un neurólogo de referencia", text: "Idealmente, especialista en trastornos del movimiento. Define con él o ella dos o tres prioridades para cada control." },
      { id: "t2", title: "Empieza a moverte con guía", text: "El ejercicio es parte central del tratamiento. Idealmente, parte con una evaluación de kinesiología y avanza gradualmente hacia unos 150 minutos semanales.", link: ["Ejercicio", "vivir-con-parkinson.html#ejercicio"] },
      { id: "t3", title: "Suma rehabilitación si la necesitas", text: "Fonoaudiología para voz y deglución; terapia ocupacional para autonomía, hogar y trabajo. Con tratamiento, el GES incluye acceso a rehabilitación cuando está indicada." },
      { id: "t4", title: "Lleva un registro de síntomas", text: "Anota horarios de medicamentos, períodos ON/OFF, sueño, ánimo, caídas y estreñimiento. Llévalo a cada control.", link: ["Hoja para la consulta (PDF)", "descargas/preparar-la-consulta.pdf"] },
      { id: "t5", tags: ["trabajo"], title: "Piensa tu situación laboral", text: "El diagnóstico no te obliga a dejar de trabajar. Pueden existir ajustes razonables según el caso. Decidir si contarlo en tu trabajo, y cuándo, es una decisión personal.", pending: true, link: ["Derechos y trámites", "parkinson-en-chile.html#derechos"] },
      { id: "t6", tags: ["maneja"], title: "Conversa sobre manejar", text: "El diagnóstico no cancela automáticamente tu licencia. En la renovación, el gabinete municipal evalúa tu aptitud: lleva un informe reciente del neurólogo." },
      { id: "t7", title: "Cuida tu ánimo", text: "Ansiedad, depresión o apatía son parte de la enfermedad y son tratables. Pide apoyo de salud mental si lo necesitas." },
    ],
  },
  {
    id: "anio", when: "Primer año", title: "Sostener y conectar",
    intro: "Con el plan en marcha, la clave es la constancia y no hacerlo solo.",
    steps: [
      { id: "a1", title: "Asiste a tus controles", text: "La respuesta al tratamiento cambia con el tiempo. Pregunta qué hacer si empeoras y a quién llamar." },
      { id: "a2", title: "Conoce un grupo de pacientes", text: "Compartir con personas que viven lo mismo es una de las formas más concretas de apoyo.", link: ["Grupos por región", "parkinson-en-chile.html#grupos"] },
      { id: "a3", title: "Aprende a reconocer información confiable", text: "Desconfía de lo que promete cura, pide suspender fármacos o vende con urgencia.", link: ["Fuentes oficiales", "parkinson-en-chile.html#fuentes"] },
      { id: "a4", title: "Cuida también a quien te acompaña", text: "La persona cuidadora también necesita información, descanso y apoyo." },
      { id: "a5", tags: ["trabajo"], title: "Revisa tu situación previsional", text: "Conocer con tiempo cómo funcionan la pensión de invalidez y tus opciones en la AFP ayuda a decidir con calma, no por urgencia.", pending: true },
    ],
  },
];
export const masAdelante = [
  { title: "Cada camino es distinto", text: "Los síntomas suelen avanzar de forma gradual y varían mucho entre personas. Las historias de otros no predicen la tuya." },
  { title: "El efecto de las dosis puede cambiar", text: "Con los años, algunas personas notan que el efecto de cada dosis dura menos (períodos OFF) o aparecen movimientos involuntarios (discinesias). Se maneja ajustando el tratamiento con el equipo.", pending: true },
  { title: "Equilibrio y caídas", text: "La inestabilidad y las caídas suelen aparecer más adelante. Kinesiología y ejercicio de equilibrio ayudan a prevenirlas." },
  { title: "Tratamientos avanzados", text: "Si los síntomas ya no se controlan bien con medicamentos, existen opciones como DBS para personas seleccionadas.", link: ["DBS, HIFU y RF", "tratamientos-avanzados.html"] },
  { title: "Credencial de discapacidad", text: "Cuando existen limitaciones, la certificación abre la puerta a postular a beneficios. No es automática ni obligatoria.", link: ["Cómo acreditar", "parkinson-en-chile.html#derechos"] },
  { tags: ["trabajo"], title: "Pensión de invalidez", text: "No es jubilación anticipada automática: se inicia en la AFP y decide la Comisión Médica Regional." },
];
export const alertas = [
  { text: "Un síntoma que aparece de forma súbita o cambia bruscamente requiere evaluación médica oportuna: no asumas que es el Parkinson." },
  { text: "Caídas, confusión, alucinaciones, desmayos o dificultad para tragar merecen consulta pronta.", pending: true },
];

// ---------- Qué es el Parkinson (antes era una imagen) ----------
export const cerebro = [
  ["Sustancia negra", "En esta pequeña zona del cerebro se dañan progresivamente neuronas que producen dopamina."],
  ["Dopamina", "Actúa como mensajero químico y ayuda a que los movimientos sean fluidos, precisos y automáticos."],
  ["Circuitos", "Al disminuir la dopamina, los circuitos que regulan el movimiento trabajan con menos eficiencia."],
];
export const sintomasMotores = [
  ["Lentitud (bradicinesia)", "Menos velocidad, gestos más pequeños y dificultad para iniciar tareas. Es un signo central."],
  ["Rigidez", "Sensación de tensión o resistencia; puede asociarse a dolor y menor balanceo de brazos."],
  ["Temblor de reposo", "Frecuente en mano, pierna o mandíbula; puede comenzar de un solo lado. No todas las personas lo tienen."],
  ["Marcha y postura", "Pasos más cortos, menor balanceo de brazos, giros lentos o postura inclinada."],
  ["Freezing (bloqueo)", "Sensación breve de pies pegados al suelo, sobre todo al iniciar la marcha, girar o cruzar puertas."],
  ["Equilibrio", "La inestabilidad y las caídas suelen aparecer más adelante y requieren evaluación."],
];
export const sintomasNoMotores = [
  ["Sueño y energía", "Insomnio, actuar los sueños, somnolencia diurna o fatiga persistente."],
  ["Autonómicos y digestivos", "Estreñimiento, presión baja al ponerse de pie, sudoración o síntomas urinarios."],
  ["Ánimo y pensamiento", "Ansiedad, depresión, apatía, lentitud mental o cambios de atención y memoria."],
  ["Sensoriales y comunicación", "Pérdida de olfato, dolor, voz más baja o dificultades para tragar."],
];
export const causas = [
  ["Edad", "Principal factor de riesgo."],
  ["Genética", "Variantes que aumentan el riesgo."],
  ["Ambiente", "Algunas exposiciones asociadas."],
  ["Biología", "Procesos celulares en estudio."],
];
export const mitos = [
  ["“Si no hay temblor, no es Parkinson”", "La bradicinesia es central; el temblor puede estar ausente."],
  ["“Solo afecta el movimiento”", "Sueño, ánimo, digestión, dolor y cognición también importan."],
  ["“Nada se puede hacer”", "Medicamentos, ejercicio, rehabilitación y otras terapias ayudan a controlar síntomas."],
  ["“Se puede medir mirando a la persona”", "Los síntomas fluctúan y muchos no son visibles."],
  ["“Es una enfermedad de la vejez”", "También puede aparecer antes de los 50 años (Parkinson de inicio joven)."],
];

// ---------- Diagnóstico ----------
export const diagnosticoPiezas = [
  ["Historia", "Cuándo comenzaron los cambios, cómo evolucionan, antecedentes, fármacos y síntomas motores y no motores."],
  ["Examen", "Movimiento, tono muscular, temblor, coordinación, marcha, giros, postura, equilibrio, voz y expresión."],
  ["Seguimiento", "La evolución y, cuando corresponde, la respuesta al tratamiento aportan información diagnóstica."],
];
export const diagnosticoPasos = [
  ["Conversar y ordenar", "Síntomas, fecha de inicio, lado más afectado, ritmo de progresión, antecedentes familiares y medicamentos actuales o previos."],
  ["Examinar el movimiento", "Se buscan signos de parkinsonismo. Para considerar Parkinson, la bradicinesia es central, junto con temblor de reposo o rigidez."],
  ["Revisar otras causas", "El profesional considera fármacos y condiciones que pueden producir síntomas parecidos, además de señales atípicas."],
  ["Observar la evolución", "En etapas iniciales puede ser necesario controlar en el tiempo. La respuesta a medicación dopaminérgica puede aportar pistas."],
];
export const examenes = [
  ["RM / imágenes", "Ayudan principalmente a buscar otras causas estructurales; una resonancia no confirma Parkinson por sí sola."],
  ["Sangre / laboratorio", "Pueden descartar trastornos metabólicos u otras condiciones que expliquen síntomas similares."],
  ["DaTscan / SPECT", "En casos seleccionados muestra déficit dopaminérgico. No distingue por sí solo Parkinson típico de parkinsonismos atípicos."],
];
export const segundaOpinion = [
  "Si el diagnóstico no está claro o los síntomas son poco habituales.",
  "Si la evolución es rápida, hay caídas tempranas o respuesta inesperada al tratamiento.",
  "Antes de decisiones complejas o terapias avanzadas.",
];
export const checklistConsulta = [
  "Fecha aproximada y primer síntoma.",
  "Qué cambió y desde cuándo.",
  "Lado del cuerpo donde comenzó.",
  "Cuándo ocurre cada síntoma y cuánto dura.",
  "Lista completa de medicamentos y suplementos, con dosis y horarios.",
  "Qué actividad cotidiana se ve afectada.",
  "Exámenes e informes anteriores.",
  "Cambios observados por la familia.",
  "Videos breves de los síntomas, solo si es seguro grabarlos.",
];
export const diezPreguntas = [
  "¿Cuál es mi diagnóstico y qué tan seguro es?",
  "¿Qué síntomas debemos priorizar?",
  "¿Para qué sirve cada medicamento?",
  "¿Qué efectos adversos debo vigilar?",
  "¿Cómo debo coordinar levodopa y comidas?",
  "¿Qué ejercicio es seguro y recomendable para mí?",
  "¿Necesito kinesiología, fonoaudiología o terapia ocupacional?",
  "¿Qué síntomas no motores debemos tratar?",
  "¿Cuándo debería considerar tratamientos avanzados?",
  "¿Qué prestaciones GES me corresponden y en qué red?",
];

// ---------- Vivir con Parkinson ----------
export const tratamientoObjetivos = [
  ["Controlar", "Reducir el impacto de síntomas motores y no motores que resultan prioritarios para la persona."],
  ["Mantener función", "Favorecer movilidad, comunicación, autonomía, trabajo, actividades y participación social."],
  ["Cuidar calidad de vida", "Equilibrar beneficios, efectos adversos, seguridad y objetivos personales en cada etapa."],
];
export const pilares = [
  ["Medicamentos", "La levodopa es fundamental, junto con otras familias de fármacos. Dosis y horarios importan tanto como el nombre del fármaco."],
  ["Ejercicio", "Parte central del manejo: regular, desafiante y seguro. Combina trabajo aeróbico, fuerza, equilibrio y movilidad."],
  ["Rehabilitación", "Kinesiología (marcha, equilibrio, fuerza); terapia ocupacional y fonoaudiología (autonomía, voz y deglución)."],
  ["Opciones avanzadas", "Para personas seleccionadas con síntomas difíciles de controlar. Requieren evaluación especializada; no son una cura."],
];
export const equipo = [
  ["Neurología", "Diagnóstico, fármacos y coordinación clínica."],
  ["Kinesiología", "Movimiento, ejercicio, marcha y equilibrio."],
  ["Terapia ocupacional", "Autonomía, hogar, trabajo y actividades."],
  ["Fonoaudiología", "Voz, comunicación y deglución."],
  ["Salud mental", "Ánimo, adaptación, cognición y apoyo."],
  ["Nutrición", "Peso, hidratación, tránsito y comidas/fármacos."],
];

// Fichas detalladas (web resume, PDF completo). Formato: [título sección, [[título, texto], ...]]
export const fichas = {
  medicamentos: {
    eyebrow: "Vivir con Parkinson · Tratamiento", title: "Medicamentos: qué conviene entender",
    subtitle: "La dosis correcta, a la hora correcta. La pauta siempre debe individualizarse.",
    sections: [
      ["Tres principios", [["Objetivo", "Tratar los síntomas que más afectan función y calidad de vida, con el menor impacto adverso posible."], ["Individualizar", "Edad, etapa, trabajo, otras enfermedades, cognición, sueño y preferencias influyen en la elección."], ["Revisar", "La respuesta cambia con el tiempo; registra horarios, períodos ON/OFF y efectos."]]],
      ["Principales familias", [["Levodopa", "Es el tratamiento más eficaz para lentitud, rigidez y otros síntomas motores."], ["Agonistas dopaminérgicos", "Pramipexol, ropinirol y rotigotina; requieren vigilar somnolencia y conductas impulsivas."], ["Inhibidores MAO-B", "Rasagilina, selegilina y safinamida reducen la degradación de dopamina."], ["Inhibidores COMT", "Se añaden a levodopa para prolongar el período ON y reducir el desgaste de dosis."], ["Amantadina", "Puede ayudar a síntomas motores y especialmente a discinesias inducidas por levodopa."], ["Anticolinérgicos", "Uso limitado y seleccionado, principalmente para temblor; pueden afectar memoria y visión."]]],
      ["Horarios y comidas", [["Regularidad", "Respeta el horario indicado y no cambies dosis por cuenta propia."], ["Proteínas e hierro", "En algunas personas interfieren con la absorción de levodopa; el ajuste debe acordarse con el equipo tratante."]]],
    ],
    important: "Nunca cambies dosis, horarios ni suspendas un medicamento sin conversar con tu equipo tratante.",
  },
  ejercicio: {
    eyebrow: "Vivir con Parkinson · Movimiento", title: "Ejercicio: parte esencial del tratamiento",
    subtitle: "Constancia, desafío y seguridad. El programa debe adaptarse a cada persona.",
    sections: [
      ["Por qué importa", [["Movilidad", "Apoya marcha, amplitud, coordinación y velocidad de movimiento."], ["Capacidad física", "Mejora resistencia, fuerza, postura, flexibilidad y salud cardiovascular."], ["Seguridad", "Entrena equilibrio, reacción y estrategias para reducir caídas."], ["Bienestar", "Puede beneficiar ánimo, sueño, cognición, fatiga y participación."]]],
      ["Referencia semanal", [["150 minutos", "Meta adaptable de actividad moderada a vigorosa, distribuida según condición física, síntomas y seguridad."], ["Progresión", "Comienza desde tu nivel real y aumenta gradualmente con orientación profesional cuando sea necesario."]]],
      ["Cuatro componentes", [["Actividad aeróbica", "Caminar rápido, bicicleta, natación, baile o intervalos, idealmente tres días por semana."], ["Fuerza", "Dos o tres días no consecutivos, priorizando técnica, postura y rango."], ["Equilibrio y agilidad", "Giros, cambios de peso, tai chi, baile o boxeo sin contacto cerca de un apoyo estable."], ["Flexibilidad", "Movilidad activa y estiramientos sostenidos con respiración."]]],
    ],
    important: "Idealmente, comienza con una evaluación de kinesiología con experiencia neurológica. La mejor rutina es la que es segura, suficientemente desafiante y sostenible.",
  },
  alimentacion: {
    eyebrow: "Vivir con Parkinson · Alimentación", title: "Alimentación y Parkinson",
    subtitle: "No existe una dieta que cure el Parkinson. Comer bien sostiene energía, salud, digestión y tratamiento.",
    sections: [
      ["Qué buscamos", [["Energía", "Comer suficiente para mantener actividad, atención y recuperación."], ["Músculo y hueso", "Aportar proteína, calcio, vitamina D y energía según necesidad."], ["Digestión", "Favorecer hidratación, fibra y regularidad intestinal."], ["Tratamiento", "Coordinar comidas y medicamentos cuando exista interferencia."]]],
      ["Una base cotidiana", [["Verduras y frutas", "Colores y preparaciones variadas."], ["Cereales integrales", "Avena, arroz integral, quinoa y pan integral."], ["Proteínas", "Legumbres, pescado, huevos, aves, tofu, lácteos o frutos secos."], ["Agua y grasas saludables", "Aceite de oliva, palta, frutos secos y semillas."]]],
      ["Prioridades prácticas", [["Más vegetales", "Aumenta la fibra gradualmente si hoy consumes poca."], ["Proteína suficiente", "No se recomienda eliminarla por usar levodopa; ajusta distribución si tu médico lo indica."], ["Grasas de buena calidad", "Apoyan el aporte energético y la salud cardiovascular."], ["Menos ultraprocesados", "Reducir exceso de sal, azúcar y grasas saturadas deja espacio a alimentos nutritivos."]]],
    ],
    important: "Si hay dificultad para tragar, baja de peso o estreñimiento persistente, conviene una evaluación profesional. Evita suplementos “milagrosos” sin revisar evidencia e interacciones.",
  },
  "vida-diaria": {
    eyebrow: "Vivir con Parkinson · Vida cotidiana", title: "Vida diaria: conservar autonomía",
    subtitle: "Vivir bien también significa anticipar, adaptar y pedir apoyo a tiempo.",
    sections: [
      ["Autonomía con estrategia", [["Priorizar", "Reserva tus mejores momentos del día para tareas significativas o exigentes."], ["Simplificar", "Divide actividades en pasos, prepara materiales y reduce la multitarea insegura."], ["Adaptar", "Terapia ocupacional, kinesiología y fonoaudiología pueden proponer soluciones concretas."]]],
      ["Seis áreas a observar", [["Sueño", "Insomnio, somnolencia diurna, sueños actuados, ronquidos o pausas respiratorias."], ["Voz y deglución", "Voz baja, tos al comer, atragantamiento o comidas demasiado largas."], ["Ánimo y cognición", "Ansiedad, depresión, apatía, impulsividad, alucinaciones o dificultad para organizarse."], ["Casa y trabajo", "Dificultad para vestirse, cocinar, escribir, usar tecnología o sostener el ritmo laboral."], ["Movilidad y manejo", "Caídas, freezing, menor reacción, visión alterada o sueño al volante."], ["Relaciones y cuidado", "Aislamiento, cambios de roles, tensión familiar o agotamiento de quien acompaña."]]],
      ["Organizar el día", [["Identifica", "Registra durante varios días cuándo te mueves, piensas y hablas mejor."], ["Ubica", "Agenda trabajo, compras, ejercicio o trámites en tus mejores períodos."], ["Alterna", "Combina actividad y pausas antes de llegar al agotamiento."], ["Revisa", "Si cambia el patrón, compártelo con el equipo antes de modificar el tratamiento."]]],
    ],
    important: "Los síntomas nuevos o cambios bruscos merecen revisión: no todo lo que ocurre en una persona con Parkinson es “por el Parkinson”.",
  },
};

export const ilustraciones = {
  "Movilidad": "exercise-movilidad.png", "Capacidad física": "exercise-aerobico.png", "Seguridad": "exercise-equilibrio.png", "Bienestar": "exercise-bienestar.png",
  "Actividad aeróbica": "exercise-aerobico.png", "Fuerza": "exercise-fuerza.png", "Equilibrio y agilidad": "exercise-equilibrio.png", "Flexibilidad": "exercise-flexibilidad.png",
  "Verduras y frutas": "food-frutas.png", "Cereales integrales": "food-cereales.png", "Proteínas": "food-proteinas.png", "Agua y grasas saludables": "food-grasas.png",
};

// ---------- Tratamientos avanzados ----------
export const avanzados = [
  {
    id: "dbs", short: "DBS", title: "Estimulación cerebral profunda (DBS)",
    subtitle: "Una terapia implantable y ajustable para controlar síntomas motores en personas cuidadosamente seleccionadas.",
    stats: [["1987", "Primera aplicación moderna de alta frecuencia en Parkinson"], ["200–250 mil+", "Personas tratadas mundialmente, considerando todas las indicaciones"], ["≈12.000/año", "Procedimientos estimados en el mundo"]],
    how: [["Electrodos", "Uno o dos electrodos se implantan en blancos cerebrales como el núcleo subtalámico o el globo pálido interno."], ["Generador", "Un dispositivo bajo la piel entrega impulsos eléctricos y puede requerir recambio o recarga."], ["Programación", "La estimulación se ajusta después de la cirugía según respuesta, síntomas y efectos adversos."]],
    consider: [["Cuándo se evalúa", "Fluctuaciones motoras, períodos OFF, discinesias o temblor que ya no se controlan adecuadamente con medicamentos."], ["Mejor respuesta esperada", "Los síntomas motores que responden a levodopa suelen tener mayor probabilidad de mejorar con DBS."], ["Evaluación integral", "La selección requiere neurología, neurocirugía, neuropsicología y revisión de expectativas y apoyo familiar."]],
    strengths: ["Es ajustable con el tiempo.", "Puede tratar ambos lados del cuerpo.", "No crea intencionalmente una lesión cerebral.", "Existe amplia experiencia clínica acumulada."],
    limits: ["Requiere cirugía y un implante permanente.", "Necesita programación y controles periódicos.", "Existen riesgos de hemorragia, infección y efectos de estimulación.", "No detiene la progresión del Parkinson."],
    note: "Las cifras mundiales incluyen Parkinson y otras indicaciones. No existe un registro mundial único exclusivo para Parkinson.",
    placement: { img: "dbs-ubicacion.jpg", title: "¿Dónde se instala el sistema DBS?", copy: "Los electrodos se sitúan en zonas profundas del cerebro. Un cable pasa bajo la piel por detrás de la oreja y el cuello hasta un generador colocado habitualmente bajo la piel del pecho.", note: "Esquema educativo: la ubicación exacta y el lado tratado se definen individualmente.", alt: "Esquema del sistema DBS con electrodos cerebrales, cable subcutáneo y generador en el pecho" },
    sources: [["NINDS", "https://www.ninds.nih.gov/health-information/disorders/deep-brain-stimulation-dbs"], ["Cleveland Clinic", "https://consultqd.clevelandclinic.org/a-deep-dive-into-deep-brain-stimulation"], ["Indiana University Medicine", "https://medicine.iu.edu/neurological-surgery/specialties/stereotactic-and-functional-neurosurgery/deep-brain-stimulation"], ["Medtronic", "https://www.medtronic.com/en-us/healthcare-professionals/specialties/neurology/therapies-procedures/deep-brain-stimulation.html"]],
  },
  {
    id: "hifu", short: "HIFU", title: "Ultrasonido focalizado guiado por resonancia (HIFU)",
    subtitle: "Una lesión cerebral precisa, realizada sin incisión ni dispositivo implantado.",
    stats: [["2014–2015", "Primeras experiencias clínicas publicadas en Parkinson"], ["30.000+", "Tratamientos Exablate en trastornos del movimiento"], ["214 centros", "Centros reportados mundialmente por el fabricante en 2026"]],
    how: [["Resonancia", "El paciente permanece dentro de un equipo de resonancia magnética que permite localizar el blanco y vigilar la temperatura."], ["Ultrasonido", "Múltiples haces convergen en un punto profundo del cerebro y elevan su temperatura."], ["Lesión", "Se crea una lesión pequeña, localizada y permanente; no queda una batería ni un electrodo implantado."]],
    consider: [["Cuándo se evalúa", "Temblor resistente a medicamentos o complicaciones motoras seleccionadas, según el blanco cerebral autorizado."], ["Sin implante", "Puede considerarse cuando la persona no desea o no puede recibir un dispositivo permanente."], ["Factibilidad", "La anatomía del cráneo, la lateralidad y las normas locales determinan si el procedimiento puede realizarse."]],
    strengths: ["No requiere incisión ni implante.", "Habitualmente se realiza en una sesión.", "La respuesta puede evaluarse durante el procedimiento.", "La recuperación suele ser más rápida."],
    limits: ["La lesión no puede ajustarse ni revertirse.", "No todos los cráneos son técnicamente tratables.", "Puede alterar marcha, habla o sensibilidad.", "La experiencia en Parkinson es menor que con DBS."],
    note: "Los 30.000+ procedimientos incluyen principalmente temblor esencial y otras indicaciones; el total exclusivo para Parkinson no se publica por separado.",
    placement: { img: "hifu-ubicacion.jpg", title: "¿Dónde actúa el HIFU?", copy: "Los haces de ultrasonido atraviesan el cráneo intacto desde distintos ángulos y convergen en un pequeño objetivo cerebral, guiados y controlados mediante resonancia magnética.", note: "HIFU no deja electrodos, cables, batería ni otro dispositivo implantado.", alt: "Esquema de ultrasonido focalizado con haces convergiendo en un objetivo cerebral sin implantes" },
    sources: [["U.S. FDA", "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P150038S014"], ["Parkinson’s Foundation", "https://www.parkinson.org/living-with-parkinsons/treatment/surgical-options/other-surgical-options"], ["Insightec", "https://insightec.com/news/insightec-announces-national-reimbursement-in-france-for-mr-guided-focused-ultrasound-to-treat-essential-tremor-2/"], ["Revisión clínica", "https://pmc.ncbi.nlm.nih.gov/articles/PMC12580729/"]],
  },
  {
    id: "rf", short: "RF", title: "Lesión estereotáctica por radiofrecuencia (RF)",
    subtitle: "Una técnica histórica que mantiene un lugar en situaciones seleccionadas.",
    stats: [["Década de 1950", "Expansión de las técnicas estereotácticas lesionales"], [">37.000", "Operaciones estereotácticas históricas reportadas hasta fines de los años 50"], ["Sin registro", "No existe un total mundial moderno específico para RF y Parkinson"]],
    how: [["Localización", "Un marco o sistema de navegación estereotáctica permite identificar el blanco cerebral."], ["Sonda", "Una sonda atraviesa un pequeño orificio en el cráneo y genera calor controlado."], ["Tipos", "Según el blanco puede realizarse como talamotomía, palidotomía o subtalamotomía."]],
    consider: [["Síntomas asimétricos", "Puede evaluarse cuando predomina un lado del cuerpo y existe un objetivo clínico bien definido."], ["Alternativa", "Puede ser relevante si DBS no está disponible, no es aceptada o el seguimiento de un implante es una barrera."], ["Cautela", "La lesión es permanente; los procedimientos bilaterales exigen una evaluación especialmente cuidadosa."]],
    strengths: ["No requiere generador ni batería.", "Su costo tecnológico suele ser menor.", "El efecto sobre el circuito tratado es inmediato.", "Existe experiencia anatómica y quirúrgica acumulada."],
    limits: ["La lesión es permanente y no ajustable.", "Existe riesgo de hemorragia o déficit neurológico.", "Su uso moderno es mucho menor que DBS.", "La evidencia y disponibilidad varían entre centros."],
    note: "El dato histórico de >37.000 reúne procedimientos estereotácticos para trastornos del movimiento; no corresponde exclusivamente a RF ni a Parkinson.",
    placement: null,
    sources: [["Movement Disorder Society", "https://www.movementdisorders.org/MDS/About/Committees--Other-Groups/Special-Interest-Groups/Neurosurgery-Special-Interest-Group/Brief-History-of-Neurosurgery-for-Parkinsons-disease.htm"], ["PubMed 9613759", "https://pubmed.ncbi.nlm.nih.gov/9613759/"], ["Revisión clínica 2024", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10883407/"], ["Practical Neurology", "https://practicalneurology.com/diseases-diagnoses/movement-disorders/surgical-interventions-for-parkinsons-disease/30244/"]],
  },
];
// Comparación construida solo con afirmaciones ya presentes en las fichas
export const comparacion = [
  ["¿Deja un implante?", ["Sí, electrodos y generador", "yes"], ["No", "no"], ["No, sin generador ni batería", "no"]],
  ["¿Requiere incisión?", ["Sí, es una cirugía", "yes"], ["No", "no"], ["Sí, un pequeño orificio en el cráneo", "yes"]],
  ["¿Se puede ajustar después?", ["Sí, mediante programación", "yes"], ["No, la lesión es permanente", "no"], ["No, la lesión es permanente", "no"]],
  ["Experiencia en Parkinson", ["Amplia", null], ["Menor que con DBS", null], ["Histórica; uso moderno mucho menor", null]],
];

// ---------- Parkinson en Chile ----------
export const ges = {
  garantias: [["Acceso", "Recibir las prestaciones definidas para Parkinson."], ["Oportunidad", "Atención dentro del plazo máximo vigente."], ["Protección financiera", "Copago regulado según previsión y modalidad."], ["Calidad", "Prestadores autorizados y acreditados."]],
  queGarantiza: [["Tratamiento", "Con confirmación diagnóstica: acceso al tratamiento indicado."], ["Continuidad", "Si ya estás en tratamiento: derecho a mantenerlo dentro de la red."], ["Rehabilitación", "Con tratamiento: acceso cuando esté clínicamente indicada."]],
  activar: [["Fonasa", "Consulta en CESFAM o atención primaria; confirma la Constancia GES y entrega el formulario donde indiquen."], ["Isapre", "El médico completa la Constancia GES; preséntala para que la aseguradora asigne su red."]],
  costos: [["Fonasa", "Copago cero en la red pública bajo la Modalidad de Atención Institucional."], ["Isapre", "Copago GES según arancel y usando la red designada."], ["Carpeta GES", "Guarda constancia, diagnóstico, recetas, prestador asignado, fechas y comprobantes."]],
  plazos: [["30 días", "Tras vencer el plazo, reclama ante Fonasa o Isapre."], ["2 días", "El seguro debe asignar un nuevo prestador."], ["10 días", "El prestador debe otorgar la atención."], ["15 días", "Si no se resuelve, reclama ante la Superintendencia de Salud."]],
};
export const ruta = [
  ["Consulta", "Describe qué cambió, desde cuándo y cómo afecta tu vida."],
  ["Confirmación", "Evaluación clínica y neurológica; los exámenes descartan otras causas."],
  ["Activar GES", "Constancia y asignación de red por Fonasa o Isapre."],
  ["Plan", "Objetivos, medicamentos, rehabilitación, ejercicio y educación."],
  ["Seguimiento", "Revisar respuesta, efectos adversos y nuevas necesidades."],
];
export const rutaDetalle = [
  ["Ruta según previsión", [["Fonasa", "La puerta habitual es CESFAM o consultorio; la red pública deriva a especialidad, rehabilitación y farmacia."], ["Isapre", "Presenta la Constancia GES; la aseguradora informa prestador, red de medicamentos y procedimiento de atención."]]],
  ["Quién hace qué", [["Atención primaria", "Controles generales, derivaciones y coordinación territorial."], ["Neurología", "Confirma diagnóstico, define tratamiento y revisa fluctuaciones."], ["Rehabilitación", "Kinesiología, terapia ocupacional y fonoaudiología."], ["Red o asegurador", "Activa garantías, asigna prestadores y gestiona prestaciones."]]],
  ["No salgas sin estos datos", [["Documentos", "Diagnóstico, medicamentos, Constancia GES, prestador y red asignados."], ["Próximos pasos", "Derivaciones, órdenes, fecha y mecanismo del próximo control."]]],
  ["Seguimiento", [["Entre controles", "Registra horarios ON/OFF, caídas, sueño, estreñimiento, ánimo, voz y deglución."], ["En el control", "Define dos o tres prioridades; pregunta qué hacer si empeoras y a quién llamar."]]],
];
export const tresVias = [
  ["Salud", "El derecho GES se activa con diagnóstico confirmado y usando la red asignada."],
  ["Acreditación", "La certificación y el Registro Nacional de Discapacidad acreditan discapacidad cuando existen limitaciones."],
  ["Postulación", "Ayudas técnicas y apoyos sociales requieren postular y cumplir condiciones."],
];
export const discapacidadPasos = [
  ["Preparar expediente", "Solicita al equipo tratante el Informe Biomédico Funcional y agrega el Informe Social, las redes de apoyo y el IVADEC."],
  ["COMPIN", "Presenta el expediente para calificación y certificación. Se evalúan desempeño, participación, apoyos y movilidad."],
  ["Registro Civil", "Con la certificación, realiza la inscripción en el Registro Nacional de Discapacidad."],
  ["Credencial", "El Registro Civil emite la credencial con grado global, causa y eventual movilidad reducida."],
];
export const beneficiosRND = [
  ["Salud y rehabilitación", "Beneficios asociados a kinesiología, terapia ocupacional y fonoaudiología; confirma modalidad y requisitos con Fonasa."],
  ["SENADIS", "Postulación a programas, ayudas técnicas y convocatorias; cada beneficio tiene requisitos adicionales."],
  ["Registro Social de Hogares", "La discapacidad se considera en la calificación socioeconómica debido a los mayores gastos del hogar."],
  ["Trabajo", "Acceso a medidas de inclusión laboral y ajustes razonables; la credencial no obliga a dejar de trabajar."],
  ["Vivienda y educación", "Permite postular a programas o cupos específicos, sujetos a bases, tramo socioeconómico y disponibilidad."],
  ["Movilidad", "Exención de restricción vehicular en la RM y franquicias para vehículos o ayudas técnicas cuando se cumplen requisitos."],
  ["Persona cuidadora", "Si existe dependencia, el hogar puede solicitar su identificación en el RSH y evaluar apoyos locales."],
  ["Importante", "La credencial habilita a postular; no significa que todos los beneficios se concedan automáticamente."],
];
export const manejo = [
  ["Licencia Clase B", "El diagnóstico no cancela automáticamente la licencia. El gabinete médico municipal evalúa aptitud física, psíquica y seguridad."],
  ["Clase B restringida", "Puede otorgarse cuando la deficiencia está compensada, con informe médico, exámenes pertinentes y control periódico."],
  ["Licencias profesionales y Clase C", "La regulación es más estricta y considera expresamente trastornos neuromusculares incompatibles con estas licencias."],
  ["Qué llevar a renovación", "Informe reciente del neurólogo sobre estabilidad, cognición, visión, somnolencia, fluctuaciones, discinesias, síncopes y capacidad funcional."],
  ["Cuándo dejar de manejar", "Sueño, confusión, alucinaciones, desmayos, choques menores, congelamiento al pedalear, reacción lenta o preocupación fundada de la familia."],
  ["Buena práctica", "Manejar en periodos ON, por trayectos conocidos y de día puede reducir el riesgo, pero no reemplaza la evaluación médica ni municipal."],
];
export const pensiones = [
  ["AFP: quién puede solicitar", "Persona afiliada menor de 65 años, no pensionada por vejez y cuya invalidez no derive de accidente laboral o enfermedad profesional."],
  ["Invalidez parcial", "Pérdida de capacidad de trabajo igual o superior al 50% e inferior a dos tercios; inicialmente es transitoria y se reevalúa."],
  ["Invalidez total", "Pérdida de al menos dos tercios de la capacidad de trabajo, determinada por las comisiones médicas del sistema."],
  ["Dónde iniciar", "En la AFP. El informe del neurólogo es antecedente, pero la decisión corresponde a la Comisión Médica Regional y puede apelarse."],
  ["PBSI / APSI", "Para personas de 18 a 64 años sin derecho a pensión o con pensión baja, existen beneficios solidarios sujetos a requisitos."],
  ["¿Se puede trabajar?", "Una persona con pensión de invalidez AFP puede trabajar con su capacidad residual."],
  ["Después de 65 años", "La ruta cambia a pensión de vejez y eventualmente PGU; el Parkinson por sí solo no reduce la edad legal de jubilación."],
  ["Jubilación anticipada", "Es otro mecanismo: depende del saldo y de financiar una pensión mínima legal; no se concede por el solo diagnóstico."],
];
export const dondePreguntar = [
  ["Minsal o asegurador", "GES, red y prestaciones."],
  ["Superintendencia de Salud", "Derechos GES y reclamos."],
  ["COMPIN y Registro Civil", "Certificación y Registro Nacional de Discapacidad."],
  ["SENADIS o municipio", "Ayudas técnicas y orientación."],
  ["Dirección del Trabajo", "Inclusión y ajustes laborales."],
];
export const centrosChile = [
  { sector: "Público", name: "Hospital Clínico San Borja Arriarán", place: "Santiago · Región Metropolitana", team: "Dr. David Aguirre-Padilla y equipo de Neurología de Movimientos Anormales", dbs: "100 cirugías DBS acumuladas reportadas entre 2014 y noviembre de 2024" },
  { sector: "Público", name: "Instituto de Neurocirugía Dr. Alfonso Asenjo", place: "Providencia · Región Metropolitana", team: "Dres. Felipe Valdivia, Rodrigo Fernández, Viviana Venegas, Roque Villagra y Claudio Henríquez", dbs: "Programa piloto de 10 cirugías planificadas para 2024–2025", url: "https://www.institutodeneurocirugia.cl/" },
  { sector: "Público", name: "Hospital Clínico Universidad de Chile", place: "Independencia · Región Metropolitana", team: "Equipo multidisciplinario de neurocirugía funcional de la Universidad de Chile", dbs: "Programa reactivado en 2026; cifra acumulada no publicada" },
  { sector: "Público", name: "Hospital Carlos van Buren", place: "Valparaíso", team: "Equipo de neurocirugía y neurología vinculado a la Universidad de Valparaíso", dbs: "Primer caso público reportado en 2018; cifra acumulada no publicada" },
  { sector: "Público", name: "Red regional: Coquimbo, Puerto Montt y Rancagua", place: "Regiones de Coquimbo, Los Lagos y O’Higgins", team: "Equipos locales; referentes individuales no identificados en fuentes públicas", dbs: "Centros mencionados dentro de la red nacional con experiencia en DBS" },
  { sector: "Privado", name: "Clínica Dávila", place: "Recoleta · Región Metropolitana", team: "Dr. André Fassler, neurocirujano y director médico", dbs: "30 pacientes tratados desde 2013, según información pública", url: "https://www.davila.cl/" },
  { sector: "Privado", name: "Clínica Alemana de Santiago", place: "Vitacura · Región Metropolitana", team: "Dr. Felipe Valdivia y equipo multidisciplinario", dbs: "Aproximadamente 30 pacientes beneficiados desde 2001" },
  { sector: "Privado", name: "Clínica Las Condes", place: "Las Condes · Región Metropolitana", team: "Dres. David Aguirre-Padilla y Rómulo Fuentes", dbs: "Cifra acumulada no publicada; existen casos individuales reportados" },
  { sector: "Privado", name: "Clínica Universidad de los Andes", place: "Las Condes · Región Metropolitana", team: "Equipo del Centro de Neurociencias", dbs: "Cifra acumulada no publicada" },
  { sector: "Privado", name: "Clínica Santa María", place: "Providencia · Región Metropolitana", team: "Dr. Walter Feuerhake y equipo del Centro de Parkinson y Enfermedades Neurodegenerativas", dbs: "Programa de cirugía funcional y DBS; cifra acumulada no publicada", url: "https://www.clinicasantamaria.cl/" },
  { sector: "Privado", name: "Clínica RedSalud Vitacura", place: "Vitacura · Región Metropolitana", team: "Referentes individuales no identificados en las fuentes públicas revisadas", dbs: "Centro citado dentro de la red nacional con experiencia en DBS", url: "https://www.redsalud.cl/clinicas/clinica-redsalud-vitacura" },
];
export const gruposPacientes = [
  { region: "Arica", name: "Arica lucha contra el Parkinson", route: "Hospital Juan Noé o Gobierno Regional" },
  { region: "Coquimbo", name: "Red de pacientes Hospital La Serena–Coquimbo", route: "Hospital La Serena u Hospital Coquimbo" },
  { region: "Valparaíso", name: "Fundación Parkinson Quilpué", route: "Redes sociales o Municipalidad de Quilpué" },
  { region: "Metropolitana", name: "Liga Chilena contra el Parkinson", route: "parkinson.cl", url: "https://www.parkinson.cl/" },
  { region: "Nacional / online", name: "Unidos por el Parkinson", route: "unidosporelparkinson.cl", url: "https://unidosporelparkinson.cl/" },
  { region: "Biobío", name: "Agrupaciones de Parkinson de Concepción", route: "Municipalidad de Concepción o HGGB" },
  { region: "La Araucanía", name: "Red local Parkinson Temuco", route: "Neurología, rehabilitación o municipios" },
  { region: "Los Lagos", name: "Red de pacientes Puerto Montt", route: "Hospital Puerto Montt o Servicio de Salud" },
  { region: "Aysén", name: "Pacientes Parkinson Aysén", route: "Hospital Regional Coyhaique" },
  { region: "Magallanes", name: "Agrupación de Pacientes con Parkinson en Magallanes", route: "Hospital Clínico Magallanes o medios regionales" },
];
export const gruposChequeo = ["Moderación responsable", "Privacidad de los integrantes", "Información médica prudente", "Costos transparentes", "Accesibilidad", "Derivación a profesionales"];
export const fuentesChile = [
  ["Minsal · AUGE", "Acceso a tratamiento, continuidad, rehabilitación y canasta GES Nº 62.", "https://auge.minsal.cl/problemasdesalud/index/62"],
  ["Superintendencia de Salud", "Activación GES, red asignada y canales de reclamo.", "https://www.superdesalud.gob.cl/"],
  ["DIPRECE · Minsal", "Guía clínica para tratamiento farmacológico y quirúrgico.", "https://diprece.minsal.cl/"],
  ["Fonasa", "Red pública, modalidades de atención y copagos.", "https://www.fonasa.cl/"],
  ["SENADIS", "Ayudas técnicas, programas y convocatorias.", "https://www.senadis.gob.cl/"],
  ["Registro Civil", "Registro Nacional de Discapacidad y credencial.", "https://www.registrocivil.cl/"],
  ["Dirección del Trabajo", "Inclusión laboral y ajustes razonables.", "https://www.dt.gob.cl/"],
  ["Salud Responde", "Orientación profesional 24/7: 600 360 7777.", "tel:6003607777"],
];
export const confiable = [
  ["Verde", "Autoría identificable, referencias, fecha y revisión clínica."],
  ["Amarillo", "Testimonio individual, estudio pequeño o contenido comercial: verificar antes."],
  ["Rojo", "Promete cura, pide suspender fármacos o vende con urgencia: no actuar."],
];

// ---------- Parkinson en el mundo ----------
export const organizaciones = [
  { name: "Organización Mundial de la Salud (OMS)", scope: "Salud pública mundial", description: "Publica datos globales, orientaciones sanitarias y prioridades sobre atención, rehabilitación y derechos de las personas con Parkinson.", url: "https://www.who.int/news-room/fact-sheets/detail/parkinson-disease" },
  { name: "International Parkinson and Movement Disorder Society", scope: "Comunidad médica y científica", description: "Reúne especialistas en trastornos del movimiento, desarrolla educación profesional, congresos, criterios clínicos y recursos para equipos de salud.", url: "https://www.movementdisorders.org/" },
  { name: "Parkinson’s Foundation", scope: "Atención y educación", description: "Financia investigación, acredita Centros de Excelencia y ofrece recursos sobre síntomas, tratamientos, ejercicio, vida diaria y apoyo familiar.", url: "https://www.parkinson.org/" },
  { name: "Michael J. Fox Foundation", scope: "Investigación", description: "Una de las mayores entidades financiadoras de investigación en Parkinson; promueve biomarcadores, ensayos clínicos, participación de pacientes y nuevas terapias.", url: "https://www.michaeljfox.org/" },
  { name: "Parkinson’s Europe", scope: "Red europea", description: "Agrupa organizaciones de pacientes de Europa y trabaja por mejores estándares de atención, participación, información e incidencia pública.", url: "https://www.parkinsonseurope.org/" },
  { name: "Cure Parkinson’s", scope: "Terapias modificadoras", description: "Financia estudios orientados a encontrar tratamientos capaces de ralentizar, detener o revertir la progresión de la enfermedad.", url: "https://cureparkinsons.org.uk/" },
  { name: "World Parkinson Coalition", scope: "Colaboración global", description: "Organiza el World Parkinson Congress, reuniendo a personas con Parkinson, familias, investigadores, médicos y organizaciones.", url: "https://www.worldpdcoalition.org/" },
  { name: "American Parkinson Disease Association", scope: "Apoyo comunitario", description: "Entrega educación, programas locales, líneas de orientación y financiamiento para investigación en Estados Unidos.", url: "https://www.apdaparkinson.org/" },
  { name: "Parkinson’s UK", scope: "Investigación y servicios", description: "Ofrece información, apoyo, campañas públicas y financiamiento científico para acelerar mejores tratamientos y calidad de vida.", url: "https://www.parkinsons.org.uk/" },
  { name: "Federación Española de Parkinson", scope: "Comunidad en español", description: "Representa asociaciones españolas y ofrece orientación, sensibilización, defensa de derechos y recursos para pacientes y familias.", url: "https://www.esparkinson.es/" },
  { name: "Parkinson Canada", scope: "Apoyo nacional", description: "Proporciona educación, navegación del sistema, apoyo comunitario, incidencia y financiamiento de investigación en Canadá.", url: "https://www.parkinson.ca/" },
  { name: "Shake It Up Australia", scope: "Investigación australiana", description: "Financia proyectos de investigación en colaboración con la Michael J. Fox Foundation y promueve participación y concientización.", url: "https://shakeitup.org.au/" },
];
export const centrosMundo = [
  { city: "Toronto · Canadá", name: "Toronto Western Hospital", strength: "Programa de gran volumen con neurología, neurocirugía, neuropsiquiatría y rehabilitación. Destaca por su trayectoria clínica y quirúrgica en trastornos del movimiento.", therapy: "DBS · evaluación multidisciplinaria", url: "https://www.uhn.ca/KNC/Clinics/Movement_Disorders" },
  { city: "San Francisco · EE. UU.", name: "UCSF", strength: "Referente en neuromodulación, DBS adaptativa y registro de señales cerebrales. Utiliza implantación guiada por imagen y mantiene investigación clínica activa.", therapy: "DBS · DBS adaptativa · iMRI", url: "https://movementdisorders.ucsf.edu/" },
  { city: "Cleveland · EE. UU.", name: "Cleveland Clinic", strength: "Modelo interdisciplinario que integra evaluación médica, cirugía funcional, rehabilitación y seguimiento. Atiende Parkinson y otros trastornos complejos del movimiento.", therapy: "DBS · infusiones · rehabilitación", url: "https://my.clevelandclinic.org/departments/neurological/depts/movement-disorders" },
  { city: "Londres · Reino Unido", name: "Queen Square / UCLH", strength: "Hospital neurológico especializado vinculado al UCL Queen Square Institute of Neurology. Combina atención de alta complejidad, neurocirugía e investigación traslacional.", therapy: "DBS · terapias avanzadas · ensayos", url: "https://www.uclh.nhs.uk/our-services/find-service/neurology-and-neurosurgery/movement-disorders" },
  { city: "Milán · Italia", name: "Fondazione IRCCS Carlo Besta", strength: "Instituto dedicado exclusivamente a enfermedades neurológicas. Integra selección quirúrgica, neurocirugía funcional, terapias de infusión e investigación especializada.", therapy: "DBS · infusiones · MRgFUS", url: "https://www.istituto-besta.it/" },
  { city: "París · Francia", name: "Pitié-Salpêtrière / Institut du Cerveau", strength: "Centro público universitario conectado con uno de los mayores institutos europeos de neurociencia. Desarrolla atención compleja, DBS y estudios sobre mecanismos y progresión.", therapy: "DBS · investigación clínica", url: "https://institutducerveau.org/" },
  { city: "Barcelona · España", name: "Hospital Clínic Barcelona", strength: "Unidad integral de Parkinson y trastornos del movimiento, con experiencia en selección para cirugía y terapias de segunda línea. Es referencia para casos complejos en España.", therapy: "DBS · levodopa intestinal · apomorfina", url: "https://www.clinicbarcelona.org/unidad/parkinson-y-trastornos-del-movimiento" },
  { city: "São Paulo · Brasil", name: "Hospital Sírio-Libanês", strength: "Núcleo especializado en movimientos anormales y neurocirugía funcional. Aporta una alternativa latinoamericana con experiencia en DBS bilateral guiada por imagen.", therapy: "DBS · evaluación por imágenes", url: "https://hospitalsiriolibanes.org.br/blog/neurocirurgia/nova-tecnica-reduz-tempo-de-cirurgia-para-tratamento-do-parkinson" },
  { city: "Rochester · EE. UU.", name: "Mayo Clinic", strength: "Equipo de gran escala que reúne neurología, neurocirugía, neuropsicología y rehabilitación. Ofrece evaluación integral y seguimiento coordinado de neuromodulación.", therapy: "DBS · rehabilitación · ensayos", url: "https://www.mayoclinic.org/tests-procedures/deep-brain-stimulation/care-at-mayo-clinic/pcc-20384564" },
  { city: "Berlín · Alemania", name: "Charité – Universitätsmedizin", strength: "Unidad académica de trastornos del movimiento y neuromodulación. Investiga estimulación personalizada, biomarcadores y nuevas estrategias de programación.", therapy: "DBS · neuromodulación personalizada", url: "https://neurologie.charite.de/en/leistungen/klinische_schwerpunkte/movement_disorders/" },
];
export const antesDeContactar = [
  ["Qué preparar", [["Historia clínica", "Diagnóstico, años de evolución y síntomas motores y no motores."], ["Tratamiento", "Medicamentos, dosis, horarios, respuesta a levodopa y fluctuaciones."], ["Situación actual", "Caídas, cognición, ánimo, sueño, exámenes, videos y cirugías previas."]]],
  ["Qué preguntar", [["Evaluación inicial", "¿Aceptan una revisión remota antes de viajar?"], ["Equipo y experiencia", "¿Qué equipo selecciona candidatos a DBS y cuántos casos similares evalúa?"], ["Continuidad", "¿Qué seguimiento exige la terapia y quién programa el dispositivo en Chile?"], ["Planificación", "¿Cuál es el costo total y cuáles son los tiempos aproximados?"]]],
];
export const figuras = [
  { name: "Michael J. Fox", field: "Cine y activismo · Canadá", date: "Diagnóstico: 1991", description: "Actor diagnosticado a los 29 años. Hizo pública su enfermedad en 1998 y creó The Michael J. Fox Foundation para acelerar la investigación de nuevos tratamientos y una cura.", url: "https://www.michaeljfox.org/michaels-story" },
  { name: "Muhammad Ali", field: "Boxeo · Estados Unidos", date: "Diagnóstico: 1984", description: "Campeón mundial de boxeo y una de las figuras deportivas más reconocidas del siglo XX. Su vida pública contribuyó a visibilizar el Parkinson a escala mundial.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Juan Pablo II", field: "Vida pública y religiosa · Polonia", date: "Diagnóstico: 2001", description: "El papa Juan Pablo II mantuvo una intensa presencia internacional después de su diagnóstico. Su evolución hizo visible el Parkinson ante millones de personas.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Carly Simon", field: "Música · Estados Unidos", date: "Divulgación pública: 2026", description: "Cantautora ganadora del Grammy y del Óscar. Tras confirmar su diagnóstico, habló públicamente de la enfermedad y continuó desarrollando nuevos proyectos musicales.", url: "https://apnews.com/article/4fc7ade9801e0e7f3233a58c6fc6aa67" },
  { name: "Alan Alda", field: "Cine y televisión · Estados Unidos", date: "Diagnóstico: 2015", description: "Actor, escritor y comunicador científico. Reveló su diagnóstico en 2018 y ha seguido trabajando, haciendo ejercicio y promoviendo una mirada activa frente a la enfermedad.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Billy Connolly", field: "Comedia y actuación · Escocia", date: "Diagnóstico: 2012", description: "Comediante, músico y actor escocés. Ha relatado su experiencia con franqueza y humor, ayudando a que más personas comprendan la vida cotidiana con Parkinson.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Neil Diamond", field: "Música · Estados Unidos", date: "Diagnóstico: 2018", description: "Autor e intérprete de grandes éxitos internacionales. El diagnóstico lo llevó a retirarse de las giras, aunque continuó vinculado a la música y a presentaciones especiales.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Brian Grant", field: "Baloncesto · Estados Unidos", date: "Diagnóstico: 2008", description: "Exjugador de la NBA diagnosticado a los 36 años. Fundó la Brian Grant Foundation para entregar herramientas que ayuden a vivir de manera activa y saludable con Parkinson.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Davis Phinney", field: "Ciclismo · Estados Unidos", date: "Diagnóstico: 2000", description: "Ciclista olímpico y ganador de etapas del Tour de France. Creó la Davis Phinney Foundation, enfocada en recursos prácticos para vivir mejor hoy con la enfermedad.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
  { name: "Ozzy Osbourne", field: "Música · Reino Unido", date: "Diagnóstico: 2019", description: "Cantante y figura central del rock británico. Habló públicamente de su diagnóstico en 2020 y continuó conectado con su audiencia hasta su fallecimiento en 2025.", url: "https://www.parkinson.org/understanding-parkinsons/statistics/notable-figures" },
];
export const instagram = [
  { title: "Médicos y neurólogos especializados", accounts: [
    { region: "Chile", name: "CENPAR – Centro Neurológico Integral (@cenpar)", description: "Centro especializado en Parkinson en Las Condes, con actividad clínica y de investigación.", url: "https://www.instagram.com/cenpar/" },
    { region: "Chile", name: "Liga Chilena del Parkinson (@ligaparkinsonchile)", description: "Agrupación con enfoque médico-social y contenido educativo para pacientes y familias.", url: "https://www.instagram.com/ligaparkinsonchile/" },
    { region: "Mundo", name: "Dr. Ray Dorsey (@raydorseymd)", description: "Neurólogo e investigador de trastornos del movimiento (EE. UU.).", url: "https://www.instagram.com/raydorseymd/" },
    { region: "Mundo", name: "Dr. Michael Okun (@michaelokun)", description: "Especialista en trastornos del movimiento, director médico de Parkinson's Foundation.", url: "https://www.instagram.com/michaelokun/" },
    { region: "Mundo", name: "Dra. Rachel Dolhun (@racheldolhunmd)", description: "Especialista en Parkinson y medicina de estilo de vida.", url: "https://www.instagram.com/racheldolhunmd/" },
    { region: "Mundo", name: "Dr. Daniel Martínez (@neurologoparkinson)", description: "Neurólogo, investigador y especialista en Parkinson y trastornos del movimiento; contenido clínico y educativo en español.", url: "https://www.instagram.com/neurologoparkinson/" },
    { region: "Mundo", name: "Lucía Ferro (@felizconparkinson)", description: "Neurofisióloga y paciente con Parkinson de inicio temprano; contenido en español.", url: "https://www.instagram.com/felizconparkinson/" },
  ] },
  { title: "Fonoaudiología y terapia de voz", accounts: [
    { region: "Mundo", name: "Parkinson Voice Project (@parkinsonvoiceproject)", description: "Organización especializada en el programa SPEAK OUT!®; referencia principal en voz y habla para Parkinson.", url: "https://www.instagram.com/parkinsonvoiceproject/" },
  ] },
  { title: "Kinesiología y fisioterapia", accounts: [
    { region: "Mundo", name: "Josefa Domingos (@josefa_domingos_ju)", description: "Fisioterapeuta especializada en Parkinson y dirigente de Parkinson's Europe; ejercicio y entrenamiento.", url: "https://www.instagram.com/josefa_domingos_ju/" },
    { region: "Mundo", name: "LSVT Global (@lsvtglobal)", description: "Creadores de los métodos LSVT BIG (movimiento) y LSVT LOUD (voz), estándar en rehabilitación de Parkinson.", url: "https://www.instagram.com/lsvtglobal/" },
    { region: "Colombia", name: "Neural Pasto (@neuralpasto)", description: "Centro de neurorehabilitación; ejercicios y orientación sobre marcha, equilibrio, freezing y movilidad.", url: "https://www.instagram.com/neuralpasto/" },
    { region: "EE. UU.", name: "Freedom Functional Wellness (@freedomfunctionwell)", description: "Clínica de fisioterapia con un programa de recuperación neurológica para Parkinson.", url: "https://www.instagram.com/freedomfunctionwell/" },
  ] },
  { title: "Investigación", accounts: [
    { region: "Mundo", name: "Cure Parkinson's (@cureparkinsons)", description: "Enfocada en el desarrollo de terapias modificadoras de la enfermedad.", url: "https://www.instagram.com/cureparkinsons/" },
    { region: "Mundo", name: "Parkinson's Foundation (@parkinsondotorg)", description: "Fuerte componente de investigación y educación para pacientes y profesionales.", url: "https://www.instagram.com/parkinsondotorg/" },
    { region: "Mundo", name: "Parkinson's Insights (@parkinsonsinsights)", description: "Divulgación con noticias, investigaciones, entrevistas y seminarios de especialistas internacionales.", url: "https://www.instagram.com/parkinsonsinsights/" },
  ] },
  { title: "Pacientes y comunidad", accounts: [
    { region: "Mundo", name: "Jimmy Choi (@jcfoxninja)", description: "Atleta con Parkinson de inicio temprano, referente en ejercicio y superación.", url: "https://www.instagram.com/jcfoxninja/" },
    { region: "Mundo", name: "Reka Janisse (@pd.family)", description: "Parkinson de inicio temprano, familia y vida profesional.", url: "https://www.instagram.com/pd.family/" },
    { region: "Mundo", name: "Esther Labib-Kiyarash (@shakinginmyboots1)", description: "Activismo en Parkinson de inicio temprano; navegación del sistema de salud.", url: "https://www.instagram.com/shakinginmyboots1/" },
  ] },
];

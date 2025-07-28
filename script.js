const semestres = {
  "1° Semestre": [
    { id: "quimica", nombre: "Bases Integradas de Química, Bioquímica, Biología Celular y Genética" },
    { id: "anatomia1", nombre: "Anatomía estructural y funcional I" },
    { id: "estructura_tisular", nombre: "Estructura y función tisular" },
    { id: "busqueda_biblio", nombre: "Estrategias de Búsqueda Bibliográfica" },
    { id: "intro_kine", nombre: "Introducción a la Kinesiología" },
    { id: "fisica", nombre: "Física" }
  ],
  "2° Semestre": [
    { id: "biomecanica", nombre: "Biomecánica, Lesión y Reparación Tisular" },
    { id: "movimiento_humano", nombre: "Introducción al Estudio del Movimiento Humano" },
    { id: "evolucion", nombre: "Principios de Evolución" },
    { id: "lectura_cientifica", nombre: "Lectura Comprensiva de Artículos Científicos" },
    { id: "fisiologia_gral", nombre: "Fisiología general", prereq: "fisica" },
    { id: "neuroanato", nombre: "Neuroanatomía" }
  ],
  "3° Semestre": [
    { id: "fisiologia_sistemas", nombre: "Fisiología de sistemas", prereq: "neuroanato" },
    { id: "infectologia", nombre: "Bases Integradas de Infectología, Inmunología y Farmacología General", prereq: "neuroanato" },
    { id: "examen_kinesico", nombre: "Examen Kinésico Básico", prereq: "anatomia1" },
    { id: "control_motor", nombre: "Control y Aprendizaje Motor" },
    { id: "investigacion", nombre: "Fundamentos de la Investigación Científica" },
    { id: "educ_fisica1", nombre: "Educación física I" }
  ],
  "4° Semestre": [
    { id: "fisiopato", nombre: "Fisiopatología y Farmacología de Sistemas", prereq: "fisiologia_sistemas" },
    { id: "examen_cond_fisica", nombre: "Examen de la Condición Física y la Conducta Motora", prereq: "examen_kinesico" },
    { id: "proc_terapeuticos", nombre: "Procedimientos Terapéuticos Básicos y Generales", prereq: "movimiento_humano" },
    { id: "desarrollo_psicomotor", nombre: "Kinesiología del Desarrollo Psicomotor", prereq: "control_motor" },
    { id: "bioinstrumental", nombre: "Análisis Bioinstrumental del Movimiento Humano" },
    { id: "lectura_critica", nombre: "Lectura Crítica de Artículos Científico" },
    { id: "epidemiologia", nombre: "Análisis Epidemiológico" }
  ],
  "5° Semestre": [
    { id: "actividad_salud", nombre: "Efectos de Actividad Física en la Salud", prereq: "fisiopato" },
    { id: "neurokine1", nombre: "Evaluación e Intervención en Neurokinesiología I", prereq: "desarrollo_psicomotor" },
    { id: "respiratorio1", nombre: "Evaluación e Intervención en Cuidados Respiratorios I", prereq: "fisiopato" },
    { id: "musculoesq1", nombre: "Evaluación e Intervención en Musculoesquelético I", prereq: "proc_terapeuticos" },
    { id: "rev_biblio", nombre: "Revisión Bibliográfica", prereq: "lectura_critica" },
    { id: "modelo_salud", nombre: "Análisis del Modelo de Salud Chileno", prereq: "epidemiologia" },
    { id: "educ_fisica2", nombre: "Educación Física II", prereq: "educ_fisica1" },
    { id: "modulo_i", nombre: "Módulo Integrado Interdisciplinario y Multiprofesional I" }
  ],
  "6° Semestre": [
    { id: "neurokine2", nombre: "Evaluación e Intervención en Neurokinesiología II", prereq: "neurokine1" },
    { id: "respiratorio2", nombre: "Evaluación e Intervención en Cuidados Respiratorios II", prereq: "respiratorio1" },
    { id: "musculoesq2", nombre: "Evaluación e Intervención en Músculo-esquelético II", prereq: "musculoesq1" },
    { id: "razonamiento", nombre: "Razonamiento Clínico", prereq: "neurokine1", "respiratorio1", "musculoesq1" },
    { id: "diseno_proyecto", nombre: "Diseño y Formulación de Proyectos de Investigación", prereq: "rev_biblio" },
    { id: "responsabilidad", nombre: "Responsabilidad del Ejercicio Profesional" },
    { id: "actividad_deporte", nombre: "Actividad Física y Deportes", prereq: "actividad_salud" }
  ],
    "7° Semestre": [
    { id: "intervencion1", nombre: "Intervención Profesional en Contexto I", prereq: ["neurokine2", "respiratorio2", "musculoesq2", "actividad_salud"] },
    { id: "estrategias_deportivas", nombre: "Estrategias Deportivas y Recreativas", prereq: ["actividad_deporte"] },
    { id: "relacion_entorno", nombre: "Análisis de la Relación Persona Entorno", prereq: ["neurokine2", "respiratorio2", "musculoesq2"] },
    { id: "determinantes_salud", nombre: "Determinantes Sociales de la Salud", prereq: ["modelo_salud"] },
    { id: "ejecucion_proyecto1", nombre: "Ejecución de Proyectos de Investigación I", prereq: ["diseno_proyecto"] },
    { id: "admin_basica", nombre: "Conceptos Básicos de Administración en Salud", prereq: ["modelo_salud"] },
    { id: "metodologias_docentes", nombre: "Metodologías de Enseñanza Aprendizaje" }
  ],
  "8° Semestre": [
    { id: "intervencion2", nombre: "Intervención Profesional en Contexto II", prereq: ["intervencion1"] },
    { id: "estrategias_aplicadas", nombre: "Estrategias Deportivas y Recreativas Aplicadas", prereq: ["estrategias_deportivas"] },
    { id: "ergonomia", nombre: "Evaluación Ergonómica", prereq: ["relacion_entorno"] },
    { id: "promocion_prevencion", nombre: "Programas de Promoción y Prevención en Salud", prereq: ["determinantes_salud"] },
    { id: "ejecucion_proyecto2", nombre: "Ejecución de Proyectos de Investigación II", prereq: ["ejecucion_proyecto1"] },
    { id: "emprendimiento", nombre: "Proyectos de Emprendimiento", prereq: ["admin_basica"] },
    { id: "aplicacion_docente", nombre: "Aplicación Básica de Metodologías Docentes", prereq: ["metodologias_docentes"] },
    { id: "modulo_ii", nombre: "Módulo Integrado Interdisciplinario y Multiprofesional II", prereq: ["modulo_i"] }
  ],
  "9° Semestre": [
    { id: "intervencion3", nombre: "Intervención Profesional I", prereq: ["intervencion2"] },
    { id: "proyecto_ergonomia", nombre: "Proyectos de Intervención Ergonómica", prereq: ["ergonomia"] },
    { id: "salud_comunitaria", nombre: "Intervención en Salud Comunitaria", prereq: ["promocion_prevencion"] },
    { id: "profundizacion", nombre: "Cursos de Profundización Disciplinar y Profesional", prereq: ["intervencion1", "intervencion2"] },
    { id: "comunicacion_cientifica", nombre: "Comunicación Científica", prereq: ["ejecucion_proyecto2"] },
    { id: "admin_salud", nombre: "Administración en Salud", prereq: ["admin_basica"] }
  ],
  "10° Semestre": [
    { id: "intervencion4", nombre: "Intervención Profesional II", prereq: ["intervencion3"] }
  ]
};
// FUNCIÓN PARA CREAR LA MALLA EN PANTALLA
function crearMalla() {
  const grid = document.querySelector('.grid');
  for (const [semestre, ramos] of Object.entries(semestres)) {
    const box = document.createElement('div');
    box.classList.add('semestre');
    box.innerHTML = `<h2>${semestre}</h2>`;
    ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.classList.add('ramo');
      div.dataset.id = ramo.id;
      div.textContent = ramo.nombre;
      if (ramo.prereq) {
        div.dataset.prerq = ramo.prereq;
        div.classList.add('locked');
      }
      box.appendChild(div);
    });
    grid.appendChild(box);
  }
}

// FUNCIÓN PARA MARCAR O DESMARCAR UN RAMO
function marcarDesmarcar(ramo) {
  if (ramo.classList.contains('aprobado')) {
    ramo.classList.remove('aprobado');
    localStorage.removeItem(ramo.dataset.id);
  } else {
    ramo.classList.add('aprobado');
    localStorage.setItem(ramo.dataset.id, 'aprobado');
  }
}

// FUNCIÓN PARA DESBLOQUEAR RAMOS CON PRERREQUISITOS CUMPLIDOS
function desbloquearRamos() {
  document.querySelectorAll('.ramo.locked').forEach(ramo => {
    const prereq = ramo.dataset.prerq;
    if (localStorage.getItem(prereq) === 'aprobado') {
      ramo.classList.remove('locked');
      ramo.style.background = '#f8bbd0';
      ramo.style.cursor = 'pointer';
    }
  });
}

// INICIALIZACIÓN CUANDO SE CARGA LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
  crearMalla();
  document.querySelectorAll('.ramo').forEach(ramo => {
    if (localStorage.getItem(ramo.dataset.id) === 'aprobado') {
      ramo.classList.add('aprobado');
    }
    ramo.addEventListener('click', () => {
      if (!ramo.classList.contains('locked')) {
        marcarDesmarcar(ramo);
        desbloquearRamos();
      }
    });
  });
  desbloquearRamos();
});

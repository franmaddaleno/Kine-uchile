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
    { id: "razonamiento", nombre: "Razonamiento Clínico", prereq: "neurokine1" },
    { id: "diseno_proyecto", nombre: "Diseño y Formulación de Proyectos de Investigación", prereq: "rev_biblio" },
    { id: "responsabilidad", nombre: "Responsabilidad del Ejercicio Profesional" },
    { id: "actividad_deporte", nombre: "Actividad Física y Deportes", prereq: "actividad_salud" }
  ],
  "7° Semestre": [
    { id: "integra1", nombre: "Integrado Clínico en Kinesiología I", prereq: "musculoesq2" },
    { id: "actividad_fisica_pob", nombre: "Actividad Física en Poblaciones Especiales", prereq: "actividad_deporte" },
    { id: "educacion_salud", nombre: "Educación para la Salud", prereq: "modelo_salud" },
    { id: "metodologia_cualitativa", nombre: "Metodología de Investigación Cualitativa", prereq: "diseno_proyecto" },
    { id: "gestion_servicios", nombre: "Gestión de Servicios de Salud", prereq: "modelo_salud" },
    { id: "modulo_ii", nombre: "Módulo Integrado Interdisciplinario y Multiprofesional II", prereq: "modulo_i" }
  ],
  "8° Semestre": [
    { id: "integra2", nombre: "Integrado Clínico en Kinesiología II", prereq: "integra1" },
    { id: "promocion_salud", nombre: "Promoción de la Actividad Física y Estilos de Vida Saludables", prereq: "actividad_fisica_pob" },
    { id: "evaluacion_programas", nombre: "Evaluación de Programas", prereq: "gestion_servicios" },
    { id: "proyecto1", nombre: "Proyecto de Título I", prereq: "metodologia_cualitativa" }
  ],
  "9° Semestre": [
    { id: "internado1", nombre: "Internado I", prereq: "integra2" },
    { id: "seminario1", nombre: "Seminario de Título I", prereq: "proyecto1" }
  ],
  "10° Semestre": [
    { id: "internado2", nombre: "Internado II", prereq: "internado1" },
    { id: "seminario2", nombre: "Seminario de Título II", prereq: "seminario1" }
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


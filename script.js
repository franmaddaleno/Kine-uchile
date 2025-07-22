const semestres = {
  "1° Semestre": [
    { id: "quimica_biologia", nombre: "Bases Integradas de Química, Bioquímica, Biología Celular y Genética" },
    { id: "anatomia1", nombre: "Anatomía estructural y funcional I" },
    { id: "estructura_tisular", nombre: "Estructura y función tisular" },
    { id: "bibliografia", nombre: "Estrategias de Búsqueda Bibliográfica" },
    { id: "intro_kine", nombre: "Introducción a la Kinesiología" },
    { id: "fisica", nombre: "Física" }
  ],
  "2° Semestre": [
    { id: "biomecanica", nombre: "Biomecánica, Lesión y Reparación Tisular" },
    { id: "mov_humano", nombre: "Introducción al Estudio del Movimiento Humano" },
    { id: "evolucion", nombre: "Principios de Evolución" },
    { id: "lectura_cientifica", nombre: "Lectura Comprensiva de Artículos Científicos" },
    { id: "fisiologia_general", nombre: "Fisiología general", prereq: "fisica" },
    { id: "neuroanatomia", nombre: "Neuroanatomia" }
  ],
  "3° Semestre": [
    { id: "fisiologia_sistemas", nombre: "Fisiología de sistemas", prereq: "fisiologia_general" },
    { id: "infectologia", nombre: "Bases Integradas de Infectología, Inmunología y Farmacología General", prereq: "fisiologia_general" },
    { id: "examen_kinesico", nombre: "Examen Kinésico Básico", prereq: "biomecanica" },
    { id: "control_motor", nombre: "Control y Aprendizaje Motor" },
    { id: "investigacion1", nombre: "Fundamentos de la Investigación Científica" },
    { id: "educ_fisica1", nombre: "Educación física I" }
  ],
  "4° Semestre": [
    { id: "fisiopato", nombre: "Fisiopatología y Farmacología de Sistemas", prereq: "fisiologia_sistemas" },
    { id: "examen_condicion", nombre: "Examen de la Condición Física y la Conducta Motora", prereq: "examen_kinesico" },
    { id: "procedimientos", nombre: "Procedimientos Terapéuticos Básicos y Generales", prereq: "examen_kinesico" },
    { id: "desarrollo_psicomotor", nombre: "Kinesiología del Desarrollo Psicomotor", prereq: "control_motor" },
    { id: "bioinstrumental", nombre: "Análisis Bioinstrumental del Movimiento Humano" },
    { id: "lectura_critica", nombre: "Lectura Crítica de Artículos Científicos" },
    { id: "epidemiologia", nombre: "Análisis Epidemiológico" }
  ]  "5° Semestre": [
    { id: "actividad_salud", nombre: "Efectos de Actividad Física en la Salud", prereq: "fisiopato" },
    { id: "neurokine1", nombre: "Evaluación e Intervención en Neurokinesiología I", prereq: "desarrollo_psicomotor" },
    { id: "respiratorio1", nombre: "Evaluación e Intervención en Cuidados Respiratorios I", prereq: "fisiopato" },
    { id: "musculoesqueletico1", nombre: "Evaluación e Intervención en Musculoesquelético I", prereq: "procedimientos" },
    { id: "revision_bibliografica", nombre: "Revisión Bibliográfica", prereq: "lectura_critica" },
    { id: "modelo_salud", nombre: "Análisis del Modelo de Salud Chileno", prereq: "epidemiologia" },
    { id: "educ_fisica2", nombre: "Educación Física II", prereq: "educ_fisica1" },
    { id: "modulo_integrado1", nombre: "Modulo Integrado Interdisciplinario y Multiprofesional I" }
  ],
  "6° Semestre": [
    { id: "neurokine2", nombre: "Evaluación e Intervención en Neurokinesiología II", prereq: "neurokine1" },
    { id: "respiratorio2", nombre: "Evaluación e Intervención en Cuidados Respiratorios II", prereq: "respiratorio1" },
    { id: "musculoesqueletico2", nombre: "Evaluación e Intervención en Músculoesquelético II", prereq: "musculoesqueletico1" },
    { id: "razonamiento_clinico", nombre: "Razonamiento Clínico", prereq: "respiratorio1" },
    { id: "proyectos_investigacion", nombre: "Diseño y Formulación de Proyectos de Investigación", prereq: "revision_bibliografica" },
    { id: "ejercicio_profesional", nombre: "Responsabilidad del Ejercicio Profesional" },
    { id: "actividad_deporte", nombre: "Actividad Física y Deportes", prereq: "actividad_salud" }
  ],
  "7° Semestre": [
    { id: "intervencion_contexto1", nombre: "Intervención Profesional en Contexto I", prereq: "musculoesqueletico2" },
    { id: "estrategias_deportivas", nombre: "Estrategias Deportivas y Recreativas", prereq: "actividad_deporte" },
    { id: "relacion_entorno", nombre: "Análisis de la Relación Persona Entorno", prereq: "musculoesqueletico2" },
    { id: "determinantes_salud", nombre: "Determinantes Sociales de la Salud", prereq: "modelo_salud" },
    { id: "ejecucion_proyectos1", nombre: "Ejecución de Proyectos de Investigación I", prereq: "proyectos_investigacion" },
    { id: "administracion_basica", nombre: "Conceptos Básicos de Administración en Salud", prereq: "modelo_salud" },
    { id: "metodologias_ensenanza", nombre: "Metodologías de Enseñanza Aprendizaje" }
  ],
  "8° Semestre": [
    { id: "intervencion_contexto2", nombre: "Intervención Profesional en Contexto II", prereq: "intervencion_contexto1" },
    { id: "estrategias_aplicadas", nombre: "Estrategias Deportivas y Recreativas Aplicadas", prereq: "estrategias_deportivas" },
    { id: "evaluacion_ergonomica", nombre: "Evaluación Ergonómica", prereq: "relacion_entorno" },
    { id: "programas_salud", nombre: "Programas de Promoción y Prevención en Salud", prereq: "determinantes_salud" },
    { id: "ejecucion_proyectos2", nombre: "Ejecución de Proyectos de Investigación II", prereq: "ejecucion_proyectos1" },
    { id: "emprendimiento", nombre: "Proyectos de Emprendimiento", prereq: "administracion_basica" },
    { id: "metodologias_docentes", nombre: "Aplicación Básica de Metodologías Docentes", prereq: "metodologias_ensenanza" },
    { id: "modulo_integrado2", nombre: "Modulo Integrado Interdisciplinario y Multiprofesional II", prereq: "modulo_integrado1" }
  ],
  "9° y 10° Semestre": [
    { id: "intervencion1", nombre: "Intervención Profesional I", prereq: "intervencion_contexto2" },
    { id: "intervencion2", nombre: "Intervención Profesional II", prereq: "intervencion1" },
    { id: "intervencion_ergonomica", nombre: "Proyectos de Intervención Ergonómica", prereq: "evaluacion_ergonomica" },
    { id: "salud_comunitaria", nombre: "Intervención en Salud Comunitaria", prereq: "programas_salud" },
    { id: "profundizacion", nombre: "Cursos de Profundización Disciplinar y Profesional", prereq: "intervencion_contexto2" },
    { id: "comunicacion_cientifica", nombre: "Comunicación Científica", prereq: "ejecucion_proyectos2" },
    { id: "administracion_salud", nombre: "Administración en salud", prereq: "administracion_basica" }
  ]
};

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

function marcarDesmarcar(ramo) {
  if (ramo.classList.contains('aprobado')) {
    ramo.classList.remove('aprobado');
    localStorage.removeItem(ramo.dataset.id);
  } else {
    ramo.classList.add('aprobado');
    localStorage.setItem(ramo.dataset.id, 'aprobado');
  }
}

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

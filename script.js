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
  ]
};

export const TIMELINE = [
  {
    period: 'Sep 2026',
    title: 'Medalla de Oro · Estudiante Destacado',
    place: 'Facultad de Ciencias y Tecnología · UMSS',
    type: 'award',
    points: [
      'Primer lugar de Ingeniería Informática por el mejor promedio de la carrera.',
      'Reconocido en el acto del 47 aniversario de la facultad, en el Palacio de la Ciencia y la Cultura.',
    ],
    photos: [
      {src: 'awards/medalla-oro.webp', caption: 'Con la Medalla de Oro y el reconocimiento de la facultad'},
      {src: 'awards/destacados-nomina.webp', caption: 'Nómina oficial de estudiantes destacados: primer lugar en Ingeniería Informática'},
    ],
  },
  {
    period: '2025 — Presente',
    title: 'Desarrollador Freelance',
    place: 'Clientes del rubro gastronómico',
    type: 'freelance',
    points: [
      'Sistema de gestión para un café-bar: versión de escritorio y su migración a la web, entregado en 2026.',
      'Actualmente desarrollo el sistema del restaurante Brasa Brava.',
      'Levantamiento de requerimientos y acuerdos directamente con el cliente.',
      'Despliegue, impresión en ticketeras térmicas y reportes automáticos por correo.',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Electron', 'Python'],
    projects: ['Sistema de Gestión para Café-Bar', 'Brasa Brava'],
  },
  {
    period: 'May 2026 — Oct 2026',
    title: 'Pasantía · Desarrollo de Software',
    place: 'MAXAM FANEXA',
    type: 'internship',
    points: [
      'Desarrollo full stack del Sistema de Control de Viáticos, desde la solicitud del viaje hasta la rendición de gastos.',
      'Diseño de la arquitectura con el modelo C4.',
      'Manual técnico, documentación general del sistema y documentación de componentes en Storybook.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Gemini', 'Storybook'],
    projects: ['Sistema de Control de Viáticos'],
    architecture: {
      title: 'Arquitectura del sistema · Modelo C4',
      layers: [
        {label: 'Personas · 5 roles', compact: true, nodes: [{title: 'Empleado'}, {title: 'Supervisor'}, {title: 'Revisor'}, {title: 'Aprobador'}, {title: 'Administrador'}]},
        {label: 'Sistema de Control de Viáticos', nodes: [{title: 'Aplicación web', detail: 'React · Vite', tech: 'React'}, {title: 'API REST', detail: 'Node.js · Express · JWT', tech: 'Node.js'}]},
        {label: 'Servicios externos', nodes: [{title: 'Supabase', detail: 'Base de datos y archivos', tech: 'Supabase'}, {title: 'Gemini', detail: 'Lectura de comprobantes', tech: 'Gemini'}, {title: 'Brevo', detail: 'Correos programados', tech: 'Correo'}]},
      ],
    },
  },
  {
    period: '2024 — 2025',
    title: 'Asistente de Cátedra · Informática',
    place: 'Universidad Mayor de San Simón',
    type: 'work',
    points: [
      'Apoyo en Introducción a la Programación y Teoría de Grafos.',
      'Guía a estudiantes en algoritmos, lógica y resolución de problemas.',
      'Conducción de laboratorios y corrección de tareas y exámenes.',
    ],
    tags: ['Algoritmos', 'Teoría de Grafos'],
    photos: [{src: 'timeline/catedra.webp', caption: 'Exponiendo frente al curso en la facultad'}],
  },
  {
    period: '2024',
    title: 'Premio a la Excelencia Académica',
    place: 'Facultad de Ciencias y Tecnología · UMSS',
    type: 'award',
    points: [
      'Reconocimiento al mejor rendimiento académico: entre los 3 mejores estudiantes de la facultad.',
      'Diploma y medalla de honor entregados en septiembre de 2025.',
    ],
    photos: [
      {src: 'awards/excelencia-director.webp', caption: 'Entrega del diploma y la medalla de honor junto al director de carrera'},
      {src: 'awards/excelencia-medalla.webp', caption: 'Con la medalla y el diploma de honor en el acto de premiación'},
    ],
  },
  {
    period: '2023 — 2026',
    title: 'Licenciatura en Informática',
    place: 'Universidad Mayor de San Simón',
    type: 'education',
    points: [
      'Promedio 84.68/100.',
      'Programación, Estructuras de Datos, Bases de Datos, Teoría de Grafos, Desarrollo Web.',
    ],
    projects: ['Prototipo HTR para código manuscrito', 'Gestor de portafolios profesionales', 'Sitio web del Centro MEMI', 'Diagramador de flujo SVG', 'Landing page Academia Digital Pro', 'Simulación de sistemas en R'],
  },
];

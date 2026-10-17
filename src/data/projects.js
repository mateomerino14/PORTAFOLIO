const githubUrl = 'https://github.com/mateomerino14';

export const MEDIA_TYPES = {
  gallery: 'gallery',
  code: 'code',
};

const demoNote = 'Capturas de la aplicación corriendo con datos de ejemplo.';

export const PROJECTS = [
  {
    title: 'Sistema de Control de Viáticos',
    cover: 'projects/viaticos/mis-viajes.webp',
    context: 'Pasantía · MAXAM',
    kind: 'Web full stack',
    description: 'Plataforma para gestionar viajes corporativos y la rendición de gastos, desde la solicitud hasta la aprobación y el pago, con flujos por rol.',
    highlights: [
      'Extracción automática de datos de comprobantes con IA',
      'Generación de memorándums, planillas y recibos en PDF y Excel',
      'Resumen de pendientes por correo programado por el administrador',
    ],
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Gemini', 'Storybook'],
    links: [],
    isPrivateCode: true,
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Capturas del frontend real con datos ficticios.',
        images: [
          {src: 'projects/viaticos/inicio-sesion.webp', caption: 'Inicio de sesión con recuperación de contraseña por código'},
          {src: 'projects/viaticos/mis-viajes.webp', caption: 'Viajes del empleado: borradores, viajes en curso y gasto acumulado'},
          {src: 'projects/viaticos/nuevo-viaje.webp', caption: 'Solicitud de viaje con el presupuesto calculado según el cargo y los días'},
          {src: 'projects/viaticos/detalle-viaje.webp', caption: 'Detalle del viaje en curso con el gasto acumulado y los gastos registrados'},
          {src: 'projects/viaticos/resumen-administrador.webp', caption: 'Resumen del administrador con indicadores por periodo'},
        ],
      },
    ],
  },
  {
    title: 'Sistema de Gestión para Café-Bar',
    cover: 'projects/cafe-bar/mesas.webp',
    context: 'Cliente freelance · Entregado',
    kind: 'Escritorio y web',
    description: 'Sistema para controlar ventas, mesas, inventario, cocina y empleados de un café-bar. Empezó como aplicación de escritorio y lo migré a una aplicación web.',
    highlights: [
      'Comandas a cocina y tickets en impresoras térmicas mediante un agente local',
      'Reporte semanal de los productos más vendidos enviado por correo',
      'Instalación local con Electron y PostgreSQL embebido, sin depender de internet',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Electron', 'Python'],
    links: [],
    isPrivateCode: true,
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: demoNote,
        images: [
          {src: 'projects/cafe-bar/inicio-sesion.webp', caption: 'Inicio de sesión con selección rápida del empleado'},
          {src: 'projects/cafe-bar/mesas.webp', caption: 'Caja: mesas libres y ocupadas de cada sección, con cobro directo'},
          {src: 'projects/cafe-bar/registrar-pedido.webp', caption: 'Registro de un pedido por categoría con el total en tiempo real'},
          {src: 'projects/cafe-bar/reporte-productos.webp', caption: 'Reporte de productos vendidos con ingreso, costo y ganancia'},
          {src: 'projects/cafe-bar/configuracion.webp', caption: 'Configuración: respaldos, impresoras y reportes automáticos'},
        ],
      },
    ],
  },
  {
    title: 'Brasa Brava',
    context: 'Cliente freelance · En curso',
    kind: 'Web y escritorio',
    description: 'Sistema interno de un restaurante: caja, cocina, catálogo, stock, mesas, promociones y empleados. El mismo código funciona en la web y como aplicación de escritorio.',
    highlights: [
      'Versión de escritorio con PostgreSQL embebido, sin necesidad de internet',
      'Inicio de sesión por empleado y permisos por cargo',
      'Pruebas automáticas y revisión de estándares en cada Pull Request',
    ],
    tags: ['React', 'Express', 'PostgreSQL', 'Electron', 'Vitest'],
    links: [],
    isPrivateCode: true,
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: demoNote,
        images: [
          {src: 'projects/brasa-brava/inicio.webp', caption: 'Página principal con el resumen del día según el cargo'},
          {src: 'projects/brasa-brava/caja.webp', caption: 'Caja con el plano de mesas, ocupación y ventas del día'},
          {src: 'projects/brasa-brava/cocina.webp', caption: 'Cocina: pedidos pendientes con tiempo de espera'},
          {src: 'projects/brasa-brava/promociones.webp', caption: 'Promociones con vigencia, horarios y descuento'},
        ],
      },
    ],
  },
  {
    title: 'Prototipo HTR para código manuscrito',
    context: 'Proyecto de Grado',
    kind: 'Investigación',
    description: 'Prototipo que integra herramientas de reconocimiento de escritura para transcribir el código Java y Python escrito a mano en exámenes de la FCyT-UMSS.',
    highlights: [
      'Comparación de TrOCR, PaddleOCR y Tesseract',
      'Métricas CER y WER, con y sin indentación',
      'Segmentación de líneas y análisis estadístico de errores',
    ],
    tags: ['Python', 'TrOCR', 'PaddleOCR', 'Tesseract'],
    links: [],
    isPrivateCode: true,
    media: [
      {
        type: MEDIA_TYPES.code,
        label: 'Código',
        file: 'piloto/metricas.py',
        language: 'Python',
        code: `def levenshtein(a, b):
    if len(a) < len(b):
        a, b = b, a

    fila_anterior = list(range(len(b) + 1))
    for i, elem_a in enumerate(a, start=1):
        fila_actual = [i]
        for j, elem_b in enumerate(b, start=1):
            eliminacion = fila_anterior[j] + 1
            insercion = fila_actual[j - 1] + 1
            sustitucion = fila_anterior[j - 1] + (elem_a != elem_b)
            fila_actual.append(min(eliminacion, insercion, sustitucion))
        fila_anterior = fila_actual

    return fila_anterior[-1]


def cer(referencia, hipotesis):
    return _tasa_error(normalizar(referencia), normalizar(hipotesis))`,
      },
    ],
  },
  {
    title: 'Gestor de portafolios profesionales',
    context: 'Taller de Ingeniería de Software',
    kind: 'Web en equipo',
    description: 'Plataforma para que cada usuario arme su portafolio profesional: datos personales, formación, experiencia, habilidades, proyectos y certificados, con un perfil público y una versión imprimible.',
    highlights: [
      'Equipo de 10 personas con Scrum, ramas por funcionalidad y Pull Requests',
      'Área de certificados, perfil público y recuperación de contraseña',
      'Documentación del frontend y de sus componentes',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Vitest', 'Storybook'],
    links: [{label: 'Código', href: 'https://github.com/gonchi2332/six_seven_frontend'}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Capturas del frontend real con datos ficticios.',
        images: [
          {src: 'projects/gestor-portafolios/inicio-sesion.webp', caption: 'Inicio de sesión'},
          {src: 'projects/gestor-portafolios/portada.webp', caption: 'Portada para buscar y verificar perfiles'},
          {src: 'projects/gestor-portafolios/perfil-publico.webp', caption: 'Perfil público con datos personales y de contacto'},
          {src: 'projects/gestor-portafolios/habilidades.webp', caption: 'Habilidades técnicas con su nivel de dominio'},
          {src: 'projects/gestor-portafolios/certificados.webp', caption: 'Área de certificados en el perfil público'},
        ],
      },
    ],
  },
  {
    title: 'Sitio web del Centro MEMI',
    context: 'Universidad',
    kind: 'Sitio institucional',
    description: 'Sitio web institucional del Centro de Mejoramiento de la Enseñanza de la Matemática e Informática de la FCyT-UMSS: el centro, sus cursos, publicaciones, servicios y la sección ICPC UMSS.',
    highlights: [
      'Diseño mobile first, adaptable a celular, tablet y escritorio',
      'Carrusel de novedades, menú con submenús y filtros de publicaciones',
      'Formularios para registrar cursos, publicaciones, afiches y fotos',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{label: 'Código', href: `${githubUrl}/CENTRO-MEMI-WEBSITE`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Capturas del sitio funcionando con su propio contenido.',
        images: [
          {src: 'projects/centro-memi/inicio.webp', caption: 'Portada con el lema del centro y acceso a la navegación'},
          {src: 'projects/centro-memi/mision-vision.webp', caption: 'Misión, visión y valores del centro'},
          {src: 'projects/centro-memi/cursos.webp', caption: 'Cursos y seminarios con su formulario de registro'},
          {src: 'projects/centro-memi/servicios.webp', caption: 'Servicios que ofrece el centro'},
        ],
      },
    ],
  },
  {
    title: 'Diagramador de flujo SVG',
    context: 'Universidad',
    kind: 'Web interactiva',
    description: 'Editor web para dibujar diagramas de flujo con SVG puro: figuras, conexiones ortogonales con flechas, zoom y edición de texto en línea.',
    highlights: [
      'Conexiones que se recalculan al mover las figuras',
      'Autoguardado local con PouchDB',
      'Importación y exportación de diagramas en JSON',
    ],
    tags: ['JavaScript', 'SVG', 'PouchDB'],
    links: [{label: 'Código', href: `${githubUrl}/DIAGRAMADOR-FLUJO-SVG`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Diagrama de ejemplo cargado con el importador JSON del propio editor.',
        images: [
          {src: 'projects/diagramador/editor.webp', caption: 'Editor con figuras, decisiones Sí/No y conexiones ortogonales'},
        ],
      },
    ],
  },
  {
    title: 'Landing page Academia Digital Pro',
    context: 'Proyecto web',
    kind: 'Landing page',
    description: 'Landing page para promocionar una plataforma de cursos online, pensada para convertir visitas en inscripciones.',
    highlights: [
      'Fondo animado con esferas de luz y efecto de vidrio',
      'Animaciones al hacer scroll con Intersection Observer',
      'Secciones de estadísticas, beneficios y llamados a la acción',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{label: 'Código', href: `${githubUrl}/PRIMERA-LANDING-PAGE`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'El video de la portada se carga desde YouTube y no aparece en la captura.',
        images: [
          {src: 'projects/landing-academia/inicio.webp', caption: 'Portada con la propuesta principal'},
          {src: 'projects/landing-academia/estadisticas.webp', caption: 'Llamado a la acción y estadísticas clave'},
          {src: 'projects/landing-academia/beneficios.webp', caption: 'Beneficios en tarjetas con efecto de vidrio'},
          {src: 'projects/landing-academia/llamado.webp', caption: 'Cierre con el llamado a la acción final'},
        ],
      },
    ],
  },
  {
    title: 'Simulación de sistemas en R',
    context: 'Universidad',
    kind: 'Datos y estadística',
    description: 'Generadores de números pseudoaleatorios implementados desde cero y pruebas estadísticas para validar su calidad.',
    highlights: [
      'Generadores congruenciales y transformación inversa',
      'Pruebas de Póker, Chi-cuadrada y corridas',
      'Simulaciones de Monte Carlo con gráficos de convergencia',
    ],
    tags: ['R', 'ggplot2', 'Estadística'],
    links: [{label: 'Código', href: `${githubUrl}/ANALISIS-DE-DATOS-EN-SIMULACION-DE-SISTEMAS`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Gráficos',
        note: 'Gráficos generados al ejecutar las funciones del repositorio con R.',
        images: [
          {src: 'projects/simulacion-r/transformada-inversa.webp', caption: 'Transformada inversa: histograma de 5000 valores generados frente a la densidad teórica'},
          {src: 'projects/simulacion-r/dado-convergencia.webp', caption: 'Convergencia de la frecuencia relativa de cada cara en 5000 lanzamientos de un dado'},
          {src: 'projects/simulacion-r/dado-frecuencias.webp', caption: 'Frecuencia absoluta de cada cara frente al valor esperado'},
          {src: 'projects/simulacion-r/estimacion-pi.webp', caption: 'Estimación de π por Monte Carlo con un generador congruencial mixto'},
        ],
      },
      {
        type: MEDIA_TYPES.code,
        label: 'Código',
        file: 'Generados de variables aleatorias.R',
        language: 'R',
        code: `GeneradorCongruencialMixto <- setRefClass("GeneradorCongruencialMixto", fields = list(
  semilla = "numeric",
  multiplicador = "numeric",
  incremento = "numeric",
  modulo = "numeric"
),
methods = list(generarNumeros = function(cantidad) {
  valores <- numeric(cantidad + 1)
  valores[1] <- semilla
  for (i in 2:(cantidad + 1)) {
    valores[i] <- (multiplicador * valores[i - 1] + incremento) %% modulo
  }
  return(valores)
}))`,
      },
    ],
  },
];

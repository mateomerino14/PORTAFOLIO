const githubUrl = 'https://github.com/mateomerino14';

export const MEDIA_TYPES = {
  gallery: 'gallery',
  code: 'code',
  model: 'model',
};

const demoNote = 'Capturas de la aplicación corriendo con datos de ejemplo.';

export const PROJECTS = [
  {
    title: 'Sistema de Control de Viáticos',
    cover: 'projects/viaticos/mis-viajes.webp',
    context: 'Pasantía · MAXAM FANEXA',
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
    title: 'Sistema Cafebar · Web y escritorio',
    cover: 'projects/cafe-bar/mesas.webp',
    context: 'Cliente freelance · Entregado',
    kind: 'Web y escritorio',
    description: 'Sistema de gestión de un café temático con dos versiones: primero una aplicación web con Supabase y luego su conversión a la aplicación de escritorio que usa hoy el local. Cubre caja por mesas, pedidos a cocina, inventario, promociones, empleados y reportes.',
    highlights: [
      'Versión web con React, Node.js y Supabase en la nube',
      'Versión de escritorio con Electron y PostgreSQL embebido, sin costos mensuales ni depender de internet, usable desde celulares y tablets en el Wi-Fi del local',
      'Comandas y tickets en impresoras térmicas y reporte semanal de los productos más vendidos por correo',
    ],
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Electron'],
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
    title: 'Sistema Cafebar · Escritorio en Python',
    cover: 'projects/cafe-bar-python/mesas.webp',
    context: 'Cliente freelance · Primera versión',
    kind: 'Escritorio',
    description: 'Primera versión del sistema del café, hecha como aplicación de escritorio en Python antes de pasar a las versiones web y de escritorio. Cubre ventas por mesa, cocina, inventario de ingredientes, productos, promociones, empleados con permisos por cargo y reportes.',
    highlights: [
      'Control de stock por ingredientes, con extras y exclusiones en cada pedido',
      'Impresión de tickets y comandas en impresoras térmicas USB y seriales',
      'Reportes en PDF con gráficos, respaldos por correo e importación desde Excel',
    ],
    tags: ['Python', 'PyQt', 'SQLite', 'Pandas'],
    links: [],
    isPrivateCode: true,
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: demoNote,
        images: [
          {src: 'projects/cafe-bar-python/inicio-sesion.webp', caption: 'Inicio de sesión con el carrusel de empleados'},
          {src: 'projects/cafe-bar-python/mesas.webp', caption: 'Mesas de cada salón: ocupadas en rojo, con su mesero y el cobro'},
          {src: 'projects/cafe-bar-python/registrar-pedido.webp', caption: 'Registro de un pedido con productos por categoría y el total'},
          {src: 'projects/cafe-bar-python/reporte-ventas.webp', caption: 'Reporte de ventas detalladas por fecha, mesero, salón y método de pago'},
          {src: 'projects/cafe-bar-python/secciones.webp', caption: 'Administración de los salones del local'},
        ],
      },
    ],
  },
  {
    title: 'Brasa Brava',
    cover: 'projects/brasa-brava/caja.webp',
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
          {src: 'projects/brasa-brava/inicio-sesion.webp', caption: 'Inicio de sesión con selección rápida del empleado'},
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
    title: 'SansiStore',
    cover: 'projects/sansistore/inicio.webp',
    context: 'Procesos Ágiles · Proyecto en equipo',
    kind: 'E-commerce',
    description: 'Tienda en línea de la comunidad UMSS construida por varios equipos con Scrum: catálogo, carrito, pedidos, inventario, vendedores y repartidores. Formé parte del equipo Divinity Minds.',
    highlights: [
      'Carrito de compras sincronizado con Firestore y guardado local para visitantes',
      'Filtro de productos por categorías y mejoras en las tarjetas de producto',
      'Aviso por correo cuando un producto agotado vuelve a tener stock, con Cloud Functions',
    ],
    tags: ['Astro', 'React', 'TypeScript', 'Firebase', 'Tailwind'],
    links: [{label: 'Código', href: 'https://github.com/ProcesosAgilesUMSS/sansistore'}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Capturas del sitio publicado en Vercel.',
        images: [
          {src: 'projects/sansistore/inicio-sesion.webp', caption: 'Inicio de sesión con la cuenta institucional de la UMSS'},
          {src: 'projects/sansistore/inicio.webp', caption: 'Portada con buscador, categorías y ofertas'},
          {src: 'projects/sansistore/filtro-categorias.webp', caption: 'Catálogo con el filtro por categorías'},
          {src: 'projects/sansistore/detalle-producto.webp', caption: 'Detalle de un producto agotado'},
          {src: 'projects/sansistore/carrito.webp', caption: 'Carrito con el resumen de pago'},
        ],
      },
      {
        type: MEDIA_TYPES.code,
        label: 'Código',
        file: 'functions/index.js',
        language: 'JavaScript',
        code: `export const notificarStockDisponible = onDocumentUpdated(
    {
      document: "inventory/{productId}",
      region: "southamerica-east1",
      secrets: [gmailUser, gmailPass],
    },
    async (event) => {
      const before = event.data.before.data();
      const after = event.data.after.data();

      const stockAntes = before.stockAvailable ?? 0;
      const stockDespues = after.stockAvailable ?? 0;

      if (stockAntes > 0 || stockDespues <= 0) {
        return;
      }

      const productId = event.params.productId;
      const subscribersSnap = await db
          .collection("stockAlerts")
          .doc(productId)
          .collection("subscribers")
          .get();`,
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
          {src: 'projects/centro-memi/icpc.webp', caption: 'Sección ICPC UMSS con el registro de afiches'},
        ],
      },
    ],
  },
  {
    title: 'Chat grupal con sockets',
    cover: 'projects/chat-sockets/terminales.webp',
    context: 'Universidad · Redes',
    kind: 'Consola',
    description: 'Chat por consola en el que varios clientes conversan a través de un servidor TCP. Cada mensaje que escribe un cliente llega al resto de los conectados.',
    highlights: [
      'Servidor multihilo con un hilo por cliente conectado',
      'Recepción en segundo plano para leer y escribir al mismo tiempo',
      'Lista de conexiones segura entre hilos y envíos sincronizados por socket',
    ],
    tags: ['Java', 'Sockets TCP', 'Redes'],
    links: [{label: 'Código', href: `${githubUrl}/CHAT-SOCKETS-JAVA`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Servidor y tres clientes ejecutándose en la misma computadora.',
        images: [
          {src: 'projects/chat-sockets/conexion.webp', caption: 'Un cliente elige su nombre y se conecta al chat'},
          {src: 'projects/chat-sockets/servidor.webp', caption: 'El servidor escucha en el puerto 5000 y cuenta los clientes en línea'},
          {src: 'projects/chat-sockets/conversacion.webp', caption: 'Conversación vista desde uno de los clientes'},
          {src: 'projects/chat-sockets/terminales.webp', caption: 'Servidor y tres clientes conversando al mismo tiempo'},
          {src: 'projects/chat-sockets/desconexion.webp', caption: 'Los clientes salen y el servidor cierra cada conexión'},
        ],
      },
      {
        type: MEDIA_TYPES.code,
        label: 'Código',
        file: 'src/ThreadServidor.java',
        language: 'Java',
        code: `@Override
public void run() {
    try {
        while (true) {
            String mensaje = flujo.readUTF();
            enviarTodosDemas(mensaje);
        }
    } catch (IOException e) {
        desconectar();
    }
}

private void enviarTodosDemas(String mensaje) {
    for (Socket user : Servidor.listaUsuarios) {
        if (user != client) {
            enviar(mensaje, user);
        }
    }
}

private void enviar(String mensaje, Socket clienteOtro) {
    synchronized (clienteOtro) {
        try {
            DataOutputStream flujoSalida = new DataOutputStream(clienteOtro.getOutputStream());
            flujoSalida.writeUTF(mensaje);
        } catch (IOException e) {
            System.out.println("Error enviando mensaje");
        }
    }
}`,
      },
    ],
  },
  {
    title: 'Capilla con bibliotecaria en 3D',
    cover: 'projects/capilla/pasillo.webp',
    context: 'Universidad',
    kind: 'Modelado 3D',
    description: 'Escena modelada en Blender: el interior de una capilla convertida en biblioteca, con estanterías, lámpara colgante, puerta de arco y una bibliotecaria al fondo del pasillo.',
    highlights: [
      'Modelado de la arquitectura, el mobiliario y la iluminación interior',
      'Renders con Cycles desde varios puntos de la escena',
      'Modelo exportado a glTF para recorrerlo en vivo en el navegador',
    ],
    tags: ['Blender', 'Three.js'],
    links: [{label: 'Código', href: `${githubUrl}/CAPILLA-BLENDER`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Renders',
        note: 'Renders generados con Cycles a partir del archivo .blend del repositorio.',
        images: [
          {src: 'projects/capilla/pasillo.webp', caption: 'Pasillo central con las estanterías y la bibliotecaria al fondo'},
          {src: 'projects/capilla/lampara.webp', caption: 'Lámpara colgante y vegetación sobre la entrada'},
          {src: 'projects/capilla/bibliotecaria.webp', caption: 'Bibliotecaria con un libro frente a la puerta de arco'},
          {src: 'projects/capilla/estanterias.webp', caption: 'Detalle de las estanterías con libros'},
          {src: 'projects/capilla/recorrido.webp', caption: 'Vista del pasillo desde la puerta de arco'},
        ],
      },
      {
        type: MEDIA_TYPES.model,
        label: 'Modelo 3D',
        src: 'projects/capilla/capilla.glb',
        rotation: [0, Math.PI, 0],
        camera: {position: [-205, 55, 362], target: [-205, 42, 0]},
        lights: [
          {position: [-206, 58, 98], intensity: 2.2, color: '#ffd9a0', decay: 0, distance: 420},
          {position: [-205, 60, -10], intensity: 1.4, color: '#ffe7c2', decay: 0, distance: 260},
        ],
        controls: {minDistance: 40, maxDistance: 380, minAzimuthAngle: -0.08, maxAzimuthAngle: 0.08, minPolarAngle: 1.45, maxPolarAngle: 1.66},
        note: 'Arrastra para girar, rueda o pellizca para acercar.',
      },
    ],
  },
  {
    title: 'Diagramador de flujo SVG',
    cover: 'projects/diagramador/editor.webp',
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
          {src: 'projects/diagramador/editor-vacio.webp', caption: 'Editor vacío con la paleta de figuras y los modos de trabajo'},
          {src: 'projects/diagramador/construccion.webp', caption: 'Diagrama en construcción con entrada, proceso y decisión'},
          {src: 'projects/diagramador/editor.webp', caption: 'Diagrama completo con decisiones Sí/No y conexiones ortogonales'},
          {src: 'projects/diagramador/edicion-texto.webp', caption: 'Edición del texto de un proceso con el editor en línea'},
          {src: 'projects/diagramador/zoom.webp', caption: 'Zoom sobre la decisión y sus salidas'},
        ],
      },
    ],
  },
  {
    title: 'Landing page Academia Digital Pro',
    context: 'Proyecto web',
    kind: 'Landing page',
    description: 'Landing page de un programa de 12 semanas para crear un primer curso online. La rediseñé con una tipografía editorial, fotos reales y un texto claro sobre qué incluye el programa y cómo inscribirse.',
    highlights: [
      'Tipografía Alegreya y paleta propia en verde pizarra y amarillo lápiz',
      'Programa explicado por etapas, con las semanas que dura cada una',
      'Formulario de inscripción con validación y mensaje de confirmación',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{label: 'Código', href: `${githubUrl}/PRIMERA-LANDING-PAGE`}],
    media: [
      {
        type: MEDIA_TYPES.gallery,
        label: 'Capturas',
        note: 'Fotos de Unsplash y video embebido desde YouTube.',
        images: [
          {src: 'projects/landing-academia/inicio.webp', caption: 'Portada con la propuesta, la inscripción y los datos clave del programa'},
          {src: 'projects/landing-academia/programa.webp', caption: 'Programa en cuatro etapas, con las semanas de cada una'},
          {src: 'projects/landing-academia/video.webp', caption: 'Video embebido para conocer más antes de inscribirse'},
          {src: 'projects/landing-academia/incluye.webp', caption: 'Qué incluye el programa, junto a una foto de una clase en línea'},
          {src: 'projects/landing-academia/inscripcion.webp', caption: 'Formulario de inscripción con la confirmación de la reserva'},
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
    tags: ['R', 'Estadística'],
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
          {src: 'projects/simulacion-r/distribucion-tir.webp', caption: 'Distribución acumulada de la TIR de un proyecto en 1000 corridas'},
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

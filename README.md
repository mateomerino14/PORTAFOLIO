# Portafolio — Mateo Merino

Sitio personal organizado como un grafo 3D que se recorre al hacer scroll. Cada nodo es un aspecto de mi perfil: sobre mí, stack, proyectos, trayectoria, certificaciones y contacto. Es un guiño a Teoría de Grafos.

**Sitio publicado:** https://mateomerino14.github.io/PORTAFOLIO/

## Requisitos

- Node.js 22 o superior

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev                 # servidor de desarrollo en http://localhost:5173
npm run build               # compilación para producción
npm run preview             # previsualización de la compilación
npm run lint                # revisión de estándares de código
npm run storybook           # documentación interactiva de los componentes
npm run build-storybook     # sitio estático de Storybook
```

## Stack

| Tecnología | Propósito |
|---|---|
| React | Interfaz mediante componentes funcionales y hooks |
| Vite | Compilación y servidor de desarrollo |
| Tailwind CSS | Utilidades de maquetado y paleta mediante `@theme` |
| Three.js + React Three Fiber + Drei | Escena 3D del grafo que se recorre |
| Framer Motion | Revelado al hacer scroll, galerías, tarjetas con inclinación y transiciones |
| Lenis | Desplazamiento suave |
| Lucide React + Simple Icons | Iconografía general y logos de tecnologías |
| Storybook | Documentación interactiva de los componentes |

## Secciones

| Sección | Contenido |
|---|---|
| Portada | Nombre animado, rol rotativo y accesos a proyectos y contacto |
| Sobre mí | Presentación, cifras destacadas e idiomas |
| Stack | Tecnologías por área; al señalar una se iluminan los proyectos que la usan |
| Proyectos | Índice con miniaturas y una parada por proyecto con capturas, gráficos o código |
| Trayectoria | Línea de tiempo desde el colegio, con cifras y una parada por etapa con fotos, diplomas, arquitectura o proyectos |
| Certificaciones | Resumen general y una parada por área (profesionales, diplomados, datos e IA, desarrollo de software, competencias y comunidad, idiomas) con sus certificados escaneados |
| Contacto | Correo para copiar, menú para escribir desde Gmail, Outlook o la app de correo, redes y tarjeta con foto y hora local |

El CV en PDF se descarga desde la barra de navegación y desde el menú del celular.

## Arquitectura

### El recorrido

La página es una secuencia de **paradas**. Cada sección principal es un nodo, y proyectos, trayectoria y certificaciones se abren en subnodos, uno por elemento. Las paradas se generan a partir de `data/`, así que agregar un proyecto agrega un nodo al grafo sin tocar la escena.

```
data/ (proyectos, trayectoria, certificaciones)
   │  journeyStops.js arma la lista de paradas
   ▼
Paradas en el DOM (StopPanel con data-stop)
   │  useJourneyScroll mide su posición y calcula el avance
   ▼
journeyStore (avance, parada actual, tecnología señalada)
   │
   ├──► Escena 3D: la cámara viaja entre nodos y un pulso recorre la arista
   ├──► Mapa del recorrido, barra de navegación e índices de cada sección
   └──► Etiquetas de los nodos, proyectadas sobre la pantalla en cada cuadro
```

- **Avance continuo.** `useJourneyScroll` convierte el scroll en un número decimal: `3.5` significa «a mitad de camino entre la parada 3 y la 4». La escena lo lee en cada cuadro sin volver a renderizar React.
- **Pausa en cada nodo.** La cámara se queda quieta mientras el panel está centrado y solo viaja en la franja central entre dos paradas (`CAMERA_MOTION.dwell`), para que el texto se pueda leer.
- **Stack conectado.** Cada tecnología que aparece en un proyecto es un nodo unido a esos proyectos. Al señalarla en el panel del stack, sus aristas se iluminan.
- **Celular y movimiento reducido.** En pantallas angostas la cámara deja el nodo arriba, el panel abajo y el espacio entre paradas se acorta. Si el sistema pide menos movimiento, la cámara salta de nodo en nodo y las galerías no avanzan solas.

### Componentes

La jerarquía sigue Atomic Design: átomos, moléculas y organismos dentro de cada sección, y componentes genéricos en `components/ui/`. La lógica de estado, scroll, animación y cálculo vive en hooks; los componentes solo presentan lo que reciben por props.

| Componente | Uso |
|---|---|
| `ImageGallery` | Capturas, gráficos, fotos y certificados. Avanza sola cada 5 segundos con un fundido mientras está a la vista y se pausa al pasar el cursor o al ampliar una imagen |
| `TechIcon` y `TechList` | Logo de cada tecnología con su color, o un ícono equivalente si no tiene logo |
| `StatTiles` | Fila de tres cifras de la trayectoria y las certificaciones |
| `ArchitectureDiagram` | Diagrama de contenedores al estilo del modelo C4 |
| `ModelViewer` | Visor de modelos glTF que se recorre en vivo con la cámara limitada al interior del modelo. Carga Three.js solo cuando se abre y muestra un aviso si no hay WebGL |
| `StopPanel` y `StopIndex` | Panel de cada parada e índice de subnodos con miniatura o ícono |

La escena 3D se carga con `React.lazy`, de modo que Three.js genera su propio fragmento de JavaScript y el contenido aparece sin esperarlo. Si el navegador no tiene WebGL, la página se muestra igual sin la escena.

### Storybook

Todos los componentes de `components/ui/` y los átomos y moléculas de `features/` tienen su historia, con una descripción en español. Las moléculas de la escena 3D no la tienen porque necesitan el lienzo WebGL y el estado del recorrido; se revisan directamente en la página.

## Estructura

```
src/
├── components/ui/       Componentes genéricos: galería, íconos, cifras, diagrama, botones
├── features/            Secciones de la página
│   ├── journey/         Paradas del recorrido, su estado compartido, el panel y el índice de cada parada
│   │   ├── constants/   Lista de paradas y relación entre tecnologías y proyectos
│   │   ├── hooks/       Scroll, parada actual y subnodos
│   │   ├── molecules/
│   │   └── store/       Estado compartido entre el DOM y la escena 3D
│   ├── scene/           Escena 3D: nodos, aristas, cámara, pulso y etiquetas
│   ├── hero/
│   ├── about/
│   ├── stack/
│   ├── projects/        Cada sección se divide igual:
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── hooks/
│   ├── timeline/
│   ├── certifications/
│   └── contact/
├── hooks/shared/        Hooks reutilizables: scroll, puntero, galería, medios y hora local
├── layouts/             Barra de navegación, menú del celular, mapa del recorrido y pie
├── pages/               Página principal
├── data/                Contenido: perfil, proyectos, stack, trayectoria y certificaciones
├── utils/               Funciones puras: paradas, avance, grafo, periodos, colores y rutas
└── constants/           Paleta de colores, curvas de animación, navegación e íconos de tecnologías

public/
├── projects/            Capturas de cada proyecto en WebP
├── certificates/        Certificados escaneados
├── school/              Diplomas y títulos del colegio
├── awards/, timeline/   Fotos y diplomas de reconocimientos y de la trayectoria
├── profile/             Foto de perfil
└── cv-mateo-merino.pdf  CV que se descarga desde la página
```

## Contenido

Todo el texto vive en `src/data/` y las imágenes en `public/`. Para agregar un proyecto, una certificación o una etapa solo se edita el archivo correspondiente: la parada, su nodo en el grafo, su lugar en el mapa y su fila en el índice se generan solos.

| Archivo | Campos principales |
|---|---|
| `profile.js` | Datos personales, presentación, cifras, idiomas, foto y CV |
| `projects.js` | `context`, `kind`, `description`, `highlights`, `tags`, `links`, `media` (capturas, código o modelo 3D) y `isPrivateCode` |
| `timeline.js` | `period`, `type`, `points`, `tags` y, según la etapa, `photos`, `architecture` o `projects` |
| `certifications.js` | Por grupo: `name`, `issuer`, `date`, `hours`, `tech` e `image` del certificado |
| `stack.js` | Tecnologías agrupadas por área |

Un proyecto con `isPrivateCode` muestra la etiqueta «Código privado» en lugar del enlace al repositorio.

Un bloque `model` de `media` recibe el archivo `.glb` (comprimido con meshopt), la posición inicial de la cámara, sus luces y los límites de giro y acercamiento. Las capturas de cada proyecto van en orden de uso, empezando por el inicio de sesión cuando la aplicación lo tiene, y los datos personales de los certificados escaneados (CI, RUDE, teléfonos y códigos QR) se difuminan antes de publicarlos.

## Despliegue

Cada `push` a `main` publica el sitio en GitHub Pages mediante `.github/workflows/deploy.yml`. Requiere activar una sola vez **Settings → Pages → Source: GitHub Actions**.

El flujo calcula la ruta base a partir del nombre del repositorio: si se llama `mateomerino14.github.io` el sitio queda en la raíz; si no, en `/<nombre-del-repositorio>/`. Con el nombre actual queda en `/PORTAFOLIO/`.

## Estándares

El código sigue las mismas convenciones de mis otros proyectos:

- Código en inglés y textos de la interfaz en español.
- Sin comentarios explicativos en el frontend.
- Objeto `styles` al inicio de cada componente y colores solo desde `constants/` y la paleta de `@theme`.
- Sin valores mágicos: cada número tiene una constante con nombre.
- Sin ternarios en la lógica; solo en el JSX para clases o valores simples.
- Punto y coma, comillas simples y `else`/`catch` en línea nueva, revisados por ESLint.
- Commits con Conventional Commits en español.

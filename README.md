# Portafolio — Mateo Merino

Sitio personal organizado como un grafo 3D que se recorre al hacer scroll. Cada nodo es un aspecto de mi perfil: sobre mí, stack, proyectos, trayectoria, certificaciones y contacto. Es un guiño a Teoría de Grafos, materia en la que soy asistente de cátedra.

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
| Framer Motion | Revelado al hacer scroll, tarjetas con inclinación, botones magnéticos y transiciones |
| Lenis | Desplazamiento suave |
| Lucide React | Iconografía |
| Storybook | Documentación interactiva de `components/ui/` y de los átomos y moléculas de `features/`, salvo las de la escena 3D |

## Arquitectura

### El recorrido

La página es una secuencia de **paradas**. Cada sección principal es un nodo, y proyectos, trayectoria y certificaciones se abren en subnodos, uno por elemento. Las paradas se generan a partir de los datos de `data/`, así que agregar un proyecto agrega un nodo al grafo sin tocar la escena.

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
   ├──► Mapa del recorrido y barra de navegación
   └──► Etiquetas de los nodos, proyectadas sobre la pantalla en cada cuadro
```

- **Avance continuo.** `useJourneyScroll` convierte el scroll en un número decimal: `3.5` significa «a mitad de camino entre la parada 3 y la 4». La escena lo lee en cada cuadro sin volver a renderizar React.
- **Pausa en cada nodo.** La cámara se queda quieta mientras el panel está centrado y solo viaja en la franja central entre dos paradas (`CAMERA_MOTION.dwell`), para que el texto se pueda leer.
- **Stack conectado.** Cada tecnología que aparece en un proyecto es un nodo unido a esos proyectos. Al señalarla en el panel del stack, sus aristas se iluminan.
- **Celular y movimiento reducido.** En pantallas angostas la cámara deja el nodo arriba y el panel abajo. Si el sistema pide menos movimiento, la cámara salta de nodo en nodo sin animación.

### Componentes

La jerarquía sigue Atomic Design. La lógica de estado, scroll y animación vive en hooks; los componentes solo presentan lo que reciben por props.

La escena 3D se carga con `React.lazy`, de modo que Three.js genera su propio fragmento de JavaScript y el contenido aparece sin esperarlo. Sus moléculas no tienen historias en Storybook porque necesitan el lienzo WebGL y el estado del recorrido; se revisan directamente en la página.

### Galerías

`ImageGallery` muestra capturas, gráficos, fotos y certificados. Avanza sola cada 5 segundos con un fundido mientras está a la vista, se pausa al pasar el cursor o al ampliar una imagen, y no se mueve si el sistema pide menos movimiento.

## Estructura

```
src/
├── components/ui/       Componentes genéricos: galería, íconos de tecnologías, diagrama de arquitectura, botones
├── features/            Secciones de la página
│   ├── journey/         Paradas del recorrido, su estado compartido y el panel de cada parada
│   │   ├── constants/   Lista de paradas y relación entre tecnologías y proyectos
│   │   ├── hooks/       Scroll, parada actual y subnodos
│   │   ├── molecules/
│   │   └── store/       Estado compartido entre el DOM y la escena 3D
│   ├── scene/           Escena 3D: nodos, aristas, cámara, pulso y etiquetas
│   ├── hero/
│   ├── about/
│   ├── stack/
│   ├── projects/
│   ├── timeline/
│   ├── certifications/
│   └── contact/
├── hooks/shared/        Hooks reutilizables de scroll, puntero y medios
├── layouts/             Barra de navegación, mapa del recorrido y pie
├── pages/               Página principal
├── data/                Contenido: perfil, proyectos, stack, trayectoria y certificaciones
├── utils/               Funciones auxiliares puras (paradas, avance y distribución del grafo)
└── constants/           Paleta de colores, curvas de animación, navegación e íconos de tecnologías

public/
├── projects/            Capturas de cada proyecto en WebP
├── certificates/        Certificados escaneados
├── awards/, timeline/   Fotos de reconocimientos y de la trayectoria
├── profile/             Foto de perfil
└── cv-mateo-merino.pdf  CV que se descarga desde la barra de navegación
```

## Contenido

Todo el texto del sitio vive en `src/data/` y las imágenes en `public/`. Para agregar un proyecto, una certificación o una entrada en la trayectoria solo se edita el archivo correspondiente: la parada, su nodo en el grafo, su lugar en el mapa y su índice se generan solos. Un proyecto con `isPrivateCode` muestra la etiqueta «Código privado» en lugar del enlace al repositorio.

## Despliegue

Cada `push` a `main` publica el sitio en GitHub Pages mediante `.github/workflows/deploy.yml`. Requiere activar una sola vez **Settings → Pages → Source: GitHub Actions**.

El flujo calcula la ruta base a partir del nombre del repositorio: si se llama `mateomerino14.github.io` el sitio queda en la raíz; si no, en `/<nombre-del-repositorio>/`.

## Estándares

El código sigue las mismas convenciones de mis otros proyectos: código en inglés y textos en español, objeto `styles` al inicio de cada componente, colores centralizados en `constants/`, sin valores mágicos y commits con Conventional Commits.

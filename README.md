# Portafolio — Mateo Merino

Sitio personal con mis proyectos, stack, trayectoria y certificaciones. La portada muestra un grafo 3D interactivo, un guiño a Teoría de Grafos, materia en la que soy asistente de cátedra.

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
| Three.js + React Three Fiber + Drei | Escena 3D del grafo en la portada |
| Framer Motion | Revelado al hacer scroll, tarjetas con inclinación, botones magnéticos y transiciones |
| Lenis | Desplazamiento suave |
| Lucide React | Iconografía |
| Storybook | Documentación interactiva de `components/ui/` y de los átomos y moléculas de `features/` |

## Arquitectura

El proyecto combina una organización por secciones con una jerarquía de componentes basada en Atomic Design. La lógica de animación y estado vive en hooks; los componentes solo presentan.

```
Página (pages/HomePage)
   │  compone las secciones
   ▼
Organismo (features/<sección>/organisms/)
   │  lee los datos de data/ y distribuye props
   ▼
Moléculas y átomos
   │  presentan lo que reciben por props
   ▼
Hooks (features/<sección>/hooks/ y hooks/shared/)
      estado, scroll, puntero y animaciones
```

La escena 3D se carga con `React.lazy`, de modo que Three.js genera su propio fragmento de JavaScript y el texto de la portada aparece sin esperarlo.

Todas las animaciones respetan `prefers-reduced-motion`: si el sistema pide menos movimiento, se desactivan el desplazamiento suave y las transiciones.

## Estructura

```
src/
├── components/ui/       Componentes genéricos transversales
├── features/            Secciones de la página
│   ├── hero/
│   ├── scene/           Grafo 3D y esfera central
│   ├── about/
│   ├── stack/
│   ├── projects/
│   ├── timeline/
│   ├── certifications/
│   └── contact/
│       ├── atoms/
│       ├── molecules/
│       ├── organisms/
│       ├── hooks/
│       └── constants/
├── hooks/shared/        Hooks reutilizables de scroll, puntero y medios
├── layouts/             Barra de navegación, pie y efectos globales
├── pages/               Página principal
├── data/                Contenido: perfil, proyectos, stack, trayectoria y certificaciones
├── utils/               Funciones auxiliares puras (grafo y scroll)
└── constants/           Paleta de colores, curvas de animación y navegación
```

## Contenido

Todo el texto del sitio vive en `src/data/`. Para agregar un proyecto, una certificación o una entrada en la trayectoria solo se edita el archivo correspondiente, sin tocar los componentes.

## Despliegue

Cada `push` a `main` publica el sitio en GitHub Pages mediante `.github/workflows/deploy.yml`. Requiere activar una sola vez **Settings → Pages → Source: GitHub Actions**.

El flujo calcula la ruta base a partir del nombre del repositorio: si se llama `mateomerino14.github.io` el sitio queda en la raíz; si no, en `/<nombre-del-repositorio>/`.

## Estándares

El código sigue las mismas convenciones de mis otros proyectos: código en inglés y textos en español, objeto `styles` al inicio de cada componente, colores centralizados en `constants/`, sin valores mágicos y commits con Conventional Commits.

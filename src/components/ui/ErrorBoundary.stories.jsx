import ErrorBoundary from './ErrorBoundary';

function BrokenChild() {
  throw new Error('Fallo simulado');
}

export default {
  title: 'UI/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    docs: {
      description: {
        component: 'Aísla un bloque que puede fallar, como la escena 3D, para que el error no deje en blanco el resto de la página. Muestra `fallback` en su lugar.',
      },
    },
  },
};

export const WithoutError = {
  args: {
    fallback: <p className="text-fog">No se pudo mostrar este bloque</p>,
    children: <p className="text-paper">Contenido que funciona</p>,
  },
};

export const WithError = {
  args: {
    fallback: <p className="text-fog">No se pudo mostrar este bloque</p>,
    children: <BrokenChild />,
  },
};

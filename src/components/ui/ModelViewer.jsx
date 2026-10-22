import {lazy, Suspense} from 'react';
import {Box, LoaderCircle} from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import {isWebGLAvailable} from '../../utils/webgl';

const ModelCanvas = lazy(() => import('./ModelCanvas'));

const styles = {
  figure: 'flex flex-col gap-2',
  frame: 'relative aspect-[16/10] w-full cursor-grab touch-none overflow-hidden rounded-xl border border-line bg-ink-raised active:cursor-grabbing',
  state: 'absolute inset-0 flex flex-col items-center justify-center gap-2 text-center font-mono text-xs text-fog',
  spinner: 'animate-spin text-accent',
  note: 'font-mono text-[10px] text-fog/70',
};

const stateIconSize = 22;
const canRenderModel = isWebGLAvailable();

function ViewerState({icon: Icon, text, iconClassName = ''}) {
  return (
    <div className={styles.state}>
      <Icon size={stateIconSize} className={iconClassName} aria-hidden="true" />
      {text}
    </div>
  );
}

const unavailableState = <ViewerState icon={Box} text="Este navegador no puede mostrar el modelo 3D." />;
const loadingState = <ViewerState icon={LoaderCircle} text="Cargando el modelo 3D…" iconClassName={styles.spinner} />;

function ModelViewer({src, title, rotation, camera, lights = [], controls, note}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame} role="img" aria-label={`Modelo 3D interactivo: ${title}`}>
        {!canRenderModel && unavailableState}
        {canRenderModel && (
          <ErrorBoundary fallback={unavailableState}>
            <Suspense fallback={loadingState}>
              <ModelCanvas src={src} rotation={rotation} camera={camera} lights={lights} controls={controls} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
      {note && <p className={styles.note}>{note}</p>}
    </figure>
  );
}

export default ModelViewer;

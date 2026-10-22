import {Suspense, useMemo} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF, useProgress} from '@react-three/drei';
import {publicAsset} from '../../utils/assets';

const pixelRatioRange = [1, 2];
const fieldOfView = 50;
const nearPlane = 1;
const farPlane = 5000;
const ambientIntensity = 0.5;
const hemisphereIntensity = 0.9;
const hemisphereSky = '#fff3dc';
const hemisphereGround = '#3a2a1c';
const useDraco = false;
const useMeshopt = true;
const dampingFactor = 0.08;

const styles = {
  loading: 'pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-xs text-fog',
};

const withoutLights = (scene) => {
  const copy = scene.clone();
  const lights = [];
  copy.traverse((object) => {
    if (object.isLight) {
      lights.push(object);
    }
  });
  lights.forEach((light) => light.removeFromParent());
  return copy;
};

function Model({src, rotation}) {
  const {scene} = useGLTF(publicAsset(src), useDraco, useMeshopt);
  const model = useMemo(() => withoutLights(scene), [scene]);
  return <primitive object={model} rotation={rotation} />;
}

function LoadingOverlay() {
  const {active, progress} = useProgress();
  if (!active) {
    return null;
  }
  return <div className={styles.loading}>Cargando el modelo 3D… {Math.round(progress)} %</div>;
}

function ModelCanvas({src, rotation, camera, lights, controls}) {
  return (
    <>
      <Canvas dpr={pixelRatioRange} camera={{position: camera.position, fov: fieldOfView, near: nearPlane, far: farPlane}}>
        <ambientLight intensity={ambientIntensity} />
        <hemisphereLight args={[hemisphereSky, hemisphereGround, hemisphereIntensity]} />
        {lights.map((light) => (
          <pointLight key={light.position.join()} position={light.position} intensity={light.intensity} color={light.color} decay={light.decay} distance={light.distance} />
        ))}
        <Suspense fallback={null}>
          <Model src={src} rotation={rotation} />
        </Suspense>
        <OrbitControls target={camera.target} enableDamping dampingFactor={dampingFactor} enablePan={false} {...controls} />
      </Canvas>
      <LoadingOverlay />
    </>
  );
}

export default ModelCanvas;

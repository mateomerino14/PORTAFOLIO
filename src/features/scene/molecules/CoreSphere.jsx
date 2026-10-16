import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {Float, MeshDistortMaterial} from '@react-three/drei';
import {COLORS} from '../../../constants';

const spinSpeed = 0.3;
const coreScale = 0.7;
const shellScale = 1.05;
const coreDetail = 24;
const shellDetail = 1;
const shellOpacity = 0.12;
const floatConfig = {speed: 1.6, rotationIntensity: 0.6, floatIntensity: 0.8};
const stillFloat = {speed: 0, rotationIntensity: 0, floatIntensity: 0};
const coreMaterial = {emissiveIntensity: 0.25, roughness: 0.25, metalness: 0.35, distort: 0.38, speed: 1.8};
const stillMaterial = {...coreMaterial, speed: 0};

function CoreSphere({position, isReducedMotion}) {
  const coreRef = useRef(null);

  useFrame((_, delta) => {
    if (coreRef.current && !isReducedMotion) {
      coreRef.current.rotation.y -= delta * spinSpeed;
    }
  });

  let float = floatConfig;
  let material = coreMaterial;
  if (isReducedMotion) {
    float = stillFloat;
    material = stillMaterial;
  }

  return (
    <Float {...float} position={position}>
      <mesh ref={coreRef} scale={coreScale}>
        <icosahedronGeometry args={[1, coreDetail]} />
        <MeshDistortMaterial color={COLORS.coreSphere} emissive={COLORS.coreGlow} {...material} />
      </mesh>
      <mesh scale={shellScale}>
        <icosahedronGeometry args={[1, shellDetail]} />
        <meshBasicMaterial color={COLORS.accent} wireframe transparent opacity={shellOpacity} />
      </mesh>
    </Float>
  );
}

export default CoreSphere;

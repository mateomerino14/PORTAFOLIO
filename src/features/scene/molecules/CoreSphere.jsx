import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {Float, MeshDistortMaterial} from '@react-three/drei';
import {COLORS} from '../../../constants';

const spinSpeed = 0.3;
const coreScale = 0.8;
const shellScale = 1.15;
const coreDetail = 24;
const shellDetail = 1;
const shellOpacity = 0.12;
const floatConfig = {speed: 1.6, rotationIntensity: 0.6, floatIntensity: 0.8};
const coreMaterial = {emissiveIntensity: 0.25, roughness: 0.25, metalness: 0.35, distort: 0.38, speed: 1.8};

function CoreSphere() {
  const coreRef = useRef(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * spinSpeed;
    }
  });

  return (
    <Float {...floatConfig}>
      <mesh ref={coreRef} scale={coreScale}>
        <icosahedronGeometry args={[1, coreDetail]} />
        <MeshDistortMaterial color={COLORS.coreSphere} emissive={COLORS.coreGlow} {...coreMaterial} />
      </mesh>
      <mesh scale={shellScale}>
        <icosahedronGeometry args={[1, shellDetail]} />
        <meshBasicMaterial color={COLORS.accent} wireframe transparent opacity={shellOpacity} />
      </mesh>
    </Float>
  );
}

export default CoreSphere;

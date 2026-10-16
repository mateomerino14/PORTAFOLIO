import {useRef} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {NODE_FADE} from '../constants/sceneConfig';
import {clamp} from '../../../utils/journey';

function useNodeFade(positions) {
  const {camera} = useThree();
  const nodeRefs = useRef([]);

  useFrame(() => {
    nodeRefs.current.forEach((node, index) => {
      if (!node) {
        return;
      }
      const distance = camera.position.distanceTo(positions[index]);
      node.scale.setScalar(clamp((distance - NODE_FADE.near) / (NODE_FADE.far - NODE_FADE.near), 0, 1));
    });
  });

  const registerNode = (index) => (element) => {
    nodeRefs.current[index] = element;
  };

  return registerNode;
}

export default useNodeFade;

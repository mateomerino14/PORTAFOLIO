import {useMemo} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {Vector3} from 'three';
import {labelRegistry} from '../store/labelRegistry';
import {LABEL_OFFSET_PX, NODE_FADE} from '../constants/sceneConfig';

const behindCamera = 1;

function LabelProjector({anchors}) {
  const {camera, size} = useThree();
  const projected = useMemo(() => new Vector3(), []);

  useFrame(() => {
    labelRegistry.forEach((element, id) => {
      const anchor = anchors.get(id);
      if (!anchor) {
        return;
      }
      projected.copy(anchor).project(camera);
      const isHidden = projected.z > behindCamera || camera.position.distanceTo(anchor) < NODE_FADE.far;
      if (isHidden) {
        element.style.visibility = 'hidden';
        return;
      }
      const x = (projected.x + 1) / 2 * size.width;
      const y = (1 - projected.y) / 2 * size.height + LABEL_OFFSET_PX;
      element.style.visibility = 'visible';
      element.style.transform = `translate(-50%, 0) translate(${x}px, ${y}px)`;
    });
  });

  return null;
}

export default LabelProjector;

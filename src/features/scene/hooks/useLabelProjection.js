import {useMemo} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {Vector3} from 'three';
import {labelRegistry} from '../store/labelRegistry';
import {journeyStore} from '../../journey/store/journeyStore';
import {JOURNEY_STOPS} from '../../journey/constants/journeyStops';
import {stopLabelId} from '../constants/labelIds';
import {toScreenPoint} from '../../../utils/journey';
import {LABEL_COLLISION_PX, LABEL_OFFSET_PX, NODE_FADE} from '../constants/sceneConfig';

const behindCamera = 1;

const overlaps = (first, second) => Math.abs(first.x - second.x) < LABEL_COLLISION_PX.x && Math.abs(first.y - second.y) < LABEL_COLLISION_PX.y;

function useLabelProjection(anchors) {
  const {camera, size} = useThree();
  const projected = useMemo(() => new Vector3(), []);

  useFrame(() => {
    const screen = new Map();
    labelRegistry.forEach((_, id) => {
      const anchor = anchors.get(id);
      if (!anchor) {
        return;
      }
      projected.copy(anchor).project(camera);
      const isHidden = projected.z > behindCamera || camera.position.distanceTo(anchor) < NODE_FADE.far;
      if (isHidden) {
        return;
      }
      const point = toScreenPoint(projected, size.width, size.height);
      screen.set(id, {x: point.x, y: point.y + LABEL_OFFSET_PX});
    });
    const activeId = stopLabelId(JOURNEY_STOPS[journeyStore.getActiveIndex()].id);
    const activePoint = screen.get(activeId);
    labelRegistry.forEach((element, id) => {
      const point = screen.get(id);
      const isCovered = activePoint && id !== activeId && point && overlaps(point, activePoint);
      if (!point || isCovered) {
        element.style.visibility = 'hidden';
        return;
      }
      element.style.visibility = 'visible';
      element.style.transform = `translate(-50%, 0) translate(${point.x}px, ${point.y}px)`;
    });
  });
}

export default useLabelProjection;

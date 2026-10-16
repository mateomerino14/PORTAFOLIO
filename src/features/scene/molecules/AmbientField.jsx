import {useMemo} from 'react';
import {BufferAttribute, BufferGeometry} from 'three';
import {COLORS} from '../../../constants';
import {AMBIENT_FIELD} from '../constants/sceneConfig';
import {scatterPoints} from '../../../utils/journeyGraph';

function AmbientField() {
  const geometry = useMemo(() => {
    const points = new BufferGeometry();
    points.setAttribute('position', new BufferAttribute(scatterPoints(AMBIENT_FIELD.count, AMBIENT_FIELD.bounds, AMBIENT_FIELD.seed), 3));
    return points;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial color={COLORS.fog} size={AMBIENT_FIELD.size} transparent opacity={AMBIENT_FIELD.opacity} sizeAttenuation />
    </points>
  );
}

export default AmbientField;

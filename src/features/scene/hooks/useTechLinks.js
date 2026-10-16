import {useMemo, useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {BufferAttribute, BufferGeometry} from 'three';
import {journeyStore} from '../../journey/store/journeyStore';
import {JOURNEY_STOPS} from '../../journey/constants/journeyStops';
import {TECH_NODES} from '../../journey/constants/techLinks';
import {SECTION_IDS} from '../../../constants/navigation';
import {TECH_STYLE} from '../constants/sceneConfig';
import {VERTEX_SIZE, buildLinkSegments} from '../../../utils/journeyGraph';

const nearbyGroups = new Set([SECTION_IDS.stack, SECTION_IDS.projects]);

const linkOpacity = (tech, hoveredTech, isNearby) => {
  if (hoveredTech === tech) {
    return TECH_STYLE.hoveredOpacity;
  }
  if (hoveredTech) {
    return TECH_STYLE.dimmedOpacity;
  }
  if (isNearby) {
    return TECH_STYLE.nearbyOpacity;
  }
  return TECH_STYLE.idleOpacity;
};

function useTechLinks(positions, techPositions) {
  const linkRefs = useRef([]);
  const nodeRefs = useRef([]);

  const techNodes = useMemo(() => {
    return TECH_NODES.map((node, index) => {
      const geometry = new BufferGeometry();
      const targets = node.projectStopIndices.map((stopIndex) => positions[stopIndex]);
      geometry.setAttribute('position', new BufferAttribute(buildLinkSegments(techPositions[index], targets), VERTEX_SIZE));
      return {...node, position: techPositions[index], geometry};
    });
  }, [positions, techPositions]);

  useFrame(() => {
    const hoveredTech = journeyStore.getHoveredTech();
    const isNearby = nearbyGroups.has(JOURNEY_STOPS[journeyStore.getActiveIndex()].groupId);
    techNodes.forEach((node, index) => {
      const link = linkRefs.current[index];
      if (link) {
        link.material.opacity = linkOpacity(node.tech, hoveredTech, isNearby);
      }
      const sphere = nodeRefs.current[index];
      if (sphere) {
        let scale = 1;
        if (hoveredTech === node.tech) {
          scale = TECH_STYLE.hoveredScale;
        }
        sphere.scale.setScalar(scale);
      }
    });
  });

  const registerLink = (index) => (element) => {
    linkRefs.current[index] = element;
  };

  const registerNode = (index) => (element) => {
    nodeRefs.current[index] = element;
  };

  return {techNodes, registerLink, registerNode};
}

export default useTechLinks;

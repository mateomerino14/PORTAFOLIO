import {JOURNEY_STOPS} from './journeyStops';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROJECTS} from '../../../data/projects';
import {STACK_GROUPS} from '../../../data/stack';

const stackTechnologies = new Set(STACK_GROUPS.flatMap((group) => group.items));

const projectStops = JOURNEY_STOPS
  .map((stop, stopIndex) => ({stop, stopIndex}))
  .filter(({stop}) => stop.groupId === SECTION_IDS.projects && stop.itemIndex >= 0);

export const TECH_NODES = [...new Set(PROJECTS.flatMap((project) => project.tags))]
  .filter((tech) => stackTechnologies.has(tech))
  .map((tech) => ({
    tech,
    projectStopIndices: projectStops
      .filter(({stop}) => PROJECTS[stop.itemIndex].tags.includes(tech))
      .map(({stopIndex}) => stopIndex),
  }));

export const LINKED_TECHNOLOGIES = new Set(TECH_NODES.map((node) => node.tech));

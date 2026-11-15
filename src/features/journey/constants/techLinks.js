import {JOURNEY_STOPS} from './journeyStops';
import {SECTION_IDS} from '../../../constants/navigation';
import {FEATURED_PROJECTS, OTHER_PROJECTS, PROJECTS} from '../../../data/projects';
import {STACK_GROUPS} from '../../../data/stack';
import {STOP_LEVELS} from '../../../utils/journey';

const stackTechnologies = new Set(STACK_GROUPS.flatMap((group) => group.items));

const projectsOfStop = (stop) => {
  if (stop.isCollection) {
    return OTHER_PROJECTS;
  }
  return [FEATURED_PROJECTS[stop.itemIndex]];
};

const projectStops = JOURNEY_STOPS
  .map((stop, stopIndex) => ({stop, stopIndex}))
  .filter(({stop}) => stop.groupId === SECTION_IDS.projects && stop.level === STOP_LEVELS.branch);

const usesTech = (stop, tech) => projectsOfStop(stop).some((project) => project.tags.includes(tech));

export const TECH_NODES = [...new Set(PROJECTS.flatMap((project) => project.tags))]
  .filter((tech) => stackTechnologies.has(tech))
  .map((tech) => ({
    tech,
    projectStopIndices: projectStops
      .filter(({stop}) => usesTech(stop, tech))
      .map(({stopIndex}) => stopIndex),
  }));

export const LINKED_TECHNOLOGIES = new Set(TECH_NODES.map((node) => node.tech));

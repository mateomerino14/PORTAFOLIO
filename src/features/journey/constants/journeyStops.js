import {NAV_ITEMS, SECTION_IDS} from '../../../constants/navigation';
import {PROJECTS} from '../../../data/projects';
import {TIMELINE} from '../../../data/timeline';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';
import {createBranchStops, createMainStop} from '../../../utils/journey';

const heroLabel = 'Inicio';

const labelOf = (sectionId) => NAV_ITEMS.find((item) => item.id === sectionId).label;

const mainStop = (sectionId) => createMainStop(sectionId, labelOf(sectionId));

export const JOURNEY_STOPS = [
  createMainStop(SECTION_IDS.hero, heroLabel),
  mainStop(SECTION_IDS.about),
  mainStop(SECTION_IDS.stack),
  mainStop(SECTION_IDS.projects),
  ...createBranchStops(SECTION_IDS.projects, 'proyecto', PROJECTS, (project) => project.title),
  mainStop(SECTION_IDS.timeline),
  ...createBranchStops(SECTION_IDS.timeline, 'etapa', TIMELINE, (entry) => entry.title),
  mainStop(SECTION_IDS.certifications),
  ...createBranchStops(SECTION_IDS.certifications, 'certificados', CERTIFICATION_GROUPS, (group) => group.group),
  mainStop(SECTION_IDS.contact),
];

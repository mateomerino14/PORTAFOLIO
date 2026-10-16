import TechIcon from '../../../components/ui/TechIcon';
import {labelRegistry} from '../store/labelRegistry';
import {stopLabelId, techLabelId} from '../constants/labelIds';
import {JOURNEY_STOPS} from '../../journey/constants/journeyStops';
import {TECH_NODES} from '../../journey/constants/techLinks';
import {SECTION_IDS} from '../../../constants/navigation';
import {STOP_LEVELS} from '../../../utils/journey';
import {LABEL_RANGE} from '../constants/sceneConfig';

const styles = {
  layer: 'absolute inset-0 overflow-hidden',
  label: 'absolute top-0 left-0 whitespace-nowrap font-mono text-[11px] text-fog transition-opacity duration-500 will-change-transform',
  active: 'absolute top-0 left-0 whitespace-nowrap font-mono text-[11px] text-paper transition-opacity duration-500 will-change-transform',
  tech: 'absolute top-0 left-0 inline-flex items-center gap-1 whitespace-nowrap font-mono text-[10px] text-fog transition-opacity duration-500 will-change-transform',
  hoveredTech: 'absolute top-0 left-0 inline-flex items-center gap-1 whitespace-nowrap font-mono text-[10px] text-accent transition-opacity duration-500 will-change-transform',
  shown: 'opacity-100',
  hidden: 'opacity-0',
};

const heroStopIndex = 0;
const techIconSize = 11;

const visibility = (isVisible) => {
  if (isVisible) {
    return styles.shown;
  }
  return styles.hidden;
};

const isStopLabelVisible = (stop, index, activeIndex) => {
  if (activeIndex === heroStopIndex) {
    return stop.level === STOP_LEVELS.main;
  }
  return Math.abs(index - activeIndex) <= LABEL_RANGE;
};

function SceneLabels({activeIndex, hoveredTech}) {
  const isAtStack = JOURNEY_STOPS[activeIndex].id === SECTION_IDS.stack;

  return (
    <div className={styles.layer}>
      {JOURNEY_STOPS.map((stop, index) => {
        if (index === heroStopIndex) {
          return null;
        }
        let base = styles.label;
        if (index === activeIndex) {
          base = styles.active;
        }
        return (
          <span key={stop.id} ref={labelRegistry.register(stopLabelId(stop.id))} className={`${base} ${visibility(isStopLabelVisible(stop, index, activeIndex))}`}>
            {stop.label}
          </span>
        );
      })}
      {TECH_NODES.map((node) => {
        let base = styles.tech;
        if (node.tech === hoveredTech) {
          base = styles.hoveredTech;
        }
        return (
          <span key={node.tech} ref={labelRegistry.register(techLabelId(node.tech))} className={`${base} ${visibility(isAtStack)}`}>
            <TechIcon name={node.tech} size={techIconSize} />
            {node.tech}
          </span>
        );
      })}
    </div>
  );
}

export default SceneLabels;

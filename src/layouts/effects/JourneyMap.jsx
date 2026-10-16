import {useActiveStopIndex} from '../../features/journey/hooks/useJourneyState';
import {JOURNEY_STOPS} from '../../features/journey/constants/journeyStops';
import {STOP_LEVELS} from '../../utils/journey';
import {scrollToSection} from '../../utils/scroll';

const styles = {
  nav: 'fixed top-1/2 right-3 z-40 -translate-y-1/2 md:right-6',
  list: 'relative flex flex-col items-center',
  rail: 'absolute top-[7px] bottom-[7px] left-1/2 w-px -translate-x-1/2 bg-line',
  fill: 'absolute top-[7px] left-1/2 w-px -translate-x-1/2 bg-accent transition-[height] duration-500',
  slot: 'group relative flex h-3.5 w-3.5 items-center justify-center md:h-4 md:w-4',
  main: 'relative h-2.5 w-2.5 cursor-pointer rounded-full border border-fog bg-ink transition-all duration-300 md:h-3 md:w-3',
  mainVisited: 'relative h-2.5 w-2.5 cursor-pointer rounded-full border border-accent bg-accent transition-all duration-300 md:h-3 md:w-3',
  mainActive: 'relative h-2.5 w-2.5 scale-125 cursor-pointer rounded-full border border-accent bg-accent shadow-glow transition-all duration-300 md:h-3 md:w-3',
  branch: 'relative h-1 w-1 rounded-full bg-fog/50 transition-colors duration-300',
  branchVisited: 'relative h-1 w-1 rounded-full bg-accent transition-colors duration-300',
  branchActive: 'relative h-1.5 w-1.5 rounded-full bg-signal transition-colors duration-300',
  label: 'pointer-events-none absolute right-6 hidden whitespace-nowrap rounded-md border border-line bg-ink/90 px-2 py-1 font-mono text-[11px] text-paper opacity-0 transition-opacity group-hover:opacity-100 md:block',
};

const lastIndex = JOURNEY_STOPS.length - 1;
const railInsetPx = 14;

const mainClass = (isActive, isVisited) => {
  if (isActive) {
    return styles.mainActive;
  }
  if (isVisited) {
    return styles.mainVisited;
  }
  return styles.main;
};

const branchClass = (isActive, isVisited) => {
  if (isActive) {
    return styles.branchActive;
  }
  if (isVisited) {
    return styles.branchVisited;
  }
  return styles.branch;
};

function JourneyMap() {
  const activeIndex = useActiveStopIndex();
  const activeGroupId = JOURNEY_STOPS[activeIndex].groupId;
  const fillRatio = activeIndex / lastIndex;

  return (
    <nav className={styles.nav} aria-label="Mapa del recorrido">
      <ol className={styles.list}>
        <span className={styles.rail} />
        <span className={styles.fill} style={{height: `calc((100% - ${railInsetPx}px) * ${fillRatio})`}} />
        {JOURNEY_STOPS.map((stop, index) => {
          const isVisited = index < activeIndex;
          if (stop.level === STOP_LEVELS.main) {
            const isActive = stop.groupId === activeGroupId;
            return (
              <li key={stop.id} className={styles.slot}>
                <button type="button" className={mainClass(isActive, isVisited)} onClick={() => scrollToSection(stop.id)} aria-label={stop.label} aria-current={isActive} />
                <span className={styles.label}>{stop.label}</span>
              </li>
            );
          }
          return (
            <li key={stop.id} className={styles.slot}>
              <span className={branchClass(index === activeIndex, isVisited)} />
              <span className={styles.label}>{stop.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default JourneyMap;

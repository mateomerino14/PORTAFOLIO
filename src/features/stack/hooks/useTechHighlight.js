import {journeyStore} from '../../journey/store/journeyStore';
import {useHoveredTech} from '../../journey/hooks/useJourneyState';
import {LINKED_TECHNOLOGIES} from '../../journey/constants/techLinks';

const noTech = '';

function useTechHighlight() {
  const hoveredTech = useHoveredTech();
  const highlightTech = (tech) => journeyStore.setHoveredTech(tech);
  const clearTech = () => journeyStore.setHoveredTech(noTech);
  return {linkedTechnologies: LINKED_TECHNOLOGIES, hoveredTech, highlightTech, clearTech};
}

export default useTechHighlight;

import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import AnimatedName from '../molecules/AnimatedName';
import RotatingRole from '../molecules/RotatingRole';
import Button from '../../../components/ui/Button';
import Magnetic from '../../../components/ui/Magnetic';
import StopPanel from '../../journey/molecules/StopPanel';
import {scrollToSection} from '../../../utils/scroll';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROFILE} from '../../../data/profile';

const styles = {
  role: 'mt-8 font-display text-2xl font-semibold md:text-3xl',
  headline: 'mt-4 max-w-xl text-base leading-relaxed text-fog md:text-lg',
  actions: 'mt-10 flex flex-wrap items-center gap-4',
};

const contentDelays = {role: 1.1, headline: 1.25, actions: 1.4};

const fadeUp = (delay) => ({initial: {opacity: 0, y: 20}, animate: {opacity: 1, y: 0}, transition: {delay, duration: 0.8}});

function HeroSection() {
  return (
    <StopPanel stopId={SECTION_IDS.hero} variant="bare">
      <AnimatedName firstName={PROFILE.firstName} lastName={PROFILE.lastName} />
      <motion.p className={styles.role} {...fadeUp(contentDelays.role)}>
        <RotatingRole roles={PROFILE.roles} />
      </motion.p>
      <motion.p className={styles.headline} {...fadeUp(contentDelays.headline)}>{PROFILE.headline}</motion.p>
      <motion.div className={styles.actions} {...fadeUp(contentDelays.actions)}>
        <Magnetic>
          <Button text="Ver proyectos" icon={ArrowRight} onClick={() => scrollToSection(SECTION_IDS.projects)} />
        </Magnetic>
        <Magnetic>
          <Button text="Hablemos" variant="secondary" onClick={() => scrollToSection(SECTION_IDS.contact)} />
        </Magnetic>
      </motion.div>
    </StopPanel>
  );
}

export default HeroSection;

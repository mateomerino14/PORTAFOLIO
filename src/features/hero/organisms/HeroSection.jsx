import {lazy, Suspense} from 'react';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import AnimatedName from '../molecules/AnimatedName';
import RotatingRole from '../molecules/RotatingRole';
import Button from '../../../components/ui/Button';
import Magnetic from '../../../components/ui/Magnetic';
import useHeroParallax from '../hooks/useHeroParallax';
import {scrollToSection} from '../../../utils/scroll';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROFILE} from '../../../data/profile';

const heroStopIndex = 0;

const GraphScene = lazy(() => import('../../scene/organisms/GraphScene'));

const styles = {
  section: 'relative flex min-h-[100svh] items-center overflow-hidden bg-grid',
  ambientSignal: 'pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-signal/20 blur-[120px]',
  ambientAccent: 'pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]',
  scene: 'absolute inset-0 top-[-45%] bottom-[30%] md:top-0 md:bottom-0 md:left-[42%]',
  sceneFrame: 'h-full w-full',
  fade: 'pointer-events-none absolute inset-0 bg-gradient-to-t from-ink from-40% via-ink/80 to-transparent md:bg-gradient-to-r md:via-ink/40',
  content: 'relative z-10 mx-auto w-full max-w-6xl px-6 pt-24',
  role: 'mt-8 font-display text-2xl font-semibold md:text-3xl',
  headline: 'mt-4 max-w-xl text-base leading-relaxed text-fog md:text-lg',
  actions: 'mt-10 flex flex-wrap items-center gap-4',
};

const sceneEntrance = {
  initial: {opacity: 0, scale: 0.9},
  animate: {opacity: 1, scale: 1},
  transition: {duration: 1.6, delay: 0.2},
};

const contentDelays = {role: 1.1, headline: 1.25, actions: 1.4};

const fadeUp = (delay) => ({initial: {opacity: 0, y: 20}, animate: {opacity: 1, y: 0}, transition: {delay, duration: 0.8}});

function HeroSection() {
  const {sectionRef, sceneY, sceneOpacity, contentY} = useHeroParallax();
  return (
    <section id={SECTION_IDS.hero} ref={sectionRef} data-stop={heroStopIndex} className={styles.section}>
      <div className={styles.ambientSignal} />
      <div className={styles.ambientAccent} />
      <motion.div className={styles.scene} style={{y: sceneY, opacity: sceneOpacity}}>
        <Suspense fallback={null}>
          <motion.div className={styles.sceneFrame} {...sceneEntrance}>
            <GraphScene />
          </motion.div>
        </Suspense>
      </motion.div>
      <div className={styles.fade} />
      <motion.div className={styles.content} style={{y: contentY}}>
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
      </motion.div>
    </section>
  );
}

export default HeroSection;

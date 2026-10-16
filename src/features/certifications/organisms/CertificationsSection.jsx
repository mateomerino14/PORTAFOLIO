import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Section from '../../../components/ui/Section';
import SectionTitle from '../../../components/ui/SectionTitle';
import Reveal from '../../../components/ui/Reveal';
import CertificationTabs from '../molecules/CertificationTabs';
import CertificationCard from '../molecules/CertificationCard';
import {SECTION_IDS} from '../../../constants/navigation';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const styles = {
  grid: 'grid gap-3 md:grid-cols-2',
};

const gridVariants = {visible: {transition: {staggerChildren: 0.05}}};
const gridExit = {opacity: 0, y: -10, transition: {duration: 0.2}};

function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = CERTIFICATION_GROUPS[activeIndex];
  return (
    <Section id={SECTION_IDS.certifications}>
      <SectionTitle index="05" kicker="Certificaciones" title="Aprendizaje continuo." />
      <Reveal>
        <CertificationTabs groups={CERTIFICATION_GROUPS} activeIndex={activeIndex} onSelect={setActiveIndex} />
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div key={activeGroup.group} className={styles.grid} variants={gridVariants} initial="hidden" animate="visible" exit={gridExit}>
          {activeGroup.items.map((certification) => <CertificationCard key={certification.name} certification={certification} />)}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

export default CertificationsSection;

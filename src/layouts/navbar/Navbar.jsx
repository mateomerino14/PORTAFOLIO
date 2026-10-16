import {useState} from 'react';
import {motion} from 'framer-motion';
import {Download} from 'lucide-react';
import NavLinks from './NavLinks';
import MenuToggle from './MenuToggle';
import MobileMenu from './MobileMenu';
import useActiveSection from '../../hooks/shared/useActiveSection';
import useScrolledPast from '../../hooks/shared/useScrolledPast';
import {scrollToSection, scrollToTop} from '../../utils/scroll';
import {EASE_OUT} from '../../constants';
import {NAV_ITEMS} from '../../constants/navigation';
import {PROFILE} from '../../data/profile';

const styles = {
  header: 'fixed inset-x-0 top-0 z-50 px-4 pt-4',
  nav: 'mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 md:px-6',
  navSolid: 'border-line bg-ink/70 backdrop-blur-xl',
  navClear: 'border-transparent bg-transparent',
  brand: 'flex cursor-pointer items-center gap-2 font-display text-lg font-extrabold',
  logo: 'grid h-8 w-8 place-items-center rounded-lg bg-lime font-mono text-sm text-ink',
  brandName: 'hidden sm:inline',
  actions: 'flex items-center gap-2',
  cvLink: 'hidden items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-lime hover:text-lime sm:flex',
};

const scrollThresholdPx = 40;
const downloadIconSize = 16;
const headerMotion = {
  initial: {y: -80, opacity: 0},
  animate: {y: 0, opacity: 1},
  transition: {delay: 0.3, duration: 0.8, ease: EASE_OUT},
};
const sectionIds = NAV_ITEMS.map((item) => item.id);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const isScrolled = useScrolledPast(scrollThresholdPx);

  const handleNavigate = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <>
      <motion.header className={styles.header} {...headerMotion}>
        <nav className={`${styles.nav} ${isScrolled ? styles.navSolid : styles.navClear}`}>
          <button type="button" className={styles.brand} onClick={scrollToTop}>
            <span className={styles.logo}>{PROFILE.initials}</span>
            <span className={styles.brandName}>{PROFILE.shortName}</span>
          </button>
          <NavLinks items={NAV_ITEMS} activeId={activeId} onNavigate={handleNavigate} />
          <div className={styles.actions}>
            <a href={PROFILE.cvUrl} download={PROFILE.cvFileName} target="_blank" rel="noreferrer" className={styles.cvLink}>
              <Download size={downloadIconSize} />
              Descargar CV
            </a>
            <MenuToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((previous) => !previous)} />
          </div>
        </nav>
      </motion.header>
      <MobileMenu isOpen={isMenuOpen} items={NAV_ITEMS} onNavigate={handleNavigate} />
    </>
  );
}

export default Navbar;

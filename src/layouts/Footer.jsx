import {PROFILE} from '../data/profile';

const styles = {
  footer: 'relative z-10 border-t border-line bg-ink py-5 md:py-8',
  content: 'mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-6 text-center font-mono text-[11px] text-fog md:flex-row md:text-xs',
  stack: 'hidden md:inline',
};

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© {currentYear} {PROFILE.name}</span>
        <span><span className={styles.stack}>Hecho con React, Three.js y Framer Motion · </span>{PROFILE.location}</span>
      </div>
    </footer>
  );
}

export default Footer;

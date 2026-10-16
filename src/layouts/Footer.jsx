import {PROFILE} from '../data/profile';

const styles = {
  footer: 'border-t border-line py-8',
  content: 'mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-fog md:flex-row',
};

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© {currentYear} {PROFILE.name}</span>
        <span>Hecho con React, Three.js y Framer Motion · {PROFILE.location}</span>
      </div>
    </footer>
  );
}

export default Footer;

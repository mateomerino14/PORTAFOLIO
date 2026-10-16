import {ArrowUpRight} from 'lucide-react';

const styles = {
  link: 'group inline-flex items-center gap-1.5 transition-colors hover:text-accent',
  icon: 'transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
};

const iconSize = 16;

function ProjectLink({href, label}) {
  if (!href) {
    return null;
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
      {label}
      <ArrowUpRight size={iconSize} className={styles.icon} />
    </a>
  );
}

export default ProjectLink;

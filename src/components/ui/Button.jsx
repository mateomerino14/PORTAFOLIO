const styles = {
  primary: 'group flex cursor-pointer items-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-ink transition-shadow hover:shadow-glow',
  secondary: 'cursor-pointer rounded-full border border-line bg-ink-soft/60 px-7 py-4 font-semibold backdrop-blur transition-colors hover:border-paper',
  icon: 'transition-transform group-hover:translate-x-1',
};

const iconSize = 18;

function Button({text, icon: Icon, variant = 'primary', onClick}) {
  return (
    <button type="button" className={styles[variant]} onClick={onClick}>
      {text}
      {Icon && <Icon size={iconSize} className={styles.icon} />}
    </button>
  );
}

export default Button;

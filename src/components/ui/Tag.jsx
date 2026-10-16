const styles = {
  square: 'rounded-lg border border-line bg-ink px-3 py-1.5 font-mono text-xs text-fog transition-colors hover:border-violet hover:text-paper',
  pill: 'rounded-full bg-ink-raised px-3 py-1 font-mono text-xs text-fog',
};

function Tag({label, variant = 'square'}) {
  return <span className={styles[variant]}>{label}</span>;
}

export default Tag;

import TechIcon from '../../../components/ui/TechIcon';

const styles = {
  frame: 'overflow-hidden rounded-xl border border-line bg-ink',
  header: 'flex items-center justify-between gap-3 border-b border-line bg-ink-raised px-4 py-2',
  file: 'truncate font-mono text-xs text-fog',
  language: 'inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-fog',
  code: 'max-h-80 overflow-auto p-4 font-mono text-[12px] leading-relaxed text-paper/90',
  note: 'mt-2 font-mono text-[10px] text-fog/70',
};

function CodePreview({file, language, code}) {
  return (
    <div>
      <div className={styles.frame}>
        <div className={styles.header}>
          <span className={styles.file}>{file}</span>
          <span className={styles.language}><TechIcon name={language} />{language}</span>
        </div>
        <pre className={styles.code}><code>{code}</code></pre>
      </div>
      <p className={styles.note}>Fragmento del código del repositorio.</p>
    </div>
  );
}

export default CodePreview;

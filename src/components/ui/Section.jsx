const styles = {
  section: 'relative py-28 md:py-40',
  container: 'relative mx-auto max-w-6xl px-6',
};

function Section({id, children, className = '', containerClassName = '', after = null}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={`${styles.container} ${containerClassName}`}>{children}</div>
      {after}
    </section>
  );
}

export default Section;

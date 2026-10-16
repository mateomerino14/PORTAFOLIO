const styles = {
  list: 'font-mono text-xs leading-relaxed text-fog',
};

const separator = ' · ';

function TechList({items, className = ''}) {
  return <p className={`${styles.list} ${className}`}>{items.join(separator)}</p>;
}

export default TechList;

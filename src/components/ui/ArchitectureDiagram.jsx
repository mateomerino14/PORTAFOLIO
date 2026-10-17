import {ArrowDown, UserRound} from 'lucide-react';
import TechIcon from './TechIcon';

const styles = {
  wrapper: 'rounded-xl border border-line bg-ink-soft p-4',
  title: 'mb-3 font-mono text-[11px] tracking-widest text-fog uppercase',
  layer: 'rounded-lg border border-dashed border-line px-3 pt-2 pb-3',
  systemLayer: 'rounded-lg border border-dashed border-accent/50 bg-accent/5 px-3 pt-2 pb-3',
  layerLabel: 'mb-2 block font-mono text-[10px] tracking-wider text-fog uppercase',
  nodes: 'flex flex-wrap gap-2',
  node: 'flex min-w-0 flex-1 basis-32 items-center gap-2 rounded-lg border border-line bg-ink px-3 py-2',
  nodeIcon: 'grid h-7 w-7 shrink-0 place-items-center rounded-md bg-ink-raised text-fog',
  nodeText: 'min-w-0',
  nodeTitle: 'block truncate text-xs font-semibold text-paper',
  nodeDetail: 'block truncate text-[10px] text-fog',
  connector: 'flex justify-center py-1 text-accent',
};

const iconSize = 15;
const connectorSize = 16;
const systemLayerIndex = 1;

function NodeIcon({tech}) {
  if (tech) {
    return <TechIcon name={tech} size={iconSize} />;
  }
  return <UserRound size={iconSize} aria-hidden="true" />;
}

function ArchitectureDiagram({title, layers}) {
  return (
    <figure className={styles.wrapper}>
      <figcaption className={styles.title}>{title}</figcaption>
      {layers.map((layer, position) => (
        <div key={layer.label}>
          {position > 0 && <span className={styles.connector}><ArrowDown size={connectorSize} aria-hidden="true" /></span>}
          <div className={position === systemLayerIndex ? styles.systemLayer : styles.layer}>
            <span className={styles.layerLabel}>{layer.label}</span>
            <ul className={styles.nodes}>
              {layer.nodes.map((node) => (
                <li key={node.title} className={styles.node}>
                  <span className={styles.nodeIcon}><NodeIcon tech={node.tech} /></span>
                  <span className={styles.nodeText}>
                    <span className={styles.nodeTitle}>{node.title}</span>
                    <span className={styles.nodeDetail}>{node.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </figure>
  );
}

export default ArchitectureDiagram;

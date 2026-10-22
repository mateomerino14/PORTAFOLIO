import ImageGallery from '../../../components/ui/ImageGallery';
import ModelViewer from '../../../components/ui/ModelViewer';
import CodePreview from './CodePreview';
import useActiveTab from '../hooks/useActiveTab';
import {MEDIA_TYPES} from '../../../data/projects';

const styles = {
  tabs: 'mb-3 inline-flex gap-1 rounded-lg border border-line bg-ink-soft p-1',
  tab: 'cursor-pointer rounded-md px-3 py-1 font-mono text-xs text-fog transition-colors hover:text-paper',
  activeTab: 'cursor-pointer rounded-md bg-accent px-3 py-1 font-mono text-xs text-ink',
};

const tabClass = (isActive) => {
  if (isActive) {
    return styles.activeTab;
  }
  return styles.tab;
};

function MediaBlock({block, title}) {
  if (block.type === MEDIA_TYPES.code) {
    return <CodePreview file={block.file} language={block.language} code={block.code} />;
  }
  if (block.type === MEDIA_TYPES.model) {
    return <ModelViewer src={block.src} title={title} rotation={block.rotation} camera={block.camera} lights={block.lights} controls={block.controls} note={block.note} />;
  }
  return <ImageGallery images={block.images} note={block.note} title={title} />;
}

function ProjectMedia({blocks, title}) {
  const {activeTab, selectTab} = useActiveTab();
  return (
    <div>
      {blocks.length > 1 && (
        <div className={styles.tabs} role="tablist">
          {blocks.map((block, position) => (
            <button key={block.label} type="button" role="tab" aria-selected={position === activeTab} className={tabClass(position === activeTab)} onClick={() => selectTab(position)}>
              {block.label}
            </button>
          ))}
        </div>
      )}
      <MediaBlock block={blocks[activeTab]} title={title} />
    </div>
  );
}

export default ProjectMedia;

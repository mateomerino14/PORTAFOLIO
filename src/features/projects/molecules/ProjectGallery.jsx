import {createPortal} from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {Expand, X} from 'lucide-react';
import useGallery from '../hooks/useGallery';
import {publicAsset} from '../../../utils/assets';

const styles = {
  figure: 'flex flex-col gap-2',
  frame: 'group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-ink-raised',
  image: 'aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]',
  expandHint: 'absolute top-2 right-2 grid h-8 w-8 place-items-center rounded-lg bg-ink/80 text-paper opacity-0 transition-opacity group-hover:opacity-100',
  thumbs: 'flex gap-2',
  thumb: 'h-12 w-20 cursor-pointer overflow-hidden rounded-md border border-line opacity-60 transition-opacity hover:opacity-100',
  activeThumb: 'h-12 w-20 cursor-pointer overflow-hidden rounded-md border-2 border-accent',
  thumbImage: 'h-full w-full object-cover object-top',
  caption: 'text-xs text-fog',
  note: 'font-mono text-[10px] text-fog/70',
  overlay: 'fixed inset-0 z-[80] flex flex-col items-center justify-center gap-3 bg-ink/90 p-4 backdrop-blur-sm',
  overlayImage: 'max-h-[85vh] max-w-full rounded-xl border border-line object-contain',
  close: 'absolute top-4 right-4 grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-line bg-ink text-paper',
  overlayCaption: 'text-sm text-fog',
};

const expandIconSize = 16;
const closeIconSize = 20;
const overlayMotion = {initial: {opacity: 0}, animate: {opacity: 1}, exit: {opacity: 0}};

const thumbClass = (isActive) => {
  if (isActive) {
    return styles.activeThumb;
  }
  return styles.thumb;
};

function ProjectGallery({images, note, title}) {
  const {activeIndex, isExpanded, select, expand, collapse} = useGallery();
  const activeImage = images[activeIndex];
  return (
    <figure className={styles.figure}>
      <button type="button" className={styles.frame} onClick={expand} aria-label={`Ampliar captura: ${activeImage.caption}`}>
        <img src={publicAsset(activeImage.src)} alt={`${title}: ${activeImage.caption}`} loading="lazy" className={styles.image} />
        <span className={styles.expandHint}><Expand size={expandIconSize} /></span>
      </button>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((image, position) => (
            <button key={image.src} type="button" className={thumbClass(position === activeIndex)} onClick={() => select(position)} aria-label={image.caption}>
              <img src={publicAsset(image.src)} alt="" loading="lazy" className={styles.thumbImage} />
            </button>
          ))}
        </div>
      )}
      <figcaption className={styles.caption}>{activeImage.caption}</figcaption>
      <p className={styles.note}>{note}</p>
      {createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div className={styles.overlay} onClick={collapse} role="dialog" aria-modal="true" aria-label={activeImage.caption} {...overlayMotion}>
              <button type="button" className={styles.close} onClick={collapse} aria-label="Cerrar captura"><X size={closeIconSize} /></button>
              <img src={publicAsset(activeImage.src)} alt={`${title}: ${activeImage.caption}`} className={styles.overlayImage} />
              <p className={styles.overlayCaption}>{activeImage.caption}</p>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </figure>
  );
}

export default ProjectGallery;

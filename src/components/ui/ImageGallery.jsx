import {createPortal} from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {Expand, X} from 'lucide-react';
import useGallery from '../../hooks/shared/useGallery';
import {publicAsset} from '../../utils/assets';

const styles = {
  figure: 'flex flex-col gap-2',
  frameCover: 'group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-ink-raised',
  frameContain: 'group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-ink-raised',
  imageCover: 'absolute inset-0 h-full w-full object-cover object-top',
  imageContain: 'absolute inset-0 h-full w-full object-contain',
  expandHint: 'absolute top-2 right-2 grid h-8 w-8 place-items-center rounded-lg bg-ink/80 text-paper opacity-0 transition-opacity group-hover:opacity-100',
  thumbs: 'flex gap-2 overflow-x-auto pb-1',
  thumb: 'relative h-12 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border border-line opacity-60 transition-opacity hover:opacity-100',
  activeThumb: 'relative h-12 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-accent',
  progress: 'absolute bottom-0 left-0 h-0.5 bg-accent',
  thumbImageCover: 'h-full w-full object-cover object-top',
  thumbImageContain: 'h-full w-full object-cover object-center',
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

const fitStyles = {
  cover: {frame: styles.frameCover, image: styles.imageCover, thumb: styles.thumbImageCover},
  contain: {frame: styles.frameContain, image: styles.imageContain, thumb: styles.thumbImageContain},
};

const slideMotion = {
  initial: {opacity: 0, scale: 1.04},
  animate: {opacity: 1, scale: 1},
  exit: {opacity: 0},
  transition: {duration: 0.7, ease: 'easeOut'},
};
const millisecondsPerSecond = 1000;
const progressStart = {width: '0%'};
const progressEnd = {width: '100%'};

const thumbClass = (isActive) => {
  if (isActive) {
    return styles.activeThumb;
  }
  return styles.thumb;
};

function ImageGallery({images, note, title, fit = 'cover'}) {
  const {containerRef, activeIndex, isExpanded, isPlaying, autoplayMs, select, expand, collapse, pause, resume} = useGallery(images.length);
  const activeImage = images[activeIndex];
  const fitStyle = fitStyles[fit];
  const progressTransition = {duration: autoplayMs / millisecondsPerSecond, ease: 'linear'};
  return (
    <figure ref={containerRef} className={styles.figure} onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
      <button type="button" className={fitStyle.frame} onClick={expand} aria-label={`Ampliar imagen: ${activeImage.caption}`}>
        <AnimatePresence initial={false}>
          <motion.img key={activeImage.src} src={publicAsset(activeImage.src)} alt={`${title}: ${activeImage.caption}`} loading="lazy" className={fitStyle.image} {...slideMotion} />
        </AnimatePresence>
        <span className={styles.expandHint}><Expand size={expandIconSize} /></span>
      </button>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((image, position) => (
            <button key={image.src} type="button" className={thumbClass(position === activeIndex)} onClick={() => select(position)} aria-label={image.caption}>
              <img src={publicAsset(image.src)} alt="" loading="lazy" className={fitStyle.thumb} />
              {isPlaying && position === activeIndex && (
                <motion.span key={activeIndex} className={styles.progress} initial={progressStart} animate={progressEnd} transition={progressTransition} />
              )}
            </button>
          ))}
        </div>
      )}
      <figcaption className={styles.caption}>{activeImage.caption}</figcaption>
      {note && <p className={styles.note}>{note}</p>}
      {createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div className={styles.overlay} onClick={collapse} role="dialog" aria-modal="true" aria-label={activeImage.caption} {...overlayMotion}>
              <button type="button" className={styles.close} onClick={collapse} aria-label="Cerrar imagen"><X size={closeIconSize} /></button>
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

export default ImageGallery;

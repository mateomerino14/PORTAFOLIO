import {NAVBAR_OFFSET_PX} from '../constants';

let smoothScroller = null;

export const registerSmoothScroller = (scroller) => {
  smoothScroller = scroller;
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }
  if (smoothScroller) {
    smoothScroller.scrollTo(element, {offset: -NAVBAR_OFFSET_PX});
  }
  else {
    element.scrollIntoView({behavior: 'smooth'});
  }
};

export const scrollToTop = () => {
  if (smoothScroller) {
    smoothScroller.scrollTo(0);
  }
  else {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};

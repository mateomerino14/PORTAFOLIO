const state = {
  progress: 0,
  activeIndex: 0,
  hoveredTech: '',
};

const listeners = new Set();

const notify = () => listeners.forEach((listener) => listener());

export const journeyStore = {
  subscribe: (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getProgress: () => state.progress,
  getActiveIndex: () => state.activeIndex,
  getHoveredTech: () => state.hoveredTech,
  setProgress: (progress) => {
    state.progress = progress;
    const activeIndex = Math.round(progress);
    if (activeIndex !== state.activeIndex) {
      state.activeIndex = activeIndex;
      notify();
    }
  },
  setHoveredTech: (tech) => {
    if (tech !== state.hoveredTech) {
      state.hoveredTech = tech;
      notify();
    }
  },
};

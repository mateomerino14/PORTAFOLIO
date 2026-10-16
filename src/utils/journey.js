export const STOP_LEVELS = {
  main: 'main',
  branch: 'branch',
};

export const createMainStop = (id, label) => ({id, groupId: id, label, level: STOP_LEVELS.main, itemIndex: -1});

export const createBranchStops = (groupId, prefix, items, getLabel) => items.map((item, itemIndex) => ({
  id: `${prefix}-${itemIndex + 1}`,
  groupId,
  label: getLabel(item),
  level: STOP_LEVELS.branch,
  itemIndex,
}));

export const findStopIndex = (stops, stopId) => stops.findIndex((stop) => stop.id === stopId);

export const computeProgress = (centers, position) => {
  if (centers.length === 0) {
    return 0;
  }
  const lastIndex = centers.length - 1;
  if (position <= centers[0]) {
    return 0;
  }
  if (position >= centers[lastIndex]) {
    return lastIndex;
  }
  let index = 0;
  while (centers[index + 1] < position) {
    index++;
  }
  const span = centers[index + 1] - centers[index];
  return index + (position - centers[index]) / span;
};

export const smoothstep = (value) => value * value * (3 - 2 * value);

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const splitProgress = (progress, lastIndex, dwell) => {
  const from = Math.min(Math.floor(progress), lastIndex);
  const to = Math.min(from + 1, lastIndex);
  const fraction = progress - from;
  const travel = smoothstep(clamp((fraction - dwell.start) / (dwell.end - dwell.start), 0, 1));
  return {from, to, travel};
};

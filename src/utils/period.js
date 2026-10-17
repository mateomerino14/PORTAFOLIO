const monthIndex = {Ene: 0, Feb: 1, Mar: 2, Abr: 3, May: 4, Jun: 5, Jul: 6, Ago: 7, Sep: 8, Oct: 9, Nov: 10, Dic: 11};
const monthsPerYear = 12;
const presentLabel = 'Presente';
const rangeSeparator = ' — ';

const currentYearFraction = () => {
  const now = new Date();
  return now.getFullYear() + now.getMonth() / monthsPerYear;
};

const parsePoint = (text, isEnd) => {
  if (text === presentLabel) {
    return currentYearFraction();
  }
  const [first, second] = text.split(' ');
  if (second) {
    return Number(second) + (monthIndex[first] + Number(isEnd)) / monthsPerYear;
  }
  return Number(first) + Number(isEnd);
};

export const parsePeriod = (period) => {
  const [startText, endText] = period.split(rangeSeparator);
  const start = parsePoint(startText, false);
  if (!endText) {
    return {start, end: start, isMoment: startText.includes(' ')};
  }
  return {start, end: parsePoint(endText, true), isMoment: false};
};

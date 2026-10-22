import {useMemo} from 'react';

const yearPattern = /\d{4}/;

const yearsOf = (items) => [...new Set(items.map((item) => item.date.match(yearPattern)[0]))].sort();

const countedHours = (items) => items.filter((item) => !item.isPartOfProgram).reduce((total, item) => total + item.hours, 0);

const buildPeriodStat = (years) => {
  if (years.length === 1) {
    return {value: years[0], label: 'Periodo'};
  }
  return {value: years[0], label: 'Desde'};
};

const buildDetailStat = (totalHours, topicCount) => {
  if (totalHours > 0) {
    return {value: `${totalHours} h`, label: 'Formación'};
  }
  return {value: topicCount, label: 'Temas'};
};

function useCertificationSummary(group) {
  return useMemo(() => {
    const totalHours = countedHours(group.items);
    const certificates = group.items.filter((item) => item.image).map((item) => ({src: item.image, caption: item.name}));
    const topics = [...new Set(group.items.flatMap((item) => item.topics ?? [item.tech]))];
    return {
      certificates,
      hasCertificates: certificates.length > 0,
      topics,
      stats: [
        {value: group.items.length, label: 'Certificados'},
        buildDetailStat(totalHours, topics.length),
        buildPeriodStat(yearsOf(group.items)),
      ],
    };
  }, [group]);
}

export {countedHours, yearsOf};
export default useCertificationSummary;

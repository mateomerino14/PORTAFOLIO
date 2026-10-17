import {useMemo} from 'react';

const issuerSeparator = ' · ';
const yearPattern = /\d{4}/;

const yearsOf = (items) => [...new Set(items.map((item) => item.date.match(yearPattern)[0]))].sort();

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

function useCertificationSummary(group, overview) {
  return useMemo(() => {
    const totalHours = group.items.reduce((total, item) => total + item.hours, 0);
    const certificates = group.items.filter((item) => item.image).map((item) => ({src: item.image, caption: item.name}));
    const topics = [...new Set(group.items.flatMap((item) => item.topics ?? [item.tech]))];
    const hasCertificates = !overview && certificates.length > 0;
    return {
      certificates,
      hasCertificates,
      showTopicTiles: !overview && !hasCertificates,
      showTopicTags: overview,
      showIssuers: overview,
      topics,
      stats: [
        {value: group.items.length, label: 'Certificados'},
        buildDetailStat(totalHours, topics.length),
        buildPeriodStat(yearsOf(group.items)),
      ],
      issuers: [...new Set(group.items.flatMap((item) => item.issuer.split(issuerSeparator)).filter(Boolean))],
    };
  }, [group, overview]);
}

export default useCertificationSummary;

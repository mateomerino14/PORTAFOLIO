import {useMemo} from 'react';

const issuerSeparator = ' · ';
const yearPattern = /\d{4}/;
const rangeSeparator = '–';
const shortYearStart = 2;

const yearsOf = (items) => [...new Set(items.map((item) => item.date.match(yearPattern)[0]))].sort();

const formatPeriod = (years) => {
  if (years.length === 1) {
    return years[0];
  }
  return `${years[0]}${rangeSeparator}${years[years.length - 1].slice(shortYearStart)}`;
};

const buildDetailStat = (totalHours, topicCount) => {
  if (totalHours > 0) {
    return {value: `${totalHours} h`, label: 'Formación'};
  }
  return {value: topicCount, label: 'Temas'};
};

function useCertificationSummary(group, {compact, showCertificates}) {
  return useMemo(() => {
    const totalHours = group.items.reduce((total, item) => total + item.hours, 0);
    const hourItems = group.items.filter((item) => item.hours > 0).sort((first, second) => second.hours - first.hours);
    const maxHours = Math.max(0, ...hourItems.map((item) => item.hours));
    const certificates = group.items.filter((item) => item.image).map((item) => ({src: item.image, caption: item.name}));
    const hasCertificates = showCertificates && certificates.length > 0;
    const topics = [...new Set(group.items.flatMap((item) => item.topics ?? [item.tech]))];
    const detailStat = buildDetailStat(totalHours, topics.length);
    return {
      certificates,
      hasCertificates,
      isCompact: compact || hasCertificates,
      count: group.items.length,
      totalHours,
      period: formatPeriod(yearsOf(group.items)),
      topics,
      detailStat,
      issuers: [...new Set(group.items.flatMap((item) => item.issuer.split(issuerSeparator)).filter(Boolean))],
      hourBars: hourItems.map((item) => ({name: item.name, hours: item.hours, ratio: item.hours / maxHours})),
    };
  }, [group, compact, showCertificates]);
}

export default useCertificationSummary;

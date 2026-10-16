import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StopIndex from '../../journey/molecules/StopIndex';
import CertificationGroupPanel from '../molecules/CertificationGroupPanel';
import useCertificationIndex from '../hooks/useCertificationIndex';
import {SECTION_IDS} from '../../../constants/navigation';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const styles = {
  intro: 'text-fog',
};

const totalCertifications = CERTIFICATION_GROUPS.reduce((total, group) => total + group.items.length, 0);
const totalHours = CERTIFICATION_GROUPS.flatMap((group) => group.items).reduce((total, item) => total + (parseFloat(item.hours) || 0), 0);

function CertificationsSection() {
  const groupStops = useCertificationIndex();
  return (
    <>
      <StopPanel stopId={SECTION_IDS.certifications} size="compact">
        <SectionTitle title="Certificaciones" />
        <p className={styles.intro}>{totalCertifications} certificaciones y {totalHours} horas de formación.</p>
        <StopIndex items={groupStops} />
      </StopPanel>
      {groupStops.map((stop) => (
        <StopPanel key={stop.id} stopId={stop.id}>
          <CertificationGroupPanel group={CERTIFICATION_GROUPS[stop.itemIndex]} />
        </StopPanel>
      ))}
    </>
  );
}

export default CertificationsSection;

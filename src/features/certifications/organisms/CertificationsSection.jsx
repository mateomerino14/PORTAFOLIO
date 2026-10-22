import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StopIndex from '../../journey/molecules/StopIndex';
import CertificationGroupPanel from '../molecules/CertificationGroupPanel';
import CertificationOverview from '../molecules/CertificationOverview';
import useCertificationIndex from '../hooks/useCertificationIndex';
import {SECTION_IDS} from '../../../constants/navigation';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-8',
  intro: 'text-fog',
};

function CertificationsSection() {
  const groupStops = useCertificationIndex();
  return (
    <>
      <StopPanel stopId={SECTION_IDS.certifications} size="compact" variant="wide">
        <div className={styles.layout}>
          <div>
            <SectionTitle title="Certificaciones" />
            <p className={styles.intro}>Diplomados, cursos y certificaciones profesionales que complementan mi formación.</p>
            <StopIndex items={groupStops} />
          </div>
          <CertificationOverview />
        </div>
      </StopPanel>
      {groupStops.map((stop) => (
        <StopPanel key={stop.id} stopId={stop.id} variant="wide">
          <CertificationGroupPanel group={CERTIFICATION_GROUPS[stop.itemIndex]} />
        </StopPanel>
      ))}
    </>
  );
}

export default CertificationsSection;

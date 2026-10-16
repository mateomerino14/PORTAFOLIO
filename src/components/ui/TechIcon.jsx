import {BRAND_ICONS, DEFAULT_TECH_ICON, FALLBACK_ICONS} from '../../constants/techIcons';
import {COLORS} from '../../constants';
import {relativeLuminance} from '../../utils/color';

const styles = {
  icon: 'shrink-0',
};

const minimumLuminance = 0.28;
const defaultSize = 14;

const brandColor = (hex) => {
  if (relativeLuminance(hex) < minimumLuminance) {
    return COLORS.paper;
  }
  return `#${hex}`;
};

function TechIcon({name, size = defaultSize}) {
  const brand = BRAND_ICONS[name];
  if (brand) {
    return (
      <svg role="img" aria-hidden width={size} height={size} viewBox="0 0 24 24" className={styles.icon} fill={brandColor(brand.hex)}>
        <path d={brand.path} />
      </svg>
    );
  }
  const Icon = FALLBACK_ICONS[name] ?? DEFAULT_TECH_ICON;
  return <Icon size={size} className={styles.icon} color={COLORS.fog} aria-hidden />;
}

export default TechIcon;

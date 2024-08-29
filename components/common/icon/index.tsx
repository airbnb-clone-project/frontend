import { FC } from 'react';
import icons from './icons';

const colorMap = {
  default: '#000000',
  disabled: '#A8A8A8',
  subtle: '#6E6E6E',
  success: '#28A745',
  error: '#DC3545',
  warning: '#FFC107',
  info: '#17A2B8',
  recommendation: '#5A9',
  inverse: '#FFFFFF',
  shopping: '#FF5722',
  brandPrimary: '#007BFF',
  light: '#F8F9FA',
  dark: '#343A40',
};

type IconColor = keyof typeof colorMap;

interface IconProps {
  icon: keyof typeof icons;
  accessibilityLabel: string;
  size?: number | string;
  color?: IconColor;
}

const Icon: FC<IconProps> = ({ icon, accessibilityLabel, size = 24, color = 'default' }) => {
  const SvgIcon = icons[icon];

  if (!SvgIcon) {
    return null;
  }

  return (
    <SvgIcon
      aria-label={accessibilityLabel}
      width={size}
      height={size}
      fill={colorMap[color]}
      viewBox={`0 0 24 24`}
    />
  );
};

export { Icon };

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface AppAvatarProps {
  src?: string;
  alt?: string;
  size?: 'lg' | 'md' | 'sm';
  children?: React.ReactNode;
  hoverEffect?: boolean;
}

const baseStyle =
  'rounded-full overflow-hidden flex justify-center items-center cursor-pointer';

const hoverStyle = 'hover:bg-[#d1d1d1]';
const normalStyle = 'bg-[#e9e9e9]';

const sizeOptions = {
  lg: 'w-[120px] h-[120px]',
  md: 'w-16 h-16',
  sm: 'w-12 h-12',
};

const AppAvatar = ({
  src,
  alt = 'Avatar',
  size = 'md',
  children,
  hoverEffect = false,
}: AppAvatarProps) => {
  const hoverClass = hoverEffect ? hoverStyle : '';

  const classes = cn(baseStyle, sizeOptions[size], hoverClass, {
    [normalStyle]: !src,
  });

  const dimensions =
    size === 'lg'
      ? { width: 120, height: 120 }
      : size === 'md'
        ? { width: 64, height: 64 }
        : { width: 48, height: 48 };

  return (
    <div className={classes}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          layout="fixed"
          className="object-cover object-center"
        />
      ) : (
        <span className="font-bold">H</span>
      )}
    </div>
  );
};

export default AppAvatar;

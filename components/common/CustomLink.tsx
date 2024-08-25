import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  size?: 'xs' | 'md';
  type?: 'inline-sb' | 'inline-reg' | 'inline-reg-inverse';
  darkBackground?: boolean;
  newTab?: boolean;
}

const CustomLink = ({
  href,
  children,
  size = 'md',
  type = 'inline-reg',
  darkBackground = false,
  newTab = true,
}: CustomLinkProps) => {
  const sizeClasses = size === 'xs' ? 'text-xs' : 'text-md';

  const typeClasses = {
    'inline-sb': 'font-semibold underline',
    'inline-reg': 'font-normal underline',
    'inline-reg-inverse': 'font-normal no-underline',
  }[type];

  const colorClasses = darkBackground ? 'text-white' : 'text-gray-800';

  const classes = cn(sizeClasses, typeClasses, colorClasses);

  return (
    <Link
      href={href}
      className={classes}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

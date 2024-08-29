import { Button as ShadcnButton } from '@/components/ui/button';
import clsx from 'clsx';
import ArrowDownIcon from '@/public/svgs/arrow_down.svg';

interface ButtonProps {
  children: string;
  size: 'sm' | 'md' | 'lg';
  trailingIcon?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'secondary-white' | 'selected';
  border?: boolean;
  className?: string;
  transition?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  size,
  trailingIcon,
  disabled,
  color,
  border = false,
  transition = true,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <ShadcnButton
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'group font-medium text-base flex gap-1.5 h-auto max-h-12 px-4 rounded-full transition-none disabled:text-button-text-gray-disabled disabled:bg-button-disable disabled:opacity-100',
        {
          'py-1.5': size === 'sm',
          'py-2.5': size === 'md',
          'py-3.5': size === 'lg',
        },
        {
          'disabled:bg-white': color !== 'primary' && color !== 'secondary',
        },
        {
          'text-white bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-pressed':
            color === 'primary',
          'text-button-text-gray bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-pressed':
            color === 'secondary',
          'text-button-text-gray bg-white hover:bg-white': color === 'tertiary',
          'text-button-text-gray bg-button-secondary_white hover:bg-button-secondary_white-hover active:bg-button-secondary_white-pressed':
            color === 'secondary-white',
          'bg-button-text-gray text-white hover:bg-button-text-gray':
            color === 'selected',
        },
        {
          'border border-button-secondary-pressed box-border': border,
        },
        {
          'active:scale-95 transition-transform duration-85': transition,
        },
        className
      )}
    >
      {children}
      {trailingIcon && (
        <ArrowDownIcon
          className={clsx(
            'w-3 h-3 fill-button-text-gray group-disabled:fill-button-text-gray-disabled',
            { 'fill-white': color === 'selected' }
          )}
        />
      )}
    </ShadcnButton>
  );
};

export default Button;

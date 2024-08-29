'use client';

import * as ShadcnCheckbox from '@radix-ui/react-checkbox';
import { useEffect, useState } from 'react';
import CheckIcon from '@/public/svgs/checkbox.svg';
import DashIcon from '@/public/svgs/dash-com.svg';
import clsx from 'clsx';
import { Label } from '@/components/ui/label';

interface CheckboxProps {
  id?: string;
  size: 'sm' | 'md';
  initialChecked?: boolean;
  label?: string;
  indeterminated?: boolean;
  disabled?: boolean;
  onChangehandler?: (checked: boolean) => void;
}

const Checkbox = ({
  id,
  size,
  initialChecked,
  label,
  indeterminated,
  disabled,
  onChangehandler,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(initialChecked);
  const onChange = (checked: ShadcnCheckbox.CheckedState) => {
    setChecked(checked as boolean);
    onChangehandler?.(checked as boolean);
  };

  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  return (
    <div className={clsx('group flex items-center')}>
      <ShadcnCheckbox.Root
        id={id}
        checked={checked}
        disabled={disabled}
        onCheckedChange={onChange}
        className={clsx(
          'peer flex justify-center items-center size-4 border-2 data-[state=checked]:bg-black disabled:bg-button-secondary-hover disabled:border-button-secondary-hover',
          {
            'size-4 rounded': size === 'sm',
            'size-6 rounded-md': size === 'md',
          },
          {
            'border-black': checked,
            'border-checkbox hover:border-checkbox-hover': !checked,
          }
        )}
      >
        <ShadcnCheckbox.Indicator
          className={clsx('flex justify-center *:fill-white', {
            '*:size-2': size === 'sm',
            '*:size-3': size === 'md',
          })}
        >
          {indeterminated && <DashIcon />}
          {checked === true && !indeterminated && <CheckIcon />}
        </ShadcnCheckbox.Indicator>
      </ShadcnCheckbox.Root>

      {label && (
        <Label
          htmlFor={id}
          className="text-base ml-2 font-normal cursor-pointer peer-disabled:pointer-events-none peer-disabled:text-checkbox"
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default Checkbox;

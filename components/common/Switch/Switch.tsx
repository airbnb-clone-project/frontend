'use client';
import * as ShadcnSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface SwitchProps {
  initialSwitched?: boolean;
  disabled?: boolean;
  onSwitch?: (checked: boolean) => void;
}

const Switch = ({ initialSwitched, disabled, onSwitch }: SwitchProps) => {
  const [switched, setSwitched] = useState(initialSwitched);
  const onCheckedChange = (checked: boolean) => {
    setSwitched(checked);
    onSwitch?.(checked);
  };

  useEffect(() => {
    setSwitched(initialSwitched);
  }, [initialSwitched]);

  return (
    <ShadcnSwitch.Root
      checked={switched}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={clsx(
        'relative w-10 h-6 bg-white rounded-full border border-checkbox flex items-center  transition-colors duration-250 data-[state=checked]:bg-button-text-gray disabled:opacity-15',
        {
          'disabled:bg-button-secondary-pressed disabled:border-checkbox':
            disabled && !switched,
          'disabled:bg-checkbox disabled:border-checkbox': disabled && switched,
        }
      )}
    >
      <ShadcnSwitch.Thumb
        className={clsx(
          'absolute -left-[1px] border border-checkbox block size-6 bg-white rounded-full will-change-transform data-[state=checked]:translate-x-4 disabled:border-button-secondary-pressed'
        )}
      />
    </ShadcnSwitch.Root>
  );
};

export default Switch;

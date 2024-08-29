import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/common/icon';

const textareaVariants = cva(
  'block w-full p-[8px] px-[16px] border-2 rounded-[16px] font-normal shadow-sm sm:text-base transition-colors duration-200 ease-in-out resize-none',
  {
    variants: {
      error: {
        true: 'border-red-500 focus:ring-red-500 focus:border-red-500',
        false: '',
      },
      disabled: {
        true: 'bg-gray-100 text-gray-500 cursor-not-allowed border-gray-300',
        false: 'border-gray-300 focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-[rgba(0,132,255,0.5)] focus-visible:outline-offset-0',
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  }
);

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
  label?: string;
  placeholder?: string;
  helpText?: string;
  error?: boolean | null | undefined;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  maxLength?: number;
  height?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  placeholder,
  helpText,
  error = false,
  value,
  onChange,
  disabled = false,
  maxLength,
  height = '72px',
  ...props
}: CustomTextareaProps) => {
  const charCount = value?.length || 0;

  return (
    <div className="mb-4 relative">
      {label && (
        <label htmlFor={label} className="block text-[12px] font-normal text-gray-900 mb-2 cursor-pointer">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          id={label}
          className={cn(
            textareaVariants({ error: !!error, disabled: disabled })
          )}
          style={{ height }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={helpText || error ? 'help-text' : undefined}
          {...props}
        />
      </div>
      {maxLength && (
        <span className="absolute bottom-0 right-2 text-[12px] text-gray-500">
          {charCount}/{maxLength}
        </span>
      )}

      {helpText && !error && (
        <p id="help-text" className="mt-2 text-[12px] text-gray-500">
          {helpText}
        </p>
      )}
      {error && (
        <p id="help-text" className="mt-2 text-[12px] text-red-600 flex items-center">
          <Icon icon="workflow-status-problem" accessibilityLabel="Add item" color="error" size={16}/>
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomTextarea;
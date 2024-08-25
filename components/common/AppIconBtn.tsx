import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

interface AppIconBtnProps {
  textColor?: 'primary' | string;
  size?: 'sm' | 'md' | 'lg';
}

const basicStyle = 'rounded-full bg-white hover:bg-[#f1f1f1]';

const sizeOptions = {
  sm: 'w-10 h-10 text-lg',
  md: 'w-12 h-12 text-xl',
  lg: 'w-14 h-14 text-xl',
};

const AppIconBtn = ({ textColor = '#111', size = 'lg' }: AppIconBtnProps) => {
  const computedColor = textColor === 'primary' ? 'text-[#c00]' : textColor;

  const classes = cn(basicStyle, sizeOptions[size], computedColor);

  return (
    <Button type="button" aria-label="추가 버튼" className={classes}>
      <Plus />
    </Button>
  );
};

export default AppIconBtn;

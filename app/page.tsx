import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/common/icon';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import Plus from '@/public/svgs/plus.svg';
import Pen from '@/public/svgs/pen.svg';
import Danger from '@/public/svgs/danger.svg';

const Home = () => {
  return (
    <div>
      <h1 className="text-red-400">Home</h1>
      <section className="flex flex-col gap-4 mt-4">
        <div>
          <Input type="email" placeholder="Email" className={cn('w-[250px]')} />
        </div>
        <div>
          <Button variant="outline">Button</Button>
        </div>
        <div>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <div>
          <Icon
            icon="template"
            accessibilityLabel="Add item"
            color="disabled"
          />
          asdfafds
          <Plus width="100" height="100" />
          <Pen width="100" height="100" />
          <Danger width="100" height="100" />잘 적용됩니다
        </div>
      </section>
    </div>
  );
};

export default Home;

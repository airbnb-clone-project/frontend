import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div>
      <h1 className="text-red-400">Home</h1>
      <section className="flex flex-col gap-4 mt-4">
        <div>
          <Input type="email" placeholder="Email" className={cn("w-[250px]")} />
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
        <div>잘 적용됩니다</div>
      </section>
    </div>
  );
};

export default Home;

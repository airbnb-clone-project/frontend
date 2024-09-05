import { Ellipsis } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface InputDropdownProps {}

const InputDropdown = ({}: InputDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel>
          회원님의 최근 활동을 바탕으로 추천된 핀입니다.
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>핀 숨기기</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>이미지 다운로드</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>핀 신고</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InputDropdown;

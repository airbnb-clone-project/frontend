'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import Button from '@/components/common/Button/Button';
import NavSearchForm from '../_components/NavSearchForm';

import BellIcon from '@/public/svgs/bell.svg';
import MessageIcon from '@/public/svgs/messenger.svg';
import ArrowDownIcon from '@/public/svgs/arrow_down.svg';

const LoggedInNavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 text-[#111] font-medium flex justify-between items-center">
      <div className="flex items-center">
        <Link
          href="/"
          className="hover:bg-[#F1F1F1] rounded-full w-12 h-12 flex justify-center items-center hover:scale-90"
          aria-label="홈으로 이동"
        >
          <div className="flex items-center gap-2 px-3">
            <span>
              <Image src="/icon.ico" alt="핀터레스트" width={24} height={24} />
            </span>
            <h1 className="text-[#cc0000] text-xl sr-only">Pinterest</h1>
          </div>
        </Link>
        <Link href="/">
          <Button
            size="md"
            color="tertiary"
            aria-label="홈으로 이동"
            className={cn(
              `${pathname === '/' ? 'bg-[#111] hover:bg-[#111] text-white' : 'bg-white text-[#111]'}`
            )}
          >
            홈
          </Button>
        </Link>
        <Link href="/pin-creation-tool">
          <Button
            size="md"
            color="tertiary"
            aria-label="핀 만들기로 이동"
            className={cn(
              `${pathname === '/pin-creation-tool' ? 'bg-[#111] hover:bg-[#111] text-white' : 'bg-white text-[#111]'}`
            )}
          >
            만들기
          </Button>
        </Link>
      </div>

      <NavSearchForm />

      <div className="flex items-center">
        <ul className="flex mr-6">
          <li>
            <Button
              size="md"
              color="secondary-white"
              className={cn('p-3 hover:bg-[#F1F1F1]')}
            >
              <BellIcon className="w-6 h-6" />
            </Button>
          </li>
          <li>
            <Button
              size="md"
              color="secondary-white"
              className={cn('p-3 hover:bg-[#F1F1F1]')}
            >
              <MessageIcon className="w-6 h-6" />
            </Button>
          </li>
          <li>
            <Link
              href={'/'} //user.id로 교체해야합니디.
              aria-label="홈으로 이동"
            >
              <Button
                size="sm"
                color="secondary-white"
                className={cn('p-3 hover:bg-[#F1F1F1]')}
              >
                <figure>
                  <Image
                    src="/icon.ico"
                    alt="사용자 이미지"
                    width={24}
                    height={24}
                  ></Image>
                </figure>
              </Button>
            </Link>
          </li>
          <li className="flex items-center">
            <Button
              size="md"
              color="secondary-white"
              className={cn('p-3 hover:bg-[#F1F1F1]')}
            >
              <div className="flex justify-center items-center">
                <ArrowDownIcon className="w-3 h-3" />
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LoggedInNavBar;

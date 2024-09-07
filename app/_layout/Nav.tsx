'use client';

import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import Button from '@/components/common/Button/Button';
import NavSearchForm from '../_components/NavSearchForm';
import BellIcon from '@/public/svgs/bell.svg';
import MessageIcon from '@/public/svgs/messenger.svg';

const LoggedInNavBar = () => {
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
            color="secondary-white"
            className={cn('text-white bg-[#111] h-12')}
            size="md"
          >
            홈
          </Button>
        </Link>
        <Link href="/pin-creation-tool">
          <Button
            size="md"
            color="secondary-white"
            // className={cn('text-[#111] h-12 bg-red-300')}
            aria-label="핀 만들기로 이동"
          >
            만들기
          </Button>
        </Link>
      </div>

      <NavSearchForm />

      <div className="flex items-center">
        <ul className="flex mr-6">
          <li>
            {/* <Button size="md">
              <BellIcon className="w-5 h-6" />
            </Button> */}
          </li>
          <li>
            {/* <Button size="md">
              <MessageIcon className="w-6 h-6" />
            </Button> */}
          </li>
          <li>
            {/* <Button>
              <figure>
                <Image
                  src="/icon.ico"
                  alt="사용자 이미지"
                  width={24}
                  height={24}
                ></Image>
              </figure>
            </Button> */}
          </li>
          <li className="flex items-center">
            <Button className={cn('w-6 h-6')}>
              <div className="flex justify-center items-center">
                {/* <FaAngleDown className="w-5 h-5" /> */}
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LoggedInNavBar;

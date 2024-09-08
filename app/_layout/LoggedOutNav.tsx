'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useModalStore } from '@/utils/useModalStore';

import { cn } from '@/lib/utils';
import Button from '@/components/common/Button/Button';

const LoggedOutNav = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <nav className="p-4 text-[#111] font-medium flex justify-between">
      <div className="flex items-center">
        <Link href="/" aria-label="홈으로 이동">
          <div className="flex items-center gap-2 px-3">
            <span>
              <Image src="/icon.ico" alt="핀터레스트" width={32} height={32} />
            </span>
            <h1 className="text-[#cc0000] text-xl">Pinterest</h1>
          </div>
        </Link>
        <Link href="/ideas">
          <span className="text-base px-4" aria-label="탐색으로 이동">
            탐색
          </span>
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex mr-6">
          <li>
            <Link
              href="/"
              className="block text-base m-4 hover:underline"
              aria-label="소개로 이동"
            >
              소개
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block text-base m-4 hover:underline"
              aria-label="비즈니스로 이동"
            >
              비즈니스
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block text-base m-4 hover:underline"
              aria-label="언론으로 이동"
            >
              언론
            </Link>
          </li>
        </ul>
        <Button
          size="md"
          color="secondary"
          className={cn(
            'px-3 py-2 mr-2 text-white bg-[#c00] hover:bg-[#b60000] active:bg-[#b60000]'
          )}
          onClick={openModal}
        >
          로그인
        </Button>
        <Button
          size="md"
          color="secondary"
          className={cn('px-3 py-2 hover:bg-[#E2E2E2]/80')}
        >
          <span>가입하기</span>
        </Button>
      </div>
    </nav>
  );
};

export default LoggedOutNav;

'use client';

import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useModalStore } from '@/utils/useModalStore';

import { Input } from '@/components/ui/input';
import Button from '@/components/common/Button/Button';

import CloseIcon from '@/public/svgs/cancel.svg';
import FacebookIcon from '@/public/svgs/facebook.svg';

const LoginModal = () => {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  if (!isModalOpen) return null;

  return (
    <div className="px-[10px] pt-5 pb-6 insert-0 border rounded-[32px] min-h-[400px] w-[484px] bg-white relative">
      <Button
        size="md"
        color="secondary-white"
        onClick={closeModal}
        className={cn('p-0 absolute right-6 top-6')}
      >
        <CloseIcon className="w-6 h-6" />
      </Button>
      <div className="mt-2 mx-auto w-10 h-10">
        <Image src="/icon.ico" alt="핀터레스트 로고" width={34} height={34} />
      </div>
      <div className="mt-0 mb-4 mx-auto w-[400px] ">
        <h1 className="text-[30px] px-4 text-[#111] font-medium break-keep text-center tracking-tight">
          Pinterest에 오신 것을 환영합니다
        </h1>
      </div>
      <div className="w-[268px] mx-auto">
        <form action="post">
          <label
            htmlFor="email"
            className="w-full block cursor-pointer ml-2 mb-1 font-normal text-sm"
          >
            이메일
          </label>
          <fieldset>
            <Input
              id="email"
              placeholder="이메일"
              className="py-3 px-4 border-2 border-[#CDCDCD] rounded-2xl min-h-12 mb-2"
            />
            {/* <span className="flex items-center">
              <Image
                src="/icon.ico"
                alt="주의"
                width={16}
                height={16}
                className="m-1"
              />
              <p className="m-1 text-[#cc0000] text-xs font-normal break-keep">
                빠뜨린 부분이 있네요! 이메일을 추가하는 것을 잊지 마세요.
              </p>
            </span> */}
          </fieldset>
          <label
            htmlFor="password"
            className="w-full block cursor-pointer ml-2 mb-1 font-normal text-sm"
          >
            비밀번호
          </label>
          <Input
            id="password"
            placeholder="비밀번호"
            className="py-3 px-4 border-2 border-[#CDCDCD] rounded-2xl min-h-12 mb-2"
          />
          <Link
            href="/paspassword/reset"
            className="block font-semibold text-sm hover:underline mt-2 mb-3"
          >
            비밀번호를 잊으셨나요?
          </Link>
          <Button color="primary" size="md" className={cn('w-full')}>
            로그인
          </Button>
          <p className="block font-bold text-center text-[#333] text-sm my-2 mt-2 mb-3">
            또는
          </p>
          <Button
            color="primary"
            size="md"
            className={cn(
              'relative w-full bg-[#0074E8] hover:bg-[#0074E8] mb-2 flex justify-center items-center'
            )}
          >
            <span className="absolute left-3 bg-white w-6 h-6 flex justify-center items-center rounded-full">
              <FacebookIcon className="fill-[#0074E8] transform translate-x-[2px] translate-y-1" />
            </span>
            <p className="text-white font-normal">Facebook으로 계속하기</p>
          </Button>

          <Button
            color="secondary-white"
            size="md"
            className={cn(
              'relative w-full mb-2 flex justify-center items-center border border-[#dadce0]'
            )}
          >
            <span className="absolute left-3 w-6 h-6 flex justify-center items-center rounded-full">
              <FacebookIcon className="fill-[#0074E8]" />
            </span>
            <p className="font-normal">Google 계정으로 계속하기</p>
          </Button>
        </form>

        <div>
          <p className="text-center text-xs text-[#767676] font-normal mt-3">
            계속 진행하면 Pinterest &nbsp;
            <a href="/" className="text-[#111] font-medium ">
              서비스 약관
            </a>
            에 동의하고,
            <br />
            <a href="/" className="text-[#111] font-medium ">
              개인정보처리방침
            </a>
            을 읽었음을 인정하는 것으로 간주됩니
            <br />
            다.&nbsp;
            <a href="/" className="text-[#111] font-medium ">
              컬렉션 알림
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-xs font-medium">
          <div className="border-b border-{#dedede] w-28 my-[10px]"></div>
          <div className="">
            아직 Pinterest를 사용하고 있지 않으신가요? 가입하기
          </div>
          <div className="flex mt-2">
            <p className="mr-1 font-light">사업체인가요?</p>
            <div>여기에서 시작하세요!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

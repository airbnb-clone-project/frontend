'use client';

import { useModalStore } from '@/utils/useModalStore';

import LoginModal from './_components/modal/LoginModal';
import PinBoard from './_components/PinBoard';

const Home = () => {
  const isModalOpen = useModalStore((state) => state.isModalOpen);

  return (
    <div>
      <div
        className={`${isModalOpen ? 'fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50' : ''}`}
      >
        <LoginModal />
      </div>
      <main>
        <h1 className="text-red-400">Home</h1>
        <PinBoard />
      </main>
    </div>
  );
};

export default Home;

'use client';

import { useAuthStore } from '@/utils/useAuthStore';

import LoggedInNavBar from './LoggedInNav';
import LoggedOutNavBar from './LoggedOutNav';

const NavBar = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return <>{isLoggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}</>;
};

export default NavBar;

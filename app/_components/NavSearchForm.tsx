'use client';

import { useState } from 'react';

import SearchIcon from '@/public/svgs/search.svg';
import CancelIcon from '@/public/svgs/cancel.svg';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('검색 쿼리:', searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex flex-1 px-2 group">
      <div className="box-border relative flex-grow bg-[#F1F1F1] flex items-center rounded-3xl pl-4 border-[3px] border-transparent group-focus-within:border-[#92C1FF] h-12">
        <div className="mr-2 text-[#767676] group-focus-within:hidden block">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="검색"
          aria-label="검색"
          className="h-full flex-1 bg-[#F1F1F1] rounded-3xl focus:outline-none text-base font-normal"
        />
        <Button
          variant="ghost"
          className={cn(
            'hidden rounded-full group-focus-within:block hover:bg-[#767676]/20 w-11 h-11 ml-3'
          )}
        >
          <CancelIcon className={cn('w-5 h-5')} />
        </Button>
      </div>
    </form>
  );
};

export default NavSearchForm;

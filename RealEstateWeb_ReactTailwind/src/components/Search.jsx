import { useContext } from 'react';

import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropDown from './PriceRangeDropDown';

import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

export default function Search() {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className='relative mx-auto flex max-w-[1170px] flex-col justify-between gap-4 rounded-lg bg-white px-[30px] py-6 lg:-top-4 lg:flex-row lg:gap-x-3 lg:bg-transparent lg:shadow-1 lg:backdrop-blur'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropDown />
      <button
        onClick={() => handleClick()}
        className='flex h-16 w-full items-center justify-center rounded-lg bg-violet-700 text-lg text-white transition hover:bg-violet-800 lg:max-w-[162px]'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
}

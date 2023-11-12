import Logo from '../assets/img/header/logo.svg';

import Socials from './Socials';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

export default function Header() {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <header className='fixed z-30 flex h-[100px] w-full items-center px-[30px] lg:h-[140px] lg:px-[100px]'>
      <div className='flex w-full flex-col justify-between lg:flex-row lg:items-center'>
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          to={'/'}
          className='max-w-[200px]'
        >
          <img src={Logo} alt=''></img>
        </Link>
        {/* Nav - hidden - desktop mode */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='hidden gap-x-12 font-semibold xl:flex'
        >
          <Link to={'/'} className='text-[#696c6d] transition hover:text-primary'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d] transition hover:text-primary'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] transition hover:text-primary'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] transition hover:text-primary'>
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
}

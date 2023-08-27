import Logo from '../assets/img/header/logo.svg';

import Socials from './Socials';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt=''></img>
        </Link>
        {/* Nav - hidden - desktop mode */}
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
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

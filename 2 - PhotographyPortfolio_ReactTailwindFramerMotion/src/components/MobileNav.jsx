import { useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='text-primary xl:hidden'>
      {/* nav open btn */}
      <div onClick={() => setOpenMenu(true)} className='cursor-pointer text-3xl'>
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='absolute right-0 top-0 z-20 h-screen w-full max-w-xs bg-white shadow-2xl'
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className='absolute left-4 top-14 z-30 cursor-pointer text-4xl text-primary'
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul
          onClick={() => setOpenMenu(false)}
          className='flex h-full flex-col items-center justify-center gap-y-8 font-primary text-3xl font-bold text-primary'
        >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

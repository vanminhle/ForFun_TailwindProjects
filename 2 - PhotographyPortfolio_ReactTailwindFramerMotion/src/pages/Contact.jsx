import WomanImg from './../assets/img/contact/woman.png';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

export default function Contact() {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex h-full flex-col items-center justify-start gap-x-8 pt-36 text-center lg:flex-row lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='absolute bottom-0 left-0 right-0 top-96 -z-10 hidden bg-[#eef7f9] lg:flex'
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='lg:pt-30 px-4 lg:flex-1'
          >
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                  type='email'
                  placeholder='Your email address'
                />
              </div>
              <input
                className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
              />
              <button className='btn mx-auto mb-[30px] self-start lg:mx-0'>Send it</button>
            </form>
          </div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt='' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

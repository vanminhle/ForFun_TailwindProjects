import WomanImg from '../assets/img/home/woman.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container relative mx-auto h-full'>
        {/* Text and img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='z-10 flex w-full flex-col items-center justify-center pb-14 pt-36 lg:absolute lg:w-auto lg:items-start lg:pb-0 lg:pt-0'
          >
            <h1 className='h1'>
              photographer <br /> & film maker
            </h1>
            <p className='mb-4 font-primary text-[26px] lg:mb-12 lg:text-[36px]'>
              Los Angeles, USA
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>
              hire me
            </Link>
          </motion.div>
          {/* image */}
          <div className='flex max-h-96 justify-end lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative overflow-hidden lg:-right-40'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ transition1 }}
                src={WomanImg}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

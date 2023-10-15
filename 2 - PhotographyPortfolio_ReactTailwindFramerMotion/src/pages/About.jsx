import WomanImg from '../assets/img/about/woman.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container relative mx-auto h-full'>
        {/* text & img wrapper */}
        <div className='flex h-full flex-col items-center justify-center gap-x-24 text-center lg:flex-row lg:pt-16 lg:text-left'>
          {/* image */}
          <div className='order-2 max-h-96 flex-1 overflow-hidden lg:order-none lg:max-h-max'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='z-10 flex flex-1 flex-col items-center justify-center pb-14 pt-36 lg:w-auto lg:items-start lg:pt-0'
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, asperiores error
              <b>odio maiores</b>quos sunt nobis ratione ut debitis dolore, magnam fugiat suscipit.
              Inventore nostrum vitae mollitia dolor illo quos aperiam veritatis.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quae nemo cum
              blanditiis corporis dolores?
            </p>
            <Link to={'/portfolio'} className='btn'>
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

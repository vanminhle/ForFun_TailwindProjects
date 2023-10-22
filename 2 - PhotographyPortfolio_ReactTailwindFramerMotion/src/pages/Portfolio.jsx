import Image1 from './../assets/img/portfolio/1.png';
import Image2 from './../assets/img/portfolio/2.png';
import Image3 from './../assets/img/portfolio/3.png';
import Image4 from './../assets/img/portfolio/4.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

export default function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container relative mx-auto h-full'>
        <div className='flex h-full flex-col items-center justify-start gap-x-24 pb-8 pt-24 text-center lg:flex-row lg:pt-36 lg:text-left '>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <div className='h1'>Portfolio</div>
            <p className='mb-12 max-w-xs'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, asperiores error
              <b>odio maiores</b>quos sunt nobis ratione ut debitis dolore, magnam fugiat suscipit.
              Inventore nostrum vitae mollitia dolor illo quos aperiam veritatis.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quae nemo cum
              blanditiis corporis dolores?
            </p>
            <Link to={'/contact'} className='btn mx-auto mb-[30px] lg:mx-0'>
              Hire me
            </Link>
          </motion.div>
          {/* images */}
          <div className='grid grid-cols-2 lg:gap-2'>
            <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
              <img
                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                src={Image1}
                alt=''
              />
            </div>
            <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
              <img
                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                src={Image2}
                alt=''
              />
            </div>
            <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
              <img
                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                src={Image3}
                alt=''
              />
            </div>
            <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
              <img
                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                src={Image4}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

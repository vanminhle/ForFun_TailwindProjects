import { Header, AnimRoutes } from './components';

import { BrowserRouter as Router } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from './context/CursorContext';

function App() {
  // console.log(useContext(CursorContext));

  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='pointer-events-none fixed left-0 top-0 z-50 h-[32px] w-[32px] rounded-full bg-primary'
      ></motion.div>
    </>
  );
}

export default App;

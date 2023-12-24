// import './App.css'
import './sass/main.scss';

import Header from './components/header.jsx';
import Loader from './components/Loader';
import { Home } from './pages';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Home />
          {!loading && (
            <div className='transition-image final'>
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src={import.meta.env.VITE_PUBLIC_URL + `/img/image-2.jpg`}
                layoutId='main-image-1'
              />
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;

import { Header, AnimRoutes } from './components';

import { BrowserRouter as Router } from 'react-router-dom';

import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;

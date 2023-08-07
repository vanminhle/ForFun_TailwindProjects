import { Home, About, Portfolio, Contact } from '../pages';

import { Routes, Route, useLocation } from 'react-router-dom';

export default function AnimRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

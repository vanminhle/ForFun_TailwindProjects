import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, PropertyDetails } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

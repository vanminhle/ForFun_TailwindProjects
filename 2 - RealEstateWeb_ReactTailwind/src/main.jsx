import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HouseContextProvider } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HouseContextProvider>,
);

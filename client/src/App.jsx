import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';

import { Home, Contact } from './pages';
import { Footer } from './components';

function App() {
  const [, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    window.addEventListener('resize', setDimensions);
    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

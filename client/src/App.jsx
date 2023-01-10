import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';

import { Home, Contact } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

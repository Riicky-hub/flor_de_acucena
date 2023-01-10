import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contact } from './pages';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Admindasboard/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Sign In Route */}
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
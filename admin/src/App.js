import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../../admin/src/Admindasboard/Signin';
// Import your other components here...

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
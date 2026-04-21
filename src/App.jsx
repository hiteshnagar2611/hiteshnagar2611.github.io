import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hitesh from './pages/Hitesh';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hitesh />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
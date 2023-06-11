import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Home from './pages/home';
import Registration from './pages/registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/sivan" element={<Home />} />
        <Route path="/sivan/Registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
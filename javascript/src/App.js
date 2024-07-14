// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import HomeRef from './Home';


function App() {
  return (
    <Router>
      <div>
      <Navbar> </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeRef />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

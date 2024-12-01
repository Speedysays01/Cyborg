// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
    </Router>
  );
}

export default App;


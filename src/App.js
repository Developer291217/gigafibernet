import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import OttPlans from './OttPlans'
import RegularPlans from './RegularPlans'
import BusinessPlans from './BusinessPlans'
import Networking from './Networking'
import Cctv from './Cctv'
import Ill from './Ill'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OttPlans" element={<OttPlans />} />
        <Route path="/RegularPlans" element={<RegularPlans />} />
        <Route path="/BusinessPlans" element={<BusinessPlans />} />
        <Route path="/Networking" element={<Networking />} />
        <Route path="/Cctv" element={<Cctv />} />
        <Route path="/Ill" element={<Ill />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ComingSoon from './Pages/ComingSoon';
import AboutUs from './Pages/AboutUs';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Faq from './Pages/Faq/Faq';
import Terms from './Pages/Terms/Terms';         // Optional
import Contact from './Pages/Contact/Contact';     // Optional

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
          <Link to="/faq" className="nav-link">FAQ's</Link>
          <Link to="/terms" className="nav-link">Terms</Link>          {/* Optional */}
          <Link to="/contact" className="nav-link">Contact</Link>      {/* Optional */}
        </nav>

        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />                  {/* Optional */}
          <Route path="/contact" element={<Contact />} />              {/* Optional */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

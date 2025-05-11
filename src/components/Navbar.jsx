import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router-dom';

function Navbar() {
  const [visible, setIsVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 185 || location.pathname !== '/');
    };
    // Set visibility based on the current location
    setIsVisible(location.pathname !== '/');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="text-3xl font-serif font-extrabold tracking-wider">🌿</div>
            <span className="text-2xl font-serif font-extrabold tracking-widest">Sanskruti</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-12 font-serif text-lg font-semibold tracking-wide">
            <a href="/" className="hover:text-gray-600 transition-colors duration-300">Home</a>
            <a href="/services" className="hover:text-gray-600 transition-colors duration-300">Services</a>
            <a href="/about" className="hover:text-gray-600 transition-colors duration-300">About</a>
            <a href="/contact" className="hover:text-gray-600 transition-colors duration-300">Contact</a>
          </nav>

          {/* Book Appointment Button */}
          <div>
            <a
  href="https://calendly.com/shuklashauryadeep589/30min"
              className="inline-block bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Book Appointment
            </a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

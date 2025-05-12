import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or use any icon set

function Navbar() {
  const [visible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 185 || location.pathname !== '/');
    };
    setIsVisible(location.pathname !== '/');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navLinks = (
    <>
      <Link to="/" className="hover:text-gray-600 transition-colors duration-300" onClick={()=>setMenuOpen((open)=>!open)}>Home</Link>
      <Link to="/services" className="hover:text-gray-600 transition-colors duration-300"onClick={()=>setMenuOpen((open)=>!open)}>Services</Link>
      <Link to="/blogs" className="hover:text-gray-600 transition-colors duration-300"onClick={()=>setMenuOpen((open)=>!open)}>Blog</Link>
      <Link to="/about" className="hover:text-gray-600 transition-colors duration-300"onClick={()=>setMenuOpen((open)=>!open)}>About</Link>
      <Link to="/contact" className="hover:text-gray-600 transition-colors duration-300"onClick={()=>setMenuOpen((open)=>!open)}>Contact</Link>
    </>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl font-serif font-extrabold tracking-wider">🌿</div>
            <span className="text-2xl font-serif font-extrabold tracking-widest">Sanskruti</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 font-serif text-lg font-thin tracking-wide">
            {navLinks}
          </nav>

          {/* Book Appointment */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/shuklashauryadeep589/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg tracking-wide hover:bg-gray-800 transition-colors duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-6 pb-6 pt-2"
          >
            <div className="flex flex-col space-y-4 font-serif text-lg font-thin tracking-wide">
              {navLinks}
              <a
                href="https://calendly.com/shuklashauryadeep589/30min"
                className="mt-4 inline-block bg-orange-600 text-white text-center font-semibold px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

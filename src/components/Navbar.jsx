import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or use any icon set
import { motion } from 'framer-motion';

function Navbar() {
  // const [visible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsVisible(true);
  //     // window.scrollY >= 185 || location.pathname !== '/'
  //   };
  //   setIsVisible(location.pathname !== '/');
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navLinks = (
    <>
      <Link to="/" className="hover:text-pink-600 transition-colors hover:scale-105 duration-300" onClick={() => setMenuOpen((open) => !open)}>Home</Link>
      <Link to="/services" className="hover:text-pink-600 transition-colors hover:scale-105 duration-300" onClick={() => setMenuOpen((open) => !open)}>Services</Link>
      <Link to="/about" className="hover:text-pink-600 transition-colors hover:scale-105 duration-300" onClick={() => setMenuOpen((open) => !open)}>About</Link>
      <Link to="/contact" className="hover:text-pink-600 hover:scale-105 transition-colors duration-300" onClick={() => setMenuOpen((open) => !open)}>Contact</Link>
      <Link to="/blogs" className="hover:text-pink-600 transition-colors hover:scale-105 duration-300" onClick={() => setMenuOpen((open) => !open)}>Why Us</Link>
    </>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-26">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={"https://res.cloudinary.com/dn9yo8x89/image/upload/v1753769643/WhatsApp_Image_2025-07-27_at_7.02.45_PM_hmxoab.jpg"} className="w-32 h-24 rounded-full" alt="Logo" />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 font-serif text-lg font-thin tracking-wide">
            {navLinks}
          </nav>

          {/* Book Appointment */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919956942226" target="_blank"
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
                href="https://wa.me/919956942226" className="mt-4 inline-block bg-orange-600 text-white text-center font-semibold px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
}

export default Navbar;

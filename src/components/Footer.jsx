import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-black py-10 px-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm">

        {/* Brand & Contact */}
        <div className=''>
          <h2 className="text-4xl font-bold mb-2">Vintage Holistic Treatment & Training Institute</h2>
          <p className="mb-1 text-md my-1">395 Eldeco colony, near pioneer montessory school, Udyan-1, Sector -2, Bangla Bazar, Lucknow, Uttar Pradesh 226002</p>
          <p className="mb-1 text-md mt-3">📞 919956942226</p>
          <div>
            <div className="flex text-black space-x-6  text-base">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="hover:text-pink-400 transition duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-pink-400 transition duration-300" />
              </a>
              <a href="https://instagram.com/bprashaad?igsh=emUxMGs2eHZ6OTR3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-pink-400 transition duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-pink-400 transition duration-300" />
              </a>
            </div>

          </div>
        </div>

        {/* Timings */}
        <div>
          <h3 className="font-semibold mb-2">Opening Hours</h3>
          <ul className="space-y-1">
            <li>Monday –: 9 AM – 7 PM</li>
            <li>Tuesday –: 9 AM – 7 PM</li>
            <li>Wednesday –: 9 AM – 7 PM</li>
            <li>Thursday –: 9 AM – 7 PM</li>
            <li>Friday –: 9 AM – 7 PM</li>
            <li>Saturday: 10 AM – 6 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Links & Button */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "About", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                className="hover:text-blue-900 transition border-b border-orange-200 pb-1"
              >
                <a href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
            <li className="pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="https://g.co/kgs/QLq569Y"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white shadow-lg outline-double text-black px-4 py-2 rounded-md hover:bg-orange-700 hover:text-white transition"
              >
                Find us on Google
              </motion.a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-orange-800 mt-10 border-t border-orange-200 pt-4">
        © {new Date().getFullYear()} Developed by- shaurya deep shukla
      </div>

    </motion.footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ logo, title, infoLink }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer overflow-hidden"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { boxShadow: '0 2px 8px rgba(0,0,0,0.1)', scale: 1 },
        hover: { boxShadow: '0 8px 20px rgba(0,0,0,0.2)', scale: 1.05 }
      }}
    >
      {/* Logo and title */}
      <div className="flex flex-col items-center space-y-4">
        <div className="text-6xl text-orange-500">{logo}</div>
        <h3 className="text-xl font-semibold text-gray-900 text-center">{title}</h3>
      </div>

      {/* Hover overlay with Know More */}
      <motion.a
        href={infoLink ? infoLink : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold rounded-xl opacity-0 pointer-events-none"
        variants={{
          rest: { opacity: 0, pointerEvents: 'none' },
          hover: { opacity: 1, pointerEvents: 'auto' }
        }}
        transition={{ duration: 0.3 }}
      >
        Know More
      </motion.a>
    </motion.div>
  );
};

export default Card;

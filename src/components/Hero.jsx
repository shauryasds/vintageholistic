import React from 'react';
import { Link } from 'react-router-dom';
import BookAppointement from './BookAppointement';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigation = ["home", "pages", "blog", "shop", "landing"];

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5359293/pexels-photo-5359293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black opacity-40 absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-30 h-full pr-4 text-white">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="text-xs">
            We are open. Learn more about our <span className="underline">COVID-19 safety protocols.</span>
          </div>
          <motion.div  
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         className="flex items-center space-x-4 text-sm" >
            <span>📞 +123 456 789</span>
            <BookAppointement />
        </motion.div>
          </div>

        {/* Logo & Navigation */}
        <motion.div
          className="text-center mt-24 stroke-current"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.nav
            className="mt-40 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ul className="flex justify-center text-sm space-x-10 uppercase tracking-widest">
              {navigation.map((na, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.2 , }}
                >
                  <Link to={`/${na}`} className="text-white text-xs hover:text-pink-400">
                    {na}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.h1
            className="text-4xl font-thin font-playfair mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sai Sanskrutic holistic center
          </motion.h1>

        </motion.div>

        

        <motion.div
  className="flex justify-center mt-24 "
  animate={{ y: [0, 40, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</motion.div>

      </div>
    </div>
  );
};

export default Hero;

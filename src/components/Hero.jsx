
import React from 'react';
import { Link } from 'react-router-dom';
import BookAppointement from './BookAppointement';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroImages = [
    'https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753193323/IMG_20250722_140941324_tbj89i.jpg',
    'https://res.cloudinary.com/dn9yo8x89/image/upload/v1753764805/WhatsApp_Image_2025-07-28_at_12.30.50_PM_f5yfdt.jpg',
    'https://res.cloudinary.com/dn9yo8x89/image/upload/v1753765337/WhatsApp_Image_2025-07-28_at_12.30.49_PM_1_sshzpa.jpg',
    'https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753591832/Screenshot_2025-07-27_at_10.19.26_AM_iea9vg.png',
    'https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753590108/WhatsApp_Image_2025-07-26_at_11.07.54_PM_tbxcf3.jpg',
    'https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753590107/WhatsApp_Image_2025-07-23_at_6.12.52_PM_juiktg.jpg',

  ];

  const navigation = ["Home", "Services", "About", "Contact"];

  const [isMediumUp, setIsMediumUp] = useState(() => window.innerWidth >= 568);

  // style={{
  //   backgroundImage:
  //     "url('https://images.pexels.com/photos/5359293/pexels-photo-5359293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  // }}
  useEffect(() => {
    const handleResize = () => setIsMediumUp(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: false }}
      navigation={false}
      className={`relative w-full ${isMediumUp ? 'h-screen' : 'h-52'} `}
    >

      {
        heroImages.map((image, index) => (

          <SwiperSlide key={index}>
            <div
              className={` w-full ${isMediumUp ? 'h-screen' : 'h-52'} bg-cover bg-center relative   object-cover`}
              style={{
                backgroundImage: `url('${image}')`,
                //  backgroundSize: 'contain',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>




              {/* Top Bar */}
              <div className="relative  sm:z-30 px-4 sm:px-8 pt-4 sm:pt-6 text-white" style={{ zIndex: 1000 }}>
                <div className="hidden sm:flex justify-between items-center text-xs sm:text-sm">
                  <div>
                    <div className="flex space-x-6 text-white text-base ">
                      <a href="https://facebook.com" style={{ zIndex: 1000 }} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF className="hover:text-pink-400 transition duration-300" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="hover:text-pink-400 transition duration-300" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="hover:text-pink-400 transition duration-300" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn className="hover:text-pink-400 transition duration-300" />
                      </a>
                    </div>

                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center space-x-4"
                  >
                    <a
                      href="tel:099569 42226"
                      className="text-white flex items-center hover:text-pink-400 transition duration-300"
                    >
                      <span className="mr-1">📞</span> +91 099569 42226
                    </a>
                    <BookAppointement />
                  </motion.div>


                </div>

                {/* Book Appointment for mobile */}
                <div className="sm:hidden relative  text-xs  ">
                  <div className='absolute -top-2 -right-4'>
                    <BookAppointement />
                  </div>
                </div>
              </div>

              {/* Main Centered Content */}
              <div className="relative h-screen z-20  flex flex-col items-center justify-center text-center  px-4">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-20 sm:mt-0"
                >
                  <div className="text-emerald-600 text-6xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="32" cy="32" r="10" fill="currentColor" />
                      <g stroke="currentColor">
                        <line x1="32" y1="2" x2="32" y2="12" />
                        <line x1="32" y1="52" x2="32" y2="62" />
                        <line x1="2" y1="32" x2="12" y2="32" />
                        <line x1="52" y1="32" x2="62" y2="32" />
                        <line x1="10" y1="10" x2="18" y2="18" />
                        <line x1="46" y1="46" x2="54" y2="54" />
                        <line x1="10" y1="54" x2="18" y2="46" />
                        <line x1="46" y1="18" x2="54" y2="10" />
                      </g>
                    </svg>



                  </div>
                  <h1 className="text-white text-2xl sm:text-5xl font-playfair font-thin mb-6">
                    Vintage Holistic Treatment & Training Center
                  </h1>

                  <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <ul className=" hidden sm:flex flex-wrap justify-center gap-4 sm:gap-8 uppercase tracking-widest">
                      {navigation.map((na, index) => (
                        <motion.li key={index} whileHover={{ scale: 1.2 }}>
                          <Link
                            to={`/${na === 'Home' ? '' : na.toLowerCase()}`}

                            className="text-white text-xs sm:text-xs hover:text-pink-400"
                          >
                            {na}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.nav>
                </motion.div>

                {/* Scroll Icon */}
                <motion.div
                  className="mt-12 sm:mt-20"
                  animate={{ y: [0, 40, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 sm:h-14 sm:w-14 text-white"
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
          </SwiperSlide>
        ))
      }
    </Swiper >
  );
};

export default Hero;

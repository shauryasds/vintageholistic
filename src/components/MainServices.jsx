import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Map titles to actual service links from your full services list
const serviceLinks = {
  "Original Manual Acupressure ": "/services/acupressure",
  "Vastu": "/services/vastu",
  "Astrology": "/services/astrology",
  "Tcm & Ayurvedic Magnet Treatment": "/services/tcm-ayurvedic-magnet-treatment",
  "Reki Healing ": "/services/reki",


  "Tarot Card Reading": "/services/card-reading",



  "Usui Reiki Level 1": "/services/reki",
  "Usui Reiki Level 2": "/services/reki",
  "Usui Reiki Level 3A": "/services/reki",
  "Usui Reiki Level 3B": "/services/reki",
};

const services = Object.keys(serviceLinks).slice(0, 8); // pick first 8

const MainServices = () => {
  return (
    <div className="bg-gradient-to-b from-white to-rose-50  py-16 px-4  md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-rose-700 mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-rose-600 text-lg">
          Explore some of the core healing services and spiritual courses we offer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((title, index) => (
          <motion.div
            key={index}
            className="bg-white border border-rose-100 text-rose-900 rounded-xl shadow hover:shadow-lg p-6 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link to={serviceLinks[title]} target={serviceLinks[title].startsWith("http") ? "_blank" : "_self"}>
              <h3 className="text-lg font-semibold hover:text-rose-600 transition-colors duration-200">
                {title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/services"
          className="inline-block text-white bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-full text-lg transition"
        >
          View More →
        </Link>
      </div>
    </div>
  );
};

export default MainServices;

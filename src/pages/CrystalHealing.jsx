import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  "Introduction to Crystal Healing",
  "Benefits of Crystal Healing",
  "Introduction to various Crystals",
  "Cleansing of Crystals",
  "Energizing of Crystals",
  "Programming of Crystals",
  "How to make a Crystal layout",
  "Preparation of the room for crystal healing",
  "Three Crystal healing techniques",
  "Dowsing by Pendulum",
  "How to check the Chakras using Crystal Pendulum",
  "Different crystals used for different Chakras",
  "Use of crystal bracelets",
  "Knowledge on crystals for Abundance and prosperity"
];

const CrystalHealing = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-emerald-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-8 pt-12 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Crystal Healing Course
              <span className="text-emerald-600">🌿</span>
            </h1>

            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vintage Holistic Institute conducts comprehensive Crystal Healing courses in Lucknow. Learn the ancient art of healing with crystals and their powerful energetic properties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Topics</h3>
                <ul className="space-y-2">
                  {topics.map((topic, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="text-emerald-500 mr-2">▹</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Details</h3>
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Duration:</h4>
                    <p className="text-gray-700">Two days × 3 hours each day</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    {/* <h4 className="text-lg font-medium text-gray-900">Course Fees:</h4>
                    <p className="text-emerald-600 font-bold">₹11,000 (including certification and materials)</p> */}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Crystal Set (Optional):</h4>
                    <p className="text-gray-700">₹5,000 includes:</p>
                    <ul className="list-disc list-inside  ml-4 mt-2 space-y-2 text-gray-700">
                      <li>49 tumbled crystals</li>
                      <li>2 clear quartz crystal towers</li>
                      <li>1 smoky quartz crystal tower</li>
                      <li>7 crystal pencils</li>
                      <li>1 pendulum</li>
                    </ul>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Pre-requisite:</h4>
                    <p className="text-gray-700">Completion of Reiki Level 1 and 2</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-emerald-50 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Register for the Course
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Call us to find out the next schedule or register for a 1:1 class.
              </p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20the%20Crystal%20Healing%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enquire on WhatsApp
                </motion.a>
                <motion.a
                  href="tel:+919956942226"
                  className="inline-block bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CrystalHealing;

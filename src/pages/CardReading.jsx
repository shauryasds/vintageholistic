import React from 'react';
import { motion } from 'framer-motion';

const CardReading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-yellow-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-8 pt-12 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Tarot Card Reading Course
              <span className="text-yellow-500">🔮</span>
            </h1>

            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vintage Holistic Institute conducts specialized sessions and classes for Tarot Card Reading. Learn the ancient art of interpreting messages from the higher self using symbolic Tarot archetypes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-yellow-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Highlights</h3>
                <ul className="space-y-2 text-gray-700">

                  <li>▹ 🌟 Tarot Card Reading – Unlock the Wisdom Within</li>
                  <li>▹ Discover clarity, direction, and peace with personalized tarot readings</li>
                  <li>▹ Receive spiritual insights on love, career, relationships, and personal growth</li>
                  <li>▹ Tarot is not about predicting fate—it’s about empowering your choices</li>
                  <li>▹ Clarity in Confusion: Get clear answers to life’s toughest questions</li>
                  <li>▹ Emotional Healing: Release past pain and understand inner blocks</li>
                  <li>▹ Future Insights: Know what challenges or opportunities lie ahead</li>
                  <li>▹ Empowered Decisions: Make confident, soul-aligned choices</li>
                  <li>▹ Duration: 60 minutes per session</li>
                  <li>▹ Mode: In-person or Phone Call</li>
                  <li>▹ Areas Covered: Health, Relationships, Finances, Career, Education</li>
                  <li>▹ Course Option Available: Includes Tarot deck, printed material, and live practice</li>
                  <li>▹ Conducted by Ms. Tanisha Gaur </li>
                  <li>▹ Small batch classes (max 3 students) for deep personal attention</li>

                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Reading Sessions</h3>
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Duration:</h4>
                    <p className="text-gray-700">60 minutes per session</p>
                  </div>
                  {/* <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Cost:</h4>
                    <p className="text-yellow-600 font-bold">₹2,000</p>
                  </div> */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Mode:</h4>
                    <p className="text-gray-700">In-person or over phone</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">Topics Covered:</h4>
                    <p className="text-gray-700">Health, Relationships, Finances, Career, Education</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-yellow-100 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Book a Session or Register for the Course
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Call us to find out the next schedule or register for an individual session.
              </p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20the%20Tarot%20Card%20Reading%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enquire on WhatsApp
                </motion.a>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardReading;

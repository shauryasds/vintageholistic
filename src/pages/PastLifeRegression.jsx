import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  'Release of fears and phobias that have no clear origin in the present life',
  'Healing physical symptoms of diseases that are linked to past life trauma',
  'Gain clarity on current life challenges and experiences',
  'Improve relationships by understanding karmic connections and healing past life bonds',
  'Understanding the purpose of life through insights gained from past life experiences',
  'Spiritual growth through deeper understanding of reincarnation and soul evolution',
  'Healing and ancestral trauma by uncovering past life connections to ancestors',
  'Healing karmic debt and breaking free from karmic patterns',
  'Understanding talents that you carry from past lifetimes',
  'Integration of lessons from past life to live a more balanced life with clarity',
];

const PastLifeRegression = () => {
  return (
    <div className=" mt-20 min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center">
            Past Life Regression (PLR)
          </h1>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Past Life Regression (PLR) is a healing therapy that takes an individual back to a previous life through hypnosis to heal current life issues. The sessions help you understand the lessons your soul has brought forward and the deeper purpose of your present life.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Past Life Regression</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our PLR Sessions</h2>
            <div className="bg-yellow-50 p-6 rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Two-Day One-to-One Session</h3>
                <p className="text-gray-700 mb-4">
                  Each session is approximately 2 hours long, conducted individually for deep personal healing.
                </p>
                <h4 className="font-medium text-lg mb-2">Day 1:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Initial consultation and understanding of current life issues</li>
                  <li>Guided deep relaxation techniques</li>
                  <li>Aura cleansing to remove negative energy</li>
                  <li>Age regression to address trauma from childhood to present</li>
                  <li>Healing and affirmation to release emotional/energetic blockages</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2">Day 2:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Past life regression through hypnosis</li>
                  <li>Exploring subconscious memories in scenes, emotions, or images</li>
                  <li>Energy exchange with past life characters for closure</li>
                  <li>Integration of lessons and healing</li>
                  <li>Understanding your soul’s purpose in this life</li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">About the Therapist</h2>
              <p className="text-gray-700">
                Dr. Neelam Kewlani, the founder of Vintage Holistic Centre, has conducted over 2,000 PLR sessions. With her deep expertise in healing fear, phobias, relationships, and emotional clarity, she provides a safe and transformative journey into your past lives.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Book Your PLR Session</h2>
            <p className="text-gray-700 text-center mb-6">
              Begin your journey to self-discovery and healing through past life regression.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20booking%20a%20Past%20Life%20Regression%20session"
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919956942226"
                className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919956942226"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        📱
      </a>
    </div>
  );
};

export default PastLifeRegression;

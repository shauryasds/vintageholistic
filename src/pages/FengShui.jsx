import React from 'react';
import { motion } from 'framer-motion';

const courseTopics = [
  {
    title: 'Introduction to Feng Shui',
    topics: [
      'History of Feng Shui',
      'Philosophy of Luck',
      'Chi',
      'Poison Arrows',
      'Ways of Deflecting a Poison Arrow',
      'Yin and Yang'
    ]
  },
  {
    title: 'Advanced Concepts',
    topics: [
      'The Form School',
      'Basic Compass Formula',
      'House Formula',
      'KUA Formula (PA-CHAI)',
      'The Four Pillars of Destiny',
      'Empty Lines – Dangerous Alignments'
    ]
  },
  {
    title: 'Practical Applications',
    topics: [
      'Practical use of the compass',
      'Methods of dividing property into sectors',
      'Cycle of Elements',
      'Room Locations',
      'Marriage compatibility',
      'Correction techniques'
    ]
  }
];

const symbols = [
  'Laughing Buddha',
  'Three Legged Frog',
  'Dragon',
  'Phoenix',
  'Crystal',
  'Wind Chimes',
  'Wealth Vase',
  'Double Fish',
  'Dragon Turtle'
];

const FengShui = () => {
  return (
    <div className="min-h-screen mt-20 bg-yellow-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Feng Shui Consultation & Training</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-lg mb-6">
              Feng Shui is an ancient Chinese art of arranging spaces and balancing energies to promote health, prosperity, and well-being. Learn how to harness the power of Chi to create harmony in your environment.
            </p>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Professional Course</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Duration:</strong> 2 days (10 AM to 1 PM)</li>
                    <li><strong>Fee:</strong> ₹21,000</li>
                    <li><strong>Mode:</strong> In-person/Online</li>
                    <li><strong>Certificate:</strong> Yes</li>
                    <li><strong>Materials:</strong> Included</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Complete Feng Shui principles</li>
                    <li>Space assessment techniques</li>
                    <li>Energy flow optimization</li>
                    <li>Practical applications</li>
                    <li>Business Feng Shui</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Course Curriculum</h2>
              <div className="space-y-6">
                {courseTopics.map((section) => (
                  <div key={section.title} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {section.topics.map((topic, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-accent mr-2">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Consultation Services</h2>
              <p className="text-gray-700 mb-4">
                We offer professional Feng Shui consultation for homes and businesses. Our expert will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Analyze your space's energy flow</li>
                <li>Identify problem areas</li>
                <li>Recommend optimal furniture placement</li>
                <li>Suggest appropriate Feng Shui cures</li>
                <li>Create a personalized action plan</li>
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Common Feng Shui Symbols</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {symbols.map((symbol, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-accent mr-2">✦</span>
                      <span className="text-gray-700">{symbol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20the%20Egyptian%20Card%20Reading%20course"
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
        </motion.div>
      </div>

      {/* WhatsApp Float Button */}
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

export default FengShui;
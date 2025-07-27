import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ReikiCourses = [
  {
    level: "Level 1",
    duration: "Five hours",
    fees: "5,000",
    topics: [
      "History of Reiki",
      "Concept of Reiki",
      "Principles of Reiki",
      "What is attunement?",
      "How to do 21-day cleansing process",
      "Auras and Chakras",
      "Seven Main Chakras",
      "Whom to heal with Reiki",
      "How to heal somebody",
      "General diseases treated with Reiki",
      "Benefits of Reiki",
      "Attunement",
      "Practical session (One hour)"
    ]
  },
  {
    level: "Level 2",
    duration: "Five hours",
    fees: "5,000",
    topics: [
      "Three symbols of Reiki 2nd degree",
      "Distant Healing symbols",
      "Emotional and mental healing symbols",
      "The power symbol",
      "Hands on Reiki treatment with symbols",
      "Distant healing",
      "Programming Reiki",
      "Protective pyramid",
      "Use of colour in healing"
    ]
  },
  {
    level: "Level 3A",
    duration: "Four hours",
    fees: "5,000",
    topics: [
      "The Usui master symbol",
      "The Reiki grid",
      "Psychic surgery",
      "Reiki meditation",
      "How to become a powerful healer",
      "Five pillars of refining your energy body",
      "Antahkarana symbol"
    ]
  },
  {
    level: "Level 3B (Mastership)",
    duration: "Six hours (9am - 3pm)",
    fees: "15,000",
    topics: [
      "Reiki lineage",
      "Reiki Meditation",
      "Clairvoyant comments on the Reiki attunement process",
      "How to do Reiki attunement process for 1st degree",
      "How to do Reiki attunement process for 2nd degree",
      "Distant attunement",
      "Healing Attunement",
      "Practicing attunement",
      "Attuning yourself",
      "Benefits of reiki",
      "How to strengthen the Aura",
      "Characteristic related to each colour in the Aura",
      "Emotions connected with Parts of the body",
      "How to take Reiki classes for 1st and 2nd level",
      "Attunement for Mastership"
    ]
  },
  {
    level: "Grand Mastership",
    duration: "Five hours (10am - 3pm)",
    fees: "10,000",
    topics: [
      "Revision of all 8 symbols",
      "Revision of Attunement process of Level 1 & 2",
      "How to do Reiki Attunement for Level 3A",
      "How to do Reiki Attunement for Level 3B",
      "How to do Reiki Attunement for Grand Mastership Level",
      "Grand Mastership attunement",
      "Practical session (One hour)"
    ]
  },
  {
    level: "Karuna Reiki",
    duration: "Varies",
    fees: "Varies",
    topics: [
      "Introduction to Karuna Reiki",
      "History and origins of Karuna Reiki",
      "Karuna Reiki symbols and their meanings",
      "How to use Karuna Reiki symbols in healing",
      "Advanced healing techniques",
      "Practical session"
    ]
  }
];


const Reiki = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 mt-20 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-8 pt-12 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Reiki Healing & Training
              <span className="text-emerald-600">🌿</span>
            </h1>

            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We undertake courses in all levels of Reiki. The courses are conducted by Dr. Neelam, a trained Reiki Grand Master with over 18 years of experience in Lucknow. She has successfully trained thousands of students in various levels of Reiki.
              </p>
            </div>

            <div className="space-y-8">
              {ReikiCourses.map((course, index) => (
                <motion.div
                  key={course.level}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Reiki {course.level}</h3>
                    <span className="text-emerald-600 text-2xl">✨</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Course Topics:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {course.topics.map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <span className="text-emerald-500 mr-2">▹</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg h-56">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Duration:</span>
                          <span className="font-medium text-gray-900">{course.duration}</span>
                        </div>
                        {/* <div className="flex items-center justify-between">
                          <span className="text-gray-700">Fees:</span>
                          <span className="text-emerald-600 font-bold">₹{course.fees}</span>
                        </div> */}
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Class Type:</span>
                          <span className="text-gray-900">
                            Online & Physical classroom sessions (Individual/Group)
                          </span>
                        </div>
                      </div>

                      <motion.a
                        href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20Reiki%20courses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full mt-6 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enquire Now →
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-emerald-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Contact Information
              </h2>
              <div className="text-center space-y-2 text-gray-700">
                <p>📞 Phone: +919956942226</p>
                <a href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20the%Reki%20Healing%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enquire on WhatsApp
                </a>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reiki;

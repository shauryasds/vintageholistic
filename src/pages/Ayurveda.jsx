import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    name: 'Basics of Ayurveda Course',
    duration: '5 days × 2 hours/day',
    fee: '₹10,000',
    description: 'Ideal for beginners to understand core Ayurvedic principles, Tridoshas, Agni, Prakruti, daily and seasonal regimens, and common food recommendations.'
  },
  {
    name: 'Course in Ayurveda Herbs & Plants',
    duration: '7 days × 2 hours/day',
    fee: '₹15,000',
    description: 'Learn about 50 medicinal plants and herbs, their chemical composition, properties, parts used, dosages, and therapeutic applications.'
  },
  {
    name: 'Certificate Course in Rejuvenation Panchakarma Therapies',
    duration: '7 days × 2 hours/day',
    fee: '₹15,000',
    description: 'Covers both theory and hands-on practice for therapies like Elakizhi, Navarakizhi, Shirodhara, Kati Vasti, and more.'
  },
  {
    name: 'Ayurveda Massage Course',
    duration: '5 days × 2 hours/day',
    fee: '₹10,000',
    description: 'Covers Abhyanga theory, oils used, contraindications, and practical training in full-body massage techniques.'
  }
];

const Ayurveda = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-amber-50 to-lime-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-8 pt-12 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Ayurveda Courses
              <span className="text-amber-500">🌿</span>
            </h1>

            <p className="text-lg text-gray-700 mb-10 text-center">
              Learn the timeless science of Ayurveda under the guidance of Dr. Neelam Kewlani at Sanskruti Holistic Center. Explore foundational principles, herbal wisdom, massage therapies, and Panchakarma techniques.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-yellow-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{course.name}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="text-gray-600 text-sm">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Fees:</strong> {course.fee}</p>
                  </div>
                  <motion.a
                    href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20Ayurveda%20courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enquire Now →
                  </motion.a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-lime-100 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Book a Seat
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                All courses are offered in small batches or one-on-one. Both online and physical sessions available.
              </p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20Ayurveda%20course%20registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Us
                </motion.a>
                <motion.a
                  href="tel:+919886332684"
                  className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919886332684"
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

export default Ayurveda;

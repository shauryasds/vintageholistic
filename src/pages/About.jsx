import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founderImage = "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg";

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-amber-50 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-8 pt-12 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
              About <span className="text-yellow-600">Sanskruti Holistic Center</span>
            </h1>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
              Since 2004, Sanskruti Holistic Center in Bangalore has been offering best-in-class holistic and alternative therapies. Our mission is to inspire healthy, conscious living through Ayurveda and other natural healing modalities.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
              <motion.img
                src={founderImage}
                alt="Dr. Neelam Kewlani"
                className="rounded-xl shadow-md w-full h-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dr. Neelam Kewlani</h2>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Neelam Kewlani is the founder and head of Sanskruti Holistic Ayurveda Center. She holds an M.D. in Dravyaguna and a B.A.M.S., and has been practicing Ayurveda, Panchakarma, and holistic healing for over 18 years. She is deeply committed to providing personalized healing solutions through a blend of ancient wisdom and modern therapeutic understanding.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Over 18 years of experience in holistic healing</li>
                <li>Comprehensive range of alternative healing modalities</li>
                <li>Personalized, patient-centric treatment plans</li>
                <li>Highly qualified and certified practitioners</li>
                <li>Integration of traditional Ayurveda with modern techniques</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Locations</h3>
              <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                <div className="bg-yellow-50 rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">HSR Layout</h4>
                  <p>
                    #1770, 1st Cross, HSR Layout Sector 1<br />
                    Bangalore - 560102<br />
                    Landmark: Next to HSR RTO Office
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Marathahalli</h4>
                  <p>
                    #201, Harsha's Nest, Srinivas Reddy Layout<br />
                    AECS Layout, Bangalore - 560037<br />
                    Landmark: Asha Tiffins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

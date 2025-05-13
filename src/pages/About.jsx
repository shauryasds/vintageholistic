import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founderImage = "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg";

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="px-8 py-12 md:px-14 md:py-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
              About <span className="text-yellow-600">Sanskruti Holistic Center</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
              Founded in 2004, Sanskruti Holistic Center in Bangalore is a sanctuary for mind-body-soul healing. Our goal is to empower holistic, conscious living through Ayurveda, Reiki, and energy-based modalities.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <motion.img
                src={founderImage}
                alt="Dr. Neelam Kewlani"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. Neelam Kewlani</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Founder of Sai Sanskruti Holistic Center, Dr. Neelam Kewlani brings 21+ years of Ayurvedic and holistic healing expertise. She integrates ancient wisdom with energy work and therapeutic practices to bring deep, lasting transformation to her clients.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Her specializations include Panchakarma, Reiki, Crystal Healing, Past Life Regression, and Tarot & Angel Card Reading.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualifications</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                  <li>B.A.M.S, M.D. Ayurveda – State Rank Holder (RGUHS)</li>
                  <li>Reiki Master Trainer – Usui Reiki Lineage</li>
                  <li>Certified Hypnotherapist – California Hypnotherapy Institute (EKA)</li>
                  <li>Certified Tarot, Angel & Egyptian Card Reader & Trainer</li>
                  <li>Life Between Lives Regression – Trained under Andy Tomlinson</li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expertise</h3>
              <ul className="grid md:grid-cols-2 gap-x-12 list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Ayurvedic treatments for chronic ailments</li>
                <li>Panchakarma detox therapies</li>
                <li>Reiki Healing & Certified Courses</li>
                <li>Past Life & Age Regression Therapy</li>
                <li>Tarot, Angel & Egyptian Card Readings</li>
                <li>Aura cleansing & energy balancing</li>
                <li>Spiritual Counseling & Training</li>
              </ul>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Philosophy</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dr. Neelam believes true healing begins at the root—addressing emotional, physical, and spiritual causes. Her warm, intuitive approach fosters trust and self-discovery, helping clients experience deep healing, inner clarity, and balanced living.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Locations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-yellow-200 rounded-xl p-6 shadow hover:shadow-md transition">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">HSR Layout</h4>
                  <p className="text-gray-700">
                    #1770, 1st Cross, Sector 1, HSR Layout<br />
                    Bangalore - 560102<br />
                    Landmark: Next to HSR RTO Office
                  </p>
                </div>
                <div className="bg-white border border-yellow-200 rounded-xl p-6 shadow hover:shadow-md transition">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">Marathahalli</h4>
                  <p className="text-gray-700">
                    #201, Harsha's Nest, Srinivas Reddy Layout<br />
                    AECS Layout, Bangalore - 560037<br />
                    Landmark: Asha Tiffins
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-800 mt-14">
              <h3 className="text-xl font-semibold mb-2">Contact Dr. Neelam</h3>
              <p className="text-lg">📞 +91-9886332684 / +91-7338631681</p>
              <p className="text-lg">📧 sanskrutiholistic@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

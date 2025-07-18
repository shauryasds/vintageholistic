import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founderImage = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg";

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
              Since its inception in Bangalore, Sanskruti Holistic Center has been a place of transformation through ancient and energy-based healing. Led by a vision to heal through natural sciences, we integrate therapies that nurture body, mind, and spirit.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <motion.img
                src={founderImage}
                alt="Dr. B. Prashaad"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. B. Prashaad</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Founder and Chief Healer at Sanskruti Holistic Center, Dr. B. Prashaad blends naturopathy, pharmacology, and multidimensional energy healing. With deep experience and compassion, he guides individuals through powerful internal transformation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  His work spans reflexology, reiki, 5D healing, detox, and inner alignment practices — designed to restore well-being from the inside out.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualifications</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                  <li>Acu. (M.D)</li>
                  <li>N.M.D – Doctor of Naturopathic Medicine</li>
                  <li>D.N.Y.S – Diploma in Naturopathy & Yogic Sciences</li>
                  <li>Degree in Pharmacology</li>
                  <li>Reiki Grandmaster</li>
                  <li>Specialist in Reflexology & 5-Dimensional Reiki Healing</li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expertise</h3>
              <ul className="grid md:grid-cols-2 gap-x-12 list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Advanced Reflexology</li>
                <li>5D Reiki Healing & Energy Attunement</li>
                <li>Detox Therapies & Naturopathic Cleansing</li>
                <li>Chakra Alignment & Aura Balancing</li>
                <li>Reiki Courses & Attunements</li>
                <li>Emotional & Spiritual Counseling</li>
                <li>Multidimensional Healing & Intuitive Therapy</li>
              </ul>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Philosophy</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dr. Prashaad believes healing must begin at the energetic level — where thoughts, emotions, and imbalances originate. His holistic philosophy combines modern insight with ancient healing tools, allowing each individual to step into self-healing and empowerment.
              </p>
            </div>



            <div className="text-center text-gray-800 mt-14">
              <h3 className="text-xl font-semibold mb-2">Contact Dr. B. Prashaad</h3>
              <p className="text-lg">📞 099569 42226</p>
              <p className="text-lg">📧 vintageholistic@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

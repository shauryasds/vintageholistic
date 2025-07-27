import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founderImage = "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/c_fill,ar_3:4,g_auto/v1753193310/IMG-20250716-WA0005_vlniwi.jpg";
  const juniorAssistants = [
    {
      role: "Assistant Acupressure Therapist",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753194783/Screenshot_2025-07-22_at_8.02.28_PM_psvmph.png",
    },
    {
      role: "Reiki Assistant",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753193323/IMG_20250722_140941324_tbj89i.jpg",
    },
    // Add more assistants as needed
  ];

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
              About <span className="text-yellow-600">Vintage Holistic Center</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
              Since its inception in Lucknow, Vintage Holistic Center has been a place of transformation through ancient and energy-based healing. Led by a vision to heal through natural sciences, we integrate therapies that nurture body, mind, and spirit.
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
                  Founder and Chief Healer at Vintage Holistic Center, Dr. B. Prashaad blends naturopathy, pharmacology, and multidimensional energy healing. With deep experience and compassion, he guides individuals through powerful internal transformation.
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

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Senior Assistant</h3>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-md">
                <img
                  src="https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/v1753193346/IMG-20250716-WA0011_xphyz3.jpg"
                  alt="Senior Assistant"
                  className="w-full md:w-1/3 h-72 object-cover rounded-lg"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Mr. kapil dev</h4>
                  <p className="text-gray-700 text-lg">Senior Assistant Acupressure therapist</p>
                  <p className="text-gray-600 mt-2 text-base leading-relaxed">
                    With hands-on training under Dr. Prashaad, Mr. Kapil Dev brings compassionate touch and energy balance expertise to every healing session.
                  </p>
                </div>
              </div>
            </div>




            <div className="text-center text-gray-800 mt-14">
              <h3 className="text-xl font-semibold mb-2">Contact Dr. B. Prashaad</h3>
              <p className="text-lg">📞 919956942226</p>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


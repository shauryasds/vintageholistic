import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-24 px-6 md:px-12 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-pink-700 mb-10 leading-snug">
          Why Choose <span className="text-gray-900">Vintage Holistic?</span>
        </h1>

        <p className="text-center text-lg md:text-xl text-gray-700 mb-14 max-w-3xl mx-auto leading-relaxed">
          At Vintage Holistic (Acupressure, Vastu & Reiki Treatment & Training Institute), we bring together time-tested wisdom and modern healing techniques to create a deeply transformational experience. Whether you’re here for healing or learning, we are committed to your energetic and spiritual growth.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 text-gray-800 text-lg leading-relaxed">
          <div className="bg-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-pink-700 mb-2">🌿 Holistic Healing Approach</h3>
            <p>
              We go beyond symptoms — focusing on the root cause. Our therapies align mind, body & spirit for complete well-being.
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-pink-700 mb-2">💫 Certified Reiki Grandmasters</h3>
            <p>
              Our team is led by certified Reiki Grandmasters and practitioners skilled in 5D Healing, Crystal Therapy, and Attunement.
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-pink-700 mb-2">📚 Impactfull Trainings</h3>
            <p>
              We offer courses in Acupressure, Ayurveda, Reiki, Vastu, and more to empower future healers.
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-pink-700 mb-2">🔮 Intuitive & Personalized Sessions</h3>
            <p>
              Each session is designed intuitively to meet your energetic needs — including chakra cleansing, aura alignment, and spiritual guidance.
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-pink-700 mb-2">🌍 Trusted by Thousands</h3>
            <p>
              We’ve helped over 500+ clients and students across India transform their lives through ancient science and spiritual practices.
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-pink-700 mb-2">🪔 Blend of East & West</h3>
            <p>
              Our methods bridge traditional Ayurveda and Vastu with modern psychology and metaphysical energy work.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Still Wondering If It's Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you're looking to heal yourself or become a certified practitioner, we're here to guide you on your journey.
          </p>
          <a
            href="https://wa.me/919956942226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-transform hover:scale-105"
          >
            💬 Speak to Our Healers on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;

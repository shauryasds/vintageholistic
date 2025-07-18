import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
const whatsappLink = "https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20this%20course/service";

const services = {
  courses: [
    { title: "Original Manual Acupressure ", link: "/services/acupressure" },
    { title: "Vastu", link: "/services/vastu" },
    { title: "Astrology", link: "/services/astrology" },
    { title: "Tcm & Ayurvedic Magnet Treatment", link: "/services/tcm-ayurvedic-magnet-treatment" },
    { title: "Reki Healing ", link: "/services/reki" },


    { title: "Tarot Card Reading", link: "/services/card-reading" },




    { title: "Usui Reiki Level 1", link: "/services/reki" },
    { title: "Usui Reiki Level 2", link: "/services/reki" },
    { title: "Usui Reiki Level 3A", link: "/services/reki" },
    { title: "Usui Reiki Level 3B", link: "/services/reki" },
    { title: "Usui Reiki Grand Mastership Level", link: "/services/reki" }, // typo corrected
    { title: "Karuna Reiki", link: "/services/reki" },
    // { title: "Crystal Healing", link: "/services/crystal-healing" },
    { title: "Egyptian Card Reading", link: "/services/card-reading" },
    { title: "Rider Waite Tarot Card Reading", link: "/services/card-reading" },
    { title: "Angel Card Reading", link: "/services/card-reading" },
    { title: "Basics of Ayurveda", link: "/services/ayurveda" },
    // { title: "Beauty Course in Ayurveda", link: "/services/ayurveda" },
    // { title: "Basic Course in FengShui", link: "/services/fengshui" },


  ],
  therapies: [
    { title: "Ayurveda Consultation", link: "/services/ayurveda" },
    { title: "Tarot, Egyptian and Angel Card Reading", link: "/services/card-reading" },
    { title: "Reki Course", link: whatsappLink },
    { title: "Complete Vastu Course", link: whatsappLink },
    { title: "Basic and Advance course in Meditation", link: whatsappLink },
    { title: "Angel Therapy Course", link: whatsappLink },
    { title: "Aura and Chakra Healing", link: whatsappLink },
    // { title: "Aura Reading Session", link: whatsappLink },
    // { title: "Feng Shui Consultation", link: "/services/fengshui" },
    // { title: "Past Life Regression Session", link: "/services/past-life-regression" },
    // { title: "Life between Lives Session", link: whatsappLink },
  ],
};


const Card = ({ title, infoLink }) => {
  return (
    <motion.div
      className="bg-white hover:cursor-pointer hover:bg-gradient-to-t hover:from-pink-50 hover:bg-pink-100  backdrop-blur-lg shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
      whileHover={{ y: -5, scale: 1.02 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <Link
        to={infoLink}
        className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
      >
        Learn More →
      </Link>
    </motion.div>
  );
};

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif font-extrabold text-center text-gray-900 mb-16">
          <span className="text-emerald-600 text-6xl">🌿</span>
          <span className="mx-4">Sanskruti Holistic Center</span>
          <span className="text-emerald-600 text-6xl">🌿</span>
        </h1>

        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            Treatments & Healing Consultation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.courses.map(({ title, link }, idx) => (
              <Card key={idx} title={title} infoLink={link} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
            Get Training & Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.therapies.map(({ title, link }, idx) => (
              <Card key={idx} title={title} infoLink={link} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;

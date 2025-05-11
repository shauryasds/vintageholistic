import React from 'react';
// import { FaLeaf, FaSpa, FaStar, FaGem } from 'react-icons/fa';
import Card from '../components/Card';

const services = {
  courses: [
    { title: "Usui Reiki Level 1", logo: <FaLeaf />, link: "/services/reiki-level-1" },
    { title: "Usui Reiki Level 2", logo: <FaLeaf />, link: "/services/reiki-level-2" },
    { title: "Usui Reiki Level 3A", logo: <FaLeaf />, link: "/services/reiki-level-3a" },
    { title: "Usui Reiki Level 3B", logo: <FaLeaf />, link: "/services/reiki-level-3b" },
    { title: "Usui Reiki Grand Mastership Level", logo: <FaStar />, link: "/services/reiki-mastership" },
    { title: "Karuna Reiki", logo: "🌿", link: "/services/karuna-reiki" },
    { title: "Crystal Healing", logo: <FaGem />, link: "/services/crystal-healing" },
    { title: "Egyptian Card Reading", logo: "🎴", link: "/services/egyptian-card-reading" },
    { title: "Rider Waite Tarot Card Reading", logo: "🃏", link: "/services/tarot-card-reading" },
    { title: "Angel Card Reading", logo: "👼", link: "/services/angel-card-reading" },
    { title: "Basic and Advance course in Meditation", logo: <FaSpa />, link: "/services/meditation" },
    { title: "Angel Therapy Course", logo: "👼", link: "/services/angel-therapy" },
    { title: "Aura and Chakra Healing", logo: <FaSpa />, link: "/services/aura-chakra" },
    { title: "Basics of Ayurveda", logo: "🌿", link: "/services/ayurveda-basics" },
    { title: "Beauty Course in Ayurveda", logo: "🌿", link: "/services/ayurveda-beauty" },
    { title: "Basic Course in FengShui", logo: "🧭", link: "/services/fengshui" },
  ],
  therapies: [
    { title: "Ayurveda Consultation", logo: "🌿", link: "/therapies/ayurveda-consultation" },
    { title: "Tarot, Egyptian and Angel Card Reading", logo: "🃏", link: "/therapies/card-reading" },
    { title: "Aura Reading Session", logo: <FaSpa />, link: "/therapies/aura-reading" },
    { title: "Feng Shui Consultation", logo: "🧭", link: "/therapies/fengshui-consultation" },
    { title: "Past Life Regression Session", logo: "⏳", link: "/therapies/past-life-regression" },
    { title: "Life between Lives Session", logo: "🌟", link: "/therapies/life-between-lives" },
  ],
};

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-serif font-extrabold text-center text-gray-900 mb-12 flex items-center justify-center space-x-3">
        <span className="text-orange-600 text-6xl">🌿</span>
        <span>Sanskruti Holistic Center</span>
        <span className="text-orange-600 text-6xl">🌿</span>
      </h1>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-4xl font-serif font-bold text-center mb-10 text-gray-900">
          Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.courses.map(({ title, logo, link }, idx) => (
            <Card key={idx} logo={logo} title={title} infoLink={link} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-6xl">
        <h2 className="text-4xl font-serif font-bold text-center mb-10 text-gray-900">
          Therapies & Consultation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.therapies.map(({ title, logo, link }, idx) => (
            <Card key={idx} logo={logo} title={title} infoLink={link} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;


import React from 'react';
import { motion } from 'framer-motion';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const LearnMoreAboutHolisticWellness = () => {
  const benefits = [
    {
      text: "Inner peace through guided yoga and mindfulness practices",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/a_-90/v1753193368/IMG-20250716-WA0008_r2rfxq.jpg", // girl doing yoga
    },
    {
      text: "Personalized Ayurvedic therapies for holistic healing",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753193342/IMG-20250716-WA0006_rfkrea.jpg", // healing massage
    },
    {
      text: "Restore balance and energy through nature-inspired wellness",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/a_-90/v1753193343/IMG-20250716-WA0007_t4k90k.jpg", // serene wellness
    },
    {
      text: "Authentic Ayurvedic expertise rooted in tradition",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753193277/IMG-20250722-WA0015_weizo7.jpg", // herbal and traditional
    },
    {
      text: "Healing at your convenience with online consultations",
      image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753193278/IMG-20250722-WA0016_bgwgqx.jpg", // laptop consultation
    },
  ];


  return (
    <div className="py-20 px-4 mt-12 md:px-8 max-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-amber-900 mb-4">
          Why US?
        </h2>
        <p className="text-amber-800 text-lg">
          Discover the unique benefits that set us apart.
        </p>
      </motion.div>

      <div className="max-w-7xl mt-12 mx-auto">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
        >
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.02, rotate: [0, 1, -1, 0] }}
                transition={{ duration: 0.4 }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                style={{
                  backgroundImage: `url(${benefit.image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',

                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-lg font-medium text-center leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LearnMoreAboutHolisticWellness;

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
          image: "https://images.pexels.com/photos/6932022/pexels-photo-6932022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // girl doing yoga
        },
        {
          text: "Personalized Ayurvedic therapies for holistic healing",
          image: "https://images.pexels.com/photos/8964948/pexels-photo-8964948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // healing massage
        },
        {
          text: "Restore balance and energy through nature-inspired wellness",
          image: "https://images.pexels.com/photos/8964948/pexels-photo-8964948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // serene wellness
        },
        {
          text: "Authentic Ayurvedic expertise rooted in tradition",
          image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // herbal and traditional
        },
        {
          text: "Healing at your convenience with online consultations",
          image: "https://images.pexels.com/photos/9031632/pexels-photo-9031632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // laptop consultation
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
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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

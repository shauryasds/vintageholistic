import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg",
    title: "Ancient Wellness, Modern Science",
    subtitle: "Experience holistic healing at Sanskruti Center"
  },
  {
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    title: "Transform Your Life",
    subtitle: "Traditional healing meets contemporary wellness"
  },
  {
    image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
    title: "Holistic Healing Journey",
    subtitle: "Your path to complete wellness begins here"
  }
];

const offerings = [
  {
    title: 'Ayurveda',
    description: 'Ancient healing wisdom for modern wellness',
    icon: '🌿',
    link: '/services'
  },
  {
    title: 'Yoga',
    description: 'Mind-body harmony through traditional practices',
    icon: '🧘‍♀️',
    link: '/services'
  },
  {
    title: 'Panchakarma',
    description: 'Complete detoxification and rejuvenation',
    icon: '✨',
    link: '/services'
  },
  {
    title: 'Reiki',
    description: 'Energy healing for holistic wellbeing',
    icon: '🌟',
    link: '/services'
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The Ayurvedic consultation was incredibly thorough. Dr. Neelam's expertise has helped me achieve better health naturally.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    name: "Rahul Mehta",
    text: "The Panchakarma treatment was transformative. I feel rejuvenated and more energetic than ever.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Anita Patel",
    text: "Regular yoga classes have improved my flexibility and reduced stress. The instructors are highly qualified.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-6xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex justify-center gap-4"
                    >
                      <a
                        href="https://wa.me/919886332684?text=Hi%20Sanskruti%20Holistic,%20I%20would%20like%20to%20book%20a%20consultation"
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Consultation
                      </a>
                      <Link to="/services" className="btn-secondary">
                        Our Services
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Key Offerings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Holistic Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{offering.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                <p className="text-gray-600 mb-4">{offering.description}</p>
                <Link
                  to={offering.link}
                  className="text-accent hover:text-primary transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-gray-600 mb-4 text-center">{testimonial.text}</p>
                  <p className="font-semibold text-center">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WhatsApp Float Button */}
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

export default Home;
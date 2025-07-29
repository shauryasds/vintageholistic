import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    name: "Anjali Sharma",
    feedback: "I had an amazing healing experience with Vintage Holistic Center. The therapies were soothing and deeply transformative.",
    image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753593654/ChatGPT_Image_Jul_27_2025_at_10_50_21_AM_oq9qpn.png",
  },
  {
    name: "Rajesh Kumar",
    feedback: "The personalized consultation truly helped with my chronic pain. Highly recommend Dr. Prashad’s holistic approach!",
    image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753594479/ChatGPT_Image_Jul_27_2025_at_11_03_57_AM_cfmdob.png",
  },
  {
    name: "Manohar Lal",
    feedback: "I opted for the online astrology session, and it was incredibly insightful. The guidance was practical and spiritual.",

    image: "https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753593839/Screenshot_2025-07-27_at_10.48.18_AM_z6uyor.png",
  },
  {
    name: "Trapti verma",
    feedback: "I Have experienced profound healing at Vintage Holistic Center i was suffering from severe anxiety,  headache and stress. but after taking the Accupressure treatment, I felt a deep sense of calm and clarity. The staff is incredibly knowledgeable and compassionate.",
    image: "https://res.cloudinary.com/dn9yo8x89/image/upload/v1753769644/WhatsApp_Image_2025-07-28_at_11.07.14_AM_gy1hho.jpg",


  },
];

function Testimonials() {
  return (
    <div className="bg-pink-50 w-full min-h-[140vh] py-20 px-4">
      <div className="text-center mb-12">
        <div className="font-dancing-script text-7xl text-pink-800">"</div>
        <h2 className="text-4xl text-pink-900 font-semibold">What Our Clients Say</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 min-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.a
            href="https://g.co/kgs/QLq569Y"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-80 bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center space-y-4 cursor-pointer"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-pink-200"
            />
            <p className="text-gray-700 italic text-sm">"{testimonial.feedback}"</p>
            <h4 className="text-pink-700 font-semibold text-lg">{testimonial.name}</h4>
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <p className="text-sm text-pink-600 underline">Read on Google</p>
          </motion.a>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href="https://g.co/kgs/QLq569Y"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition"
        >
          See All Google Reviews →
        </a>
      </div>
    </div>
  );
}

export default Testimonials;

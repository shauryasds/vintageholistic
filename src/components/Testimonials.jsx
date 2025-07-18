import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    name: "Anjali Sharma",
    feedback: "I had an amazing healing experience with Sanskruti Holistic Center. The therapies were soothing and deeply transformative.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    feedback: "The personalized consultation truly helped with my chronic pain. Highly recommend Dr. Neelam’s holistic approach!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    feedback: "I opted for the online astrology session, and it was incredibly insightful. The guidance was practical and spiritual.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Testimonials() {
  return (
    <div className="bg-pink-50 w-full min-h-[140vh] py-20 px-4">
      <div className="text-center mb-12">
        <div className="font-dancing-script text-7xl text-pink-800">"</div>
        <h2 className="text-4xl text-pink-900 font-semibold">What Our Clients Say</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
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

import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

const testimonials = [
  {
    name: "Anjali Sharma",
    feedback: "Adyant Ayurveda helped me find peace and balance. The treatments truly transformed my health.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    feedback: "The doctors are so experienced and the therapies felt personalized and effective.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    feedback: "I loved the online consultation option – it made healing accessible and seamless.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Testimonials() {
  return (
    <div className="bg-pink-50 w-full min-h-screen py-16 px-4 pb-96">
      <div className="text-center mb-12 ">
        <div className="font-dancing-script text-7xl text-pink-800">"</div>
        <h2 className=" text-4xl text-pink-900">What Our Clients Say</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto ">
        {/* {testimonials.map((testimonial, index) => (
          <motion.div  initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} 
            key={index}
            className="w-72 bg-white p-6 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center space-y-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-pink-200"
            />
            <p className="text-gray-700 italic text-sm">"{testimonial.feedback}"</p>
            <h4 className="text-pink-700 font-semibold">{testimonial.name}</h4>
          </motion.div >
        ))} */}
      <div>
      <ElfsightWidget widgetId='dda2a366-babb-4ce3-8cb2-b47efb5e4b2a'/>
      </div>
       <div className='bg- z-20 bg-pink-50 relative -top-20 h-10 w-full ' >
        
      </div> 
      </div>
    </div>
  );
}

export default Testimonials;

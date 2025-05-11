import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    category: 'Ayurveda',
    description: 'Traditional holistic healing system',
    services: [
      {
        name: 'Consultation',
        description: 'Personalized health assessment and treatment plan',
        duration: '60 mins',
        price: '₹1,500'
      },
      {
        name: 'Panchakarma',
        description: 'Complete detoxification and rejuvenation program',
        duration: '7-21 days',
        price: 'Starting from ₹25,000'
      },
      {
        name: 'Abhyanga',
        description: 'Traditional Ayurvedic oil massage',
        duration: '60 mins',
        price: '₹2,500'
      }
    ]
  },
  {
    category: 'Yoga',
    description: 'Transform body and mind through ancient practices',
    services: [
      {
        name: 'Group Classes',
        description: 'Daily yoga sessions for all levels',
        duration: '60 mins',
        price: '₹500 per class'
      },
      {
        name: 'Private Sessions',
        description: 'Personalized yoga instruction',
        duration: '60 mins',
        price: '₹1,500'
      },
      {
        name: 'Meditation Workshop',
        description: 'Learn meditation techniques',
        duration: '90 mins',
        price: '₹1,000'
      }
    ]
  },
  {
    category: 'Panchakarma',
    description: 'Complete detoxification and rejuvenation',
    services: [
      {
        name: 'Basic Package',
        description: '7-day cleansing program',
        duration: '7 days',
        price: '₹25,000'
      },
      {
        name: 'Standard Package',
        description: '14-day comprehensive treatment',
        duration: '14 days',
        price: '₹45,000'
      },
      {
        name: 'Premium Package',
        description: '21-day complete rejuvenation',
        duration: '21 days',
        price: '₹65,000'
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Our Services</h1>
          
          <div className="space-y-12">
            {services.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-semibold text-primary">{category.category}</h2>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service) => (
                      <div
                        key={service.name}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Duration:</span> {service.duration}</p>
                          <p><span className="font-medium">Price:</span> {service.price}</p>
                        </div>
                        <a
                          href={`https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20${service.name}`}
                          className="mt-4 btn-primary inline-block w-full text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Now
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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

export default Services;
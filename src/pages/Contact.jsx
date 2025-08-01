import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string().required('Phone number is required'),
      service: Yup.string().required('Please select a service'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: (values) => {
      const { name, service, message: query } = values;
      const message = `Hello! I am ${encodeURIComponent(name)}.%0A` +
        `I am interested in the service: ${encodeURIComponent(service)}.%0A` +
        `${encodeURIComponent(query)}`;
      const whatsappNumber = '919956942226';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappLink, '_blank');
    }
  });

  const services = [
    'Reflexology',
    'Acupressure',
    'Reiki 5D Healing',
    'Vastu',
    'Astrology',
    'Tarot Cards reading',
  ];

  const locations = [
    {
      name: 'Lucknow',
      address: '395 Eldeco colony, near pioneer montessory school, Udyan-1, Sector -2, Bangla Bazar, Lucknow, Uttar Pradesh 226002',
      city: 'Lucknow',
      landmark: 'Near Pioneer Montessori School',
      phone: '099569 42226',
      mapUrl: 'https://maps.app.goo.gl/46ckXjhG3X5zj1iu6'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-white to-emerald-50 py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
            Contact <span className="text-emerald-600">Us</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8">Book a Consultation</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {['name', 'phone'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                      {field}
                    </label>
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      {...formik.getFieldProps(field)}
                      className="mt-1 p-4 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition"
                    />
                    {formik.touched[field] && formik.errors[field] && (
                      <p className="text-sm text-red-600 mt-1">{formik.errors[field]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <select
                    id="service"
                    {...formik.getFieldProps('service')}
                    className="mt-1 block p-4 w-full rounded-xl border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition"
                  >
                    <option value="">Select a service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                  {formik.touched.service && formik.errors.service && (
                    <p className="text-sm text-red-600 mt-1">{formik.errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...formik.getFieldProps('message')}
                    className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-sm text-red-600 mt-1">{formik.errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition transform hover:scale-105"
                >
                  Continue to Booking →
                </button>
              </form>
            </div>

            {/* Location & Connect Section */}
            <div className="space-y-10">
              {locations.map((loc, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{loc.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {loc.address}<br />
                    {loc.city}<br />
                    {loc.landmark}<br />
                    <strong>Phone:</strong> {loc.phone}
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4288067710404!2d80.9262444!3d26.7944717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc1b4ce6644d%3A0xee1ec2a8c359809b!2sVintage%20Holistic%20(%20Acupressure%20%2CVastu%20and%20Reiki%20Treatment%20%26Trainning%20Institute)!5e0!3m2!1sen!2sin!4v1752655631356!5m2!1sen!2sin"
                    className="w-full h-64 sm:h-80 md:h-96 rounded-xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vintage Holistic Institute"
                  />
                </div>
              ))}

              {/* Quick Connect */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Connect</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/919956942226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl text-center font-medium transition"
                  >
                    💬 Chat on WhatsApp
                  </a>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919956942226"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-lg transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        📱
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
};

export default Contact;

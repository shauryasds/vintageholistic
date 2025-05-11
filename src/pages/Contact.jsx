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
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      service: Yup.string().required('Required'),
      message: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      console.log(values);
      // You can connect to backend or form service here
    },
  });

  const services = [
    'Ayurveda Consultation',
    'Panchakarma',
    'Yoga Classes',
    'Reiki Healing',
    'Crystal Healing',
    'Card Reading',
    'Past Life Regression',
    'Feng Shui'
  ];

  const locations = [
    {
      name: 'HSR Layout',
      address: '#1770, 1st Cross, HSR Layout Sector 1',
      city: 'Bangalore - 560102',
      landmark: 'Next to HSR RTO office',
      phone: '+91-9886332684, +91-7338631681',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8884247930635!2d77.6473813!3d12.914689699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1496bb038803%3A0x4c990b27b467b4d8!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650901234567!5m2!1sen!2sin'
    },
    {
      name: 'Marathahalli',
      address: "#201, Harsha's Nest, Srinivas Reddy Layout, AECS Layout",
      city: 'Bangalore - 560037',
      landmark: 'Landmark: Asha Tiffins',
      phone: '+91-9886332684, +91-7338631681',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5990058064584!2d77.7012813!3d12.9495897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4560a0001%3A0x49b6b341581e3902!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650901234567!5m2!1sen!2sin'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Get in Touch <span className="text-emerald-600">🌿</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-5">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                      {field}
                    </label>
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      {...formik.getFieldProps(field)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    {formik.touched[field] && formik.errors[field] && (
                      <p className="text-sm text-red-600 mt-1">{formik.errors[field]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
                  <select
                    id="service"
                    {...formik.getFieldProps('service')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                  {formik.touched.service && formik.errors.service && (
                    <p className="text-sm text-red-600 mt-1">{formik.errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...formik.getFieldProps('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-sm text-red-600 mt-1">{formik.errors.message}</p>
                  )}
                </div>

                <button type="submit" className="bg-emerald-600 text-white py-2 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Location Info */}
            <div className="space-y-10">
              {locations.map((loc, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{loc.name}</h3>
                  <p className="text-gray-700 mb-4">
                    {loc.address}<br />
                    {loc.city}<br />
                    {loc.landmark}<br />
                    <strong>Phone:</strong> {loc.phone}
                  </p>
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                    title={`Google Map - ${loc.name}`}
                  />
                </div>
              ))}

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Connect</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/919886332684"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-center hover:bg-emerald-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:sanskrutiholistic@gmail.com"
                    className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-center hover:bg-gray-200 transition"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919886332684"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        📱
      </a>
    </div>
  );
};

export default Contact;

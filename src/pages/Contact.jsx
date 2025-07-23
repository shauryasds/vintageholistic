import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const calendlyUrl = 'https://calendly.com/shuklashauryadeep589/30min'; // Optional if redirecting

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
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      service: Yup.string().required('Please select a service'),
      message: Yup.string().required('Message is required')
    }),

    onSubmit: (values) => {
      const { name, email, service, message: query } = values;

      const message = `Hello! I am 
 ${encodeURIComponent(name)}%0A
my email is : ${encodeURIComponent(email)}, i am interested in the service:
 ${encodeURIComponent(service)} ,
${encodeURIComponent(query)}`;

      // Replace with your own WhatsApp number (with country code, no + or spaces)
      const whatsappNumber = '09956942226';

      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

      // Open WhatsApp in new tab
      window.open(whatsappLink, '_blank');


      // console.log(values);
      // alert('Thankyou for contacting')
      // window.location.href = calendlyUrl; // redirect to Calendly after form submission
    }
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
      name: 'Lucknow',
      address: '395 Eldeco colony, near pioneer montessory school, Udyan-1, Sector -2, Bangla Bazar, Lucknow, Uttar Pradesh 226002',
      city: 'Lucknow',
      landmark: 'Near Pioneer Montessori School',
      phone: '099569 42226',
      mapUrl: 'https://maps.app.goo.gl/46ckXjhG3X5zj1iu6'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-white to-emerald-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
            Contact <span className="text-emerald-600">Us</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">Book a Consultation</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                      {field}
                    </label>
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      {...formik.getFieldProps(field)}
                      className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition"
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
                    className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition"
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
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition transform hover:scale-105"
                >
                  Continue to Booking →
                </button>
              </form>
            </div>

            {/* Location Info */}
            <div className="space-y-10">
              {locations.map((loc, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{loc.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {loc.address}<br />
                    {loc.city}<br />
                    {loc.landmark}<br />
                    <strong>Phone:</strong> {loc.phone}
                  </p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4288067710404!2d80.9262444!3d26.7944717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc1b4ce6644d%3A0xee1ec2a8c359809b!2sVintage%20Holistic%20(%20Acupressure%20%2CVastu%20and%20Reiki%20Treatment%20%26Trainning%20Institute)!5e0!3m2!1sen!2sin!4v1752655631356!5m2!1sen!2sin" width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vintage Holistic center"></iframe>
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7861950235615!2d77.6465769!3d12.9214589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1364e002583b%3A0x3c12c08ab23e7fc3!2sSai%20Sanskruti%20Holistic%20Center%20-%20Reiki%20Classes%2C%20Tarot%20Card%20Reading%2C%20Ayurveda%2C%20Holistic%20healing!5e0!3m2!1sen!2sin!4v1747126919337!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sai Sanskruti Holistic Center Location"
                  /> */}

                </div>
              ))}

              {/* Quick Connect */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Connect</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/09956942226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl text-center font-medium transition"
                  >
                    💬 Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:svintageholistic@gmail.com"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-xl text-center font-medium transition"
                  >
                    ✉️ Email Us
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
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
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


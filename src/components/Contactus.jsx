import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', query: '' });
  };

  return (
    <div className="min-h-screen bg-orange-300 bg-gradient-to-b from-white to-orange-100 flex items-center justify-center p-6">
      <div className="flex flex-col bg-white shadow-md rounded-xl w-full max-w-5xl overflow-hidden">
        {/* Left - Title */}
        <div className="bg-white p-8 flex flex-col justify-center items-center ">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-2">Vintage Holistic Treatment & Training Center</h2>
          <p className="text-orange-700">Let’s begin your healing journey. Reach out to us today.</p>
        </div>

        {/* Right - Form Section */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 bg-gradient-to-b from-white to-orange-100 space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>

            <select
              id="service"

              className="mt-1 block w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 transition"
            >
              <option value="" hidden selected>Select a service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>

          </div>
          <textarea
            name="query"
            placeholder="Your Message"
            rows="5"
            value={formData.query}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });

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
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Sai Sanskruti Holistic Center</h2>
          <p className="text-orange-700">Let’s begin your healing journey. Reach out to us today.</p>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-b from-white to-pink-100   p-16 space-y-4 ">
          <div className='flex flex-row justify-between'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-[48%]  border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[48%]  border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          </div>
          <textarea
            name="query"
            placeholder="Your Query"
            rows="4"
            value={formData.query}
            onChange={handleChange}
            required
            className="w-full  border border-gray-300 rounded-md p-6 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className=' mx-auto w-1/4'>
          <button
            type="submit"
            className="bg-orange-600 w-full  text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
          >
            Send
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

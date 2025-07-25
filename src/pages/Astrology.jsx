import React from "react";
import { motion } from "framer-motion";

const Astrology = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="px-8 pt-12 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
                            Vedic Astrology Consultations <span className="text-indigo-500">🪐</span>
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
                            Unlock the secrets of your birth chart with our in-depth astrological consultations guided by Dr. Neelam. Understand your life's path, challenges, and opportunities through the lens of ancient Vedic wisdom.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-indigo-50 rounded-xl p-8 shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>▹ Birth Chart Analysis (Janam Kundli)</li>
                                    <li>▹ Career and Education Guidance</li>
                                    <li>▹ Matchmaking (Kundli Milan)</li>
                                    <li>▹ Health, Wealth & Relationship Forecasts</li>
                                    <li>▹ Dasha Interpretation & Remedies</li>
                                    <li>▹ Personalized Gemstone & Ritual Advice</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Session Details</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li><strong>Duration:</strong> 45–60 minutes</li>
                                    <li><strong>Mode:</strong> In-person or online</li>
                                    <li><strong>Price:</strong> ₹1,500 / session</li>
                                    <li><strong>Language:</strong> Hindi & English</li>
                                </ul>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 bg-indigo-100 rounded-xl p-8"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                                Book Your Astrology Session Today
                            </h2>
                            <p className="text-gray-700 mb-6 text-center">
                                Let the stars guide you toward a better future. Connect with us to schedule your consultation.
                            </p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20an%20Astrology%20consultation"
                                    className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Enquire on WhatsApp
                                </a>
                                <a
                                    href="mailto:sanskrutiholistic@gmail.com"
                                    className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                                >
                                    Email Us
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Astrology;

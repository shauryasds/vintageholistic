import React from "react";
import { motion } from "framer-motion";

const AyurvedicMagnet = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-lime-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="px-8 pt-12 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
                            Ayurvedic Magnet Therapy <span className="text-green-500">🧲</span>
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
                            A unique blend of ancient Ayurvedic principles and modern magnetic healing. Experience natural detox, pain relief, and energy balance with our TAM (Therapeutic Ayurvedic Magnet) sessions.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 rounded-xl p-8 shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Treatment Benefits</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>▹ Balances Doshas (Vata, Pitta, Kapha)</li>
                                    <li>▹ Helps relieve joint & muscular pain</li>
                                    <li>▹ Boosts blood circulation</li>
                                    <li>▹ Enhances energy and mental clarity</li>
                                    <li>▹ Aids in detoxification & digestion</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Session Info</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li><strong>Duration:</strong> 40 minutes</li>
                                    <li><strong>Price:</strong> ₹800 per session</li>
                                    <li><strong>Frequency:</strong> 1–2 times/week recommended</li>
                                    <li><strong>Conducted by:</strong> Certified Ayurvedic Therapist</li>
                                </ul>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 bg-green-100 rounded-xl p-8"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                                Book Your Ayurvedic Magnet Therapy
                            </h2>
                            <p className="text-gray-700 mb-6 text-center">
                                Reconnect with your body’s natural energy. Book your therapy session with us today.
                            </p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="https://wa.me/919886332684?text=Hi,%20I'm%20interested%20in%20Ayurvedic%20Magnet%20Treatment"
                                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
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

export default AyurvedicMagnet;

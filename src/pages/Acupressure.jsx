import React from 'react';
import { motion } from 'framer-motion';

const Acupressure = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="px-8 pt-12 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
                            Manual Acupressure Treatment <span className="text-green-500">🌿</span>
                        </h1>

                        <div className="mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                                Experience the healing power of Manual Acupressure at <span className="font-semibold text-blue-600">Vintage Holistic Center</span>.
                                We are <span className="font-bold text-yellow-600">Lucknow's only provider</span> of this specialized treatment, with a reputation for excellence and care.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-yellow-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is Acupressure?</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Acupressure is an ancient healing technique using gentle finger pressure on specific points across the body.
                                    It stimulates the body’s natural healing abilities, helping release tension, improve circulation, and balance energy flow.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Treatment Benefits</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li><span className="text-green-500 mr-2">▹</span>Relieves chronic pain and muscle tension</li>
                                    <li><span className="text-green-500 mr-2">▹</span>Reduces stress and anxiety naturally</li>
                                    <li><span className="text-green-500 mr-2">▹</span>Improves blood circulation and energy flow</li>
                                    <li><span className="text-green-500 mr-2">▹</span>Boosts immunity and promotes deep relaxation</li>
                                    <li><span className="text-green-500 mr-2">▹</span>Completely natural, no side effects</li>
                                    <li><span className="text-green-500 mr-2">▹</span>Done by experienced hands, tailored to your body</li>
                                </ul>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 bg-green-100 rounded-xl p-8"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                                Book Your Healing Session Now
                            </h2>
                            <p className="text-gray-700 mb-6 text-center">
                                Contact us today to schedule your personalized acupressure therapy and begin your wellness journey.
                            </p>
                            <div className="flex justify-center gap-4">
                                <motion.a
                                    href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20booking%20a%20Manual%20Acupressure%20session"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    WhatsApp Us
                                </motion.a>

                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Acupressure;

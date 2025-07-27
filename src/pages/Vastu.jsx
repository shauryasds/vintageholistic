import React from 'react';
import { motion } from 'framer-motion';

const VastuConsultation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="px-8 pt-12 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                            Vastu Consultation Services
                            <span className="text-blue-500"> 🧭</span>
                        </h1>

                        <div className="mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At Vintage Holistic Center, we offer personalized Vastu consultations to harmonize your living and working spaces. Guided by ancient Indian architectural science, our approach enhances health, wealth, relationships, and spiritual well-being.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Consultation Includes</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li><span className="text-blue-500 mr-2">▹</span>Complete layout analysis of home/office</li>
                                    <li><span className="text-blue-500 mr-2">▹</span>Energy flow corrections without demolition</li>
                                    <li><span className="text-blue-500 mr-2">▹</span>Remedial solutions using natural elements</li>
                                    <li><span className="text-blue-500 mr-2">▹</span>Customized guidance for health, wealth, career, and relationships</li>
                                    <li><span className="text-blue-500 mr-2">▹</span>Remote and On-site Consultation Options</li>
                                    <li><span className="text-blue-500 mr-2">▹</span>Led by Dr. Neelam with 20+ years of expertise</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Vastu?</h3>
                                <div className="space-y-6">
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-lg font-medium text-gray-900">Balance & Harmony</h4>
                                        <p className="text-gray-700">Enhances positive energy flow in your spaces.</p>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-lg font-medium text-gray-900">Improves Well-being</h4>
                                        <p className="text-gray-700">Reduces stress, supports mental clarity and health.</p>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-lg font-medium text-gray-900">Wealth & Success</h4>
                                        <p className="text-gray-700">Supports financial stability and growth in ventures.</p>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-lg font-medium text-gray-900">Relationship Harmony</h4>
                                        <p className="text-gray-700">Promotes peace in family and work dynamics.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 bg-blue-100 rounded-xl p-8"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                                Schedule Your Vastu Consultation Today
                            </h2>
                            <p className="text-gray-700 mb-6 text-center">
                                Transform your space into a magnet for positivity and prosperity. Reach out for a personalized Vastu plan.
                            </p>
                            <div className="flex justify-center gap-4">
                                <motion.a
                                    href="https://wa.me/919956942226?text=Hi,%20I'm%20interested%20in%20your%20Vastu%20consultation%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
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

export default VastuConsultation;

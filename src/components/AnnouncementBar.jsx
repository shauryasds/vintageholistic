import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementBar = () => {
    return (
        <div className="bg-yellow-200 overflow-hidden py-5 shadow-inner border-y border-yellow-300">
            <motion.div
                className="whitespace-nowrap text-blue-900 font-semibold text-sm sm:text-base"
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: 'linear'
                }}
            >
                👉 Manual Acupressure Therapy • Spine Alignment • Sciatica Shoulder Alignment • Gastroenterological problems • Liver Problems • Gynecological Problems • 5D Reiki Healing • Vedic Magnet Therapy • Natural Detox Programs • Ayurvedic Chakra Alignment • Visit us at Vintage Holistic Treatment & Training Center
                – Lucknow 🔱




            </motion.div>
        </div >
    );
};

export default AnnouncementBar;

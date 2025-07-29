import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Glimse() {
    return (
        <div>
            <div className='container mt-6 w-full h-[40vh] m-auto  '>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >

                    <SwiperSlide>
                        <div className="h-[50vh] sm:h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753193280/IMG-20250722-WA0017_ifiaon.jpg')",

                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[50vh] sm:h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/c_crop,ar_16:9/v1753194783/Screenshot_2025-07-22_at_8.02.28_PM_psvmph.png')",
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[50vh] sm:h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753590107/WhatsApp_Image_2025-07-23_at_6.12.53_PM_y12umr.jpg')",
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[50vh] sm:h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753590107/WhatsApp_Image_2025-07-23_at_6.12.52_PM_1_qjkrum.jpg')",
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[50vh] sm:h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/q_auto,f_auto/q_auto,f_auto/v1753590108/WhatsApp_Image_2025-07-25_at_11.21.14_AM_qcbsox.jpg')",
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>
                        </div>
                    </SwiperSlide>

                </Swiper >

            </div >
        </div>
    )
}

export default Glimse

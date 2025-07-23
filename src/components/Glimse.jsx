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
            <div className='container mt-6 w-full h-[40vh] m-auto relative -top-10 '>
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
                        <div className="h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/v1753193280/IMG-20250722-WA0017_ifiaon.jpg')",
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/c_crop,ar_16:9/v1753194783/Screenshot_2025-07-22_at_8.02.28_PM_psvmph.png')",
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[90vh] bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://res.cloudinary.com/dn9yo8x89/image/upload/v1753193278/4_uinlg0.jpg')",
                            }}>
                        </div>
                    </SwiperSlide>

                </Swiper >

            </div >
        </div>
    )
}

export default Glimse

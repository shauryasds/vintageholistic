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
       <div className='container mt-6 w-full h-[40vh] m-auto relative -top-80 '>
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
                    <SwiperSlide className='rounded-lg'>
                        <div className="h-[70vh] bg-cover bg-center relative -top-70"
                            style={{
                                backgroundImage:
                                    "url('https://images.pexels.com/photos/6932022/pexels-photo-6932022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                            }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-[70vh] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://images.pexels.com/photos/8964948/pexels-photo-8964948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                        }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-[70vh] bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                    }}>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="h-[70vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/9031632/pexels-photo-9031632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}>
            </div>
        </SwiperSlide>
     
    </Swiper >

           </div >
    </div>
  )
}

export default Glimse

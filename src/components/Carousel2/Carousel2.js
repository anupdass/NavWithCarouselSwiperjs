import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper';
import Swipercore from 'swiper';
import 'swiper/swiper-bundle.css'

const Carousel2 = () => {
    
    const sliderData = ['anup','lorem20','anup','anup','anup','anup']
    Swipercore.use([Pagination,Autoplay])

    return (
        <Swiper className='w-full' style={{height:'400px'}} pagination={{"clickable": true}} autoplay={ {delay: 2000}} loop={true}>
            {
                sliderData.map(data => <SwiperSlide  className='w-full bg-red-300 text-center '>{data}</SwiperSlide>)
            }
        </Swiper>
    );
};

export default Carousel2;


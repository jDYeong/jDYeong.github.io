import React from 'react';
import * as S from "./skills.style.js"
import SkillBox from './skillBox.js'

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

const skills = () => {
    
    SwiperCore.use([Autoplay]);

    return (
        <Swiper
            className="skills_slide"
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2300,
                disableOnInteraction: false,
            }}
            spaceBetween={18}
            slidesPerView={'auto'} 
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <SkillBox $name='html' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='css' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='javascript' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='jquery' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='scss' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='reactjs' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='github' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='figma' />
            </SwiperSlide>
            
            <SwiperSlide>
                <SkillBox $name='slack' />
            </SwiperSlide>
        </Swiper>
    );
};

export default skills;
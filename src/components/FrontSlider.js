import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Amcimg from '../images/ser_rot_amc.jpg';
import Trouble from '../images/ser_rot_trouble.jpg';
import Netwrkimg from '../images/ser_rot_network.jpg';
import Photocpy from '../images/ser_rot_trouble_photocpy.jpg';
import Telecom from '../images/ser_rot_telecom.jpg';
import Graphic from '../images/ser_rot_graphic.jpg';
import ITspprt from '../images/ser_rot_it.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "../styles/FrontSlider.css"

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// import { EffectCards } from 'swiper/modules';


const FrontSlider = () => {
  return (
    <div className='full-front-slider mt-5'>
         {/* <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        autoplay={{ delay: 300 }}
        loop={true}
        className="mySwiper"
      >
         <SwiperSlide><img src={Amcimg}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={Trouble}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={Netwrkimg}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={Photocpy}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>
         <SwiperSlide><img src={Telecom}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={Graphic}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={ITspprt}  className='w-100 h-100 object-fit-cover' alt="" /></SwiperSlide>       
      </Swiper> */}


<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container "
      >
        {/* <SwiperSlide>
          <img className=' object-fit-cover 'width={300} height={300} src={Amcimg} alt="slide_image" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img className='w-100 h-100 object-fit-cover' width={300} height={300} src={Trouble} alt="slide_image" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className=' object-fit-cover rounded-5' width={350} height={400} src={Netwrkimg} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='object-fit-cover rounded-5 'width={350} height={400} src={Photocpy} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-fit-cover  rounded-5'width={350} height={400}  src={Telecom} alt="slide_image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className=' 'width={300} height={300}  src={Graphic} alt="slide_image" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className=' object-fit-cover rounded-5' width={350} height={400} src={ITspprt} alt="slide_image" />
        </SwiperSlide>
      </Swiper>



    </div>
  )
}

export default FrontSlider
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Make sure to import Autoplay
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'


import slide_image_2 from '../assets/Slider_assets/img_2.jpg'
import slide_image_3 from '../assets/Slider_assets/img_3.jpg'
import slide_image_4 from '../assets/Slider_assets/img_4.jpg'
import slide_image_5 from '../assets/Slider_assets/img_5.jpg'
import slide_image_6 from '../assets/Slider_assets/img_6.jpg'


const Hero = () => {
  return (
    // Main container with responsive height
    <div className='flex flex-col sm:flex-row border border-gray-400 overflow-hidden h-auto sm:h-96 lg:h-[600px]'>
      {/* GENZ Section - Taking exactly half space */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-8 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>BEST SELLERS</p>
          </div>
          <h1 className='prata-regular text-[60px] sm:py-2 lg:text-[80px] leading-tight'>GENZ</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      
      {/* Slider Section - Updated to fill available space */}
      <div className='w-full h-96 sm:h-full lg:h-full sm:w-1/2 relative'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={500}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className='swiper_container h-full'
        >
          
          <SwiperSlide className="h-full">
            <img src={slide_image_2} alt='slide_image' className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src={slide_image_3} alt='slide_image' className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src={slide_image_4} alt='slide_image' className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src={slide_image_5} alt='slide_image' className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <img src={slide_image_6} alt='slide_image' className="object-cover w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
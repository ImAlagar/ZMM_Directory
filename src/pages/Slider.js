import React from 'react'
import Carousel from './Carousel';
import banner1 from '../assets/banner/banner1.png'
import HeaderSection from '../components/HeaderSection';
const Slider = () => {
    const slides = [
        <img
          src={banner1}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />,
        <img
        src={banner1}
        alt="Slide 2"
        className="w-full h-full object-cover"
      />,
        <img
        src={banner1}
        alt="Slide 2"
        className="w-full h-full object-cover"
        />,
        <img
        src={banner1}
        alt="Slide 2"
        className="w-full h-full object-cover"
    />,

      ];
  return (
    <div className=" h-[450px] w-full">
     <div className='absolute'>
     <Carousel autoSlide autoSlideInterval={3000}>
        {slides}
      </Carousel>
     </div>
      <div className='relative'>
        <HeaderSection />
      </div>
    </div>
  )
}

export default Slider
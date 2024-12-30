import React from 'react';
 import { BsLinkedin } from 'react-icons/bs';


import { Swiper, SwiperSlide } from 'swiper/react';

 //import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
 import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'Ritu Raj',
      role: 'Student at NIT Patna',
      test: 'Despite being a fresher, Raushan has shown remarkable potential and dedication. Their quick learning ability, enthusiasm for tackling new challenges, and strong grasp of fundamental coding concepts have made a positive impact on our projects. Raushan is a promising talent, and I am confident they will continue to grow and excel in their career.',
    },
    // 
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        // modules={[pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
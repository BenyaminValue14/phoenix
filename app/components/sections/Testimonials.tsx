'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    avatar: 'https://i.pravatar.cc/300',
    name:'Tian Snow',
    review:'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
  {
    id:2,
    avatar: 'https://i.pravatar.cc/300',
    name:'Charls Spire',
    review:'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
  {
    id:3,
    avatar: 'https://i.pravatar.cc/300',
    name:'Tian Snow',
    review:'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
  {
    id:4,
    avatar: 'https://i.pravatar.cc/300',
    name:'Yiyi Magic',
    review:'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials'>
      <h2 className="subtitle text-center">Testimonios</h2>
      <div className='boxCarousel'>
      <Swiper 
      modules={[Pagination]}
      spaceBetween={20} 
      pagination = {{ clickable:true }}
      className='testimonials-container'>
        {
          data.map(({id, avatar, name, review}, index) => {
            return(
              <SwiperSlide key={`${index}-${id}`} className='testimonial'>
                <div className='avatar'>
                  <img src={avatar} alt='Avatar 1' />
                </div>
                  <h5 className='text-sm'>{name}</h5>
                  <small className='text-gray2'>
                   {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
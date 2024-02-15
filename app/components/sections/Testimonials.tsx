'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Blurhash, BlurhashCanvas } from 'react-blurhash';

const data = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/300',
    name: 'Tian Snow',
    review: 'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/300',
    name: 'Charls Spire',
    review: 'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/300',
    name: 'Tian Snow',
    review: 'lorem aihf wie ewiofndv wlgnw brlwkn krlg nf vbñ',
  },
  {
    id: 4,
    avatar: 'https://res.cloudinary.com/dxefwzl0v/image/upload/v1700325442/web-persol/el-doc-1_tznn7m.jpg',
    name: 'Luis Valdivia Humareda',
    review: 'I am currently collaborating with Benjamin on several projects and can attest to his exceptional skills in frontend development, specifically with Sass and JavaScript. He possesses a genuine passion for creating intricate effects and animations in his code. Additionally, he has a strong commitment to personal and professional growth, constantly seeking new ways to improve his skills and knowledge. Currently, he is expanding his expertise by learning cloud services, with the goal of applying them in his daily assignments',
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
          pagination={{ clickable: true }}
          className='testimonials-container'>
          {
            data.map(({ id, avatar, name, review }, index) => {
              return (
                <SwiperSlide key={`${index}-${id}`} className='testimonial'>
                  <div className='avatar'>
                    <img src={avatar} alt='Avatar 1' />
                  </div>
                  <h5 className='text-sm text-white'>{name}</h5>
                  <small className='text-gray2'>
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      {/*<Blurhash
        hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        width={400}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />*/}
      {/*<BlurhashCanvas hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" width={400} height={300} punch={1} />*/}
    </section>
  )
}

export default Testimonials
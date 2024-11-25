
import teacher_1 from '../images/teacher_1.png'
import teacher_2 from '../images/teacher_2.png'
import teacher_3 from '../images/teacher_3.png'
import teacher_4 from '../images/teacher_4.png'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// import 'swiper/css/effect-coverflow'
import 'swiper/css';

const teachers_list = [
    {id : 1, name: 'Иван', info: 'Успешный веб-дизайнер с опытом больше 3-х лет', img: teacher_1},
    {id : 2, name: 'Иван', info: 'Успешный веб-дизайнер с опытом больше 3-х лет', img: teacher_2},
    {id : 3, name: 'Иван', info: 'Успешный веб-дизайнер с опытом больше 3-х лет', img: teacher_3},
    {id : 4, name: 'Иван', info: 'Успешный веб-дизайнер с опытом больше 3-х лет', img: teacher_4},
    {id : 4, name: 'Иван', info: 'Успешный веб-дизайнер с опытом больше 3-х лет', img: teacher_4},
]

const Teachers = () => {
    return (
        <div className="teachers">
            <div className="container">
                <div className="teachers__container">
                    <div className="teachers__title">Наши преподаватели:</div>     
                </div>
                <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        effect={ 'coverflow' }
                        slidesPerView={3}
                        className='card_container'
                        centeredSlides={true}
                        loop={true}
                        navigation={
                            {
                            nextEl: '.swiper-button-next', 
                            prevEl: '.swiper-button-prev',
                            clickable:true
                            }
                        }
                        autoplay={1000}
                        grabCursor={true}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                // depth: 200,
                                modifier: 1.5,
                                slideShadows: 0.5
                            }
                        }
                        style={{ width: '100%', height: 'fit-content' }}
                    >
                        {teachers_list.map(el => {return (
                            <SwiperSlide key={el.id}>
                                    <div className='card'>
                                        <div className='card__img_container'>
                                            <img src={el.img} className='card__img' alt='teacher' />
                                        </div>
                                        <div className='card__title'>
                                            {el.name}
                                        </div>
                                        <div className='card__info'>
                                            {el.info}
                                        </div>
                                    </div>
                            </SwiperSlide>
                        ) })}

                        <div className="slider_controller">
                            <div className="swiper-button-prev">
                                &larr;
                            </div>
                            <div className="swiper-button-next">
                                &rarr;
                            </div>
                        </div>
                    
                    </Swiper>
            </div>
        </div>
    )
}

export default Teachers
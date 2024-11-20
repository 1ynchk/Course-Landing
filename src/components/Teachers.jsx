
import teacher_1 from '../images/teacher_1.png'
import teacher_2 from '../images/teacher_2.png'
import teacher_3 from '../images/teacher_3.png'
import teacher_4 from '../images/teacher_4.png'

import {SwiperSlide, Swiper} from 'swiper/react'

const TeachersCards = () => {
    return (
        <div className='teacher__card'>
            
        </div>
    )
}

const Teachers = () => {
    return (
        <div className="teachers">
            <div className="container">
                <div className="teachers__container">
                    <div className="teachers__title">Наши преподаватели:</div>

                        <div className='card'>
                            <div className='card__img_container'>
                                <img src={teacher_2} className='card__img' alt='teacher' />
                            </div>
                            <div className='card__title'>
                                Иван
                            </div>
                            <div className='card__info'>
                                Успешный веб-дизайнер с опытом больше 3-х лет
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Teachers
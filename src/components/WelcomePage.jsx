
import hero from '../images/heros.webp'

const WelcomePage = () => {
    return (
        <div className="welcome">
            <div className="welcome__img_container">
                <img src={hero} alt='hero' className='welcome__img'/>
                <div className='welcome__logo_name'>
                    skill <span className='welcome__span'>way</span>
                </div>
            </div>

            <div className='welcome__title_container'>
                <div className='welcome__title'>Учись. Применяй. Покоряй вершины.</div>
                <div className='welcome__info'>Погружайся в мир знаний и достигай<br/> новых высот с каждым курсом</div>
                <div className='welcome__button_container'>
                    <button className='welcome__button'>
                        Присоединиться!
                    </button>
                </div>
            </div>  
        </div>
    )
}

export default WelcomePage
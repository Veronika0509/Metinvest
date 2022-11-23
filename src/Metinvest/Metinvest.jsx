import React, {useRef, useState} from 'react'
import './metinvest.css'
import leftArrow from '../img/left-arrow.png'
import rightArrow from '../img/next.png'
import santa1 from '../img/santa1.png'
import closeBtn1 from '../img/closebtn.png'
import firstModalBg from '../img/modal-first-bg.jpg'
import Sock1 from '../img/sock1.png'
import Sock2 from '../img/sock2.png'
import Sock3 from '../img/sock3.png'
import Sock4 from '../img/sock4.png'
import Sock5 from '../img/sock5.png'
import Sock6 from '../img/sock6.png'
import Sock7 from '../img/sock7.png'
import Sock8 from '../img/sock8.png'
import Sock9 from '../img/sock9.png'
import Sock10 from '../img/sock10.png'

const Metinvest = () => {

    const [sockModalActive, setSockModalActive] = useState(false)
    const [firstModalActive, setFirstModalActive] = useState(true)

    const [slides, setSlider] = useState([
        {
            number: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 6,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 7,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 8,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 9,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        },
        {
            number: 10,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut inventore ipsam magni maxime neque nulla obcaecati quaerat ratione sequi voluptate?'
        }
    ])
    const firstModalSock = [
        {img: Sock1},
        {img: Sock2},
        {img: Sock3},
        {img: Sock4},
        {img: Sock5},
        {img: Sock6},
        {img: Sock7},
        {img: Sock8},
        {img: Sock9},
        {img: Sock10}
    ]

    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    let position = 0
    const slider = useRef(null)
    const prevHandler = () => {
        position += 530
        slider.current.childNodes.forEach((slide) => {
            slide.style = `transform: translateX(${position}px)`
        })
    }
    const nextHandler = () => {
        position -= 530
        slider.current.childNodes.forEach((slide) => {
            slide.style = `transform: translateX(${position}px)`
        })
    }
    const onSockClick = () => {
        setSockModalActive(true)
    }

    return (
        <div className="main">
            <div className="socks">
                {/*{socksArray.map((s) => <Sock onSockClick={onSockClick} />)}*/}
            </div>
            <div className={sockModalActive ? "modal active" : "modal"}>
                <div className="modal-window">
                    <button className="btn-close" onClick={() => setSockModalActive(false)}>x</button>
                    <div className="modal-container">
                        <div className="modal-content" ref={slider}>
                            {slides.map((s) => <Slide number={s.number} text={s.text}/>)}
                        </div>
                        <div className="btns">
                            <button className={prev ? 'pagination button-prev disabled' : 'pagination button-prev'}
                                    onClick={prevHandler}>
                                <img src={leftArrow} alt="Left Arrow"/>
                            </button>
                            <button className={next ? 'pagination button-next disabled' : 'pagination button-next'}
                                    onClick={nextHandler}>
                                <img src={rightArrow} alt="Right Arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
            <div className={firstModalActive ? "modal-first" : "modal-first disabled"}>
                <div className="modal-first-container">
                    <div className="modal-first-window">
                        <div className="modal-first-wrapper">
                            <h2 className='modal-first-title'>Ласкаво просимо до онлайн порталу чарівного благодійного
                                святкового свята!</h2>
                        </div>
                        <img className="modal-first-image" src={santa1} alt="Santa"/>
                        <div className="modal-first-wrapper">
                            <p className='modal-first-text'>
                                Марко та Оленка бавилися у сніжки,
                                ліпили снігових баб і цілі фортеці.
                                З ними часто бавився Жартун з Найвеселішої країни
                                Найсмішніших жартунів (чи як там вона називається)
                                та Сонячний Промінчик. Кузь та Русалоньки зараз спали аж до літа.
                            </p>
                            <div className="first-modal-socks">
                                {firstModalSock.map((s) => <FirstModalSock img={s.img}/>)}
                            </div>
                            <p className="modal-first-text2">
                                Інколи він перетворювався на вовка і бігав зі зграєю,
                                інколи – на ширяючого в піднебессі орла. А зараз от,
                                він вирішив спробувати прожити зиму снігуром. Хоч чарівникові й було
                                сто років, але він любив побавитися, посміятися та поганяти за сніжинками.
                            </p>
                            <p className="modal-first-text3">Кузь та Русалоньки зараз спали аж до літа.</p>
                            <a href="#" className="modal-first-button">зробити чудо</a>
                        </div>
                    </div>
                </div>
                <button className="modal-first-btn-close" onClick={() => setFirstModalActive(false)}>
                    <img src={closeBtn1} alt="Close"/>
                </button>
                <div className="overlay overlay-first" style={{background: `url(${firstModalBg}) no-repeat center center / cover`}}></div>
            </div>
        </div>
    )
}

export default Metinvest

const Slide = (props) => {
    return (
        <div className="slide sock-vote">
            <h1>{props.number} Носок</h1>
            <p>{props.text}</p>
            <button className="vote">Проголосовать</button>
        </div>
    )
}
const FirstModalSock = (props) => {
    return (
        <div className="first-modal-sock">
            <img src={props.img} alt='Sock' />
        </div>
    )
}

// let position = 0
// const track = document.querySelector('.modal-content')
// const btnPrev = document.querySelector('.button-prev')
// const btnNext = document.querySelector('.button-next')
//
// btnPrev.addEventListener('click', function () {
//     position += 530
//     setPosition()
//     checkBtns()
// })
//
// btnNext.addEventListener('click', function () {
//     position -= 530
//     setPosition()
//     checkBtns()
//     console.log(position)
// })
//
// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`
// }
//
// const checkBtns = () => {
//     btnPrev.disabled = position === 0
//     btnPrev.disabled ? btnPrev.style.opacity = 0.7 : btnPrev.style.opacity = 1
//     btnNext.disabled = position === -4770
//     btnNext.disabled ? btnNext.style.opacity = 0.7 : btnNext.style.opacity = 1
//
// }
//
// checkBtns()
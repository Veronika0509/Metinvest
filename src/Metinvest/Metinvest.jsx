import React, {useRef, useState} from 'react'
import './metinvest.css'
import leftArrow from '../img/left-arrow.png'
import rightArrow from '../img/next.png'

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
    const socksArray = [
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'},
        {text: 'детский дом'}
    ]

    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    let position = 0
    const slider = useRef(null)
    const prevHandler = () => {
        if (position === 0) {
            setPrev(true)
        } else {
            position += 530
            slider.current.childNodes.forEach((slide) => {
                slide.style = `transform: translateX(${position}px)`
            })
        }
    }
    const nextHandler = () => {
        if (position === -4770) {
            setNext(true)
        } else {
            position -= 530
            slider.current.childNodes.forEach((slide) => {
                slide.style = `transform: translateX(${position}px)`
            })
        }
        console.log(position)
    }
    const onSockClick = () => {
        setSockModalActive(true)
        if (position === 0) {
            setPrev(true)
        } else if (position === -5300) {
            setNext(true)
        }
    }

    return (
        <div className="test">
            <div className="socks">
                {socksArray.map((s) => <Sock onSockClick={onSockClick} text={s.text}/>)}
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
                <div className="modal-first-window">
                    <h1>Как голосовать?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut inventore ipsam magni maxime neque nulla obcaecati
                        quaerat ratione sequi voluptate?
                    </p>
                    <button className="modal-first-btn-close" onClick={() => setFirstModalActive(false)}>x</button>
                </div>
                <div className="overlay"></div>
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
const Sock = (props) => {
    return (
        <div className="sock" onClick={props.onSockClick}>
            <p className="sock-text">
                {props.text}
            </p>
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
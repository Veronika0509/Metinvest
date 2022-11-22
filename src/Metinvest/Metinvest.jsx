import React, {useState} from 'react'
import './metinvest.css'
import leftArrow from '../img/left-arrow.png'
import rightArrow from '../img/next.png'

const Metinvest = () => {

    const [firstModalActive, setFirstModalActive] = useState(true)
    const [sockModalActive, setSockModalActive] = useState(false)

    return (
        <div className="test">
            <div className="socks">
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
                <div className="sock" onClick={() => setSockModalActive(true)}>
                    <p className="sock-text">
                        детский дом
                    </p>
                </div>
            </div>
            <div className={sockModalActive ? "modal active" : "modal"}>
                <div className="modal-window">
                    <button className="btn-close" onClick={() => setSockModalActive(false)}>x</button>
                    <div className="modal-container">
                        <div className="modal-content">
                            <div className="slide sock-vote">
                                <h1>1 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>2 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>3 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>4 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>5 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>6 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>7 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>8 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>9 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                            <div className="slide sock-vote">
                                <h1>10 Носок</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Accusamus animi doloremque eveniet itaque nemo, sint.
                                </p>
                                <button className="vote">Проголосовать</button>
                            </div>
                        </div>
                        <div className="btns">
                            <button className="pagination button-prev"><img src={leftArrow} alt="Left Arrow"/></button>
                            <button className="pagination button-next"><img src={rightArrow} alt="Right Arrow"/></button>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
            <div className={firstModalActive ? "modal-first" : "modal-first disable"}>
                <div className="modal-first-window">
                    <h1>Как голосовать?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut inventore ipsam magni maxime neque nulla obcaecati
                        quaerat ratione sequi voluptate?
                    </p>
                    <button className="modal-first-btn-close" onClick={ () => setFirstModalActive(false) }>x</button>
                </div>
                <div className="overlay"></div>
            </div>
        </div>
    )
}

export default Metinvest

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
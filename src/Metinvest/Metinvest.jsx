import React, {useRef, useState} from 'react'
import './metinvest.css'
import leftArrow from '../img/assets/left-arrow.png'
import rightArrow from '../img/assets/next.png'
import santa1 from '../img/assets/santa1.png'
import closeBtn1 from '../img/assets/closebtn.png'
import firstModalBg from '../img/assets/modal-first-bg.jpg'
import sock1 from '../img/firstModalSocks/sock1.png'
import sock2 from '../img/firstModalSocks/sock2.png'
import sock3 from '../img/firstModalSocks/sock3.png'
import sock4 from '../img/firstModalSocks/sock4.png'
import sock5 from '../img/firstModalSocks/sock5.png'
import sock6 from '../img/firstModalSocks/sock6.png'
import sock7 from '../img/firstModalSocks/sock7.png'
import sock8 from '../img/firstModalSocks/sock8.png'
import sock9 from '../img/firstModalSocks/sock9.png'
import sock10 from '../img/firstModalSocks/sock10.png'
import mainSectionBg from '../img/assets/main-section-bg.jpg'
import logo from '../img/assets/logo.png'
import soundFire from '../img/assets/fire.png'
import soundMusic from '../img/assets/music.png'
import soundCat from '../img/assets/cat.png'
import soundQuestion from '../img/assets/question.png'
import mainSock1 from '../img/mainSocks/mainsock1.png'
import mainSock2 from '../img/mainSocks/mainsock2.png'
import mainSock3 from '../img/mainSocks/mainsock3.png'
import mainSock4 from '../img/mainSocks/mainsock4.png'
import mainSock5 from '../img/mainSocks/mainsock5.png'
import mainSock6 from '../img/mainSocks/mainsock6.png'
import mainSock7 from '../img/mainSocks/mainsock7.png'
import mainSock8 from '../img/mainSocks/mainsock8.png'
import mainSock9 from '../img/mainSocks/mainsock9.png'
import mainSock10 from '../img/mainSocks/mainsock10.png'
import dots from '../img/assets/dots.png'
import mainSockTextBg from '../img/assets/main-sock-text-bg.png'
import modalImage from '../img/assets/modal-image.png'
import qr from '../img/assets/qr.png'
import modalPrev from '../img/assets/modal-left.png'
import modalNext from '../img/assets/modal-right.png'
import modalSock from '../img/assets/modal-sock.png'
import modalActiveSock from '../img/assets/modal-sock-active.png'
import modalSweet from '../img/assets/modal-sweet.png'
import modalDisableSweet from '../img/assets/modal-sweet-disable.png'
import modalMessageBg from '../img/assets/modal-message-bg.png'
import resultsBg from '../img/assets/results-bg.png'
import christmasTree from '../img/assets/christmas-tree.png'
import floor from '../img/assets/floor.jpg'
import presents from '../img/assets/presents.png'
import armchair from '../img/assets/armchair.png'

const Metinvest = () => {

    const [sockModalActive, setSockModalActive] = useState(false)
    const [firstModalActive, setFirstModalActive] = useState(true)
    const [modalMessageActive, setModalMessageActive] = useState(false)
    const [modalMessageYesActive, setModalMessageYesActive] = useState(true)
    const [modalMessageThankYouActive, setModalMessageThankYouActive] = useState(false)
    const [votingInProcess, setVotingInProcess] = useState(false)
    const [voteError, setVoteError] = useState(false)

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
        {img: sock1},
        {img: sock2},
        {img: sock3},
        {img: sock4},
        {img: sock5},
        {img: sock6},
        {img: sock7},
        {img: sock8},
        {img: sock9},
        {img: sock10}
    ]
    const mainSockTexts = [
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        },
        {
            title: 'Снігур, Снічептах!',
            text: 'Снігур, насправді, Снічептах – сторічний чаклун, якому набридло людське товариство і він подався до лісу, вивчати тварин.'
        }
    ]
    const mainSocks = [
        {img: mainSock1},
        {img: mainSock2},
        {img: mainSock3},
        {img: mainSock4},
        {img: mainSock5},
        {img: mainSock6},
        {img: mainSock7},
        {img: mainSock8},
        {img: mainSock9},
        {img: mainSock10},
    ]
    const modalSocks = [
        {sock: modalSock},
        {sock: modalSock},
        {sock: modalActiveSock},
        {sock: modalSock},
        {sock: modalSock},
        {sock: modalSock},
        {sock: modalSock},
        {sock: modalSock},
        {sock: modalSock},
        {sock: modalSock},
    ]
    const modalSweets = [
        {sweet: modalDisableSweet},
        {sweet: modalSweet},
        {sweet: modalSweet}
    ]
    const onModalMessageClick = () => {
        makeVote()

        setModalMessageYesActive(false)
        setVotingInProcess(true)
        makeVote().then( async () => {

        }).catch( async (e) => {
            console.log(e)
            setVoteError(true)
        }).finally( () => {
            setVotingInProcess(false)
            setModalMessageThankYouActive(true)
            setTimeout(() => setModalMessageActive(false), 3000)
        })

    }
    const resultsArray = [
        {img: mainSock1, votes: 523, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock2, votes: 223, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock3, votes: 45, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock4, votes: 44, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock5, votes: 12, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock6, votes: 8, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock7, votes: 4, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock8, votes: 2, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock9, votes: 1, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'},
        {img: mainSock10, votes: 0, title: 'Сенсорная комната для центра реабилитации детей с инвалидностью'}
    ]

    const makeVote = async () => {
        await delay(3000)
    }

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
            {/*<div className="main-section" style={{backgroundImage: `url(${mainSectionBg})`}}>*/}
            {/*    <div className="main-head">*/}
            {/*        <img src={logo} alt="Logo"/>*/}
            {/*        <div className="main-sounds">*/}
            {/*            <img src={soundFire} alt="Fire"/>*/}
            {/*            <img src={soundMusic} alt="Music"/>*/}
            {/*            <img src={soundCat} alt="Cat"/>*/}
            {/*            <img src={soundQuestion} alt="Question"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="main-timer">*/}
            {/*        time*/}
            {/*    </div>*/}
            {/*    <div className="main-sock-texts">*/}
            {/*        {mainSockTexts.map((t) => <MainSockText title={t.title} text={t.text} />)}*/}
            {/*    </div>*/}
            {/*    <div className="main-socks">*/}
            {/*        {mainSocks.map((s) => <MainSock img={s.img} setSockModalActive={setSockModalActive} />)}*/}
            {/*    </div>*/}
            {/*    <div className="main-fire-cat">*/}
            {/*        <div className="main-fire"></div>*/}
            {/*        <div className="main-cat"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={sockModalActive ? 'modal active' : 'modal'}>*/}
            {/*    <div className="modal-window-container">*/}
            {/*        <div className="modal-head">*/}
            {/*            <div className="modal-socks-container">*/}
            {/*                <div className="modal-prev"><img src={modalPrev} alt="Previous slide"/></div>*/}
            {/*                <div className="modal-socks">*/}
            {/*                    {modalSocks.map((i) => <img className="modal-sock" src={i.sock} alt="Sock"/>)}*/}
            {/*                </div>*/}
            {/*                <div className="modal-next"><img src={modalNext} alt="Next slide"/></div>*/}
            {/*            </div>*/}
            {/*            <div className="modal-left-votes">*/}
            {/*                <p className="modal-left-vote-text">У вас залишилось голосів</p>*/}
            {/*                <div className="modal-left-vote-imgs">*/}
            {/*                    {modalSweets.map((s) => <img src={s.sweet} alt="Sweet"/>)}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <button className="btn-close" onClick={() => setSockModalActive(false)}><img src={closeBtn1} alt="To Close"/></button>*/}
            {/*        </div>*/}
            {/*        <div className="modal-window">*/}
            {/*            <h1 className='modal-title'>Снігур, Снічептах!</h1>*/}
            {/*            <img className='modal-img' src={modalImage} alt="Modal Image"/>*/}
            {/*            <p className='modal-desc'>*/}
            {/*                Марко та Оленка бавилися у сніжки, ліпили снігових баб і цілі фортеці.*/}
            {/*                З ними часто бавився Жартун з Найвеселішої країни Найсмішніших жартунів*/}
            {/*                (чи як там вона називається) та Сонячний Промінчик. Кузь та Русалоньки зараз спали аж до літа. <br/><br/>*/}
            {/*                Інколи він перетворювався на вовка і бігав зі зграєю, інколи – на ширяючого в піднебессі орла.*/}
            {/*                А зараз от, він вирішив спробувати прожити зиму снігуром. Хоч*/}
            {/*            </p>*/}
            {/*            <h3 className='modal-subtitle'>Марко та Оленка бавилися у сніжки</h3>*/}
            {/*            <div className='modal-btns-wrapper'>*/}
            {/*                <div className='modal-btns'>*/}
            {/*                    <a href="#" className="modal-btn-one" onClick={() => setModalMessageActive(true)}>віддати свій голос</a>*/}
            {/*                    <div className={modalMessageActive ? 'modal-btns-message-wrapper active' : 'modal-btns-message-wrapper'} style={{backgroundImage: `url(${modalMessageBg}`}}>*/}
            {/*                        <div className="modal-btns-message">*/}
            {/*                            <img className='modal-dots' src={dots} alt="Dots"/>*/}
            {/*                            <div className={modalMessageYesActive ? '' : 'modal-message-content-disabled'}>*/}
            {/*                                <p className="modal-btns-message-text">Підтвердіть своє бажання натиснувши “ТАК”</p>*/}
            {/*                                <div className="modal-btns-message-btns">*/}
            {/*                                    <a href="#" className="modal-btns-message-btn" onClick={onModalMessageClick}>так</a>*/}
            {/*                                    <a href="#" className="modal-btns-message-btn" onClick={() => setModalMessageActive(false)}>ні</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className={votingInProcess ? 'preloader active' : 'preloader'}>*/}
            {/*                                <div className="loader"></div>*/}
            {/*                            </div>*/}
            {/*                            <div className={modalMessageThankYouActive ? '' : 'modal-message-content-disabled'}>*/}
            {/*                                <p className="modal-btns-message-text">Дякуємо!</p>*/}
            {/*                            </div>*/}
            {/*                            <div className={voteError ? '' : 'modal-message-content-disabled'}>*/}
            {/*                                <p className="modal-btns-message-text">Что-то пошло не так <br/>Повторите попытку позже</p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <a href='#' className="modal-btn-two">відправити гроші</a>*/}
            {/*                </div>*/}
            {/*                <div className='modal-qr-code'>*/}
            {/*                    <img src={qr} alt="QR Code"/>*/}
            {/*                    <p className="modal-qr-text">Марко та Оленка</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="overlay"></div>*/}
            {/*</div>*/}
            {/*<div className={firstModalActive ? "modal-first" : "modal-first disabled"}>*/}
            {/*    <div className="modal-first-container">*/}
            {/*        <div className="modal-first-window">*/}
            {/*            <div className="modal-first-wrapper">*/}
            {/*                <h2 className='modal-first-title'>Ласкаво просимо до онлайн порталу чарівного благодійного святкового свята!</h2>*/}
            {/*            </div>*/}
            {/*            <img className="modal-first-image" src={santa1} alt="Santa"/>*/}
            {/*            <div className="modal-first-wrapper">*/}
            {/*                <p className='modal-first-text'>*/}
            {/*                    Марко та Оленка бавилися у сніжки,*/}
            {/*                    ліпили снігових баб і цілі фортеці.*/}
            {/*                    З ними часто бавився Жартун з Найвеселішої країни*/}
            {/*                    Найсмішніших жартунів (чи як там вона називається)*/}
            {/*                    та Сонячний Промінчик. Кузь та Русалоньки зараз спали аж до літа.*/}
            {/*                </p>*/}
            {/*                <div className="first-modal-socks">*/}
            {/*                    {firstModalSock.map((s) => <FirstModalSock img={s.img}/>)}*/}
            {/*                </div>*/}
            {/*                <p className="modal-first-text2">*/}
            {/*                    Інколи він перетворювався на вовка і бігав зі зграєю,*/}
            {/*                    інколи – на ширяючого в піднебессі орла. А зараз от,*/}
            {/*                    він вирішив спробувати прожити зиму снігуром. Хоч чарівникові й було*/}
            {/*                    сто років, але він любив побавитися, посміятися та поганяти за сніжинками.*/}
            {/*                </p>*/}
            {/*                <p className="modal-first-text3">Кузь та Русалоньки зараз спали аж до літа.</p>*/}
            {/*                <a href="#" className="modal-first-button" onClick={() => setFirstModalActive(false)}>зробити чудо</a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="modal-first-btn-close" onClick={() => setFirstModalActive(false)}>*/}
            {/*        <img src={closeBtn1} alt="Close"/>*/}
            {/*    </button>*/}
            {/*    <div className="overlay overlay-first" style={{background: `url(${firstModalBg}) no-repeat center center / cover`}}></div>*/}
            {/*</div>*/}
            <div className="results" style={{backgroundImage: `url(${resultsBg})`}}>
                <div className="result-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="results-content">
                    <h1 className="results-content-title">Результати голосування</h1>
                    <div className="results-content-wrapper">
                        {resultsArray.map((r) => <ResultItem img={r.img} votes={r.votes} title={r.title} />)}
                    </div>
                    <div>
                        <img className="results-christmas-tree" src={christmasTree} alt="Christmas Tree"/>
                        <img className="results-floor" src={floor} alt="floor"/>
                        <img className="results-presents" src={presents} alt="presents"/>
                        <img className="results-armchair" src={armchair} alt="armchair"/>
                    </div>
                </div>
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
            <img src={props.img} alt='Sock'/>
        </div>
    )
}
const MainSock = (props) => {
    return (
        <div className="main-sock" onClick={() => props.setSockModalActive(true)}>
            <img src={props.img} alt='Sock'/>
        </div>
    )
}

const MainSockText = (props) => {
    return (
        <div className="main-sock-text-container" style={{backgroundImage: `url(${mainSockTextBg})`}}>
            <div className="main-sock-text">
                <img className="main-sock-text-dots" src={dots} alt="Dots"/>
                <h2 className="main-sock-title">{props.title}</h2>
                <p className="main-sock-desc">{props.text}</p>
            </div>
        </div>
    )
}

const ResultItem = (props) => {
    return (
        <div className='result-item'>
            <div className="result-item-img">
                <img src={props.img} alt="Sock"/>
            </div>
            <p className="result-item-votes">{props.votes}</p>
            <p className="result-item-votes-text">Голосів</p>
            <h2 className="result-item-title">{props.title}</h2>
            <a href="#" className="result-item-btn">деталі</a>
        </div>
    )
}

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
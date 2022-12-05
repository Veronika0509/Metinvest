import React, {useRef, useState, useEffect} from 'react'
import dayjs from "dayjs";
import Parser from 'html-react-parser';
import './metinvest.css'
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
import cat from '../audio/cat.mp3'
import fire from '../audio/fire.mp3'
import music from '../audio/music.mp3'
import Slide1 from '../img/slidesImages/slide1.jpeg'
import Slide2 from '../img/slidesImages/slide2.jpeg'
import Slide3 from '../img/slidesImages/slide3.jpeg'
import Slide4 from '../img/slidesImages/slide4.JPG'
import Slide5 from '../img/slidesImages/slide5.jpeg'
import Slide6 from '../img/slidesImages/slide6.jpg'
import Slide7 from '../img/slidesImages/slide7.jpeg'
import Slide8 from '../img/slidesImages/slide8.jpg'
import Slide9 from '../img/slidesImages/slide9.jpeg'
import Slide10 from '../img/slidesImages/slide10.jpeg'
import fireItem1 from '../img/fireItems/fireitem1.png'
import fireItem2 from '../img/fireItems/fireitem2.png'
import fireItem3 from '../img/fireItems/fireitem3.png'
import fireItem4 from '../img/fireItems/fireitem4.png'
import fireItem5 from '../img/fireItems/fireitem5.png'
import fireItem6 from '../img/fireItems/fireitem6.png'
import fireItem7 from '../img/fireItems/fireitem7.png'
import catTail from '../img/assets/cattail.png'
import resultsGradient from '../img/assets/results-gradient.png'
import firstModalImgTwo from '../img/assets/first-modal-img-two.png'


const serverUrl = "http://localhost:3003/"
// const serverUrl = "https://metinvest-app.herokuapp.com/"
const userId = getUserId()

const defaultRemainingTime = {
    days: '00',
    hours: '00',
    minutes: '00'
}
const countdownTimestampMs = new Date('December 10, 2022 10:00:00').getTime()

const Metinvest = () => {
    const [sockModalActiveId, setSockModalActiveId] = useState()
    const [firstModalActive, setFirstModalActive] = useState(true)
    const [modalMessageActive, setModalMessageActive] = useState(false)
    const [modalMessageYesActive, setModalMessageYesActive] = useState(true)
    const [modalMessageThankYouActive, setModalMessageThankYouActive] = useState(false)
    const [votingInProcess, setVotingInProcess] = useState(false)
    const [voteError, setVoteError] = useState(false)
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const [timeOut, setTimeOut] = useState((countdownTimestampMs - (new Date()).getTime()) < 0)
    // const [timeOut, setTimeOut] = useState(true)
    const [resultsArray, setResultsArray] = useState([])
    const [votingRate, setVotingRate] = useState({})
    const [position, setPosition] = useState(0)
    const [votesLeft, setVotesLeft] = useState(timeOut ? 0 : getVotesLeftFromLocalstorage())
    const [catClicked, setCatClicked] = useState(false)
    const [fireClicked, setFireClicked] = useState(false)
    const [musicClicked, setMusicClicked] = useState(false)
    const [dotInTurntable, setDotInTurntable] = useState(false)
    const [results, setResults] = useState(!timeOut)


    const [slides, setSlider] = useState([
        {
            number: 1,
            title: 'Кімната, що дарує відчуття',
            text: 'Для малечі з запорізького Центру реабілітації дітей з інвалідністю справжнім дивом було б навчитися всеосяжно відчувати навколишній світ, яскравіше проживати приємні події, яскраво відзначати успіхи в навчанні. У наших силах перетворити цю мрію в мету.\n' +
                'Ми створимо в Центрі особливе місце – чарівну дитячу кімнату. Там буде спеціальне обладнання, що допоможе дітлахам повноцінно відчувати емоції, адаптуватися до навколишнього життя та глибше сприймати турботу, любов і радість.\n' +
                'У базовий набір сенсорної кімнати ввійде 27 предметів професійного устаткування. Якщо вважаєте, що цей проєкт вартий додаткової уваги та хочете розширити кількість корисних речей, ви можете віддати за нього свої голоси-цукерки – один, два чи всі три.\n' +
                'Якщо за підсумком загального голосування проєкт посяде третє місце, у сенсорній кімнаті з’явиться вже 46 необхідних приладів. За друге місце простір обладнають 82 розвивальними предметами. А якщо голоси виведуть проєкт на перше місце, у дітей запорізького Центру реабілітації разом із сенсорною кімнатою збільшеної комплектації з’явиться ще одна функціональна локація – кімната соціально-побутової адаптації.\n',
            img: Slide1
        },
        {
            number: 2,
            title: 'Новорічний затишок',
            text: 'До війни родина Бересневих жила в селі Михайлівка Запорізької області. Мама піклувалася про п’ятьох неповнолітніх діточок самотужки. Однак ворожа армія забрала в них рідну людину й позбавила домівки: мати загинула під час обстрілу, а село досі окуповане ворогом. Усіх дітей до Запоріжжя вивіз двоюрідний дядько Олександр. У свої 23 роки він оформлює опіку над племінниками та намагається подбати про знедолених – Злату, Іринку, Віку, першокласника Дмитра і п’ятнадцятирічну Настю.\n' +
                'Справжнім дивом для цієї сім’ї було б повернення до нормального життя. Тому ми прагнемо створити їм затишну атмосферу домашнього свята й подарувати справжній родинний Новий рік – з ялинкою, подарунками та здійсненням бажань. Завдяки вашій чуйності найближчим часом до родини Бересневих приїде святкова ялинка з прикрасами. Під неї ми покладемо комплекти зимового одягу для кожного з діточок, ноутбук, два телефони, мікрохвильову піч, мультиварку й великий побутовий набір.\n' +
                'Якщо за підсумками голосування це новорічне диво опиниться серед найочікуваніших, ми додамо подарунків. Третє місце – до базового комплекту плюс пральна машина з сушаркою. Друге – телевізор. А за перше місце під ялинкою буде ще й джерело безперервного живлення EcoFlow.\n',
            img: Slide2
        },
        {
            number: 3,
            title: '“Сонячна” мрія',
            text: 'У дитинстві ми всі вірили в казки. І в цей непростий час хочемо вірити знову, бо там добро завжди долає зло. Саме тому казка, яка несподівано трапиться в житті підопічних «Криворізької міської організації допомоги дітям та людям з синдромом Дауна "Сонячні діти Криворіжжя”», обов’язково зміцнить їх віру в перемогу світла.\n' +
                'Завдяки вашій турботі діти в супроводі одного з батьків вирушать у новорічну подорож до трускавецького «Діснею». Тут пройде реабілітація, соціалізація, опанування нових навичок, комунікація з однолітками без нозологій. На малечу чекатимуть цілющі мінеральні води, гірське повітря, смачні карпатські страви та спеціально розроблена програма з походами й спортивними заходами.\n' +
                'Це новорічне диво гарантовано відбудеться для десяти дітей у супроводі одного з дорослих. Однак якщо ви хочете, щоб «Дісней-365» відвідало якомога більше сонячної малечі, проголосуйте «цукерочками» за цей проєкт. Третє місце в загальному підсумку – група розшириться до 13 дітлахів у супроводі одного з дорослих. Друге – і вже 17 особливих криворіжців поїде в Карпати. Перше місце збільшить групу до двадцяти п’яти діточок із супроводом близької людини. \n',
            img: Slide3
        },
        {
            number: 4,
            title: 'Диво-піч для бабусь і дідусів',
            text: 'Це тяжко усвідомити, але для когось гарячі страви щодня – уже диво. Ще болісніше знати, що подібне трапляється з тими, хто не може самостійно про себе піклуватися.\n' +
                'У двох будинках милосердя в Кривому Розі живуть сто п’ятдесят людей похилого віку. За вимкненого світла вони залишаються без теплої їжі, бо генератори закладів не тягнуть стандартні електроплити. Щоб нагодувати всіх стареньких, працівники варять страви у дворі на багатті.\n' +
                'Проблему можуть розв’язати сучасні пароконвекційні печі. Устаткування на 60% зменшить споживання електроенергії. Цього достатньо, щоб живлення генераторів вистачало для повноцінного приготування їжі. Завдяки вам такі прилади обов’язково придбають і встановлять у кожному з будинків милосердя.\n' +
                'Якщо за результатами голосування проєкт опиниться на третьому місці серед новорічних див, ми відправимо стареньким ще дві сушильні машини. Друге місце додасть до подарунків пральні машини. А якщо проєкт опиниться на першій сходинці рейтингу, до всього зазначеного приєднається медичне обладнання: пульсоксиметри, пересувні кварци, напівавтоматичні тонометри, багатофункціональні каталки й електрокардіограф.\n',
            img: Slide4
        },
        {
            number: 5,
            title: 'Маленьке диво для великої родини',
            text: 'Подружжя Кудлаїв виховує дев’ятеро дітей: старшому – вже сімнадцять років, а найменшому два. Невдовзі Олена та Євген стануть батьками вдесяте. Родина мешкає у прифронтовому Покровську. Чоловік – інвалід ІІ групи з дитинства, дружина працює медсестрою. Сім’я велика й от-от стане ще більшою, однак їхати з рідного міста вони не збираються – вірять у власні сили та перемогу України.\n' +
                'Представники Метінвесту запитали, яка допомога необхідна родині. Кудлаї ж скромно відповіли, що шукають можливість отримати тверде паливо для котла, бо через обстріли газ  часто вимикають. Це прохання обов’язково виконають. Також завдяки вашій щедрості ми створимо для багатодітної родини святкові дива. Напередодні Різдва до них завітає Святий Миколай. Він привезе дрова, вугілля й мішок подарунків. У чарівній торбі буде три ноутбуки для навчання, два окремих ліжка для дорослих дітей та іграшки малечі.\n' +
                'Якщо ви хочете збільшити кількість подарунків для сім’ї Кудлай, покладіть у панчоху голос-цукерку. Тоді за третє місце в рейтингу проєктів під ялинку додатково потрапить пральна й сушильна машинки. Друге місце приплюсує сюди ще посудомийну машину, дванадцять стільців і хлібопіч. А перше місце в голосуванні за найочікуваніші дива додасть до всього зарядну станцію EcoFlow.\n',
            img: Slide5
        },
        {
            number: 6,
            title: 'Затишний дім далеко від дому',
            text: 'Для кожної людини домівка – особливе місце, що гріє серце. Вдома на нас чекають близькі, радо зустрічають діти, батьки готують сніданки. Залишати дім без розуміння, чи буде можливість повернутися, надзвичайно важко. Певно, тому родина Мицик до останнього була в рідному Покровську.\n' +
                'Зараз велика сім’я шукає свою точку опори далеко від власної оселі – у Тернопільській області. На новому місці неабияк підтримують щирі усмішки дітей. А їх у Наталії й Олега аж восьмеро – чотири дівчинки та чотири хлопчики. Завдяки вашій доброті малеча Мицик буде усміхатися набагато частіше, бо до новорічних свят дітлахи отримають чудові подарунки. Трьом старшим донькам ми передамо планшети для навчання. Трьом старшим синам – омріяні велосипеди. Найменшим Ігорю й Тетянці відправимо іграшки. \n' +
                'Якщо за результатами голосування цей проєкт опиниться на третьому місці в переліку найочікуваніших див, до цих подарунків додамо зарядну станцію EcoFlow. Друге місце – ще плюс пральна машина. Перше місце – і в Тернопільську область до багатодітної родини поїдуть зарядна станція, пралка й телевізор.\n',
            img: Slide6
        },
        {
            number: 7,
            title: 'Диво для родини захисника',
            text: 'Яна Наумкіна – мама дев’яти дітей. Найменшому Богданчику чотири роки, старшій доньці Валерії – сімнадцять. Чоловік захищає Україну в лавах ЗСУ.\n' +
                'З Маріуполя всією родиною виходили пішки. Шлях до Бердянська тривав шістнадцять днів. Звідти родина потрапила до Запоріжжя, та згодом повернулася на Донеччину – у Покровськ. Тут добрі люди надали маріупольцям житло. Попри відносну безпеку, багатодітна сім’я щоденно постає перед труднощами: у будинку не вистачає ліжок на всіх, немає ані вугілля, ані дров. Можливості дистанційно навчатися теж нема, бо в дітей відсутні гаджети.\n' +
                'Завдяки вашій небайдужості до новорічних свят маріупольці отримають усе необхідне і навіть трішки більше. Ми привеземо до Покровська зимовий одяг на всю родину, три двоповерхові ліжка для дітей, два ноутбуки школярам, іграшки для наймолодших, а також вугілля та дрова на зиму.\n' +
                'Хочете збільшити кількість подарунків? Голосуйте цукерочками за проєкт. Якщо він опиниться на третьому місці серед новорічних див, до гарантованого набору ми додамо пральну машину. Друге місце – сім’я отримає ще й телевізор. А перше місце в загальному заліку проєктів принесе зарядну станцію EcoFlow.\n',
            img: Slide7
        },
        {
            number: 8,
            title: 'Бути Святим Миколаєм для малечі',
            text: 'Родина Кривоносових відчула на собі жахіття війни. У найстрашніший час бомбардування Маріуполя ще вагітна тоді мати Ніна з шестирічним Михайликом, семирічною Валерією та дванадцятирічним Юрчиком місяць провели в підвалах свого будинку. Вони пройшли через фільтрацію, вимушену депортацію до окупованого Донецька, піший вихід через ворожі блокпости. Так сім’я опинилася в Запоріжжі, потім у Дніпрі, а згодом – у Новомосковську.  Наразі матуся з трьома дітьми та немовлятами-двійнятами Софією і Соломією в безпеці, їм надали житло й гуманітарну допомогу. Батько ж боронить Україну від загарбників у лавах ЗСУ.\n' +
                'Для Кривоносових грудень – щедра на свята пора, бо цього місяця у двох дорослих дітей дні народження. Для них отримати омріяні подарунки – щось неймовірне, майже нездійсненне. Але ви зробите для дітвори справжнє зимове диво. Щоб задум удався, Ніна просила малечу написати листа Святому Миколаю та щиро побажати чогось. Цей лист опинився в потрібних руках, тому діти неодмінно отримають ноутбук, портативну зарядку EcoFlow до нього, планшет, конструктор LEGO City, електросамокат, боксерську грушу та PlayStation з іграми.\n' +
                'Кількість подарунків для багатодітної родини можна збільшити, проголосувавши за цей проєкт цукеркою. Якщо він опиниться в переліку найочікуваніших див на третьому місці, Святий Миколай здійснить і мамине бажання та принесе пральну машину з сушкою. Друге чи перше місце в рейтингу голосів подарує родині ще й великий телевізор.\n',
            img: Slide8
        },
        {
            number: 9,
            title: 'Майстерня для маленьких митців',
            text: '146 соціально незахищених дітей живуть у спеціалізованій школі «Гармонія» в місті Кам’янське постійно, ще 26 – на індивідуальному навчанні. В освітньому закладі є мистецька майстерня, але немає обладнання й матеріалів, щоб учні постійно навчалися художньої творчості.\n' +
                'Завдяки вам станеться перше маленьке диво – майстерня запрацює на повну. І незабаром вона обов’язково підготує талановитих митців, які прославлятимуть вільну й незалежну Україну майбутнього. А поки творчість стане для дітей надійною опорою в буремні часи.\n' +
                'Якщо ви вважаєте, що серед усіх новорічних проєктів саме цей вартий додаткової уваги, віддайте один, два чи всі три голоси за нього. Третє місце в загальному заліку додасть до обладнання майстерні особистий подарунок кожній дитині спеціалізованої школи «Гармонія». Друге місце істотно розширить перелік святкових див: окрім обладнання для творчої майстерні, у місцях загального користування встановлять сім 100-літрових бойлерів, щоб дітям завжди було комфортно. Перемога в голосуванні приплюсує до майстерні та бойлерів чотири інтерактивні дошки в навчальні класи.\n',
            img: Slide9
        },
        {
            number: 10,
            title: 'Причіп новорічних подарунків',
            text: 'Родина Костіних евакуювалася з Авдіївки. Щоб зрозуміти, наскільки сильно новорічне диво необхідне цим людям, прочитайте слова мами Ольги:\n' +
                '– Нас у сім’ї шестеро. Даринці п’ятнадцять років, Вероніці тринадцять, Саші два рочки, а Гришку лише рік. З нами живе мій батько, його поранило під час обстрілів. Я вдова, про дітей дбаю самотужки, ще й інвалід ІІІ групи. Наразі нам дуже потрібна мікрохвильовка й мультиварка. Опалюємо помешкання дровами, та однаково виходить дорого. Тож будемо щиро вдячні й за тверде паливо. Але найбільша проблема з перевезенням речей. У нас є старенькі «Жигулі», і якщо ми будемо змушені знову кудись переїжджати через війну, нам дуже потрібен хоч уживаний причіп.  \n' +
                'Завдяки вашій чуйності до села Тахтаулово Полтавської області, де зараз живе родина авдіївців, перед Новим роком приїде новенький причіп. А в ньому буде мультиварка, мікрохвильова піч та іграшки для дітей. Якщо ви проголосуєте за цей проєкт і він опиниться на третьому місці, то разом із причепом привезуть ще й дрова. Друге місце додасть до всього вищезазначеного ноутбук, два телефони та планшет для навчання дітей. У випадку, якщо проєкт опиниться на першій сходинці в рейтингу найочікуваніших див, серед подарунків буде зарядна станція EcoFlow. \n',
            img: Slide10
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

    const projects = [
        {
            img: mainSock1,
            title: 'Кімната, що дарує відчуття',
            shortText: 'Обладнання для спеціалізованої сенсорної кімнати в Центрі реабілітації дітей з інвалідністю (м. Запоріжжя).'
        },
        {
            img: mainSock2,
            title: 'Новорічний затишок',
            shortText: 'Допомога родині з п’яти дітей-сиріт із Запорізької області.',
        },
        {
            img: mainSock3,
            title: '“Сонячна” мрія',
            shortText: 'Реабілітаційна поїздка для криворізьких дітей з синдромом Дауна.',
        },
        {
            img: mainSock4,
            title: 'Диво-піч для бабусь і дідусів',
            shortText: 'Пароконвектомати для двох будинків милосердя у Кривому Розі, де проживають понад сто людей похилого віку.',
        },
        {
            img: mainSock5,
            title: 'Маленьке диво для великої родини',
            shortText: 'Допомога родині з десятьма діточками (м. Покровськ).',
        },
        {
            img: mainSock6,
            title: 'Затишний дім далеко від дому',
            shortText: 'Допомога родині, яка виховує вісьмох діточок (м. Покровськ).',
        },
        {
            img: mainSock7,
            title: 'Диво для родини захисника',
            shortText: 'Підтримка багатодітної маріупольської родини з дев’ятьма дітьми (м. Покровськ).',
        },
        {
            img: mainSock8,
            title: 'Бути Святим Миколаєм для малечі',
            shortText: 'Допомога багатодітній родині з Маріуполя, що зараз мешкає на Дніпропетровщині.',
        },
        {
            img: mainSock9,
            title: 'Майстерня для маленьких митців',
            shortText: 'Обладнання творчої майстерні для спеціалізованої школи «Гармонія» (м. Кам’янське).',
        },
        {
            img: mainSock10,
            title: 'Причіп новорічних подарунків',
            shortText: 'Допомога багатодітній родині з Авдіївки.',
        },
    ].map((project, index) => {
        project.id = index.toString()
        return project
    })

    const modalSocks = [
        {id: 0, sock: modalSock},
        {id: 1, sock: modalSock},
        {id: 2, sock: modalActiveSock},
        {id: 3, sock: modalSock},
        {id: 4, sock: modalSock},
        {id: 5, sock: modalSock},
        {id: 6, sock: modalSock},
        {id: 7, sock: modalSock},
        {id: 8, sock: modalSock},
        {id: 9, sock: modalSock},
    ]

    const modalSweets = [
        {sweet: modalDisableSweet},
        {sweet: modalSweet},
        {sweet: modalSweet}
    ]

    const onModalMessageClick = () => {
        const projectId = sockModalActiveId
        console.log(projectId)

        if (getVotesLeftFromLocalstorage() <= 0) {
            // todo what to do in case of no more votes?
            console.error("No more votes lest")
            setModalMessageYesActive(false)
            onVoteError()
            return
        }

        if (isProjectAlreadyVoted(projectId)) {
            // todo show message about double vote
            // better hide voting button for voted projects
            console.warn("Already voted")
            onVoteError()
            setModalMessageYesActive(false)
            return
        }

        setModalMessageYesActive(false)
        setVotingInProcess(true)

        makeVote(projectId).then(async () => {
            setVotesLeft(registerVoteMadeLocally(projectId))
        }).catch(async (e) => {
            console.log(e)
            onVoteError(e)
        }).finally(() => {
            setVotingInProcess(false)
            setModalMessageThankYouActive(true)
            setTimeout(() => {
                setModalMessageActive(false)
                setModalMessageThankYouActive(false)
            }, 3000)
        })

    }
    const onVoteError = () => {
        setModalMessageYesActive(false)
        setVoteError(true)
        setTimeout(() => setModalMessageActive(false), 5000)
    }

    const makeVote = async (projectId) => {
        // await delay(3000)
        const result = await fetch(serverUrl + `vote?userId=${userId}&projectId=${projectId}`, {
            method: "post"
        })

        if (!result.ok) {
            throw new Error("Cannot vote")
        }
    }

    const getRemainingTimeUntilMsTimestamp = (timestampMs) => {
        const timestampDayjs = dayjs(timestampMs)
        const nowDayjs = dayjs()
        return {
            days: getRemainingDays(nowDayjs, timestampDayjs),
            hours: getRemainingHours(nowDayjs, timestampDayjs),
            minutes: getRemainingMinutes(nowDayjs, timestampDayjs)
        }
    }
    const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
        const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
        return padWithZeros(minutes, 2)
    }
    const getRemainingHours = (nowDayjs, timestampDayjs) => {
        const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24
        return padWithZeros(hours, 2)
    }
    const getRemainingDays = (nowDayjs, timestampDayjs) => {
        const days = timestampDayjs.diff(nowDayjs, 'days')
        return days.toString()
    }
    const padWithZeros = (number, minLength) => {
        const numberString = number.toString()
        if (numberString.length >= minLength) return numberString
        return "0".repeat(minLength - numberString.length) + numberString
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs])

    useEffect(() => {
        // if (timeOut) {
        fetch(serverUrl + `votes`).then(async (response) => {
            if (response.ok) {
                const data = await response.json()
                const votesByProject = {}
                const rateByProject = {}

                let min = 1000000, max = 0;
                data.forEach((item) => {
                    votesByProject[item.project] = item.votes

                    if (item.votes > max) {
                        max = item.votes
                    }

                    if (item.votes < min) {
                        min = item.votes
                    }
                })

                data.forEach((item) => {
                    rateByProject[item.project] = 1 - ((max - min) - (item.votes - min)) / (max - min)
                })

                setResultsArray(projects.map(project => {
                    return {...project, votes: votesByProject[project.id] ?? 0}
                }).sort((a, b) => b.votes - a.votes))

                setVotingRate(rateByProject)
            }
        })
        // }
    }, [])

    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }

    const audioCat = React.createRef()
    const audioFire = React.createRef()
    const audioMusic = React.createRef()
    const onCatClick = () => {
        if (catClicked) {
            audioCat.current.pause()
            setCatClicked(false)
        } else {
            audioCat.current.play()
            setCatClicked(true)
        }
    }
    const onFireClick = () => {
        if (fireClicked) {
            audioFire.current.pause()
            setFireClicked(false)
        } else {
            audioFire.current.play()
            setFireClicked(true)
        }
    }
    const onMusicClick = () => {
        if (musicClicked) {
            audioMusic.current.pause()
            setDotInTurntable(false)
            setMusicClicked(false)
        } else {
            audioMusic.current.play()
            setDotInTurntable(true)
            setMusicClicked(true)
        }
    }

    const mainSlides = React.useRef(null)

    useEffect(() => {
        if (Number(sockModalActiveId) < 0) {
            setSockModalActiveId(0)
        }
        if (Number(sockModalActiveId) >= projects.length) {
            setSockModalActiveId((projects.length - 1).toString())
        }
        if (sockModalActiveId !== undefined) {
            const newPosition = Number(sockModalActiveId) * 1200
            mainSlides.current.childNodes.forEach((slide) => {
                slide.style = `transform: translateX(${-newPosition}px)`
            })
            setPosition(newPosition)
        }
        setModalMessageActive(false)
        setModalMessageThankYouActive(false)
        setModalMessageYesActive(true)
        setVoteError(false)
    }, [sockModalActiveId])

    const onNextSlideClick = () => {
        setSockModalActiveId((Number(sockModalActiveId) + 1).toString())
    }

    const onPrevSlideClick = () => {
        setSockModalActiveId((Number(sockModalActiveId) - 1).toString())
    }

    return (
        <div>
            <audio ref={audioCat}>
                <source src={cat} type="audio/mpeg"/>
            </audio>
            <audio ref={audioFire}>
                <source src={fire} type="audio/mpeg"/>
            </audio>
            <audio ref={audioMusic}>
                <source src={music} type="audio/mpeg"/>
            </audio>
            <div className="main">
                {!timeOut ? <>
                    <div className="main-section" style={{backgroundImage: `url(${mainSectionBg})`}}>
                        <div className="main-head">
                            <img src={logo} alt="Logo"/>
                            <div className="main-sounds">
                                <img src={soundFire} alt="Fire" onClick={onFireClick}/>
                                <img src={soundMusic} alt="Music" onClick={onMusicClick}/>
                                <img src={soundCat} alt="Cat" onClick={onCatClick}/>
                                <img src={soundQuestion} alt="Question" onClick={() => setFirstModalActive(true)}/>
                            </div>
                        </div>
                        <div className="main-turntable" onClick={onMusicClick}>
                            <div className={dotInTurntable ? 'dot active' : 'dot'}></div>
                        </div>
                        <div className="main-timer">
                            <div>
                                <span className="time-days">{remainingTime.days}:</span>
                                <span className="time-days-text">днів</span>
                            </div>
                            <div>
                                <span className="time-hours">{remainingTime.hours}:</span>
                                <span className="time-hours-text">годин</span>
                            </div>
                            <div>
                                <span className="time-minutes">{remainingTime.minutes}</span>
                                <span className="time-minutes-text">хвилин</span>
                            </div>
                        </div>
                        <div className="main-socks">
                            {projects.map((s) => <MainSock title={s.title} text={s.shortText} img={s.img}
                                                           voted={isProjectAlreadyVoted(s.id)}
                                                           votingRate={votingRate}
                                                           setSockModalActiveId={setSockModalActiveId}
                                                           id={s.id}/>)}
                        </div>
                        <div className="main-fire-cat">
                            <div className={fireClicked ? 'main-fire active' : 'main-fire'} onClick={onFireClick}>
                                <img className='fire-item' src={fireItem1} alt="fireItem"/>
                                <img className='fire-item' src={fireItem2} alt="fireItem"/>
                                <img className='fire-item' src={fireItem3} alt="fireItem"/>
                                <img className='fire-item' src={fireItem4} alt="fireItem"/>
                                <img className='fire-item' src={fireItem5} alt="fireItem"/>
                                <img className='fire-item' src={fireItem6} alt="fireItem"/>
                                <img className='fire-item' src={fireItem7} alt="fireItem"/>
                            </div>
                            <div className='main-cat' onClick={onCatClick}>
                            </div>
                            <img className={catClicked ? 'cat-tail active' : 'cat-tail'} src={catTail} alt="Cat Tail"/>
                        </div>
                    </div>
                    <div className={firstModalActive ? "modal-first" : "modal-first disabled"}>
                        <div className="modal-first-container">
                            <div className="modal-first-window">
                                <div className="modal-first-wrapper">
                                    <h2 className='modal-first-title'>Ласкаво просимо до чарівної кімнати новорічних
                                        див!</h2>
                                </div>
                                <img className="modal-first-image" src={santa1} alt="Santa"/>
                                <div className="modal-first-wrapper">
                                    <p className='modal-first-text'>
                                        Кожного року ми отримуємо новорічні подарунки – від близьких, друзів,
                                        корпоративні сувеніри від компанії. Але цьогоріч усе інакше: змінюються
                                        пріоритети, дії стають іншими, звичні речі набувають надважливого значення.
                                        Навіть прості слова отримують нові, більш глибокі змісти. У мінливому сьогоденні
                                        кожен шукає свою точку опори.
                                        <br/><br/>
                                        Тому новорічний подарунок зразка 2022 року також буде особливим. Так, ви не
                                        зможете його торкнутися, однак обов’язково відчуєте його тепло. Бо справжній
                                        подарунок – це завжди про відчуття. Відчуття особливого єднання та причетності
                                        до створення новорічного дива для тих, хто зараз найбільше цього потребує.
                                        <br/><br/>
                                        На нашому порталі зібрано десять історій. Кожна з них пов’язана з очікуваннями,
                                        що для головних героїв стануть справжнім дивом. Це історії окремих людей, родин,
                                        об’єднань, які через війну втратили своє місце сили, роботу, домівку чи
                                        близьких. Зараз цим людям дуже потрібна надійна опора. Завдяки вашій чуйності
                                        їхні історії закінчаться добрими новорічними справами. Натомість ви отримаєте
                                        можливість зробити для когось справжнє чудо – засвітити усмішками дитячі
                                        обличчя, зігріти теплом та увагою стареньких, розрадити людей, які самотужки
                                        долають труднощі.
                                        <br/><br/>
                                        Тож нумо робити дива разом!
                                    </p>
                                    <div className="first-modal-socks">
                                        {firstModalSock.map((s) => <FirstModalSock img={s.img}/>)}
                                    </div>
                                    <p className="modal-first-text2">
                                        У кожній з десяти панчіх ховається новорічне диво. Наведіть на панчоху курсор,
                                        щоб побачити його короткий опис, а за кліком відкрийте віконце з розгорнутою
                                        розповіддю.
                                        <br/><br/>
                                        Завдяки вашій небайдужості кожна з десяти історій гарантовано закінчиться
                                        новорічним дивом. Але деякі з них можуть отримати більше уваги. Які саме,
                                        визначати вам. Уважно ознайомтеся з усіма дивами та проголосуйте за ті, що, на
                                        вашу думку, потребують додаткової уваги. Для цього ви маєте три цукерки – вони
                                        відображаються у віконці вгорі.
                                        <br/><br/>
                                        <img src={firstModalImgTwo} alt="Image two"/>
                                        <br/><br/>
                                        Ви можете використати всі три цукерки для одного новорічного дива чи розподілити
                                        їх між різними дивами на ваш розсуд.
                                        <br/><br/>
                                        Щоб покласти одну цукерку в панчоху дива, треба на сторінці цього дива натиснути
                                        на кнопку «Проголосувати».
                                    </p>
                                    {/*<p className="modal-first-text3">Тож нумо робити дива разом!</p>*/}
                                    <a href="#" className="modal-first-button"
                                       onClick={() => setFirstModalActive(false)}>Уперед до кімнати новорічних див!</a>
                                </div>
                            </div>
                        </div>
                        <button className="modal-first-btn-close" onClick={() => setFirstModalActive(false)}>
                            <img src={closeBtn1} alt="Close"/>
                        </button>
                        <div className="overlay overlay-first"
                             style={{background: `url(${firstModalBg}) no-repeat center center / cover`}}></div>
                    </div>
                </> : <>
                    <div className="results" style={{backgroundImage: `url(${resultsBg})`}}>
                        <div className="results-head">
                            <img src={resultsGradient} alt="Results Gradient"/>
                        </div>
                        <div className="results-content">
                            <h1 className="results-content-title">Результати голосування</h1>
                            <div className="results-content-wrapper">
                                {resultsArray.map((r) => <ResultItem
                                    projectId={r.id}
                                    img={r.img}
                                    votes={r.votes}
                                    title={r.title}
                                    setSockModalActiveId={setSockModalActiveId}
                                />)}
                            </div>
                            <div>
                                <img className="results-christmas-tree" src={christmasTree} alt="Christmas Tree"/>
                                <img className="results-floor" src={floor} alt="floor"/>
                                <img className="results-presents" src={presents} alt="presents"/>
                                <img className="results-armchair" src={armchair} alt="armchair"/>
                            </div>
                        </div>
                    </div>
                </>}

                <div className={sockModalActiveId ? 'modal active' : 'modal'}>
                    <div className="modal-window-container">
                        <div className={results ? 'modal-head' : 'modal-head todisable'}>
                            <div className="modal-socks-container">
                                <div className="modal-prev"
                                     style={{visibility: Number(sockModalActiveId) > 0 ? 'visible' : 'hidden'}}
                                     onClick={onPrevSlideClick}>
                                    <img src={modalPrev} alt="Previous slide"/>
                                </div>
                                <div className="modal-socks">
                                    {projects.map(project => <img className="modal-sock"
                                                                  onClick={(event) => setSockModalActiveId(event.currentTarget.id)}
                                                                  src={sockModalActiveId === project.id.toString() ? modalActiveSock : modalSock}
                                                                  id={project.id}
                                                                  alt="Sock"/>)
                                    }
                                </div>
                                <div className="modal-next"
                                     style={{visibility: Number(sockModalActiveId) < projects.length - 1 ? 'visible' : 'hidden'}}
                                     onClick={onNextSlideClick}>
                                    <img src={modalNext} alt="Next slide"/>
                                </div>
                            </div>
                            <div className="modal-left-votes">
                                {votesLeft > 0
                                    ? <>
                                        <p className="modal-left-vote-text">У вас залишилось голосів</p>
                                        <div className="modal-left-vote-imgs">
                                            {[...Array(3 - votesLeft).keys()].map(() => {
                                                return <img src={modalDisableSweet} alt="Sweet"/>
                                            })}
                                            {[...Array(votesLeft).keys()].map(() => {
                                                return <img src={modalSweet} alt="Sweet"/>
                                            })}
                                            {/*{modalSweets.map((s) => <img src={s.sweet} alt="Sweet"/>)}*/}
                                        </div>
                                    </> : <>
                                        <p className="modal-left-vote-text">У вас не залишилось голосів</p>
                                    </>
                                }
                            </div>
                        </div>
                        <button className="btn-close" onClick={() => setSockModalActiveId(undefined)}>
                            <img src={closeBtn1} alt="To Close"/>
                        </button>
                        <div className="main-slides" ref={mainSlides}>
                            {/*{slides.map((s) => s.number + isProjectAlreadyVoted(s.number - 1).toString() + '|')}*/}

                            {slides.map((s) => <ModalWindow
                                title={s.title}
                                text={s.text}
                                img={s.img}
                                // id={s.number}
                                voted={isProjectAlreadyVoted(s.number - 1)}
                                canVote={votesLeft > 0}
                                modalMessageActive={modalMessageActive}
                                setModalMessageActive={setModalMessageActive}
                                modalMessageYesActive={modalMessageYesActive}
                                onModalMessageClick={onModalMessageClick}
                                votingInProcess={votingInProcess}
                                modalMessageThankYouActive={modalMessageThankYouActive}
                                voteError={voteError}
                                results={results}/>
                            )}
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
            <div className="mobile-main">
                <div>
                    <div className="mobile-main-img">
                        <img src={mainSock2} alt="Sock"/>
                    </div>
                    <p className="mobile-main-text">
                        Щоб приєднатися до створення новорічного дива, завітайте до нас з комп’ютера!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Metinvest

const FirstModalSock = (props) => {
    return (
        <div className="first-modal-sock">
            <img src={props.img} alt='Sock'/>
        </div>
    )
}
const MainSock = (props) => {
    return (
        <div className="main-sock-wrapper">
            <div className="main-sock-text-container" style={{backgroundImage: `url(${mainSockTextBg})`}}>
                <div className="main-sock-text">
                    <img className="main-sock-text-dots" src={dots} alt="Dots"/>
                    <h2 className="main-sock-title">{props.title}</h2>
                    <p className="main-sock-desc">{props.text}</p>
                </div>
            </div>
            <div style={{
                transform: `scaleY(${100 + props.votingRate[props.id] * 30}%)`,
                paddingTop: `${props.votingRate[props.id] * 40}px`
            }}>
                <div className="main-sock"
                     onClick={() => props.setSockModalActiveId(props.id)}>
                    <img src={props.img} alt='Sock'/>
                </div>
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
            <a href="#" className="result-item-btn"
               onClick={() => props.setSockModalActiveId(props.projectId)}>деталі</a>
        </div>
    )
}
const ModalWindow = (props) => {
    return (
        <div className="modal-window">
            <h1 className='modal-title'>{props.title}</h1>
            <img className='modal-img' src={props.img} alt="Modal Image"/>
            <p className='modal-desc'>
                {Parser(props.text.replaceAll("\n\n", "\n").replaceAll("\n", "<br/><br/>"))}
            </p>
            <h3 className={props.results ? 'modal-subtitle' : 'modal-subtitle todisable'}>{props.title}</h3>
            {/*{props.voted ? 'VOTED' : 'NOT VOTED'}*/}
            <div className='modal-btns-wrapper'>
                <div className='modal-btns'>
                    {props.voted ? <p className={props.results ? 'completed-message' : 'completed-message todisable'}>Голос враховано</p> : (props.canVote
                        ? <a href="#" className={props.results ? 'modal-btn-one' : 'modal-btn-one todisable'}
                             onClick={() => props.setModalMessageActive(true)}>Проголосувати</a>
                        : <p className={props.results ? 'completed-message' : 'completed-message todisable'}>Подарунків не залишилося</p>)
                    }
                    <div className={props.modalMessageActive ? 'modal-btns-message-wrapper active' : 'modal-btns-message-wrapper'}
                        style={{backgroundImage: `url(${modalMessageBg}`}}>
                        <div className="modal-btns-message">
                            <img className='modal-dots' src={dots} alt="Dots"/>
                            <div
                                className={props.modalMessageYesActive ? 'modal-message' : 'modal-message-content-disabled'}>
                                <p className="modal-btns-message-text">Натиснувши «Так», ви віддасте один із трьох
                                    голосів за проєкт {props.title}</p>
                                <div className="modal-btns-message-btns">
                                    <a href="#" className="modal-btns-message-btn"
                                       onClick={() => props.onModalMessageClick()}>так</a>
                                    <a href="#" className="modal-btns-message-btn"
                                       onClick={() => props.setModalMessageActive(false)}>подумаю ще</a>
                                </div>
                            </div>
                            <div className={props.votingInProcess ? 'preloader active' : 'preloader'}>
                                <div className="loader"></div>
                            </div>
                            <div
                                className={props.modalMessageThankYouActive ? '' : 'modal-message-content-disabled'}>
                                <p className="modal-btns-message-text">Дякуємо!</p>
                            </div>
                            <div className={props.voteError ? '' : 'modal-message-content-disabled'}>
                                <p className="modal-btns-message-text">Щось трапилось.<br/>Спробуйте ще раз.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getUserId() {
    const id = localStorage.getItem("id")
    if (!id) {
        let date = new Date();
        const newId = date.getTime() * 1000 + date.getMilliseconds()
        localStorage.setItem("id", newId)
        return newId.toString()
    } else {
        return id
    }
}

function getVotesLeftFromLocalstorage() {
    const votesLeft = localStorage.getItem("votesLeft")
    if (!votesLeft) {
        return 3
    } else {
        return Number(votesLeft)
    }
}

function registerVoteMadeLocally(projectId) {
    const votesLeft = getVotesLeftFromLocalstorage()
    localStorage.setItem("votesLeft", votesLeft - 1)
    localStorage.setItem(projectId, true)
    return votesLeft - 1
}

function isProjectAlreadyVoted(projectId) {
    return localStorage.getItem(projectId) == 'true'
}
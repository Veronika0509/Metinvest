import React, {useRef, useState, useEffect} from 'react'
import dayjs from "dayjs";
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
import Slide1 from '../img/slidesImages/slide1.png'
import Slide3 from '../img/slidesImages/slide3.png'
import Slide4 from '../img/slidesImages/slide4.png'
import Slide5 from '../img/slidesImages/slide5.png'
import Slide6 from '../img/slidesImages/slide6.png'
import Slide7 from '../img/slidesImages/slide7.png'
import Slide8 from '../img/slidesImages/slide8.png'
import Slide9 from '../img/slidesImages/slide9.png'
import Slide10 from '../img/slidesImages/slide10.png'
import fireItem1 from '../img/fireItems/fireitem1.png'
import fireItem2 from '../img/fireItems/fireitem2.png'
import fireItem3 from '../img/fireItems/fireitem3.png'
import fireItem4 from '../img/fireItems/fireitem4.png'
import fireItem5 from '../img/fireItems/fireitem5.png'
import fireItem6 from '../img/fireItems/fireitem6.png'
import fireItem7 from '../img/fireItems/fireitem7.png'
import catTail from '../img/assets/cattail.png'
import resultsGradient from '../img/assets/results-gradient.png'

// const serverUrl = "http://localhost:3003/"
const serverUrl = "https://metinvest-app.herokuapp.com/"
const userId = getUserId()

const defaultRemainingTime = {
    days: '00',
    hours: '00',
    minutes: '00'
}
const countdownTimestampMs = new Date('December 14, 2022 00:00:00').getTime()

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


    const [slides, setSlider] = useState([
        {
            number: 1,
            title: 'Кімната, сповнена почуттів',
            text: 'У кожного з нас у дитинстві було місце, де ми могли сховатися від будь-чого. Місце, де під ковдрою зовсім не страшно і затишно, де ми відчували себе в безпеці, де могли залишитися із собою наодинці або розділити радість зустрічі з друзями. Для багатьох із нас цим місцем була власна кімната. І для багатьох із нас згадки про неї — це передусім відчуття тепла, затишку, турботи, аромату запашної матусиної вечері, що полонила нас, протискаючись крізь шпаринку в дверях. \n' +
                '\n' +
                'Для багатьох діточок із Центру реабілітації дітей з інвалідністю у Запоріжжі справжнім дивом було б навчитися відчувати світ навколо так само сильно і всеосяжно, проживати гарні події яскравіше, відзначати успіхи в навчанні та адаптації з батьками. \n' +
                '\n' +
                'У наших силах трансформувати це диво в мету. Ми створимо для дітей Центру своє особливе місце, свою дитячу кімнату. З особливим обладнанням і приладдям, що допоможе дітям відчути особливі емоції, краще і швидше адаптуватися до навколишнього життя і значно глибше навчитися відчувати найнеобхідніші для кожної дитини речі — турботу, любов, радість. \n' +
                '\n' +
                'У набір спеціалізованого професійного обладнання, що обов’язково та без додаткових умов буде придбано і встановлено в кімнаті, входить чимало надзвичайно корисних речей, які допоможуть краще проходити процес реабілітації, розвитку та навчання на сто тисяч гривень. \n' +
                '\n' +
                'Якщо ви вважаєте, що цей проєкт вартий додаткової уваги і хотіли б, щоб перелік корисних речей для дітей з інвалідністю був ще ширшим і включав додаткове обладнання, ви можете віддати один із трьох голосів або ж усі три за цей проєкт. \n' +
                '\n' +
                'Якщо за підсумком загального голосування більшість працівників вважатимуть так само, кількість предметів набору для сенсорної кімнати буде розширено до ста п\'ятдесяти та двохсот тисяч гривень відповідно за третє та друге місце. \n' +
                '\n' +
                'А у випадку потрапляння на перше місце буде повністю обладнано другу кімнату - кімнату соціально-побутової  адаптації. \n' +
                '\n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо Центру як благодійний внесок на забезпечення операційної діяльності Центру.\n',
            img: Slide1
        },
        {
            number: 2,
            title: 'Новорічний затишок',
            text: 'Родина Бересневих до війни жила в селі Михайлівка Запорізької області. П’ять діточок у віці від двох до п’ятнадцяти років були полишені турботи батька. Дітьми піклувалася мама. Але загарбницька армія забрала в дітей і її. Мати загинула під час бойових дій, а рідне село й досі окуповано ворогом. Всіх дітей вивіз до Запоріжжя двоюрідний брат мами. Його звати Олександр, йому лише двадцять три роки. І зараз він займається оформленням опікунства для зовсім маленьких Злати, Іринки ти Віки, першокласника  Дмитра і п’ятнадцятирічної Насті. \n' +
                '\n' +
                'Для цієї родини повернення до нормального життя було б справжнім дивом. Тому ми з усіх сил постараємося створити їм  затишну атмосферу домашнього свята, відволікти від болю, тяжких спогадів і подарувати Новий рік таким, яким він має бути в добрій міцній родині. Із ялинкою, подарунками і здійсненням бажань. \n' +
                '\n' +
                'Тож, в найближчий час до родини Бересневих завдяки вам ми гарантовано привеземо ялинку, іграшки й гірлянди. Під ялинку покладемо комлпекти зимового одягу на кожного з діточок.  А ще ноутбук, два телефони, мікрохвильову піч, мультиварку і великий побутовий набір. \n' +
                '\n' +
                'А якщо за підсумками голосування це новорічне диво опиниться в переліку найочікуваніших, ми додамо подарунків під ялинку. \n' +
                '\n' +
                'Третє місце -  це додатково пральна машина з сушилкою до всього переліченоого вище. Друге - телевізор. І перше місце додасть ще й джерело безперервного живлення Екофлоу.  \n' +
                '\n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо родині як благодійна допомога.\n',
            img: Slide1
        },
        {
            number: 3,
            title: '“Сонячна” мрія',
            text: 'У дитинстві ми всі вірили в казки. І в цей непростий час хочемо вірити знову. Насамперед тому, що в казках добро завжди перемагає зло. І доки головна мрія всієї країни вимагає стовідсоткової концентрації сил, ресурсів і наснаги, доки всі зусилля йдуть на забезпечення нашої перемоги, добрих казок у житті дітей, які їх дуже потребують, стає менше. Потреба в маленькому диві саме у цей час для них висока, як ніколи. \n' +
                '\n' +
                'Саме тому казка, що несподівано трапиться в житті, обов’язково стане опорою у зміцненні віри в перемогу світла над темрявою для дітей із "Криворізької міської організації допомоги дітям та людям з синдромом Дауна "Сонячні діти Криворіжжя" та їхніх батьків. \n' +
                '\n' +
                'Діти у супроводі одного з батьків вирушать у новорічну подорож до “Діснею”, що розкриє для них свої двері серед Карпатських гір у Трускавці. Реабілітація, соціалізація, оволодіння новими навичками, комунікація з однолітками без нозологій. І все це в ідеальному місці для активного відпочинку “Дісней-365”. На малечу чекатимуть цілющі мінеральні води, гірське повітря, смачні карпатські страви та спеціально розроблена програма із походами, спортивними заходами тощо. \n' +
                '\n' +
                'Це новорічне диво завдяки вам гарантовано трапиться для десяти дітей у супроводі одного з дорослих. Але якщо ви віддасте один зі своїх голосів чи всі три саме за цей проєкт, і він опиниться серед трьох найочікуваніших див після завершення голосування, то кількість дітей у групі буде збільшено. \n' +
                '\n' +
                'Якщо проєкт опиниться на третьому місці, групу буде розширено до тринадцяти дітей у супроводі одного з дорослих. Якщо на другому — до сімнадцяти. Перше місце за підсумками голосування дасть змогу розширити групу до двадцяти п’яти сонячних діточок у супроводі дорослого. \n' +
                '\n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо Благодійній організації “Cонячні діти Криворіжжя” як благодійний внесок на забезпечення операційної діяльності.\n',
            img: Slide3
        },
        {
            number: 4,
            title: 'Чудо-піч для бабусь і дідусів',
            text: 'Це непросто уявити, але для когось сьогодні гаряча їжа щодня — то вже маленьке диво. Ще важче уявити, коли таке трапляється із тими, хто сам про себе не може піклуватися. \n' +
                '\n' +
                'Сто п’ятдесят людей поважного віку, які живуть у двох будинках милосердя в Кривому Розі, кожного разу, коли вимикають світло, не мають змоги вживати теплу їжу. Генератори, які мають центри, недостатньо потужні для забезпечення повноцінного функціонування приміщень. Тому при резервному живленні їжу для всіх бабусь і дідусів працівники готують на вулиці, розпалюючи багаття. \n' +
                '\n' +
                'Але два сучасні пароконвектомати зменшать споживання електроенергії на 60 відсотків і цього вистачить, щоб навіть при живленні від генераторів у літніх людей своєчасно була тепла їжа. Окрім того, вони дадуть змогу збільшити кількість їжі протягом одного циклу приготування. Саме такі конвектомати завдяки вам стовідсотково будуть придбані та встановлені в кожному із будинківмилосердя.\n' +
                '\n' +
                'Якщо цей проєкт за результатами вашого голосування опиниться на третьому або другому місці серед найочікуваніших див, ми матимемо змогу придбати більш функціональні “чудо-пічки” із більшою кількістю режимів і варіантів приготування страв. \n' +
                '\n' +
                'А якщо проєкт опиниться на першій сходинці рейтингу, до найякісніших пароконвектоматів буде додано комплекти пральних машин і сушилок. \n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо Будинкам милосердя як благодійний внесок на забезпечення операційної діяльності.\n',
            img: Slide4
        },
        {
            number: 5,
            title: 'Маленьке диво великій родині',
            text: 'Народження нового життя — це завжди диво. І зовсім скоро воно вже вдесяте трапиться в родині Кудлай у прифронтовому Покровську. Наразі в подружжя Олени та Євгена дев’ять діток віком від двох до сімнадцяти років. Євген — інвалід ІІ групи з дитинства, Олена працює медсестрою. \n' +
                '\n' +
                'Сімейною нарадою вирішили залишитися в рідному місті, незважаючи ні на що. Родина відмовилася від евакуації і продовжує жити поблизу лінії фронту, працювати і вірити в перемогу. \n' +
                '\n' +
                'На запит представників компанії щодо необхідної допомоги родина дуже скромно відповіла, що шукає можливість отримати дрова та вугілля для котла, бо газ постійно вимикають через обстріли. Цей запит обов’язково буде виконано як базовий. \n' +
                '\n' +
                'А разом із ним завдяки вам траплятимуться новорічні дива для цієї родини. Напередодні Різдва до них завітає Святий Миколай. Вантажівкою він доставить дрова, вугілля і мішок подарунків. У цьому чарівному мішечку буде багато важливого для життя такої великої родини: три ноутбуки для навчання, два окремих ліжка для вже дорослих дітей та іграшки для молодших. \n' +
                '\n' +
                'Але якщо ви віддасте свій голос за цей проєкт і він потрапить до трьох найочікуваніших, то розмір вантажівки доведеться збільшувати, бо такого великого мішка вона в кузов не вмістить! \n' +
                '\n' +
                'Так, опинившись на третьому місці за підсумками голосування, мішок збільшиться завдяки додаванню до набору пральної та сушильної машин. Непогано, якщо у вас дев’ять дітей і скоро з’явиться десята, чи не так?)\n' +
                '\n' +
                'Друге місце додасть до цього набору подарунків ще й посудомийну машину, дванадцять стільців та хлібопіч! \n' +
                '\n' +
                'А перше місце в рейтингу найочікуваніших див забезпечить родині додатково генератор. \n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо родині як благодійна фінансова допомога.\n',
            img: Slide5
        },
        {
            number: 6,
            title: 'Дім далеко від дому',
            text: 'Для кожної людини свій власний дім - це особливе місце. І це навіть не про будівлю, це про емоції. Дім - це місце, де на вас чекають. Де вас зустрічають діти, обіймаючи на порозі. Де готують сніданки батьки, і де всі збираються кожного разу святами чи днями пам’яті. \n' +
                '\n' +
                'Залишати таке місце сили, не розуміючи чи буде змога повернутися, надзвичайно важно. Тому, напевно, родина Мицик до останнього залишалася вдома, в Покровську. Але зараз велика сім’я з десяти осіб, де найменшій дитинці лише два роки, шукає свою точку опори далеко від власної оселі, в Тернопільській області. \n' +
                '\n' +
                'І перше, що може стати опорою в новому місці - це радість і посмішки дітей. Їх в Олега з Наталією вісім. Чотири доньки та чотири сина. Трьом старшим донькам завдяки вам буде передано планшети для навчання. Трьом старшим синам - велосипеди, про які вони мріють саме зараз. Маленьким Ігорю і Тетянці - чудові іграшки. \n' +
                '\n' +
                'А якщо за результатами вашого голосування цей проект опиниться на третьому в переліку найочікуваніших, до цих подарунків буде додано генератор.  Друге місце - додасть до усього вищезгадано пральну машину. І перше місце - додасть телевізор до подарунків, генератора та пральної машини.  \n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо родині як благодійна фінансова допомога.\n',
            img: Slide6
        },
        {
            number: 7,
            title: 'Диво для родини захисника',
            text: 'Яна Наумкіна - мама дев’ятьох дітей. Найменшому Богданчику чотири роки. Старшій дочці Валерії - сімнадцять. Чоловік захищає Україну в лавах ЗСУ. Із Маріуполя всією родиною виходили пішки. Шлях до Бердянська тривав шістнадцять днів. Звідти родина потрапила до Запоріжжя і згодом повернулася до Донецької області. Наразі проживають у Покровську, де їм добрі люди надали житло. \n' +
                '\n' +
                'Але родина щоденно стикається із труднощами, бо в них нема ані вугілля, ані дров. В будинку не вистачає ліжок на всіх. Можливості навчатися дистанційно теж немає через відсутність гаджетів. \n' +
                '\n' +
                'Завдяки вам до Новорічних свят родина отримає все необхідне і навіть трошки більше. Ми привеземо до Покровська зимовий одяг на всю родину, три двоповерхових ліжка для дітей, два ноутбуки для навчання, іграшки для наймолодших дітей, а також вугілля і дрова на зиму. \n' +
                '\n' +
                'А якщо протягом голосування цей проект опиниться у топі найочікуваніших новорічних див, допомогу буде збільшено. \n' +
                '\n' +
                'Так, у випадку потрапляння на третє місце до гарантованого набору буде додано пральну машину. Друге місце додасть до переліку телевізор. І перше місце гарантує родині ще й генератор. \n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо родині як благодійна фінансова допомога.\n',
            img: Slide7
        },
        {
            number: 8,
            title: 'Доки тато в ЗСУ!',
            text: 'Родина Кривоносових відчула і продовжує відчувати на собі всі жахіття війни. Зараз мама із трьома дітьми та немовлятами-двійнятами Софією і Соломією в безпеці, забезпечені житлом і гуманітарною допомогою. Батько ж боронить країну від загарбників у лавах ЗСУ. \n' +
                '\n' +
                'У найстрашніший час бомбардування Маріуполя ще вагітна на той момент мати Ніна із шестирічним Михайликом, семирічною Валерією і дванадцятирічним Юрчиком місяць провели в підвалах свого будинку. Вони пройшли через фільтрацію, вимушену депортацію до окупованого Донецька, піший вихід через ворожі блокпости. Так опинилися в Запоріжжі, потім у Дніпрі, а після — у Новомосковську. \n' +
                '\n' +
                'У двох із трьох дорослих дітей дні народження в грудні. Валерії виповниться вісім років 8 грудня, Юрчику тринадцять — 10 грудня. Отримати подарунки своєї мрії — це справжнє диво для них у цей час. Повірити в нього майже неможливо. Але завдяки вам диво трапиться. І діти, які пережили так багато, отримають омріяні подарунки. Це не предмети першої необхідності. Але ж і забирати дитинство через війну не можна. Тим паче, що і день народження, і Новий рік… Та й дива на те й дива, щоб траплятися, коли їх не чекаєш. \n' +
                '\n' +
                'Тож мати просила Юрчика, Валерію і Михайлика написати листа Святому Миколаю і бути сміливими, бажати чогось для себе попри війну. Цей лист опинився в потрібних руках. \n' +
                '\n' +
                'Тож діти гарантовано отримають ноутбук, портативну зарядку EcoFlow до нього, планшет, конструктор LEGO City, електросамокат, боксерську грушу та PlayStation  з іграми. \n' +
                '\n' +
                'А якщо ви проголосуєте за цей проєкт, і він опиниться в переліку найочікуваніших див на третьому місці, то до Святого Миколая потрапить ще й лист від мами і в родини з’явиться пральна машина із сушкою. \n' +
                '\n' +
                'Друге чи перше місце додасть до переліку великий телевізор. \n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо родині як благодійна фінансова допомога.\n',
            img: Slide8
        },
        {
            number: 9,
            title: 'Майстерня для маленьких митців',
            text: 'Сто сорок шість соціально незахищених дітей живуть у спеціалізованій школі “Гармонія” у місті Кам’янське на постійній основі. Ще двадцять шість — на індивідуальному навчанні. У школі є мистецька майстерня, але немає обладнання та матеріалів для забезпечення безперервного навчання дітей мистецтву. \n' +
                '\n' +
                'Завдяки вам станеться перше маленьке диво — майстерня запрацює на повну. І незабаром обов’язково з неї вийдуть талановиті митці, які прославлятимуть вільну й незалежну Україну в майбутньому. А можливість для всіх дітлахів створювати свої перші шедеври вже сьогодні обов’язково стане опорою для креативного розвитку кожної дитини. \n' +
                '\n' +
                'Якщо ви вважаєте, що серед усіх проєктів нашого новорічного порталу саме цей вартий додаткової уваги, то віддайте один, два або усі три голоси за нього. І цілком можливо, що допомога школі-інтернату “Гармонія” стане більшою. \n' +
                '\n' +
                'Якщо цей проєкт опиниться на третьому місці в рейтингу за підсумками голосування, до обладнання майстерні буде додано ще й особистий новорічний подарунок кожній дитині школи. \n' +
                '\n' +
                'Якщо проєкт посяде друге місце, то сет новорічних див включатиме обладнання для творчої майстерні та встановлення семи столітрових бойлерів у місцях загального користування у школі. \n' +
                '\n' +
                'Якщо проєкт стане лідером за підсумками голосування, то до майстерні та бойлерів буде додано ще й чотири інтерактивні дошки в навчальні класи. \n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо школі як благодійна фінансова допомога.\n',
            img: Slide9
        },
        {
            number: 10,
            title: 'Причіп новорічних подарунків',
            text: 'Родина Костіних евакуювалася з Авдіївки. Для того, щоб зрозуміти, наскільки добре й тепле новорічне диво необхідно цим людям, просто наведемо цитату з діалогу з мамою Ольгою мовою оригіналу: “Нас в семье шестеро, Даше пятнадцать лет, Веронике - тринадцать, Саше - два годика. И Грише годик.  С нами живет мой отец, его ранило при обстрелах. Я вдова с детьми сама, я на третей группе. На данный момент очень нуждаемся в микроволновке и мультиварке. Топим дровами очень дорого выходит, были бы благодарны за дрова. И самая большая проблема с перевозкой вещей. У нас есть старенькие Жигули. И если мы будем вынуждены куда то переезжать при обострении войны, нам очень нужен хоть б/у прицеп”. \n' +
                'То ж завдяки вам до села Тахтаулово в Полтавській області, де зараз живе родина,  перед Новим роком приїде новенький причіп. В ньому буде мультиварка, мікрохвильова піч і іграшки для дітей. \n' +
                'А якщо ви проголосуєте за цей проект і він опиниться на третьому місці,  то до причепу буде додано ще й машину із дровами. \n' +
                '\n' +
                'Друге місце додасть до всього вищевказаного ноутбук, два телефони і планшет для навчання дітей.\n' +
                '\n' +
                'У випадку якщо прооект опиниться на першій сходинці в рейтингу найочікуваніших див, то до комплекту додасться ще й генератор. \n' +
                '\n' +
                '\n' +
                'Окрім участі у голосуванні за це новорічне диво, ви можете також зробити добровільний донат, скориставшись QR-кодом. Усі кошти, зібрані за цим кодом, будуть передані безпосередньо родині  як благодійна допомога.\n',
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
            title: 'Кімната, сповнена почуттів',
            shortText: 'Обладнання для спеціалізованої сенсорної кімнати для Центру реабілітації дітей з інвалідністю в Запоріжжі.'
        },
        {
            img: mainSock2,
            title: 'Новорічний затишок',
            shortText: 'Допомога родині з п’яти  дітей-сиріт із Запорізької області',
        },
        {
            img: mainSock3,
            title: '“Сонячна” мрія',
            shortText: 'Реабілітаційна поїздка для криворізьких дітей із синдромом Дауна.',
        },
        {
            img: mainSock4,
            title: 'Чудо-піч для бабусь і дідусів',
            shortText: 'Пароконвектомати для двох будинків милосердя у Кривому Розі, де загалом проживає понад сто людей похилого віку.',
        },
        {
            img: mainSock5,
            title: 'Маленьке диво великій родині',
            shortText: 'Допомога родині з десятьма дітьми у місті Покровськ',
        },
        {
            img: mainSock6,
            title: 'Дім далеко від дому',
            shortText: 'Допомога родині із вісьма дітьми з Покровська',
        },
        {
            img: mainSock7,
            title: 'Диво для родини захисника',
            shortText: 'Допомога багатодітній родині із дев’ятьма дітьми із Маріуполя.',
        },
        {
            img: mainSock8,
            title: 'Доки тато в ЗСУ!',
            shortText: 'Допомога багатодітній родині із Маріуполя, що зараз перебуває у Новомосковську',
        },
        {
            img: mainSock9,
            title: 'Майстерня для маленьких митців',
            shortText: 'Обладнання творчої майстерні для спеціалізованої школи “Гармонія” у місті Кам’янське.',
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
                        rateByProject[item.project] =  1 - ((max - min) - (item.votes - min)) / (max - min)
                    })

                    setResultsArray(projects.map(project => {
                        return {...project, votes: votesByProject[project.id] ?? 0}
                    }).sort( (a, b) => b.votes - a.votes))

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
            setSockModalActiveId((projects.length -1).toString())
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
                            <div className={catClicked ? 'main-cat active' : 'main-cat'} onClick={onCatClick}>
                                <img className="cat-tail" src={catTail} alt="Cat Tail"/>
                            </div>
                        </div>
                    </div>
                    <div className={firstModalActive ? "modal-first" : "modal-first disabled"}>
                        <div className="modal-first-container">
                            <div className="modal-first-window">
                                <div className="modal-first-wrapper">
                                    <h2 className='modal-first-title'>Ласкаво просимо до чарівної кімнати новорічних див!</h2>
                                </div>
                                <img className="modal-first-image" src={santa1} alt="Santa"/>
                                <div className="modal-first-wrapper">
                                    <p className='modal-first-text'>
                                        Кожного року ми отримуємо новорічні подарунки – від близьких, друзів, корпоративні сувеніри від компанії. Але цьогоріч усе інакше: змінюються пріоритети, дії стають іншими, звичні речі набувають надважливого значення. Навіть прості слова отримують нові, більш глибокі змісти. У мінливому сьогоденні кожен шукає свою точку опори.
                                        <br/><br/>
                                        Тому новорічний подарунок зразка 2022 року також буде особливим. Так, ви не зможете його торкнутися, однак обов’язково відчуєте його тепло. Бо справжній подарунок – це завжди про відчуття. Відчуття особливого єднання та причетності до створення новорічного дива для тих, хто зараз найбільше цього потребує.
                                        <br/><br/>
                                        На нашому порталі зібрано десять історій. Кожна з них пов’язана з очікуваннями, що для головних героїв стануть справжнім дивом. Це історії окремих людей, родин, об’єднань, які через війну втратили своє місце сили, роботу, домівку чи близьких. Зараз цим людям дуже потрібна надійна опора. Завдяки вашій чуйності їхні історії закінчаться добрими новорічними справами. Натомість ви отримаєте можливість зробити для когось справжнє чудо – засвітити усмішками дитячі обличчя, зігріти теплом та увагою стареньких, розрадити людей, які самотужки долають труднощі.
                                        <br/><br/>
                                        Тож нумо робити дива разом!
                                    </p>
                                    <div className="first-modal-socks">
                                        {firstModalSock.map((s) => <FirstModalSock img={s.img}/>)}
                                    </div>
                                    <p className="modal-first-text2">
                                        У кожній з десяти панчіх ховається новорічне диво. Наведіть на панчоху курсор, щоб побачити його короткий опис, а за кліком відкрийте віконце з розгорнутою розповіддю.
                                        <br/><br/>
                                        Завдяки вашій небайдужості кожна з десяти історій гарантовано закінчиться новорічним дивом. Але деякі з них можуть отримати більше уваги. Які саме, визначати вам. Уважно ознайомтеся з усіма дивами та проголосуйте за ті, що, на вашу думку, потребують додаткової уваги. Для цього ви маєте три цукерки – вони відображаються у віконці вгорі.
                                        <br/><br/>
                                        (картинка частини попапу дива з цукерками та позначкою)
                                        <br/><br/>
                                        Ви можете використати всі три цукерки для одного новорічного дива чи розподілити їх між різними дивами на ваш розсуд.
                                        <br/><br/>
                                        Щоб покласти одну цукерку в панчоху дива, треба на сторінці цього дива натиснути на кнопку «Проголосувати».
                                        <br/><br/>
                                        Також за бажанням ви можете зробити персональний донейт героям кожної з десяти історій. Для цього слід скористатися QR-кодом, що є в кінці опису кожної історії. Усі кошти надішлють родині чи організації як пряму фінансову допомогу, котра доповнить основне новорічне диво.
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
                        <div className="modal-head">
                            <div className="modal-socks-container">
                                <div className="modal-prev"
                                     style={{visibility: Number(sockModalActiveId) > 0 ? 'visible' : 'hidden'}}
                                     onClick={onPrevSlideClick}>
                                    <img src={modalPrev} alt="Previous slide"/>
                                </div>
                                <div className="modal-socks">
                                    {projects.map( project => <img className="modal-sock"
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
                            <button className="btn-close" onClick={() => setSockModalActiveId(undefined)}>
                                <img src={closeBtn1} alt="To Close"/>
                            </button>
                        </div>
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
                                voteError={voteError}/>
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
        <div className="main-sock-wrapper"
             style={{transform: `scaleY(${100 + props.votingRate[props.id] * 30}%)`, paddingTop: `${props.votingRate[props.id] * 40}px`}}>
            <div className="main-sock-text-container" style={{backgroundImage: `url(${mainSockTextBg})`}}>
                <div className="main-sock-text">
                    <img className="main-sock-text-dots" src={dots} alt="Dots"/>
                    <h2 className="main-sock-title">{props.title}</h2>
                    <p className="main-sock-desc">{props.text}</p>
                </div>
            </div>
            <div className="main-sock"

                 onClick={() => props.setSockModalActiveId(props.id)}>
                <img src={props.img} alt='Sock'/>
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
            <a href="#" className="result-item-btn" onClick={() => props.setSockModalActiveId(props.projectId)}>деталі</a>
        </div>
    )
}
const ModalWindow = (props) => {
    return (
            <div className="modal-window">
                <h1 className='modal-title'>{props.title}</h1>
                <img className='modal-img' src={props.img} alt="Modal Image"/>
                <p className='modal-desc'>
                    {props.text}
                </p>
                <h3 className='modal-subtitle'>{props.title}</h3>
                {/*{props.voted ? 'VOTED' : 'NOT VOTED'}*/}
                <div className='modal-btns-wrapper'>
                    <div className='modal-btns'>
                        { props.voted ? <p className="completed-message">Голос враховано</p> : (props.canVote
                            ? <a href="#" className="modal-btn-one" onClick={() => props.setModalMessageActive(true)}>Проголосувати</a>
                            : <p className="completed-message">Подарунків не залишилося</p>)
                        }
                        <div
                            className={props.modalMessageActive ? 'modal-btns-message-wrapper active' : 'modal-btns-message-wrapper'}
                            style={{backgroundImage: `url(${modalMessageBg}`}}>
                            <div className="modal-btns-message">
                                <img className='modal-dots' src={dots} alt="Dots"/>
                                <div className={props.modalMessageYesActive ? 'modal-message' : 'modal-message-content-disabled'}>
                                    <p className="modal-btns-message-text">Натиснувши «Так», ви віддасте один із трьох голосів за проєкт {props.title}</p>
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
                                    <p className="modal-btns-message-text">Что-то пошло не так <br/>Повторите
                                        попытку позже</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='modal-qr-code'>
                        <img src={qr} alt="QR Code"/>
                        <p className="modal-qr-text">Надіслати гроші самостійно</p>
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
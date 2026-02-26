import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import { Navigation, EffectFade } from "swiper/modules";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

import headBanner from "../assets/img/head-banner.jpg";
import aboutImg from "../assets/img/house.jpg";
import Arrow from "../assets/svg/arrow.svg?react";
import Airplane from "../assets/svg/airplane.svg?react";
import Сamera from "../assets/svg/camera.svg?react";
import ArrowLeft from "../assets/svg/arrowLeft.svg?react";
import Download from "../assets/svg/download.svg?react";
import { NavLink } from "react-router-dom";
import { Map } from "../components/Map";
import Popup from "../components/Popup";

function HomePage() {
    const lightboxRef = useRef(null);
    const advantagesList = [
        {
            imgUrl: "advantages-1.jpg",
            description:
                "Дитячий та спортивний майданчики з м’яким безпечним покриттям",
        },
        {
            imgUrl: "advantages-2.jpg",
            description: "Краєвид з вікон на Тернопільський став",
        },
        {
            imgUrl: "advantages-3.jpg",
            description: "Дворівневий підземно-наземний паркінг",
        },
        {
            imgUrl: "advantages-4.jpg",
            description: "Засклені балкони та лоджії з панорамними вікнами",
        },
        {
            imgUrl: "advantages-5.jpg",
            description: "Краєвид на парк імені Тараса Шевченка",
        },
        {
            imgUrl: "advantages-6.jpg",
            description: "Стіни з ефективним зовнішнім утепленням",
        },
    ];
    const technologiesList = [
        {
            imgUrl: "icon-1.svg",
            title: "Монолітно-каркасна технологія",
            description:
                "Забезпечує високу міцність і довговічність будівель, а також дозволяє створювати вільні планування без несучих внутрішніх стін. Крім того, вона дає більше гнучкості в дизайні, краще витримує сейсмічні навантаження та прискорює процес зведення.",
        },
        {
            imgUrl: "icon-2.svg",
            title: "Утеплення стін - мінеральна вата",
            description:
                "Утеплення стін мінеральною ватою забезпечує надійну тепло- та звукоізоляцію, зберігаючи комфортний мікроклімат у приміщенні в будь-яку пору року. Матеріал є негорючим, паропроникним і довговічним, що робить його безпечним та ефективним рішенням.",
        },
        {
            imgUrl: "icon-3.svg",
            title: "Зовнішні, міжквартирні та міжкімнатні стіни - керамоблок",
            description:
                "Стіни з керамоблоку забезпечують високу міцність будівлі, ефективну тепло- та звукоізоляцію, а також комфортний мікроклімат у приміщеннях. Керамоблок є екологічним матеріалом із хорошою паропроникністю, що сприяє довговічності та енергоефективності будинку.",
        },
        {
            imgUrl: "icon-4.svg",
            title: "Висота стелі житлової частини: 2,7 - 4,2 метрів",
            description:
                "Висота стелі  створює відчуття простору та наповнює приміщення світлом і повітрям. Такі пропорції забезпечують комфортне проживання та відкривають більше можливостей для індивідуальних дизайнерських рішень.",
        },
        {
            imgUrl: "icon-5.svg",
            title: "Паркінг - Підземний з ліфтом",
            description:
                "Підземний паркінг з ліфтом забезпечує зручний та безпечний доступ до житлових поверхів безпосередньо з рівня паркування. Таке рішення підвищує комфорт мешканців і дозволяє зберегти простір та естетику прибудинкової території.",
        },
        {
            imgUrl: "icon-6.svg",
            title: "Поверховість ЖК - 5 – 12",
            description:
                "Поєднує затишок невеликих будинків із сучасними міськими стандартами комфорту. Така висотність дозволяє забезпечити оптимальне освітлення квартир і просторі громадські зони.",
        },
    ];

    const constructionSwiperList = [
        {
            imgUrl: "swiper-construction-1.jpg",
            date: "Січень 2026",
        },
        {
            imgUrl: "swiper-construction-1.jpg",
            date: "Грудень 2025",
        },
        {
            imgUrl: "swiper-construction-1.jpg",
            date: "Листопад 2026",
        },
        {
            imgUrl: "swiper-construction-1.jpg",
            date: "Листопад 2026",
        },
    ];
    const newsSwiperList = [
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
        {
            imgUrl: "swiper-news-1.jpg",
            date: "25.12.2025",
            text: "Підсумки 2025 року від компанії «Креатор-Буд»",
            description:
                "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
        },
    ];

    const [popupConsultations, setPopupConsultations] = useState(false);
    const [popupTy, setPopupTy] = useState(false);

    return (
        <>
            <div className="head-banner">
                <img
                    src={headBanner}
                    alt="House"
                    className="head-banner__img"
                />
                <div className="container">
                    <div className="head-banner__inner">
                        <div className="head-banner_inner">
                            <h1 className="head-banner__title">
                                Набережна Вежа
                            </h1>
                            <p className="head-banner__subtitle">
                                Ваш простір спокою
                            </p>

                            <a href="#" className="btn">
                                ЗАПИСАТИСЬ НА ПЕРЕГЛЯД
                            </a>
                            <div className="head-banner__location">
                                <span>м. Тернопіль, вул. Білецька, 30</span>
                                <div className="icon-arrow icon-arrow--right">
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price-wrapper">
                <div className="container">
                    <div className="price">
                        <div className="price-con">
                            <label>Ціна від:</label>
                            <div className="price-title">
                                <div className="price-label">51 846</div>
                                <span>грн/м.кв</span>
                            </div>
                        </div>
                        <div className="price-line"></div>
                        <div className="price-con">
                            <label>Площі:</label>
                            <div className="price-title">
                                <div className="price-label">30,21-80,56</div>
                                <span>м.кв</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-apartments-wrapper">
                <div className="container">
                    <div className="card-apartments">
                        <div className="card-apartments-header">
                            <h2>підбір квартир та паркомісць</h2>
                            <div className="card-apartments-header-right">
                                <p>За вашими параметрами ми знайшли для вас:</p>
                                <div className="card-apartments-text">
                                    13 <span>квартир</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-apartments-filter">
                            <div className="card-apartments-filter-item">
                                <label>Тип нерухомості:</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="list-tab list-tab-wfc">
                                        <div className="list-tab-item">
                                            Квартира
                                        </div>
                                        <div className="list-tab-item">
                                            Паркомісце
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-apartments-filter-item">
                                <label>К-ть кімнат</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="list-tab">
                                        <div className="list-tab-item">1</div>
                                        <div className="list-tab-item">2</div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-apartments-filter-item">
                                <label>Ціна</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder="від: 2 748 552,80"
                                        />
                                        <span>грн.</span>
                                    </div>
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder="до: 3 258 256,50"
                                        />
                                        <span>грн.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-apartments-filter-item">
                                <label>Площа</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder="від: 45,81"
                                        />
                                        <span>м²</span>
                                    </div>
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder="до: 65,47"
                                        />
                                        <span>м²</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="btn">
                            ПЕРЕГЛЯНУТИ ВАРІАНТИ
                        </a>
                    </div>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="container">
                    <div className="gallery">
                        <div className="gallery-text">
                            <h2>галерея</h2>
                            <p>
                                ЖК «Набережна Вежа» – це комплекс бізнес класу,
                                головною перевагою якого є місце розташування.
                            </p>
                        </div>
                        <div className="gallery-swiper">
                            <div className="swiper-header-btns">
                                <div className="icon-arrow prev3">
                                    <ArrowLeft />
                                </div>
                                <div className="icon-arrow next3">
                                    <Arrow />
                                </div>
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                modules={[Navigation, EffectFade]}
                                navigation={{
                                    prevEl: ".prev3",
                                    nextEl: ".next3",
                                }}
                                breakpoints={{
                                    500: {
                                        // width: 576,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        // width: 768,
                                        slidesPerView: 3,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {newsSwiperList.map((items, index) => {
                                    return (
                                        <SwiperSlide
                                            className="gallery-swiper-item"
                                            key={index}
                                        >
                                            <img
                                                className="gallery-swiper-item-img"
                                                src={
                                                    new URL(
                                                        `/src/assets/img/swiper-news/${items.imgUrl}`,
                                                        import.meta.url,
                                                    ).href
                                                }
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="advantages">
                    <div className="advantages-header">
                        <h2>переваги</h2>
                        <p>
                            Унікальність ЖК «Набережна Вежа» у тому, що з його
                            вікон проглядається одна з найкрасивіших панорам
                            Тернополя. Поруч комплексу розташований Парк
                            Шевченка.
                        </p>
                    </div>
                    <div className="advantages-list">
                        {advantagesList.map((item, index) => {
                            return (
                                <div
                                    className="advantages-list-item"
                                    key={index}
                                >
                                    <img
                                        src={
                                            new URL(
                                                `/src/assets/img/advantages/${item.imgUrl}`,
                                                import.meta.url,
                                            ).href
                                        }
                                    />
                                    <p>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="technologies">
                    <h2>ТЕХНОЛОГІЇ</h2>

                    <div className="technologies-list">
                        {technologiesList.map((item, index) => {
                            return (
                                <div
                                    className="technologies-list-item"
                                    key={index}
                                >
                                    <img
                                        src={
                                            new URL(
                                                `/src/assets/img/technologies-icon/${item.imgUrl}`,
                                                import.meta.url,
                                            ).href
                                        }
                                    />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="construction">
                    <h2>Терміни будівництва</h2>
                    <div className="construction-timeline">
                        <div className="construction-timeline-line">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="20" cy="20" r="20" fill="#FFD299" />
                                <path
                                    d="M10 19.4909C16.3064 26.2982 17.883 28 17.883 28L29 16"
                                    stroke="#311B00"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div
                                className="timeline"
                                style={{ width: "80%" }}
                            ></div>
                            <div className="line"></div>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="20" cy="20" r="20" fill="white" />
                                <circle
                                    cx="19.5"
                                    cy="19.5"
                                    r="4.5"
                                    fill="#311B00"
                                />
                            </svg>
                        </div>
                        <div className="construction-timeline-text">
                            <div className="construction-timeline-text-item">
                                <label>Початок будівництва</label>
                                <span>Січень 2024 р</span>
                            </div>
                            <div className="construction-timeline-text-item">
                                <label>Здача будинку</label>
                                <span>2 квартал 2026 р.</span>
                            </div>
                        </div>
                    </div>
                    <div className="construction-swiper">
                        <div className="construction-swiper-header">
                            <h2>хід будівництва</h2>
                            <div className="swiper-header-btns">
                                <div className="icon-arrow prev">
                                    <ArrowLeft />
                                </div>
                                <div className="icon-arrow next">
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                        <LightGallery
                            onInit={(ref) =>
                                (lightboxRef.current = ref.instance)
                            }
                            speed={500}
                            plugins={[lgZoom]}
                            selector="[data-src]"
                        >
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: ".prev",
                                    nextEl: ".next",
                                }}
                                breakpoints={{
                                    500: {
                                        // width: 576,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        // width: 768,
                                        slidesPerView: 3,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {constructionSwiperList.map((items, index) => {
                                    return (
                                        <SwiperSlide
                                            className="construction-swiper-item"
                                            key={index}
                                        >
                                            <div className="construction-swiper-item-img">
                                                <img
                                                    src={
                                                        new URL(
                                                            `/src/assets/img/swiper-construction/${items.imgUrl}`,
                                                            import.meta.url,
                                                        ).href
                                                    }
                                                    alt=""
                                                />
                                                <div className="construction-swiper-item-box"></div>
                                                <a
                                                    data-src={
                                                        new URL(
                                                            `/src/assets/img/swiper-construction/${items.imgUrl}`,
                                                            import.meta.url,
                                                        ).href
                                                    }
                                                >
                                                    <Сamera />
                                                </a>
                                            </div>

                                            <span>{items.date}</span>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </LightGallery>
                    </div>
                </div>

                <div className="about-us" id="about">
                    <div className="about-us-img">
                        <img src={aboutImg} alt="" />
                    </div>

                    <div className="about-us-info">
                        <h2>про нас</h2>
                        <p className="about-us-info-text">
                            ЖК «Набережна Вежа» – це комплекс бізнес класу,
                            головною перевагою якого є місце розташування.
                            Комплекс зводиться в екологічно чистому районі,
                            поруч Тернопільського ставу.
                        </p>
                        <p>
                            Унікальність ЖК «Набережна Вежа» у тому, що з його
                            вікон проглядається одна з найкрасивіших панорам
                            Тернополя. 80 відсотків квартир матимуть розкішний
                            вигляд на Тернопільську набережну. Поруч комплексу
                            розташований Парк Шевченка, тому ранкові пробіжки
                            біля озера чи вечірні прогулянки велосипедами з
                            сім’єю парковою оазою – це мрія, яка стане
                            реальністю для кожного мешканця комплексу.
                        </p>
                        <p>
                            Комплекс віддалений від шумних магістралей, тут
                            спокій, свіже повітря, можливість відпочинку у
                            найкрасивішому місці обласного центру, де щовечора
                            своєю красою вражають розмаїті фонтани і вражаючі
                            колоритністю сквери.
                        </p>
                        <a href="#" className="btn">
                            ЗАПИСАТИСЬ НА ОГЛЯД
                        </a>
                    </div>
                </div>

                <div className="news">
                    <div className="news-header">
                        <h2>новини</h2>
                        <div className="swiper-header-btns">
                            <div className="icon-arrow prev2">
                                <ArrowLeft />
                            </div>
                            <div className="icon-arrow next2">
                                <Arrow />
                            </div>
                        </div>
                    </div>
                    <div className="news-swiper">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={27}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".prev2",
                                nextEl: ".next2",
                            }}
                            breakpoints={{
                                500: {
                                    // width: 576,
                                    slidesPerView: 2,
                                },
                                768: {
                                    // width: 768,
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                        >
                            {newsSwiperList.map((items, index) => {
                                return (
                                    <SwiperSlide
                                        className="news-swiper-item"
                                        key={index}
                                    >
                                        <NavLink to="news" />
                                        <img
                                            className="news-swiper-item-img"
                                            src={
                                                new URL(
                                                    `/src/assets/img/swiper-news/${items.imgUrl}`,
                                                    import.meta.url,
                                                ).href
                                            }
                                            alt=""
                                        />

                                        <div className="news-swiper-item-box"></div>
                                        <div className="news-swiper-date">
                                            {items.date}
                                        </div>
                                        <div className="news-swiper-info">
                                            <div className="news-swiper-info-text">
                                                {items.text}
                                            </div>
                                            <div className="news-swiper-info-description">
                                                {items.description}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="documents-wrapper" id="documents">
                <div className="container">
                    <div className="documents">
                        <h2>документи</h2>
                        <div className="documents-items">
                            <div className="documents-item ">
                                <p>Дозвіл на виконання будівельних робіт</p>
                                <a className="icon-arrow">
                                    <Download />
                                </a>
                            </div>
                            <div className="documents-item">
                                <p>
                                    Ліцензія на ведення господарської діяльності
                                    з будівництва об'єктів, що за класом
                                    наслідків (відповідальності) належать до
                                    об'єктів з середніми та значними наслідками
                                </p>
                                <a className="icon-arrow">
                                    <Download />
                                </a>
                            </div>
                        </div>
                        <div className="documents-info">
                            <h4>Юридична інформація</h4>
                            <div className="documents-info-items">
                                <div className="documents-info-item">
                                    <p>
                                        Найменування юридичної особи
                                        <span>
                                            Приватне підприємство «Креатор-Буд»
                                        </span>
                                    </p>
                                    <p>
                                        Код ЄДРПОУ
                                        <span>34227060</span>
                                    </p>
                                    <p>
                                        Організаційно-правова форма
                                        <span>
                                            Вертикально інтегрований холдинг
                                            повного циклу
                                        </span>
                                    </p>
                                </div>
                                <div className="documents-info-item">
                                    <p>
                                        Відомості про керівника юридичної особи
                                        та про інших осіб, які можуть вчиняти
                                        дії від імені юридичної особи, у тому
                                        числі підписувати договори, подавати
                                        документи для державної реєстрації тощо.
                                        <span>
                                            Директор Лахита Олег Володимирович.
                                        </span>
                                    </p>
                                    <p>
                                        Відомості про кінцевого бенефіціарного
                                        власника (контролера) замовника
                                        будівництва (девелопера будівництва,
                                        управителя фонду фінансування
                                        будівництва): прізвище, ім’я, по
                                        батькові
                                        <span>Гуда Ігор Богданович.</span>
                                    </p>
                                    <p>
                                        Місцезнаходження юридичної особи.
                                        <span>
                                            Україна, 46001, Тернопільська обл.,
                                            м. Тернопіль, вул. Листопадова, 1/3.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-wrapper" id="contact">
                <div className="container">
                    <div className="contact">
                        <div className="contact-info">
                            <h2>контакти</h2>
                            <div className="contact-info-list">
                                <div className="contact-info-list-item">
                                    <h3>Відділ продажу</h3>
                                    <ul>
                                        <li>
                                            {" "}
                                            Центральний відділ продажу – вул.
                                            Листопадова, 1/3
                                        </li>
                                        <li>
                                            <a href="tel:381708742">
                                                +38(067)-170-87-42
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:kreatorbudternopil@gmail.com">
                                                kreatorbudternopil@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-info-list-item">
                                    <h3>Графік роботи</h3>
                                    <ul>
                                        <li> Пн. - Пт.: з 08:00 до 17:00</li>
                                        <li> Сб. - Нд.: вихідні дні</li>
                                    </ul>
                                </div>
                                <div className="contact-info-list-item">
                                    <h3>Розташування комплексу</h3>
                                    <ul>
                                        <li> вул. Білецька, 30</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="btn">
                                ЗАПИСАТИСЬ НА ОГЛЯД
                            </a>
                        </div>
                        <div className="map">
                            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.115508626325!2d25.587865226307486!3d49.556747161835105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303135a5e8f5b5%3A0xbe7454d8aa3bac08!2z0J_QsNGA0Log0LjQvNC10L3QuCDQotCw0YDQsNGB0LAg0KjQtdCy0YfQtdC90LrQvg!5e0!3m2!1sru!2sua!4v1770389476451!5m2!1sru!2sua"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
                            <Map />
                        </div>
                    </div>
                </div>
            </div>

            {popupConsultations && (
                <Popup
                    statePopup={popupConsultations}
                    closePopup={setPopupConsultations}
                >
                    <div className="questions__inner">
                        <div className="questions-header">
                            <h2>Замовити консультацію</h2>
                            <p>
                                Наші менеджери зв’яжуться з вами та нададуть всю
                                необхідну інформаці, яка вас цікавитиме.
                            </p>
                        </div>
                        <form action="" className="questions-form">
                            <div className="g-input">
                                <label>Ваше ім'я</label>
                                <input type="text" placeholder="Ваше ім’я" />
                            </div>
                            <div className="g-input">
                                <label>Телефон</label>
                                <input
                                    type="text"
                                    placeholder="+38 (___) ___-__-__"
                                />
                            </div>
                            <button className="btn">
                                Отримати консультацію
                            </button>
                        </form>
                    </div>
                </Popup>
            )}
            {popupTy && (
                <Popup statePopup={popupTy} closePopup={setPopupTy}>
                    <div className="modal-ty">
                        <div className="modal-ty-icon">
                            <Airplane />
                        </div>
                        <div className="modal-ty-info">
                            <h2>Дякуємо!</h2>
                            <p>
                                Найближчим часом наш спеціалість звяжеться з
                                Вами!
                            </p>
                            <button
                                className="btn"
                                onClick={() => {
                                    setPopupTy(false);
                                }}
                            >
                                Повернутись на головну
                            </button>
                        </div>
                    </div>
                </Popup>
            )}
        </>
    );
}

export { HomePage };

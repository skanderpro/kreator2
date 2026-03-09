import React, { useRef, useContext } from "react";
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
import ArrowLeft from "../assets/svg/arrowLeft.svg?react";
import Сamera from "../assets/svg/camera.svg?react";
import Download from "../assets/svg/download.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import { Map } from "../components/Map";

import Popup from "../components/popup/Popup.jsx";

import { useGallery } from "../api/gallery";
import { useNews } from "../api/news";
import { formatDate } from "../formatters/date";
import {
    useApartmentsMeta,
    useApartmentsUnsoldCount,
} from "../api/apartments.js";
import { useBuildSteps } from "../api/build-step.js";
import { useFeatures } from "../api/features.js";
import { useDocuments } from "../api/documents.js";

import { AppContext } from "../context/AppContext";
import { useFormik } from "formik";
import { useTechnologies } from "../api/technology.js";
import { useSettings } from "../api/settings.js";

function HomePage() {
    const lightboxRef = useRef(null);
    const navigate = useNavigate();

    const gallery = useGallery();
    const news = useNews();
    const apartmentsMeta = useApartmentsMeta();
    const buildSteps = useBuildSteps();
    const features = useFeatures();
    const documents = useDocuments();
    const apartmentCount = useApartmentsUnsoldCount();
    const technologies = useTechnologies();
    const settings = useSettings();

    const formik = useFormik({
        initialValues: {
            type: [],
            rooms: [],
            priceFrom: "",
            priceTo: "",
            areaFrom: "",
            areaTo: "",
        },
        onSubmit: (values) => {
            const query = [...Object.entries(values)].reduce(
                (acc, [key, value]) => {
                    if (Array.isArray(value)) {
                        key = `${key}[]`;
                    }

                    if (Array.isArray(value)) {
                        value.forEach((item) => acc.append(key, item));
                    } else if (value) {
                        acc.append(key, value);
                    }
                    return acc;
                },
                new URLSearchParams(),
            );

            navigate(`/catalog?${query.toString()}`);
        },
    });

    const handleMultipleValues = (name, value) => () => {
        const values = formik.values[name];
        if (values.includes(value)) {
            const newValues = values.filter((val) => val !== value);
            formik.setFieldValue(name, newValues);
        } else {
            formik.setFieldValue(name, [...values, value]);
        }

        console.log(values);
    };

    const { setPopupConsultations } = useContext(AppContext);

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

                            <button
                                className="btn"
                                onClick={() => {
                                    setPopupConsultations(true);
                                }}
                            >
                                ЗАПИСАТИСЬ НА ПЕРЕГЛЯД
                            </button>
                            <div className="head-banner__location">
                                <span>{settings.data.address_building}</span>
                                <a
                                    href={settings.data.hero_url}
                                    className="icon-arrow icon-arrow--right"
                                >
                                    <Arrow />
                                </a>
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
                                <div className="price-label">
                                    {apartmentsMeta.data.price.min}
                                </div>
                                <span>грн/м.кв</span>
                            </div>
                        </div>
                        <div className="price-line"></div>
                        <div className="price-con">
                            <label>Площі:</label>
                            <div className="price-title">
                                <div className="price-label">
                                    {apartmentsMeta.data.area.min}-
                                    {apartmentsMeta.data.area.max}
                                </div>
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
                                    {apartmentCount.data?.count}{" "}
                                    <span>квартир</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-apartments-filter">
                            <div className="card-apartments-filter-item">
                                <label>Тип нерухомості:</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="list-tab list-tab-wfc">
                                        <div
                                            className={`list-tab-item ${
                                                formik.values.type.includes(
                                                    "apartment",
                                                )
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={handleMultipleValues(
                                                "type",
                                                "apartment",
                                            )}
                                        >
                                            Квартира
                                        </div>
                                        <div
                                            className={`list-tab-item ${
                                                formik.values.type.includes(
                                                    "parking",
                                                )
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={handleMultipleValues(
                                                "type",
                                                "parking",
                                            )}
                                        >
                                            Паркомісце
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-apartments-filter-item">
                                <label>К-ть кімнат</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="list-tab">
                                        {apartmentsMeta.data.rooms.map(
                                            (room) => (
                                                <div
                                                    key={`room-${room}`}
                                                    className={`list-tab-item ${
                                                        formik.values.rooms.includes(
                                                            room,
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={handleMultipleValues(
                                                        "rooms",
                                                        room,
                                                    )}
                                                >
                                                    {room}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="card-apartments-filter-item">
                                <label>Ціна, грн</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder={`від: ${apartmentsMeta.data.price.min}`}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    "priceFrom",
                                                    e.target.value,
                                                )
                                            }
                                            value={formik.values.priceFrom}
                                        />
                                    </div>
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder={`до: ${apartmentsMeta.data.price.max}`}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    "priceTo",
                                                    e.target.value,
                                                )
                                            }
                                            value={formik.values.priceTo}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-apartments-filter-item">
                                <label>Площа, грн</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder={`від: ${apartmentsMeta.data.area.min}`}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    "areaFrom",
                                                    e.target.value,
                                                )
                                            }
                                            value={formik.values.areaFrom}
                                        />
                                        <span>м²</span>
                                    </div>
                                    <div className="filter-input">
                                        <input
                                            type="text"
                                            placeholder={`до: ${apartmentsMeta.data.area.max}`}
                                            onChange={(e) =>
                                                formik.setFieldValue(
                                                    "areaTo",
                                                    e.target.value,
                                                )
                                            }
                                            value={formik.values.areaTo}
                                        />
                                        <span>м²</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={formik.handleSubmit}
                            className="btn"
                        >
                            ПЕРЕГЛЯНУТИ ВАРІАНТИ
                        </button>
                    </div>
                </div>
            </div>
            <div className="gallery-wrapper-con" id={"gallery-wrapper"}>
                <div className="gallery-wrapper">
                    <div className="container">
                        <div className="gallery">
                            <div className="gallery-text">
                                <h2>галерея</h2>
                                <p>
                                    ЖК «Набережна Вежа» – це комплекс бізнес
                                    класу, головною перевагою якого є місце
                                    розташування.
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
                                    {gallery.data.data.map((item, index) => {
                                        return (
                                            <SwiperSlide
                                                className="gallery-swiper-item"
                                                key={index}
                                            >
                                                <img
                                                    className="gallery-swiper-item-img"
                                                    src={item.image}
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
            </div>

            <div className="container">
                <div className="advantages" id={"advantages"}>
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
                        {features.data.data.map((item, index) => {
                            return (
                                <div
                                    className="advantages-list-item"
                                    key={index}
                                >
                                    <img src={item.image} />
                                    <p>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="technologies" id={"technologies"}>
                    <h2>ТЕХНОЛОГІЇ</h2>

                    <div className="technologies-list">
                        {technologies.data.data.map((item, index) => {
                            return (
                                <div
                                    className="technologies-list-item"
                                    key={index}
                                >
                                    <img src={item.image} />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="construction-wrapper" id="construction">
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
                                    <circle
                                        cx="20"
                                        cy="20"
                                        r="20"
                                        fill="#FFD299"
                                    />
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
                                    <circle
                                        cx="20"
                                        cy="20"
                                        r="20"
                                        fill="white"
                                    />
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
                                    {buildSteps.data.data.map((item, index) => {
                                        return (
                                            <SwiperSlide
                                                className="construction-swiper-item"
                                                key={index}
                                            >
                                                <div className="construction-swiper-item-img">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                    />
                                                    <div className="construction-swiper-item-box"></div>
                                                    <a data-src={item.image}>
                                                        <Сamera />
                                                    </a>
                                                </div>

                                                <span>{item.title}</span>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </LightGallery>
                        </div>
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
                        <button
                            className="btn"
                            onClick={() => {
                                setPopupConsultations(true);
                            }}
                        >
                            ЗАПИСАТИСЬ НА ОГЛЯД
                        </button>
                    </div>
                </div>

                <div className="news" id={"news"}>
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
                            {news.data.data.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        className="news-swiper-item"
                                        key={index}
                                    >
                                        <NavLink to="news" />
                                        <img
                                            className="news-swiper-item-img"
                                            src={item.image}
                                            alt=""
                                        />

                                        <div className="news-swiper-item-box"></div>
                                        <div className="news-swiper-date">
                                            {formatDate(item.created_at)}
                                        </div>
                                        <div className="news-swiper-info">
                                            <div className="news-swiper-info-text">
                                                {item.title}
                                            </div>
                                            <div
                                                className="news-swiper-info-description"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.excerpt,
                                                }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="documents-wrapper-con" id="documents">
                <div className="documents-wrapper">
                    <div className="container">
                        <div className="documents">
                            <h2>документи</h2>
                            <div className="documents-items">
                                {documents.data.data.map((item, index) => {
                                    return (
                                        <div
                                            className="documents-item "
                                            key={`document-${index}`}
                                        >
                                            <p>{item.title}</p>
                                            <a
                                                className="icon-arrow"
                                                href={item.image}
                                                download
                                            >
                                                <Download />
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="documents-info">
                                <h4>Юридична інформація</h4>
                                <div className="documents-info-items">
                                    <div className="documents-info-item">
                                        <p>
                                            Найменування юридичної особи
                                            <span>
                                                Приватне підприємство
                                                «Креатор-Буд»
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
                                            Відомості про керівника юридичної
                                            особи та про інших осіб, які можуть
                                            вчиняти дії від імені юридичної
                                            особи, у тому числі підписувати
                                            договори, подавати документи для
                                            державної реєстрації тощо.
                                            <span>
                                                Директор Лахита Олег
                                                Володимирович.
                                            </span>
                                        </p>
                                        <p>
                                            Відомості про кінцевого
                                            бенефіціарного власника (контролера)
                                            замовника будівництва (девелопера
                                            будівництва, управителя фонду
                                            фінансування будівництва): прізвище,
                                            ім’я, по батькові
                                            <span>Гуда Ігор Богданович.</span>
                                        </p>
                                        <p>
                                            Місцезнаходження юридичної особи.
                                            <span>
                                                Україна, 46001, Тернопільська
                                                обл., м. Тернопіль, вул.
                                                Листопадова, 1/3.
                                            </span>
                                        </p>
                                    </div>
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
                                            {
                                                settings.data
                                                    .address_sell_department
                                            }
                                        </li>
                                        <li>
                                            <a
                                                href={`tel:${settings.data.phone?.replaceAll(/\D/g, "")}`}
                                            >
                                                {settings.data.phone}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={`mailto:${settings.data.email}`}
                                            >
                                                {settings.data.email}
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
                                        <li>
                                            {" "}
                                            {settings.data.address_building}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                className="btn"
                                onClick={() => {
                                    setPopupConsultations(true);
                                }}
                            >
                                ЗАПИСАТИСЬ НА ОГЛЯД
                            </button>
                        </div>
                        <div className="map" id="map">
                            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.115508626325!2d25.587865226307486!3d49.556747161835105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47303135a5e8f5b5%3A0xbe7454d8aa3bac08!2z0J_QsNGA0Log0LjQvNC10L3QuCDQotCw0YDQsNGB0LAg0KjQtdCy0YfQtdC90LrQvg!5e0!3m2!1sru!2sua!4v1770389476451!5m2!1sru!2sua"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
                            {Boolean(settings.data.map_api_key) && <Map />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { HomePage };

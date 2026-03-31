import React, { useRef, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import { Navigation, EffectFade } from "swiper/modules";

import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";

import headBanner from "../assets/img/head-banner.png";
import headBannerMob from "../assets/img/head-banner-mob.jpg";
import LogoEdem from "../assets/svg/logo-edem.svg?react";
import aboutImg from "../assets/img/house.jpg";
import Arrow from "../assets/svg/arrow.svg?react";
import Airplane from "../assets/svg/airplane.svg?react";
import ArrowLeft from "../assets/svg/arrowLeft.svg?react";
import Сamera from "../assets/svg/camera.svg?react";
import Download from "../assets/svg/download.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import { Map } from "../components/Map";

import Popup from "../components/popup/Popup.jsx";
import { BuildStepSlide } from "../components/BuildStepSlide.jsx";

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
    const lgGalleryContainerRef = useRef(null);
    const lgGalleryInstanceRef = useRef(null);
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
            type: "apartment",
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

    useEffect(() => {
        if (!lgGalleryContainerRef.current || !gallery.data?.data?.length)
            return;

        if (lgGalleryInstanceRef.current) {
            lgGalleryInstanceRef.current.destroy();
            lgGalleryInstanceRef.current = null;
        }

        lgGalleryInstanceRef.current = lightGallery(
            lgGalleryContainerRef.current,
            {
                plugins: [lgZoom],
                speed: 500,
                dynamic: true,
                dynamicEl: gallery.data.data.map((item) => ({
                    src: item.image,
                    thumb: item.image,
                })),
            },
        );

        return () => {
            if (lgGalleryInstanceRef.current) {
                lgGalleryInstanceRef.current.destroy();
                lgGalleryInstanceRef.current = null;
            }
        };
    }, [gallery.data]);

    return (
        <>
            <div className="head-banner">
                <picture className="head-banner__img">
                    <source srcSet={headBannerMob} media="(max-width: 768px)" />
                    <img src={headBanner} alt="House" />
                </picture>
                <div className="container">
                    <div className="head-banner__inner">
                        <div className="head-banner_inner">
                            <LogoEdem />
                            <h1 className="head-banner__title">
                                Твій рай у місті!
                            </h1>

                            <button
                                className="btn"
                                onClick={() => {
                                    setPopupConsultations(true);
                                }}
                            >
                                ЗАПИСАТИСЬ НА ПЕРЕГЛЯД
                            </button>
                            <div className="head-banner__location">
                                <span>
                                    м. Тернопіль,{" "}
                                    {settings.data.address_building}
                                </span>
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
                                <span>грн/м²</span>
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
                                <span>м²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-apartments-wrapper">
                <div className="container">
                    <div className="card-apartments">
                        <div className="card-apartments-header">
                            <h2>підбір таунхаусів</h2>
                            <div className="card-apartments-header-right">
                                {formik.values?.type?.length > 0 && (
                                    <>
                                        <p>
                                            За вашими параметрами ми знайшли для
                                            вас:
                                        </p>
                                        <div className="card-apartments-text">
                                            {formik.values.type === "apartment"
                                                ? apartmentCount.data?.apartment
                                                : apartmentCount.data
                                                      ?.parking}{" "}
                                            <span>Таунхаусів</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="card-apartments-filter">
                            <div className="card-apartments-filter-item">
                                <label>Тип нерухомості:</label>
                                <div className="card-apartments-filter-inner">
                                    <div className="list-tab list-tab-wfc">
                                        <div
                                            className={`list-tab-item ${
                                                formik.values.type ===
                                                "apartment"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                formik.setFieldValue(
                                                    "type",
                                                    "apartment",
                                                )
                                            }
                                        >
                                            Таунхаус
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
                                <label>Площа, м²</label>
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
                                    «EDEM Таун» — сучасні таунхауси в Тернополі
                                    з комфортом, тишею та простором, поєднані з
                                    міськими зручностями.
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
                                <div
                                    ref={lgGalleryContainerRef}
                                    style={{ display: "none" }}
                                />
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
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    className="mySwiper"
                                >
                                    {gallery.data.data.map((item, index) => (
                                        <SwiperSlide
                                            className="gallery-swiper-item"
                                            key={index}
                                        >
                                            <a
                                                href={item.image}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    lgGalleryInstanceRef.current?.openGallery(
                                                        index,
                                                    );
                                                }}
                                            >
                                                <img
                                                    className="gallery-swiper-item-img img-responsive"
                                                    src={item.image}
                                                    alt=""
                                                />
                                            </a>
                                        </SwiperSlide>
                                    ))}
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
                            Зелені зони, безпека та приватність роблять комплекс
                            справжньою оазою для життя.
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
                                    <span>
                                        1 квартал 2026 <b>р.</b>
                                    </span>
                                </div>
                                <div className="construction-timeline-text-item">
                                    <label>Здача будинку</label>
                                    <span>
                                        4 квартал 2026 <b>р.</b>
                                    </span>
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
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {buildSteps.data.data.map((item, index) => (
                                    <SwiperSlide
                                        className="construction-swiper-item"
                                        key={index}
                                    >
                                        <BuildStepSlide item={item} />
                                        <span>{item.title}</span>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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
                            «EDEM Таун» на вулиці Тролейбусній від компанії
                            «Креатор-Буд» — сучасний комплекс таунхаусів для
                            тих, хто цінує простір, тишу та комфорт, не
                            відмовляючись від переваг міського життя.
                        </p>
                        <p>
                            Це екологічна оаза Тернополя, де зелень, безпека й
                            приватність поєднуються з розвиненою
                            інфраструктурою. Переваги:
                            <ul>
                                <li>
                                    Таунхаус за ціною квартири, 2 поверхи, площа
                                    120 м²
                                </li>
                                <li>
                                    Власний передній (30 м²) і задній двір (28
                                    м²) для сімейного відпочинку
                                </li>
                                <li>
                                    Території розділені дизайнерськими клумбами
                                </li>
                                <li>
                                    2 паркомісця біля будинку, великі панорамні
                                    вікна
                                </li>
                            </ul>
                            Безпека та спокій:
                            <ul>
                                <li>
                                    Можливість встановлення теплої підлоги на
                                    етапі будівництва
                                </li>
                                <li>
                                    Закрита територія, відеоспостереження 24/7,
                                    цілодобова охорона
                                </li>
                                <li>
                                    Велике підземне укриття, всі комунікації
                                    підведені
                                </li>
                            </ul>
                            Зручна локація:
                            <ul>
                                <li>
                                    Парк Загребелля — 10 хв. пішки, центр міста
                                    — 10 хв. авто
                                </li>
                                <li>
                                    Школи, садочки та Новa пошта поруч, Західний
                                    ринок — 3 хв. авто
                                </li>
                            </ul>
                            Комфорт для всієї родини:
                            <ul>
                                <li>
                                    Сучасний ігровий майданчик, дизайнерські
                                    ландшафтні рішення Тут ранок починається з
                                    тиші, а день завершується заходом сонця у
                                    приватності та родинному затишку.
                                </li>
                            </ul>
                            «EDEM Таун» — атмосфера безпеки та власного простору
                            в самому Тернополі.
                        </p>

                        <button
                            className="btn"
                            onClick={() => {
                                setPopupConsultations(true);
                            }}
                        >
                            ЗАПИСАТИСЬ НА ПЕРЕГЛЯД
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
                                    <h3>Офіс продажу</h3>
                                    <ul>
                                        <li>
                                            {" "}
                                            Центральний офіс продажу –
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
                                        <li> Пн. - Пт.: з 09:00 до 18:00</li>
                                        <li> Сб. - Нд.: вихідні</li>
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
                                ЗАПИСАТИСЬ НА ПЕРЕГЛЯД
                            </button>
                        </div>
                        <div className="map" id="map">
                            {Boolean(settings.data.map_api_key) && <Map />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { HomePage };

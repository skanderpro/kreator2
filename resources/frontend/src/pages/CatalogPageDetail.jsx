import React, {useContext, useMemo, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSingleApartment } from "../api/apartments.js";
import { AppContext } from "../context/AppContext";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import lgZoom from "lightgallery/plugins/zoom";
import { ContactForm } from "../components/ContactForm.jsx";

function CatalogPageDetail() {
    const { id } = useParams();
    const apartment = useSingleApartment(id);

    const floor = useMemo(() => {
        return Array.isArray(apartment.data.data?.floor) ? apartment.data.data?.floor.join(', ') : apartment.data.data?.floor;
    }, [apartment.data.data?.floor]);

    const { setPopupConsultations } = useContext(AppContext);

    const [activeTab, setActiveTab] = useState(0);

    const images = [
        {
            title: "План 1-го поверху",
            src: apartment.data.data?.plan,
        },
        {
            title: "План 2-го поверху",
            src: apartment.data.data?.floor_plan,
        },
        {
            title: "Генплан",
            src: apartment.data.data?.gen_plan,
        },
    ];

    const sortedImages = [
        images[activeTab],
        ...images.filter((_, i) => i !== activeTab),
    ];

    const areaFormatter = new Intl.NumberFormat("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const isApartment = apartment.data.data?.type === "apartment";

    if (apartment.isLoading || apartment.isFetching) {
        return <div className="container">Loading...</div>;
    }
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs__inner">
                        <NavLink to="/">
                            <img
                                src={
                                    new URL(
                                        `/src/assets/svg/mini-logo.svg`,
                                        import.meta.url,
                                    ).href
                                }
                            />
                        </NavLink>
                        <NavLink to="/catalog">
                            Підбір квартир та паркомісць
                        </NavLink>
                        <span>{apartment.data.data?.title}</span>
                    </div>
                </div>
            </div>
            <div className="catalog-detail">
                <div className="container">
                    <div className="catalog-detail__inner">
                        <h2>{apartment.data.data?.title}</h2>
                        <div className="catalog-detail-header">
                            <div className="catalog-detail-header-items">
                                <div className="catalog-detail-header-item">
                                    <img
                                        src={
                                            new URL(
                                                `/src/assets/svg/catalog-icon/icon-1.svg`,
                                                import.meta.url,
                                            ).href
                                        }
                                    />
                                    Площа
                                    <span>
                                        {areaFormatter.format(
                                            apartment.data.data?.area,
                                        )}{" "}
                                         м2
                                    </span>
                                </div>
                                {isApartment && (
                                    <div className="catalog-detail-header-item">
                                        <img
                                            src={
                                                new URL(
                                                    `/src/assets/svg/catalog-icon/icon-2.svg`,
                                                    import.meta.url,
                                                ).href
                                            }
                                        />
                                        Житлова площа
                                        <span>
                                            {areaFormatter.format(
                                                apartment.data.data
                                                    ?.living_area,
                                            )}{" "}
                                             м²
                                        </span>
                                    </div>
                                )}

                                <div className="catalog-detail-header-item">
                                    <img
                                        src={
                                            new URL(
                                                `/src/assets/svg/catalog-icon/icon-3.svg`,
                                                import.meta.url,
                                            ).href
                                        }
                                    />
                                    Будинок
                                    <span>{apartment.data.data?.building}</span>
                                </div>
                                {isApartment && (
                                    <div className="catalog-detail-header-item">
                                        <img
                                            src={
                                                new URL(
                                                    `/src/assets/svg/catalog-icon/icon-4.svg`,
                                                    import.meta.url,
                                                ).href
                                            }
                                        />
                                        Секція
                                        <span>
                                            Секція{" "}
                                            {apartment.data.data?.section}
                                        </span>
                                    </div>
                                )}

                                <div className="catalog-detail-header-item">
                                    <img
                                        src={
                                            new URL(
                                                `/src/assets/svg/catalog-icon/icon-5.svg`,
                                                import.meta.url,
                                            ).href
                                        }
                                    />
                                    Поверх
                                    <span>{floor}</span>
                                </div>
                                {isApartment && (
                                    <div className="catalog-detail-header-item">
                                        <img
                                            src={
                                                new URL(
                                                    `/src/assets/svg/catalog-icon/icon-6.svg`,
                                                    import.meta.url,
                                                ).href
                                            }
                                        />
                                        Тип планування
                                        <span>
                                            {apartment.data.data?.planing_type}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="catalog-detail-header-info">
                                <div className="catalog-detail-header-info-text">
                                    Ціна за м²:{" "}
                                    <span>
                                        {areaFormatter.format(
                                            apartment.data.data
                                                ?.price_for_meter,
                                        )}{" "}
                                        грн/м²
                                    </span>
                                </div>
                                <div className="catalog-detail-header-info-price">
                                    Вартість{" "}
                                    {isApartment ? "квартири" : "паркомісця"}
                                    <span>
                                        {" "}
                                        {areaFormatter.format(
                                            apartment.data.data?.price,
                                        )}{" "}
                                        <b>грн</b>
                                    </span>
                                </div>
                                <button
                                    className={"btn"}
                                    onClick={() => {
                                        setPopupConsultations(true);
                                    }}
                                >
                                    Дізнатись умови
                                </button>
                            </div>
                        </div>
                        <div className="catalog-detail-tab">
                            <ul className="catalog-detail-tab-btn">
                                {images.map((item, index) => (
                                    <li
                                        key={index}
                                        className={
                                            activeTab === index ? "active" : ""
                                        }
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                            <LightGallery
                                speed={500}
                                plugins={[lgZoom]}
                                selector=".lightbox-item"
                            >
                                <div className="catalog-detail-tab-gallery">
                                    {sortedImages.map((item, index) => {
                                        return (
                                            <a
                                                key={index}
                                                href={item.src}
                                                data-src={item.src}
                                                className={`catalog-detail-tab-gallery-item lightbox-item div${index + 1}`}
                                            >
                                                <img src={item.src} />

                                                {index === 0 && (
                                                    <svg
                                                        width="70"
                                                        height="68"
                                                        viewBox="0 0 70 68"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <ellipse
                                                            cx="35"
                                                            cy="34"
                                                            rx="35"
                                                            ry="34"
                                                            transform="rotate(-180 35 34)"
                                                            fill="#FFD299"
                                                        />
                                                        <path
                                                            d="M50.3929 50.8475C51.2746 51.7292 52.6354 50.3683 51.7537 49.5058L44.5662 42.2992C47.0881 39.5099 48.4819 35.882 48.4762 32.1217C48.4762 23.7075 41.6337 16.865 33.2196 16.865C24.8054 16.865 17.9629 23.7075 17.9629 32.1217C17.9629 40.5358 24.8054 47.3783 33.2196 47.3783C37.0146 47.3783 40.5221 45.9792 43.2054 43.66L50.3929 50.8475ZM19.8776 32.1217C19.8776 24.7617 25.8768 18.7817 33.2176 18.7817C40.5776 18.7817 46.5576 24.7617 46.5576 32.1217C46.5576 39.4817 40.5776 45.4617 33.2176 45.4617C25.8768 45.4617 19.8776 39.4817 19.8776 32.1217Z"
                                                            fill="#311B00"
                                                        />
                                                    </svg>
                                                )}
                                            </a>
                                        );
                                    })}
                                </div>
                            </LightGallery>
                        </div>
                    </div>
                </div>
            </div>

            <div className="questions">
                <div className="container">
                    <div className="questions__inner">
                        <div className="questions-header">
                            <h2>Залишились питання?</h2>
                            <p>
                                Наші менеджери зв’яжуться з вами найближчим часом
                                та допоможуть розрахувати вартість нерухомості
                                залежності від обраного вами способу придбання,
                                розміру першого внеску та щомісячних платежів,
                                за умови розтермінування.
                            </p>
                        </div>
                        <ContactForm isStatic />
                    </div>
                </div>
            </div>
        </>
    );
}

export { CatalogPageDetail };

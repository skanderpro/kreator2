import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Filter from "../assets/svg/filter.svg?react";
import Close from "../assets/svg/close.svg?react";
function CatalogPage() {
    const [catalogfilterToggle, setCatalogFilterToggle] = useState(false);

    const catalogList = [
        {
            imgUrl: "catalog-2.jpg",
            title: "1.20",
            area: "12,5",
            priceArea: "51 846",
            price: "642 170, 80",
            type: "Parking",
        },
        {
            imgUrl: "catalog-1.jpg",
            title: "101",
            area: "45,80",
            room: "1",
            floor: "10",
            priceArea: "51 846",
            price: "2 374 546, 80",
            type: "Apartment",
        },
    ];

    if (catalogfilterToggle) {
        document.body.classList.add("hiden");
    } else {
        document.body.classList.remove("hiden");
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
                        <span>Підбір квартир та паркомісць</span>
                    </div>
                </div>
            </div>
            <div className="catalog">
                <div className="container">
                    <div className="catalog__inner">
                        <div className="catalog-header">
                            <h2>каталог</h2>
                            <div className="catalog-header-sort">
                                <label>Сортувати за</label>
                                <select name="" id="" className="filter-select">
                                    <option value="">
                                        Від дешевих до дорогих
                                    </option>
                                    <option value="">
                                        Від дорогих до дешевих
                                    </option>
                                    <option value="">
                                        Від малих до великих
                                    </option>
                                    <option value="">
                                        Від великих до малих
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="catalog-filter-btn">
                            <button
                                className="btn"
                                onClick={() => {
                                    setCatalogFilterToggle(true);
                                }}
                            >
                                Фільтр <Filter />
                            </button>
                        </div>

                        <div className="catalog-main">
                            <div
                                className={`catalog-filter ${catalogfilterToggle ? "active" : ""}`}
                            >
                                <div className="catalog-filter-btn">
                                    <button
                                        className="btn"
                                        onClick={() => {
                                            setCatalogFilterToggle(false);
                                        }}
                                    >
                                        Close <Close />
                                    </button>
                                </div>
                                <div className="card-apartments-filter-item">
                                    <label>Тип нерухомості</label>
                                    <div className="card-apartments-filter-inner">
                                        <div className="list-tab">
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
                                    <label>Оберіть будинок</label>
                                    <div className="card-apartments-filter-inner">
                                        <select
                                            name=""
                                            id=""
                                            className="filter-select"
                                        >
                                            <option value="">1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-apartments-filter-item">
                                    <label>Паркомісця</label>
                                    <div className="card-apartments-filter-inner">
                                        <select
                                            name=""
                                            id=""
                                            className="filter-select"
                                        >
                                            <option value="">1</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-apartments-filter-item">
                                    <label>К-ть кімнат</label>
                                    <div className="card-apartments-filter-inner">
                                        <div className="list-tab">
                                            <div className="list-tab-item">
                                                1
                                            </div>
                                            <div className="list-tab-item">
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-apartments-filter-item">
                                    <label>Площа</label>
                                    <div className="card-apartments-filter-col">
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
                                <div className="card-apartments-filter-item">
                                    <label>Ціна</label>
                                    <div className="card-apartments-filter-col">
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
                                    <label>Відображати продані</label>
                                    <div className="card-apartments-filter-inner">
                                        <div className="list-tab">
                                            <div className="list-tab-item">
                                                Так
                                            </div>
                                            <div className="list-tab-item">
                                                Ні
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-apartments-filter-item">
                                    <label>Спеціальні умови</label>
                                    <div className="card-apartments-filter-inner">
                                        <div className="list-tab">
                                            <div className="list-tab-item">
                                                Акція
                                            </div>
                                            <div className="list-tab-item">
                                                Кредит
                                            </div>
                                            <div className="list-tab-item">
                                                Розстрочка
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary">
                                    ОЧИСТИТИ
                                </button>
                                <button className="btn ">ПІДБІР КВАРТИР</button>
                            </div>
                            <div className="catalog-box">
                                <div className="catalog-list">
                                    {catalogList.map((item, index) => {
                                        return (
                                            <NavLink
                                                className="catalog-list-item"
                                                key={index}
                                                to={"/catalog-detail"}
                                            >
                                                <div className="catalog-list-item-title">
                                                    {item.type === "Apartment"
                                                        ? "Квартира"
                                                        : "Паркомісце"}{" "}
                                                    {item.title}
                                                </div>
                                                <div className="catalog-list-item-img">
                                                    <img
                                                        src={
                                                            new URL(
                                                                `/src/assets/img/catalog/${item.imgUrl}`,
                                                                import.meta.url,
                                                            ).href
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={`catalog-list-item-info ${
                                                        item.type ===
                                                        "Apartment" ? '': 'catalog-list-item-info--parking'
                                                    }`}
                                                >
                                                    <div className="catalog-list-item-info-item">
                                                        {item.area}{" "}
                                                        <span>м.кв</span>
                                                    </div>
                                                    {item.type ===
                                                    "Apartment" ? (
                                                        <>
                                                            <div className="catalog-list-item-info-item">
                                                                {item.room}{" "}
                                                                <span>
                                                                    кімната
                                                                </span>
                                                            </div>
                                                            <div className="catalog-list-item-info-item">
                                                                {item.floor}{" "}
                                                                <span>
                                                                    поверх
                                                                </span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="catalog-list-item-info-item">
                                                                Тип: Піземний
                                                                <span>
                                                                    -1 поверх
                                                                </span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="catalog-list-item-price">
                                                    {item.priceArea}{" "}
                                                    <span>грн/м.кв</span>
                                                </div>
                                                <div className="catalog-list-item-link">
                                                    <div className="catalog-list-item-link-btn">
                                                        {item.price}{" "}
                                                        <span>грн</span>
                                                    </div>

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
                                                            d="M29.85 20.7071C30.2406 20.3166 30.2406 19.6834 29.85 19.2929L23.4861 12.9289C23.0955 12.5384 22.4624 12.5384 22.0719 12.9289C21.6813 13.3195 21.6813 13.9526 22.0719 14.3431L27.7287 20L22.0719 25.6569C21.6813 26.0474 21.6813 26.6805 22.0719 27.0711C22.4624 27.4616 23.0955 27.4616 23.4861 27.0711L29.85 20.7071ZM9.71436 20V21H29.1429V20V19H9.71436V20Z"
                                                            fill="#311B00"
                                                        />
                                                    </svg>
                                                </div>
                                            </NavLink>
                                        );
                                    })}
                                </div>
                                <button className="btn">ПОКАЗАТИ БІЛЬШЕ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { CatalogPage };

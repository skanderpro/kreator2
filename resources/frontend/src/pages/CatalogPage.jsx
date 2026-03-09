import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../assets/svg/filter.svg?react";
import Close from "../assets/svg/close.svg?react";
import { useApartments, useApartmentsMeta } from "../api/apartments.js";
import { useFormik } from "formik";
function CatalogPage() {
    const [catalogfilterToggle, setCatalogFilterToggle] = useState(false);
    const [filter, setFilter] = useState({});
    const apartments = useApartments(filter);
    const apartmentsMeta = useApartmentsMeta();
    const [searchParams] = useSearchParams();

    const formik = useFormik({
        initialValues: {
            priceFrom: searchParams.get("priceFrom") || "",
            priceTo: searchParams.get("priceTo") || "",
            areaFrom: searchParams.get("areaFrom") || "",
            areaTo: searchParams.get("areaTo") || "",
            rooms: searchParams.getAll("rooms[]") || [],
            floor: "",
            type: searchParams.getAll("type[]").length
                ? searchParams.getAll("type[]")
                : ["apartment"],
            parking: "",
            order: "price_asc",
            sold: "",
            building: "",
            features: [],
            page: 1,
        },
        onSubmit: (values) => {
            setFilter(values);
        },
    });

    useEffect(() => {
        if (catalogfilterToggle) {
            document.body.classList.add("hiden");
        } else {
            document.body.classList.remove("hiden");
        }
    }, [catalogfilterToggle]);

    const loadMoreClickHandler = () => {
        formik.setFieldValue("page", formik.values.page + 1);
      
    };

    const orderChangeHandler = (e) => {
        formik.handleChange(e);
      
    };

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

    useEffect(() => {
        setFilter(formik.values);
    }, [formik.values]);

    const areaFormatter = new Intl.NumberFormat("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });


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
                                <select
                                    name="order"
                                    id=""
                                    className="filter-select"
                                    onChange={orderChangeHandler}
                                    value={formik.values.order}
                                >
                                    <option value="price_asc">
                                        Від дешевих до дорогих
                                    </option>
                                    <option value="price_desc">
                                        Від дорогих до дешевих
                                    </option>
                                    <option value="area_asc">
                                        Від малих до великих
                                    </option>
                                    <option value="area_desc">
                                        Від великих до малих
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="catalog-filter-btn">
                            <button
                                className="btn"
                                type="button"
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
                                        type="button"
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
                                    <label>Оберіть будинок</label>
                                    <div className="card-apartments-filter-inner">
                                        <select
                                            name="building"
                                            id=""
                                            className="filter-select"
                                            onChange={formik.handleChange}
                                            value={formik.values.building}
                                        >
                                            {apartmentsMeta.data.buildings.map(
                                                (building) => (
                                                    <option
                                                        key={`building-${building}`}
                                                        value={building}
                                                    >
                                                        {building}
                                                    </option>
                                                ),
                                            )}
                                        </select>
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
                                    <label>Площа, грн</label>
                                    <div className="card-apartments-filter-col">
                                        <div className="filter-input">
                                            <input
                                                type="text"
                                                onChange={(e) =>
                                                    formik.setFieldValue(
                                                        "areaFrom",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder={`від: ${apartmentsMeta.data.area.min}`}
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
                                <div className="card-apartments-filter-item">
                                    <label>Ціна, грн</label>
                                    <div className="card-apartments-filter-col">
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
                                    <label>Відображати продані</label>
                                    <div className="card-apartments-filter-inner">
                                        <div className="list-tab">
                                            <div
                                                className={`list-tab-item ${
                                                    formik.values.sold === "1"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    formik.setFieldValue(
                                                        "sold",
                                                        "1",
                                                    )
                                                }
                                            >
                                                Так
                                            </div>
                                            <div
                                                className={`list-tab-item ${
                                                    formik.values.sold === "0"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    formik.setFieldValue(
                                                        "sold",
                                                        "0",
                                                    )
                                                }
                                            >
                                                Ні
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-apartments-filter-item">
                                    <label>Спеціальні умови</label>
                                    <div className="card-apartments-filter-inner">
                                        <div className="list-tab">
                                            <div
                                                className={`list-tab-item ${
                                                    formik.values.features.includes(
                                                        "promotion",
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={handleMultipleValues(
                                                    "features",
                                                    "promotion",
                                                )}
                                            >
                                                Акція
                                            </div>
                                            <div
                                                className={`list-tab-item ${
                                                    formik.values.features.includes(
                                                        "credit",
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={handleMultipleValues(
                                                    "features",
                                                    "credit",
                                                )}
                                            >
                                                Кредит
                                            </div>
                                            <div
                                                className={`list-tab-item ${
                                                    formik.values.features.includes(
                                                        "installment",
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={handleMultipleValues(
                                                    "features",
                                                    "installment",
                                                )}
                                            >
                                                Розстрочка
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={formik.resetForm}
                                >
                                    ОЧИСТИТИ
                                </button>
                                
                            </div>
                            <div className="catalog-box">
                                <div className="catalog-list">
                                    {apartments.data.data.map((item, index) => {
                                        const isApartment =
                                            item.type === "apartment";

                                        return (
                                            <NavLink
                                                className="catalog-list-item"
                                                key={index}
                                                to={
                                                    "/catalog-detail/" + item.id
                                                }
                                            >
                                                <div className="catalog-list-item-title">
                                                    {item.title}
                                                </div>
                                                <div className="catalog-list-item-img">
                                                    <img
                                                        src={item.plan}
                                                        alt={item.title}
                                                    />
                                                </div>
                                                <div
                                                    className={`catalog-list-item-info ${
                                                        isApartment
                                                            ? ""
                                                            : "catalog-list-item-info--parking"
                                                    }`}
                                                >
                                                    <div className="catalog-list-item-info-item">
                                                        {areaFormatter.format(
                                                            item.area,
                                                        )}
                                                        <span>м.кв</span>
                                                    </div>
                                                    {isApartment ? (
                                                        <>
                                                            <div className="catalog-list-item-info-item">
                                                                {item.rooms}{" "}
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
                                                    {item.price_for_meter}{" "}
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
                                {apartments.data.data.length <
                                    apartments.data.meta.total &&
                                    (apartments.isLoading ||
                                    apartments.isFetching ? (
                                        <div>Loading...</div>
                                    ) : (
                                        <button
                                            className="btn"
                                            onClick={loadMoreClickHandler}
                                        >
                                            ПОКАЗАТИ БІЛЬШЕ
                                        </button>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { CatalogPage };

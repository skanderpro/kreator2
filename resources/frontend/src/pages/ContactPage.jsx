import React from "react";
import { NavLink } from "react-router-dom";
import { Map } from "../components/Map";

function ContactPage() {
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
                        <span>Контакти</span>
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
        </>
    );
}

export { ContactPage };

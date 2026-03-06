import React from "react";
import Logo from "../assets/svg/logo.svg?react";
import Facebook from "../assets/svg/facebook.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {useSettings} from "../api/settings.js";

function Footer() {
    const settings = useSettings();
    const navigate = useNavigate();
    const location = useLocation();



    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            navigate("/");

            // даємо час сторінці завантажитись
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer-logo">
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                    </div>
                    <div className="footer-info">
                        <div className="footer-info-item">
                            <span>Контакти</span>
                            <ul>
                                <li>
                                    <a href={`tel:${settings.data.phone?.replaceAll(/\D/g, '')}`}>
                                        {" "}
                                        {settings.data.phone}{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${settings.data.email}`}>
                                        {settings.data.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-info-item">
                            <span>Адреса</span>
                            <ul>
                                <li>
                                    Центральний відділ продажу – вул.
                                    {settings.data.address_building}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li>
                                <NavLink to="/catalog">
                                    Підбір квартир та паркомісць
                                </NavLink>
                            </li>
                            <li>
                                <a onClick={() => handleScroll("construction")}>Хід будівництва</a>
                            </li>
                            <li>
                                <a onClick={() => handleScroll("about")}>
                                    Про нас
                                </a>
                            </li>
                            <li>
                                <NavLink to="/contact">Контакти</NavLink>
                            </li>
                            <li>
                                <a onClick={() => handleScroll("documents")}>
                                    Документи
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-right">
                        <div className="footer-social">
                            <a
                                href={settings.data.facebook_url}
                                target="_blank"
                            >
                                <Facebook />
                            </a>
                            <a
                                href={settings.data.instagram_url}
                                target="_blank"
                            >
                                <Instagram />
                            </a>
                        </div>
                        <div className="footer-center">
                            <span>© Kreatorbud</span>
                            <div className="footer-center-text">
                                <NavLink to="/privacy-policy">
                                    Політика конфіденційності
                                </NavLink>
                                <NavLink to="/terms-of-use">Умови використання</NavLink>
                                <a href="https://www.prbaza.com">Розробка сайту PRBAZA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };

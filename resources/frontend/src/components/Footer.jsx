import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/svg/logo.svg?react";
import Facebook from "../assets/svg/facebook.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";

function Footer() {
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
                                    <a href="tel:380671708742">
                                        {" "}
                                        +38(067)-170-87-42{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:kreatorbudternopil@gmail.com">
                                        kreatorbudternopil@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-info-item">
                            <span>Адреса</span>
                            <ul>
                                <li>
                                    Центральний відділ продажу – вул.
                                    Листопадова, 1/3
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
                                <NavLink to="/">Хід будівництва</NavLink>
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
                            <NavLink to="/">
                                <Facebook />
                            </NavLink>
                            <NavLink to="/">
                                <Instagram />
                            </NavLink>
                        </div>
                        <div className="footer-center">
                            <span>© Kreatorbud</span>
                            <div className="footer-center-text">
                                <NavLink to="/">
                                    Політика конфіденційності
                                </NavLink>
                                <NavLink to="/">Умови використання</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };

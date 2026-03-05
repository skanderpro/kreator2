import React from "react";
import Logo from "../assets/svg/logo.svg?react";
import Facebook from "../assets/svg/facebook.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
function Footer() {
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
                                href="https://www.facebook.com/profile.php?id=61563935854644
"
                                target="_blank"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="https://www.instagram.com/kreatorbud.te"
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

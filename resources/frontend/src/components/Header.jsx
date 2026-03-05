import React, { useContext } from "react";

import { NavLink, useNavigate, useLocation } from "react-router-dom";

/**
 * Here I have used the following approach for svg, so that it is possible to edit them
 */

import Logo from "../assets/svg/logo.svg?react";
import MailIcon from "../assets/svg/user.svg?react";
import TelIcon from "../assets/svg/cart.svg?react";
import BurgerMenu from "../assets/svg/burger-menu-icon.svg?react";
import {useSettings} from "../api/settings.js";
import { AppContext } from "../context/AppContext";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const settings = useSettings();

    const handleScroll = (id) => {
        setActiveMenuBtn(false);
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

    const { setActiveMenuBtn, setPopupConsultations } =
        useContext(AppContext);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div
                        className={`header__inner `}
                    >
                        <div className="header__inner-logo">
                            <NavLink to="/">
                                <Logo />
                            </NavLink>
                        </div>
                        <nav
                            className={`header__inner-nav `}
                        >
                            <ul className="nav-list">
                                <li className="nav-list-item">
                                    <NavLink
                                        to="/catalog"
                                        onClick={() => setActiveMenuBtn(false)}
                                    >
                                        Підбір Квартир
                                    </NavLink>
                                </li>
                                <li className="nav-list-item">
                                    <a
                                        onClick={() =>
                                            handleScroll("documents")
                                        }
                                    >
                                        Документи
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <a onClick={() => handleScroll("about")}>
                                        Про Нас
                                    </a>
                                </li>
                                <li className="nav-list-item">
                                    <NavLink to={"/contact"}>Контакти</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__left-menu">
                            <div className="header__inner-link">
                                <button
                                    className={"header__inner-link-item"}
                                    onClick={() => {
                                        setPopupConsultations(true);
                                    }}
                                >
                                    <MailIcon />
                                </button>
                                <a
                                    href={`tel:${settings.data.phone?.replaceAll(/\D/g, '')}`}
                                    className={"header__inner-link-item"}
                                >
                                    <TelIcon />
                                </a>
                            </div>
                            {/* <div
                                className={`header__menu-btn ${isActiveMenuBtn ? "open" : ""}`}
                                onClick={handleToggleMenuBtn}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                            <button
                                className="header-burger-btn"
                                onClick={() => {
                                    setActiveMenuBtn(true);
                                }}
                            >
                                <BurgerMenu />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export { Header };

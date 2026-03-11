import React, { useContext, useEffect } from "react";
import Logo from "../assets/svg/logo.svg?react";
import CloseG from "../assets/svg/close-g.svg?react";
import menuBanner from "../assets/img/menu-banner.jpg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Menu() {
    const { isActiveMenuBtn, setActiveMenuBtn } = useContext(AppContext);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setActiveMenuBtn(false);
    }, [location.pathname]);

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
    return (
        <div className={`menu-modal ${isActiveMenuBtn ? "active" : ""}`}>
            <button
                className="menu-modal-close"
                onClick={() => {
                    setActiveMenuBtn(false);
                }}
            >
                <CloseG />
            </button>
            <div className="menu-modal-list">
                <div className="menu-modal-list-box">
                    <NavLink to="/">
                        <Logo />
                    </NavLink>

                    <ul>
                        <li>
                            <NavLink to="/catalog">Підбір квартир </NavLink>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("about")}>
                                про нас{" "}
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("documents")}>
                                документи{" "}
                            </a>
                        </li>
                        <li>
                            <NavLink to="/contact">контакти</NavLink>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("gallery-wrapper")}>
                                галерея
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("advantages")}>
                                переваги
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("technologies")}>
                                технології
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("construction")}>
                                хід будівництва
                            </a>
                        </li>
                        <li>
                            <a onClick={() => handleScroll("news")}>новини</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu-modal-img">
                <img src={menuBanner} alt="apartment" />
            </div>
        </div>
    );
}

export { Menu };

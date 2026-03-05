import React, { useContext } from "react";
import Logo from "../assets/svg/logo.svg?react";
import CloseG from "../assets/svg/close-g.svg?react";
import menuBanner from "../assets/img/menu-banner.jpg";
import { NavLink } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Menu() {
    const { isActiveMenuBtn, setActiveMenuBtn } = useContext(AppContext);
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
                    <Logo />
                    <ul>
                        <li>
                            <NavLink to="/">Підбір квартир </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">про нас </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">документи </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">контакти</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">галерея</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">переваги</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">технології</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">хід будівництва</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">новини</NavLink>
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

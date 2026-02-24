import React, { useState, useRef, useEffect } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

/**
 * Here I have used the following approach for svg, so that it is possible to edit them
 */

import Logo from "../assets/svg/logo.svg?react";
import HeaderArrow from "../assets/svg/header-arrow.svg?react";
import UserIcon from "../assets/svg/user.svg?react";
import CartIcon from "../assets/svg/cart.svg?react";

function Header() {
  const [isActiveDropdown, setActiveDropdown] = useState(false);
  const [isActiveMenuBtn, setActiveMenuBtn] = useState(false);

  /**
   * Switch for drop down
   */
  const handleToggleDropdown = () => {
    setActiveDropdown(!isActiveDropdown);
  };

  /**
   * Switch for hamburger menu
   */

  useEffect(() => {
    if (isActiveMenuBtn) {
      document.body.classList.add("hiden");
    } else {
      document.body.classList.remove("hiden");
    }
  }, [isActiveMenuBtn]);

  const handleToggleMenuBtn = () => {
    setActiveMenuBtn((prev) => !prev);
  };

  /**
   * The function of closing elements when clicking on outside the element
   */
  const tooltipRef = useRef(null);
  const onCloseOutside = () => {
    setActiveDropdown(false);
  };
  useOutsideClick(tooltipRef, onCloseOutside, isActiveDropdown);

  const navigate = useNavigate();
  const location = useLocation();

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
    <>
      <header className="header">
        <div className="container">
          <div className={`header__inner ${isActiveMenuBtn ? "active" : ""}`}>
            <div className="header__inner-logo">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <nav
              className={`header__inner-nav ${isActiveMenuBtn ? "active" : ""}`}
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
                {/* <li
                  ref={tooltipRef}
                  className={`nav-list-item drop-down ${
                    isActiveDropdown ? 'active' : ''
                  }`}
                >
                  <span
                    className='nav-list-item-btn'
                    onClick={handleToggleDropdown}
                  >
                    Features
                    <HeaderArrow />
                  </span>
                  <div className='nav-list-item-drop-down'>
                    <ul>
                      <li>
                        <NavLink to='/'>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to='/blog'>Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to='/shop'>Shop</NavLink>
                      </li>
                      <li>
                        <NavLink to='/about'>About</NavLink>
                      </li>
                      <li>
                        <NavLink to='/contact'>Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </li> */}
                <li className="nav-list-item">
                  <a onClick={() => handleScroll("documents")}>Документи</a>
                </li>
                <li className="nav-list-item">
                  <a onClick={() => handleScroll("about")}>Про Нас</a>
                </li>
                <li className="nav-list-item">
                  <NavLink to={'/contact'}>Контакти</NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__left-menu">
              <div className="header__inner-link">
                <NavLink to="/">
                  <UserIcon />
                </NavLink>
                <NavLink to="/">
                  <CartIcon />
                </NavLink>
              </div>
              <div
                className={`header__menu-btn ${isActiveMenuBtn ? "open" : ""}`}
                onClick={handleToggleMenuBtn}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };

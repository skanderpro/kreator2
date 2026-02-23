import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/svg/logo.svg?react";
import Facebook from "../assets/svg/facebook.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer-logo">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <div className="footer-center">
            <span>© Kreatorbud</span>
            <div className="footer-center-text">
              <NavLink to="/">Політика конфіденційності</NavLink> <span>|</span>{" "}
              <NavLink to="/">Умови використання</NavLink>
            </div>
          </div>

          <div className="footer-social">
            <NavLink to="/">
              <Facebook />
            </NavLink>
            <NavLink to="/">
              <Instagram />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

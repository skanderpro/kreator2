import React from "react";
import { NavLink } from "react-router-dom";
import NotfoundPageImg from "../assets/img/404.svg?react";
function NotfoundPage() {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__inner">
            <NavLink to="/">
              <img
                src={
                  new URL(`/src/assets/svg/mini-logo.svg`, import.meta.url).href
                }
              />
            </NavLink>
            <span>Notfound Page 404</span>
          </div>
        </div>
      </div>
      <div className="notfound">
        <div className="container">
          <div className="notfound__inner">
            <NotfoundPageImg />
          </div>
        </div>
      </div>
    </>
  );
}

export { NotfoundPage };

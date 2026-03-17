import React from "react";
import { NavLink } from "react-router-dom";
import { useNews } from "../api/news.js";
import { formatDate } from "../formatters/date.js";
import { useBuildSteps } from "../api/build-step.js";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import Сamera from "../assets/svg/camera.svg?react";
function СonstructionPage() {
    const buildSteps = useBuildSteps();

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
                        <span>Новини</span>
                    </div>
                </div>
            </div>

            <div className="news-page">
                <div className="container">
                    <div className="news-page__inner">
                        <h2>Хід будівництва</h2>
                        <LightGallery
                            speed={500}
                            plugins={[lgZoom]}
                            selector="[data-src]"
                            className="news-page-items"
                        >
                            <div className="news-page-items">
                                {buildSteps.data.data.map((item, index) => {
                                    return (
                                        <div
                                            className="construction-swiper-item"
                                            key={index}
                                        >
                                            <div className="construction-swiper-item-img">
                                                <img src={item.image} alt="" />
                                                <div className="construction-swiper-item-box"></div>
                                                <a
                                                    href={item.image}
                                                    data-src={item.image}
                                                >
                                                    <Сamera />
                                                </a>
                                            </div>

                                            <span>{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </LightGallery>
                        <button className="btn">ПОКАЗАТИ БІЛЬШЕ</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { СonstructionPage };

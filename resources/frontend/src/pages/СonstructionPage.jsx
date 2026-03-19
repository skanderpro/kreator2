import React from "react";
import { NavLink } from "react-router-dom";
import { useBuildSteps } from "../api/build-step.js";
import { BuildStepSlide } from "../components/BuildStepSlide.jsx";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

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
                        <div className="news-page-items">
                            {buildSteps.data.data.map((item, index) => (
                                <div
                                    className="construction-swiper-item"
                                    key={index}
                                >
                                    <BuildStepSlide item={item} />
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn">ПОКАЗАТИ БІЛЬШЕ</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { СonstructionPage };

import React from "react";
import { NavLink } from "react-router-dom";
import {useNews} from "../api/news.js";
import {formatDate} from "../formatters/date.js";
function NewsPage() {
   

    const news = useNews();

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
                        <h2>новини</h2>
                        <NavLink  to={"/news-detail/" + news.data.data[0]?.id} className="news-page-banner">
                            <div className="news-swiper-item">
                                <img
                                    className="news-swiper-item-img"
                                    src={news.data.data[0]?.image}
                                    alt=""
                                />

                                <div className="news-swiper-item-box"></div>
                                <div className="news-swiper-date">
                                    {formatDate(news.data.data[0]?.created_at)}
                                </div>
                            </div>
                            <div className="news-page-banner-item">
                                <div
                                    className="news-page-banner-item-text"
                                   
                                >
                                    {news.data.data[0]?.title}
                                </div>
                                <div dangerouslySetInnerHTML={{__html: news.data.data[0]?.excerpt}} />
                            </div>
                        </NavLink>
                        <div className="news-page-items">
                            {news.data.data.slice(1)?.map((item, index) => {
                                return (
                                    <NavLink
                                        className="news-swiper-item"
                                        key={index}
                                        to={"/news-detail/" + item.id}
                                    >
                                        <img
                                            className="news-swiper-item-img"
                                            src={item.image}
                                            alt=""
                                        />

                                        <div className="news-swiper-item-box"></div>
                                        <div className="news-swiper-date">
                                            {formatDate(item.created_at)}
                                        </div>
                                        <div className="news-swiper-info">
                                            <div className="news-swiper-info-text">
                                                {item.title}
                                            </div>
                                            <div className="news-swiper-info-description" dangerouslySetInnerHTML={{__html: item.excerpt}} />
                                        </div>
                                    </NavLink>
                                );
                            })}
                        </div>
                        <button className="btn">ПОКАЗАТИ БІЛЬШЕ</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { NewsPage };

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Facebook from "../assets/svg/facebook.svg?react";
import Twitter from "../assets/svg/twitter.svg?react";
import Instagram from "../assets/svg/instagram.svg?react";
import { useSingleNews } from "../api/news.js";
import { formatDate } from "../formatters/date.js";
import { useSettings } from "../api/settings.js";
function NewsDetailPage() {
    const settings = useSettings();
    const params = useParams();
    const singleNews = useSingleNews(params.id);

    if (singleNews.isLoading || singleNews.isFetching) {
        return <div>Loading...</div>;
    }

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
                        <NavLink to="/news">Новини</NavLink>
                        <span>{singleNews.data.data.title}</span>
                    </div>
                </div>
            </div>

            <div className="news-detail">
                <div className="container">
                    <div className="news-detail__inner">
                        <img
                            className="news-swiper-item-img"
                            src={singleNews.data.data.cover || singleNews.data.data.image}
                            alt={singleNews.data.data.title}
                        />
                        <div className="news-detail-info">
                            <div className="news-detail-info-social">
                                <span>
                                    {formatDate(
                                        singleNews.data.data.created_at,
                                    )}
                                </span>
                                <div className="footer-social">
                                    <a
                                        href={settings.data.facebook_url}
                                        target="_blank"
                                    >
                                        <Facebook />
                                    </a>
                                    <a
                                        href={settings.data.instagram_url}
                                        target="_blank"
                                    >
                                        <Instagram />
                                    </a>
                                </div>
                            </div>
                            <div className="news-detail-info-text">
                                <h4>{singleNews.data.data.title}</h4>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: singleNews.data.data.content,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { NewsDetailPage };

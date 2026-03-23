import React from "react";
import { NavLink,  } from "react-router-dom";


function PrivacyPolicy() {

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
                        <span>Політика конфіденційності</span>
                    </div>
                </div>
            </div>

            <div className="news-detail">
                <div className="container">
                    <div className="news-detail__inner">
                        {/* <img
              className="news-swiper-item-img"
              src={singleNews.data.data.image}
              alt={singleNews.data.data.title}
            /> */}
                        <div className="news-detail-info">
                            
                            <div className="news-detail-info-text">
                                <h4>Title</h4>
                                {/* <div dangerouslySetInnerHTML={{__html: singleNews.data.data.content}} /> */}
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { PrivacyPolicy };

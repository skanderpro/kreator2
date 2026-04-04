import React from "react";
import {NavLink, useParams,} from "react-router-dom";
import {useSinglePage} from "../api/content-page.js";


function SingleContentPage() {
    const params = useParams();
    const page = useSinglePage(params.slug);

    if (page.isLoading || page.isFetching || !page.data.data) {
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
                        <span>{page.data.data.title}</span>
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
                                <h4>{page.data.data.title}</h4>
                                 <div dangerouslySetInnerHTML={{__html: page.data.data.content}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { SingleContentPage };

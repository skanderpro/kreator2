import React from "react";
import { NavLink } from "react-router-dom";
function NewsPage() {
  const newsSwiperList = [
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
    {
      imgUrl: "swiper-news-1.jpg",
      date: "25.12.2025",
      text: "Підсумки 2025 року від компанії «Креатор-Буд»",
      description:
        "У 2025 «Креатор-Буд» активно будував та вводив в експлуатацію нові будинки, створив «Стандарти майбутнього» та тариф електропостачання Free Watt. ",
    },
  ];
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__inner">
            <NavLink to="/">
              <img src={new URL(`/src/assets/svg/mini-logo.svg`, import.meta.url).href} />
            </NavLink>
            <span>Новини</span>
          </div>
        </div>
      </div>

      <div className="news-page">
        <div className="container">
          <div className="news-page__inner">
            <h2>новини</h2>
            <div className="news-page-banner">
              <div className="news-swiper-item">
                <img
                  className="news-swiper-item-img"
                  src={new URL(`/src/assets/img/swiper-news/swiper-news-1.jpg`, import.meta.url).href}
                  alt=""
                />

                <div className="news-swiper-item-box"></div>
                <div className="news-swiper-date">25.12.2025</div>
              </div>
              <div className="news-page-banner-item">
                <div className="news-page-banner-item-text">
                  ЖК «Набережна Вежа» – це комплекс бізнес класу, головною
                  перевагою якого є місце розташування. Комплекс зводиться в
                  екологічно чистому районі, поруч Тернопільського ставу.
                </div>
                <p>
                  Унікальність ЖК «Набережна Вежа» у тому, що з його вікон
                  проглядається одна з найкрасивіших панорам Тернополя. 80
                  відсотків квартир матимуть розкішний вигляд на Тернопільську
                  набережну. Поруч комплексу розташований Парк Шевченка, тому
                  ранкові пробіжки біля озера чи вечірні прогулянки велосипедами
                  з сім’єю парковою оазою – це мрія, яка стане реальністю для
                  кожного мешканця комплексу.
                </p>
                <p>
                  Комплекс віддалений від шумних магістралей, тут спокій, свіже
                  повітря, можливість відпочинку у найкрасивішому місці
                  обласного центру, де щовечора своєю красою вражають розмаїті
                  фонтани і вражаючі колоритністю сквери.
                </p>
              </div>
            </div>
            <div className="news-page-items">
              {newsSwiperList.map((items, index) => {
                return (
                  <NavLink className="news-swiper-item" key={index} to={"/news-detail"}>
                    <img
                      className="news-swiper-item-img"
                      src={new URL(`/src/assets/img/swiper-news/${items.imgUrl}`, import.meta.url).href}
                      alt=""
                    />

                    <div className="news-swiper-item-box"></div>
                    <div className="news-swiper-date">{items.date}</div>
                    <div className="news-swiper-info">
                      <div className="news-swiper-info-text">{items.text}</div>
                      <div className="news-swiper-info-description">
                        {items.description}
                      </div>
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

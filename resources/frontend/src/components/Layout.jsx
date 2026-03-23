import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { AppContext } from "../context/AppContext";
import Popup from "./popup/Popup";
import Airplane from "../assets/svg/airplane.svg?react";
import { ContactForm } from "./ContactForm.jsx";

function Layout() {
    const { popupConsultations, setPopupConsultations, popupTy, setPopupTy } =
        useContext(AppContext);

    return (
        /**
         * Markup to render only the content of pages, and elements that are repeated on each page are loaded only once
         *
         * This markup is also used to attach a footer to the bottom
         */
        <div className="wrapper">
            <Header />

            <Menu />

            <main className="main">
                <Outlet />
            </main>
            <Footer />

            {popupConsultations && (
                <Popup
                    statePopup={popupConsultations}
                    closePopup={setPopupConsultations}
                >
                    <div className="questions__inner">
                        <div className="questions-header">
                            <h2>Замовити консультацію</h2>
                            <p>
                                Наші менеджери зв’яжуться з вами та нададуть всю
                                необхідну інформацію, яка вас цікавить.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </Popup>
            )}
            {popupTy && (
                <Popup statePopup={popupTy} closePopup={setPopupTy}>
                    <div className="modal-ty">
                        <div className="modal-ty-icon">
                            <Airplane />
                        </div>
                        <div className="modal-ty-info">
                            <h2>Дякуємо!</h2>
                            <p>
                                Найближчим часом наш спеціаліст звяжеться з
                                Вами!
                            </p>
                            <button
                                className="btn"
                                onClick={() => {
                                    setPopupTy(false);
                                }}
                            >
                                Повернутись на головну
                            </button>
                        </div>
                    </div>
                </Popup>
            )}
        </div>
    );
}

export { Layout };

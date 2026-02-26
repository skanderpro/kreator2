import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

function Layout() {
    const [isActiveMenuBtn, setActiveMenuBtn] = useState(false);

    useEffect(() => {
        if (isActiveMenuBtn) {
            document.body.classList.add("hiden");
        } else {
            document.body.classList.remove("hiden");
        }
    }, [isActiveMenuBtn]);

    return (
        /**
         * Markup to render only the content of pages, and elements that are repeated on each page are loaded only once
         *
         * This markup is also used to attach a footer to the bottom
         */
        <div className="wrapper">
            <Header toggleMenuBtn={setActiveMenuBtn} />

            <Menu
                toggleMenuBtn={setActiveMenuBtn}
                stateMenuBtn={isActiveMenuBtn}
            />

            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export { Layout };

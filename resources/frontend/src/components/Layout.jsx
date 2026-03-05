import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

function Layout() {
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
        </div>
    );
}

export { Layout };

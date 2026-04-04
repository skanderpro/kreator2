import { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotfoundPage } from "./pages/NotfoundPage";
import { CatalogPage } from "./pages/CatalogPage";
import { CatalogPageDetail } from "./pages/CatalogPageDetail";
import { NewsPage } from "./pages/NewsPage";
import { СonstructionPage } from "./pages/СonstructionPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { SingleContentPage } from "./pages/SingleContentPage.jsx";
import { Layout } from "./components/Layout";

import "./assets/scss/main.scss";

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog-detail/:id" element={<CatalogPageDetail />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="сonstruction" element={<СonstructionPage />} />
          <Route path="news-detail/:id" element={<NewsDetailPage />} />
           <Route path="contact" element={<ContactPage />} />
           <Route path="page/:slug" element={<SingleContentPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

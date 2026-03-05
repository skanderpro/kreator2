import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
    const [isActiveMenuBtn, setActiveMenuBtn] = useState(false);
  
    const [popupConsultations, setPopupConsultations] = useState(false);
    const [popupTy, setPopupTy] = useState(false);

    useEffect(() => {
        if (popupConsultations || popupTy || isActiveMenuBtn) {
            document.body.classList.add("hiden");
        } else {
            document.body.classList.remove("hiden");
        }
    }, [popupConsultations || popupTy || isActiveMenuBtn]);

    return (
        <AppContext.Provider
            value={{
                popupConsultations,
                setPopupConsultations,
                popupTy,
                setPopupTy,
                isActiveMenuBtn,
                setActiveMenuBtn
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

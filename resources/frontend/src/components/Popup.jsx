import React from "react";
import CloseG from "../assets/svg/close-g.svg?react";

export default function Popup({ children, closePopup, statePopup }) {
    return (
        <div className={`popup ${statePopup ? "active" : ""}`}>
            <div
                className="popup-bg"
                onClick={() => {
                    closePopup(false);
                }}
            />
            <div className={"popup-inner"}>
                <div className="popup-box">
                    <button
                        className="popup-box-close"
                        onClick={() => {
                            closePopup(false);
                        }}
                    >
                        <CloseG />
                    </button>

                    {children}
                </div>
            </div>
        </div>
    );
}

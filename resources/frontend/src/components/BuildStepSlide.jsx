import { useRef, useEffect } from "react";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import Сamera from "../assets/svg/camera.svg?react";


function BuildStepSlide({ item }) {
    const lgContainerRef = useRef(null);
    const lgInstanceRef = useRef(null);

   
    const images = item.images?.length ? item.images : [item.image];

    useEffect(() => {
        if (!lgContainerRef.current || !images.length) return;

        if (lgInstanceRef.current) {
            lgInstanceRef.current.destroy();
            lgInstanceRef.current = null;
        }

        lgInstanceRef.current = lightGallery(lgContainerRef.current, {
            plugins: [lgZoom],
            speed: 500,
            dynamic: true,
            dynamicEl: images.map((src) => ({ src, thumb: src })),
        });

        return () => {
            if (lgInstanceRef.current) {
                lgInstanceRef.current.destroy();
                lgInstanceRef.current = null;
            }
        };
    }, [item]);

    return (
        <a
            className="construction-camera-btn"
            href={item.image}
            onClick={(e) => {
                e.preventDefault();
                lgInstanceRef.current?.openGallery(0);
            }}
        >
            <div className="construction-swiper-item-img">
                <img src={item.image} alt={item.title || ""} />
                <div className="construction-swiper-item-box"></div>
               
                <div ref={lgContainerRef} style={{ display: "none" }} />

                <Сamera />
            </div>
        </a>
    );
}

export { BuildStepSlide };

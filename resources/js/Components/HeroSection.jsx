import React, { useState, useEffect } from "react";
import InfoHero from "./InfoHero";

const HeroSection = () => {
    const images = [
        "images/banner1.jpg",
        "images/banner2.jpg",
        "images/banner3.jpg",
        // Tambahkan URL gambar lainnya sesuai kebutuhan
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const nextSlide = () => {
        setTranslateX((prevTranslateX) =>
            prevTranslateX - 100 >= -100 * (images.length - 1)
                ? prevTranslateX - 100
                : 0
        );
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setTranslateX((prevTranslateX) =>
            prevTranslateX + 100 <= 0
                ? prevTranslateX + 100
                : -100 * (images.length - 1)
        );
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    /* useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentSlide]); */
    console.log(currentSlide);

    return (
        <div className="relative overflow-hidden transition-height duration-500 ease-in-out">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('images/overlaygradient.png')`,
                    backgroundSize: "100% 100%",
                    zIndex: 1,
                }}
            ></div>
            <InfoHero />
            <div className="flex transition-transform duration-500 ease-in-out object-fit">
                <img
                    src={images[currentSlide]}
                    className="h-full xxl:h-screen w-screen"
                />
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white px-3 py-1 rounded-full cursor-pointer z-10"
            >
                <i className="fas fa-angle-left text-4xl "></i>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white px-3 py-1 rounded-full cursor-pointer z-10"
            >
                <i className="fas fa-angle-right text-4xl "></i>
            </button>
        </div>
    );
};

export default HeroSection;

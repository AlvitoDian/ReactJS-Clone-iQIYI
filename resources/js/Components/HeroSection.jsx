import React, { useState, useEffect } from "react";
import InfoHero from "./InfoHero";
import { random } from "lodash";

const HeroSection = ({ randomPopularMovies }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [randomMovies, setRandomMovies] = useState(randomPopularMovies);

    const nextSlide = () => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === randomPopularMovies.length - 1 ? 0 : prevSlide + 1
            );
        }, 250);
    };

    const prevSlide = () => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? randomPopularMovies.length - 1 : prevSlide - 1
            );
        }, 250);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    useEffect(() => {
        // Set opacity to 1 after changing the slide for the fade-in effect
        setOpacity(1);
    }, [currentSlide]);

    return (
        <div className="relative overflow-hidden transition-height duration-500 ease-in-out sm:pt-[95px]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('images/overlaygradient.png')`,
                    backgroundSize: "100% 100%",
                    zIndex: 1,
                }}
            ></div>
            <InfoHero
                rate={randomMovies[currentSlide]?.vote_average}
                year={randomMovies[currentSlide]?.release_date}
                overview={randomMovies[currentSlide]?.overview}
                genreIds={randomMovies[currentSlide]?.genre_ids}
                title={randomMovies[currentSlide].title || ""}
                adult={randomMovies[currentSlide].adult || ""}
            />
            <div
                className="flex transition-opacity duration-500 ease-in-out object-fit xl:h-screen xxl:h-screen"
                style={{ opacity }}
            >
                <img
                    src={randomMovies[currentSlide]?.backdrop_url}
                    className="h-full  w-screen object-cover"
                />
            </div>
            <div className="z-50">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white px-3 py-1 rounded-full cursor-pointer z-30 sm:pt-[90px]"
                >
                    <i className="fas fa-angle-left text-4xl "></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white px-3 py-1 rounded-full cursor-pointer z-30 sm:pt-[90px]"
                >
                    <i className="fas fa-angle-right text-4xl "></i>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;

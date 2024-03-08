import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularMovieCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevArrowVisible, setPrevArrowVisible] = useState(false);
    const sliderRef = useRef(null);

    const handleBeforeChange = (current, next) => {
        if (next === 0) {
            setPrevArrowVisible(false);
        }
    };

    const handleAfterChange = (index) => {
        setCurrentSlide(index);
    };

    const handleNextArrowClick = () => {
        sliderRef.current.slickNext();

        if (currentSlide === 0) {
            setPrevArrowVisible(true);
        }
    };

    const handlePrevArrowClick = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToScroll: 8,
        slidesToShow: 8,
        centerPadding: "50px",
        draggable: false,
        arrows: false,
        afterChange: handleAfterChange,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    swipe: false,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    swipe: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    arrows: false,
                    swipe: false,
                },
            },
        ],
    };

    const data = [
        { id: 1, content: "Slide 1" },
        { id: 2, content: "Slide 2" },
        { id: 3, content: "Slide 3" },
        { id: 4, content: "Slide 4" },
        { id: 5, content: "Slide 5" },
        { id: 6, content: "Slide 6" },
    ];

    const movies = [
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Ingfokan",
            image: "images/film2.png",
            episodes: 30,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
        },
    ];

    return (
        <div className="bg-[#111319] h-screen xxl:px-12 xl:px-12 md:px-3 sm:px-3 ">
            <div className="absolute z-20 xxl:-mt-28 xl:-mt-28 transition-all duration-300 ">
                <div className="flex flex-col ">
                    {/* Header */}
                    <div>
                        <h1 className="text-white font-bold text-3xl py-2 md:text-sm sm:text-sm">
                            Rekomendasi Populer
                        </h1>
                    </div>
                    {/* Header */}

                    {/* Cards Loop */}
                    <div className="slider-container w-[95vw] sm:w-[98vw] md:w-[98vw] -ml-2 xxl:-ml-2 xl:-ml-2">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            className="mr-5"
                            beforeChange={handleBeforeChange}
                            afterChange={handleAfterChange}
                        >
                            {movies.map((movie) => (
                                <a
                                    key={movie.id}
                                    href="/"
                                    className="flex flex-col mr-3 w-[210px] md:w-[150px] sm:w-[121px] h-auto transition-all duration-300 mb-4"
                                >
                                    <div className="flex items-end">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="md:mr-4 rounded-md"
                                            style={{ width: "100%" }}
                                        />
                                        <span className="absolute text-gray-200 font-bold p-2 text-md md:text-base sm:text-xs">
                                            Full {movie.episodes} episode
                                        </span>
                                    </div>

                                    <span className="ml-2 mt-1 text-white font-bold text-lg md:text-base sm:text-xs">
                                        {movie.title}
                                    </span>
                                </a>
                            ))}
                        </Slider>
                    </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white py-1 -mr-2 rounded-full cursor-pointer z-30 sm:text-sm md:text-md sm:mr-[2px] md:mr-[2px]"
                        onClick={handleNextArrowClick}
                    >
                        <i className="fas fa-angle-right text-4xl "></i>
                    </button>
                    <button
                        onClick={handlePrevArrowClick}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white -ml-8 py-1 rounded-full cursor-pointer z-30 ${
                            prevArrowVisible ? "visible" : "invisible"
                        }`}
                    >
                        <i className="fas fa-angle-left text-4xl "></i>
                    </button>
                    {/* Cards Loop */}
                </div>
            </div>
        </div>
    );
};

export default PopularMovieCard;

import React, { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieContext } from "../Contexts/MovieContext";

const AllStarProfile = () => {
    const { popularActors } = useContext(MovieContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevArrowVisible, setPrevArrowVisible] = useState(false);
    const sliderRef = useRef(null);

    const [actors, setActors] = useState(popularActors);
    const [isProfileHover, setProfileHover] = useState(false);

    const handleMouseEnter = (actorId) => {
        setProfileHover(actorId);
    };

    const handleMouseLeave = () => {
        setProfileHover(false);
    };

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
        draggable: false,
        arrows: false,
        dots: false,
        afterChange: handleAfterChange,
        responsive: [
            {
                breakpoint: 1386,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true,
                    swipe: false,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    swipe: false,
                    dots: false,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    swipe: false,
                    dots: false,
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
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="container-xl bg-[#111319] h-auto">
            <div className="relative z-20 transition-all duration-300 xxl:px-12 xl:px-12 lg:px-7 md:px-3 sm:px-5">
                <div className="flex flex-col ">
                    {/* Header */}
                    <div className="z-[100]">
                        <h1 className="text-white font-bold text-3xl py-2 md:text-sm sm:text-sm ">
                            All Star
                        </h1>
                    </div>
                    {/* Header */}
                    {/* Cards Loop */}
                    <div className="slider-container w-full hover:z-[200]">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            beforeChange={handleBeforeChange}
                            afterChange={handleAfterChange}
                        >
                            {actors.map((actor) => (
                                <a
                                    key={actor.id}
                                    href={`/actor/${actor.id}`}
                                    className="flex flex-col mr-3 w-[210px] md:w-[140px] sm:w-[111px] h-auto transition-all duration-300 xxl:mb-2 xl:mb-2 relative py-10 z-10 hover:z-50"
                                >
                                    <div
                                        className="transform scale-100 hover:scale-110 transition-transform duration-300 text-white hover:text-[#00C936] flex py-2 flex-col justify-center items-center"
                                        onMouseEnter={() => {
                                            handleMouseEnter(actor.id);
                                        }}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="flex items-end z-10 h-40 w-40 sm:w-20 sm:h-20">
                                            <img
                                                src={actor.profile_url}
                                                alt={actor.name}
                                                className={`md:mr-4 mb-3 rounded-full object-cover sm:h-[80px] h-[160px] w-[160px] ${
                                                    isProfileHover === actor.id
                                                        ? "border-2 border-[#00C936] "
                                                        : ""
                                                } `}
                                            />
                                        </div>
                                        <span className="font-bold text-lg md:text-base sm:text-xs opacity-[0.8]">
                                            {actor.name}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </Slider>
                    </div>
                    {/* Cards Loop */}
                    {/* Button Next & Prev */}
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer z-30 sm:text-xs md:text-md xxl:mr-[20px] xl:mr-[20px] lg:mr-[4px] md:mr-[5px] sm:mr-[5px]"
                        onClick={handleNextArrowClick}
                    >
                        {/* <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white -mr-2 rounded-full cursor-pointer z-30 sm:text-xs md:text-md sm:mr-[2px] md:mr-[2px]"
                        onClick={handleNextArrowClick}
                    > */}
                        <i className="fas fa-angle-right text-4xl md:text-[20px] sm:text-[20px]"></i>
                    </button>
                    <button
                        onClick={handlePrevArrowClick}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white rounded-full cursor-pointer z-30 xxl:ml-[20px] xl:ml-[20px] lg:ml-[4px] md:ml-[5px] sm:ml-[5px] ${
                            prevArrowVisible ? "visible" : "invisible"
                        }`}
                    >
                        <i className="fas fa-angle-left text-4xl md:text-[20px] sm:text-[20px]"></i>
                    </button>
                    {/* Button Next & Prev */}
                </div>
            </div>
        </div>
    );
};

export default AllStarProfile;

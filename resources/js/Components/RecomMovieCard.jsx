import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecomMovieCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevArrowVisible, setPrevArrowVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const sliderRef = useRef(null);

    const handleMouseEnter = (movieId) => {
        setModalVisible(movieId);
    };

    const handleMouseLeave = () => {
        setModalVisible(false);
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
            synopsis:
                "A breathtaking journey to the Last Paradise awaits as characters embark on an epic adventure.",
        },
        {
            id: 2,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Discover the enchanting world of the Last Paradise in this thrilling and captivating series.",
        },
        {
            id: 3,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Experience the magic and wonders of the Last Paradise as heroes face challenges and mysteries.",
        },
        {
            id: 4,
            title: "Bjie Bet",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Join the epic journey of Bjie Bet as they navigate through an exciting and action-packed adventure.",
        },
        {
            id: 5,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Embark on a thrilling odyssey to the Last Paradise filled with drama, romance, and excitement.",
        },
        {
            id: 6,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Witness the beauty and danger of the Last Paradise as characters strive for survival and discovery.",
        },
        {
            id: 7,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Uncover the secrets and challenges of the Last Paradise in this unforgettable and mesmerizing tale.",
        },
        {
            id: 8,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Explore the mysteries and wonders of the Last Paradise in this spellbinding and epic journey.",
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "A breathtaking journey to the Last Paradise awaits as characters embark on an epic adventure.",
        },
        {
            id: 2,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Discover the enchanting world of the Last Paradise in this thrilling and captivating series.",
        },
        {
            id: 3,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Experience the magic and wonders of the Last Paradise as heroes face challenges and mysteries.",
        },
        {
            id: 4,
            title: "Bjie Bet",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Join the epic journey of Bjie Bet as they navigate through an exciting and action-packed adventure.",
        },
        {
            id: 5,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Embark on a thrilling odyssey to the Last Paradise filled with drama, romance, and excitement.",
        },
        {
            id: 6,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Witness the beauty and danger of the Last Paradise as characters strive for survival and discovery.",
        },
        {
            id: 7,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Uncover the secrets and challenges of the Last Paradise in this unforgettable and mesmerizing tale.",
        },
        {
            id: 8,
            title: "Last Paradise",
            image: "images/film1.png",
            episodes: 20,
            synopsis:
                "Explore the mysteries and wonders of the Last Paradise in this spellbinding and epic journey.",
        },
    ];
    console.log(isModalVisible);
    return (
        <div className="container-xl bg-[#111319] h-auto xxl:px-12 xl:px-12 lg:px-7 md:px-3 sm:px-3 ">
            <div className="relative z-20 transition-all duration-300 ">
                <div className="flex flex-col ">
                    {/* Header */}
                    <div className="z-[100]">
                        <h1 className="text-white mt-9 font-bold text-3xl py-2 md:text-sm sm:text-sm -mb-10">
                            Rekomendasi Untuk Anda
                        </h1>
                    </div>
                    {/* Header */}
                    {/* Cards Loop */}
                    <div className="slider-container xxl:w-[94vw] xl:2-[95vw] sm:w-[96vw] md:w-[96vw] -ml-2 xxl:-ml-2 xl:-ml-2 z-20 hover:z-[200]">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            className="mr-5 "
                            beforeChange={handleBeforeChange}
                            afterChange={handleAfterChange}
                        >
                            {movies.map((movie) => (
                                <a
                                    key={movie.id}
                                    href="/"
                                    className="flex flex-col mr-3 w-[210px] md:w-[140px] sm:w-[111px] h-auto transition-all duration-300 xxl:mb-2 xl:mb-2 relative py-10 z-10 hover:z-50"
                                    onMouseEnter={() => {
                                        handleMouseEnter(movie.id);
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="flex items-end z-10">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="md:mr-4 rounded-md w-full"
                                        />
                                        <span className="absolute text-gray-200 font-bold p-2 text-md md:text-base sm:text-xs">
                                            Full {movie.episodes} episode
                                        </span>
                                    </div>
                                    <span className="ml-2 mt-1 text-white font-bold text-lg md:text-base sm:text-xs">
                                        {movie.title}
                                    </span>
                                    {isModalVisible === movie.id && (
                                        <div className="flex content-center items-center transition-transform duration-300 transform scale-100 hover:scale-125 absolute top-10 shadow">
                                            <div className="max-w-xs bg-[#1A1C22] rounded h-[300px]">
                                                <div className="relative flex items-end justify-end">
                                                    <img
                                                        className="rounded-t h-[130px] w-full object-cover"
                                                        src="images/film2.png"
                                                        alt=""
                                                    />
                                                    {/* Tombol Play dan Bookmark */}
                                                    <div className="absolute flex p-1">
                                                        <a
                                                            href="/"
                                                            className="bg-[#00C936] rounded-full w-[30px] h-[30px] flex justify-center items-center hover:bg-[#10e047] text-white mr-1"
                                                        >
                                                            <i className="fas fa-play text-xs"></i>
                                                        </a>
                                                        <a
                                                            href="/"
                                                            className="bg-[#D1D3D6] rounded-full w-[30px] h-[30px] flex justify-center items-center hover:bg-[#DEE0E3]"
                                                        >
                                                            <i className="fas fa-bookmark text-xs fa-inverse"></i>
                                                        </a>
                                                    </div>
                                                    {/* Tombol Play dan Bookmark */}
                                                </div>

                                                <div className="p-2">
                                                    <div>
                                                        <h5 className="text-md font-bold text-white">
                                                            {movie.title}
                                                        </h5>
                                                    </div>

                                                    <div className="content-center text-white text-xs font-md pb-1">
                                                        <h1 className="mb-4 inline text-[#00C936] pr-1 font-bold">
                                                            &#9733; 9,6
                                                        </h1>
                                                        <div className="border-l-[2px] border-[#808080] pr-[1px] -py-6 inline"></div>

                                                        <h1 className="mb-4 inline pl-1 pr-1">
                                                            15+
                                                        </h1>

                                                        <div className="border-l-[2px] border-[#808080] pr-[1px] -py-6 inline"></div>

                                                        <h1 className="mb-4 inline pl-1 pr-1">
                                                            2024
                                                        </h1>
                                                    </div>
                                                    <div className="content-center text-white">
                                                        <h1 className="text-[11px] font-medium mb-4 bg-white bg-opacity-10 inline p-[2px] rounded-[2px] mr-1">
                                                            Aksi
                                                        </h1>
                                                        <h1 className="text-[11px] font-medium mb-4 bg-white bg-opacity-10 inline p-[2px] rounded-[2px] mr-1">
                                                            Komedi
                                                        </h1>
                                                    </div>
                                                    <p className="mb-3 mt-3 font-small text-white text-[12px]">
                                                        {movie.synopsis}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </a>
                            ))}
                        </Slider>
                    </div>
                    {/* Cards Loop */}
                    {/* Button Next & Prev */}
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white -mr-2 rounded-full cursor-pointer z-30 sm:text-xs md:text-md sm:mr-[2px] md:mr-[2px]"
                        onClick={handleNextArrowClick}
                    >
                        <i className="fas fa-angle-right text-4xl sm:text-[20px]"></i>
                    </button>
                    <button
                        onClick={handlePrevArrowClick}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white -ml-8 rounded-full cursor-pointer z-30 ${
                            prevArrowVisible ? "visible" : "invisible"
                        }`}
                    >
                        <i className="fas fa-angle-left text-4xl sm:text-[20px]"></i>
                    </button>
                    {/* Button Next & Prev */}
                </div>
            </div>
        </div>
    );
};

export default RecomMovieCard;

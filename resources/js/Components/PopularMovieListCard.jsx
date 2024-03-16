import React, { useState, useRef, useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieContext } from "../Contexts/MovieContext";

const PopularMovieListCard = ({ category }) => {
    const { topMovies } = useContext(MovieContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevArrowVisible, setPrevArrowVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const sliderRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function truncateChars(str, maxChars) {
        if (str.length > maxChars) {
            return str.slice(0, maxChars) + "...";
        }
        return str;
    }

    const genreNames = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };

    const [nowMovies, setNowMovies] = useState(topMovies);

    function truncateWords(str, words) {
        return str.split(" ").slice(0, words).join(" ");
    }

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
                    swipe: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    swipe: true,
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
                    swipe: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="container-xl bg-[#111319] h-auto -mt-10">
            <div className="relative z-20 transition-all duration-300 xxl:px-12 xl:px-12 lg:px-7 md:px-3 sm:px-5">
                <div className="flex flex-col ">
                    {/* Header */}
                    <div className="z-[100]">
                        <h1 className="text-white font-bold text-3xl py-2 md:text-sm sm:text-sm -mb-10">
                            {category}
                        </h1>
                    </div>
                    {/* Header */}
                    {/* Cards Loop */}
                    {/*  <div className="slider-container xxl:w-[94vw] xl:w-[93vw] sm:w-[96vw] md:w-[96vw] -ml-2 xxl:-ml-2 xl:-ml-2 z-20 hover:z-[200]"> */}
                    <div className="slider-container w-full hover:z-[200]">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            beforeChange={handleBeforeChange}
                            afterChange={handleAfterChange}
                        >
                            {nowMovies.map((movie, index) => (
                                <a
                                    key={index}
                                    href={`/movie/${movie.id}`}
                                    className="flex flex-col mr-3 w-[210px] md:w-[140px] sm:w-[111px] h-auto transition-all duration-300 xxl:mb-2 xl:mb-2 relative py-10 z-10 hover:z-50"
                                    onMouseEnter={() => {
                                        if (!isMobile) {
                                            handleMouseEnter(movie.id);
                                        }
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="flex items-end">
                                        <div className="relative">
                                            <div
                                                className="absolute inset-0 rounded-md"
                                                style={{
                                                    backgroundImage: `url('/images/topmovieoverlay${index}.png')`,
                                                    backgroundSize: "100% 100%",
                                                    opacity: 0.7,
                                                    zIndex: 1,
                                                }}
                                            ></div>
                                            <img
                                                src={movie.poster_url}
                                                alt={movie.title}
                                                className="md:mr-4 rounded-md w-full object-cover xxl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[300px] sm:h-[170px]"
                                            />
                                        </div>
                                        <div className="absolute text-gray-200 font-bold p-2 text-[14px] md:text-base sm:text-xs z-[50] flex items-center justify-center">
                                            <span className="ml-[3px]">
                                                {truncateChars(movie.title, 11)}
                                            </span>
                                        </div>
                                        <div className="absolute text-gray-200 font-bold p-2 xxl:text-[36px] xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[20px] z-[50] flex items-center justify-center pb-7">
                                            <span
                                                className="ml-[3px]"
                                                style={{
                                                    fontFamily:
                                                        "Times New Roman",
                                                }}
                                            >
                                                TOP {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="mt-1 text-white font-bold text-lg md:text-base sm:text-xs">
                                        {movie.title}
                                    </span>
                                    {isModalVisible === movie.id && (
                                        <div className="flex content-center items-center transition-transform duration-300 transform scale-100 hover:scale-125 absolute top-10 shadow z-[600]">
                                            <div className="max-w-xs bg-[#1A1C22] rounded h-auto">
                                                <div className="relative flex items-end justify-end">
                                                    <img
                                                        className="rounded-t h-[130px] w-full object-cover"
                                                        src={movie.backdrop_url}
                                                        alt=""
                                                    />
                                                    {/* Tombol Play dan Bookmark */}
                                                    <div className="absolute flex p-1">
                                                        <div className="bg-[#00C936] rounded-full w-[30px] h-[30px] flex justify-center items-center hover:bg-[#10e047] text-white mr-1">
                                                            <i className="fas fa-play text-xs"></i>
                                                        </div>
                                                        <div className="bg-[#D1D3D6] rounded-full w-[30px] h-[30px] flex justify-center items-center hover:bg-[#DEE0E3]">
                                                            <i className="fas fa-bookmark text-xs fa-inverse"></i>
                                                        </div>
                                                    </div>
                                                    {/* Tombol Play dan Bookmark */}
                                                </div>

                                                <div className="px-2 pt-2">
                                                    <div>
                                                        <h5 className="text-md font-bold text-white">
                                                            {movie.title}
                                                        </h5>
                                                    </div>

                                                    <div className="content-center text-white text-xs font-md pb-1">
                                                        <h1 className="mb-4 inline text-[#00C936] pr-1 font-bold">
                                                            &#9733;
                                                            {movie.vote_average.toFixed(
                                                                1
                                                            )}
                                                        </h1>
                                                        <div className="border-l-[2px] border-[#808080] pr-[1px] -py-6 inline"></div>

                                                        <h1 className="mb-4 inline pl-1 pr-1">
                                                            {movie.adult
                                                                ? "18+"
                                                                : "All"}
                                                        </h1>

                                                        <div className="border-l-[2px] border-[#808080] pr-[1px] -py-6 inline"></div>

                                                        <h1 className="mb-4 inline pl-1 pr-1">
                                                            {new Date(
                                                                movie.release_date
                                                            ).getFullYear()}
                                                        </h1>
                                                    </div>
                                                    <div className="content-center text-white">
                                                        {movie.genre_ids.map(
                                                            (genre, index) => (
                                                                <h1
                                                                    className="text-[11px] font-medium mb-4 bg-white bg-opacity-10 inline p-[2px] rounded-[2px] mr-1"
                                                                    key={index}
                                                                >
                                                                    {genreNames[
                                                                        genre
                                                                    ] ||
                                                                        "Unknown Genre"}
                                                                </h1>
                                                            )
                                                        )}
                                                    </div>
                                                    <p className="mt-3 font-small text-white text-[12px] z-10">
                                                        {truncateWords(
                                                            movie.overview,
                                                            15
                                                        )}
                                                        ...
                                                    </p>
                                                </div>
                                                <h5
                                                    className="left-0 text-4xl font-bold text-white overflow-hidden opacity-20 z-0 -mb-2"
                                                    style={{
                                                        fontFamily:
                                                            "Times New Roman",
                                                    }}
                                                >
                                                    TOP {index + 1}
                                                </h5>
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

export default PopularMovieListCard;

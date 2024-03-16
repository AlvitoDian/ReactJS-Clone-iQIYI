import React, { useState, useEffect } from "react";
import { SingleMovieContext } from "../Contexts/SingleMovieContext";
import axios from "axios";

function MovieInfo({ imdbId, posterUrl, popularMovies, movieId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const [activeTab, setActiveTab] = useState("pemeran");

    const [showIcon, setShowIcon] = useState(false);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
    const [recomMovies, setRecomMovies] = useState(popularMovies);
    const [actors, setActors] = useState();
    const [startSlice, setStartSlice] = useState(0);
    const [lengthSlice, setLengthSlice] = useState(10);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetchActor();
    }, []);

    const fetchActor = async () => {
        try {
            const id = movieId;
            const response = await axios.get(
                `/actor-movie/${id}/${startSlice}/${lengthSlice}`
            );

            setActors(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleLoadMoreActor = async () => {
        setIsLoadingMore(true);
        try {
            const id = movieId;
            const response = await axios.get(
                `/actor-movie/${id}/${startSlice + 10}/${lengthSlice}`
            );

            if (response.data.length === 0) {
                setShowLoadMoreButton(false);
            } else {
                setActors((prevActors) => [...prevActors, ...response.data]);
                setStartSlice((prevStartSlice) => prevStartSlice + 10);
            }

            setIsLoadingMore(false);
        } catch (error) {
            console.error("Error fetching more actor data:", error);
            setIsLoadingMore(false);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="pt-8 flex gap-[35px]">
                <a
                    href="#"
                    className={`text-white text-[14px] ${
                        activeTab === "pemeran" &&
                        "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                    }`}
                    onClick={() => handleTabClick("pemeran")}
                >
                    Pemeran
                </a>
                <a
                    href="#"
                    className={`text-white text-[14px] ${
                        activeTab === "rekomendasi" &&
                        "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                    }`}
                    onClick={() => handleTabClick("rekomendasi")}
                >
                    Rekomendasi Untuk Anda
                </a>
            </div>
            {/* Pemeran */}
            {isLoading ? (
                <div
                    role="status"
                    className="flex p-5 flex justify-center items-center"
                >
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#1CC749]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div
                    className={`border-t border-[#2D2F34] grid xxl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[16px] pb-8 ${
                        activeTab === "pemeran" ? "" : "hidden"
                    }`}
                >
                    <>
                        {actors.map((actor, index) => (
                            <div
                                className="bg-[#1A1C22] mt-7 flex flex-col rounded-[4px]"
                                key={index}
                            >
                                <a
                                    href={`/actor/${actor.id}`}
                                    className="flex flex-col p-5 hover:text-[#00cc36] text-white"
                                >
                                    {/* Actor Info */}
                                    <div className="flex items-center pb-4">
                                        <div className="w-[70px] h-[60px] rounded-full overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center rounded-full"
                                                style={{
                                                    backgroundImage: `url(${
                                                        actor.profile_url ||
                                                        "https://www.w3schools.com/howto/img_avatar.png"
                                                    })`,
                                                }}
                                            ></div>
                                        </div>

                                        <div className="flex flex-col pt-[10px] pb-[10px] pl-[10px] w-full">
                                            <span className="text-[16px] font-medium">
                                                {actor.name}
                                            </span>
                                            <div className="flex">
                                                <div className="text-[#a9a9ac] text-[12px] font-medium">
                                                    {actor.known_for_department}
                                                </div>

                                                <div className="text-[#00cc36] text-[12px] font-medium ml-auto">
                                                    Lebih banyak
                                                    <i className="fas fa-angle-right ml-[2px]"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Actor Info */}

                                    {/* Actor Movie Info */}
                                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-[10px] border-t border-[#2D2F34] pt-4">
                                        {actor.recent_movies.map(
                                            (movie, index) => (
                                                <a
                                                    key={actor.id + movie.id}
                                                    href={`/movie/${movie.id}`}
                                                    className="relative text-white hover:text-[#1CC749] flex flex-col transition-all duration-300 xxl:mb-2 xl:mb-2 z-10 hover:z-50 transform scale-100 hover:scale-105"
                                                    onMouseEnter={() =>
                                                        setShowIcon(
                                                            actor.id + movie.id
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setShowIcon(false)
                                                    }
                                                >
                                                    <div className="flex items-center justify-center relative w-full h-auto">
                                                        <div className="relative">
                                                            <div
                                                                className={`absolute inset-0 ${
                                                                    showIcon ==
                                                                    actor.id +
                                                                        movie.id
                                                                        ? ""
                                                                        : "hidden"
                                                                }`}
                                                                style={{
                                                                    backgroundImage: `url('/images/overlay_single_mobile.png')`,
                                                                    backgroundSize:
                                                                        "100% 110%",
                                                                    opacity: 0.7,
                                                                    zIndex: 1,
                                                                }}
                                                            ></div>
                                                            <img
                                                                src={
                                                                    movie.poster_path
                                                                        ? posterUrl +
                                                                          movie.poster_path
                                                                        : "/images/filmnull.png"
                                                                }
                                                                className="md:mr-4 rounded-[1px] object-cover"
                                                            />
                                                        </div>

                                                        <div className="absolute top-0 right-0 text-black font-bold text-[12px] font-bold bg-[#F2BF83] px-[6px] rounded-[1px] ">
                                                            <span>VIP</span>
                                                        </div>
                                                        {showIcon ===
                                                            actor.id +
                                                                movie.id && (
                                                            <>
                                                                <div className="absolute text-white font-bold text-[12px] rounded-[1px]">
                                                                    <a
                                                                        href="/"
                                                                        className="bg-[#00C936] rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-[#10e047]"
                                                                    >
                                                                        <i className="fas fa-play text-sm"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="absolute text-white font-bold text-[12px] rounded-[1px] bottom-0 right-0 p-3 z-50">
                                                                    <a
                                                                        href="/"
                                                                        className="bg-[#D1D3D6] rounded-full w-[40px] h-[40px] flex justify-center items-center ml-5 hover:bg-[#DEE0E3]"
                                                                    >
                                                                        <i className="fas fa-bookmark text-sm fa-inverse"></i>
                                                                    </a>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>

                                                    <span className="ml-2 mt-1 font-bold text-lg md:text-base sm:text-xs">
                                                        {movie.title}
                                                    </span>
                                                </a>
                                            )
                                        )}
                                    </div>
                                    {/* Actor Movie Info */}
                                </a>
                            </div>
                        ))}
                        {/* More Info */}
                        {isLoadingMore ? (
                            <div
                                role="status"
                                className="flex p-5 flex justify-center items-center"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#1CC749]"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            showLoadMoreButton && (
                                <div className="bg-[#1A1C22] mt-7 flex flex-col rounded-[4px]">
                                    <a
                                        onClick={handleLoadMoreActor}
                                        className="flex flex-col p-5 hover:text-[#00cc36] text-white cursor-pointer"
                                    >
                                        <div>
                                            <img
                                                src="/images/filmmoreinfo.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                            )
                        )}

                        {/* More Info */}
                    </>
                </div>
            )}

            {/* Pemeran */}

            {/* Rekomendasi */}
            <div
                className={`border-t border-[#2D2F34] grid xxl:grid-cols-8 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-[14px] pb-8 ${
                    activeTab === "rekomendasi" ? "" : "hidden"
                }`}
            >
                {recomMovies.map((movie, index) => (
                    <a
                        key={index}
                        href="/"
                        className="relative text-white hover:text-[#1CC749] flex flex-col transition-all duration-300 xxl:mb-2 xl:mb-2 z-10 hover:z-50 mt-7 transform scale-100 hover:scale-105"
                        onMouseEnter={() => setShowIcon(movie.id)}
                        onMouseLeave={() => setShowIcon(false)}
                    >
                        <div className="flex items-center justify-center relative w-full h-auto">
                            <img
                                src={movie.poster_url}
                                alt={movie.title}
                                className="md:mr-4 rounded-[1px] object-cover"
                            />
                            <div className="absolute top-0 right-0 text-black font-bold text-[12px] font-bold bg-[#F2BF83] px-[6px] rounded-[1px] ">
                                <span>VIP</span>
                            </div>
                            {showIcon == movie.id && (
                                <>
                                    <div className="absolute text-white font-bold text-[12px] rounded-[1px]">
                                        <a
                                            href="/"
                                            className="bg-[#00C936] rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-[#10e047]"
                                        >
                                            <i className="fas fa-play text-sm"></i>
                                        </a>
                                    </div>
                                    <div className="absolute text-white font-bold text-[12px] rounded-[1px] bottom-0 right-0 p-3">
                                        <a
                                            href="/"
                                            className="bg-[#D1D3D6] rounded-full w-[40px] h-[40px] flex justify-center items-center ml-5 hover:bg-[#DEE0E3]"
                                        >
                                            <i className="fas fa-bookmark text-sm fa-inverse"></i>
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>

                        <span className="ml-2 mt-1 font-bold text-lg md:text-base sm:text-xs">
                            {movie.title}
                        </span>
                    </a>
                ))}
            </div>
            {/* Rekomendasi */}
        </div>
    );
}

export default MovieInfo;

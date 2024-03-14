import React, { useState } from "react";
import { SingleMovieContext } from "../Contexts/SingleMovieContext";

function MovieInfo({ actorCredits, posterUrl, popularMovies }) {
    const [activeTab, setActiveTab] = useState("pemeran");

    const [showIcon, setShowIcon] = useState(false);

    const [recomMovies, setRecomMovies] = useState(popularMovies);
    const [actors, setActors] = useState(actorCredits);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
            <div
                className={`border-t border-[#2D2F34] grid xxl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[16px] pb-8 ${
                    activeTab === "pemeran" ? "" : "hidden"
                }`}
            >
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
                                            backgroundImage: `url(${actor.profile_url})`,
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
                                {actor.recent_movies.map((movie, index) => (
                                    <a
                                        key={actor.id + movie.id}
                                        href={`/movie/${movie.id}`}
                                        className="relative text-white hover:text-[#1CC749] flex flex-col transition-all duration-300 xxl:mb-2 xl:mb-2 z-10 hover:z-50 transform scale-100 hover:scale-105"
                                        onMouseEnter={() =>
                                            setShowIcon(actor.id + movie.id)
                                        }
                                        onMouseLeave={() => setShowIcon(false)}
                                    >
                                        <div className="flex items-center justify-center relative w-full h-auto">
                                            <div className="relative">
                                                <div
                                                    className={`absolute inset-0 ${
                                                        showIcon ==
                                                        actor.id + movie.id
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
                                                actor.id + movie.id && (
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
                                ))}
                            </div>
                            {/* Actor Movie Info */}
                        </a>
                    </div>
                ))}
            </div>
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

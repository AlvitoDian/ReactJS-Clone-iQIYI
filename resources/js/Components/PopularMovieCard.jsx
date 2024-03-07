import React, { useState } from "react";

const PopularMovieCard = () => {
    // Data kartu film (ganti dengan data sebenarnya)
    const movies = [
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
        // Tambahkan data film lainnya sesuai kebutuhan
    ];

    return (
        <div className="bg-[#111319] h-screen xxl:px-12 xl:px-12 md:px-3 sm:px-3">
            <div className="flex flex-wrap z-20 absolute xxl:-mt-28 xl:-mt-28  transition-all duration-300">
                <div className="flex flex-col ">
                    {/* Header */}
                    <div>
                        <h1 className="text-white font-bold text-3xl py-2 md:text-sm sm:text-sm">
                            Rekomendasi Populer
                        </h1>
                    </div>
                    {/* Header */}
                    {/* Cards Loop */}
                    <div
                        className="flex flex-wrap"
                        style={{ visibility: "hidden !important" }}
                    >
                        {movies.map((movie) => (
                            <a
                                key={movie.id}
                                href="/"
                                className="flex flex-col mr-3 w-[210px] md:w-[150px] sm:w-[121px] h-auto transition-all duration-300 mb-4"
                            >
                                <div className="flex items-end">
                                    {" "}
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
                    </div>
                    {/* Cards Loop */}
                </div>
            </div>
        </div>
    );
};

export default PopularMovieCard;

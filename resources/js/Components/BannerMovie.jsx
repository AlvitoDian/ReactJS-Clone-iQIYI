import React, { useState, useContext } from "react";
import MovieInfo from "./MovieInfo";
import { SingleMovieContext } from "../Contexts/SingleMovieContext";

function BannerMovie() {
    const { movie, posterUrl, popularMovies } = useContext(SingleMovieContext);

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
    return (
        <div className="container-xl xxl:px-12 xl:px-12 lg:px-10 md:px-5 sm:px-5">
            <div className="grid grid-cols-2 sm:grid-cols-1">
                {/* Banner Movie */}
                <div className="order-last sm:order-first relative xxl:-mx-12 xl:-mx-12 lg:-mx-10 md:-mx-5 sm:-mx-5 sm:pt-[90px]">
                    <div
                        className="absolute inset-0 sm:hidden"
                        style={{
                            backgroundImage: `url('../images/overlay_single.png')`,
                            backgroundSize: "100% 110%",
                            zIndex: 1,
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 xxl:hidden xl:hidden lg:hidden"
                        style={{
                            backgroundImage: `url('../images/overlay_single_mobile.png')`,
                            backgroundSize: "100% 110%",
                            zIndex: 1,
                        }}
                    ></div>
                    <img
                        src={movie.backdrop_url}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Banner Movie */}
                {/* info Movie */}
                <div className="mt-32 sm:mt-4 flex flex-col gap-3 pr-5">
                    {/* Judul */}
                    <h1 className="text-[40px] text-white font-extrabold">
                        {movie.title}
                    </h1>
                    {/* Judul */}

                    {/* Ranking */}
                    <div className="content-center xxl:text-sm xl:text-sm lg:text-sm md:text-[10px] sm:text-[10px] text-white">
                        <span className=" font-bold mb-4 bg-[#00C936] inline p-[5px] rounded-s-[3px] ">
                            TOP 10
                        </span>
                        <span className=" font-bold mb-4 bg-[#6D6553] inline p-[5px] rounded-e-[3px]">
                            Peringkat Popularitas Anime
                        </span>
                    </div>
                    {/* Ranking */}

                    {/* Rate */}
                    <div className="content-center xxl:text-lg xl:text-lg md:text-xs sm:text-xs text-white">
                        <span className="font-bold mb-4 inline text-[#00C936] pr-2">
                            &#9733; {movie.vote_average.toFixed(1)}
                        </span>
                        <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                        <span className="font-normal mb-4 inline pl-3 pr-3">
                            {new Date(movie.release_date).getFullYear()}
                        </span>

                        <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                        <span className="font-normal mb-4 inline pl-3 pr-3">
                            13+
                        </span>

                        <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                        <span className="font-normal mb-4 inline pl-3 pr-3">
                            Full {movie.runtime} Episode
                        </span>
                    </div>
                    {/* Rate */}

                    {/* Genre */}
                    <div className="content-center sm:hidden md:hidden text-white">
                        {movie.genre_ids.map((genre, index) => (
                            <span
                                className="text-[12px] font-medium mb-4 bg-white bg-opacity-10 inline py-[3px] rounded mr-[10px] px-[4px]"
                                key={index}
                            >
                                {genreNames[genre] || "Unknown Genre"}
                            </span>
                        ))}
                    </div>
                    {/* Genre */}

                    {/* VIP Button */}
                    <div>
                        <a
                            href="/"
                            className="bg-[#F2BF83] px-[17px] py-[7px] text-black rounded-[4px] mr-3 hover:bg-[#f0cca3] font-bold text-[14px] flex items-center justify-center w-[400px] md:w-[100%] sm:w-[100%]"
                        >
                            <i className="fas fa-crown text-[14px] mr-2"></i>
                            VIP Standard hanya Rp19,000 untuk bulan pertama
                        </a>
                    </div>
                    {/* VIP Button */}

                    {/* Deskripsi */}
                    <h4 className="text-[13px] text-white font-normal">
                        <span className="opacity-50">Deskripsi: </span>
                        {movie.overview}
                    </h4>
                    {/* Deskripsi */}

                    {/* Button Play, etc */}
                    <div className="flex gap-[2px]">
                        <a
                            href="/"
                            className="bg-[#1CC749] px-[17px] py-[7px] text-white rounded-[4px] mr-3 hover:bg-[#35de62] font-bold text-[14px] flex items-center justify-center w-[100px] md:w-[100%] sm:w-[100%]"
                        >
                            <i className="fas fa-play text-[14px] mr-2"></i>
                            Putar
                        </a>
                        <a
                            href="/"
                            className="bg-[#2D2F34] px-[17px] py-[7px] text-white rounded-[4px] mr-3 hover:bg-[#3b3e47] font-bold text-[14px] flex items-center justify-center w-[100px] md:w-[100%] sm:w-[100%]"
                        >
                            <i className="fas fa-arrow-up-from-bracket text-[14px] mr-2"></i>
                            Bagikan
                        </a>
                        <a
                            href="/"
                            className="bg-[#2D2F34] px-[17px] py-[7px] text-white rounded-[4px] mr-3 hover:bg-[#3b3e47] font-bold text-[14px] flex items-center justify-center w-[100px] md:w-[100%] sm:w-[100%]"
                        >
                            <i className="fas fa-bookmark text-[14px] mr-2"></i>
                            Favorite
                        </a>
                    </div>
                    {/* Button Play, etc */}
                </div>
                {/* info Movie */}
            </div>
            <MovieInfo
                actorCredits={movie.cast}
                posterUrl={posterUrl}
                popularMovies={popularMovies}
            />
        </div>
    );
}

export default BannerMovie;

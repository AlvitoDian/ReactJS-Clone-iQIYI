import React, { useState } from "react";

const PopularMovieCard = () => {
    return (
        <div className="bg-[#111319] h-96 xxl:px-12 xl:px-12 md:px-3 sm:px-3">
            <div className="flex flex-wrap z-20 absolute xxl:-mt-28 xl:-mt-28  transition-all duration-300">
                <div className="flex flex-col">
                    {/* Header */}
                    <div>
                        <h1 className="text-white font-bold text-3xl py-2 md:text-sm sm:text-sm">
                            Rekomendasi Populer
                        </h1>
                    </div>
                    {/* Header */}
                    {/* Card */}
                    <div className="flex">
                        <div className="flex flex-col mr-3 w-[210px] md:w-[150px] sm:w-[121px] h-auto transition-all duration-300">
                            <img
                                src="images/film1.png"
                                alt=""
                                className="mb-4 md:mr-4 rounded-md"
                                style={{ width: "100%" }}
                            />
                            <span className="absolute bottom-0 mb-3 text-white font-bold p-2 text-sm md:text-base sm:text-xs">
                                Full 20 episode
                            </span>
                        </div>
                        <div className="flex flex-col mr-3 w-[210px] md:w-[150px] sm:w-[121px] h-auto transition-all duration-300">
                            <img
                                src="images/film1.png"
                                alt=""
                                className="mb-4 md:mr-4 rounded-md"
                                style={{ width: "100%" }}
                            />
                            <span className="absolute bottom-0 mb-3 text-white font-bold p-2 text-sm md:text-base sm:text-xs">
                                Full 20 episode
                            </span>
                        </div>
                        <div className="flex flex-col mr-3 w-[210px] md:w-[150px] sm:w-[121px] h-auto transition-all duration-300">
                            <img
                                src="images/film1.png"
                                alt=""
                                className="mb-4 md:mr-4 rounded-md"
                                style={{ width: "100%" }}
                            />
                            <span className="absolute bottom-0 mb-3 text-white font-bold p-2 text-sm md:text-base sm:text-xs">
                                Full 20 episode
                            </span>
                        </div>
                        <div className="flex flex-col mr-3 w-[210px] md:w-[150px] sm:w-[121px] h-auto transition-all duration-300">
                            <img
                                src="images/film1.png"
                                alt=""
                                className="mb-4 md:mr-4 rounded-md"
                                style={{ width: "100%" }}
                            />
                            <span className="absolute bottom-0 mb-3 text-white font-bold p-2 text-sm md:text-base sm:text-xs">
                                Full 20 episode
                            </span>
                        </div>
                    </div>
                    {/* Card */}
                </div>
            </div>
        </div>
    );
};

export default PopularMovieCard;

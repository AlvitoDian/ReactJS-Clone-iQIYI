import React, { useContext, useState } from "react";
import { FilteredMoviesContext } from "../Contexts/FilteredMoviesContext";

function FilterMovieCategoryBadge() {
    const { filteredMovies } = useContext(FilteredMoviesContext);
    const [filterMovies, setFilterMovies] = useState(filteredMovies);

    const tahun = [];

    for (let i = 2017; i <= 2024; i++) {
        tahun.push({
            id: i - 2016,
            name: i,
        });
    }

    const [activeTab, setActiveTab] = useState("semua");

    const [showIcon, setShowIcon] = useState(false);

    const [recomMovies, setRecomMovies] = useState();
    const [actors, setActors] = useState();

    const handleTahunClick = (tahun) => {
        const filtered = filteredMovies.filter((movie) => {
            const releaseYear = new Date(movie.release_date).getFullYear();
            return releaseYear === tahun;
        });
        setFilterMovies(filtered);
    };

    const handleGenreClick = (tab, genreId) => {
        setActiveTab(tab);

        if (genreId) {
            const filtered = filteredMovies.filter((movie) => {
                return movie.genre_ids.includes(genreId);
            });
            setFilterMovies(filtered);
        } else if (genreId == null) {
            setFilterMovies(filteredMovies);
        }
    };

    const handleSortClick = (criteria) => {
        let sortedMovies = [...filterMovies];
        if (criteria === "terbaru") {
            sortedMovies.sort((a, b) => {
                return new Date(b.release_date) - new Date(a.release_date);
            });
        } else if (criteria === "rating-tertinggi") {
            sortedMovies.sort((a, b) => {
                return b.vote_average - a.vote_average;
            });
        }
        setFilterMovies(sortedMovies);
    };

    return (
        <div className="container-xl pt-20 xxl:px-[190px] xl:px-16 lg:px-10 md:px-5 sm:px-5">
            <div className="flex flex-col">
                {/* Tab */}
                <div className="pt-8 flex xxl:gap-[35px] xl:gap-[35px] lg:gap-[20px] md:gap-[14px] sm:gap-[14px]">
                    <a
                        href="#"
                        className={`text-white text-[16px] ${
                            activeTab === "semua" &&
                            "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                        }`}
                        onClick={() => handleGenreClick("semua")}
                    >
                        Semua
                    </a>
                    <a
                        href="#"
                        className={`text-white text-[16px] ${
                            activeTab === "aksi" &&
                            "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                        }`}
                        onClick={() => handleGenreClick("aksi", 28)}
                    >
                        Aksi
                    </a>
                    <a
                        href="#"
                        className={`text-white text-[16px] ${
                            activeTab === "komedi" &&
                            "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                        }`}
                        onClick={() => handleGenreClick("komedi", 35)}
                    >
                        Komedi
                    </a>
                    <a
                        href="#"
                        className={`text-white text-[16px] ${
                            activeTab === "animasi" &&
                            "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                        }`}
                        onClick={() => handleGenreClick("animasi", 16)}
                    >
                        Animasi
                    </a>
                    <a
                        href="#"
                        className={`text-white text-[16px] ${
                            activeTab === "horror" &&
                            "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                        }`}
                        onClick={() => handleGenreClick("horror", 27)}
                    >
                        Horror
                    </a>
                    <a
                        href="#"
                        className={`text-white text-[16px] ${
                            activeTab === "drama" &&
                            "border-b-4 border-[#1CC749] pb-[10px] font-bold"
                        }`}
                        onClick={() => handleGenreClick("drama", 18)}
                    >
                        Drama
                    </a>
                </div>
                {/* Tab */}

                {/* Kategori */}
                <div className={`border-t border-[#2D2F34] pb-8`}>
                    <div className="container-xl">
                        <div className="flex flex-col ">
                            <div className="flex items-center">
                                {/* Tipe */}
                                <div className="flex flex-col items-end content-center gap-[9px] sm:hidden">
                                    <div className="flex pt-5 items-center justify-center">
                                        <span className="text-[16px] text-white opacity-40 pr-5">
                                            Tahun
                                        </span>
                                    </div>
                                    <div className="flex pt-5 items-center justify-center">
                                        <span className="text-[16px] text-white opacity-40 pr-5">
                                            Berdasarkan
                                        </span>
                                    </div>
                                </div>
                                {/* Tipe */}

                                {/* Field */}
                                <div className="flex flex-col">
                                    <div className="flex pt-5">
                                        <div className="h-auto ">
                                            <div className="flex sm:px-2 md:px-2 flex-wrap">
                                                {tahun.map((tahun) => (
                                                    <a
                                                        href="#"
                                                        key={tahun.id}
                                                        onClick={() =>
                                                            handleTahunClick(
                                                                tahun.name
                                                            )
                                                        }
                                                        className="bg-[#23252B] px-[17px] py-[7px] text-[#a9a9ac] rounded-[4px] mr-[9px] hover:text-white font-medium text-[14px] sm:mb-[9px]"
                                                    >
                                                        {tahun.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex pt-5">
                                        <div className="flex sm:px-2 md:px-2">
                                            <a
                                                href="#"
                                                onClick={() =>
                                                    handleSortClick("terbaru")
                                                }
                                                className="bg-[#23252B] px-[17px] py-[7px] text-[#a9a9ac] rounded-[4px] mr-[9px] hover:text-white font-medium text-[14px] sm:mb-[9px]"
                                            >
                                                Popularitas
                                            </a>
                                            <a
                                                href="#"
                                                onClick={() =>
                                                    handleSortClick(
                                                        "rating-tertinggi"
                                                    )
                                                }
                                                className="bg-[#23252B] px-[17px] py-[7px] text-[#a9a9ac] rounded-[4px] mr-[9px] hover:text-white font-medium text-[14px] sm:mb-[9px]"
                                            >
                                                Terbaru
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Field */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kategori */}

                {/* Movie */}
                <div
                    className={`grid xxl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-[14px] pb-8 `}
                >
                    {filterMovies.map((movie, index) => (
                        <a
                            key={index}
                            href={`/movie/${movie.id}`}
                            className="relative text-white hover:text-[#1CC749] flex flex-col transition-all duration-300 xxl:mb-2 xl:mb-2 z-10 hover:z-50 mt-7 transform scale-100 hover:scale-105"
                            onMouseEnter={() => setShowIcon(movie.id)}
                            onMouseLeave={() => setShowIcon(false)}
                        >
                            <div className="flex items-center justify-center relative w-full h-auto">
                                <img
                                    src={
                                        movie.poster_url
                                            ? movie.poster_url
                                            : "/images/filmnull.png"
                                    }
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
                {/* Movie */}
            </div>
        </div>
    );
}

export default FilterMovieCategoryBadge;

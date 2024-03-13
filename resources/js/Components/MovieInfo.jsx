import React, { useState } from "react";

function MovieInfo({ actorCredits }) {
    const [activeTab, setActiveTab] = useState("pemeran");

    const [showIcon, setShowIcon] = useState(false);

    const [actors, setActors] = useState([actorCredits]);

    console.log(actors);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const stars = [
        {
            id: 1,
            name: "Tom Hanks",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 2,
            name: "Meryl Streep",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 3,
            name: "Leonardo DiCaprio",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 4,
            name: "Scarlett Johansson",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 5,
            name: "Will Smith",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 6,
            name: "Jennifer Lawrence",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 7,
            name: "Denzel Washington",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 8,
            name: "Emma Stone",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 9,
            name: "Brad Pitt",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
            id: 10,
            name: "Charlize Theron",
            image: "https://www.w3schools.com/howto/img_avatar.png",
        },
    ];

    const movies = [
        {
            id: 1,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "A breathtaking journey to the Last Paradise awaits as characters embark on an epic adventure.",
        },
        {
            id: 2,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Discover the enchanting world of the Last Paradise in this thrilling and captivating series.",
        },
        {
            id: 3,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Experience the magic and wonders of the Last Paradise as heroes face challenges and mysteries.",
        },
        {
            id: 4,
            title: "Bjie Bet",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Join the epic journey of Bjie Bet as they navigate through an exciting and action-packed adventure.",
        },
        {
            id: 5,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Embark on a thrilling odyssey to the Last Paradise filled with drama, romance, and excitement.",
        },
        {
            id: 6,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Witness the beauty and danger of the Last Paradise as characters strive for survival and discovery.",
        },
        {
            id: 7,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Uncover the secrets and challenges of the Last Paradise in this unforgettable and mesmerizing tale.",
        },
        {
            id: 8,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Explore the mysteries and wonders of the Last Paradise in this spellbinding and epic journey.",
        },
        {
            id: 1,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "A breathtaking journey to the Last Paradise awaits as characters embark on an epic adventure.",
        },
        {
            id: 2,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Discover the enchanting world of the Last Paradise in this thrilling and captivating series.",
        },
        {
            id: 3,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Experience the magic and wonders of the Last Paradise as heroes face challenges and mysteries.",
        },
        {
            id: 4,
            title: "Bjie Bet",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Join the epic journey of Bjie Bet as they navigate through an exciting and action-packed adventure.",
        },
        {
            id: 5,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Embark on a thrilling odyssey to the Last Paradise filled with drama, romance, and excitement.",
        },
        {
            id: 6,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Witness the beauty and danger of the Last Paradise as characters strive for survival and discovery.",
        },
        {
            id: 7,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Uncover the secrets and challenges of the Last Paradise in this unforgettable and mesmerizing tale.",
        },
        {
            id: 8,
            title: "Last Paradise",
            image: "/images/film1.png",
            episodes: 20,
            synopsis:
                "Explore the mysteries and wonders of the Last Paradise in this spellbinding and epic journey.",
        },
    ];

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
                className={`border-t border-[#2D2F34] grid xxl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[16px] ${
                    activeTab === "pemeran" ? "" : "hidden"
                }`}
            >
                {actorCredits.map((actor, index) => (
                    <div
                        className="bg-[#1A1C22] mt-7 flex flex-col rounded-[4px]"
                        key={index}
                    >
                        <a
                            href="#"
                            className="flex p-5 items-center hover:text-[#00cc36] text-white"
                        >
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
                        </a>
                    </div>
                ))}
            </div>
            {/* Pemeran */}

            {/* Rekomendasi */}
            <div
                className={`border-t border-[#2D2F34] grid xxl:grid-cols-8 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[14px] ${
                    activeTab === "rekomendasi" ? "" : "hidden"
                }`}
            >
                {movies.map((movie) => (
                    <a
                        key={movie.id}
                        href="/"
                        className="relative text-white hover:text-[#1CC749] flex flex-col transition-all duration-300 xxl:mb-2 xl:mb-2 z-10 hover:z-50 mt-7 transform scale-100 hover:scale-105"
                        onMouseEnter={() => setShowIcon(movie.id)}
                        onMouseLeave={() => setShowIcon(false)}
                    >
                        <div className="flex items-center justify-center relative w-full h-auto">
                            <img
                                src={movie.image}
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

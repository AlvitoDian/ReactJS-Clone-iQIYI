import React, { useState } from "react";

function MovieInfo() {
    const [activeTab, setActiveTab] = useState("pemeran");

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
            <div className="border-t border-[#2D2F34] grid xxl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[16px]">
                {stars.map((star) => (
                    <div className="bg-[#1A1C22]  mt-10 flex flex-col rounded-[4px]">
                        <a
                            href="#"
                            className="flex p-5 items-center hover:text-[#00cc36] text-white"
                        >
                            <div className="w-[50px] h-[50px] ">
                                <img
                                    src={star.image}
                                    className="w-full object-cover rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col pt-[10px] pb-[10px] pl-[10px] w-full">
                                <span className="text-[16px] font-medium">
                                    {star.name}
                                </span>
                                <div className="flex">
                                    <div className="text-[#a9a9ac] text-[12px] font-medium">
                                        Pemeran
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
        </div>
    );
}

export default MovieInfo;

import React, { useState } from "react";

function MovieInfo() {
    const [activeTab, setActiveTab] = useState("pemeran");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
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
    );
}

export default MovieInfo;

import React, { useRef, useContext, useState } from "react";
import { ActorContext } from "../Contexts/ActorContext";

function ActorInfo() {
    const { actor, portoActor } = useContext(ActorContext);

    const [showIcon, setShowIcon] = useState(false);

    const [activeTab, setActiveTab] = useState("portofolio");

    const portofolioRef = useRef(null);
    const koneksiRef = useRef(null);

    const [offsetLeft, setOffSetLeft] = useState(0);
    const [offsetWidth, setOffSetWidth] = useState(64);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === "portofolio") {
            setOffSetLeft(portofolioRef.current.offsetLeft);
            setOffSetWidth(portofolioRef.current.offsetWidth);
        } else if (tab === "koneksi") {
            setOffSetLeft(koneksiRef.current.offsetLeft);
            setOffSetWidth(koneksiRef.current.offsetWidth);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="relative pt-8 flex gap-[35px] ">
                <div
                    className={`absolute max-w-[260px] h-[4px] bg-[#1CC749] border-[#1CC749] bottom-[-10px] transition-all duration-300`}
                    style={{
                        left: offsetLeft + "px",
                        width: offsetWidth + "px",
                    }}
                ></div>
                <a
                    href="#"
                    className={`text-white text-[16px] ${
                        activeTab === "portofolio"
                            ? "font-medium opacity-100"
                            : "opacity-40"
                    }`}
                    onClick={() => handleTabClick("portofolio")}
                    ref={portofolioRef}
                >
                    Portofolio
                </a>
                <a
                    href="#"
                    className={`text-white text-[16px] ${
                        activeTab === "koneksi"
                            ? "font-medium  opacity-100"
                            : "opacity-40"
                    }`}
                    onClick={() => handleTabClick("koneksi")}
                    ref={koneksiRef}
                >
                    Koneksi
                </a>
            </div>
            {/* Portofolio */}
            <div
                className={`border-t border-[#2D2F34] grid xxl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-[16px] mt-[10px] pb-8 ${
                    activeTab === "portofolio" ? "" : "hidden"
                }`}
            >
                {portoActor.map((movie, index) => (
                    <a
                        key={index}
                        href={`/movie/${movie.id}`}
                        className="relative text-white hover:text-[#1CC749] flex flex-col transition-all duration-300 xxl:mb-2 xl:mb-2 z-10 hover:z-50 mt-7 transform scale-100 hover:scale-105"
                        onMouseEnter={() => setShowIcon(movie.id)}
                        onMouseLeave={() => setShowIcon(false)}
                    >
                        <div className="flex items-center justify-center relative w-full ">
                            <img
                                src={
                                    movie.poster_url
                                        ? movie.poster_url
                                        : "/images/filmnull.png"
                                }
                                alt={movie.title}
                                className="md:mr-4 rounded-md object-cover h-96 sm:h-[200px]"
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
            {/* Portofolio */}

            {/* Koneksi */}
            <div
                className={`border-t border-[#2D2F34] grid xxl:grid-cols-8 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-[14px] mt-[10px] pb-8 ${
                    activeTab === "koneksi" ? "" : "hidden"
                }`}
            ></div>
            {/* Koneksi */}
        </div>
    );
}

export default ActorInfo;

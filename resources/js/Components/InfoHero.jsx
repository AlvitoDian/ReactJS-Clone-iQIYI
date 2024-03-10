import React from "react";
import TextTruncate from "react-text-truncate";

const InfoHero = () => {
    return (
        <div className="flex flex-col xxl:px-14 xl:px-14 lg:px-14 sm:px-3 md:px-3 xxl:pb-[10.65rem] xl:pb-[10.65rem] text-white z-20 absolute bottom-0">
            {/* Badge */}
            <div className="content-center xxl:text-sm xl:text-sm lg:text-sm md:text-[10px] sm:text-[10px]">
                <span className=" font-bold mb-4 bg-[#00C936] inline p-[5px] rounded-s-[3px] ">
                    TOP 10
                </span>
                <span className=" font-bold mb-4 bg-[#6D6553] inline p-[5px] rounded-e-[3px]">
                    Populer
                </span>
                <span className="ml-4 font-bold mb-4 bg-[#E87021] inline p-[5px] rounded">
                    Eksklusif
                </span>
            </div>
            {/* Badge */}
            {/* Rating */}
            <div className="content-center pt-4 xxl:text-lg xl:text-lg md:text-xs sm:text-xs">
                <span className="font-bold mb-4 inline text-[#00C936] pr-2">
                    &#9733; 9,6
                </span>
                <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                <span className="font-bold mb-4 inline pl-3 pr-3">2020</span>

                <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                <span className="font-bold mb-4 inline pl-3 pr-3">13+</span>

                <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                <span className="font-bold mb-4 inline pl-3 pr-3">
                    Full 20 Episode
                </span>
            </div>
            {/* Rating */}
            {/* Genre */}
            <div className="content-center pt-4 sm:hidden md:hidden">
                <span className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Aksi
                </span>
                <span className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Komedi
                </span>
                <span className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Sci-fi
                </span>
                <span className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Sejarah
                </span>
                <span className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Drama
                </span>
                <span className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Romance
                </span>
            </div>
            {/* Genre */}
            {/* Synopsis */}
            <div className="content-center pt-4 w-[400px] sm:hidden md:hidden">
                <span className="text-sm font-bold mb-4 inline rounded mr-1">
                    <TextTruncate
                        line={3}
                        element="span"
                        truncateText="..."
                        text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab!"'
                    />
                </span>
            </div>
            {/* Synopsis */}
            {/* Button Play and History */}
            <div className="flex sm:hidden md:hidden">
                <a
                    href="/"
                    className="bg-[#00C936] rounded-full w-[60px] h-[60px] flex justify-center items-center hover:bg-[#10e047]"
                >
                    <i className="fas fa-play text-2xl"></i>
                </a>
                <a
                    href="/"
                    className="bg-[#D1D3D6] rounded-full w-[60px] h-[60px] flex justify-center items-center ml-5 hover:bg-[#DEE0E3]"
                >
                    <i className="fas fa-bookmark text-2xl fa-inverse"></i>
                </a>
            </div>
            {/* Button Play and History */}
        </div>
    );
};

export default InfoHero;

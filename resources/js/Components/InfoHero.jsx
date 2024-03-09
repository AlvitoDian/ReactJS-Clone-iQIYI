import React from "react";
import TextTruncate from "react-text-truncate";

const InfoHero = () => {
    return (
        <div className="flex flex-col px-14 pb-[10.65rem] text-white z-20 absolute bottom-0">
            {/* Badge */}
            <div className="content-center">
                <h1 className="text-sm font-bold mb-4 bg-[#00C936] inline p-[5px] rounded-s-[3px] ">
                    TOP 10
                </h1>
                <h1 className="text-sm font-bold mb-4 bg-[#6D6553] inline p-[5px] rounded-e-[3px]">
                    Populer
                </h1>
                <h1 className="ml-4 text-sm font-bold mb-4 bg-[#E87021] inline p-[5px] rounded">
                    Eksklusif
                </h1>
            </div>
            {/* Badge */}
            {/* Rating */}
            <div className="content-center pt-4">
                <h1 className="text-lg font-bold mb-4 inline text-[#00C936] pr-2">
                    &#9733; 9,6
                </h1>
                <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                <h1 className="text-lg font-bold mb-4 inline pl-3 pr-3">
                    2020
                </h1>

                <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                <h1 className="text-lg font-bold mb-4 inline pl-3 pr-3">13+</h1>

                <div className="border-l-[2px] border-[#808080] pr-[3px] -py-6 inline"></div>

                <h1 className="text-lg font-bold mb-4 inline pl-3 pr-3">
                    Full 20 Episode
                </h1>
            </div>
            {/* Rating */}
            {/* Genre */}
            <div className="content-center pt-4">
                <h1 className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Aksi
                </h1>
                <h1 className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Komedi
                </h1>
                <h1 className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Sci-fi
                </h1>
                <h1 className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Sejarah
                </h1>
                <h1 className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Drama
                </h1>
                <h1 className="text-xs font-bold mb-4 bg-black bg-opacity-30 inline p-[5px] rounded mr-1">
                    Romance
                </h1>
            </div>
            {/* Genre */}
            {/* Synopsis */}
            <div className="content-center pt-4 w-[400px]">
                <h1 className="text-sm font-bold mb-4 inline rounded mr-1">
                    <TextTruncate
                        line={3}
                        element="h1"
                        truncateText="..."
                        text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sit ullam maxime saepe labore? Nobis temporibus quae nihil illo ab!"'
                    />
                </h1>
            </div>
            {/* Synopsis */}
            {/* Button Play and History */}
            <div className="flex">
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

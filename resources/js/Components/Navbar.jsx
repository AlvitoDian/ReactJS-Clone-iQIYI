import React, { useState } from "react";

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <nav className="bg-navbar xxl:py-2 xl:py-2 w-full">
            {/* Left Item */}
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    {/* burger button */}
                    <a
                        href="/"
                        className="text-gray-navbar text-white xxl:hidden xl:hidden lg:hidden pl-2 flex items-center justify-center"
                    >
                        <i className="fas fa-bars text-lg"></i>
                    </a>
                    {/* burger button end */}
                    <a
                        href="/"
                        className="xl:pl-16 xxl:pl-16 pl-10 lg:pr-[20px] pr-[37px] sm:px-[10px] md:px-[10px]"
                    >
                        <img
                            src="/images/iqiyi_logo.png"
                            alt=""
                            className="py-logo w-[80px] md:w-[50px] sm:w-[50px]"
                        />
                    </a>
                    <a
                        href="/"
                        className="text-white font-bold pr-[37px] hover:text-green-hover xxl:inline-block xl:hidden lg:hidden md:hidden sm:hidden"
                    >
                        Rekomendasi
                    </a>
                    <a
                        href="/"
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        Drama
                    </a>
                    <a
                        href="/"
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        K-Drama
                    </a>
                    <a
                        href="/"
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        Film
                    </a>
                    <a
                        href="/"
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        Anime
                    </a>
                    <div
                        className="relative inline-block flex justify-center md:hidden sm:hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a
                            href="/"
                            className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover"
                        >
                            Jelajahi
                            <i
                                className={`fas fa-caret-${
                                    isDropdownVisible ? "up" : "down"
                                } text-lg pl-2`}
                            ></i>
                        </a>

                        {isDropdownVisible && (
                            <div className="absolute z-10 flex justify-center mt-[27px]">
                                <div className="absolute z-12 bg-navbarhoverbg w-4 h-4 rotate-45 mt-1 border-l border-t border-zinc-800"></div>
                                <div className="bg-navbarhoverbg mt-3 border border-zinc-800 rounded-[2px] w-[200px] flex flex-col justify-center items-center">
                                    <a
                                        href="/"
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm z-20"
                                    >
                                        Rekomendasi
                                    </a>
                                    <a
                                        href="/"
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Variety Show
                                    </a>
                                    <a
                                        href="/"
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Drama
                                    </a>
                                    <a
                                        href="/"
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        K-Drama
                                    </a>
                                    <a
                                        href="/"
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Film
                                    </a>
                                    <a
                                        href="/"
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Anime
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Right Item */}
                <div className="flex items-center">
                    <div className="flex items-center xl:pr-[50px] xxl:pr-[50px] lg:pr-[25px]">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Attack on Titan..."
                                className="bg-zinc-600 p-[6px] pl-3 rounded focus:outline-none opacity-50 text-white w-[300px] lg:w-[200px] md:p-[2px] sm:p-[2px] md:w-[190px] sm:w-[190px]"
                            />
                            <a
                                href=""
                                className="text-white hover:text-green-hover"
                            >
                                <span className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center">
                                    <div className="h-[20px] border-l border-[#808080] pr-[3px]"></div>
                                    <i className="fas fa-search text-lg pl-2"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <a
                        href="/"
                        className="pr-[50px] text-gray-navbar flex items-center justify-center flex-col hover:text-green-hover text-white lg:hidden sm:hidden md:hidden"
                    >
                        <i className="fas fa-clock-rotate-left text-lg "></i>
                        <span className="text-xs">Histori</span>
                    </a>
                    <a
                        href="/"
                        className="pr-[50px] text-gray-navbar flex items-center justify-center flex-col hover:text-green-hover text-white lg:hidden sm:hidden md:hidden"
                    >
                        <i className="fas fa-globe text-lg"></i>
                        <span className="text-xs">Bahasa</span>
                    </a>
                    <a
                        href="/"
                        className="pr-[50px] text-gray-navbar flex items-center justify-center flex-col hover:text-green-hover text-white lg:hidden sm:hidden md:hidden"
                    >
                        <i className="far fa-user text-lg"></i>
                        <span className="text-xs">Saya</span>
                    </a>

                    <button class="bg-transparent hover:border-[#1cc749] hover:text-[#1cc749] text-white border border-white font-bold py-1 px-4 rounded mr-3 lg:hidden md:hidden sm:hidden">
                        <i className="fas fa-download text-lg "></i>
                        <span> APP</span>
                    </button>

                    {/* button app mobile */}
                    <button class="bg-[#1CC749] hover:bg-[#2cd458] text-white font-sm text-sm px-2 rounded mx-3 flex items-center lg:hidden xl:hidden xxl:hidden">
                        <i className="fas fa-download text-md py-[7px]"></i>
                        <span> APP</span>
                    </button>
                    {/* button app mobile end */}

                    {/* lg view */}
                    <a
                        href="/"
                        className="lg:pr-[20px] pr-[30px] text-gray-navbar flex items-center justify-center flex-col hover:text-green-hover text-white hidden lg:inline-block"
                    >
                        <i className="fas fa-clock-rotate-left text-lg "></i>
                    </a>
                    <a
                        href="/"
                        className="lg:pr-[20px] pr-[30px] text-gray-navbar flex items-center justify-center flex-col hover:text-green-hover text-white hidden lg:inline-block"
                    >
                        <i className="fas fa-globe text-lg"></i>
                    </a>
                    <a
                        href="/"
                        className="lg:pr-[20px] pr-[30px] text-gray-navbar flex items-center justify-center flex-col hover:text-green-hover text-white hidden lg:inline-block"
                    >
                        <i className="far fa-user text-lg"></i>
                    </a>

                    <button class="lg:pr-[20px] pr-[30px] bg-transparent hover:border-[#1cc749] hover:text-[#1cc749] text-white font-bold rounded hidden lg:inline-block">
                        <i className="fas fa-download text-lg "></i>
                    </button>
                    {/* lg view end */}

                    <button class="bg-buttonvip hover:bg-buttonviphover text-dark font-bold py-1 px-4 mr-[50px] rounded sm:hidden md:hidden">
                        <i className="fas fa-crown text-dark text-lg "></i>
                        <span> VIP</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

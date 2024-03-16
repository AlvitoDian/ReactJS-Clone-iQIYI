import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        const searchUrl = `/filter-movies?search=${encodeURIComponent(
            searchTerm
        )}`;
        window.location.href = searchUrl;
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const shouldNavbarBeTransparent = scrollPosition < 100;
            setIsNavbarTransparent(shouldNavbarBeTransparent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`z-[999] fixed w-full transition-all duration-1000 ${
                isNavbarTransparent ? "bg-transparent" : "bg-navbar"
            } xxl:py-2 xl:py-2 z-50`}
        >
            <div className="flex justify-between items-center ">
                {/* Left Item */}
                <div className="flex items-center">
                    {/* burger button */}
                    <div
                        className="text-gray-navbar text-white xxl:hidden xl:hidden lg:hidden pl-2 flex items-center justify-center"
                        onClick={toggleSidebar}
                    >
                        <i className="fas fa-bars text-lg cuirsor-pointer"></i>
                    </div>
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
                        href={`/filter-movies?category=28`}
                        className="text-white font-bold pr-[37px] hover:text-green-hover xxl:inline-block xl:hidden lg:hidden md:hidden sm:hidden"
                    >
                        Rekomendasi
                    </a>
                    <a
                        href={`/filter-movies?category=18`}
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xl:inline-block xxl:inline-block md:hidden sm:hidden"
                    >
                        Drama
                    </a>
                    <a
                        href={`/filter-movies?category=27`}
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        Horror
                    </a>
                    <a
                        href={`/filter-movies?category=28`}
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        Film
                    </a>
                    <a
                        href={`/filter-movies?category=16`}
                        className="text-gray-navbar pr-[37px] font-medium hover:text-green-hover hidden xxl:inline-block md:hidden sm:hidden"
                    >
                        Animasi
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
                                        href={`/filter-movies?category=28`}
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm z-20"
                                    >
                                        Rekomendasi
                                    </a>
                                    <a
                                        href={`/filter-movies?category=10770`}
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Variety Show
                                    </a>
                                    <a
                                        href={`/filter-movies?category=28`}
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Drama
                                    </a>
                                    <a
                                        href={`/filter-movies?category=27`}
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Horror
                                    </a>
                                    <a
                                        href={`/filter-movies?category=28`}
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Film
                                    </a>
                                    <a
                                        href={`/filter-movies?category=16`}
                                        className="hover:bg-zinc-800 w-full flex justify-center hover:text-green-hover block py-4 text-gray-navbar font-medium text-sm"
                                    >
                                        Animasi
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
                                id="searchInput"
                                type="text"
                                placeholder="Attack on Titan..."
                                className="bg-zinc-600 p-[6px] pl-3 rounded focus:outline-none opacity-50 text-white w-[300px] lg:w-[200px] md:p-[2px] sm:p-[2px] md:w-[190px] sm:w-[190px]"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyPress}
                            />
                            <button
                                className="text-white hover:text-green-hover"
                                onClick={handleSearch}
                            >
                                <span className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center">
                                    <div className="h-[20px] border-l border-[#808080] pr-[3px]"></div>
                                    <i className="fas fa-search text-lg pl-2"></i>
                                </span>
                            </button>
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

                    <button className="bg-transparent hover:border-[#1cc749] hover:text-[#1cc749] text-white border border-white font-bold py-1 px-4 rounded mr-3 lg:hidden md:hidden sm:hidden">
                        <i className="fas fa-download text-lg "></i>
                        <span> APP</span>
                    </button>

                    {/* button app mobile */}
                    <button className="bg-[#1CC749] hover:bg-[#2cd458] text-white font-sm text-sm px-2 rounded mx-3 flex items-center lg:hidden xl:hidden xxl:hidden">
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

                    <button className="lg:pr-[20px] pr-[30px] bg-transparent hover:border-[#1cc749] hover:text-[#1cc749] text-white font-bold rounded hidden lg:inline-block">
                        <i className="fas fa-download text-lg "></i>
                    </button>
                    {/* lg view end */}

                    <button className="bg-buttonvip hover:bg-buttonviphover text-dark font-bold py-1 px-4 mr-[50px] rounded sm:hidden md:hidden">
                        <i className="fas fa-crown text-dark text-lg "></i>
                        <span> VIP</span>
                    </button>
                </div>
            </div>
            {/* Mobile view */}
            <div className="flex justify-between items-center text-sm xxl:hidden xl:hidden lg:hidden overflow-y-auto">
                {/* Left Item */}
                <div className="flex items-center py-[8px] px-[8px] pb-3">
                    <a
                        href={`/filter-movies?category=28`}
                        className="text-white font-bold pr-[28px] hover:text-green-hover "
                    >
                        Rekomendasi
                    </a>
                    <a
                        href={`/filter-movies?category=28`}
                        className="text-gray-navbar pr-[28px] font-medium hover:text-green-hover "
                    >
                        Drama
                    </a>
                    <a
                        href={`/filter-movies?category=27`}
                        className="text-gray-navbar pr-[28px] font-medium hover:text-green-hover "
                    >
                        Horror
                    </a>
                    <a
                        href={`/filter-movies?category=28`}
                        className="text-gray-navbar pr-[28px] font-medium hover:text-green-hover "
                    >
                        Film
                    </a>
                    <a
                        href={`/filter-movies?category=16`}
                        className="text-gray-navbar pr-[28px] font-medium hover:text-green-hover "
                    >
                        Animasi
                    </a>
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Sidebar */}

            {/* Mobile view */}
        </nav>
    );
};

export default Navbar;

import React, { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    return (
        <>
            {isOpen && (
                <div
                    className="fixed top-0 bottom-0 left-0 right-0 z-10"
                    onClick={toggleSidebar}
                ></div>
            )}
            <div
                className={`fixed top-0 bottom-0 duration-500 ${
                    isOpen ? "left-0" : "-left-[300px]"
                }  overflow-y-auto bg-[#23252B] shadow w-[273px] h-screen z-20 flex flex-col bg-cover bg-center`}
            >
                <div
                    className="h-[86px] flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: "url('images/bgprofile.png')",
                    }}
                >
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        className="w-[40px] rounded-full mr-4 -ml-14"
                        alt=""
                    />
                    <span className="text-white text-sm font-medium">
                        Login/Signup
                    </span>
                </div>
                <a
                    href="/"
                    className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden "
                >
                    Pegaturan pribadi
                </a>
                <a
                    href="/"
                    className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden "
                >
                    Bahasa indonesia
                </a>
                <div className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden ">
                    <div className="border-b border-gray-700"></div>
                </div>
                <div className="relative pl-6 pt-6 text-gray-navbar text-white lg:hidden">
                    Favorit
                </div>
                <a
                    href="/"
                    className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden "
                >
                    Histori
                </a>
                <a
                    href="/"
                    className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden "
                >
                    Reservasi saya
                </a>
                <a
                    href="/"
                    className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden "
                >
                    Penerjemahan subtitle
                </a>
                <div className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden ">
                    <div className="border-b border-gray-700"></div>
                </div>
                <a
                    className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden flex justify-between"
                    onClick={toggleDropdown}
                >
                    <span>Tentang kami</span>
                    <i
                        className={`fas fa-caret-${
                            isDropdownVisible ? "up" : "down"
                        } text-lg pr-8 `}
                    ></i>
                </a>
                {/* Dropdown  Menu */}

                <div className={isDropdownVisible ? "block" : "hidden"}>
                    <a
                        href="/"
                        className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden flex justify-between"
                    >
                        <span>Tentang kami</span>
                    </a>
                    <a
                        href="/"
                        className="pl-6 pt-6 text-gray-navbar hover:text-green-hover text-white lg:hidden flex justify-between"
                    >
                        <span>Sponsor</span>
                    </a>
                </div>
                {/* Dropdown  Menu */}
            </div>
        </>
    );
};

export default Sidebar;

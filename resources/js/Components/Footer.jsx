import React, { useState } from "react";

const Footer = () => {
    const [hoveredInfo, setHoveredInfo] = useState(null);

    const handleMouseEnter = (device) => {
        setHoveredInfo(device);
    };

    const handleMouseLeave = () => {
        setHoveredInfo(null);
    };

    return (
        <footer className="bg-[#0A0C0F] py-8 border-t border-[#2D2F34]">
            <div className="container-xl">
                <div className="flex flex-col justify-center items-center">
                    {/* Header */}
                    <div className="text-[20px] font-bold text-white">
                        Pengalaman terbaik hanya di APP iQIYI
                    </div>
                    {/* Header */}

                    {/* Info iQiyi */}
                    <div className="pt-2">
                        <span>
                            <i className="fas fa-magnifying-glass text-xs"></i>
                        </span>
                        <span className="text-[12px] text-[#A9A9AC]">
                            <span className="text-[#1CC749]">iQIYI</span> Cari
                            di toko aplikasi ponsel
                        </span>
                    </div>
                    {/* Info iQiyi */}

                    {/* Device */}
                    <div className="pt-5 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
                        <div
                            className="relative flex md:hidden sm:hidden"
                            onMouseEnter={() => handleMouseEnter("desktop")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-desktop text-[14px] mr-2"></i>
                                PC
                            </a>
                            {/* Hover Info */}
                            {hoveredInfo === "desktop" && (
                                <div className="absolute z-[999] flex justify-center mt-[37px] -ml-[70px] sm:hidden md:hidden">
                                    <div className="absolute z-12 bg-[#37383d] w-4 h-4 rotate-45 mt-1 border-l border-t border-[#ffffff40]"></div>
                                    <div className="bg-[#37383d] mt-3 border border-[#ffffff40] rounded-[2px] w-[300px] flex flex-col justify-center items-center">
                                        <a className="p-3 flex flex-col items-center">
                                            <span className="text-white font-bold text-[14px] mb-2">
                                                Pakai klien Windows untuk
                                                nikmati pengalaman audio-visual
                                                yang lebih baik
                                            </span>
                                            <a
                                                href="/"
                                                className="bg-[#19b843] py-[7px] text-[#DDDDDD] rounded-[4px] hover:bg-[#19a93f] font-normal text-[14px] flex items-center justify-center w-full"
                                            >
                                                <i className="fab fa-windows text-[14px] mr-2 font-medium"></i>
                                                Coba Sekarang
                                            </a>
                                        </a>
                                    </div>
                                </div>
                            )}
                            {/* Hover Info */}
                        </div>
                        <div
                            className="relative flex md:col-span-2 sm:col-span-2"
                            onMouseEnter={() => handleMouseEnter("phone")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px] md:w-[100%] sm:w-[100%]"
                            >
                                <i className="fas fa-mobile-screen text-[14px] mr-2"></i>
                                Ponsel
                            </a>
                            {/* Hover Info */}
                            {hoveredInfo === "phone" && (
                                <div className="absolute z-[999] flex justify-center mt-[37px] -ml-[70px] sm:hidden md:hidden">
                                    <div className="absolute z-12 bg-[#37383d] w-4 h-4 rotate-45 mt-1 border-l border-t border-[#ffffff40]"></div>
                                    <div className="bg-[#37383d] mt-3 border border-[#ffffff40] rounded-[2px] w-[300px] flex flex-col justify-center items-center">
                                        <a className="p-3 flex items-center">
                                            <div className="flex flex-col">
                                                <span className="text-[#f2bf83] font-bold text-[14px] mb-2">
                                                    Scan kode dan download
                                                    aplikasi untuk dapatkan VIP
                                                    gratis
                                                </span>
                                                <span className="text-gray-500 font-normal text-[12px] mb-2">
                                                    *Hanya terbatas pada
                                                    pengguna baru di ponsel
                                                </span>
                                            </div>
                                            <div>
                                                <img
                                                    src="images/qr.png"
                                                    className="w-[150px]"
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )}
                            {/* Hover Info */}
                        </div>
                        <div
                            className="relative flex"
                            onMouseEnter={() => handleMouseEnter("tv")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-tv text-[14px] mr-2"></i>
                                TV
                            </a>
                            {/* Hover Info */}
                            {hoveredInfo === "tv" && (
                                <div className="absolute z-[999] flex justify-center mt-[37px] -ml-[70px] sm:hidden md:hidden">
                                    <div className="absolute z-12 bg-[#37383d] w-4 h-4 rotate-45 mt-1 border-l border-t border-[#ffffff40]"></div>
                                    <div className="bg-[#37383d] mt-3 border border-[#ffffff40] rounded-[2px] w-[300px] flex flex-col justify-center items-center">
                                        <div className="grid grid-cols-2 gap-2 py-2">
                                            <a
                                                href="/"
                                                className="bg-[#000000] py-[7px] text-[#DDDDDD] rounded-[4px] font-normal text-[14px] flex items-center justify-center px-2"
                                            >
                                                <img
                                                    src="images/rokutv.png"
                                                    className="w-[40px]"
                                                    alt=""
                                                />
                                            </a>
                                            <a
                                                href="/"
                                                className="bg-[#000000] py-[7px] text-[#DDDDDD] rounded-[4px] font-normal text-[14px] flex items-center justify-center px-2"
                                            >
                                                <img
                                                    src="images/firetv.png"
                                                    className="w-[40px]"
                                                    alt=""
                                                />
                                            </a>
                                            <a
                                                href="/"
                                                className="bg-[#000000] py-[7px] text-[#DDDDDD] rounded-[4px] font-normal text-[14px] flex items-center justify-center px-2"
                                            >
                                                <img
                                                    src="images/googleplay.png"
                                                    className="w-[90px]"
                                                    alt=""
                                                />
                                            </a>
                                            <a
                                                href="/"
                                                className="bg-[#000000] py-[7px] text-[#DDDDDD] rounded-[4px] font-normal text-[14px] flex items-center justify-center px-2"
                                            >
                                                <img
                                                    src="images/appstore.png"
                                                    className="w-[90px]"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Hover Info */}
                        </div>
                        <div
                            className="relative flex"
                            onMouseEnter={() => handleMouseEnter("halaman")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-laptop text-[14px] mr-2"></i>
                                Halaman Web
                            </a>
                            {/* Hover Info */}
                            {hoveredInfo === "halaman" && (
                                <div className="absolute z-[999] flex justify-center mt-[37px] -ml-[50px] sm:hidden md:hidden">
                                    <div className="absolute z-12 bg-[#37383d] w-4 h-4 rotate-45 mt-1 border-l border-t border-[#ffffff40]"></div>
                                    <div className="bg-[#37383d] mt-3 border border-[#ffffff40] rounded-[2px] w-[250px] flex flex-col justify-center items-center">
                                        <div className="p-3 flex items-center">
                                            <a
                                                href="/"
                                                className="text-white font-bold text-[14px]"
                                            >
                                                Kembali ke halaman utama
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Hover Info */}
                        </div>
                    </div>

                    {/* Device */}

                    {/* Support Info */}
                    <div className="container-xl border-t border-[#2D2F34] w-[1000px] lg:w-[700px] md:w-[500px] sm:w-[300px] mt-9 flex flex-wrap">
                        <div className="grid grid-cols-5 gap-4 md:hidden sm:hidden">
                            <div className="flex flex-col">
                                <span className="mt-[16px] text-[#DDDDDD] text-[14px]">
                                    Tentang Kami
                                </span>
                                <a
                                    href="/"
                                    className="mt-[16px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Tentang Kami
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Pengenalan layanan produk
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Cara tonton
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Hubungan investor
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <span className="mt-[16px] text-[#DDDDDD] text-[14px]">
                                    Kerjasama
                                </span>
                                <a
                                    href="/"
                                    className="mt-[16px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Pemasangan iklan
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Hubungan bisnis
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Kerjasama Pra-install
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <span className="mt-[16px] text-[#DDDDDD] text-[14px]">
                                    Dukungan dan bantuan
                                </span>
                                <a
                                    href="/"
                                    className="mt-[16px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Feedback
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Pusat Keamanan
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    FAQ
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <span className="mt-[16px] text-[#DDDDDD] text-[14px]">
                                    Pernjanjian Layanan
                                </span>
                                <a
                                    href="/"
                                    className="mt-[16px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Kebijakan Privasi
                                </a>
                                <a
                                    href="/"
                                    className="mt-[12px] text-[#999999] text-[13px] hover:text-[#1CC749]"
                                >
                                    Ketentuan Penggunaan
                                </a>
                            </div>
                            <div>Language</div>
                        </div>

                        {/* Discalimer */}
                        <div className="mt-5">
                            <span className="text-[#999999] text-[13px]">
                                Situs web ini dibuat semata-mata untuk tujuan
                                pembelajaran dan demonstrasi keterampilan
                                pengembangan web. Saya tidak bermaksud untuk
                                melanggar hak cipta atau merugikan pihak
                                manapun. Isi konten, logo, dan kontain lainnya
                                yang muncul di situs ini adalah milik dari
                                pemilik aslinya, yaitu iQiyi. Saya tidak
                                bermaksud untuk mengklaim kepemilikan atau hak
                                cipta atas konten tersebut. Sekali lagi, Situs
                                web ini dibuat semata-mata untuk tujuan
                                pembelajaran dan demonstrasi keterampilan
                                pengembangan web.
                            </span>
                        </div>
                        {/* Discalimer */}
                    </div>
                    {/* Support Info */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

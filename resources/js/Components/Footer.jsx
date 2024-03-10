import React from "react";

const Footer = () => {
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
                    <div className="pt-5 flex">
                        <div className="relative flex px-12 sm:px-2 md:px-2">
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-desktop text-[14px] mr-2"></i>
                                PC
                            </a>
                        </div>
                        <div className="relative flex px-12 sm:px-2 md:px-2">
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-mobile-screen text-[14px] mr-2"></i>
                                Ponsel
                            </a>
                        </div>
                        <div className="relative flex px-12 sm:px-2 md:px-2">
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-tv text-[14px] mr-2"></i>
                                TV
                            </a>
                        </div>
                        <div className="relative flex px-12 sm:px-2 md:px-2">
                            <a
                                href="/"
                                className="bg-[#23252B] px-[17px] py-[7px] text-[#DDDDDD] rounded-[4px] mr-3 hover:bg-[#3b3e47] font-normal text-[14px] flex items-center justify-center w-[150px]"
                            >
                                <i className="fas fa-laptop text-[14px] mr-2"></i>
                                Halaman Web
                            </a>
                        </div>
                    </div>
                    {/* Device */}

                    {/* Support Info */}
                    <div className="container-xl border-t border-[#2D2F34] w-[1000px] mt-9">
                        <div class="grid grid-cols-5 gap-4">
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

import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "../Components/Footer";
import BannerMovie from "../Components/BannerMovie";

const Home = () => {
    return (
        <>
            <Navbar />
            <BannerMovie />
            <Footer />
        </>
    );
};

export default Home;

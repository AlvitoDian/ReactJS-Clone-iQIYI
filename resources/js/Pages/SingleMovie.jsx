import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "../Components/Footer";
import BannerMovie from "../Components/BannerMovie";

const Home = ({ movie }) => {
    return (
        <>
            <Navbar />
            <BannerMovie movie={movie} />
            <Footer />
        </>
    );
};

export default Home;

import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import PopularMovieCard from "../Components/PopularMovieCard";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <PopularMovieCard />
        </>
    );
};

export default Home;

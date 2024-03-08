import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import PopularMovieCard from "../Components/PopularMovieCard";
import ExampleCarousel from "../Components/ExampleCarousel";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            {/* <ExampleCarousel /> */}
            <PopularMovieCard />
        </>
    );
};

export default Home;

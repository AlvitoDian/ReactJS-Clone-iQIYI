import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import PopularMovieCard from "@/Components/PopularMovieCard";
import BadgeCategory from "../Components/BadgeCategory";
import LimitedMovieCard from "../Components/LimitedMovieCard";
import RecomMovieCard from "../Components/RecomMovieCard";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <PopularMovieCard />
            <BadgeCategory />
            <LimitedMovieCard />
            <RecomMovieCard />
        </>
    );
};

export default Home;

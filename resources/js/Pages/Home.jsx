import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import PopularMovieCard from "@/Components/PopularMovieCard";
import BadgeCategory from "../Components/BadgeCategory";
import LimitedMovieCard from "../Components/LimitedMovieCard";
import RecomMovieCard from "../Components/RecomMovieCard";
import AllPopularMovieCard from "../Components/AllPopularMovieCard";
import ComingSoonMovieCard from "../Components/ComingSoonMovieCard";
import AllStarProfile from "../Components/AllStarProfile";
import Footer from "../Components/Footer";
import AnimeCardList from "../Components/AnimeCardList";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <PopularMovieCard />
            <BadgeCategory />
            <LimitedMovieCard />
            <RecomMovieCard />
            <AllPopularMovieCard />
            <ComingSoonMovieCard />
            <AllStarProfile />
            <AnimeCardList />
            <Footer />
        </>
    );
};

export default Home;

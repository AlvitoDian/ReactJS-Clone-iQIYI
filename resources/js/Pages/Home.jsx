import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import TopMovieListCard from "@/Components/TopMovieListCard";
import BadgeCategory from "../Components/BadgeCategory";
import MovieListCard from "../Components/MovieListCard";
import ComingSoonMovieCard from "../Components/ComingSoonMovieCard";
import AllStarProfile from "../Components/AllStarProfile";
import Footer from "../Components/Footer";

const Home = ({ movies }) => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TopMovieListCard
                category={"Rekomendasi Populer"}
                popularMovies={movies}
            />
            <BadgeCategory />
            <MovieListCard category={"Limited Time Free"} />
            <MovieListCard category={"Rekomendasi Untuk Anda"} />
            <MovieListCard category={"Popular"} />
            <ComingSoonMovieCard />
            <AllStarProfile />
            <MovieListCard category={"Anime Jepang"} />
            <Footer />
        </>
    );
};

export default Home;

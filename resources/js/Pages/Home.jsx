import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import TopMovieListCard from "@/Components/TopMovieListCard";
import BadgeCategory from "../Components/BadgeCategory";
import MovieListCard from "../Components/MovieListCard";
import ComingSoonMovieCard from "../Components/ComingSoonMovieCard";
import AllStarProfile from "../Components/AllStarProfile";
import Footer from "../Components/Footer";

const Home = ({ popularMovies, nowPlayingMovies }) => {
    const randomPopularMovies = popularMovies
        .sort(() => Math.random() - 0.5)
        .slice(0, 7);

    return (
        <>
            <Navbar />
            <HeroSection randomPopularMovies={randomPopularMovies} />
            <TopMovieListCard
                category={"Rekomendasi Populer"}
                popularMovies={popularMovies}
            />
            <BadgeCategory />
            <MovieListCard
                category={"Limited Time Free"}
                nowPlayingMovies={nowPlayingMovies}
            />
            <MovieListCard
                category={"Rekomendasi Untuk Anda"}
                nowPlayingMovies={nowPlayingMovies}
            />
            <MovieListCard
                category={"Popular"}
                nowPlayingMovies={nowPlayingMovies}
            />
            <ComingSoonMovieCard />
            <AllStarProfile />
            <MovieListCard
                category={"Anime Jepang"}
                nowPlayingMovies={nowPlayingMovies}
            />
            <Footer />
        </>
    );
};

export default Home;

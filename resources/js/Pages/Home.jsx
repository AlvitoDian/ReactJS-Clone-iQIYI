import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import TopMovieListCard from "@/Components/TopMovieListCard";
import BadgeCategory from "../Components/BadgeCategory";
import MovieListCard from "../Components/MovieListCard";
import ComingSoonMovieCard from "../Components/ComingSoonMovieCard";
import AllStarProfile from "../Components/AllStarProfile";
import Footer from "../Components/Footer";
import { MovieContext } from "../Contexts/MovieContext";

const Home = ({
    popularMovies,
    nowPlayingMovies,
    popularActors,
    upComingMovies,
}) => {
    const randomPopularMovies = popularMovies
        .sort(() => Math.random() - 0.5)
        .slice(0, 7);

    return (
        <>
            <Navbar />
            <HeroSection randomPopularMovies={randomPopularMovies} />
            <MovieContext.Provider
                value={{
                    popularMovies,
                    nowPlayingMovies,
                    popularActors,
                    upComingMovies,
                }}
            >
                <TopMovieListCard category={"Rekomendasi Populer"} />
                <BadgeCategory />
                <MovieListCard category={"Limited Time Free"} />
                <MovieListCard category={"Rekomendasi Untuk Anda"} />
                <MovieListCard category={"Popular"} />
                <ComingSoonMovieCard />
                <AllStarProfile />
                <MovieListCard category={"Anime Jepang"} />
            </MovieContext.Provider>
            <Footer />
        </>
    );
};

export default Home;

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
import PopularMovieListCard from "../Components/PopularMovieListCard";

const Home = ({
    popularMovies,
    nowPlayingMovies,
    popularActors,
    upComingMovies,
    topMovies,
    animationMovies,
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
                    topMovies,
                    animationMovies,
                }}
            >
                <TopMovieListCard category={"Rekomendasi Populer"} />
                <BadgeCategory />
                <MovieListCard
                    category={"Limited Time Free"}
                    movies={nowPlayingMovies}
                />
                <PopularMovieListCard category={"Popular"} />
                <ComingSoonMovieCard />
                <AllStarProfile />
                <MovieListCard category={"Animasi"} movies={animationMovies} />
            </MovieContext.Provider>
            <Footer />
        </>
    );
};

export default Home;

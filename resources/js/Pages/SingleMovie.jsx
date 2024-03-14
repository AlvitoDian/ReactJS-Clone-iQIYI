import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "../Components/Footer";
import BannerMovie from "../Components/BannerMovie";
import { SingleMovieContext } from "../Contexts/SingleMovieContext";

const Home = ({ movie, posterUrl, popularMovies }) => {
    return (
        <>
            <Navbar />
            <SingleMovieContext.Provider
                value={{ movie, posterUrl, popularMovies }}
            >
                <BannerMovie />
            </SingleMovieContext.Provider>
            <Footer />
        </>
    );
};

export default Home;

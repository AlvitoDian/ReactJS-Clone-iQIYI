import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "../Components/Footer";
import FilterMovieCategoryBadge from "../Components/FilterMovieCategoryBadge";
import { FilteredMoviesContext } from "../Contexts/FilteredMoviesContext";

const FilterMovies = ({ filteredMovies }) => {
    return (
        <>
            <FilteredMoviesContext.Provider value={{ filteredMovies }}>
                <Navbar />
                <FilterMovieCategoryBadge />
            </FilteredMoviesContext.Provider>
            <Footer />
        </>
    );
};

export default FilterMovies;

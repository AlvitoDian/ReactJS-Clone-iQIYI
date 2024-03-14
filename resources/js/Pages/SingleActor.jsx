import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "../Components/Footer";
import HeaderActor from "../Components/HeaderActor";
import { ActorContext } from "../Contexts/ActorContext";

const Home = ({ actor, portoActor }) => {
    return (
        <>
            <Navbar />
            <ActorContext.Provider value={{ actor, portoActor }}>
                <HeaderActor />
            </ActorContext.Provider>
            <Footer />
        </>
    );
};

export default Home;

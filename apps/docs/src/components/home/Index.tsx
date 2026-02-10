import React from "react";
import Home from "./Home";
import Footer from "../footer/Footer";
import LatestComponent from "../newcomponents/Newcomponent";
import { Techsection } from "../footer/Tech";
import Navbar from "../navbar/Navbar";

const ComponentLibraryDemo = () => {
    return (
        <main className="w-screen h-full bg_svg">
            <Navbar />
            <div className=" z-[10] max-w-screen-sm w-full md:max-w-screen-xl mx-auto md:p-[.8rem] px-[.5rem] md:px-[2rem]">
                <Home />
                <LatestComponent />
                <Techsection />
                <Footer />
            </div>
        </main>
    );
};

export default ComponentLibraryDemo;
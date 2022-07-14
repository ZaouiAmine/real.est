import React from "react";
import Help from "../components/Help";
import Hero from "../components/Hero";
import MostSearched from "../components/MostSearched";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <MostSearched />
        <Help />
        <Popular />
      </div>
      <div className="bg-blue-100">
        <Skills />
      </div>
      <div className="bg-blue-900">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

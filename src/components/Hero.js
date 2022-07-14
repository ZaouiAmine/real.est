import React from "react";
import arrow from "../assets/hero/arrow.png";

function Hero() {
  return (
    <div className="w-full  lg:h-full flex-col lg:flex-row flex lg:aspect-rect mb-32">
      <div
        id="hero-left"
        className="lg:w-1/2 w-full bg-center lg:bg-cover h-64 lg:h-full"
      ></div>
      <div
        id="hero-right"
        className="lg:w-1/2 w-full bg-cover flex flex-col justify-center items-start p-10 lg:p-20"
      >
        <h1 className="text-4xl xl:text-6xl text-white lg:pb-16 pb-4">
          Easy way to find
          <br />
          your <span className="font-bold">Property</span>
        </h1>
        <p className="text-lg text-white lg:pb-16 pb-4">
          it is long established fact a reader will distracted by the readble
          content of page ehen looking at its layout
        </p>
        <button className="bg-gray-700 flex justify-center items-center text-white text-lg font-bold px-16 py-5 rounded-md">
          Find Now <img src={arrow} alt="arrow" className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

import bg from "../assets/help/bg.jpg";
import fg from "../assets/help/fg.jpg";
import playBtn from "../assets/help/playBtn.png";
import LocationIndicator from "../assets/help/locationIndicator.png";

function Help() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center py-16">
      <div className="lg:w-1/2 w-full relative pb-16 lg:pr-16 pr-0 ">
        <img src={bg} alt="background" className="inline w-full" />
        <img
          src={fg}
          alt="frontground"
          className=" w-2/5 lg:w-auto absolute inline bottom-0 right-0"
        />
        <div className="bg-white rounded-md flex justify-center items-center w-fit p-6 shadow-xl absolute lg:top-28 lg:right-0 top-2 left-2">
          <img src={playBtn} alt="play button" className="mx-2" />
          <div>
            <h1 className="text-lg text-black ">View house tour</h1>
            <a href="#" className="text-md text-gray-500">
              view video
            </a>
          </div>
        </div>
        <div className="bg-white rounded-md flex justify-center items-center w-fit p-6 shadow-xl  absolute lg:bottom-2 bottom-8 left-8">
          <div>
            <h1 className="text-lg text-black font-bold ">
              Minimalist Luxury House
            </h1>
            <div className="flex items-center">
              <img
                src={LocationIndicator}
                alt="location indicator"
                className="mr-2"
              />
              <h1 className="text-lg text-gray-600 ">Washington , America</h1>
            </div>
            <a href="#" className="text-md text-blue-600">
              view video
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-6">
        <h1 className="text-slate-900 lg:text-6xl text-5xl font-semibold pt-6 pb-2">
          We will help you Find your dream home.
        </h1>
        <p className="pb-6">
          Adipisicing elit deserunt deserunt non laboris ipsum elit tempor nisi
          consectetur ea reprehenderit.
        </p>
        <h1 className="text-blue-600 text-6xl font-semibold pt-6 pb-2">10K+</h1>
        <p className="pb-6">Adipisicing elit deserunt .</p>
        <h1 className="text-blue-600 text-6xl font-semibold pt-6 pb-2">
          220K+
        </h1>
        <p className="pb-6">Adipisicing elit deserunt .</p>
        <h1 className="text-blue-600 text-6xl font-semibold pt-6 pb-2">12</h1>
        <p className="pb-6">Adipisicing elit deserunt deserunt .</p>

        <button className="bg-blue-600 text-white font-bold text-lg px-16 py-4 rounded-md my-6">
          see more
        </button>
      </div>
    </div>
  );
}

export default Help;

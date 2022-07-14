import React from "react";

import location1 from "../assets/popular/location1.jpg";
import location2 from "../assets/popular/location2.jpg";
import location3 from "../assets/popular/location3.jpg";

function popular() {
  return (
    <div className="py-48">
      <h2 className="text-2xl text-blue-600 font-semibold  m-4">Best Choice</h2>
      <h1 className="text-5xl text-slate-900 font-semibold  mb-8 ml-4">
        Popular Residences
      </h1>
      <div className="flex justify-between overflow-x-scroll lg:overflow-x-hidden">
        <div className="m-4" style={{ width: "270px", minWidth: "270px" }}>
          <img src={location1} alt="" className="w-full mb-4" />
          <h2 className="text-2xl text-blue-600 font-bold mb-1">$ 24,243</h2>
          <h2 className="text-2xl text-slate-900 font-bold mb-4">
            aliva priva jardan
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Dolore nisi labore occaecat excepteur exercitation culpa eu eiusmod
            fugiat proident.
          </p>
        </div>
        <div className="m-4" style={{ width: "270px", minWidth: "270px" }}>
          <img src={location2} alt="" className="w-full mb-4" />
          <h2 className="text-2xl text-blue-600 font-bold mb-1">$ 55,634</h2>
          <h2 className="text-2xl text-slate-900 font-bold mb-4">
            Assati garden city
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Dolore nisi labore occaecat excepteur exercitation culpa eu eiusmod
            fugiat proident.
          </p>
        </div>
        <div className="m-4" style={{ width: "270px", minWidth: "270px" }}>
          <img src={location3} alt="" className="w-full mb-4" />
          <h2 className="text-2xl text-blue-600 font-bold mb-1">$ 98,576</h2>
          <h2 className="text-2xl text-slate-900 font-bold mb-4">
            citraland puri
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Dolore nisi labore occaecat excepteur exercitation culpa eu eiusmod
            fugiat proident.
          </p>
        </div>
      </div>
    </div>
  );
}

export default popular;

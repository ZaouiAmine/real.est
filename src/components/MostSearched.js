import React from "react";
import MostSearchedPlace from "./MostSearchedPlace";

import location1 from "../assets/most-searched/location1.jpg";
import location2 from "../assets/most-searched/location2.jpg";
import location3 from "../assets/most-searched/location3.jpg";

function MostSearched() {
  return (
    <div className="w-full my-32">
      <h1 className="text-slate-900 font-bold lg:text-6xl text-4xl text-center mb-4">
        Most Searched Locations
      </h1>
      <p className="text-slate-900 lg:text-2xl text-lg mb-6 text-center">
        very stratigic location with modern look
      </p>
      <div className="w-full flex justify-between overflow-x-scroll xl:overflow-hidden">
        <MostSearchedPlace
          name="Greenland Group Suzhou Cente"
          img={location1}
        />
        <MostSearchedPlace
          name="Xi’Glory International Financial Centre"
          img={location2}
        />
        <MostSearchedPlace
          name="Haeundae LCT The sharp Landmark Tower"
          img={location3}
        />
      </div>
    </div>
  );
}

export default MostSearched;

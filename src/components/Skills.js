import React from "react";

import skill1 from "../assets/skills/first.png";
import skill2 from "../assets/skills/second.png";
import skill3 from "../assets/skills/third.png";

function Skills() {
  return (
    <div className="container mx-auto flex justify-between overflow-x-scroll lg:overflow-x-hidden py-32">
      <div
        className="flex flex-col justify-center items-start w-1/3 py-4 px-8"
        style={{ width: "270px", minWidth: "270px" }}
      >
        <img src={skill1} alt="" className="mb-4" />
        <h1 className="text-slate-900 text-2xl font-semibold">
          Professional Company
        </h1>
        <h2 className="text-slate-900 text-lg ">
          Elit esse culpa mollit minim ipsum non.Eiusmod tempor exercitation qui
          sint voluptate ullamco.
        </h2>
      </div>
      <div
        className="flex flex-col justify-center items-start w-1/3 py-4 px-8"
        style={{ width: "270px", minWidth: "270px" }}
      >
        <img src={skill2} alt="" className="mb-4" />
        <h1 className="text-slate-900 text-2xl font-semibold">
          24H consulting
        </h1>
        <h2 className="text-slate-900 text-lg ">
          Elit esse culpa mollit minim ipsum non.Nisi magna ullamco irure duis
          velit.
        </h2>
      </div>
      <div
        className="flex flex-col justify-center items-start w-1/3 py-4 px-8"
        style={{ width: "270px", minWidth: "270px" }}
      >
        <img src={skill3} alt="" className="mb-4" />
        <h1 className="text-slate-900 text-2xl font-semibold">
          Sering Multiple Countries
        </h1>
        <h2 className="text-slate-900 text-lg ">
          Elit esse culpa mollit minim ipsum non.Culpa occaecat officia culpa in
          consectetur et ad incididunt aute laborum est.
        </h2>
      </div>
    </div>
  );
}

export default Skills;

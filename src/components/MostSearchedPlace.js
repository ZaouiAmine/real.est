import React from "react";

function MostSearchedPlace(props) {
  return (
    <div
      className="flex flex-col  items-center justify-between p-4 "
      style={{ width: "370px", minWidth: "370px" }}
    >
      <h2 className="break-all lg:text-2xl text-xl font-bold  text-slate-900 text-center ">
        {props.name}
      </h2>
      <div className="w-1/6 my-4  bg-slate-700 h-px"></div>
      <img src={props.img} alt={props.name} className="" />
    </div>
  );
}

export default MostSearchedPlace;

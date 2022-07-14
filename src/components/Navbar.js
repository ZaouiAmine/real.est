import React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-blue-600 transition ease transform duration-300`;

  useEffect(() => {
    let body = document.body;

    isOpen
      ? (body.style.overflowY = "hidden")
      : (body.style.overflowY = "auto");
    isOpen
      ? (body.style.overflowX = "hidden")
      : (body.style.overflowX = "hidden");
  }, [isOpen]);

  return (
    <nav className="w-full flex justify-between items-center lg:my-8 my-2">
      <div
        className="top-0 bottom-0 left-0 right-0 bg-white z-10"
        style={isOpen ? { position: "absolute" } : { display: "none" }}
      >
        <ul className="h-full flex flex-col justify-center">
          <li className="text-blue-600 text-lg font-semibold py-4 px-6 ">
            <a href="#">Home</a>
          </li>
          <li className="text-gray-400 text-lg font-semibold py-4 px-6">
            <a href="#">About</a>
          </li>
          <li className="text-gray-400 text-lg font-semibold py-4 px-6">
            <a href="#">Services</a>
          </li>
          <li className="text-gray-400 text-lg font-semibold py-4 px-6">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <h1 className="text-blue-600 text-2xl font-inter font-semibold p-4">
        Real.est
      </h1>
      <ul className="lg:flex hidden">
        <li className="text-blue-600 text-lg font-semibold py-4 px-6 border-b-2 border-blue-600">
          <a href="#">Home</a>
        </li>
        <li className="text-gray-400 text-lg font-semibold py-4 px-6">
          <a href="#">About</a>
        </li>
        <li className="text-gray-400 text-lg font-semibold py-4 px-6">
          <a href="#">Services</a>
        </li>
        <li className="text-gray-400 text-lg font-semibold py-4 px-6">
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul className=" hidden lg:flex">
        <li className="text-black text-lg font-semibold py-4 px-16 rounded-lg">
          <a href="#">Log in</a>
        </li>
        <li className="text-lg font-semibold py-4 px-16 bg-blue-600 text-white rounded-lg">
          <a href="#">sign Up</a>
        </li>
      </ul>
      <button
        className="lg:hidden  flex flex-col z-30 h-12 w-12 border-transparent rounded justify-center items-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3  group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
      </button>
    </nav>
  );
}

export default Navbar;

import React from "react";

import google from "../assets/footer/Google.png";
import linkedin from "../assets/footer/LinkedIn.png";
import pinterest from "../assets/footer/Pinterest.png";
import twitter from "../assets/footer/Twitter.png";

function Footer() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row py-32">
      <div className="w-full lg:w-4/12 p-4">
        <h1 className="text-5xl text-white mb-4 font-semibold">Real.est</h1>
        <p className="text-white mb-4">
          Occaecat cupidatat magna anim duis sit enim esse commodo minim.
          Incididunt sunt nulla Lorem non. Mollit eiusmod nulla laboris
          voluptate eu sint adipisicing sunt dolore amet nisi irure deserunt
          tempor.
        </p>
        <div className="flex">
          <img src={google} alt="google" className="m-2" />
          <img src={linkedin} alt="linkedin" className="m-2" />
          <img src={pinterest} alt="pinterest" className="m-2" />
          <img src={twitter} alt="twitter" className="m-2" />
        </div>
      </div>
      <ul className="w-full lg:w-2/12 p-4">
        <li className="font-semibold text-white mb-4 text-xl">For Clients</li>
        <li className="text-white text-lg mb-2">How to Hire</li>
        <li className="text-white text-lg mb-2">Talent Marketplace</li>
        <li className="text-white text-lg mb-2">Project Catalog</li>
        <li className="text-white text-lg mb-2">Entreprise</li>
        <li className="text-white text-lg mb-2">Payment Service</li>
      </ul>
      <ul className="w-full lg:w-2/12 p-4">
        <li className="font-semibold text-white mb-4 text-xl">For Talents</li>
        <li className="text-white text-lg mb-2">How to work</li>
        <li className="text-white text-lg mb-2">Direct Contracts</li>
        <li className="text-white text-lg mb-2">Project Catalog</li>
        <li className="text-white text-lg mb-2">Find Freelance</li>
        <li className="text-white text-lg mb-2">Job in USA</li>
      </ul>
      <ul className="w-full lg:w-2/12 p-4">
        <li className="font-semibold text-white mb-4 text-xl">Resource</li>
        <li className="text-white text-lg mb-2">Help {"&"} Supports</li>
        <li className="text-white text-lg mb-2">Succress Stories</li>
        <li className="text-white text-lg mb-2">Upwork reviews</li>
        <li className="text-white text-lg mb-2">Resources</li>
      </ul>
      <ul className="w-full lg:w-2/12 p-4">
        <li className="font-semibold text-white mb-4 text-xl">Company</li>
        <li className="text-white text-lg mb-2">About Us</li>
        <li className="text-white text-lg mb-2">Leadership</li>
        <li className="text-white text-lg mb-2">imstore relations</li>
        <li className="text-white text-lg mb-2">Careers</li>
      </ul>
    </div>
  );
}

export default Footer;

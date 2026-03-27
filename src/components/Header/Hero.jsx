import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import img from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className=" mx-auto mt-15 text-center">
        <h1 className="text-5xl lg:text-7xl text-slate-700 font-bold">
          We Build <br />
          <span className="text-violet-500">Productive</span> Apps
        </h1>
        <p className=" w-full p-2 lg:w-6/10 mx-auto text-lg my-10 text-gray-500">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-5 lg:gap-10 justify-center p-2 ">
          <button className="btn btn-lg bg-white btn-outline border border-gray-300 text-lg">
            <IoLogoGooglePlaystore />
            Google Play
          </button>
          <button className="btn btn-lg bg-white btn-outline border border-gray-300 text-lg">
            <FaAppStoreIos />
            App Store
          </button>
        </div>
        <div className="flex my-10 p-1 justify-center flex-col">
          <div className="hero-img flex justify-center">
            <img src={img} alt="Hero" />
          </div>
          <div className="herobottom  bg-gradient-to-r from-indigo-500 to-violet-700 text-gray-50 p-10 rounded-lg -bottom-10">
            <h1 className=" text-3xl lg:text-5xl pt-10 font-semibold">
              Trusted by Millions, Built for You
            </h1>
            <div className="flex flex-col lg:flex-row justify-center gap-20 mt-10 text-gray-300">
              <div className="flex flex-col gap-5">
                <p>Total Downloads</p>
                <h1 className="text-5xl lg:text-6xl text-white font-bold">
                  29.6M
                </h1>
                <p>21% more than last month</p>
              </div>
              <div className="flex flex-col gap-5">
                <p>Total Reviews</p>
                <h1 className="text-5xl lg:text-6xl text-white font-bold">
                  906K
                </h1>
                <p>46% more than last month</p>
              </div>
              <div className="flex flex-col gap-5">
                <p>Active Apps</p>
                <h1 className="text-5xl lg:text-6xl text-white font-bold">
                  132+
                </h1>
                <p>31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

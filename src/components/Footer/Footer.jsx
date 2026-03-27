import React from "react";
import img from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full bg-slate-800 text-gray-100 p-10">
      <div className=" flex justify-between ">
        <div className="w-10 flex gap-1 ">
          <img src={img} alt="Logo" />
          <h3 className="font-bold">HERO.IO</h3>
        </div>
        <div>
          <ul className="flex text-2xl gap-2 text-gray-300">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border border-gray-200/20 my-6"></hr>
      <div className="flex justify-center">
        <p>Copyright © 2026 Hero.io - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;

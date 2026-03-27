import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

import img from "../../assets/logo.png";

const Nav = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/app">App</Link>
              </li>
              <li>
                <Link to="/installation">Installation</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl flex items-center gap-2 font-bold">
            <img className="w-10" src={img} alt="Logo" />
            <span className="text-violet-500">HERO.IO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-10 text-md px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
            <li>
              <Link to="/installation">Installation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-linear-to-r from-blue-500 to-violet-500 text-gray-50 ">
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

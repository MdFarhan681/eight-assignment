import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { Link,useLocation } from "react-router";

function navber() {
const location= useLocation();
const active = location.pathname;

  const navLink = (
    <>
      <li className={active ==="/"?"text-blue-400 font-semibold":"text-gray-900"}>
        <Link to={"/"}>Home</Link>
      </li>

       <li className={active ==="/AllApps"?"text-blue-400 font-semibold":"text-gray-900"}>
        {" "}
        <Link to={"/AllApps"}>Apps</Link>
      </li>

      <li className={active ==="/Installed"?"text-blue-400 font-semibold":"text-gray-900"}>
        {" "}
        <Link to={"/Installed"}>Installation</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-15 px-7 ">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            {/* <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              {" "}
              <Link to={"/AllApps"}>Apps</Link>
            </li>
            <li>
              {" "}
              <Link to={"/Installed"}>Installation</Link>
            </li> */}
            {navLink}
          </ul>
        </div>

        <Link to={"/"}>
          <div className="navLeft pl-2 flex btn btn-ghost">
            <img className="w-10 h-10" src={logo} alt="" />

            <p className=" text-xl">HERO.IO</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {" "}
          {/* <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/AllApps"}>Apps</Link>
          </li>
          <li>
            {" "}
            <Link to={"/Installed"}>Installation</Link>
          </li> */}
        {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/dashboard"
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
        >
          {" "}
          <span className="b">
            <VscGithub size={15} />
          </span>
          Contribute
        </a>
      </div>
    </div>
  );
}

export default navber;

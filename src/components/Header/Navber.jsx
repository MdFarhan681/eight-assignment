import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { Link,useLocation, useNavigate } from "react-router";

function navber() {
const location= useLocation();
const active = location.pathname;
  const [loading, setloading] = useState(false);
    const navigate =useNavigate();

    const handleNav =(path)=>{
      setloading(true);
      setTimeout(()=>{
        setloading(false)
        navigate(path)
      },300)
    }



  const navLink = (
    <>
      <li className={active ==="/"?"text-blue-400 font-semibold btn btn-ghost":"text-gray-900 btn btn-ghost"} onClick={()=> handleNav("./")} >
            Home
      </li>

       <li className={active ==="/AllApps"?"text-blue-400 px-2 font-semibold btn btn-ghost":"text-gray-900 mx-3 btn btn-ghost"} onClick={()=> handleNav("/AllApps")}>
        {" "}
     Apps
      </li>

      <li className={active ==="/Installed"?"text-blue-400 font-semibold btn btn-ghost":"text-gray-900 btn btn-ghost"}
      onClick={()=> handleNav("/Installed")}>
        {" "}
      Installation
      </li>
    </>
  );

  return (
    <>
    {
      loading && (
        <div className="fixed inset-0 z-10  flex items-center justify-center font-bold text-4xl  ">

        <span className="loading loading-spinner text-error loading-8xl w-10 h-10"></span>
        </div>
      )
    }




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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3 cursor-pointer"
          >
           
            {navLink}
          </ul>
        </div>

      
          <div onClick={()=> handleNav("./")} className="navLeft pl-2 flex btn btn-ghost">
            <img className="w-10 h-10" src={logo} alt="" />

            <p className=" text-xl">HERO.IO</p>
          </div>
     
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {" "}
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
    
    
    
    </>
  );
}

export default navber;

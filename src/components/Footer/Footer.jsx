import React from 'react'
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <div className="foot bg-[#001931] md:px-15 px-7  w-full ">
       <div className="footer text-white sm:footer-horizontal   p-10">
  <aside>
    <img className="w-10 h-10" src={logo} alt="" />
    <p>
     Hero App Store
      <br />
      Providing reliable appication since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
      </div>

      <hr className='text-gray-700 mx-10' />

<div className="footer sm:footer-horizontal footer-center  p-4 text-white">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero App Store</p>
  </aside>
</div>

    </div>
   

  )
}

export default Footer

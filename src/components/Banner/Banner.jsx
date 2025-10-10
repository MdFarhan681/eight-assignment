import React from 'react'
import playstore from "../../assets/playsote.png"
import appstore from "../../assets/appstore.png"
import hero from "../../assets/hero.png"



function Banner() {
  return (
    <div className='flex flex-col justify-center items-center text-center mb-0 pb-0'>
        <h1 className='font-bold text-5xl text-[#001931] '>We Build <br />
<span className='text-transparent bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text '>Productive</span> Apps</h1>
      <p className='text-[#627382] text-sm py-3 '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

      <div className="bannerBtn flex gap-3 py-5">
        <a href='https://play.google.com/store/apps?hl=en' className='btn border-gray-200'>  <span><img className=' w-6 h-6' src={playstore} alt="" /></span> Google Play</a>

      <a href='https://www.apple.com/lae/app-store/' className='btn border-gray-200'> <span><img className=' w-6 h-6' src={appstore} alt="" /></span> App Store</a>

      </div>

      <img className='w-150 mb-0 pb-0 pt-10'  src={hero} alt="" />
      
    </div>
  )
}

export default Banner

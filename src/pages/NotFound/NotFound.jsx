import React from 'react'
import error from "../../assets/error.png"
import AppError from "../../assets/AppError.png"
import { Link } from 'react-router'

function NotFound() {
  return (
    <div>

      <div className="flex w-full flex-col justify-center items-center py-10 px-12">
      <img src={AppError} alt="" />
       <h1 className="text-4xl font-bold text-[#001931]">
      OPPS!! APP NOT FOUND
      </h1>
      <p className=" pt-3 pb-7 text-gray-400">
       The App you are requesting is not found on our system.  please try another apps
      </p>
     
      <Link to={"/AllApps"}> <button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
        Go Back!
      </button></Link>

      </div>

       
      
    </div>
  )
}

export default NotFound

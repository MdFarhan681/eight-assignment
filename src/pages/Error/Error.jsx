import React from 'react'
import error from "../../assets/error.png"
import { Link } from 'react-router'
function Error() {
  return (
    <div>

      <div className="flex w-full flex-col justify-center items-center py-10 px-12">
      <img src={error} alt="" />
       <h1 className="text-4xl font-bold text-[#001931]">
       Oops, page not found!
      </h1>
      <p className=" pt-3 pb-7 text-gray-400">
       The page you are looking for is not available.
      </p>
     
      <Link to={"/"}> <button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
        Go Back!
      </button></Link>

      </div>

       
      
    </div>
  )
}

export default Error

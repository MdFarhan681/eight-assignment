import React from "react";
import download from "../../assets/download.png";
import rating from "../../assets/ratings.png";
import { Link } from "react-router";

function Card({ singleCard }) {
    const {title,ratingAvg,downloads,image,id}=singleCard;

     

  

  return (

    <Link to={`/Details/${id}`}>
     <div className="w-65 h-fit p-3  card shadow-sm btn  ">
      <figure>
        <img className="rounded-sm" src={image} alt="apps" />
      </figure>
      <div className=" flex flex-col  w-full  text-start">
        <h2 className=" font-semibold whitespace-nowrap justify-start w-full pt-2">
          {title}
        </h2>

        <div className=" flex  w-full justify-between ">
            
          <div className="left flex gap-1  items-center text-left">
            <img className="w-4 h-4" src={download} alt="" />
            <p className="text-green-500">{downloads}</p>
          </div>

          <div className="left flex gap-1 items-center  ">
            <img className="w-4 h-4" src={rating} alt="" />
            <p className="text-amber-600">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
    
    </Link>


   
  );
}

export default Card;

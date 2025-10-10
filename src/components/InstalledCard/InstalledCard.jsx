import React from "react";
import download from "../../assets/download.png";
import rating from "../../assets/ratings.png";

function InstalledCard({ cardId }) {
  

  return (
    <div className="w-full h-fit px-2 shadow-sm mb-3 rounded-sm flex justify-between items-center">
      <div
        className="w-full h-fit  flex 
           "
      >
        <div className="img ">
          <figure>
            <img className="rounded-sm w-15 py-2" src={cardId.image} alt="apps" />
          </figure>
        </div>

        <div className=" flex flex-col flex-1 px-2  text-start">
          <h2 className=" font-semibold whitespace-nowrap justify-start w-full pt-2">
            {cardId.title}
          </h2>

          <div className=" flex  md:w-[17%] justify-between ">
            <div className="left flex gap-1  items-center text-left">
              <img className="w-4 h-4" src={download} alt="" />
              <p className="text-green-500">{cardId.downloads}</p>
            </div>

            <div className="left flex gap-1 items-center  ">
              <img className="w-4 h-4" src={rating} alt="" />
              <p className="text-amber-600">{cardId.ratingAvg}</p>
            </div>
            <div className="left flex gap-1 items-center  ">
            
              <p className="text-gray-400">{cardId.size} MB</p>
            </div>


          </div>
        </div>
        

      </div>
     
            <button className="btn bg-[#00D390] text-white"> 
                    Uninstall
             </button>
    </div>
  );
}

export default InstalledCard;

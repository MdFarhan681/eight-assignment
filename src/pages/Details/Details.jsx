import React, { useState } from "react";
import clock from "../../assets/clock.png";
import download from "../../assets/download.png";
import rating from "../../assets/ratings.png";
import reviewIcon from "../../assets/reviewIcon.png";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { addToStorage } from "../../components/AddToCart/AddToCart";

function Details() {
  const { id } = useParams();
  const data = useLoaderData();
  const [installed,setinstalled] = useState(false)
  


  const singleApp = data.find((ap) => ap.id === parseInt(id));

  const {
    image,
    title,
    companyName,
    size,
    reviews,
    description,
    ratingAvg,
    downloads,
    ratings,
  } = singleApp;

  const chartData = ratings.map((item, index) => ({
    name: item.name,
    value: item.count,
  }));
  const maxValue = Math.max(...chartData.map((item) => item.value));
  const roundData = Math.ceil((maxValue + 100) / 100) * 100;

  const halndleInstall = (id) => {
    addToStorage(id);
    setinstalled(true)
    toast("Install Successfully");
  };

  return (
    <div className="details w-full py-10 md:px-15 px-7">
      <div className="flex pb-3">
        <img className="w-65" src={image} alt="" />
        <div className="topCont pl-3 w-full">
          <div className="contHead  ">
            <h2 className="font-bold text-3xl text-[#001931]">{title}</h2>
            <p className="text-gray-400 pt-1 pb-3">
              Developed by{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text ">
                {companyName}
              </span>
            </p>

            <hr className="text-gray-300 w-full " />
          </div>

          <div className="topicons flex justify-between w-100 pt-3">
            <div className="download flex flex-col ">
              <img className="w-7" src={download} alt="" />
              <p className="text-gray-400 text-sm py-1">Downloads</p>
              <p className="text-[#001931] text-3xl font-bold">{downloads}</p>
            </div>
            <div className="avgRating flex flex-col ">
              <img className="w-7" src={rating} alt="" />
              <p className="text-gray-400 text-sm py-1">Average Ratings</p>
              <p className="text-[#001931] text-3xl font-bold">{ratingAvg}</p>
            </div>
            <div className="review flex flex-col ">
              <img className="w-7" src={reviewIcon} alt="" />
              <p className="text-gray-400 text-sm py-1">Total Reviews</p>
              <p className="text-[#001931] text-3xl font-bold">{reviews}</p>
            </div>
          </div>

          <button
            onClick={() => halndleInstall(id)} disabled={installed === true}
            className="text-white btn mt-3 bg-[#00D390]"
          >
           {installed === false ? `Install Now (${size}) MB `:"Installed"} 
          </button>
           <ToastContainer />
        </div>
      </div>

      <hr className="text-gray-300 w-full " />

      <div className="chart w-full h-80 mt-7">
        <h1 className="font-bold text-xl text-[#001931]">Ratings</h1>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={[...chartData].reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <XAxis type="number" domain={[0, roundData]} />
            <YAxis type="category" dataKey="name" width={80} />
            <Tooltip />
            <Bar dataKey="value" fill="#FF8811" radius={[6, 6, 6, 6]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="des w-full h-fit my-10">
        <h1 className="font-bold text-xl text-[#001931] py-3">Description</h1>
        <p className="text-[#627382] text-justify py-2">{description}</p>
        <p className="text-[#627382] text-justify py-2">{description}</p>
        <p className="text-[#627382] text-justify py-2">{description}</p>
      </div>
    </div>
  );
}

export default Details;

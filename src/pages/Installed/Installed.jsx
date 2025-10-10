import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getApp } from "../../components/AddToCart/AddToCart";
import InstalledCard from "../../components/InstalledCard/InstalledCard";
import Card from "../../components/Card/Card";

function Installed() {
  const data = useLoaderData();
  const [installed, setinstalled] = useState([]);

  useEffect(() => {
    const storedApp = getApp();
    const convertInt = storedApp.map((id) => parseInt(id));
    const applist = data.filter((p) => convertInt.includes(p.id));

    setinstalled(applist);
  }, []);

  return (

     
      
     <div className="flex w-full flex-col justify-center items-center py-10 px-12">

     <h1 className="text-4xl font-bold text-[#001931]">Your Installed Apps</h1>
       <p className=" pt-3 pb-7 text-gray-400">
        Explore All Trending Apps on the Market developed by us
       </p>

      <div className="installedList w-[80%] gap-3 ">

        <p className=" pt-3 pb-7 font-semibold text-[#001931]">{installed.length} Apps Found</p>
        {installed.map((a) => (
          <InstalledCard key={a.id} cardId={a}></InstalledCard>
          
        ))}
      </div>
    </div>
  );
}

export default Installed;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getApp } from "../../components/AddToCart/AddToCart";
import InstalledCard from "../../components/InstalledCard/InstalledCard";
import Card from "../../components/Card/Card";

function Installed() {
  const data = useLoaderData();
  const [installed, setinstalled] = useState([]);
  const [sort ,setsort]=useState("");

  

  useEffect(() => {
    const storedApp = getApp();
    const convertInt = storedApp.map((id) => parseInt(id));
    const applist = data.filter((p) => convertInt.includes(p.id));

    setinstalled(applist);
  }, []);


  const handleSort =(type)=>{
    setsort(type)
    const sortLH=[...installed]
    if(type ==="LH"){
       sortLH.sort((a,b)=>parseInt(a.downloads) -parseInt(b.downloads) );
      
     
     
    }else if(type ==="HL"){
      sortLH.sort((a,b)=>parseInt(b.downloads) -parseInt(a.downloads) );

    }
    setinstalled(sortLH);

    
   

  }
  const sortText= sort ==="LH"?"Low-High":sort ==="HL"?"High-Low":"Sort"

  return (

     
      
     <div className="flex w-full flex-col justify-center items-center py-10 px-12">

     <h1 className="text-4xl font-bold text-[#001931]">Your Installed Apps</h1>
       <p className=" pt-3 pb-7 text-gray-400">
        Explore All Trending Apps on the Market developed by us
       </p>

      <div className="installedList w-[80%] gap-3 ">

        <div className="sort flex justify-between items-center py-5">

          <p className=" pt-3 pb-7 font-semibold text-[#001931]">{installed.length} Apps Found</p>
        {/* sort */}
        <div className="dropdown dropdown-bottom dropdown-end">

  <div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-br from-[#00D390] to-[#a3decb]">{sortText}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-gradient-to-br from-[#00D390] to-[#a3decb] rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleSort("LH")} ><a>Low-High</a></li>
    <li onClick={()=>handleSort("HL")} ><a>High-Low</a></li>
  </ul>
</div>
        </div>



        {installed.map((a) => (
          <InstalledCard key={a.id} cardId={a} installed={installed} setinstalled={setinstalled}></InstalledCard>
          
        ))}
      </div>
    </div>
  );
}

export default Installed;

import React, { useMemo, useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router";
import Card from "../../components/Card/Card";
import NotFound from "../NotFound/NotFound";

function AllApps() {
  const rawdata = useLoaderData();
  const data = Array.isArray(rawdata) ? rawdata : rawdata?.apps ?? [];

  const [search, setsearch] = useState("");
  const [type, settype] = useState(false);
  const navigate =useNavigate();

  useEffect(() => {
    if (search.trim() === "") {
     settype(false)
      return;
    
    }
    settype(true);
    const id = setTimeout(() => settype(false), 300);
    return () => clearTimeout(id);
  }, [search]);

  const filtered =useMemo(()=>{
    const q=search.trim().toLowerCase();
    if(!q) return data ;
    return data.filter((app)=>(
      app.name || app.title || "").toString().toLowerCase().includes(q)
    );

    
    
  },[search, data]);


  useEffect (()=>{
    if(!type && filtered.length === 0){
      navigate ("/not-found");
    }
  },[type,filtered.length])

  return (
    <div className="flex w-full flex-col justify-center items-center py-10 px-12">
      <h1 className="text-4xl font-bold text-[#001931]">
        Our All Applications
      </h1>
      <p className=" pt-3 pb-7 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="appsection pt-7 ">
        <div className="searchbar flex justify-between items-center w-full pb-5 ">
          <p className="font-semibold text-[#001931] text-xl">
            {filtered.length} Apps Found
          </p>

          <label className="input bg-[#F7F7F7]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              required
              placeholder="Search"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </label>
        </div>
        {/* loader */}
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-4">
          {type ? (
            <div className="fixed inset-0 z-10 flex items-center justify-center font-bold text-4xl bg-gray-100 ">

         <span className="loading loading-spinner text-error"></span>
        </div>
          ) : filtered.length > 0 ? (
            filtered.map((singleCard) => (
              <Card key={singleCard.id} singleCard={singleCard}></Card>
            ))
          ):null }

         
        </div>
      </div>
    </div>
  );
}

export default AllApps;

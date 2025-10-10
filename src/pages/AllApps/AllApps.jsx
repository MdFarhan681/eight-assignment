import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Card from "../../components/Card/Card";

function AllApps() {
  const data = useLoaderData();


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
            {data.length} Apps Found
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
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        <div className=" grid md:grid-cols-4 grid-cols-1 gap-4">
          <Suspense fallback={<p>Loadding....</p>}>
            {data.map((singleCard) => (
              <Card key={singleCard.id} singleCard={singleCard}></Card>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AllApps;

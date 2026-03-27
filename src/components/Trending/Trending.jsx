import React, { useState } from "react";
import AppCard from "./AppCard";

const Trending = () => {
  const [appData, setAppData] = useState([]);
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => setAppData(data));

  return (
    <div>
      <div className="w-5/9 mx-auto text-center py-20">
        <h1 className="text-5xl font-semibold">Trending Apps</h1>
        <p className="text-gray-500 my-5 text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="trendin-apps grid grid-cols-4 gap-3 justify-center">
          {appData.slice(0, 8).map((app) => (
            <AppCard app={app} key={app.id}></AppCard>
          ))}
        </div>

        <div className="flex justify-center my-10">
          <button className="btn-accent btn btn-lg w-50 bg-linear-to-r from-blue-500 to-violet-500 text-gray-50 border-0">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;

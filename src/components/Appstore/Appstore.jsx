import { useState } from "react";
import AppCard from "../Trending/AppCard";

const Appstore = () => {
  const [allApps, setAllApps] = useState([]);
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => setAllApps(data));
  return (
    <div>
      <div className="w-full p-2 lg:w-5/9 mx-auto text-center py-20">
        <h1 className="text-5xl text-slate-800 font-semibold">Our Apps</h1>
        <p className="text-gray-500 my-9 lg:my-5 text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="trendin-apps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
          {allApps.map((app) => (
            <AppCard app={app} key={app.id}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appstore;

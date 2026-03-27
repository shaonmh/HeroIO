import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((a) => a.id === parseInt(id));
        setApp(item);

        const installedApps = JSON.parse(
          localStorage.getItem("installed-apps") || "[]",
        );
        const exists = installedApps.find((a) => a.id === parseInt(id));
        if (exists) setIsInstalled(true);

        setLoading(false);
      });
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(
      localStorage.getItem("installed-apps") || "[]",
    );
    localStorage.setItem(
      "installed-apps",
      JSON.stringify([...installedApps, app]),
    );
    setIsInstalled(true);
    toast.success("App installed successfully!");
  };

  if (loading)
    return (
      <div className="flex justify-center py-40">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );

  if (!app)
    return (
      <div className="text-center py-40 text-2xl font-bold">
        Relevant Not Found message
      </div>
    );

  const chartData = [...app.ratings].reverse();

  const maxCount = Math.max(...app.ratings.map((r) => r.count));
  const dynamicDomain = Math.ceil(maxCount / 6000) * 6000 || 18000;
  const dynamicTicks = [
    0,
    dynamicDomain / 3,
    (dynamicDomain / 3) * 2,
    dynamicDomain,
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Toaster />

      <div className="flex flex-col md:flex-row gap-12 items-start pb-12">
        <div className="w-64 h-64 border rounded-2xl flex items-center justify-center p-6 shadow-sm">
          <img
            src={app.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900">{app.title}</h1>
          <p className="text-lg text-gray-500 mt-2">
            Developed by{" "}
            <span className="text-indigo-600 font-medium">
              {app.companyName}
            </span>
          </p>

          <div className="flex gap-12 my-10 border-t border-gray-50 pt-8">
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">
                Downloads
              </p>
              <p className="text-3xl font-bold text-slate-800">
                {app.downloads >= 1000000000
                  ? `${(app.downloads / 1000000000).toFixed(0)}B`
                  : `${(app.downloads / 1000000).toFixed(0)}M`}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">
                Average Rating
              </p>
              <p className="text-3xl font-bold text-slate-800">
                {app.ratingAvg}
              </p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-10 py-3 rounded-lg text-white font-bold text-lg transition-all ${
              isInstalled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-emerald-400 hover:bg-emerald-500 active:scale-95 shadow-md shadow-emerald-100"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-10">Ratings</h2>
        <div className="h-80 w-full max-w-5xl">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ left: 20, bottom: 20 }}
            >
              <XAxis
                type="number"
                domain={[0, dynamicDomain]}
                ticks={dynamicTicks}
                axisLine={{ stroke: "#e2e8f0" }}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 14 }}
                dy={10}
              />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 16 }}
                width={80}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar
                dataKey="count"
                fill="#f97316"
                radius={[0, 4, 4, 0]}
                barSize={28}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Description</h2>
        <div className="text-gray-500 text-lg leading-relaxed max-w-5xl whitespace-pre-line">
          {app.description}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

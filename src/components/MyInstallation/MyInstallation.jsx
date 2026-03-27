import React, { useState, useEffect } from "react";
import AppCard from "../Trending/AppCard";
import toast, { Toaster } from "react-hot-toast";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installed-apps") || "[]");
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const remaining = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installed-apps", JSON.stringify(remaining));
    setInstalledApps(remaining);
    toast.error("App uninstalled successfully");
  };

  return (
    <div className="min-h-[calc(100vh-300px)] w-11/12 mx-auto py-12">
      <Toaster />
      <h1 className="text-4xl font-bold mb-10">My Installed Apps</h1>

      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <div key={app.id} className="flex flex-col border rounded-xl p-2">
              <AppCard app={app} />
              <button
                onClick={() => handleUninstall(app.id)}
                className="mt-auto w-full py-2 bg-red-100 text-red-600 font-bold rounded-lg hover:bg-red-200 transition-colors"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-40">
          <p className="text-gray-400 text-6xl mb-4">📦</p>
          <p className="text-gray-500 text-2xl font-semibold">
            No apps installed yet.
          </p>
          <p className="text-gray-400 mt-2">
            Your installed applications will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyInstallation;

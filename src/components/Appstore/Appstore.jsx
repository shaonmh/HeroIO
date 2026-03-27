import { useState, useEffect } from "react";
import AppCard from "../Trending/AppCard";
import { Link } from "react-router";

const Appstore = () => {
  const [allApps, setAllApps] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllApps(data);
        setLoading(false);
      });
  }, []);

  const filteredApps = allApps
    .filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "high-low") return b.downloads - a.downloads;
      if (sortOrder === "low-high") return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
        <div>
          <h2 className="text-2xl font-bold">
            Total Apps: {filteredApps.length}
          </h2>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="mt-2 p-2 border rounded-lg outline-none bg-gray-50"
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High to Low</option>
            <option value="low-high">Low to High</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search by title..."
          className="w-full md:w-96 p-4 border rounded-xl outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20 animate-spin">🌀</div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link to={`/appdetails/${app.id}`} key={app.id}>
              <AppCard app={app} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-3xl font-bold text-gray-400">
          No App Found
        </div>
      )}
    </div>
  );
};

export default Appstore;

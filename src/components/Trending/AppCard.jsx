import { FaStar } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";

const AppCard = ({ app }) => {
  const formatDownloads = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num;
  };
  return (
    <div className="card bg-base-100  shadow-sm flex items-center ">
      <figure className="h-50 w-50 my-5 border border-gray-200 p-5 ">
        <img className="w-full" src={app.image} alt={app.title} />
      </figure>
      <div className="card-body px-0 py-5  w-7/10 mx-auto">
        <h2 className="text-center text-xl font-semibold ">{app.title}</h2>
        <div className=" flex no-wrap  justify-between ">
          <span className="badge font-bold badge-accent badge-soft flex justify-center items-center gap-1">
            <RiDownload2Line className="text-lg font-bold" />

            {formatDownloads(app.downloads)}
          </span>
          <span className="badge font-bold badge-error badge-soft">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;

import React from "react";
import { useNavigate } from "react-router";
import img from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      <img src={img} alt="404" className="max-w-md w-full mb-8" />
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Oops, page not found!
      </h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-10 py-3 bg-violet-500 hover:bg-violet-600 btn text-white font-semibold rounded-lg transition-colors"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;

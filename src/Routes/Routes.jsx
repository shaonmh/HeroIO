import React from "react";
import { createBrowserRouter } from "react-router";
import Appstore from "../components/Appstore/Appstore";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import AppDetails from "../components/AppDetails/AppDetails";
import ErrorPage from "../components/Error/ErrorPage";
import MyInstallation from "../components/MyInstallation/MyInstallation";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Appstore,
      },
      {
        path: "/appdetails/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: MyInstallation,
      },
    ],
  },
]);

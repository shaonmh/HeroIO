import React from "react";
import { createBrowserRouter } from "react-router";
import Appstore from "../components/Appstore/Appstore";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>404 Not Found</div>,
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
    ],
  },
]);

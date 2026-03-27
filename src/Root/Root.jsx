import React from "react";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Nav> </Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import "../Component/Layout.css";

const Layout = ({theme,settheme}) => {
  return (
    <>
      <Navbar theme={theme} settheme={settheme} />

      <Outlet />

      <Footer theme={theme} settheme={settheme} />
    </>
  );
};

export default Layout;

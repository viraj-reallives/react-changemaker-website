import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import "../Component/Layout.css";

const Layout = ({ theme, settheme }) => {
  const location = useLocation();
  const hideSiteFooter = location.pathname.includes("get-rcmi-report");

  return (
    <>
      <Navbar theme={theme} settheme={settheme} />

      <Outlet />

      {!hideSiteFooter && <Footer theme={theme} settheme={settheme} />}
    </>
  );
};

export default Layout;

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { SignupModalProvider } from "../context/SignupModalContext";
import SignupTypeModal from "./SignupTypeModal/SignupTypeModal";
import "../Component/Layout.css";

const Layout = () => {
  const location = useLocation();
  const hideSiteFooter = location.pathname.includes("get-rcmi-report");

  return (
    <SignupModalProvider>
      <Navbar />

      <Outlet />

      {!hideSiteFooter && <Footer />}
      <SignupTypeModal />
    </SignupModalProvider>
  );
};

export default Layout;

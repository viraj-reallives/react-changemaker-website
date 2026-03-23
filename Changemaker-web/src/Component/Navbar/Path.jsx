import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  
  
 const openPDFInNewTab = () => {
  const link = document.createElement("a");
  link.href = "https://reallivesfrontend.s3.us-east-1.amazonaws.com/RCMI-Brochure.pdf";
  link.target = "_blank"; 
  link.rel = "noopener noreferrer"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navigation-path-container">
      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <span className={showMenu ? "bar active" : "bar"}></span>
        <span className={showMenu ? "bar active" : "bar"}></span>
        <span className={showMenu ? "bar active" : "bar"}></span>
      </div>

      {/* Navigation Links */}
      <div
        className={showMenu ? "navigation-path mobile-open" : "navigation-path"}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "listed-style active" : "listed-style"
          }
          onClick={() => setShowMenu(false)}
        >
          Home
        </NavLink>

        <NavLink
          className="listed-style"
          to="/certified-institutes"
          onClick={() => setShowMenu(false)}
        >
          Certified Institutes
        </NavLink>

        <NavLink
          className="listed-style"
          to="/our-impact"
          onClick={() => setShowMenu(false)}
        >
          Our Impact
        </NavLink>

        <NavLink
          className="listed-style"
          to="/how-rcmi-works"
          onClick={() => setShowMenu(false)}
        >
          How RCMI Works
        </NavLink>

        <NavLink>
          <button className="button-download " onClick={openPDFInNewTab}>
            <FaDownload />
            RCMI Brochure
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

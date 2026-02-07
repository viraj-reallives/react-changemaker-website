import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-trigger">
        Best Suited For
        <span className="dropdown-arrow">▼</span>
      </div>

      <div className="dropdown-menu">
        <div className="dropdown-option">For Institutions</div>
        <div className="dropdown-option">For Employers</div>
        <div className="dropdown-option">For Parents</div>
      </div>
    </div>
  );
};

export default Dropdown;

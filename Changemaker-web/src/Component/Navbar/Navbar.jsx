import { Link } from "react-router-dom";
import "./Navbar.css";

import light_logo from "../../assets/day.png";
import dark_logo from "../../assets/night.png";
import Dropdown from "./Dropdown";
import Path from "./Path";
import Logo from "./Logo";

const Navbar = ({ theme, settheme }) => {
  console.log(theme);

  let togglebtn = () => {
    theme == "light" ? settheme("dark") : settheme("light");
  };

  const logo_decide = theme == "light" ? dark_logo : light_logo;

  return (
    <div className="header-fixed">
      <Logo></Logo>

      <div className="content-tap-impact">
        {/* <Dropdown></Dropdown> */}
        <Path></Path>

        <div className="light-dark-box">
          <img
            className="image-fit-content "
            onClick={() => togglebtn()}
            src={logo_decide}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

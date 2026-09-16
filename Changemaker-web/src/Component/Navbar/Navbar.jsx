import "./Navbar.css";
import Path from "./Path";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <div className="header-fixed">
      <Logo />

      <div className="content-tap-impact">
        <Path />

        <div className="navbar-utilities">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

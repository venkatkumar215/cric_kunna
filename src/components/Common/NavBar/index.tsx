import React from "react";
import { Logo } from "../index";
import "./navBar.modules.scss";
import NavBarContent from "./navBarContent";
import NavBarIcon from "./navBarIcon";

const NavBar: React.FC = () => {
  return (
    <div className="cric_navBar">
      <div className="cric_navBar-link">
        <div className="cric_navBar-link__logo">
          <Logo></Logo>
        </div>
        <div className="cric_navBar-link__container">
          <NavBarContent></NavBarContent>
        </div>
      </div>
      <div className="cric_navBar-link__icons">
        <NavBarIcon></NavBarIcon>
      </div>
    </div>
  );
};

export default NavBar;

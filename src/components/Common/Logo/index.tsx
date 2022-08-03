import React from "react";
import logo from "./logo.png";
import "./logo.modules.scss";

const Logo: React.FC = () => {
  return (
    <div className="cric_logo">
      <div className="cric_logo-Img">
        <img src={logo} alt="Logo" />{" "}
      </div>
      <div className="cric_logo-Content">
        <h4>
          <strong>Cric Heros</strong>
        </h4>
        <p>Love the Cricket</p>
      </div>
    </div>
  );
};

export default Logo;

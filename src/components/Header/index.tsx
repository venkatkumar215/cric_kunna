import React from "react";
import { NavBar } from "../Common/index";

const Header:React.FC=()=>{

return(
    <header>   
    <div className="row headerWrapper">
    <NavBar></NavBar>
    </div>
    </header>
)
}

export default Header;
import React from "react";
import './Login.modules.scss';
import LoginForm from "./LoginForm";
import LoginImg from "./LoginImg";


const LogIn:React.FC=()=>{

return(

  <div className="cric_logIn-container">
    <div className="cric_logIn-Image col-7">
     <LoginImg></LoginImg>
    </div>
    <div className="cric_logIn-singInForm ">
      <LoginForm></LoginForm>     
    </div>

  </div>
   

)
}

export default LogIn;
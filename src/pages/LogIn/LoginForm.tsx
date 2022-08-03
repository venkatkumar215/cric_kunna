import React from "react";
import { Instagram,Google,Facebook } from "@mui/icons-material";
import LoginInputForm from "./LoginInputForm";
import LineDivider from "../../components/Common/LineDivider";

const LoginForm: React.FC = () => {
  return (
    <div className="cric_LogInForm">
      <div className="cric_LogInForm-Icon">
        <p>Sign in with</p>
        <span className="cric_LogInForm-Icon__span">
        <Instagram fontSize="large"></Instagram>
        <Google fontSize='large'  ></Google>
        <Facebook fontSize='large' ></Facebook>
        </span>
      </div>
      <div>
        <LineDivider></LineDivider>
      </div>
      <div>
        <LoginInputForm></LoginInputForm>
      </div>
    </div>
  );
};

export default LoginForm;

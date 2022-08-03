import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes/routes";
import LoginIcon from "@mui/icons-material/Login";


interface RouterLinks {
  name: any;
  to: AppRoutes;
}

const NavBarIcon: React.FC = () => {
  const iconLinks: Array<RouterLinks> = [
    {
      name: LoginIcon,
      to: AppRoutes.LogIn,
    },
  ];

  return (
    <>
      {iconLinks.map((icon, index) => (
        <li key={index}>
          <Link to={icon.to}>
            <LoginIcon></LoginIcon>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavBarIcon;

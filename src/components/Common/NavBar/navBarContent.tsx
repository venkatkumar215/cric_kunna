import React from 'react';
import {AppRoutes} from '../../../routes/index';
import { Link } from 'react-router-dom';


interface RouterLinks {
title:String;
to:AppRoutes
}

const NavBarContent:React.FC = () => {

const links : Array<RouterLinks>=[{
    title:'Home',
    to:AppRoutes.Home
},
{
    title:'About Us',
    to:AppRoutes.AboutUs
}]

  return (
    <>
  {links.map((link,index) => 
    <li  key={index} className ='cric_navBar-Content_list'>
        <Link to= {link.to}> {link.title}</Link>
    </li>
  )} 
    </>
  )
}

export default NavBarContent;

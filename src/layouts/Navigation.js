import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.css';

const {permission} = require("../pages/AdminPage");
const address = permission ? "/admin" : "/login";

const list = [
   {name: "Home", path: "/"},
   {name: "Products", path: "/products"},
   {name: "Contact", path: "/contact"},
   {name: "Admin Panel", path: address},
];

const Navigation = () => {
   const menu = list.map(item => (
      <li key={item.name}>
         <NavLink to={item.path}>{item.name}</NavLink>
      </li>
   ));

   return (
      <nav className="main">
         <ul>
            {menu}
         </ul>
      </nav>
   );
}

export default Navigation;
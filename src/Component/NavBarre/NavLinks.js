import React from "react";

import classes from "./navLinks.module.css";
import { NavLink } from "react-router-dom";

const NAV_LINK = [
  { name: "Home", icon: "home", route: "/", aria: "home-page" },
  {
    name: "About",
    icon: "information-circle",
    route: "/about",
    aria: "about-page",
  },
  { name: "Service", icon: "bag-add", route: "/service", aria: "service-page" },
  {
    name: "Contact",
    icon: "chatbox-ellipses",
    route: "/contact",
    aria: "contact-page",
  },
];

const NavLinks = () => {
  return (
    <ul className={classes.linkItem}>
      {NAV_LINK.map((link, index) => (
        <li key={index}>
          <NavLink
            aria-label={link.aria}
            to={link.route}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <ion-icon name={link.icon}></ion-icon>
            <p>{link.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

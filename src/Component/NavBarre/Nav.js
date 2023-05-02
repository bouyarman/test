import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./nav.module.css";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { navActions } from "../../store";

const Nav = () => {
  const dispatch = useDispatch();
  const menuClass = useSelector((state) => state.menuClass);
  const closeClass = useSelector((state) => state.closeClass);
  const showNav = useSelector((state) => state.showNav);
  // Closing mobile navigation clicking outside or in a link
  window.addEventListener("click", (e) => {
    if (
      !e.target.className.includes("navigation") &&
      !e.target.className.includes("hydrated")
    ) {
      dispatch(navActions.hideNav());
    }
    console.log(e);
  });

  // Show navigation when clicking at manu icon
  const menuClickedHandler = (e) => {
    e.preventDefault();
    dispatch(navActions.showNav());
  };

  // Hide navigation when clicking at manu icon
  const closeClickedHandler = (e) => {
    e.preventDefault();
    dispatch(navActions.hideNav());
  };
  const navClass = showNav ? classes.showNav : classes.hideNav;

  return (
    <>
      <nav className={`${classes.navigation} ${navClass} `}>
        <Logo />
        <NavLinks />
      </nav>
      <nav>
        <div className={classes.hamburgerIcons}>
          <a
            href="/"
            aria-label="menu-icon"
            onClick={menuClickedHandler}
            className={menuClass}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </a>
          <a
            href="/"
            aria-label="close-icon"
            onClick={closeClickedHandler}
            className={closeClass}
          >
            <ion-icon name="close-outline"></ion-icon>
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;

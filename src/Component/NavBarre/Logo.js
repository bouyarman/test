import React from "react";

import classes from "./logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={classes.logo}>
      MOROCCO TOUR
    </Link>
  );
};

export default Logo;

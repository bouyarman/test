import React from "react";

import classes from "./headerContent.module.css";
import { Link } from "react-router-dom";

const HeaderContent = (props) => {
  const heroContent = props.h1 && props.p;
  return (
    <>
      {props.heroImg ? (
        <img src={props.heroImg} className={classes.heroImg} alt="hero img" />
      ) : null}
      {heroContent ? (
        <div className={classes["header-content"]}>
          {props.h1 ? <h1>{props.h1}</h1> : null}
          {props.p ? <p>{props.p}</p> : null}
          <div className={classes.btns}>
            {props.joinUsBtn ? (
              <Link to="/service">{props.joinUsBtn}</Link>
            ) : null}
            {props.contactUsBtn ? (
              <Link to="/contact">{props.contactUsBtn}</Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeaderContent;

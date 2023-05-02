import React from "react";

import classes from "./visitContent.module.css";

const VisitContent = ({ title, text, icon }) => {
  return (
    <div className={classes.visitBox}>
      <div className={classes.icons}>
        <ion-icon name={icon}></ion-icon>
      </div>
      <div>
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default VisitContent;

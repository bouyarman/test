import React, { useState } from "react";

import classes from "./destinationsImgs.module.css";

let Number = 1;
const DestinationsImgs = ({ data }) => {
  const [currentImg, setCurrentImg] = useState(Number);
  const arrowBtnHandler = (condition, value, otherValue) => {
    if (condition) {
      Number = value;
      setCurrentImg(Number);
    } else if (Number <= 4) {
      Number = otherValue;
      setCurrentImg(Number);
    }
  };
  const leftArrowHandler = () => {
    arrowBtnHandler(Number === 1, 4, Number - 1);
  };
  const rightArrowHandler = () => {
    arrowBtnHandler(Number === 4, 1, Number + 1);
  };
  const buttons = (type, classtype, functionType, aria) => {
    return (
      <button
        aria-label={aria}
        className={`${classtype} ${classes.arrows}`}
        onClick={functionType}
      >
        <ion-icon name={type}></ion-icon>
      </button>
    );
  };
  const leftBtn = buttons(
    "chevron-back",
    classes.leftArrow,
    leftArrowHandler,
    "back to the previous img"
  );
  const rightBtn = buttons(
    "chevron-forward",
    classes.rightArrow,
    rightArrowHandler,
    "pass to the next img"
  );
  return (
    <>
      {leftBtn}
      {rightBtn}
      <img
        style={currentImg === 1 ? { opacity: "1" } : { opacity: "0" }}
        className={classes.imgs}
        src={data.img1}
        alt={data.alt}
      />
      <img
        style={currentImg === 2 ? { opacity: "1" } : { opacity: "0" }}
        className={classes.imgs}
        src={data.img2}
        alt={data.alt}
      />
      <img
        style={currentImg === 3 ? { opacity: "1" } : { opacity: "0" }}
        className={classes.imgs}
        src={data.img3}
        alt={data.alt}
      />
      <img
        style={currentImg === 4 ? { opacity: "1" } : { opacity: "0" }}
        className={classes.imgs}
        src={data.img4}
        alt={data.alt}
      />
    </>
  );
};

export default DestinationsImgs;

import React from "react";

import classes from "./testimonialContent.module.css";

const TestimonialContent = ({
  data,
  leftClick,
  rightClick,
  style,
  dotsIndex,
  dotsClicked,
}) => {
  const dotsInfos = [
    { onClick: dotsClicked.first, Number: 0 },
    { onClick: dotsClicked.second, Number: 1 },
    { onClick: dotsClicked.third, Number: 2 },
    { onClick: dotsClicked.fourth, Number: 3 },
  ];
  return (
    <article className={classes.testimonialBox} style={style}>
      <button
        className={classes.leftBtn}
        onClick={leftClick}
        aria-label="back to the previous img"
      >
        <ion-icon size="large" name="arrow-back-circle"></ion-icon>
      </button>
      <button
        className={classes.rightBtn}
        onClick={rightClick}
        aria-label="pass to the next img"
      >
        <ion-icon size="large" name="arrow-forward-circle"></ion-icon>
      </button>
      <div className={classes.dots}>
        {dotsInfos.map((properties, index) => (
          <ion-icon
            key={index}
            size="small"
            name="radio-button-on-outline"
            onClick={properties.onClick}
            style={dotsIndex === properties.Number ? { fill: "#000033" } : null}
          ></ion-icon>
        ))}
      </div>
      <div className={classes.testimonialInfos}>
        <img src={data.imgUrl} alt="customers images" />
        <p>{data.name}</p>
        <p>Rating : {data.rating}</p>
      </div>
      <div className={classes.testimonialContent}>
        <h3>{data.title}</h3>
        <p>{data.comment}</p>
      </div>
    </article>
  );
};

export default TestimonialContent;

import React, { useState } from "react";

import classes from "./testimonials.module.css";
import TestimonialContent from "./TestimonialContent";
import {
  btnsLogic,
  dotsLogic,
  hamzaData,
  viratData,
  alyssaData,
  amyData,
} from "./helpers";
const SLIDES = [hamzaData, amyData, viratData, alyssaData];

const Testimonials = () => {
  let [i, setCurrentI] = useState(0);
  const testimonialLogic = SLIDES.map((slide, index) => {
    const leftClickHandler = () => {
      btnsLogic(i > 0, setCurrentI, i - 1, 3);
    };
    const rightClickHandler = () => {
      btnsLogic(i < SLIDES.length - 1, setCurrentI, i + 1, 0);
    };
    const dotsClick = {
      first: dotsLogic(setCurrentI, 0),
      second: dotsLogic(setCurrentI, 1),
      third: dotsLogic(setCurrentI, 2),
      fourth: dotsLogic(setCurrentI, 3),
    };
    const styling =
      i === index
        ? { transform: `translateX(${(index - i) * 100 - 50}%)` }
        : {
            transform: `translateX(${(index - i) * 100 - 50}%)`,
            visibility: "hidden",
            opacity: "0",
          };
    return (
      <TestimonialContent
        key={index}
        rightClick={rightClickHandler}
        leftClick={leftClickHandler}
        data={slide}
        style={styling}
        dotsIndex={index}
        dotsClicked={dotsClick}
      />
    );
  });
  return (
    <section className={"container"}>
      <h2 className="mainHeader">Testimonials</h2>
      <div className={classes.testimonialsContent}>{testimonialLogic}</div>
    </section>
  );
};

export default Testimonials;

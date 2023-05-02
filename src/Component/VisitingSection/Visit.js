import React from "react";

import "../../index.css";
import classes from "./visit.module.css";
import VisitContent from "./VisitContent";
import {
  biggestTourText,
  bigPeriodText,
  fiveStarsText,
  priceText,
  wifiText,
  stateText,
} from "./Texts";

const Visit = () => {
  return (
    <section className="container">
      <h2 className="mainHeader">Why you should visit Morocco with us</h2>
      <div className={classes.visitContent}>
        <VisitContent
          title="Biggest Tour"
          text={biggestTourText}
          icon="globe"
        />
        <VisitContent
          title="Big Period"
          text={bigPeriodText}
          icon="calendar-number"
        />
        <VisitContent title="5 Stars" text={fiveStarsText} icon="ribbon" />
        <VisitContent title="Best Price" text={priceText} icon="diamond" />
        <VisitContent title="5G Wifi" text={wifiText} icon="wifi" />
        <VisitContent title="Your State" text={stateText} icon="medkit" />
      </div>
      <hr />
    </section>
  );
};

export default Visit;

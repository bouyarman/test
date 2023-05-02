import React from "react";

import classes from "./destinationsContent.module.css";
import DestinationsImgs from "./DestinationsImgs";
import DestinationsText from "./DestinationsText";
import {
  northMorocco,
  northMoroccoText,
  northCentralMorocco,
  northCentralMoroccoText,
  westMorocco,
  westhernMoroccoText,
  southMorocco,
  southMoroccoText,
} from "./dataNeeded";

const DestinationContent = () => {
  return (
    <>
      <div className={`${classes.placesText} ${classes["north-morr-text"]}`}>
        <DestinationsText text={northMoroccoText} />
      </div>
      <div className={`${classes.placesImgs} ${classes["north-morr-imgs"]}`}>
        <DestinationsImgs data={northMorocco} alt={northMorocco.alt} />
      </div>
      <div className={`${classes.placesText} ${classes["middle-morr-text"]}`}>
        <DestinationsText text={northCentralMoroccoText} />
      </div>
      <div className={`${classes.placesImgs} ${classes["middle-morr-imgs"]}`}>
        <DestinationsImgs
          data={northCentralMorocco}
          alt={northCentralMorocco.alt}
        />
      </div>
      <div className={`${classes.placesText} ${classes["west-morr-text"]}`}>
        <DestinationsText text={westhernMoroccoText} />
      </div>
      <div className={`${classes.placesImgs} ${classes["west-morr-imgs"]}`}>
        <DestinationsImgs data={westMorocco} alt={westMorocco.alt} />
      </div>
      <div className={`${classes.placesText} ${classes["south-morr-text"]}`}>
        <DestinationsText text={southMoroccoText} />
      </div>
      <div className={`${classes.placesImgs} ${classes["south-morr-imgs"]}`}>
        <DestinationsImgs data={southMorocco} alt={southMorocco.alt} />
      </div>
    </>
  );
};

export default DestinationContent;

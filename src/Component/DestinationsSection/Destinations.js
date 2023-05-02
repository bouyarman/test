import React from "react";

import "../../index.css";
import classes from "./destinations.module.css";
import DestinationContent from "./DestinationsContent";

//src={require("../../imgs/north-morocco/img-1.jpg")}
//src={require("../../imgs/north-morocco/img-3.jpg")}
//src={require("../../imgs/north-morocco/img-2.jpg")}

const Destinations = () => {
  return (
    <section className="container">
      <h2 className="mainHeader">Popular Destinations</h2>
      <div className={classes.places}>
        <DestinationContent />
      </div>
      <hr />
    </section>
  );
};

export default Destinations;

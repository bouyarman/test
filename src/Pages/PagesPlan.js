import React from "react";

import classes from "./pagesPlan.module.css";

import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { Link } from "react-router-dom";

const AboutPage = ({
  heroTitle,
  h3,
  heroImg,
  heroText,
  textPage,
  imgPage1,
  imgPage2,
}) => {
  return (
    <>
      <header>
        <Header h1={heroTitle} heroImg={heroImg} p={heroText} />
      </header>
      <main className={classes.content}>
        <div>
          <h3>{h3}</h3>
          <p>{textPage}</p>
        </div>
        <div className={classes.imgsDiv}>
          <img src={imgPage1} />
          <img src={imgPage2} />
        </div>
        <div className={classes.btn}>
          <Link aria-label="contactus" to="/contact" target="_">
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

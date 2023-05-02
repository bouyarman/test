import React from "react";
import { Link } from "react-router-dom";

import classes from "./footer.module.css";
import Logo from "../NavBarre/Logo";
import Map from "./Map";
import { COMPANY_LIST } from "./help";
import { PLACES_LIST } from "./help";
import { OTHERS_LIST } from "./help";
import { SOCIALMEDIA_LOGOS } from "./help";
import { COPYRIGHT_TEXT } from "./help";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerBox}>
        <span>
          <Logo />
        </span>
        <nav className={classes.footerNav}>
          <div>
            <h3>Company</h3>
            {COMPANY_LIST.map((link, i) => (
              <Link key={i} to={link.to} href="/" target="_">
                {link.page}
              </Link>
            ))}
          </div>
          <div>
            <h3>Places to go</h3>
            {PLACES_LIST.map((link, i) => (
              <a key={i} href={link.link} target="_">
                {link.page}
              </a>
            ))}
          </div>
          <div>
            <h3>Others</h3>
            {OTHERS_LIST.map((link, i) => (
              <Link key={i} to={link.to} target="_">
                {link.page}
              </Link>
            ))}
          </div>
        </nav>
        <div className={classes.map}>
          <Map />
        </div>
      </div>
      <hr />
      <div className={classes.footerSocialMedia}>
        <p>{COPYRIGHT_TEXT}</p>
        <div className={classes.socialMediaLogos}>
          {SOCIALMEDIA_LOGOS.map((logo, i) => (
            <a key={i} href={logo.link} target="_" aria-label={logo.aria}>
              <ion-icon name={logo.logo}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

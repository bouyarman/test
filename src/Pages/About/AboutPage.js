import React from "react";

import PagePlan from "../PagesPlan";
import { ABOUT_CONTENT } from "../FooterLinks/Help";

const ServicePage = () => {
  return (
    <PagePlan
      h3="What we do"
      heroTitle="About"
      heroText="Journey Through the Heart of Morocco with Our Expert Guides"
      heroImg={require("../../imgs/about-page/about-hero-img.jpg")}
      textPage={ABOUT_CONTENT}
      imgPage1={require("../../imgs/about-page/about-img-1.jpg")}
      imgPage2={require("../../imgs/about-page/about-img-2.jpg")}
    />
  );
};

export default ServicePage;

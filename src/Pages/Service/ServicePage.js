import React from "react";

import PagePlan from "../PagesPlan";
import { SERVICE_CONTENT } from "../FooterLinks/Help";

const ServicePage = () => {
  return (
    <PagePlan
      h3="What do we offer"
      heroTitle="Service"
      heroText="Uncover Morocco's Hidden Gems with Our Expert Guides"
      heroImg={require("../../imgs/service-page/service-hero-img.jpg")}
      textPage={SERVICE_CONTENT.map((el) => el)}
      imgPage1={require("../../imgs/service-page/service-img-1.jpg")}
      imgPage2={require("../../imgs/service-page/service-img-2.jpg")}
    />
  );
};

export default ServicePage;

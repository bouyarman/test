import React from "react";

import "../../index.css";
import Header from "../../Component/Header/Header";
import Destinations from "../../Component/DestinationsSection/Destinations";
import Visit from "../../Component/VisitingSection/Visit";
import Testimonials from "../../Component/Testimonials/Testimonials";
import Footer from "../../Component/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <header>
        <Header
          heroImg={require("../../imgs/home-page/chefchaoun.jpg")}
          h1="Explore Morocco: Discover New Wonders"
          p="Discover the beauty of Morocco with us. Our website is your guide to the best places to visit, things to do, and experiences to have in this stunning country. Start your adventure today!"
          joinUsBtn="Our job"
          contactUsBtn="Contact us"
        />
      </header>
      <main>
        <Destinations />
        <Visit />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

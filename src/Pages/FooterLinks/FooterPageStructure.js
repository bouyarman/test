import React from "react";

import Header from "../../Component/Header/Header";
import classes from "./footerPageStucture.module.css";
import Footer from "../../Component/Footer/Footer";

const FooterPageStructure = ({ pagecontent }) => {
  return (
    <>
      <Header
        style={{
          backgroundColor: "#000033",
          width: "100%",
          height: "12rem",
        }}
      />
      <main className={classes.pageContent}>{pagecontent.map((el) => el)}</main>
      <Footer />
    </>
  );
};

export default FooterPageStructure;

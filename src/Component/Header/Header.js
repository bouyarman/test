import React from "react";

import HeaderContent from "./HeaderContent";

const Header = (props) => {
  return (
    <div className="conatiner" style={props.style}>
      <HeaderContent
        heroImg={props.heroImg}
        h1={props.h1}
        p={props.p}
        joinUsBtn={props.joinUsBtn}
        contactUsBtn={props.contactUsBtn}
      />
    </div>
  );
};

export default Header;

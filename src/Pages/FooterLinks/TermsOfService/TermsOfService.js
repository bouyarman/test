import React from "react";

import FooterPageStructure from "../FooterPageStructure";
import { TERMS_OF_SERVICE_CONTENT } from "../Help";

const TermsOfService = () => {
  return (
    <>
      <FooterPageStructure pagecontent={TERMS_OF_SERVICE_CONTENT} />
    </>
  );
};

export default TermsOfService;

import React from "react";
import FooterPageStructure from "../FooterPageStructure";
import { PRIVACY_POLICY_CONTENT } from "../Help";

const PrivacyPolicy = () => {
  return (
    <>
      <FooterPageStructure pagecontent={PRIVACY_POLICY_CONTENT} />
    </>
  );
};

export default PrivacyPolicy;

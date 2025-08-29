import TermsOfService from "@/components/TermsOfService";
import termsData from "@/data/terms-of-service.json";
import React from "react";

const TermsOfServicePage = () => {
  return <TermsOfService {...termsData} />;
};

export default TermsOfServicePage; 
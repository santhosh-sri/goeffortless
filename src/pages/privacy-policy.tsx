import PrivacyPolicy from "@/components/PrivacyPolicy";
import privacyData from "@/data/privacy-policy.json";
import React from "react";

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy {...privacyData} />;
};

export default PrivacyPolicyPage; 
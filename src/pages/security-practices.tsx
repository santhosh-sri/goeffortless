import SecurityPractices from "@/components/SecurityPractices";
import securityData from "@/data/security-practices.json";
import React from "react";

const SecurityPracticesPage = () => {
  return <SecurityPractices {...securityData} />;
};

export default SecurityPracticesPage; 
import NewPrivacyPolicy from "@/components/NewPrivacyPolicy";
import privacyData from "@/data/privacy-policy.json";

const PrivacyPolicyPage = () => {
  return <NewPrivacyPolicy {...privacyData} />;
};

export default PrivacyPolicyPage;

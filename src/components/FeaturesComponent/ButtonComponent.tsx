import { useRouter } from "next/navigation";
import Democta from "../Democta";
import SecondaryCta from "../SecondaryCta";

const ButtonComponent = ({
  demoSecButton,
  demoCtaButton,
}: {
  demoSecButton?: string;
  demoCtaButton?: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-6 items-center">
      <Democta ctaText={demoCtaButton} />
      {demoSecButton && (
        <SecondaryCta
          secondaryCtaText="See All Features"
          isOrange={true}
          handleDirect={() => router.push("/allFeatures")}
        />
      )}
    </div>
  );
};

export default ButtonComponent;

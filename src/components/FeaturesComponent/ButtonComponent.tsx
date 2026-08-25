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
    <div className="flex max-md:flex-col justify-center gap-6 items-center max-md:w-full">
      <Democta ctaText={demoCtaButton} />
      {demoSecButton && (
        <SecondaryCta
          secondaryCtaText="See All Features"
          isOrange={true}
          ishome={true}
          handleDirect={() => router.push("/allFeatures")}
        />
      )}
    </div>
  );
};

export default ButtonComponent;

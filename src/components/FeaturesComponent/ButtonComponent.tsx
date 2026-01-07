import Democta from "../Democta";
import SecondaryCta from "../SecondaryCta";

const ButtonComponent = () => {
  return (
    <div className="flex justify-center gap-6 items-center">
      <Democta ctaText="Book Live Demo" />
      <SecondaryCta
        secondaryCtaText="See All Features"
        isOrange={true}
        handleDirect={() => console.log("dfsf")}
      />
    </div>
  );
};

export default ButtonComponent;

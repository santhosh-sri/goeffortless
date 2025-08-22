import RequestDemoForm from "@/components/DemoForm";
import Image from "next/image";
import { useState } from "react";

const Index = () => {
  const [showSucessPopup, setShowSucessPopup] = useState<boolean>(false);
  return (
    <div className="bg-black md:w-screen flex flex-col min-h-screen gap-10 items-center justify-center overflow-hidden max-md:p-4">
      <Image
        src={"/logo-eff.svg"}
        alt="Effortless-logo"
        width={150}
        height={50}
        className="w-[188px] h-[48px]"
        unoptimized={true}
      />
      <RequestDemoForm setShowForm={setShowSucessPopup} />
    </div>
  );
};

export default Index;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setTimeout(() => setLoading(false), 600);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      {children}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#15181B] animate-fadeIn">
          <div className="animate-logo">
            <Image
              src={"/header-logo.svg"}
              alt="Effortless-logo"
              width={150}
              height={50}
              className="w-[188px] h-[48px]"
              unoptimized={true}
            />
          </div>
        </div>
      )}
    </>
  );
}

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
    const handleStart = (url: unknown) => {
      if (typeof url !== "string") {
        setLoading(true);
        return;
      }

      if (url.includes("#") || url.includes("?")) return;

      setLoading(true);
    };

    const handleStop = (url: unknown) => {
      if (typeof url !== "string") {
        setTimeout(() => setLoading(false), 600);
        return;
      }

      if (url.includes("#") || url.includes("?")) return;

      setTimeout(() => setLoading(false), 600);
    };

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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface animate-fadeIn">
          {/* The legacy /header-logo.svg wordmark is fill="white", so on the
              light overlay only its orange gradient ring showed and the
              transition read as a stray spinner. Draw the real lockup. */}
          <div className="animate-logo flex items-center gap-2">
            <span className="relative block h-12 w-12 shrink-0">
              <Image
                src="/assets/shared/effortless-mark.png"
                alt=""
                width={48}
                height={48}
                className="absolute inset-0 h-full w-full"
              />
              <Image
                src="/assets/shared/effortless-mark-union.svg"
                alt=""
                width={30}
                height={11}
                className="absolute left-[37.583%] top-[39.306%] h-[22.499%] w-[62.384%]"
              />
            </span>
            <Image
              src="/assets/shared/effortless-wordmark.svg"
              alt="Effortless"
              width={176}
              height={32}
              className="h-8 w-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { printPdf } from "@/utils/printPdf";
import { CaseStudyCardProps, CaseStudyProps } from "@/interface/type";
import { useRouter, useSearchParams } from "next/navigation";

import CategoryTabs from "./CategoryTabs";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudy from "./CaseStudy";

interface Props {
  caseStudies: CaseStudyCardProps[];
}

const CaseStudiesSection: React.FC<Props> = ({ caseStudies }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyProps | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("All");

  const filteredStudies =
    activeTab === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.type === activeTab);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setActiveTab(type);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (activeTab === "All") {
      params.delete("type");
    } else {
      params.set("type", activeTab);
    }
    const hash = window.location.hash;
    // Build URL without hash
    const newUrl = `${window.location.pathname}?${params.toString()}${hash}`;

    // Only replace if URL changed
    if (newUrl !== window.location.href) {
      router.replace(newUrl, { scroll: false });
    }
  }, [activeTab, router]);

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStudy]);

  useEffect(() => {
    caseStudies?.forEach(
      (cs) => cs.details.docName && printPdf(cs.details.docName)
    );
  }, [caseStudies]);

  return (
    <>
      {caseStudies?.length > 0 && (
        <div>
          <div className="pb-10">
            <CategoryTabs active={activeTab} setActive={setActiveTab} />
          </div>

          <h3 className="font-light text-xl md:text-[32px] text-white">
            Featured {activeTab !== "All" && "Stories"}{" "}
            <span className="bg-custom-gradient bg-clip-text text-transparent font-medium">
              {activeTab === "All" ? "Stories" : `In ${activeTab}`}
            </span>
          </h3>

          <p className="text-base md:text-2xl font-light text-white mt-2">
            Helping companies of all sizes and in all industries in India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-5 md:gap-y-10 pt-10">
            {filteredStudies?.map((item, index) => (
              <CaseStudyCard
                key={index}
                title={item.title}
                description={item.description}
                details={item.details}
                onReadMore={() => setSelectedStudy(item.details)}
              />
            ))}
          </div>
        </div>
      )}

      {selectedStudy && (
        <CaseStudy {...selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </>
  );
};

export default CaseStudiesSection;

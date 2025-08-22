import { FeatureProps } from "@/interface/type";
import React, { useState } from "react";
import Featurecard from "./FeatureCard";

const FeatureWrapper: React.FC<FeatureProps> = ({
  featureCards,
  GridCols,
  isMobile,
  index,
}) => {
  const [showMore, setShowMore] = useState(false);

  const visibleFeatures = showMore ? featureCards?.length || 0 : 9;
  const cardLength = featureCards?.length;

  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      {cardLength == 5 && !isMobile ? (
        <div className="flex flex-col gap-4">
          <div
            className={`grid grid-cols-${index === 6 ? 2 : 3} gap-4 md:max-h-[166px]`}
          >
            {featureCards
              ?.slice(0, index === 6 ? 2 : 3)
              .map((card, index) => <Featurecard key={index} {...card} />)}
          </div>
          <div className={`grid grid-cols-${index === 6 ? 3 : 2} gap-4`}>
            {featureCards
              ?.slice(index === 6 ? 2 : 3, 6)
              .map((card, index) => <Featurecard key={index} {...card} />)}
          </div>
        </div>
      ) : (
        <div
          className={`gap-4 flex flex-col items-center justify-center ${
            cardLength == 4 || GridCols
              ? "md:grid md:grid-cols-2"
              : "md:grid md:grid-cols-3"
          }`}
        >
          <>
            {featureCards
              ?.slice(0, visibleFeatures)
              .map((card, index) => <Featurecard key={index} {...card} />)}
          </>
        </div>
      )}
      {featureCards && featureCards.length > 9 && (
        <div className="flex items-center justify-center mt-5">
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="text-[#F08B32] py-2 px-4 rounded-md mr-2"
            >
              View More
            </button>
          )}
          {showMore && (
            <button
              onClick={() => setShowMore(false)}
              className="text-[#F08B32] py-2 px-4 rounded-md mr-2"
            >
              View Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FeatureWrapper;

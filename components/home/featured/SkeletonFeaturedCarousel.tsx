import React from "react";
import SkeletonFeatureCard from "./SkeletonFeatureCard";

const SkeletonFeaturedCarousel: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden">
        <div className="flex -ml-4 touch-pan-y">
          {[...Array(3)].map((_, index) => (
            <div className="flex-[0_0_70%] min-w-0 pl-4" key={index}>
              <SkeletonFeatureCard />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:flex lg:justify-center mt-7">
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeaturedCarousel;

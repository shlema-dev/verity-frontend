import React from "react";

const SkeletonFeatureCard: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden animate-pulse">
      <div className="h-[32rem] bg-gray-200 dark:bg-gray-700 relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-300 dark:from-gray-800 to-transparent">
          <div className="absolute inset-x-0 bottom-5 lg:bottom-10 p-4 flex flex-col items-start">
            <div className="mb-4 lg:ml-4 lg:mr-12 h-8 lg:h-12 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="hidden lg:block ml-4 h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeatureCard;

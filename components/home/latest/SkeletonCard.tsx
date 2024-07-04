import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="w-full h-[515px] p-4 animate-pulse bg-gray-3 rounded-xl border border-2 border-gray-6 flex flex-col justify-end gap-4">
      <div className="h-6 bg-gray-4 rounded w-3/4"></div>
      <div className="h-4 bg-gray-4 rounded w-full"></div>
      <div className="h-4 bg-gray-4 rounded w-5/6"></div>
    </div>
  );
};

export default SkeletonCard;

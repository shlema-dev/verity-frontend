const SkeletonFeaturedCard: React.FC = () => {
  return (
    <div className="w-full mt-8 mx-0 py-4 px-2 lg:py-8 lg:px-4 flex flex-col gap-4 justify-start items-center bg-primary-2 rounded-lg border border-primary-6">
      {/* Skeleton for title */}
      <div className="w-3/4 h-6 lg:h-8 bg-primary-4 rounded animate-pulse"></div>

      {/* Skeleton for image */}
      <div className="w-full h-52 lg:h-72 m-4 rounded bg-primary-4 animate-pulse"></div>

      {/* Skeleton for hook */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-5/6 h-4 lg:h-5 bg-primary-4 rounded animate-pulse"></div>
        <div className="w-4/6 h-4 lg:h-5 bg-primary-4 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonFeaturedCard;

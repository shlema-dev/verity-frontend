import SkeletonFeaturedCard from "./SkeletonFeatureCard";

const SkeletonFeaturedCarousel: React.FC = () => {
  return (
    <div
      className="w-full h-96 my-16 flex items-center justify-center"
      style={{ maxWidth: "90%", margin: "0 auto" }}
    >
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`max-w-[70%] lg:max-w-[100%] absolute ${
            index === 0
              ? "z-20 scale-100"
              : index === 1
              ? "z-10 scale-90 -translate-x-[15%] opacity-50"
              : "z-10 scale-90 translate-x-[15%] opacity-50"
          }`}
        >
          <SkeletonFeaturedCard />
        </div>
      ))}
    </div>
  );
};

export default SkeletonFeaturedCarousel;

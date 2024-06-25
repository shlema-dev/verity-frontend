import FeaturedCard from "./FeaturedCard";

const FeaturedArticles: React.FC = () => {
  return (
    <section className="w-full mt-24 flex flex-col">
      <h2 className="mb-8 pt-8 text-4xl text-center text-gray-12 font-bold">
        Featured Articles
      </h2>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center">
        <FeaturedCard
          title="Florida Enacts Stricter Abortion Legislation"
          img=""
          hook="Why hasn't the number of abortions dropped despite stricter
            laws in states like Florida?"
        />
        <FeaturedCard
          title="Florida Enacts Stricter Abortion Legislation"
          img=""
          hook="Why hasn't the number of abortions dropped despite stricter
            laws in states like Florida?"
        />
        <FeaturedCard
          title="Florida Enacts Stricter Abortion Legislation"
          img=""
          hook="Why hasn't the number of abortions dropped despite stricter
            laws in states like Florida?"
        />
      </div>
    </section>
  );
};

export default FeaturedArticles;

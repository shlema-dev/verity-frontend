import LatestArticles from "./LatestArticles";

const LatestArticlesSection: React.FC = () => {
  return (
    <section className="w-full mt-24 lg:mt-48 mb-24 flex flex-col">
      <h2 className="mt-12 mb-12 lg:mb-24 text-3xl font-medium text-gray-12 text-center">
        Latest Articles
      </h2>
      <LatestArticles />
    </section>
  );
};

export default LatestArticlesSection;

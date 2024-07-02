import Hero from "@/components/home/Hero";
import FeaturedArticles from "@/components/home/featured/FeaturedArticles";
import LatestArticlesSection from "@/components/home/latest/LatestArticlesSection";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mb-12">
      <Hero />
      <FeaturedArticles />
      <LatestArticlesSection />
    </div>
  );
};

export default Home;

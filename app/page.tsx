import FeaturedArticles from "@/components/home/Featured";
import Hero from "@/components/home/Hero";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mb-12">
      <Hero />
      <FeaturedArticles />
    </div>
  );
};

export default Home;

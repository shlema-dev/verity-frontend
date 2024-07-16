import FeaturedArticles from "@/components/home/featured/FeaturedArticles";
import Hero from "@/components/home/hero";
import LatestArticlesSection from "@/components/home/latest/LatestArticlesSection";
import Reveal from "@/components/ui/animation/reveal";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mb-12">
      <Reveal delay={0}>
        <Hero />
      </Reveal>
      <Reveal delay={0}>
        <FeaturedArticles />
      </Reveal>
      <LatestArticlesSection />
    </div>
  );
};

export default Home;

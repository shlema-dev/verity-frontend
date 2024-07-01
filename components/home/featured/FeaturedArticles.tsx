import { Suspense } from "react";
import FeaturedArticlesCarousel from "./FeaturedArticlesCarousel";
import SkeletonFeaturedCarousel from "./SkeletonFeaturedCarousel";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

async function fetchArticles(): Promise<ArticlePreview[]> {
  setTimeout(() => {
    5000;
  });
  const url = "http://localhost:3000/api/articles/featured";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.articles)) {
      throw new Error("Invalid data received from API");
    }

    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

const ArticlesContainer = async () => {
  const articles = await fetchArticles();
  return <FeaturedArticlesCarousel articles={articles} />;
};

const FeaturedArticles: React.FC = () => {
  return (
    <section className="w-full mt-24 lg:mt-48 mb-24 flex flex-col">
      <Suspense fallback={<SkeletonFeaturedCarousel />}>
        <ArticlesContainer />
      </Suspense>
    </section>
  );
};

export default FeaturedArticles;

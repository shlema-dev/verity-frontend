import { Suspense } from "react";
import FeaturedArticlesCarousel from "./FeaturedArticlesCarousel";
import SkeletonFeaturedCarousel from "./SkeletonFeaturedCarousel";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

async function fetchArticles(): Promise<ArticlePreview[]> {
  console.log("Fetching articles...");
  const url = "http://localhost:3000/api/articles/featured";
  console.log("Fetching from URL:", url);

  try {
    const response = await fetch(url);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received data:", data);

    if (!data || !Array.isArray(data.articles)) {
      throw new Error("Invalid data received from API");
    }

    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

const FeaturedArticles: React.FC = async () => {
  const articles = await fetchArticles();

  return (
    <section className="w-full mt-24 mb-24 flex flex-col">
      <h2 className="mb-8 pt-8 lg:mb-24 text-4xl text-center text-gray-12 font-bold">
        Featured Articles
      </h2>
      <Suspense fallback={<SkeletonFeaturedCarousel />}>
        <FeaturedArticlesCarousel articles={articles} />
      </Suspense>
    </section>
  );
};

export default FeaturedArticles;

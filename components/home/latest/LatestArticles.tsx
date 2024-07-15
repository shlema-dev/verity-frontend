"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import SkeletonCard from "./SkeletonCard";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

const LatestArticles: React.FC = () => {
  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async (pageNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3000/api/articles/latest?page=${pageNum}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      return data.articles;
    } catch (err) {
      setError("Failed to load articles.");
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(1).then((newArticles) => setArticles(newArticles));
  }, []);

  const loadMore = async () => {
    const nextPage = page + 1;
    const newArticles = await fetchArticles(nextPage);
    if (newArticles.length > 0) {
      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setPage(nextPage);

      if (newArticles.length < 10) {
        setHasMore(false);
      }
    }
  };

  const renderSkeletons = (count: number) => {
    return Array(count)
      .fill(null)
      .map((_, index) => (
        <div className="mx-0 lg:mx-4 my-4">
          <SkeletonCard key={`skeleton-${index}`} />
        </div>
      ));
  };

  return (
    <div className="w-full flex flex-col gap-12 lg:gap-24">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <div className="mx-0 lg:mx-4 my-4" key={index}>
            <ArticleCard
              key={article.slug}
              title={article.title}
              hook={article.hook}
              slug={article.slug}
            />
          </div>
        ))}
        {loading && renderSkeletons(3)}
        {error && <p className="mt-4 text-center text-error-9">{error}</p>}
      </div>
      {!loading && articles.length > 0 && hasMore && (
        <button
          onClick={loadMore}
          className="w-full md:w-1/2 lg:w-1/4 xl:h-1/4 py-4 self-center bg-primary-3 hover:bg-primary-4 rounded-full border-2 border-primary-6 hover:border-primary-7 text-primary-12"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LatestArticles;

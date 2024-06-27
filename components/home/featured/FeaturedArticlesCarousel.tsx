"use client";

import { motion } from "framer-motion";
import FeaturedCard from "./FeaturedCard";
import { useEffect, useState } from "react";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

interface FeaturedArticlesCarouselProps {
  articles: ArticlePreview[];
}

const FeaturedArticlesCarousel: React.FC<FeaturedArticlesCarouselProps> = ({
  articles,
}) => {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2]);
  const [isPaused, setIsPaused] = useState(false);

  if (!articles || articles.length === 0) {
    return <p>No featured articles available at the moment.</p>;
  }

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPositionIndex((prevIndexes) => {
        const updatedIndexes = prevIndexes.map((prev) => (prev + 1) % 3);
        return updatedIndexes;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const positions = ["center", "left", "right"];

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 2 },
    left: { x: "-30%", scale: 0.7, zIndex: 1 },
    right: { x: "30%", scale: 0.7, zIndex: 1 },
  };

  return (
    <div
      className="w-full h-96 my-16 flex items-center justify-center"
      style={{ maxWidth: "90%", margin: "0 auto" }}
    >
      {articles.map((article, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={cardVariants}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="max-w-[70%] lg:max-w-[100%] absolute"
          onMouseEnter={() =>
            positions[positionIndex[index]] === "center" && setIsPaused(true)
          }
          onMouseLeave={() =>
            positions[positionIndex[index]] === "center" && setIsPaused(false)
          }
        >
          <FeaturedCard
            title={article.title}
            hook={article.hook}
            slug={article.slug}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedArticlesCarousel;

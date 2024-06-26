"use client";

import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { color, motion } from "framer-motion";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const FeaturedArticles: React.FC = () => {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((prevIndexes) => {
        const updatedIndexes = prevIndexes.map((prev) => (prev + 1) % 3);
        return updatedIndexes;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const articleCards = [
    <FeaturedCard
      title="Florida Enacts Stricter Abortion Legislation"
      img=""
      hook="Why hasn't the number of abortions dropped despite stricter
            laws in states like Florida?"
    />,
    <FeaturedCard
      title="Florida Enacts Stricter Abortion Legislation"
      img=""
      hook="Why hasn't the number of abortions dropped despite stricter
            laws in states like Florida?"
    />,
    <FeaturedCard
      title="Florida Enacts Stricter Abortion Legislation"
      img=""
      hook="Why hasn't the number of abortions dropped despite stricter
            laws in states like Florida?"
    />,
  ];

  const positions = ["center", "left", "right"];

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 2 },
    left: { x: "-30%", scale: 0.7, zIndex: 1, opacity: "0.5" },
    right: { x: "30%", scale: 0.7, zIndex: 1, opacity: "0.5" },
  };

  return (
    <section className="w-full mt-24 mb-24 flex flex-col">
      <h2 className="mb-8 pt-8 lg:mb-24 text-4xl text-center text-gray-12 font-bold">
        Featured Articles
      </h2>

      <div
        className="w-full h-96 my-16 flex items-center justify-center"
        style={{ maxWidth: "90%", margin: "0 auto" }}
      >
        {articleCards.map((card, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={cardVariants}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="max-w-[70%] lg:max-w-[100%] absolute"
          >
            {card}
          </motion.div>
        ))}
      </div>

      {/* <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center items-center">
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
      </div> */}
    </section>
  );
};

export default FeaturedArticles;

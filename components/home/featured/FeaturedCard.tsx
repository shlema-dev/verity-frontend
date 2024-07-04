"use client";

import Link from "next/link";
import Image from "next/image";
import SampleImage from "@/public/sample_image.jpg";
import { useState } from "react";

interface FeaturedCardProps {
  title: string;
  hook: string;
  slug: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  hook,
  slug,
}: FeaturedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={`/news/${slug}`}
      className="w-full h-full flex flex-col rounded-xl overflow-hidden border border-4 border-transparent hover:border-primary-9"
    >
      <div className="h-[32rem] overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src={SampleImage}
            alt="cover image"
            quality={100}
            fill
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-10 dark:from-gray-2 to-transparent">
          <div className="absolute inset-x-0 bottom-5 lg:bottom-10 p-4 flex flex-col items-start">
            <h2
              className="mb-4 lg:ml-4 lg:mr-12 text-md lg:text-3xl text-center lg:text-start lg:leading-relaxed text-gray-1 dark:text-gray-12 font-bold pb-2
              "
            >
              <span
                className={`lg:transition-all lg:ease-in-out lg:duration-500 lg:pb-1 lg:bg-gradient-to-r lg:from-primary-11 lg:to-primary-9 lg:bg-no-repeat lg:bg-left-bottom ${
                  isHovered
                    ? "lg:bg-[length:100%_2px]"
                    : "lg:bg-[length:0%_2px]"
                }`}
              >
                {title}
              </span>
            </h2>
            <p className="hidden ml-4 lg:block text-sm lg:text-lg text-start text-gray-2 dark:text-gray-12">
              {hook}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaOptionsType,
  EmblaCarouselType,
  EmblaEventType,
} from "embla-carousel";
import FeaturedCard from "./FeaturedCard";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

interface FeaturedArticlesCarouselProps {
  articles: ArticlePreview[];
}

const TWEEN_FACTOR_BASE = 0.84;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const FeaturedArticlesCarousel: React.FC<FeaturedArticlesCarouselProps> = ({
  articles,
}) => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const tweenFactor = useRef(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  if (!articles || articles.length === 0) {
    return (
      <p className="text-center">
        No featured articles available at the moment.
      </p>
    );
  }

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y">
          {articles.map((article, index) => (
            <div className="flex-[0_0_70%] min-w-0 pl-4" key={index}>
              <FeaturedCard
                title={article.title}
                hook={article.hook}
                slug={article.slug}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:flex lg:justify-center mt-7">
        <div className="grid grid-cols-2 gap-6 items-center">
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full text-gray-11 hover:text-primary-8 border border-gray-11 hover:border-primary-8"
            onClick={() => scrollTo((selectedIndex - 1) % 3)}
          >
            &lt;
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center rounded-full text-gray-11 hover:text-primary-8 border border-gray-11 hover:border-primary-8"
            onClick={() => scrollTo((selectedIndex + 1) % 3)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticlesCarousel;

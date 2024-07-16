"use client";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealProps {
  children: ReactNode;
  delay: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
}: RevealProps) => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    gsap.set(element, {
      y: 50,
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: element,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
        });
      },
      once: false,
    });
  }, [delay]);

  return <div ref={ref}>{children}</div>;
};

export default Reveal;

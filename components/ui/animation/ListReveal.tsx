"use client";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

const ListReveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  return <div ref={elementRef}>{children}</div>;
};

export default ListReveal;

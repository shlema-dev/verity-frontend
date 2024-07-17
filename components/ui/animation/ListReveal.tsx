"use client";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface ListRevealProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;
}

const ListReveal: React.FC<ListRevealProps> = ({
  children,
  delay = 0,
  stagger = 0.15,
}: ListRevealProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listItems = listRef.current?.children;
    if (!listItems) return;

    gsap.fromTo(
      listItems,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        grid: "auto",
        stagger: stagger,
        delay: delay,
        ease: "power3.out",
      }
    );
  }, [delay, stagger]);

  return <div ref={listRef}>{children}</div>;
};

export default ListReveal;

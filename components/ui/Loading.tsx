"use client";
import { motion } from "framer-motion";
import React from "react";

const Loading: React.FC = () => {
  const LoadingDot = {
    display: "block",
    width: "0.75rem",
    height: "0.75rem",
    backgroundColor: "#AD7F58",
    borderRadius: "50%",
  };

  const LoadingContainer = {
    width: "5rem",
    height: "3rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const DotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: "100%",
    },
  };

  return (
    <motion.div
      style={LoadingContainer}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      className="w-full flex justify-center items-center "
    >
      <motion.span
        style={LoadingDot}
        variants={DotVariants}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.span
        style={LoadingDot}
        variants={DotVariants}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.span
        style={LoadingDot}
        variants={DotVariants}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default Loading;

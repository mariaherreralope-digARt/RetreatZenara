"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  stagger?: number; // optional stagger delay
  className?: string;
}

// Parent container variant
const container: (stagger?: number) => Variants = (stagger = 0.2) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  },
});

// Fade up variant for children
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Reveal({ children, stagger = 0.2, className }: RevealProps) {
  // Wrap each child automatically with motion.div + fadeUp
  const animatedChildren = React.Children.map(children, (child) => (
    <motion.div variants={fadeUp}>{child}</motion.div>
  ));

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container(stagger)}
      className={className}
    >
      {animatedChildren}
    </motion.div>
  );
}

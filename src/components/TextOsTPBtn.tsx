"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function TextOsTPBtn() {
  return (
    <motion.section
      id="about"
      className="relative bg-lighter flex justify-center items-center h-auto overflow-hidden pt-16  pb-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        variants={container}
        className="relative z-10 text-dark text-center px-16 md:px-10 py-8 mx-auto md:max-w-4xl space-y-6"
      >
        {React.Children.map(
          [
            <p className="overmotion.section text-darker">Zen Aura</p>,
            <h2 className="heading text-dark md:text-3xl">
              A Sanctuary for Inner Alignment
            </h2>,
            <p className="text-darker paragraph leading-relaxed font-semibold">
              Zenara comes from “Zen” and “Aura” — the meeting point of calm
              awareness and the natural energy that surrounds us. We believe that
              transformation begins when you return to your inner stillness.
            </p>,
            <p className="text-darker paragraph leading-relaxed font-semibold">
              At Zenara, we follow a simple philosophy: balance, presence, and
              conscious living. Every retreat is designed to help you slow down,
              reconnect, and realign with who you truly are — beyond stress,
              noise, and obligations.
            </p>,
            <p className="text-darker paragraph leading-relaxed font-semibold">
              Our mission is to create modern retreat experiences that feel both
              grounding and expansive. Through mindful practices, community
              connection, and nature-based immersion, Zenara guides you toward
              genuine clarity, renewal, and inner peace.
            </p>,
            <button className="btn-squared self-center">
              Discover Our Philosophy
            </button>,
          ],
          (child) => (
            <motion.div variants={fadeUp}>
              {child}
            </motion.div>
          )
        )}
      </motion.div>
    </motion.section>
  );
}

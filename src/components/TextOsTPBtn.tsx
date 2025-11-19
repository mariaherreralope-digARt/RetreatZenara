import { section } from "motion/react-client";
import { motion } from "framer-motion";

export default function TextOsTPBtn() {
  return (
  <section className="relative bg-lighter pb-24 flex justify-center items-center h-auto overflow-hidden pb-16">
      <motion.div
        className="relative z-10  text-dark text-center px-16 md:px-10 py-8  mx-auto md:max-w-4xl "
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="oversection text-darker mb-6">
          Zen Aura
        </p>
        <h2 className="heading text-dark md:text-3xl  mb-6">
          A Sanctuary for Inner Alignment
        </h2>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          Zenara comes from “Zen” and “Aura” — the meeting point of calm awareness and the natural energy that surrounds us. We believe that transformation begins when you return to your inner stillness.
       
        </p>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          At Zenara, we follow a simple philosophy: balance, presence, and conscious living. Every retreat is designed to help you slow down, reconnect, and realign with who you truly are—beyond stress, noise, and obligations.
       
        </p>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          Our mission is to create modern retreat experiences that feel both grounding and expansive. Through mindful practices, community connection, and nature-based immersion, Zenara guides you toward genuine clarity, renewal, and inner peace.
       
        </p>
        <button className="btn-squared  ">
          Discover Our Philosophy
        </button>
      </motion.div>
      </section>
  );
}
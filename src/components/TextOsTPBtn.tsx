import { section } from "motion/react-client";
import { motion } from "framer-motion";

export default function TextOsTPBtn() {
  return (
  <section className="relative bg-lighter py-24 flex justify-center items-center h-[70vh] overflow-hidden pb-16">
      <motion.div
        className="relative z-10  text-dark text-center px-10 py-8 max-w-2xl "
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="oversection text-darker mb-6">
          Visit our studio
        </p>
        <h2 className="heading text-dark md:text-3xl  mb-6">
          Experience the Art of Beauty and Wellness
        </h2>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          Whether you're juggling remote work, building a business, or just
          trying to get through a to-do list without burning out, we’ve got the
          support and tools to help you thrive.<br />
       
        </p>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          Whether you're juggling remote work, building a business, or just
          trying to get through a to-do list without burning out, we’ve got the
          support and tools to help you thrive.<br />
       
        </p>

        <button className="btn-squared  ">
          Our Beauty Studio
        </button>
      </motion.div>
      </section>
  );
}
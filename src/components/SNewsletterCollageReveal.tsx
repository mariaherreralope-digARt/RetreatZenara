"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SNewsletterCollageReveal() {
  const images = [
    {
      src: "/images/collage3.png",
      alt: "Facial treatment",
      className: "top-[15%] right-[10%] md:right-[10%] w-[30vw]",
    },
    {
      src: "/images/collage2.png",
      alt: "Spa bathroom",
      className: "left-[5%] md:left-[18%] top-[15%] w-[30vw]",
    },
    {
      src: "/images/collage1.png",
      alt: "Clay pot",
      className: "bottom-[0%] right-[0%] md:right-[5%] w-[450px]",
    },
    {
      src: "/images/collage4.png",
      alt: "Relaxing face",
      className: "bottom-[5%] left-[5%] w-[450px]",
    },
  ];

  return (
    <section className="relative bg-lighter py-24 flex justify-center items-center h-screen overflow-hidden">
      {/* Background images with animation */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`absolute  overflow-hidden  ${img.className}`}
            initial={{
  opacity: 0,
  scale: 0.4,
  
}}

            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              
            }}
            transition={{
              duration: 1,
              delay: i * 0.3, // slight stagger
              ease: "easeOut",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Central content box */}
      <motion.div
        className="relative z-10 bg-dark text-lighter text-center px-10 py-8 max-w-sm shadow-xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="oversection text-light mb-3">
          Visit our studio
        </p>
        <h2 className="title-italic text-lighter md:text-3xl  italic mb-4">
          Where nature meets your beauty
        </h2>
        <p className="text-light mb-8 paragraph">
          Whether you're juggling remote work, building a business, or just
          trying to get through a to-do list without burning out, we’ve got the
          support and tools to help you thrive.
        </p>
        <button className="btn-squared">
          Our Beauty Studio
        </button>
      </motion.div>
    </section>
  );
}

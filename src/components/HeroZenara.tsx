import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion"
// import { easeInOut } from "framer-motion";

const container = {
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
  show: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], }, },
};


export default function HeroSection() {
  return (
    <motion.section 
    id="home" 
    className="relative bg-light overflow-hidden py-20"
    initial="hidden"
      animate="show"
      // variants={container}
      >

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative">
        {/* Label */}
        <motion.p variants={fadeUp} className="oversection text-dark mb-6 md:mb-0 z-0">
          Return to Yourself
        </motion.p>

        {/* Large centered headline scale-y-120 tracking-[0.07em] uppercase md:text-[10rem]*/}
        <motion.h1 
        initial={{ scale: 1.5, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: 1.8, ease: "easeOut" }} className="text-[6rem] sm:text-[8rem] md:text-[18rem] font-serif font-light text-dark/70  transform leading-none -tracking-[0.05em] z-30 -mt-12">
          zenara
        </motion.h1>

       <motion.div variants={container} className="relative grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-4 -mt-16 z-10 w-full max-w-6xl">
          {/* Left image */}
          <motion.div 
           initial={{ scale: 1, opacity: 0, x: -180 }} animate={{ scale: 1, opacity: 1, x: 0 }} transition={{ duration: 1.8, ease: "easeOut" }} className="relative w-48 h-48  mt-8 md:mt-0 md:w-48 md:h-48 bg-lighter overflow-hidden justify-self-end">
            <Image
              src="/images/collage6.png"
              alt="Best selling wellness retreat"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Center image */}
          <motion.div      
          initial={{ scale: 1, opacity: 0, y: 0 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: 2.8, ease: "easeOut" }}className="relative w-56 h-72 md:w-72 md:h-92  overflow-hidden justify-self-center">
            <Image
              src="/images/collage5.png"
              alt="Wellness retreat experience"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right text block */}
          <motion.div variants={fadeUp} className="text-left justify-self-start w-48 md:w-52 md:h-48 flex flex-col justify-center">
            <h2 className="title text-dark mb-4">
            Where Stillness Becomes Strength
          </h2>
            <p className="paragraph text-darker font-semibold mb-4">
              A place to reconnect with your body, mind, and soul. 
            </p>
            <button className="btn-squared self-start">
              Explore Retreats
            </button>
          </motion.div>
        </motion.div>
      </div>

       

      {/* Optional subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/20 to-lighter pointer-events-none" />
    </motion.section>
  );
}

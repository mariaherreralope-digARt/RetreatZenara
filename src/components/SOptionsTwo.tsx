"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OptionsTwo() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
   

      {/* LEFT SIDE - Content list */}
      <div className="bg-lighter flex flex-col justify-center p-16 md:p-12 lg:p-16 ">
        <div className="space-y-6">
          {/* ITEM 1 */}
          <motion.div
            className="flex items-center justify-between gap-6 "
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="bg-dark px-4 py-2 inline-block title-italic-boxed  mb-2">
                Stillness Within
              </h3>
              <p className="text-darker md:pt-2 md:pr-8 paragraph">
                Meditation, breathwork, and mindfulness sessions that quiet the mind and deepen inner awareness.</p>
                <p className="text-darker md:pt-2 md:pr-8 paragraph">
Ideal for those seeking mental clarity, calm, and emotional balance.
              </p>
            </div>
            <Image
              src="/images/mind.png"
              alt="content calendar"
              width={120}
              height={120}
              className="ded-full object-cover"
            />
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            className="flex items-center justify-between gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="bg-dark px-4 py-2 inline-block title-italic-boxed  mb-2">
               Movement & Renewal
              </h3>
              <p className="text-darker md:pt-2 md:pr-8 paragraph">
                Yoga, somatic practices, and gentle functional movement to release tension and restore vitality.
              </p>
                 <p className="text-darker md:pt-2 md:pr-8 paragraph">
                Perfect if you want to reconnect with your body and feel physically refreshed.
              </p>
            </div>
            <Image
              src="/images/body.png"
              alt="posting schedule"
              width={120}
              height={120}
              className=" object-cover"
            />
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            className="flex items-center justify-between "
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="bg-dark px-4 py-2 inline-block title-italic-boxed  mb-2">
                Mind Expansion
              </h3>
              <p className="text-darker md:pt-2 md:pr-8 paragraph">
                Workshops focused on mental clarity, intuitive insight, and vision-setting for your future path.
              </p>
              <p className="text-darker md:pt-2 md:pr-8 paragraph">
                Designed for those ready to break old patterns and step into inspired direction.
              </p>
            </div>
            <Image
              src="/images/vision.png"
              alt="content creation"
              width={120}
              height={120}
              className=" object-cover"
            />
          </motion.div>
        </div>
      </div>

         {/* RIGHT SIDE - Background image with overlay text */}
      <div className="relative h-[500px] lg:h-auto order-first lg:order-last">
        <Image
          src="/images/soundHealing.png" // background image
          alt="family by the pool"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lighter heading text-center max-w-md">
           OUR <br />Mind, Body & Vision <br />RETREATS
          </h2>
        </motion.div>
      </div>
      {/* <div className="bg-dark  h-12 max-w-7xl mx-auto"></div> */}

    </section>
  );
}

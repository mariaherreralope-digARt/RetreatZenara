"use client";

import Image from "next/image";
import { Heart, Leaf, Sparkles } from "lucide-react";

export default function SpecializationSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center 
    py-32 px-6 lg:px-20 bg-lighter gap-12">
      {/* Left box with vertical text */}
      <div className="relative flex-shrink-0">
        <div className="relative flex items-center justify-center
         bg-dark text-lighter w-72 h-80  ">
          {/* Vertical Text */}
          <span className="absolute -left-14 top-1/2 -translate-y-1/2 -rotate-90 origin-center oversection text-lighter">
            Our Services
          </span>
</div>
          {/* Image */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-72 h-64">
            <Image
              src="/images/collage7.png"
              alt="Interior"
              width={400}
              height={500}
              className="object-cover w-full h-full"
            />
          
        </div>
      </div>

      {/* Right content */}
      <div className="lg:ml-20 mt-8 lg:mt-0 max-w-xl px-12 md:px-0">
        <h2 className="heading text-dark  mb-2">
          Title for your services
        </h2>
        <p className="paragraph text-darker f mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus cum voluptates unde. Molestias optio, dolores provident accusamus quo quidem illo iusto. Non illo laboriosam nulla quasi accusamus sunt aperiam?
        </p>

        {/* Bottom icons/labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center bg-darker text-lighter py-8  text-center font-light">
            <Leaf className="w-4 h-4 text-lighter mb-2" strokeWidth={1} />
            <p className="oversection">SERVICE</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-light py-4 px-6 text-center text-darker ">
            <Heart className="w-4 h-4 text-darker mb-2" strokeWidth={1} />
            <p className="oversection">SERVICE</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-light py-4 px-6 text-center text-darker ">
            <Sparkles className="w-4 h-4 text-darker mb-2" strokeWidth={1} />
            <p className="oversection">SERVICE</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-light py-4 px-6 text-center text-darker ">
            <Leaf className="w-4 h-4 text-darker mb-2" strokeWidth={1} />
            <p className="oversection">SERVICE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

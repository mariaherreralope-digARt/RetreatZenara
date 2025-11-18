"use client";

import React from "react";

export default function SHeadingSVG() {
  return (
    <section className="relative flex flex-col py-6 md:py-12 md:flex-row bg-dark text-white ">
      {/* Left geometric pattern */}
      <div className="relative flex-1 bg-sacred -translate-x-1 transform animate-spin-slow stroke-lighter min-h-[450px] " />
      


      {/* Right content */}
      <div className="relative flex-1 flex flex-col justify-center px-16 md:px-10 py-16">
        <span className="absolute left-0 w-[5px] h-[120px] top-1/2 transform -translate-y-1/2 bg-lighter"></span>
        <h2 className="oversection mb-4">
          OUR EXPERTISE
        </h2>
        <p className="text-light  max-w-md paragraph">
          RJ Investments brings luxury living to the rental market through
          bespoke renovations, at affordable prices with quality property
          management.
        </p>
      </div>
    </section>
  );
}

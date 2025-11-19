"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import HeroRevival from "@/components/HeroZenara";
import OverlapPopularPosts from "@/components/SOverlapPopularPosts";
import SOverlapPortfolioGhost from "@/components/SOverlapPortfolioGhost";
import SFeaturesDivideLineIcons from "@/components/SFeaturesDivideLineIcons";

import Hero from "@/components/HeroVideo";
import OptionsOne from "@/components/SOptionsOne";
import OptionsTwo from "@/components/SOptionsTwo";
import TestimonialsSection from "@/components/STestimonialsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import VerticalButton from "@/components/AddVerticalButton"; 
import GoTopButton from "@/components/AddGoTopButton";
import TextOsTPBtn from "@/components/TextOsTPBtn";


// const paragraph =
//   "Your journey deserves guidance you can trust, an environment that feels safe, and a space designed with intention.";


 
export default function HomePage() {
  // const words = paragraph.split(" ");

  useEffect(() => {
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


    });

  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <HeroRevival /> 
      <TextOsTPBtn />
      <OptionsTwo />
      <OptionsOne />
      <SFeaturesDivideLineIcons />
      <Hero />
      <OverlapPopularPosts />

      <SOverlapPortfolioGhost />
      <Newsletter />
      <TestimonialsSection />
      <Footer />
      <GoTopButton />
      <VerticalButton label="Join Our Next Experience" href="/about" />
    </main>
  );
}

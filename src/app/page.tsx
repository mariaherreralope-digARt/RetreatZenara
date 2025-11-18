"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import HeroHugeTextBottom from "@/components/HeroHugeTextBottom";
import HeroRevival from "@/components/HeroRevival";
import HeroCards from "@/components/HeroBorderLines";
import Overlap2colPT from "@/components/SOverlap2colPT";
import OverlapPopularPosts from "@/components/SOverlapPopularPosts";
import SHeadingSVG from "@/components/SHeadingSVG";
import SOverlapPortfolioGhost from "@/components/SOverlapPortfolioGhost";
import SFeaturesDivideLineIcons from "@/components/SFeaturesDivideLineIcons";
import SNewsletterCollageReveal from "@/components/SNewsletterCollageReveal";
import SOverlapVerticalTextBox from "@/components/SOverlapVerticalTextBox";

import Hero from "@/components/HeroVideo";
import AboutMe from "@/components/SAboutMe";
import Cursos from "@/components/CardsCursos";
import OptionsOne from "@/components/SOptionsOne";
import OptionsTwo from "@/components/SOptionsTwo";
import Collage from "@/components/SCollage";
import TestimonialsSection from "@/components/STestimonialsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import OurPhilosophy from "@/components/SOurPhilosophy";
import WhyUs from "@/components/SWhyUs";
import NewComponentTrial from "@/components/TextNewComponentTrial";
import QASection from "@/components/SQASection";
import VerticalButton from "@/components/AddVerticalButton"; 
import GoTopButton from "@/components/AddGoTopButton";
import TextParallax from "@/components/TextParallax";
import TextParallaxQA from "@/components/TextParallaxQA";
import TextOsTPBtn from "@/components/TextOsTPBtn";


// const paragraph =
//   "Your journey deserves guidance you can trust, an environment that feels safe, and a space designed with intention.";

//   const paragraph1 =
//   "Every journey is unique — that’s why we offer retreats designed to nurture mind, body, and spirit in different ways.";

//   const paragraph2 =
//   "We know you may have questions — here are clear answers to help you feel confident before beginning your journey with us.";
   

 
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
      {/* Background gradient effect */}
      {/* <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div> */}

    <HeroRevival /> 
    {/* <HeroHugeTextBottom /> */}
    {/* <HeroCards /> */}

    <TextOsTPBtn />
    <SOverlapPortfolioGhost />

    {/* <Overlap2colPT /> */}
    {/* <SHeadingSVG /> */}
      <Hero />

    <OverlapPopularPosts />
    {/* <SNewsletterCollageReveal /> */}
    {/* <SOverlapVerticalTextBox /> */}
      {/* <OurPhilosophy /> */}
      {/* <NewComponentTrial paragraph={paragraph} /> */}
      {/* <WhyUs /> */}
      {/* <TextParallax paragraph1={paragraph1} /> */}
    <SFeaturesDivideLineIcons />

      <OptionsOne />

      <OptionsTwo />
      {/* <TextParallaxQA paragraph2={paragraph2} /> */}
      <Newsletter />

      {/* <QASection /> */}
      {/* <Collage /> */}
      <TestimonialsSection />
      <Footer />
      <GoTopButton />
      <VerticalButton label="Book Our Next Retreat" href="/about" />
    </main>
  );
}

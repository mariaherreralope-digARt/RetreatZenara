"use client";

import { useState, useEffect } from "react";
import ContactButton from "@/components/navbar/ContactButton";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-light/30 backdrop-blur" : "bg-light"}`}>
      <div className="flex items-center px-16 h-16">

        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo.png"
            width={150}
            height={64} 
            className="h-16 w-auto"
            alt="Logo"
          />
        </a>

        {/* Desktop Links Experiences nicely groups your 6 retreat types.Upcoming leads to your retreat event cards.Spaces ties to your section with nature, rooms, community, healing.*/}
        <div className="hidden md:flex gap-4 paragraph  text-xs text-dark items-center justify-end pr-12 flex-1  ">
          <a className="">Home</a>
          <a className="">Experiences</a>
          <a className="">Spaces</a>
          <a className="">Upcoming</a>
          <a className="">About</a>
          {/* <a className="">Contact</a> */}
        </div>

        {/* Desktop Contact Button */}
        <ContactButton isMenuOpen={isMenuOpen} scrolled={scrolled} variant="desktop" />

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden ">
          {isMenuOpen ? "X" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4">
          <a className="">Home</a>
          <a className="">Experiences</a>
          <a className="">Spaces</a>
          <a className="">Upcoming</a>
          <a className="">About</a>
          <a className="">Contact</a>

          {/* Mobile Contact Button */}
          <ContactButton isMenuOpen={isMenuOpen} scrolled={scrolled} variant="mobile" />
        </div>
      )}
    </nav>
  );
}

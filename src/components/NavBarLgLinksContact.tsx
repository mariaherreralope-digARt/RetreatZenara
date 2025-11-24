"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactButton from "@/components/navbar/ContactButton";
import Image from "next/image";

export default function NavBarLgLinksContact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeLink, setActiveLink] = useState("#home");

  // NEW grouped nav system
  const leftLinks = [
    { href: "#experiences", label: "Experiences" },
    { href: "#spaces", label: "Spaces" },
    { href: "#upcoming", label: "Upcoming" },
  ];

  const rightLinks = [
    { href: "#method", label: "Our Method"},
    { href: "#about", label: "About" },
    { href: "#home", label: "Home" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-light/50 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-2 w-full">

        {/* LEFT GROUP: Logo + Left Links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <a href="/">
            <Image
              src="/images/logo.png"
              width={150}
              height={64}
              className="h-16 w-auto -mt-2"
              alt="Logo"
            />
          </a>

          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-dark text-sm">
            {leftLinks.map((link, i) => (
              <a
  key={i}
  href={link.href}
  onClick={() => setActiveLink(link.href)}
  className="relative hover:text-primary transition"
>
  {link.label}
  <span
    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-dark transition-all duration-500 origin-left ${
      activeLink === link.href ? "scale-100" : "scale-0 group-hover:scale-100"
    }`}
  ></span>
</a>

            ))}
          </div>
        </div>

        {/* RIGHT GROUP: Right Links + Contact Button */}
        <div className="hidden  md:flex items-center gap-8 text-dark text-sm">
          {rightLinks.map((link, i) => (
            <a
  key={i}
  href={link.href}
  onClick={() => setActiveLink(link.href)}
  className="relative hover:text-primary transition"
>
  {link.label}
  <span
    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-dark transition-all duration-500 origin-left ${
      activeLink === link.href ? "scale-100" : "scale-0 group-hover:scale-100"
    }`}
  ></span>
</a>

          ))}

          {/* Contact Button */}
          <ContactButton
            isMenuOpen={isMenuOpen}
            scrolled={scrolled}
            variant="desktop"
          />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-dark text-lg"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="absolute right-0 md:hidden bg-white w-1/2 px-6 py-4 space-y-4"
        >
          {[...leftLinks, ...rightLinks].map((link, i) => (
            <a key={i} href={link.href} className="block text-dark">
              {link.label}
              {/* Hover + Active underline */}
              {/* <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-dark transition-all duration-300 origin-left ${
                  activeLink === link.href ? "scale-100" : "scale-0 group-hover:scale-100"
                }`}
              ></span> */}
            </a>
            
          ))}

          <ContactButton
            isMenuOpen={isMenuOpen}
            scrolled={scrolled}
            variant="mobile"
          />
        </motion.div>
      )}
    </motion.nav>
  );
}

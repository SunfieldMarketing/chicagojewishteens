"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Day Camp", href: "/day-camp" },
  { name: "About", href: "/about" },
  { name: "Photos", href: "/photos" },
  { name: "Schedule", href: "/schedule" },
  { name: "Parents", href: "/parents" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass dark:glass-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            C
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-xl leading-none uppercase ${scrolled ? "text-primary" : "text-white"}`}>CHICAGO</span>
            <span className={`font-bold text-sm leading-none text-slate-500 uppercase`}>JEWISH TEENS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-semibold hover:text-primary-light transition-colors ${
                scrolled ? "text-slate-700" : "text-white text-shadow-sm"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/parents#contact" className="btn-primary py-2 px-6 text-sm">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg ${scrolled ? "text-slate-800" : "text-white"}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass dark:glass-dark absolute top-full left-0 right-0 flex flex-col p-6 shadow-2xl space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/10 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/parents#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-4"
            >
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_camp_adventure_1775244948212.png" // Updated with generated image path
          alt="Chicago Jewish Teens Summer Camp"
          fill
          priority
          className="object-cover object-center scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-dark rounded-full text-secondary font-bold text-sm tracking-wide uppercase border border-secondary/20 pulse-custom">
            <Star size={16} fill="currentColor" />
            <span>Chicago's Premier Jewish Teen Experience</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
            Invest in their <br />
            <span className="text-secondary drop-shadow-lg">Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-medium">
            "Every boy and girl is a seed and a sapling... which with the passage of time will bring forth fruit." 
            <span className="block mt-2 font-bold text-secondary-light opacity-80">— The Lubavitcher Rebbe</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/day-camp" className="btn-primary flex items-center gap-2 py-4 px-8 text-lg group">
              Explore Our Camps
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="glass-dark hover:bg-white/10 text-white flex items-center justify-center py-4 px-8 text-lg font-bold rounded-full transition-all border border-white/20">
              Learn More
            </Link>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white flex flex-col gap-1">
              <span className="text-secondary text-2xl font-black">20+</span>
              <span className="text-xs uppercase font-bold tracking-widest opacity-80">Years Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white flex flex-col gap-1">
              <span className="text-secondary text-2xl font-black">50+</span>
              <span className="text-xs uppercase font-bold tracking-widest opacity-80">Activites Each Week</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white flex flex-col gap-1">
              <span className="text-secondary text-2xl font-black">10:1</span>
              <span className="text-xs uppercase font-bold tracking-widest opacity-80">Low Teen-Staff Ratio</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Location Badge (Floating) */}
      <div className="absolute hidden lg:flex bottom-16 right-16 items-center gap-4 glass-dark p-6 rounded-3xl border border-white/20 shadow-2xl animate-float">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
          <MapPin size={24} />
        </div>
        <div>
          <span className="block text-white font-black text-lg">Northbrook, IL</span>
          <span className="block text-white/60 text-sm font-bold uppercase tracking-widest">Summer Camp Home</span>
        </div>
      </div>
    </section>
  );
}

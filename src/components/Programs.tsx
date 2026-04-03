"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Calendar, Zap } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Boys Teen Camp",
      date: "June 18th - July 11th",
      price: "$450",
      description: "A bold new concept in Jewish camping. Out-of-state trips, athletics, and authentic Jewish spirit.",
      image: "/teen_extreme_adventure_1775245116190.png", // Using generated adventure image
      tag: "Limited Slots",
      color: "blue",
    },
    {
      title: "Pacific Northwest Adventure",
      date: "Special July Session",
      price: "$4,695",
      description: "The ultimate 2-week camping experience. High-adventure trips and a truly unforgettable summer journey.",
      image: "/hero_camp_adventure_1775244948212.png", // Using hero image for variety
      tag: "Flagship",
      color: "gold",
    },
    {
      title: "Girls Week: Art & Adventure",
      date: "July 17th - July 22nd",
      price: "$375",
      description: "Nurturing camaraderie and friendships through creative art sessions and exciting field trips.",
      image: "/hero_camp_adventure_1775244948212.png", // Re-using for now
      tag: "Hot New!",
      color: "teal",
    },
  ];

  return (
    <section id="camps" className="py-24 bg-slate-50 dark:bg-black/95">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] mb-4 block">Our This Summer Programs</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white leading-[0.9]">
              CHOOSE YOUR <br />
              <span className="text-primary underline decoration-secondary decoration-8">EXPERIENCE</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600 dark:text-slate-400 font-medium">
            Join the ultimate camping experience. Each program is designed to boost self-confidence, responsibility, and Jewish pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col h-full border border-slate-100 dark:border-white/5"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="glass px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-primary shadow-lg border-white/50">
                    {program.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4 text-primary opacity-80">
                  <Calendar size={18} />
                  <span className="font-bold uppercase tracking-wider text-sm">{program.date}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1 leading-relaxed text-lg">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none mb-1">Starting from</span>
                    <span className="text-3xl font-black text-slate-800 dark:text-white">{program.price}</span>
                  </div>
                  <Link href="/day-camp" className="bg-primary text-white p-4 rounded-3xl group-hover:bg-primary-light transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

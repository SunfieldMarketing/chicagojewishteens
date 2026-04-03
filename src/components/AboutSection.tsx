"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Users, Map, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const points = [
    { title: "Senior Leadership", desc: "Hand-picked staff for experience, expertise, and social skills.", icon: Users },
    { title: "Adventurous Trips", desc: "Paintballing, go-karting, fishing, biking, and speed boating.", icon: Map },
    { title: "Jewish Pride", desc: "Bringing the beauty and values of our tradition to life.", icon: Star },
    { title: "Close-knit Group", desc: "Wholesome friendships and inspiration that last forever.", icon: HeartHandshake },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-black/90">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-primary font-black uppercase tracking-[0.2em] mb-4 block">About Our Camp</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            Teen <span className="text-primary underline decoration-slate-200 dark:decoration-slate-700 decoration-[15px] underline-offset-[10px]">eXtreme</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
            As a child grows, so does his ability for self-discovery, adventure, and bonding with friends. Under the leadership of a team of senior staff members, Teen Camp combines out-of-state trips, athletics, and swimming with authentic Jewish spirit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {points.map((point) => (
              <div key={point.title} className="flex flex-col p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  <point.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-800 dark:text-white mb-2">{point.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-primary group inline-flex items-center gap-3">
            Read Our Full Story
            <CheckCircle2 size={24} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>

        {/* Right: Modern Image Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Large Image */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[15px] border-white dark:border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
            <Image
              src="/hero_camp_adventure_1775244948212.png" // Re-using primary high-res image
              alt="Teens at camp"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Glass Card */}
          <div className="absolute -bottom-10 -left-10 md:-left-20 glass dark:glass-dark p-8 rounded-[2.5rem] shadow-2xl max-w-sm border border-white/50 backdrop-blur-2xl animate-float">
             <div className="flex items-center gap-4 mb-4">
               <div className="flex -space-x-3 overflow-hidden">
                 {[1,2,3,4].map(idx => (
                   <div key={idx} className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800 bg-primary/20"></div>
                 ))}
               </div>
               <span className="text-slate-700 dark:text-white/80 font-black text-sm uppercase tracking-widest">Join 500+ Alumni</span>
             </div>
             <p className="text-slate-600 dark:text-slate-400 italic text-sm font-medium leading-relaxed">
               "Teen Camp provides memories, friendships, and inspiration that last a lifetime. My son returned with a new sense of pride."
               <span className="block mt-2 font-black text-slate-800 dark:text-white">— Happy Parent</span>
             </p>
          </div>

          {/* Background Highlight */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-30 blur-3xl -z-10"></div>
          <div className="absolute top-1/2 -left-1/2 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}

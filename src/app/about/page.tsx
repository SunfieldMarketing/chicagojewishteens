"use client";

import SubHero from "@/components/SubHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Map, Star, Waves, Coffee, Heart, Target, Sparkles } from "lucide-react";

const aboutSections = [
  {
    title: "Teen Camp Origins",
    desc: "Teen Camp is proudly founded on 50 years of successful camping principles and experiences here in Chicago. It is a branch of CGI camping, the largest worldwide network of Jewish camping.",
    icon: Star,
    image: "/hero_camp_adventure_1775244948212.png",
  },
  {
    title: "Our Facilities",
    desc: "Located in the heart of Northbrook, our fully air-conditioned spacious indoor facilities and beautiful outdoor fields allow us to provide your son with the finest in teen programming.",
    icon: Map,
    image: "/hero_camp_adventure_1775244948212.png",
  },
  {
    title: "Adventurous Trips",
    desc: "Ice skating, gymnastics, and canoeing on a daily basis. Twice weekly full-day trips include hiking the Indiana Dunes and White Water Rafting on Illinois's Vermillion River.",
    icon: Target,
    image: "/teen_extreme_adventure_1775245116190.png",
  },
  {
    title: "Culture & Identity",
    desc: "Our Jewish Fun Time program makes Judaism come alive and leaves the camper with a deeper sense of their Jewish identity. Dynamic Judaic tutoring and Bar Mitzvah preparation available.",
    icon: Sparkles,
    image: "/hero_camp_adventure_1775244948212.png",
  }
];

export default function AboutPage() {
  return (
    <>
      <SubHero
        title="ABOUT OUR CAMP"
        subtitle="A bold new concept in Jewish camping. Unforgettable, fun, wholesome experiences."
        image="/hero_camp_adventure_1775244948212.png"
      />

      <section className="py-24 bg-white dark:bg-black/90">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mb-20">
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl"><Users size={32} /></div>
             <h4 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white mb-2 underline decoration-secondary decoration-4">Our Staff</h4>
             <p className="text-slate-500 font-medium">Hand-picked for experience, expertise, and good social skills.</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl"><Waves size={32} /></div>
             <h4 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white mb-2 underline decoration-secondary decoration-4">Activities</h4>
             <p className="text-slate-500 font-medium">Expert coaching in baseball, basketball, football, and martial arts.</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl"><Heart size={32} /></div>
             <h4 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white mb-2 underline decoration-secondary decoration-4">Camaraderie</h4>
             <p className="text-slate-500 font-medium">Safe, supervised environments to nourish lifelong friendships.</p>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-xl"><Coffee size={32} /></div>
             <h4 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white mb-2 underline decoration-secondary decoration-4">Meals</h4>
             <p className="text-slate-500 font-medium">Nutritious snacks, lunches, and local Kosher restaurant meals.</p>
           </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 space-y-32">
          {aboutSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em]">
                  <section.icon size={24} />
                  <span>The {section.title}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white leading-[0.9] uppercase tracking-tighter">
                   WE BELIEVE IN <br />
                   <span className="text-primary underline decoration-slate-200 dark:decoration-slate-700 decoration-[15px] underline-offset-[10px]">{section.title}</span>
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed leading-[1.6]">
                  {section.desc}
                </p>
                <div className="h-2 w-24 bg-primary opacity-20 rounded-full"></div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-white/5 aspect-[16/10]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
                </div>
                {/* Floating Abstract Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary opacity-50 blur-3xl -z-10 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-50 dark:bg-black/95">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-20 h-2 bg-primary/20 mx-auto mb-12"></div>
            <p className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white leading-relaxed italic mb-12">
               "Teen Camp mimicking the overnight experience with extended hours and special Shabbatons. A boldness that boosts self-esteem and sparks Jewish curiosity."
            </p>
            <h5 className="text-xl font-bold uppercase tracking-[0.2em] text-primary">Experience the Extreme</h5>
         </div>
      </section>
    </>
  );
}

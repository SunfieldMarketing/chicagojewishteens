"use client";

import SubHero from "@/components/SubHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Star, Trophy, Users, CheckCircle, ChevronRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const campOffers = [
  {
    title: "Boys Teen Camp",
    date: "June 18 - July 11",
    price: "$450",
    features: ["Paintballing", "Go-karting", "Fishing", "Speed Boating", "Martial Arts"],
    image: "/teen_extreme_adventure_1775245116190.png"
  },
  {
    title: "Girls Adventure Week",
    date: "July 17 - July 22",
    price: "$375",
    features: ["Art & Adventure", "Field Trips", "Daily Snacks", "Safe Supervision", "Group Dynamics"],
    image: "/hero_camp_adventure_1775244948212.png"
  }
];

export default function DayCampPage() {
  return (
    <>
      <SubHero
        title="DAY CAMP PROGRAMS"
        subtitle="The ultimate camping experience mimicking an overnight camp."
        image="/teen_extreme_adventure_1775245116190.png"
      />

      <section className="py-24 bg-white dark:bg-black/90">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="max-w-3xl mb-20 text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] mb-4 block">Teen Extreme Concept</span>
              <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white leading-[0.9] uppercase tracking-tighter mb-8">A bold new <span className="text-primary underline decoration-secondary decoration-8">Concept</span> in camping.</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">
                 "Teen Camp is proudly founded on 50 years of successful camping principles. We believe competition is good for growing boys and we stress sportsmanship above all. No benchwarmers at eXtreme Teens."
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {campOffers.map((offer, idx) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-white/5 rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5 group"
                >
                   <div className="relative h-80 w-full">
                      <Image src={offer.image} alt={offer.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent flex items-end p-10">
                         <div className="flex flex-col gap-1">
                            <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm">{offer.date}</span>
                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter">{offer.title}</h3>
                         </div>
                      </div>
                      <div className="absolute top-8 right-8 glass p-4 rounded-3xl font-black text-primary text-xl shadow-2xl">
                         {offer.price}
                      </div>
                   </div>
                   
                   <div className="p-12 space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {offer.features.map(feat => (
                           <div key={feat} className="flex items-center gap-4 group/item">
                              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shadow-md">
                                 <CheckCircle size={16} />
                              </div>
                              <span className="font-bold text-slate-700 dark:text-white/80 uppercase tracking-widest text-sm">{feat}</span>
                           </div>
                         ))}
                      </div>
                      <Link href="/parents#contact" className="w-full btn-primary py-5 rounded-[2rem] flex items-center justify-center gap-3 text-lg font-black group-hover:bg-primary-light transition-all">
                        Register Your Teen Now <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Facilities and Focus */}
      <section className="py-24 bg-slate-900 border-none relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-32 items-center relative z-10">
            <div className="space-y-10 text-white">
               <span className="text-secondary font-black uppercase tracking-[0.3em] mb-4 block">Features & Highligts</span>
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Our Northbrook <span className="text-primary italic">CAMPUS</span></h2>
               <div className="space-y-8">
                  <div className="flex items-start gap-8">
                     <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center shadow-xl border border-white/10 shrink-0 text-primary"><Clock size={32} /></div>
                     <div>
                        <h4 className="text-2xl font-black uppercase tracking-widest text-secondary mb-2">Extended Hours</h4>
                        <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-wider text-sm">Mimicking the overnight camp experience with Late Night trips and special programming.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-8">
                     <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center shadow-xl border border-white/10 shrink-0 text-primary"><MapPin size={32} /></div>
                     <div>
                        <h4 className="text-2xl font-black uppercase tracking-widest text-secondary mb-2">Pristine Fields</h4>
                        <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-wider text-sm">Playing fields for baseball, football, and soccer where teens enjoy hours of sports.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-8">
                     <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center shadow-xl border border-white/10 shrink-0 text-primary"><Trophy size={32} /></div>
                     <div>
                        <h4 className="text-2xl font-black uppercase tracking-widest text-secondary mb-2">Pro Coaching</h4>
                        <p className="text-slate-400 font-medium leading-relaxed uppercase tracking-wider text-sm">Our Sports director ensures the finest instruction is given daily. No benchwarmers.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="relative rounded-[4rem] overflow-hidden aspect-square border-[20px] border-white/5 shadow-[0_0_100px_rgba(0,56,168,0.2)]">
                  <Image src="/hero_camp_adventure_1775244948212.png" alt="Campus Features" fill className="object-cover opacity-80" />
               </div>
               <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] shadow-2xl animate-float">
                  <Zap className="text-primary mb-4" size={40} fill="currentColor" />
                  <span className="block text-4xl font-black text-slate-800">50+</span>
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400">Total Adventures</span>
               </div>
            </div>
         </div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[150px] -z-0 rounded-full"></div>
      </section>
    </>
  );
}

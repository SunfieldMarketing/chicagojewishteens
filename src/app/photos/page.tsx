"use client";

import SubHero from "@/components/SubHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X, Star, Heart, Instagram } from "lucide-react";

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/hero_camp_adventure_1775244948212.png", title: "Yellowstone Adventure", tag: "Trips" },
    { src: "/teen_extreme_adventure_1775245116190.png", title: "Rafting on Vermillion", tag: "Extreme" },
    { src: "/hero_camp_adventure_1775244948212.png", title: "Nature Trail Fun", tag: "Spirit" },
    { src: "/hero_camp_adventure_1775244948212.png", title: "Campground Memories", tag: "Camps" },
    { src: "/teen_extreme_adventure_1775245116190.png", title: "Paintball Action", tag: "Extreme" },
    { src: "/hero_camp_adventure_1775244948212.png", title: "Lake Activities", tag: "Water" },
    { src: "/teen_extreme_adventure_1775245116190.png", title: "Fishing at Flathead", tag: "Trips" },
    { src: "/hero_camp_adventure_1775244948212.png", title: "Candlelit Dinner", tag: "Shabbat" },
  ];

  return (
    <>
      <SubHero
        title="CAMP MEMORIES"
        subtitle="A lifetime investment in your teen, captured in moments."
        image="/hero_camp_adventure_1775244948212.png"
      />

      <section className="py-24 bg-white dark:bg-black/95 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-16 space-y-4">
           <span className="text-primary font-black uppercase tracking-[0.2em] block">Our Gallery</span>
           <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white uppercase leading-none tracking-tighter">Capture the <span className="text-primary underline decoration-secondary decoration-8">Spirit</span></h2>
           <p className="text-slate-500 font-medium max-w-2xl mx-auto">Relive the highlights of our summer sessions. From the Montana peaks to the Northbrook fields.</p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
           {images.map((img, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="relative group break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5 cursor-pointer"
               onClick={() => setSelectedImage(img.src)}
             >
                <Image src={img.src} alt={img.title} width={500} height={500} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center p-6 text-center">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4">
                      <Maximize2 size={24} />
                   </div>
                   <span className="text-white font-black uppercase tracking-widest text-lg mb-1">{img.title}</span>
                   <span className="text-secondary-light font-bold uppercase tracking-widest text-xs opacity-80">{img.tag}</span>
                </div>
                {/* Float Badge */}
                <div className="absolute top-4 right-4 glass p-2 rounded-full text-primary scale-0 group-hover:scale-100 transition-transform">
                   <Heart size={18} fill="currentColor" />
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <a href="https://instagram.com/chicagojewishteens" target="_blank" className="inline-flex items-center gap-4 py-5 px-10 bg-slate-100 dark:bg-white/5 rounded-full font-black uppercase tracking-widest text-slate-700 dark:text-white hover:bg-primary hover:text-white transition-all shadow-xl shadow-slate-100 group">
             Follow us on Instagram <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
           </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 animate-fade-in" onClick={() => setSelectedImage(null)}>
           <button className="absolute top-10 right-10 text-white hover:text-primary transition-colors p-4">
             <X size={44} />
           </button>
           <div className="relative max-w-5xl w-full h-[80vh] rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,56,168,0.4)]" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Fullscreen" className="w-full h-full object-contain" />
           </div>
        </div>
      )}
    </>
  );
}

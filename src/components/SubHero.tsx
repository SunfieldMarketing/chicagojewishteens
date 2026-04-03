"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SubHero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="max-w-4xl pt-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary font-black uppercase tracking-[0.3em] mb-4 block"
        >
          Chicago Jewish Teens
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter"
        >
          {title}
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-6 font-medium italic"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

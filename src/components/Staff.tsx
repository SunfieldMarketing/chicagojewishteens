"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const staff = [
  {
    name: "R' Schneur Scheiman",
    role: "Camp Gan Israel Chicago Director",
    phone: "+1 (847) 485-9770",
    image: "/hero_camp_adventure_1775244948212.png", // Placeholder for now
  },
  {
    name: "R' Zalman Notik",
    role: "Chicago Jewish Teens Director",
    phone: "+1 (847) 452-4609",
    email: "zalman@chicagojewishteens.com",
    image: "/hero_camp_adventure_1775244948212.png", // Placeholder for now
  },
  {
    name: "Dovid Goldshmidt",
    role: "Executive Coordinator",
    phone: "+1 (312) 972-1816",
    email: "info@chicagojewishteens.com",
    image: "/hero_camp_adventure_1775244948212.png", // Placeholder for now
  },
];

export default function Staff() {
  return (
    <section className="py-24 bg-white dark:bg-black/95">
      <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
        <span className="text-primary font-black uppercase tracking-[0.2em] mb-4 block">Our Dedicated Leaders</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white leading-[0.9] uppercase tracking-tighter">
          HEART OF THE <span className="text-primary underline decoration-slate-200 dark:decoration-slate-700 decoration-[15px] underline-offset-[10px]">CAMP</span>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {staff.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl font-black text-white mb-1 uppercase tracking-wider">{member.name}</h4>
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-6 opacity-90">{member.role}</p>
              
              <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-white font-medium hover:text-secondary-light">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <Phone size={14} />
                  </div>
                  {member.phone}
                </a>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-white font-medium hover:text-secondary-light">
                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                      <Mail size={14} />
                    </div>
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

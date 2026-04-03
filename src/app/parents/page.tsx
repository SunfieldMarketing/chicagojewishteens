"use client";

import SubHero from "@/components/SubHero";
import { motion } from "framer-motion";
import { ClipboardList, Coffee, Heart, GraduationCap, Calendar, Mail, FileText, Phone, MessageSquare } from "lucide-react";

export default function ParentsPage() {
  const steps = [
    { title: "Review Program", desc: "Browse our day camps and adventure schedules.", icon: SearchIcon },
    { title: "Contact Us", desc: "Send us an inquiry or call to discuss your teen's needs.", icon: Mail },
    { title: "Enroll Online", desc: "Complete the digital application and secure your spot.", icon: FileText },
    { title: "Orientation", desc: "Join our pre-camp zoom or meeting to meet the staff.", icon: Heart },
  ];

  return (
    <>
      <SubHero
        title="PARENTS AREA"
        subtitle="Entrust your son or daughter with the premier network of Jewish camping."
        image="/hero_camp_adventure_1775244948212.png"
      />

      <section className="py-24 bg-white dark:bg-black/90">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
           {/* Letter Column */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass dark:glass-dark p-12 lg:p-20 rounded-[4rem] shadow-2xl relative"
           >
              <div className="absolute top-10 right-10 rotate-12 opacity-10 text-primary">
                <Mail size={120} strokeWidth={1} />
              </div>
              <span className="text-primary font-black uppercase tracking-[0.2em] mb-4 block">A Message From Zalman Notik</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white leading-[0.9] mb-12 uppercase tracking-tighter">Dear <span className="text-primary underline decoration-secondary decoration-8">Parents</span>,</h2>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                 <p>This summer your son is invited to join a close-knit group of Jewish teens for an unforgettable, fun, wholesome, two month Jewish camp experience.</p>
                 <p>Located close to home in Northbrook, Illinois, Teen Camp resembles the overnight camp program with exciting bi-weekly "Late Nights", an overnight, and special Shabbat programming.</p>
                 <p>Teen Camp 2026's flagship activities include trips to the Indiana Dunes and Michigan adventures, emphasizing camaraderie, good sportsmanship, and teamwork.</p>
                 <p className="font-black text-slate-800 dark:text-white pt-6">This summer make an extreme investment in your teen!</p>
                 <div className="pt-10 flex flex-col gap-1 items-start">
                   <div className="w-20 h-1 bg-primary mb-4 opacity-30"></div>
                   <span className="text-2xl font-black text-primary">Zalman Notik</span>
                   <span className="text-secondary-dark font-bold uppercase tracking-widest text-sm">Director, Chicago Jewish Teens</span>
                 </div>
              </div>
           </motion.div>

           {/* Info Grid Column */}
           <div className="space-y-12">
              <h3 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">Essential Information</h3>
              <div className="grid grid-cols-1 gap-6">
                 <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-6 mb-6">
                       <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg"><Coffee size={28} /></div>
                       <h4 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-wider underline decoration-secondary decoration-4">Nutritious Meals</h4>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">
                       "Nutritious and delicious snacks, lunches, and drinks are served daily. During our extended trips we will serve dinner and several meals at local Kosher restaurants."
                    </p>
                 </div>

                 <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-6 mb-6">
                       <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg"><GraduationCap size={28} /></div>
                       <h4 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-wider underline decoration-secondary decoration-4">Bar Mitzvah Prep</h4>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">
                       "Dynamic Judaic tutoring and personalized Bar-Mitzvah preparation is available for our Bar Mitzvah aged boys. Preparing them with pride and tradition."
                    </p>
                 </div>

                 <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-xl hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-6 mb-6">
                       <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg"><Calendar size={28} /></div>
                       <h4 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-wider underline decoration-secondary decoration-4">Enrollment Steps</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       {steps.map(step => (
                         <div key={step.title} className="flex flex-col gap-2">
                           <span className="text-primary font-black uppercase text-xs tracking-widest">{step.title}</span>
                           <p className="text-slate-400 text-xs font-medium">{step.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call Area with Direct Access */}
      <section id="contact" className="py-24 glass dark:glass-dark border-none">
         <div className="max-w-[1400px] mx-auto px-6 text-center space-y-12">
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-slate-800 dark:text-white">Need Quick <span className="text-primary">Answers?</span></h2>
            <div className="flex flex-wrap justify-center gap-8">
               <a href="tel:+18474524609" className="flex items-center gap-4 bg-primary text-white py-6 px-12 rounded-[2.5rem] shadow-2xl hover:bg-primary-light transition-all transform hover:-translate-y-2 group">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform"><Phone size={24} /></div>
                 <div className="text-left">
                   <span className="block text-xs font-bold uppercase tracking-widest opacity-70">Direct Call</span>
                   <span className="text-2xl font-black">+1 (847) 452-4609</span>
                 </div>
               </a>
               <a href="sms:+18474524609" className="flex items-center gap-4 bg-white text-primary py-6 px-12 rounded-[2.5rem] shadow-2xl border border-slate-100 hover:border-primary transition-all transform hover:-translate-y-2 group">
                 <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform"><MessageSquare size={24} /></div>
                 <div className="text-left">
                   <span className="block text-xs font-bold uppercase tracking-widest opacity-70 text-slate-400">Send a Text</span>
                   <span className="text-2xl font-black">Message Us</span>
                 </div>
               </a>
            </div>
         </div>
      </section>
    </>
  );
}

function SearchIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

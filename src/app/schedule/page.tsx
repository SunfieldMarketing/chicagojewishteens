"use client";

import SubHero from "@/components/SubHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Compass, Tent, Plane, Bike, Anchor, ChefHat } from "lucide-react";

const itinerary = [
  {
    day: "Day 1, July 15",
    title: "The Journey Begins",
    activities: [
      "Fly from Chicago to Billings, MT",
      "Beartooth Hwy Mountain Pass",
      "Yellowstone Exploration",
      "Lamar Valley Wildlife",
      "Washburn Hot Springs",
      "Camp in Yellowstone"
    ],
    icon: Plane,
    image: "/teen_extreme_adventure_1775245116190.png",
  },
  {
    day: "Day 2, July 16",
    title: "Nature's Wonders",
    activities: [
      "Yellowstone Lake",
      "Mammoth Hot Springs",
      "Paradise Valley",
      "Montana Grizzly Encounter",
      "Arrive in Bozeman, MT"
    ],
    icon: Compass,
    image: "/hero_camp_adventure_1775244948212.png",
  },
  {
    day: "Day 3, July 17",
    title: "The Great Outdoors",
    activities: [
      "Lewis and Clark Caverns",
      "Professional Caving Tour",
      "Going-to-the-Sun Road",
      "Glacier National Park",
      "Camping Under Northern Stars"
    ],
    icon: Tent,
    image: "/teen_extreme_adventure_1775245116190.png",
  },
  {
    day: "Day 4, July 18",
    title: "Lakes & Trails",
    activities: [
      "Logan Pass Adventure",
      "High-line Trail Hike",
      "Flathead Lake Fishing",
      "Dinner at Chabad Flathead Valley"
    ],
    icon: Anchor,
    image: "/hero_camp_adventure_1775244948212.png",
  },
  {
    day: "Day 5, July 19",
    title: "Biking & Beach",
    activities: [
      "Hiawatha Mountain Biking",
      "Coeur d'Alene Beach Fun",
      "Spokane, WA",
      "Elegant Candlelit Dinner"
    ],
    icon: Bike,
    image: "/teen_extreme_adventure_1775245116190.png",
  }
];

export default function SchedulePage() {
  return (
    <>
      <SubHero
        title="CAMP SCHEDULE"
        subtitle="Unforgettable Journeys. 5 Days of Pure Adventure."
        image="/teen_extreme_adventure_1775245116190.png"
      />

      <section className="py-24 bg-white dark:bg-black/90">
         <div className="max-w-[1400px] mx-auto px-6 relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 dark:bg-white/5 hidden lg:block -translate-x-1/2"></div>
            
            <div className="space-y-24">
               {itinerary.map((item, idx) => (
                 <motion.div
                   key={item.day}
                   initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   viewport={{ once: true }}
                   className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                 >
                   {/* Content Area */}
                   <div className="lg:w-1/2 text-left lg:text-right space-y-6">
                      <div className={`flex items-center gap-4 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'justify-start'}`}>
                        <div className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20 shrink-0">
                          <item.icon size={32} />
                        </div>
                        <div>
                          <span className="text-secondary-dark font-black uppercase tracking-[0.2em] block mb-1">{item.day}</span>
                          <h3 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter leading-none">{item.title}</h3>
                        </div>
                      </div>
                      
                      <div className={`p-8 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-inner hover:shadow-primary/5 transition-all`}>
                         <ul className={`space-y-4 font-bold text-slate-600 dark:text-slate-400 text-lg uppercase tracking-widest ${idx % 2 === 0 ? 'text-left lg:text-right' : 'text-left'}`}>
                            {item.activities.map(act => (
                              <li key={act} className="flex items-center gap-4">
                                {idx % 2 === 1 && <MapPin className="text-primary hidden lg:block shrink-0" size={20} />}
                                <span className="flex-1">{act}</span>
                                {idx % 2 === 0 && <MapPin className="text-primary hidden lg:block shrink-0" size={20} />}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   {/* Dot in Center */}
                   <div className="hidden lg:flex w-12 h-12 bg-white dark:bg-slate-900 border-4 border-primary rounded-full z-10 items-center justify-center shadow-2xl pulse-custom">
                     <Calendar className="text-primary" size={20} />
                   </div>

                   {/* Image Area */}
                   <div className="lg:w-1/2 w-full h-[400px] relative">
                      <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
                         <Image src={item.image} alt={item.day} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                         <div className="absolute inset-0 bg-primary/20 opacity-40 hover:opacity-0 transition-opacity"></div>
                      </div>
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to action section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="max-w-[1400px] mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Ready for the Adventure?</h2>
            <p className="text-xl md:text-2xl font-medium text-white/70 max-w-2xl mx-auto">Limited spots available for Summer 2026. Secure your place now and join the Teen Extreme.</p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
               <a href="/day-camp" className="px-12 py-5 bg-white text-primary font-black rounded-full text-xl hover:bg-secondary hover:text-primary-dark transition-all transform hover:scale-105">View Day Camp</a>
               <a href="/about" className="px-12 py-5 bg-transparent border-2 border-white/50 text-white font-black rounded-full text-xl hover:bg-white/10 transition-all transform hover:scale-105">Daily Itinerary</a>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-0"></div>
      </section>
    </>
  );
}

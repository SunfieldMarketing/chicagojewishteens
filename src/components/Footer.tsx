"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/5 pt-20 pb-12 text-white">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand Column */}
        <div className="flex flex-col space-y-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none uppercase text-white">CHICAGO</span>
              <span className="font-bold text-sm leading-none text-slate-500 uppercase tracking-widest">JEWISH TEENS</span>
            </div>
          </Link>
          <p className="text-slate-400 font-medium leading-relaxed max-w-xs">
            Founded on 50 years of successful camping principles. Proudly part of the CGI network, the largest worldwide network of Jewish camping.
          </p>
          <div className="flex items-center gap-4">
             <a href="https://facebook.com/ChicAgoJewishTeens/" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all">
               <Facebook size={18} />
             </a>
             <a href="https://instagram.com/chicagojewishteens" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all">
               <Instagram size={18} />
             </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest text-secondary mb-8">Navigation</h4>
          <ul className="space-y-4 font-semibold text-slate-300">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/day-camp" className="hover:text-primary transition-colors">Day Camp</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Our Camp</Link></li>
            <li><Link href="/photos" className="hover:text-primary transition-colors">Photos</Link></li>
            <li><Link href="/schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
            <li><Link href="/parents" className="hover:text-primary transition-colors">Parents Area</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest text-secondary mb-8">Contact Info</h4>
          <ul className="space-y-6 text-slate-300 font-medium">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-primary shrink-0" />
              <span>2095 Landwehr Rd, <br /> Northbrook, IL 60062</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-primary shrink-0" />
              <a href="tel:+18474524609" className="hover:text-primary transition-colors">+1 (847) 452-4609</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-primary shrink-0" />
              <a href="mailto:zalman@chicagojewishteens.com" className="hover:text-primary transition-colors break-all">zalman@chicagojewishteens.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest text-secondary mb-8">Stay Updated</h4>
          <p className="text-slate-400 text-sm font-medium mb-6">Join our mailing list to receive camp updates and enrollment alerts.</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-1 flex">
            <input type="email" placeholder="Email@example.com" className="bg-transparent px-4 py-3 outline-none flex-1 text-sm font-medium" />
            <button className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-xl transition-all font-bold text-sm">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
          © {currentYear} CHICAGO JEWISH TEENS. ALL RIGHTS RESERVED.
        </p>
        <p className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-widest">
          BUILT BY <Link href="/" className="text-primary hover:underline">ANTIGRAVITY</Link> WITH <Heart size={14} className="text-primary animate-pulse" fill="currentColor" />
        </p>
      </div>
    </footer>
  );
}

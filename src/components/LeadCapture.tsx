"use client";

import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function LeadCapture() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 bg-primary/5 -z-10 dark:bg-black/80"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info Column */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-black uppercase tracking-[0.2em] mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white leading-[0.9] mb-10 uppercase tracking-tighter">
            READY TO <span className="text-primary underline decoration-slate-200 dark:decoration-slate-700 decoration-[15px] underline-offset-[10px]">ENROLL?</span>
          </h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center text-primary border border-slate-100 dark:border-white/5">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-800 dark:text-white mb-1">Our Location</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium">2095 Landwehr Rd, Northbrook, IL 60062</p>
                <p className="text-slate-400 text-sm mt-1">Cook County, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center text-primary border border-slate-100 dark:border-white/5">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-800 dark:text-white mb-1">Call / Text</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium underline underline-offset-4 decoration-primary/20">+1 (847) 452-4609</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center text-primary border border-slate-100 dark:border-white/5">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-800 dark:text-white mb-1">Email Us</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium break-all">zalman@chicagojewishteens.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-16 flex items-center gap-6">
             <a href="https://facebook.com/ChicAgoJewishTeens/" target="_blank" className="w-12 h-12 glass dark:glass-dark rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
               <Facebook size={20} />
             </a>
             <a href="https://instagram.com/chicagojewishteens" target="_blank" className="w-12 h-12 glass dark:glass-dark rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
               <Instagram size={20} />
             </a>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass dark:glass-dark p-12 rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-3xl"
        >
          {formState === "success" ? (
             <div className="py-20 text-center">
               <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-large animate-bounce">
                 <CheckCircle2 size={40} />
               </div>
               <h3 className="text-3xl font-black text-slate-800 mb-4">Request Sent!</h3>
               <p className="text-slate-500 font-medium">We'll get back to you within 24 hours.</p>
               <button onClick={() => setFormState("idle")} className="mt-8 text-primary font-bold hover:underline">Send another message</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input required type="text" placeholder="Your Name" className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input required type="email" placeholder="Email@example.com" className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <input required type="text" placeholder="What are you interested in?" className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                <textarea required rows={5} placeholder="Type your message here..." className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white resize-none" />
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className={`w-full btn-primary py-5 rounded-[2rem] flex items-center justify-center gap-3 text-xl group ${formState === "submitting" ? "opacity-70" : ""}`}
              >
                {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-slate-400 text-sm font-medium pt-4">
                By submitting, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function CheckCircle2({ size, className }: { size: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

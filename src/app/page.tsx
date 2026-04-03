import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Programs from "@/components/Programs";
import Staff from "@/components/Staff";
import LeadCapture from "@/components/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Programs />
      <Staff />
      <LeadCapture />
      
      {/* Social Proof Bar */}
      <section className="py-12 glass dark:glass-dark border-none">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
           <div className="flex flex-wrap items-center justify-around gap-12 opacity-40 grayscale contrast-125">
             <span className="text-3xl font-black uppercase tracking-tighter text-slate-400">CHABAD CHICAGO</span>
             <span className="text-3xl font-black uppercase tracking-tighter text-slate-400">GAN ISRAEL</span>
             <span className="text-3xl font-black uppercase tracking-tighter text-slate-400">NORTHBROOK</span>
             <span className="text-3xl font-black uppercase tracking-tighter text-slate-400">TEEN EXTREME</span>
             <span className="text-3xl font-black uppercase tracking-tighter text-slate-400">JUDAICA FUN</span>
           </div>
        </div>
      </section>
    </>
  );
}

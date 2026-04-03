"use client";

import { useEffect, useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-6 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-primary/20 flex items-center p-1 pointer-events-auto w-full max-w-[400px] overflow-hidden">
            {/* Call Now Button */}
            <a
              href="tel:+18474524609"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-full font-bold shadow-lg pulse-custom"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            
            <div className="w-[1px] h-8 bg-gray-200 mx-1"></div>

            {/* Text Now Button */}
            <a
              href="sms:+18474524609"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-primary font-bold hover:bg-slate-50 transition-colors rounded-full"
            >
              <MessageSquare size={18} />
              <span>Text Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

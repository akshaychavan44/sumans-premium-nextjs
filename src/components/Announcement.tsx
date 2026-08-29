"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Sparkles, Truck, ShieldCheck, Instagram } from "lucide-react";

export function Announcement(){
  const messages = [
    { icon: Sparkles, text: "Authentic 2-Taar Lucknowi Chikankari • Curated in Mumbai Since 1999" },
    { icon: Truck, text: "Complimentary Worldwide Express Delivery on Orders Above Rs 5,000" },
    { icon: ShieldCheck, text: "100% Handcrafted • Video Call Verification Available Before Dispatch" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  const CurrentIcon = messages[index].icon;

  return (
    <div className="bg-[#3D0A0A] text-[#FFFBF7] text-[11px] md:text-[12px] tracking-[0.14em] uppercase font-sans border-b border-[#C9A86A]/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.15),transparent_70%)] pointer-events-none"/>
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-2.5 flex justify-between items-center relative z-10">
        <div className="hidden lg:flex items-center gap-2 text-[#E5D2A8]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-ping" />
          <span className="text-[10.5px]">Direct from Lucknow Master Artisans</span>
        </div>

        {/* Center Animated Message */}
        <div className="flex-1 flex justify-center items-center">
          <div key={index} className="flex items-center gap-2 text-center animate-fadeIn duration-500 font-medium">
            <CurrentIcon className="w-3.5 h-3.5 text-[#C9A86A] shrink-0" />
            <span className="tracking-[0.12em]">{messages[index].text}</span>
          </div>
        </div>

        {/* Right CTA Links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://www.instagram.com/sumanslucknowi/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/90 hover:text-[#E5D2A8] transition-colors text-[11px]"
          >
            <Instagram className="w-3 h-3 text-[#E1306C]" />
            <span>@sumanslucknowi</span>
          </a>
          <span className="h-3 w-px bg-white/20" />
          <a 
            href="https://wa.me/919768956956" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-white/90 hover:text-[#E5D2A8] transition-colors text-[11px]"
          >
            <MessageCircle className="w-3 h-3 text-[#25D366]"/>
            <span>WhatsApp: 9768956956</span>
          </a>
        </div>
      </div>
    </div>
  );
}

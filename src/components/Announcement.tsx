import { MessageCircle } from "lucide-react";
export function Announcement(){
  return (
    <div className="bg-[#4A0E0E] text-[#FFFBF7] text-[11px] md:text-[12px] tracking-[0.12em] uppercase font-sans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-2.5 flex flex-wrap justify-center md:justify-between items-center gap-2">
        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-pulse"/>Free Shipping on Orders Above Rs 5000</span>
        <span className="hidden md:block h-3 w-px bg-[#C9A86A]/40"/><span>Worldwide Shipping Available</span><span className="hidden md:block h-3 w-px bg-[#C9A86A]/40"/>
        <span className="flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5 text-[#C9A86A]"/> WhatsApp: 9768956956</span>
      </div>
    </div>
  )
}

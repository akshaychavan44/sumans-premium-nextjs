import { MapPin, Phone, Instagram } from "lucide-react";
export function Footer(){
  return (
    <footer id="footer" className="border-t border-[#E9DDD1] bg-white mt-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-4 gap-10">
        <div><div className="font-serif text-[20px] font-semibold text-[#4A0E0E]">Suman&apos;s लखनवी</div><div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mt-1">Timeless weaves. Tender traditions.</div><div className="font-sans text-[13px] leading-[1.6] text-[#5A4633] mt-4 max-w-[280px]">Authentic Lucknowi Chikankari for over two decades. Pure georgette, Mal Chanderi, Organza — curated in Mumbai, handmade in Lucknow.</div></div>
        <div><div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">Visit Us</div><div className="mt-3 font-sans text-[13px] leading-[1.6] text-[#2B1A0E] flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[#C9A86A] shrink-0"/>Shop 1-3-4, Neelkanth Sadan, Hingwala Lane, Ghatkopar East, Mumbai - 400077</div></div>
        <div><div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">Contact</div><div className="mt-3 space-y-2 font-sans text-[13px]"><div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C9A86A]"/> 9768956956 (WhatsApp)</div><div className="flex items-center gap-2"><Instagram className="w-4 h-4 text-[#C9A86A]"/> @sumanslucknowi</div><div className="text-[#8B7355] text-[12px] mt-2">No COD • Video verification before dispatch • Worldwide shipping</div></div></div>
        <div><div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">Note</div><div className="mt-3 font-sans text-[12px] leading-[1.6] text-[#8B7355]">All pieces are handmade; slight variation in embroidery is the beauty of Chikankari, not a defect. Colors may vary slightly due to lighting.</div></div>
      </div>
      <div className="border-t border-[#E9DDD1] py-4 text-center font-sans text-[11px] text-[#8B7355]">© 2026 Suman&apos;s Lucknowi • Curated with tender traditions</div>
    </footer>
  )
}

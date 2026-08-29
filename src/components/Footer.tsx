import { MapPin, Phone, Instagram, ExternalLink } from "lucide-react";

export function Footer(){
  return (
    <footer id="footer" className="border-t border-[#E9DDD1] bg-white mt-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-[22px] font-semibold text-[#4A0E0E]">Suman&apos;s लखनवी</div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355] mt-1">Timeless weaves. Tender traditions.</div>
          <div className="font-sans text-[13px] leading-[1.7] text-[#5A4633] mt-4 max-w-[280px]">
            Authentic Lucknowi Chikankari for over two decades. Pure georgette, Mal Chanderi, Organza — curated in Mumbai, handmade by master artisans in Lucknow.
          </div>
        </div>

        <div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">Store Location</div>
          <div className="mt-3 font-sans text-[13px] leading-[1.7] text-[#2B1A0E] flex gap-2.5">
            <MapPin className="w-4 h-4 mt-0.5 text-[#C9A86A] shrink-0"/>
            <span>Shop No. 4, Neelkanth Sadan, Hingwala Lane, Opposite Electric Office, Ghatkopar East, Mumbai - 400077</span>
          </div>
          <div className="mt-3 text-[11.5px] font-sans text-[#8B7355] pl-6">
            Mon-Sat: 10:30 AM – 9:00 PM • Sun: 12:30 PM – 8:30 PM
          </div>
        </div>

        <div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">Connect & Follow</div>
          <div className="mt-3 space-y-2.5 font-sans text-[13px]">
            <a 
              href="https://wa.me/919768956956" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#2B1A0E] hover:text-[#4A0E0E] transition"
            >
              <Phone className="w-4 h-4 text-[#25D366]"/> 
              <span>+91 97689 56956 (WhatsApp)</span>
            </a>
            <a 
              href="https://www.instagram.com/sumanslucknowi/reels/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#2B1A0E] hover:text-[#E1306C] transition group"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]"/> 
              <span className="group-hover:underline">@sumanslucknowi (Reels & Feed)</span>
              <ExternalLink className="w-3 h-3 text-[#8B7355]"/>
            </a>
            <div className="text-[#8B7355] text-[12px] pt-1">Worldwide shipping • Video verification before dispatch</div>
          </div>
        </div>

        <div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-semibold">Artisan Handloom Note</div>
          <div className="mt-3 font-sans text-[12.5px] leading-[1.7] text-[#8B7355]">
            All pieces are 100% handcrafted; slight variations in embroidery motifs and dye baths are the signature hallmarks of genuine Chikankari shadow art.
          </div>
        </div>
      </div>
      <div className="border-t border-[#E9DDD1] py-5 text-center font-sans text-[11px] text-[#8B7355] flex flex-col sm:flex-row items-center justify-between max-w-[1440px] mx-auto px-4 md:px-8">
        <div>© 2026 Suman&apos;s Lucknowi • Mumbai & Lucknow</div>
        <div className="mt-2 sm:mt-0 flex items-center gap-4">
          <a href="https://www.instagram.com/sumanslucknowi/reels/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A0E0E] transition flex items-center gap-1">
            <Instagram className="w-3 h-3 text-[#E1306C]"/> Watch Instagram Reels
          </a>
        </div>
      </div>
    </footer>
  );
}

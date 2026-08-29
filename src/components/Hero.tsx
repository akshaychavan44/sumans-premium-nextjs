"use client";

import { ArrowRight, MessageCircle, Sparkles, Instagram, Play, ShieldCheck, Award } from "lucide-react";

export function Hero({ whatsappLink }: any){
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-10">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-6 md:gap-8 items-stretch">
        
        {/* Left Editorial Card */}
        <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FFFBF6] to-[#FAF4ED] rounded-[28px] md:rounded-[36px] border border-[#E9DDD1] p-7 md:p-12 lg:p-14 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(74,14,14,0.08)]">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-br from-[#FFF0DB] via-[#F7E7CE]/40 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"/>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#E5D2A8]/20 rounded-full blur-2xl pointer-events-none"/>

          <div className="relative z-10">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E9DDD1] font-sans text-[11px] tracking-[0.2em] uppercase text-[#8B7355] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C9A86A] animate-pulse"/>
              <span>Since 1999 • Mumbai • Lucknowi Craft</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[40px] sm:text-[54px] lg:text-[66px] leading-[0.94] tracking-[-0.03em] text-[#2B1A0E] mt-6 md:mt-8">
              The Living Art of <br/>
              <span className="italic font-normal text-[#4A0E0E] relative inline-block">
                2-Taar
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A86A] via-[#E5D2A8] to-transparent rounded-full opacity-80" />
              </span> <br/>
              Chikankari
            </h1>

            {/* Subheading */}
            <p className="font-sans text-[15px] md:text-[16.5px] leading-[1.8] text-[#5A4633] mt-6 max-w-[480px]">
              Hand-embroidered by master craftswomen in Chowk, Lucknow. Finished & curated in Ghatkopar East, Mumbai. Every weave is shadow poetry — two gossamer threads on 60gm pure georgette, crisp organza, and festive mal chanderi.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8 md:mt-11">
              <button 
                onClick={()=>document.getElementById("collection")?.scrollIntoView({behavior:"smooth"})} 
                className="h-12 px-8 rounded-full bg-[#4A0E0E] text-[#FFFBF7] font-sans text-[13px] tracking-[0.1em] uppercase font-medium flex items-center gap-2 hover:bg-[#5A1A1A] hover:shadow-[0_12px_28px_rgba(74,14,14,0.35)] hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                <span>Shop Sarees</span>
                <ArrowRight className="w-4 h-4"/>
              </button>

              <a 
                href={whatsappLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-full bg-white border border-[#E9DDD1] text-[#4A0E0E] font-sans text-[13px] tracking-[0.08em] uppercase font-medium flex items-center gap-2 hover:border-[#C9A86A] hover:shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]"/>
                <span>WhatsApp Order</span>
              </a>

              <a
                href="https://www.instagram.com/sumanslucknowi/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 rounded-full bg-[#FFF5EB] border border-[#E9DDD1] text-[#8B7355] font-sans text-[12px] tracking-[0.06em] uppercase font-semibold flex items-center gap-2 hover:text-[#4A0E0E] hover:border-[#C9A86A] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]"/>
                <span>@sumanslucknowi</span>
              </a>
            </div>
          </div>

          {/* Heritage Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#E9DDD1]/90 max-w-[500px]">
            {[
              { k: "25+", v: "Years Heritage", icon: Award },
              { k: "2-Taar", v: "Super Fine Shadow", icon: Sparkles },
              { k: "100%", v: "Artisan Handcrafted", icon: ShieldCheck }
            ].map(s => (
              <div key={s.k} className="group">
                <div className="font-serif text-[26px] md:text-[28px] text-[#4A0E0E] font-medium leading-none">
                  {s.k}
                </div>
                <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-[#8B7355] mt-1.5 font-medium">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Showcase */}
        <div className="relative rounded-[28px] md:rounded-[36px] overflow-hidden min-h-[520px] md:min-h-[640px] bg-[#2B1A0E] border border-[#E9DDD1] group shadow-2xl">
          <img 
            src="/assets/hero/hero-saree.jpg" 
            alt="Suman's Lucknowi Pure Georgette Chikankari Saree" 
            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out" 
          />
          
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30 pointer-events-none"/>

          {/* Floating Luxury Badge 1 (Top Left) */}
          <div className="absolute top-6 left-6 z-20 bg-white/92 backdrop-blur-md rounded-full px-4 py-2 border border-white shadow-lg flex items-center gap-2.5 animate-float">
            <div className="w-6 h-6 rounded-full bg-[#FFF5EB] border border-[#E9DDD1] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]"/>
            </div>
            <span className="font-sans text-[12px] tracking-[0.06em] text-[#4A0E0E] font-semibold">
              Pure Georgette • 60gm
            </span>
          </div>

          {/* Floating Reels Trigger Badge (Top Right) */}
          <a 
            href="https://www.instagram.com/sumanslucknowi/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md text-white rounded-full px-4 py-2 border border-white/25 shadow-xl flex items-center gap-2 hover:bg-black/85 transition-all text-[11.5px] font-sans tracking-wider uppercase font-semibold group/reel animate-float-reverse"
          >
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 bg-[#C9A86A] animate-sound-1" />
              <span className="w-0.5 bg-[#C9A86A] animate-sound-2" />
              <span className="w-0.5 bg-[#C9A86A] animate-sound-3" />
            </div>
            <Instagram className="w-3.5 h-3.5 text-[#E1306C]"/>
            <span>Reels In Action</span>
          </a>

          {/* Bottom Luxury Caption Card */}
          <div className="absolute bottom-6 inset-x-6 z-20 bg-white/85 backdrop-blur-md rounded-[22px] p-5 md:p-6 border border-white/70 shadow-2xl flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#4A0E0E]/10 font-sans text-[10px] tracking-[0.2em] uppercase text-[#4A0E0E] font-semibold">
                Masterpiece Edition
              </div>
              <div className="font-serif italic text-[22px] md:text-[24px] text-[#2B1A0E] mt-1">
                2-Taar Heirloom Shadow Work
              </div>
              <div className="font-sans text-[12.5px] text-[#5A4633] mt-0.5">
                Dense Rai Dana, Phanda & Jaali handcraft on gossamer drape
              </div>
            </div>

            <button 
              onClick={()=>document.getElementById("collection")?.scrollIntoView({behavior:"smooth"})}
              className="px-5 py-2.5 rounded-full bg-[#4A0E0E] text-white font-sans text-[11px] uppercase tracking-widest font-semibold hover:bg-[#5A1A1A] transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

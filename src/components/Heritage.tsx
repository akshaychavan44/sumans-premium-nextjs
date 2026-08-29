import { Sparkles, MapPin, Instagram } from "lucide-react";

export function Heritage(){
  return (
    <section id="heritage" className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="rounded-[28px] md:rounded-[36px] bg-[#2B1A0E] text-[#FFFBF7] p-6 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#C9A86A]/15 rounded-full blur-3xl pointer-events-none"/>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#4A0E0E]/30 rounded-full blur-3xl pointer-events-none"/>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-sans text-[10.5px] tracking-[0.2em] uppercase text-[#C9A86A]">
            <Sparkles className="w-3.5 h-3.5"/>
            Our Living Heritage
          </div>
          <h2 className="font-serif text-[32px] md:text-[46px] leading-[1.05] mt-4 font-normal">
            Twenty-five years, <br/>
            <span className="italic text-[#C9A86A]">one tender stitch</span> at a time.
          </h2>
          <p className="font-sans text-[14px] md:text-[15px] leading-[1.8] text-[#E9DDD1]/85 mt-5 max-w-[480px]">
            Suman&apos;s Lucknowi began in 1999 curating authentic Lucknowi Chikankari. 2-Taar is not just embroidery — it&apos;s shadow poetry. Two delicate threads, 32 traditional stitches, and up to 45 days of devotional artisan handwork on a single saree. We work directly with master craftswomen in Lucknow, finishing and curating each piece at our studio in Ghatkopar East, Mumbai.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/15 max-w-[420px]">
            {[
              { k: "32", v: "Artisan Stitches" },
              { k: "45d", v: "Per Bridal Saree" },
              { k: "60gm", v: "Pure Georgette" }
            ].map(s=>(
              <div key={s.k}>
                <div className="font-serif text-[26px] text-[#C9A86A]">{s.k}</div>
                <div className="font-sans text-[11px] uppercase tracking-widest text-[#E9DDD1]/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2 text-[12px] font-sans text-[#E9DDD1]/80">
              <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0" />
              <span>Chowk, Lucknow ➔ Ghatkopar East, Mumbai</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-[24px] overflow-hidden border border-white/15 shadow-xl bg-black/40 group">
          <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden">
            <img 
              src="/assets/heritage/craft-artisan.jpg" 
              alt="Master artisan handcrafting 2-Taar Chikankari in Lucknow" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10"/>

            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md rounded-full px-3.5 py-1.5 border border-white/20 text-white font-sans text-[11px] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A86A] animate-pulse"/>
              Artisan Workshop • Chowk, Lucknow
            </div>

            <div className="absolute bottom-5 inset-x-5 z-10">
              <div className="bg-black/55 backdrop-blur-md rounded-[16px] p-4 border border-white/15 text-white">
                <div className="font-serif italic text-[17px] md:text-[19px] leading-[1.35] text-[#FFFBF7]">
                  &quot;Rai dana, phanda, jaali — each stitch has a breath. 2-Taar is tender; it only blooms with patience.&quot;
                </div>
                <div className="font-sans text-[11px] text-[#C9A86A] mt-2 font-medium tracking-wide">
                  — Master Artisan, Lucknow Workshop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

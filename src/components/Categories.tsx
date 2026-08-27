import { ArrowRight } from "lucide-react";
const CATEGORY_SAREES = [
  { position: "30% 50%", filter: "sepia(0.06) saturate(1.1)", scale: 1.1 },
  { position: "62% 44%", filter: "sepia(0.14) saturate(1.35) hue-rotate(330deg)", scale: 1.18 },
  { position: "76% 58%", filter: "sepia(0.08) saturate(1.3) hue-rotate(250deg)", scale: 1.16 },
];

export function Categories({ setActiveCategory }: any){
  const cats = [
    { title:"Pure Georgette Sarees", count:"14 Styles", desc:"60gm pure, 2-Taar super fine", grad:"from-[#FFF7EE] to-[#EADDCF]", accent:"Rs 6,300 - 22,000", cat:"Sarees"},
    { title:"Mal Chanderi Suit Sets", count:"09 Styles", desc:"Cotton-silk breathability", grad:"from-[#FFF1D6] to-[#F5D8A0]", accent:"Rs 4,999 - 5,500", cat:"Suits"},
    { title:"Daily Wear Kurtis", count:"12 Styles", desc:"Light chikan for everyday", grad:"from-[#F0E6F5] to-[#D9C2E8]", accent:"Rs 2,099 - 3,500", cat:"Kurtis"},
  ];
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-14">
      <div className="flex items-end justify-between mb-6 md:mb-8"><div><div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A86A]">Curated Edit</div><h2 className="font-serif text-[28px] md:text-[36px] leading-[1.1] text-[#2B1A0E] mt-2">Weaves for every day & forever</h2></div><div className="hidden md:block font-sans text-[12px] text-[#8B7355] max-w-[260px] leading-relaxed">Three essential families, each handpicked for drape, breathability and that unmistakable Lucknowi fall.</div></div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {cats.map((cat, index)=>{
          const sareeLook = CATEGORY_SAREES[index % CATEGORY_SAREES.length];
          return (
          <button key={cat.title} onClick={()=>{setActiveCategory(cat.cat); document.getElementById("collection")?.scrollIntoView({behavior:"smooth"})}} className="group text-left rounded-[20px] border border-[#E9DDD1] overflow-hidden bg-white hover:border-[#C9A86A]/50 transition-all duration-300 hover:shadow-[0_20px_40px_-20px_rgba(74,14,14,0.2)]">
            <div className={`h-[180px] md:h-[200px] bg-gradient-to-br ${cat.grad} relative p-5 overflow-hidden`}><img src="/assets/navbar-bg.png" alt={cat.title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500" style={{ objectPosition: sareeLook.position, filter: sareeLook.filter, transform: `scale(${sareeLook.scale})` }} /><div className={`absolute inset-0 bg-gradient-to-br ${cat.grad} opacity-45 mix-blend-multiply`}/><div className="absolute inset-0 bg-white/15"/><div className="relative flex justify-between"><span className="px-2.5 py-1 rounded-full bg-white text-[10px] tracking-[0.12em] uppercase font-sans border border-[#E9DDD1]">{cat.count}</span><span className="w-8 h-8 rounded-full bg-[#4A0E0E] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform"><ArrowRight className="w-4 h-4"/></span></div><div className="absolute bottom-5 left-5 right-5"><div className="w-14 h-[1px] bg-[#C9A86A] mb-3"/><div className="inline-flex rounded-full bg-white/80 px-3 py-1 font-sans text-[11px] tracking-[0.12em] uppercase text-[#5A4633] backdrop-blur-[1px]">{cat.desc}</div></div></div>
            <div className="p-5"><div className="font-serif text-[20px] leading-tight text-[#2B1A0E]">{cat.title}</div><div className="font-sans text-[12px] text-[#8B7355] mt-1.5">{cat.accent}</div></div>
          </button>
        )})}
      </div>
    </section>
  )
}

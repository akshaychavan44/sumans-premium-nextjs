import { ArrowRight } from "lucide-react";

export function Categories({ setActiveCategory }: any){
  const cats = [
    { 
      title: "Pure Georgette Sarees", 
      count: "14 Styles", 
      desc: "60gm pure, 2-Taar super fine", 
      image: "/assets/categories/cat-sarees.jpg",
      accent: "Rs 6,300 - 22,000", 
      cat: "Sarees"
    },
    { 
      title: "Mal Chanderi Suit Sets", 
      count: "09 Styles", 
      desc: "Cotton-silk breathability", 
      image: "/assets/categories/cat-suits.jpg",
      accent: "Rs 4,999 - 5,500", 
      cat: "Suits"
    },
    { 
      title: "Daily Wear Kurtis", 
      count: "12 Styles", 
      desc: "Light chikan for everyday", 
      image: "/assets/categories/cat-kurtis.jpg",
      accent: "Rs 2,099 - 3,500", 
      cat: "Kurtis"
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8">
        <div>
          <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C9A86A] font-semibold">
            Curated Edit
          </div>
          <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.1] text-[#2B1A0E] mt-2">
            Weaves for every day & forever
          </h2>
        </div>
        <div className="font-sans text-[13px] text-[#8B7355] max-w-[320px] leading-relaxed">
          Three essential families, each handpicked for drape, breathability and that unmistakable Lucknowi fall.
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-7">
        {cats.map((cat)=>{
          return (
            <button 
              key={cat.title} 
              onClick={()=>{
                setActiveCategory(cat.cat); 
                document.getElementById("collection")?.scrollIntoView({behavior:"smooth"});
              }} 
              className="group text-left rounded-[22px] border border-[#E9DDD1] overflow-hidden bg-white hover:border-[#C9A86A] transition-all duration-400 hover:shadow-[0_20px_45px_-18px_rgba(74,14,14,0.25)] flex flex-col"
            >
              <div className="h-[210px] md:h-[230px] relative p-5 overflow-hidden bg-[#2B1A0E]">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-108 transition-transform duration-600 ease-out opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30"/>
                
                <div className="relative flex justify-between items-start z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] tracking-[0.14em] uppercase font-sans border border-white/60 font-medium text-[#4A0E0E] shadow-sm">
                    {cat.count}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#4A0E0E] flex items-center justify-center group-hover:bg-[#4A0E0E] group-hover:text-white group-hover:translate-x-0.5 transition-all shadow-md">
                    <ArrowRight className="w-4 h-4"/>
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <div className="w-10 h-[2px] bg-[#C9A86A] mb-2"/>
                  <div className="inline-flex rounded-full bg-black/50 px-3 py-1 font-sans text-[11px] tracking-[0.1em] uppercase text-white/95 backdrop-blur-md border border-white/20">
                    {cat.desc}
                  </div>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-serif text-[20px] leading-tight text-[#2B1A0E] group-hover:text-[#4A0E0E] transition-colors font-medium">
                    {cat.title}
                  </div>
                  <div className="font-sans text-[12px] text-[#8B7355] mt-1.5 font-medium">
                    {cat.accent}
                  </div>
                </div>
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#C9A86A] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

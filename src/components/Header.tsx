import { ShoppingBag, Search, Menu, Heart } from "lucide-react";

export function Header({ cartCount, search, setSearch, onCartOpen, activeCategory, setActiveCategory, wishlistCount }: any){
  const nav = ["Sarees","Suits","Kurtis","New Arrivals","Our Heritage","Contact"];
  return (
    <header className="sticky top-0 z-30 bg-[url('/assets/navbar-bg.png')] bg-cover bg-center border-b border-white/20 shadow-[0_12px_32px_rgba(43,26,14,0.12)]">
      <div className="bg-[#FFFBF7]/0 py-4 md:py-5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="min-h-[88px] md:min-h-[104px] px-4 md:px-6 flex items-center justify-between rounded-[12px] bg-white/18 backdrop-blur-[2px] border border-white/35 shadow-[0_14px_36px_rgba(0,0,0,0.22)]">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center shrink-0">
              <img src="/assets/logo.png" alt="Suman's Lucknowi - Lakhnavi Saree" className="h-[72px] md:h-[88px] w-auto object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]" />
            </a>
            <nav className="hidden lg:flex items-center gap-7">
              {nav.map((item)=>(
                <button key={item} onClick={()=>{
                  if(["Sarees","Suits","Kurtis","New Arrivals"].includes(item)){
                    setActiveCategory(item);
                    document.getElementById("collection")?.scrollIntoView({behavior:"smooth"});
                  } else if(item==="Our Heritage"){
                    document.getElementById("heritage")?.scrollIntoView({behavior:"smooth"});
                  } else if(item==="Contact"){
                    document.getElementById("footer")?.scrollIntoView({behavior:"smooth"});
                  }
                }} className={`h-10 px-4 rounded-[6px] bg-white/86 border border-white/70 font-sans text-[13px] tracking-[0.08em] uppercase text-black relative shadow-[0_8px_18px_rgba(0,0,0,0.16)] ${activeCategory===item? "font-semibold" : ""}`}>
                  {item}
                  <span className={`absolute bottom-1 left-4 right-4 h-px bg-[#C9A86A] ${activeCategory===item? "opacity-100" : "opacity-0"}`} />
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3.5 w-4 h-4 text-[#F7E8BF]/70"/>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search saree..." className="w-[220px] h-10 pl-10 pr-4 rounded-full bg-white/95 border border-white/25 font-sans text-[13px] placeholder:text-[#8B7355]/70 focus:outline-none focus:border-[#C9A86A] focus:ring-2 focus:ring-[#C9A86A]/20 transition" />
            </div>
            <div className="relative w-10 h-10 rounded-full bg-white/95 border border-white/25 flex items-center justify-center hover:border-[#C9A86A] transition cursor-pointer">
              <Heart className="w-4 h-4 text-[#8B7355]"/>{wishlistCount>0 && <span className="absolute -top-1 -right-1 bg-[#4A0E0E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>}
            </div>
            <button onClick={onCartOpen} className="relative w-10 h-10 rounded-full bg-[#4A0E0E] text-white flex items-center justify-center hover:bg-[#5A1A1A] transition">
              <ShoppingBag className="w-[18px] h-[18px]"/>{cartCount>0 && <span className="absolute -top-1 -right-1 bg-[#C9A86A] text-[#2B1A0E] text-[11px] font-sans w-5 h-5 rounded-full flex items-center justify-center font-semibold">{cartCount}</span>}
            </button>
            <button className="lg:hidden w-10 h-10 rounded-full bg-white/95 border border-white/25 flex items-center justify-center"><Menu className="w-5 h-5"/></button>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

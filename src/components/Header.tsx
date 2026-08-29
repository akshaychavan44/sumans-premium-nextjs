"use client";

import { useState, useRef, useEffect } from "react";
import { ShoppingBag, Search, Menu, Heart, X, Sparkles, Instagram, Phone, MapPin } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function Header({ cartCount, search, setSearch, onCartOpen, activeCategory, setActiveCategory, wishlistCount }: any){
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchResults = search.trim() 
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.fabric.toLowerCase().includes(search.toLowerCase()) || p.color.toLowerCase().includes(search.toLowerCase())).slice(0, 4)
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Sarees", cat: "Sarees" },
    { label: "Suit Sets", cat: "Suits" },
    { label: "Kurtis", cat: "Kurtis" },
    { label: "New Arrivals", cat: "New Arrivals" },
    { label: "Our Heritage", target: "heritage" },
    { label: "Instagram Reels", target: "reels" },
    { label: "Store & Contact", target: "footer" },
  ];

  const handleNavClick = (item: any) => {
    if (item.cat) {
      setActiveCategory(item.cat);
      document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
    } else if (item.target === "heritage") {
      document.getElementById("heritage")?.scrollIntoView({ behavior: "smooth" });
    } else if (item.target === "reels") {
      window.open("https://www.instagram.com/sumanslucknowi/reels/", "_blank");
    } else if (item.target === "footer") {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* Topmost Micro-Bar */}
      <div className="bg-[#260808] text-[#F5EBE1] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-sans py-2 px-4 md:px-8 border-b border-[#C9A86A]/25">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-2 text-[#DFCA9E]">
            <MapPin className="w-3 h-3 text-[#C9A86A]" />
            <span>Ghatkopar East, Mumbai • Est. 1999</span>
          </div>

          <div className="flex-1 text-center font-medium">
            <span className="text-[#DFCA9E] font-semibold">2-Taar Handloom Chikankari</span>
            <span className="mx-2 opacity-40">•</span>
            <span>Worldwide Express Delivery</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#DFCA9E]">
            <a 
              href="https://www.instagram.com/sumanslucknowi/reels/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Instagram className="w-3 h-3 text-[#E1306C]" />
              <span>@sumanslucknowi</span>
            </a>
            <span className="opacity-30">|</span>
            <a 
              href="https://wa.me/919768956956" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-white transition"
            >
              <Phone className="w-3 h-3 text-[#25D366]" />
              <span>+91 97689 56956</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Brand Header */}
      <div className={`bg-[#FFFDFB]/96 backdrop-blur-md border-b border-[#EAE0D5] transition-all duration-300 ${isScrolled ? "shadow-[0_10px_35px_rgba(43,26,14,0.08)] py-2" : "py-3 md:py-4"}`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left Search / Mobile Toggle */}
            <div className="flex items-center gap-3 md:w-1/3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-[#F5ECE2] text-[#2B1A0E] transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Minimal Luxury Search Input */}
              <div ref={searchRef} className="relative hidden md:block w-full max-w-[280px]">
                <div className="flex items-center relative">
                  <Search className="absolute left-3.5 w-4 h-4 text-[#8B7355] pointer-events-none"/>
                  <input 
                    value={search} 
                    onChange={e => {
                      setSearch(e.target.value);
                      setIsSearchOpen(true);
                    }} 
                    onFocus={() => setIsSearchOpen(true)}
                    placeholder="Search pure georgette, color..." 
                    className="w-full h-9 pl-9 pr-8 rounded-full bg-[#FAF5EE] border border-[#E8DCD0] font-sans text-[12px] placeholder:text-[#8B7355]/70 focus:outline-none focus:border-[#C9A86A] focus:bg-white transition-all text-[#2B1A0E]" 
                  />
                  {search && (
                    <button 
                      onClick={() => setSearch("")} 
                      className="absolute right-3 text-[#8B7355] hover:text-[#2B1A0E]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Search Dropdown */}
                {isSearchOpen && search.trim() && (
                  <div className="absolute top-11 left-0 w-[340px] bg-white rounded-[16px] border border-[#E9DDD1] shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-3 z-50 animate-fadeIn">
                    <div className="font-sans text-[10px] uppercase tracking-widest text-[#8B7355] px-2 py-1">
                      Matching Collections ({searchResults.length})
                    </div>
                    {searchResults.length > 0 ? (
                      <div className="space-y-1 mt-1">
                        {searchResults.map(prod => (
                          <div 
                            key={prod.id}
                            onClick={() => {
                              setIsSearchOpen(false);
                              document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-3 p-2 rounded-[10px] hover:bg-[#FAF5EE] cursor-pointer transition"
                          >
                            <img src={prod.image} alt={prod.name} className="w-10 h-12 rounded-[6px] object-cover" />
                            <div className="flex-1 min-w-0">
                              <div className="font-serif text-[13px] text-[#2B1A0E] truncate font-medium">{prod.name}</div>
                              <div className="font-sans text-[11px] text-[#8B7355]">{prod.fabric} • Rs {prod.price.toLocaleString("en-IN")}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 text-center text-[12px] font-sans text-[#8B7355]">
                        No sarees match &ldquo;{search}&rdquo;
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Center Prestige Brand Logo */}
            <div className="flex flex-col items-center justify-center text-center">
              <a href="#" className="inline-flex items-center justify-center group py-1">
                <img 
                  src="/assets/logo-transparent.png" 
                  alt="Suman's Lucknowi" 
                  className={`w-auto object-contain transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(74,14,14,0.08)] group-hover:scale-102 ${
                    isScrolled ? "h-[56px] md:h-[68px]" : "h-[68px] md:h-[84px]"
                  }`}
                />
              </a>
              <div className="font-sans text-[9px] md:text-[9.5px] tracking-[0.35em] uppercase text-[#8B7355] mt-0.5 font-medium">
                Mumbai • Lucknow
              </div>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center justify-end gap-3 md:gap-5 md:w-1/3">
              
              {/* Wishlist Icon */}
              <button 
                onClick={() => {
                  document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative p-2 rounded-full text-[#2B1A0E] hover:text-[#4A0E0E] hover:bg-[#FAF5EE] transition"
                title="View Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlistCount > 0 ? "fill-[#4A0E0E] text-[#4A0E0E]" : "text-[#5A4633]"}`} />
                {wishlistCount > 0 && (
                  <span className="absolute 0 top-1 right-1 bg-[#4A0E0E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Bag Button */}
              <button 
                onClick={onCartOpen} 
                className="relative flex items-center gap-2.5 h-10 px-4 rounded-full bg-[#4A0E0E] text-white hover:bg-[#5A1A1A] transition shadow-md shadow-[#4A0E0E]/20 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-[#DFCA9E]"/>
                <span className="hidden sm:inline font-sans text-[11px] uppercase tracking-widest font-semibold">
                  Bag
                </span>
                {cartCount > 0 && (
                  <span className="bg-[#DFCA9E] text-[#2B1A0E] text-[10px] font-sans font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Couture Navigation Bar (Centered Editorial Links) */}
          <nav className="hidden lg:flex items-center justify-center gap-9 pt-3 mt-2 border-t border-[#EAE0D5]/70">
            {navItems.map((item) => {
              const isActive = activeCategory === item.cat;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`font-sans text-[12px] tracking-[0.22em] uppercase transition-all duration-300 py-1.5 relative group ${
                    isActive 
                      ? "text-[#4A0E0E] font-semibold" 
                      : "text-[#5A4633] hover:text-[#4A0E0E] font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  
                  {/* Subtle Underline Accent */}
                  <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A86A] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`} />
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDFB] border-b border-[#EAE0D5] px-6 py-5 shadow-2xl animate-fadeIn space-y-4">
          <div className="flex items-center relative">
            <Search className="absolute left-3.5 w-4 h-4 text-[#8B7355]"/>
            <input 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              placeholder="Search sarees, suits..." 
              className="w-full h-10 pl-10 pr-4 rounded-full bg-[#FAF5EE] border border-[#E8DCD0] font-sans text-[13px] text-[#2B1A0E]"
            />
          </div>

          <div className="space-y-1.5 pt-2">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`w-full py-3 px-4 rounded-[12px] text-[13px] font-sans uppercase tracking-[0.16em] text-left transition ${
                  activeCategory === item.cat 
                    ? "bg-[#4A0E0E] text-white font-semibold" 
                    : "text-[#2B1A0E] hover:bg-[#FAF5EE]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE0D5] flex flex-col gap-2 font-sans text-[12px] text-[#8B7355]">
            <a 
              href="https://www.instagram.com/sumanslucknowi/reels/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#E1306C]"
            >
              <Instagram className="w-4 h-4" /> 
              <span>Watch Reels @sumanslucknowi</span>
            </a>
            <div className="flex items-center gap-2 text-[#5A4633]">
              <MapPin className="w-4 h-4 text-[#C9A86A]" />
              <span>Shop No. 4, Neelkanth Sadan, Ghatkopar East, Mumbai</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

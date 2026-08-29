"use client";

import { FABRICS, COLORS } from "../data/products";
import { SlidersHorizontal, RotateCcw, Check, Sparkles } from "lucide-react";

export function Filters({ activeCategory, setActiveCategory, selectedFabrics, setSelectedFabrics, selectedColors, setSelectedColors, priceMax, setPriceMax, setSearch, search }: any){
  const hasActiveFilters = selectedFabrics.length > 0 || selectedColors.length > 0 || priceMax < 22000 || activeCategory !== "All" || search.length > 0;

  const resetAll = () => {
    setSelectedFabrics([]);
    setSelectedColors([]);
    setPriceMax(22000);
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <aside className="lg:w-[280px] shrink-0">
      <div className="lg:sticky lg:top-[120px] space-y-5">
        
        {/* Header & Reset */}
        <div className="flex items-center justify-between bg-white p-4 rounded-[18px] border border-[#E9DDD1] shadow-xs">
          <div className="flex items-center gap-2 font-serif text-[17px] font-semibold text-[#2B1A0E]">
            <SlidersHorizontal className="w-4 h-4 text-[#C9A86A]" />
            <span>Refine Weaves</span>
          </div>
          {hasActiveFilters && (
            <button 
              onClick={resetAll} 
              className="flex items-center gap-1 font-sans text-[11px] tracking-[0.08em] uppercase font-semibold text-[#4A0E0E] hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="bg-white rounded-[20px] border border-[#E9DDD1] p-5 shadow-xs">
          <div className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B7355] font-semibold mb-3">
            Collection Category
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Sarees", "Suits", "Kurtis", "New Arrivals"].map(c => {
              const isSelected = activeCategory === c;
              return (
                <button 
                  key={c} 
                  onClick={() => setActiveCategory(c)} 
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-sans tracking-wide transition-all duration-300 ${
                    isSelected 
                      ? "bg-[#4A0E0E] text-white font-semibold shadow-sm shadow-[#4A0E0E]/30 scale-102" 
                      : "bg-[#FFFBF7] text-[#2B1A0E] border border-[#E9DDD1] hover:border-[#C9A86A] hover:bg-white"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fabric Filter */}
        <div className="bg-white rounded-[20px] border border-[#E9DDD1] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B7355] font-semibold">
              Fabric Weave
            </span>
            {selectedFabrics.length > 0 && (
              <span className="text-[10px] bg-[#4A0E0E]/10 text-[#4A0E0E] font-bold px-2 py-0.5 rounded-full">
                {selectedFabrics.length} selected
              </span>
            )}
          </div>

          <div className="space-y-2">
            {FABRICS.map((f: string) => {
              const checked = selectedFabrics.includes(f);
              return (
                <label 
                  key={f} 
                  className={`flex items-center justify-between p-2 rounded-[12px] cursor-pointer transition-colors ${
                    checked ? "bg-[#FFF5EB] border border-[#E9DDD1]" : "hover:bg-[#FAF6F0]"
                  }`}
                >
                  <span className={`font-sans text-[13px] ${checked ? "font-semibold text-[#4A0E0E]" : "text-[#5A4633]"}`}>
                    {f}
                  </span>
                  <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={e => { 
                      if (e.target.checked) setSelectedFabrics([...selectedFabrics, f]); 
                      else setSelectedFabrics(selectedFabrics.filter((x: string) => x !== f));
                    }} 
                    className="w-4 h-4 rounded border-[#E9DDD1] text-[#4A0E0E] focus:ring-[#C9A86A]/40"
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Color Filter */}
        <div className="bg-white rounded-[20px] border border-[#E9DDD1] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B7355] font-semibold">
              Palette & Color
            </span>
            {selectedColors.length > 0 && (
              <span className="text-[10px] bg-[#4A0E0E]/10 text-[#4A0E0E] font-bold px-2 py-0.5 rounded-full">
                {selectedColors.length} selected
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {COLORS.map((c: any) => {
              const isSelected = selectedColors.includes(c.name);
              return (
                <button 
                  key={c.name} 
                  onClick={() => { 
                    if (isSelected) setSelectedColors(selectedColors.filter((x: string) => x !== c.name)); 
                    else setSelectedColors([...selectedColors, c.name]);
                  }} 
                  className={`relative w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? "ring-2 ring-[#4A0E0E] scale-110 shadow-md border-white" 
                      : "border-black/10 hover:scale-105 shadow-2xs"
                  }`} 
                  style={{ background: c.hex }} 
                  title={c.name}
                >
                  {isSelected && (
                    <Check className={`w-3.5 h-3.5 ${["White", "Ivory", "Mint"].includes(c.name) ? "text-[#4A0E0E]" : "text-white"}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Slider */}
        <div className="bg-white rounded-[20px] border border-[#E9DDD1] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B7355] font-semibold">
              Max Price
            </span>
            <span className="font-serif text-[16px] font-bold text-[#4A0E0E]">
              Rs {priceMax.toLocaleString("en-IN")}
            </span>
          </div>

          <input 
            type="range" 
            min={2000} 
            max={22000} 
            step={500} 
            value={priceMax} 
            onChange={e => setPriceMax(Number(e.target.value))} 
            className="w-full accent-[#4A0E0E] cursor-pointer"
          />

          <div className="flex justify-between font-sans text-[11px] text-[#8B7355] mt-2">
            <span>Rs 2,000</span>
            <span>Rs 22,000</span>
          </div>
        </div>

        {/* Store Walkthrough Helper */}
        <div className="bg-gradient-to-br from-[#4A0E0E] to-[#2B1A0E] text-white p-5 rounded-[22px] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A86A]/20 rounded-full blur-xl pointer-events-none" />
          <div className="font-serif text-[16px] font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C9A86A]" />
            <span>Need Custom Drape?</span>
          </div>
          <p className="font-sans text-[12px] leading-relaxed text-white/80 mt-2">
            Looking for a specific pastel shade or bridal customization? Contact our Ghatkopar studio stylists on WhatsApp.
          </p>
          <a
            href="https://wa.me/919768956956?text=Hi!%20I%20need%20custom%20saree%20styling%20advice"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-sans text-[11px] uppercase tracking-wider font-semibold text-[#E5D2A8] hover:underline"
          >
            Chat with Stylist →
          </a>
        </div>
      </div>
    </aside>
  );
}

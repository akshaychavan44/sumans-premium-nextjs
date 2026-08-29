"use client";

import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Categories } from "./Categories";
import { Filters } from "./Filters";
import { ProductGrid } from "./ProductGrid";
import { CartDrawer } from "./CartDrawer";
import { QuickView } from "./QuickView";
import { Heritage } from "./Heritage";
import { InstagramReels } from "./InstagramReels";
import { Footer } from "./Footer";
import { Truck } from "lucide-react";

export default function App(){
  const [cart, setCart] = useState<{product: any; qty: number}[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [quickView, setQuickView] = useState<any>(null);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState(22000);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(()=>{ if(quickView || cartOpen) document.body.style.overflow="hidden"; else document.body.style.overflow="auto"; }, [quickView, cartOpen]);

  const addToCart = (product: any) => {
    setCart(prev=>{
      const f = prev.find((p:any)=>p.product.id===product.id);
      if(f) return prev.map((p:any)=> p.product.id===product.id? {...p, qty: p.qty+1} : p);
      return [...prev, {product, qty:1}];
    });
    setCartOpen(true);
  };
  const updateQty = (id:number, delta:number) => {
    setCart(prev=> prev.map((p:any)=> p.product.id===id? {...p, qty: Math.max(1, p.qty+delta)} : p));
  };
  const removeFromCart = (id:number) => setCart(prev=> prev.filter((p:any)=>p.product.id!==id));
  const toggleWishlist = (id:number) => setWishlist(prev=> prev.includes(id)? prev.filter(x=>x!==id) : [...prev, id]);

  const cartCount = cart.reduce((a:any,b:any)=>a+b.qty,0);
  const cartTotal = cart.reduce((a:any,b:any)=>a+b.product.price*b.qty,0);

  const filtered = useMemo(()=>{
    return PRODUCTS.filter(p=>{
      if(activeCategory!=="All" && p.category!==activeCategory && activeCategory!=="New Arrivals") return false;
      if(activeCategory==="New Arrivals" && !p.isNew) return false;
      if(search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if(selectedFabrics.length && !selectedFabrics.includes(p.fabric)) return false;
      if(selectedColors.length && !selectedColors.includes(p.color)) return false;
      if(p.price>priceMax) return false;
      return true;
    });
  }, [search, selectedFabrics, selectedColors, priceMax, activeCategory]);

  const whatsappLink = (product?: any) => {
    const text = product? `Hi Suman's Lucknowi! I'm interested in ${product.name} (Rs ${product.price}). Is it available?` : "Hi Suman's Lucknowi! I'd like to know more about your Chikankari collection.";
    return `https://wa.me/919768956956?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] text-[#2B1A0E] antialiased selection:bg-[#C9A86A]/30 overflow-x-hidden">
      <Header cartCount={cartCount} wishlistCount={wishlist.length} search={search} setSearch={setSearch} onCartOpen={()=>setCartOpen(true)} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <Hero whatsappLink={whatsappLink}/>
      <Categories setActiveCategory={setActiveCategory}/>
      <section id="collection" className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <Filters activeCategory={activeCategory} setActiveCategory={setActiveCategory} selectedFabrics={selectedFabrics} setSelectedFabrics={setSelectedFabrics} selectedColors={selectedColors} setSelectedColors={setSelectedColors} priceMax={priceMax} setPriceMax={setPriceMax} search={search} setSearch={setSearch}/>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="font-sans text-[12px] text-[#8B7355]">Showing {filtered.length} of {PRODUCTS.length} • Handmade in Lucknow</div>
              <div className="flex items-center gap-2 font-sans text-[11px] tracking-[0.12em] uppercase text-[#8B7355]"><Truck className="w-4 h-4 text-[#C9A86A]"/> Worldwide shipping • No COD</div>
            </div>
            <ProductGrid products={filtered} onAdd={addToCart} onView={setQuickView} onToggleWishlist={toggleWishlist} wishlist={wishlist} whatsappLink={whatsappLink}/>
            {filtered.length===0 && <div className="py-24 text-center bg-white rounded-[20px] border border-dashed border-[#E9DDD1]"><div className="font-serif text-[20px]">No weaves match your filter</div><div className="font-sans text-[13px] text-[#8B7355] mt-2">Try clearing fabric or color filters.</div><button onClick={()=>{setSelectedFabrics([]); setSelectedColors([]); setPriceMax(22000); setSearch("");}} className="mt-5 h-10 px-5 rounded-full bg-[#4A0E0E] text-white font-sans text-[12px] uppercase tracking-wide">Reset filters</button></div>}
          </div>
        </div>
      </section>
      <InstagramReels whatsappLink={whatsappLink}/>
      <Heritage/>
      <Footer/>
      <CartDrawer cart={cart} open={cartOpen} onClose={()=>setCartOpen(false)} onQty={updateQty} onRemove={removeFromCart} cartTotal={cartTotal}/>
      <QuickView product={quickView} onClose={()=>setQuickView(null)} onAdd={addToCart} whatsappLink={whatsappLink}/>
    </div>
  )
}

"use client";

import { useState } from "react";
import { Play, Instagram, ExternalLink, Heart, Eye, Volume2, Sparkles, X, Share2, MessageCircle } from "lucide-react";
import { INSTAGRAM_REELS, InstagramReel } from "../data/products";

export function InstagramReels({ whatsappLink }: { whatsappLink: (product?: any) => string }) {
  const [activeReel, setActiveReel] = useState<InstagramReel | null>(null);
  const [likedReels, setLikedReels] = useState<string[]>([]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReels(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-20 border-t border-[#E9DDD1]/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5EB] border border-[#E9DDD1] font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B7355]">
            <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Trending on Instagram</span>
          </div>
          <h2 className="font-serif text-[30px] md:text-[42px] leading-[1.05] text-[#2B1A0E] mt-3">
            Watch Our Weaves in Motion
          </h2>
          <p className="font-sans text-[14px] text-[#8B7355] mt-2 max-w-[500px]">
            Follow <a href="https://www.instagram.com/sumanslucknowi/reels/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#4A0E0E] underline decoration-[#C9A86A] underline-offset-4 hover:text-[#C9A86A] transition">@sumanslucknowi</a> for daily live draping tests, Lucknow artisan workshops, and behind-the-scenes craft reels.
          </p>
        </div>

        <a
          href="https://www.instagram.com/sumanslucknowi/reels/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-sans text-[12px] tracking-[0.08em] uppercase font-semibold shadow-[0_10px_25px_-5px_rgba(225,48,108,0.35)] hover:opacity-95 hover:scale-[1.02] transition-all self-start md:self-auto"
        >
          <Instagram className="w-4 h-4" />
          <span>View All Reels</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Reels Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 md:gap-5">
        {INSTAGRAM_REELS.map((reel) => {
          const isLiked = likedReels.includes(reel.id);
          return (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative rounded-[20px] md:rounded-[24px] overflow-hidden bg-[#2B1A0E] aspect-[9/16] cursor-pointer shadow-md hover:shadow-[0_20px_40px_-15px_rgba(74,14,14,0.35)] transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Thumbnail */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

              {/* Top Badges */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                <span className="px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 font-sans text-[9px] tracking-wide text-white uppercase font-medium">
                  {reel.category}
                </span>
                <button
                  onClick={(e) => toggleLike(reel.id, e)}
                  aria-label="Like reel"
                  className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#E1306C] transition"
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-[#E1306C] text-[#E1306C]" : "text-white"}`} />
                </button>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/60 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-white group-hover:text-[#4A0E0E] transition-all duration-300 shadow-lg">
                  <Play className="w-5 h-5 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-3 md:p-3.5 z-10 text-white flex flex-col justify-end">
                <div className="flex items-center gap-1.5 font-sans text-[10px] text-white/80">
                  <Eye className="w-3 h-3 text-[#C9A86A]" />
                  <span>{reel.views} views</span>
                  <span>•</span>
                  <span>{reel.duration}</span>
                </div>

                <h3 className="font-serif text-[13px] md:text-[14px] leading-tight font-medium mt-1 line-clamp-2 text-white/95">
                  {reel.title}
                </h3>

                <div className="mt-2 flex items-center gap-1 font-sans text-[9px] text-white/70 truncate">
                  <Volume2 className="w-2.5 h-2.5 text-[#C9A86A] shrink-0" />
                  <span className="truncate">{reel.audio}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reel Modal Popup */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setActiveReel(null)}
            className="absolute inset-0 bg-[#2B1A0E]/60 backdrop-blur-md"
          />
          <div className="relative w-full max-w-[840px] bg-[#FFFBF7] rounded-[24px] md:rounded-[32px] border border-[#E9DDD1] shadow-[0_30px_90px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]">
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-[#E9DDD1] flex items-center justify-center shadow hover:bg-white transition"
            >
              <X className="w-4 h-4 text-[#2B1A0E]" />
            </button>

            {/* Reel Video Frame Preview */}
            <div className="md:w-[48%] bg-black relative aspect-[9/16] md:aspect-auto md:min-h-[500px] overflow-hidden flex items-center justify-center">
              <img
                src={activeReel.thumbnail}
                alt={activeReel.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              <div className="relative z-10 flex flex-col items-center text-center p-6 text-white">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/70 flex items-center justify-center text-white mb-4 shadow-xl">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
                <span className="font-sans text-[12px] tracking-widest uppercase text-white/90 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  Instagram Reel
                </span>
                <span className="font-serif italic text-[18px] mt-2 text-white/95">{activeReel.title}</span>
              </div>
            </div>

            {/* Reel Details & Actions */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-serif text-[14px] font-bold text-[#4A0E0E]">
                      S
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-[13px] font-semibold text-[#2B1A0E] flex items-center gap-1.5">
                      <span>sumanslucknowi</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                      <span className="text-[11px] font-normal text-[#8B7355]">Follow</span>
                    </div>
                    <div className="font-sans text-[11px] text-[#8B7355]">Lucknow Craft • Mumbai Boutique</div>
                  </div>
                </div>

                <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.15] text-[#2B1A0E] mt-5">
                  {activeReel.title}
                </h3>

                <p className="font-sans text-[13.5px] leading-[1.7] text-[#5A4633] mt-3 bg-[#FFF5EB]/60 p-4 rounded-[16px] border border-[#E9DDD1]">
                  {activeReel.caption}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-[12px] bg-white border border-[#E9DDD1]">
                    <div className="font-sans text-[10px] tracking-widest uppercase text-[#8B7355]">Audio Track</div>
                    <div className="font-sans text-[11.5px] font-medium text-[#2B1A0E] mt-0.5 truncate">{activeReel.audio}</div>
                  </div>
                  <div className="p-3 rounded-[12px] bg-white border border-[#E9DDD1]">
                    <div className="font-sans text-[10px] tracking-widest uppercase text-[#8B7355]">Reel Engagement</div>
                    <div className="font-sans text-[11.5px] font-medium text-[#2B1A0E] mt-0.5">{activeReel.views} views • {activeReel.likes} likes</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 mt-6 pt-4 border-t border-[#E9DDD1]">
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-sans text-[12px] tracking-[0.08em] uppercase font-semibold flex items-center justify-center gap-2 hover:opacity-95 transition shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Open & Watch on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={whatsappLink({ name: activeReel.title, price: 0 })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-full bg-white border border-[#E9DDD1] text-[#4A0E0E] font-sans text-[12px] tracking-[0.08em] uppercase font-semibold flex items-center justify-center gap-2 hover:border-[#C9A86A] transition"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Inquire About This Piece on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

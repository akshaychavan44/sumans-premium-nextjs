export function SareePreview({ product, compact = false }: any) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute ${compact ? "left-[13%] right-[9%] top-[22%] h-[50%]" : "left-[8%] right-[8%] top-[20%] h-[54%]"} rounded-[55%_45%_52%_48%/36%_58%_42%_64%] bg-white/55 shadow-[0_18px_34px_rgba(43,26,14,0.18)] rotate-[-10deg]`}>
        <div className="absolute inset-0 rounded-[inherit] opacity-85" style={{ background: product.colorHex }} />
        <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(115deg,rgba(255,255,255,0.75),rgba(255,255,255,0.15)_42%,rgba(74,14,14,0.12))]" />
        <div className="absolute inset-0 rounded-[inherit] opacity-45 bg-[radial-gradient(circle_at_28%_34%,white_1px,transparent_1.6px)] bg-[length:18px_18px]" />
      </div>
      <div className={`absolute ${compact ? "left-[34%] top-[16%] w-[38%] h-[66%]" : "left-[36%] top-[13%] w-[34%] h-[70%]"} rounded-[44%_56%_48%_52%/16%_18%_82%_84%] bg-white/70 border border-white/55 shadow-[0_20px_40px_rgba(43,26,14,0.16)] rotate-[7deg] overflow-hidden`}>
        <div className="absolute inset-0 opacity-90" style={{ background: product.colorHex }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.65),rgba(255,255,255,0.1)_28%,rgba(0,0,0,0.08)_70%,rgba(255,255,255,0.35))]" />
        <div className="absolute inset-y-0 left-[18%] w-px bg-white/55" />
        <div className="absolute inset-y-0 left-[38%] w-px bg-white/35" />
        <div className="absolute inset-y-0 left-[59%] w-px bg-white/35" />
        <div className="absolute inset-y-0 left-[80%] w-px bg-white/45" />
      </div>
      <div className={`absolute ${compact ? "left-[5%] bottom-[16%] w-[72%] h-[20%]" : "left-[4%] bottom-[12%] w-[76%] h-[22%]"} rounded-[100%] border-t-[10px] border-white/55 rotate-[-8deg] opacity-90`} />
      <div className={`absolute ${compact ? "right-[10%] bottom-[20%] w-[34%] h-[28%]" : "right-[9%] bottom-[17%] w-[36%] h-[30%]"} rounded-[70%_30%_58%_42%/64%_42%_58%_36%] bg-white/45 shadow-[0_12px_24px_rgba(43,26,14,0.12)] rotate-[17deg]`}>
        <div className="absolute inset-0 rounded-[inherit] opacity-70" style={{ background: product.colorHex }} />
        <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_35%_45%,white_1px,transparent_1.6px)] bg-[length:16px_16px] opacity-45" />
      </div>
    </div>
  );
}

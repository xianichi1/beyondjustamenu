import React from 'react';

export function StapleGraphic({
  className = '',
  rotation = 0,
  torn = false,
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none transition-transform duration-500 ${className}`}
      style={{
        transform: `rotate(${rotation}deg) ${torn ? 'scale(0.95)' : 'scale(1)'}`,
      }}
    >
      <div className="absolute left-[-5px] w-2.5 h-1.5 bg-[#0a0a0a] rounded-sm shadow-inner opacity-90 border border-black/40" />

      <div
        className="relative z-10 w-16 h-2 rounded-xs border border-slate-400/50"
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #cbd5e1 35%, #94a3b8 70%, #64748b 100%)',
          boxShadow: '0 2px 5px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.3)',
        }}
      >
        <div className="absolute top-[1px] left-1 right-1 h-[1px] bg-white/70" />
        {torn && (
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-black/60" />
        )}
      </div>

      <div className="absolute right-[-5px] w-2.5 h-1.5 bg-[#0a0a0a] rounded-sm shadow-inner opacity-90 border border-black/40" />
    </div>
  );
}

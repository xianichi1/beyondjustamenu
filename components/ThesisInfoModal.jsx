'use client';

import React from 'react';
import { X, Palette, Eye } from 'lucide-react';

export function ThesisInfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#181818] border border-[#2D2D2D] rounded-3xl p-6 shadow-2xl max-h-[88vh] overflow-y-auto text-left text-neutral-200">
        <div className="flex items-start justify-between border-b border-[#262626] pb-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E0564C]/15 border border-[#E0564C]/30 text-[10px] font-mono uppercase tracking-wider text-[#E0564C] mb-1.5">
              Graphic Design Thesis Project 2026
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              beyond just a menu
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs leading-relaxed text-neutral-300">
          <div>
            <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#E892A8]" />
              Project Concept & Background
            </h4>
            <p>
              A lot of people love going out for bubble tea, dumplings, and noodles, taking photos and sharing food spots with friends. But while the food is celebrated everywhere, the actual workers and communities behind the counter often deal with discrimination, harassment, and disrespect.
            </p>
            <p className="mt-2 text-neutral-400">
              This project starts off looking like a cute coupon voucher for free boba toppings. Once you tap to claim it, the coupon rips open to show real community research and statistics—asking people to look beyond just a menu and stand up for the community.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#2E2E2E] space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#D1E7DD]" />
              Dual Design Systems
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-[#FFF5A7] text-[#3E2D27]">
                <div className="font-bold font-fredoka text-sm mb-0.5">THE BAIT</div>
                <div>Playful Yellow (#FFF5A7) & Lilac (#BA9FD6)</div>
                <div className="text-[10px] opacity-80 mt-1">Chubby Fredoka font, smiling mascot, playful reward vouchers.</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#121212] border border-[#2A2A2A] text-white">
                <div className="font-bold font-mono text-sm text-[#E0564C] mb-0.5">THE REALITY</div>
                <div>Charcoal (#121212) & Urgent Coral (#E0564C)</div>
                <div className="text-[10px] text-neutral-400 mt-1">Stark monospace typography, empirical statistics, concrete call-to-actions.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { soundEffects } from '@/lib/audio';

const STAPLES = [
  { rotation: -3 },
  { rotation: 2 },
  { rotation: -2 },
  { rotation: 4 },
];

export function PaperTearTransition({
  onComplete,
  audioEnabled = false,
}) {
  const [tearStage, setTearStage] = useState('initial');
  const [typedText, setTypedText] = useState('');
  const fullText = 'boba loading...';
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setTearStage('tearing');
      soundEffects.playPaperRip(audioEnabled);
    }, 350);

    let charIndex = 0;
    let typeInterval;
    const t2 = setTimeout(() => {
      setTearStage('torn');
      typeInterval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setTypedText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 70);
    }, 850);

    const t3 = setTimeout(() => {
      soundEffects.playDarkImpact(audioEnabled);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [audioEnabled]);

  return (
    <div className="relative w-full h-full min-h-[100dvh] sm:min-h-[760px] flex-1 bg-[#121212] overflow-hidden flex flex-col items-center justify-center select-none">
      {/* Underlying dark screen */}
      <div className="relative flex flex-col items-center justify-center px-6 text-center z-10 max-w-[320px]">
        <div className="w-16 h-20 mb-5 animate-gentle-bounce">
          <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M40 50L52 170C53 176 58 180 64 180H96C102 180 107 176 108 170L120 50H40Z" fill="#1C1C1C" stroke="#444" strokeWidth="3.5" />
            <circle cx="68" cy="115" r="3.5" fill="#E0564C" />
            <circle cx="92" cy="115" r="3.5" fill="#E0564C" />
            <path d="M75 128Q80 123 85 128" stroke="#E0564C" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#E0564C] font-mono leading-tight min-h-[2.5rem] flex items-center justify-center lowercase">
          <span>{typedText}</span>
          <span className="inline-block w-2.5 h-6 ml-1 bg-[#E0564C] animate-blink" />
        </h2>

        <div className="w-48 h-1.5 bg-neutral-800 rounded-full mt-8 overflow-hidden">
          <div
            className="h-full bg-[#E0564C] transition-all ease-out"
            style={{
              width: tearStage === 'torn' ? '100%' : '15%',
              transitionDuration: '3200ms',
            }}
          />
        </div>

        <button
          onClick={() => {
            soundEffects.playDarkImpact(audioEnabled);
            onComplete();
          }}
          className="mt-6 text-[11px] tracking-wider text-neutral-500 hover:text-neutral-300 font-mono transition-colors uppercase py-1 px-3 cursor-pointer"
        >
          Tap to continue &rarr;
        </button>
      </div>

      {/* Left tear flap */}
      <div
        className="absolute -top-20 -bottom-32 left-0 w-1/2 z-20 pointer-events-none transition-all"
        style={{
          transform: tearStage === 'initial' ? 'translateX(0) rotate(0deg)' : tearStage === 'tearing' ? 'translateX(-35%) rotate(-1deg)' : 'translateX(-220%) rotate(-2deg)',
          opacity: tearStage === 'torn' ? 0 : 1,
          transitionDuration: tearStage === 'tearing' ? '450ms' : '1000ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transformOrigin: 'center left',
        }}
      >
        <div className="w-full h-full bg-[#FFF5A7] relative shadow-[6px_0_16px_rgba(0,0,0,0.55)] border-r border-white/60">
          <div className="absolute top-28 left-6 text-[#BA9FD6] font-fredoka font-bold text-lg">
            FREE...
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-[4px] bg-white/70 shadow-sm" />
        </div>
      </div>

      {/* Right tear flap */}
      <div
        className="absolute -top-20 -bottom-32 right-0 w-1/2 z-20 pointer-events-none transition-all"
        style={{
          transform: tearStage === 'initial' ? 'translateX(0) rotate(0deg)' : tearStage === 'tearing' ? 'translateX(35%) rotate(1deg)' : 'translateX(220%) rotate(2deg)',
          opacity: tearStage === 'torn' ? 0 : 1,
          transitionDuration: tearStage === 'tearing' ? '450ms' : '1000ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transformOrigin: 'center right',
        }}
      >
        <div className="w-full h-full bg-[#FFF5A7] relative shadow-[-6px_0_16px_rgba(0,0,0,0.55)] border-l border-white/60">
          <div className="absolute top-28 right-6 text-[#BA9FD6] font-fredoka font-bold text-lg">
            ...TOPPING
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-white/70 shadow-sm" />
        </div>
      </div>

      {/* Staples layer */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none flex flex-col justify-between py-24 items-center transition-all duration-300 ease-out ${
          tearStage === 'initial' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        {STAPLES.map((staple, index) => (
          <div
            key={index}
            className="relative inline-flex items-center justify-center"
            style={{ transform: `rotate(${staple.rotation}deg)` }}
          >
            <div className="absolute left-[-5px] w-2.5 h-1.5 bg-[#0a0a0a] rounded-sm shadow-inner opacity-90 border border-black/40" />
            <div
              className="relative z-10 w-16 h-2 rounded-xs border border-slate-400/50"
              style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #cbd5e1 35%, #94a3b8 70%, #64748b 100%)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.3)',
              }}
            >
              <div className="absolute top-[1px] left-1 right-1 h-[1px] bg-white/70" />
            </div>
            <div className="absolute right-[-5px] w-2.5 h-1.5 bg-[#0a0a0a] rounded-sm shadow-inner opacity-90 border border-black/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

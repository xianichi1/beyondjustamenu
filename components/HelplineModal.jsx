'use client';

import React from 'react';
import { X, Phone, ShieldAlert } from 'lucide-react';

const HELPLINES = [
  {
    name: 'Toronto Distress Centres',
    phone: '416-408-4357 (408-HELP)',
    hours: '24/7 Free & Confidential',
    desc: 'Emotional support, crisis intervention, and suicide prevention across Toronto.',
  },
  {
    name: 'Gerstein Crisis Centre',
    phone: '416-929-5200',
    hours: '24/7 Community Support',
    desc: 'Community-based mental health crisis intervention for downtown Toronto residents.',
  },
  {
    name: 'Chinese Canadian National Council (Toronto Chapter)',
    phone: 'info@ccnctoronto.ca',
    hours: 'Community Peer Intake',
    desc: 'Anti-racism incident advocacy, legal referrals, and grassroots community guidance.',
  },
  {
    name: 'Victim Services Toronto',
    phone: '416-808-7066',
    hours: '24/7 Crisis Response',
    desc: 'Dedicated support for victims of hate crimes, harassment, and discrimination.',
  },
];

export function HelplineModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#181818] border border-[#2D2D2D] rounded-3xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto text-left text-neutral-200">
        <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#E0564C]" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Community Helplines & Emergency Support
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
          If you or someone in your community has experienced racial hostility, threats, or harassment in Toronto, these verified services provide free, confidential assistance.
        </p>

        <div className="space-y-3">
          {HELPLINES.map((item, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-[#222222] border border-[#2D2D2D] space-y-1.5 hover:border-[#3A3A3A] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold text-white">
                  {item.name}
                </h4>
                <span className="text-[10px] font-mono text-[#E892A8]">
                  {item.hours}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#E0564C]">
                <Phone className="w-3.5 h-3.5" />
                <span>{item.phone}</span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-2xl bg-[#1C1C1C] border border-[#2A2A2A] space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3DDD0] font-semibold">
            Emergency Masterlists & Intake
          </span>
          <div className="flex flex-col gap-1.5 text-[11px]">
            <a
              href="https://anti-asianviolenceresources.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BA9FD6] hover:underline flex items-center justify-between font-medium"
            >
              <span>Anti-Asian Violence Resources Carrd</span>
              <span>↗</span>
            </a>
            <a
              href="https://stopaapihate.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E892A8] hover:underline flex items-center justify-between font-medium"
            >
              <span>Stop AAPI Hate Reporting Portal</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

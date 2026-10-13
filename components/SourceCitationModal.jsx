'use client';

import React from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';

const RESEARCH_SOURCES = [
  {
    title: 'Asian Americans and Discrimination During the Pandemic',
    org: 'Pew Research Center',
    url: 'https://www.pewresearch.org/race-and-ethnicity/2023/11/30/asian-americans-and-discrimination-during-the-covid-19-pandemic/',
    keyStat: '58% of Asian adults report facing everyday discrimination, offensive slurs, or being told to go back to where they came from.',
    summary: 'In-depth empirical research on interpersonal hostility, public scapegoating, and systemic discrimination experienced across diasporic Asian communities.',
    badge: 'Academic Research',
  },
  {
    title: 'Addressing Anti-Asian Racism in Canada & Hate Crime Audits',
    org: 'Statistics Canada / Canadian Heritage / CCNC Toronto',
    url: 'https://www.canada.ca/en/canadian-heritage/campaigns/asian-heritage-month/anti-asian-racism.html',
    keyStat: 'Statistics Canada reported a 301% surge in police-reported hate crimes against East/Southeast Asian communities; CCNC documented 40% of national incidents in Ontario (GTA).',
    summary: 'Official federal audit and community intake documenting hate crimes, systemic barriers, and community reporting across major Canadian urban centers including Toronto.',
    badge: 'Government & City Data',
  },
  {
    title: 'National Hate Incident Reporting Database',
    org: 'Stop AAPI Hate Coalition',
    url: 'https://stopaapihate.org/',
    keyStat: '68% of 3,800+ documented hate incidents involved verbal harassment, with commercial businesses and dining establishments being primary encounter sites.',
    summary: 'The leading coalition tracking and analyzing self-reported hate crimes, verbal attacks, and harassment targeting Asian communities.',
    badge: 'Incident Data',
  },
  {
    title: 'Anti-Asian Violence and the Bystander Effect',
    org: 'Ethics Unwrapped, University of Texas at Austin',
    url: 'https://ethicsunwrapped.utexas.edu/anti-asian-violence-and-the-bystander-effect',
    keyStat: 'Explores social passivity and bystander complicity when microaggressions occur in public dining, public transit, and commercial spaces.',
    summary: 'Case study analyzing why bystanders often fail to intervene during public anti-Asian harassment and how active solidarity disrupts harm.',
    badge: 'Ethics & Behavioral',
  },
];

export function SourceCitationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#1A1A1A] border border-[#2E2E2E] rounded-3xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto text-left text-neutral-200">
        <div className="flex items-start justify-between border-b border-[#2A2A2A] pb-4 mb-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#E0564C] block mb-1">
              Sources & Background
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Research & Sources
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-full hover:bg-[#2A2A2A] text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
          Data referenced across this project comes from public studies and community reporting initiatives:
        </p>

        <div className="space-y-3.5">
          {RESEARCH_SOURCES.map((source, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-[#141414] border border-[#262626] space-y-2 hover:border-[#333333] transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#E892A8] font-bold">{source.org}</span>
                <span className="text-neutral-500 text-[10px] px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                  {source.badge}
                </span>
              </div>

              <h4 className="text-xs font-semibold text-white leading-snug">
                {source.title}
              </h4>

              <div className="p-2.5 rounded-xl bg-[#1F1717] border border-[#3D2222] text-[#E0564C] text-[11px] font-medium leading-relaxed">
                <strong>Key Finding:</strong> {source.keyStat}
              </div>

              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {source.summary}
              </p>

              <div className="pt-1">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A3DDD0] hover:text-[#c4eee5] transition-colors hover:underline"
                >
                  <span>Open Official Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-neutral-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E0564C]" />
            <span>Academic Research Citations</span>
          </div>
          <span>Toronto 2026</span>
        </div>
      </div>
    </div>
  );
}

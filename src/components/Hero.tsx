import React from 'react';
import { ArrowDownRight, ShieldCheck, Lock, Globe2 } from 'lucide-react';
import heroVilla from '../assets/images/hero_herne_bay_villa_1791295635699.jpg';
import { handleImageError } from '../utils/imageFallback';

interface HeroProps {
  onExplorePortfolio: () => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onOpenInquiry }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Sub-Header / Sovereign Discretion Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E5E1D8]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#7A5B3E] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#7A5B3E] animate-pulse" />
            <span>Private Atelier · Southern Ridges, New Zealand · Est. 1997 · Global Sovereign Practice</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#706B62] tracking-wide">
            <Lock className="w-3.5 h-3.5 text-[#7A5B3E]" />
            <span>Bilateral Non-Disclosure Covenant · Access Strictly by Admin Vetting</span>
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-3">
              <ShieldCheck className="w-4 h-4 text-[#7A5B3E]" />
              <span>Confidential Commissions For Royal Households & Private Family Offices</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#1C1B18] tracking-tight text-balance">
              Sovereign heritage restoration. Absolute discretion.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <p className="text-base text-[#59554E] leading-relaxed">
              Led by Founder Arthur (Todd James) Henderson, our practice executes confidential historic restorations, forensic joinery, and fortified luxury retreats for high-profile individuals, Emirati royal families, Asian dynasties, and private collectors worldwide. All works are protected under perpetual non-disclosure agreements.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors whitespace-nowrap cursor-pointer shadow-xs flex items-center gap-2"
              >
                <Lock className="w-3 h-3 text-[#B89053]" />
                <span>Inquire Under Mutual NDA</span>
              </button>
              <button
                onClick={onExplorePortfolio}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1C1B18] bg-transparent hover:bg-[#EFECE6] border border-[#1C1B18] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>Curated Excerpts</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase: Anonymized Sovereign Commission */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE8E1] border border-[#DCD6CA] group">
          <img
            src={heroVilla}
            alt="Anonymized sovereign coastal compound restoration"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 filter contrast-[1.03]"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'villa')}
          />
          {/* Subtle architectural gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Project Tagline on image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5D7C7] mb-1 font-medium bg-black/40 px-2.5 py-1 border border-white/10 backdrop-blur-xs">
                <Lock className="w-3 h-3 text-[#B89053]" />
                <span>Classified Commission · Redacted Coordinates · Code ME-SOV-07</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-white">
                Sanctuary VII · Coastal Sovereign Compound
              </h2>
            </div>
            <div className="text-xs text-[#E5D7C7] flex items-center gap-4 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/15">
              <span>Sovereign Client Protocol</span>
              <span>·</span>
              <span>Bespoke Kauri & Titanium Core</span>
              <span>·</span>
              <span className="text-[#B89053]">Full Dossier Under NDA</span>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Section: Sovereign Discretion & Scale */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#E5E1D8]">
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Confidentiality Record</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Zero leaks across 29 years of global royal and private family office commissions.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">29+</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Years Active Since 1997</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Forensic joinery, stealth ballistics, and private estate conservation.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums flex items-center gap-1.5">
              <span>Global</span>
              <Globe2 className="w-4 h-4 text-[#7A5B3E] inline" />
            </div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Sovereign Jurisdictions</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Discreet works spanning the Arabian Gulf, East Asia, Europe, and Southern Alps.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">Private</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Alpine Timber Vault</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Secluded high-country workshop preserving 45,000-year-old ancient kauri reserves.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

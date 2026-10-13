import React from 'react';
import { ArrowDownRight, ShieldCheck, Lock } from 'lucide-react';
import heroVilla from '../assets/images/hero_herne_bay_villa_1791295635699.jpg';
import { handleImageError } from '../utils/imageFallback';

interface HeroProps {
  onExplorePortfolio: () => void;
  onOpenInquiry: () => void;
  onOpenDiscretionProtocol: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onOpenInquiry,
  onOpenDiscretionProtocol
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Sub-Header / Quiet Regional Placement */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-6 border-b border-[#E5E1D8]">
          <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium flex items-center gap-2">
            <span>Private Architectural Conservation & Master Joinery · Est. 1997</span>
          </div>
          <button
            onClick={onOpenDiscretionProtocol}
            className="text-xs text-[#706B62] hover:text-[#1C1B18] transition-colors flex items-center gap-1.5 cursor-pointer text-left sm:text-right"
          >
            <Lock className="w-3.5 h-3.5 text-[#7A5B3E]" />
            <span className="underline underline-offset-2">Bilateral Non-Disclosure Covenant Policy</span>
          </button>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#1C1B18] tracking-tight text-balance">
              Restoring architectural soul. Preserving private sanctuaries.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <p className="text-base text-[#59554E] leading-relaxed">
              Led by Founder Arthur T.J Henderson, our studio undertakes the sensitive restoration of historic residences, bespoke timber fenestration, and secluded contemporary pavilions for private families, royal households, and high-profile individuals across the Arabian Gulf, East Asia, Europe, and the South Pacific.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                Confidential Inquiry
              </button>
              <button
                onClick={onExplorePortfolio}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1C1B18] bg-transparent hover:bg-[#EFECE6] border border-[#1C1B18] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>Selected Works</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE8E1] border border-[#DCD6CA] group">
          <img
            src={heroVilla}
            alt="Private coastal residence restored by Restorations by Henderson & Co."
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'villa')}
          />
          {/* Subtle architectural gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Project Details Overlay (Discreet & Anonymized) */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-widest text-[#E5D7C7] mb-1 font-medium flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5D7C7]" />
                <span>Protected Commission Archive · Arabian Gulf Domain</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-white">
                The Coastal Domain & Sea Pavilion
              </h2>
            </div>
            <div className="text-xs text-[#E5D7C7] flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
              <span>Heart Kauri Joinery</span>
              <span>·</span>
              <span>Coral Limestone</span>
              <span>·</span>
              <span className="text-[#C5A376]">Bilateral NDA Protected</span>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Section (Clean Editorial Layout with Tabular Numerals) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#E5E1D8]">
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">29+</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Years in Practice</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Continuous master craftsmanship and private conservation since 1997.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">Global</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Commissions</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Private residences across the Middle East, East Asia, Europe, and New Zealand.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Confidentiality</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Every undertaking governed by legally binding non-disclosure covenants.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">In-House</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Master Artisans</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Permanent vetted carpenters and conservators. Zero third-party subcontractors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

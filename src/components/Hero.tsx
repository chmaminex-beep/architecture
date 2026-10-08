import React from 'react';
import { ArrowDownRight, Award, Compass, Sparkles } from 'lucide-react';
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
        {/* Editorial Sub-Header / Regional Anchor */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E5E1D8]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#7A5B3E] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#7A5B3E]" />
            <span>Auckland, New Zealand · Est. 2004 · 20+ Years of Craftsmanship</span>
          </div>
          <div className="text-xs text-[#706B62] tracking-wide">
            Registered Master Builders & Heritage Practitioners
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#1C1B18] tracking-tight text-balance">
              Restoring Auckland’s architectural soul. Building modern heirlooms.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <p className="text-base text-[#59554E] leading-relaxed">
              Led by Founder Arthur (Todd James) Henderson, our studio specializes in the forensic restoration of nineteenth-century Victorian villas and the seamless integration of bespoke luxury contemporary living across Tāmaki Makaurau.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                Discuss Your Property
              </button>
              <button
                onClick={onExplorePortfolio}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1C1B18] bg-transparent hover:bg-[#EFECE6] border border-[#1C1B18] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>View Portfolio</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase: High-Resolution Herne Bay Villa */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE8E1] border border-[#DCD6CA] group">
          <img
            src={heroVilla}
            alt="Restored Victorian double-bay villa in Herne Bay Auckland"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'villa')}
          />
          {/* Subtle architectural gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Project Tagline on image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-widest text-[#E5D7C7] mb-1 font-medium">
                Featured Heritage Restoration · Herne Bay
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-white">
                The Marine Parade Double-Bay Villa
              </h2>
            </div>
            <div className="text-xs text-[#E5D7C7] flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10">
              <span>Heart Kauri Weatherboards</span>
              <span>·</span>
              <span>1898 Architecture</span>
              <span>·</span>
              <span>18 Months Craftsmanship</span>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Section (Adjacency Rule) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#E5E1D8]">
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">22+</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Years in Auckland</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Continuous heritage restoration practice in central Auckland since 2004.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">140+</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Homes Restored</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Victorian villas, Edwardian estates, and bespoke luxury transformations.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Heritage Approval</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Unblemished record with Auckland Council & Heritage NZ consents.</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif text-3xl md:text-4xl text-[#1C1B18] tabular-nums">In-House</div>
            <div className="text-xs uppercase tracking-wider text-[#706B62] font-medium">Joinery Workshop</div>
            <p className="text-xs text-[#8A857B] pt-0.5">Milling authentic historical moulds and vacuum-glazed sash windows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Hammer, Trees, Shield, Sparkles, Ruler, Compass, Layers } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-20 md:py-28 bg-[#F4F3EF] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              The Craftsman’s Code
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Meticulous Preservation Meets Contemporary Engineering
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3">
              We do not treat historic villas as museum relics. We restore their timeless character with forensic honesty, while equipping them with modern acoustic, thermal, and spatial comfort.
            </p>
          </div>
          <div className="text-xs text-[#706B62] tracking-wide">
            Workshop & Mill: Morningside, Auckland
          </div>
        </div>

        {/* Story Grid: Architectural Workshop & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Workshop Craftsmanship Photography */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1] border border-[#DCD6CA] shadow-sm">
              <img
                src="/src/assets/images/craft_kauri_timber_joinery_1791295657642.jpg"
                alt="Heart Kauri timber joinery and artisanal hand craftsmanship at our Morningside workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#706B62]">
              <div>
                <span className="font-serif text-base text-[#1C1B18] block">Morningside Joinery Mill</span>
                <span>Hand-finished Heart Kauri & Precision Joinery</span>
              </div>
              <div className="text-right">
                <span className="text-[#7A5B3E] font-medium block">22 Years in Practice</span>
                <span>Tāmaki Makaurau Auckland</span>
              </div>
            </div>
          </div>

          {/* Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl md:text-4xl text-[#1C1B18] leading-tight">
              "When you touch a piece of 120-year-old virgin Heart Kauri, you are touching living New Zealand history. You cannot rush it, and you cannot fake it."
            </h3>

            <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
              For over two decades, Restored by Todd has operated at the exacting intersection of heritage architecture and luxury residential construction. Our team includes master carpenters, traditional joiners, stonemasons, and seismic engineers who share an obsessive reverence for detail.
            </p>

            <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
              Whether matching an uncatalogued 1895 ogee moulding, balancing 14-kilogram cast sash weights, or opening up a south-facing rear into a sun-drenched architectural pavilion with 3-metre slimline glass sliders, our approach is always forensic, accountable, and transparent.
            </p>

            {/* In-House Capabilities List */}
            <div className="pt-6 border-t border-[#E5E1D8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-[#E5E1D8]">
                <div className="font-semibold text-[#1C1B18] mb-1">In-House Mill & Tooling</div>
                <p className="text-[#706B62]">Custom grind knives to reproduce obsolete 1880–1920 Victorian weatherboards, scotias, and architraves.</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E1D8]">
                <div className="font-semibold text-[#1C1B18] mb-1">Direct Salvage Reserves</div>
                <p className="text-[#706B62]">Private warehouse stocks of seasoned old-growth Heart Kauri, Mataī, and Tōtara for authentic repairs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Architectural Craftsmanship */}
        <div id="philosophy" className="pt-12 border-t border-[#E5E1D8]">
          <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-8">
            Our Four Cornerstones of Practice
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">01.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Native Timber Stewardship</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                We never use inferior synthetic composites on heritage facades. We restore original native timber using micro-porous linseed systems and salvage kauri inlays.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">02.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Heritage Consent Mastery</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Navigating the Auckland Unitary Plan Chapter D18 Special Character Area rules and Heritage New Zealand Pouhere Taonga consents with a flawless track record.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">03.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Concealed Modern Engineering</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Embedding seismic steel portal frames inside original timber wall cavities, allowing expansive open-plan spaces without bulky drop-beams.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">04.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Thermal Retrofit Fenestration</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Retrofitting historic double-hung sash windows with whisper-thin vacuum insulated double glazing, eliminating winter chill while preserving 1890 sightlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

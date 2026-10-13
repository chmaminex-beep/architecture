import React, { useState } from 'react';
import { Lock, Shield, TreePine, EyeOff, Sparkles, Check } from 'lucide-react';
import craftKauri from '../assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import { handleImageError } from '../utils/imageFallback';

export const CraftsmanshipSection: React.FC = () => {
  const [selectedTimber, setSelectedTimber] = useState<'kauri' | 'swamp' | 'matai' | 'totara'>('kauri');

  const timberData = {
    kauri: {
      name: 'Salvaged Virgin Heart Kauri',
      age: '400–800 Year Slow Canopy Growth (Circa 1880 Salvage)',
      provenance: 'South Island High-Country Seasoning Yards, New Zealand',
      character: 'Exceptionally straight, knot-free grain with golden-honey luster. Saturated with natural copal resins that render it impervious to water, marine rot, and wood-boring insects.',
      performance: 'Resists extreme temperature swings up to 48°C in Arabian Gulf coastal estates without cupping or grain lift.',
      seasoning: 'Air-cured for 18–24 months under sub-alpine prevailing winds.'
    },
    swamp: {
      name: 'Prehistoric Swamp Kauri (Sub-Fossil)',
      age: '30,000 to 45,000 Years Before Present (Radiocarbon Dated)',
      provenance: 'Preserved Peat Bogs, Far North of New Zealand',
      character: 'Unearthed from oxygen-depleted peat layers. Displays an iridescent chatoyancy shifting between deep espresso, amber, and molten bronze. Naturally petro-stabilized.',
      performance: 'Used exclusively for private library suites, ceremonial dining tables, and boardroom paneling for royal and sovereign residences.',
      seasoning: 'Slow graduated desiccation over 3 years to prevent cellular collapse.'
    },
    matai: {
      name: 'Old-Growth Heart Mataī (Black Pine)',
      age: '300+ Year Mountain Forest Heartwood',
      provenance: 'Historic Building Deconstruction Salvage, Central Plateau',
      character: 'Extremely dense, silken-smooth grain with rich russet-red heartwood. Extraordinary hardness and dimensional stability under heavy footfall.',
      performance: 'Ideal for decoupled herringbone parquet in high-traffic salons, private galleries, and diplomatic quarters.',
      seasoning: 'Conditioned to 9% equilibrium moisture content in temperature-monitored racks.'
    },
    totara: {
      name: 'Heart Tōtara Timber',
      age: 'Native Podocarp Heartwood (Natural Durability Class 1)',
      provenance: 'Licensed Sustainable & Salvage Recovery Reserves',
      character: 'Fine, even texture with natural totarol antibacterial resin. Naturally resistant to marine borers, tropical termites, and severe island humidity.',
      performance: 'Selected for open-air loggias, shaded return verandahs, and private island promontories.',
      seasoning: 'Natural high-country yard drying with hand-stacked ventilation flues.'
    }
  };

  const currentTimber = timberData[selectedTimber];

  return (
    <section id="craftsmanship" className="py-20 md:py-28 bg-[#F4F3EF] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              The Craftsman’s Code · Established 1997
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Patience, Honest Timber, and Unbroken Secrecy.
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3 leading-relaxed">
              We do not treat historic architecture as fragile museum showpieces. We restore private estates with forensic honesty, ensuring they remain quiet, structurally sound, and acoustically peaceful for generations of private family living.
            </p>
          </div>
          <div className="text-xs text-[#706B62] space-y-1 text-left lg:text-right">
            <div className="font-semibold text-[#1C1B18]">Secluded High-Country Atelier</div>
            <div>Upper Ahuriri Basin, Ben Ohau Range, New Zealand</div>
            <div className="text-[#7A5B3E]">(Visits strictly by private appointment)</div>
          </div>
        </div>

        {/* Story Grid: Workshop Photography & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Workshop Craftsmanship Photography */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1] border border-[#DCD6CA] shadow-xs">
              <img
                src={craftKauri}
                alt="Hand-planed timber joinery at our New Zealand atelier"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'craft')}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#706B62]">
              <div>
                <span className="font-serif text-base text-[#1C1B18] block">The Henderson Atelier</span>
                <span>Hand-finished Heart Kauri & Bespoke Joinery</span>
              </div>
              <div className="text-right">
                <span className="text-[#7A5B3E] font-medium block">Arthur T.J Henderson</span>
                <span>Founder & Master Joiner · Active Since 1997</span>
              </div>
            </div>
          </div>

          {/* Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl md:text-4xl text-[#1C1B18] leading-tight">
              "When you handle timber that was a sapling before the Renaissance, you work with humility. You cannot rush the grain, and you cannot fake the finish."
            </h3>

            <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
              Founded in 1997 by Arthur T.J Henderson, our practice has operated quietly for nearly three decades at the intersection of classical building conservation and luxury residential engineering. Our permanent team includes master carpenters, stone carvers, and conservation structural engineers who share an obsessive reverence for detail.
            </p>

            <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
              Rather than maintaining a commercial high-street showroom or courting publicity in design journals, we run a secluded workshop in the high country of New Zealand. Here, salvaged native timber is seasoned naturally over years under dry sub-alpine winds. Joinery frames are test-assembled in our yard, packed into unmarked shipping crates, and installed on-site by our traveling team of permanent craftsmen across the Middle East, East Asia, Europe, and the Pacific.
            </p>

            {/* Direct Commitments */}
            <div className="pt-6 border-t border-[#E5E1D8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-[#E5E1D8]">
                <div className="font-semibold text-[#1C1B18] mb-1 flex items-center gap-1.5">
                  <TreePine className="w-3.5 h-3.5 text-[#7A5B3E]" />
                  <span>Private Native Timber Reserves</span>
                </div>
                <p className="text-[#706B62] leading-relaxed">
                  Private stocks of salvaged virgin Heart Kauri, Mataī, and radiocarbon-dated Swamp Kauri for authentic restorations.
                </p>
              </div>
              <div className="p-4 bg-white border border-[#E5E1D8]">
                <div className="font-semibold text-[#1C1B18] mb-1 flex items-center gap-1.5">
                  <EyeOff className="w-3.5 h-3.5 text-[#7A5B3E]" />
                  <span>Permanent Vetted Artisans</span>
                </div>
                <p className="text-[#706B62] leading-relaxed">
                  Zero transient subcontractors. Every carpenter and joiner on your estate has trained under Arthur T.J Henderson for years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Native Timber Study (Deep Human Craft Element) */}
        <div className="bg-white p-8 md:p-10 border border-[#E5E1D8] mb-20 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E1D8]">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-1">
                The Material Archive · New Zealand High-Country Reserves
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1C1B18]">
                Timber Provenance & Climatic Physics
              </h3>
            </div>
            <div className="text-xs text-[#706B62]">
              Select a timber species to review cellular characteristics and regional application
            </div>
          </div>

          {/* Timber Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-6 border-b border-[#E5E1D8]">
            {(['kauri', 'swamp', 'matai', 'totara'] as const).map((key) => {
              const item = timberData[key];
              const isSelected = selectedTimber === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedTimber(key)}
                  className={`p-3 text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF9F6] border-[#7A5B3E] shadow-xs'
                      : 'bg-white border-[#E5E1D8] hover:border-[#B5A898]'
                  }`}
                >
                  <div className={`text-xs font-semibold ${isSelected ? 'text-[#7A5B3E]' : 'text-[#1C1B18]'}`}>
                    {item.name.split(' (')[0]}
                  </div>
                  <div className="text-[11px] text-[#706B62] mt-0.5 truncate">
                    {item.age.split(' (')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Timber Detail Display */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A5B3E] font-medium">Cellular Character & Natural Resins</span>
                <p className="text-sm text-[#4A463F] leading-relaxed mt-1">{currentTimber.character}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A5B3E] font-medium">Global Climate Performance</span>
                <p className="text-sm text-[#4A463F] leading-relaxed mt-1">{currentTimber.performance}</p>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#FAF9F6] p-5 border border-[#E5E1D8] space-y-3 text-xs">
              <div>
                <span className="text-[#706B62] block">Age & Specimen Provenance:</span>
                <span className="text-[#1C1B18] font-medium block">{currentTimber.age}</span>
              </div>
              <div className="pt-2 border-t border-[#E5E1D8]/60">
                <span className="text-[#706B62] block">High-Country Seasoning Protocol:</span>
                <span className="text-[#1C1B18] font-medium block">{currentTimber.seasoning}</span>
              </div>
              <div className="pt-2 border-t border-[#E5E1D8]/60 flex items-center gap-1.5 text-[#7A5B3E] font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Reserve certified for overseas private commissions</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Foundations of Practice */}
        <div id="philosophy" className="pt-12 border-t border-[#E5E1D8]">
          <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-8">
            The Four Foundations of Our Work
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">01.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Dense Native Timbers</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                We never introduce synthetic composites onto historic facades. We restore original woodwork using salvaged resin-dense heartwood and hand-rubbed breathable botanical oils.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">02.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Invisible Engineering</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Concealing structural steel flitches inside historic timber columns and fitting ultra-thin vacuum glazing inside authentic nineteenth-century putty lines.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">03.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Quiet Living & Acoustics</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Decoupling historic parquet floors and crafting weighted, drop-sealed doors so expansive historic reception rooms and private salons remain acoustically peaceful.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">04.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Uncompromising Secrecy</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Zero social media, zero competition entries, unbranded transport crates, and bilateral NDAs. Client privacy is treated as our primary professional obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

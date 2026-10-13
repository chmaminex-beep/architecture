import React from 'react';
import { Lock, Shield, ShieldCheck, KeyRound, Globe, Compass, CheckCircle2 } from 'lucide-react';
import craftKauri from '../assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import { handleImageError } from '../utils/imageFallback';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-20 md:py-28 bg-[#F4F3EF] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>The Discretion Protocol · Sovereign Practice Standards</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Absolute Secrecy Meets Peerless Craftsmanship
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3">
              We cater exclusively to sovereign royal families, high-profile dignitaries, and private family offices who require total confidentiality alongside museum-level restoration and fortified residential engineering.
            </p>
          </div>
          <div className="text-xs text-[#706B62] tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-700" />
            <span>Private Atelier & Curing Vaults: Southern Ridges, New Zealand</span>
          </div>
        </div>

        {/* Story Grid: Architectural Workshop & Discretion Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Workshop Craftsmanship Photography */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE8E1] border border-[#DCD6CA] shadow-sm relative group">
              <img
                src={craftKauri}
                alt="Ancient timber joinery and hand craftsmanship at our private New Zealand atelier"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'craft')}
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 text-white text-[10px] uppercase font-mono tracking-widest border border-white/10 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#B89053]" />
                <span>Confidential Secure Facility</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#706B62]">
              <div>
                <span className="font-serif text-base text-[#1C1B18] block">The Henderson Private Atelier</span>
                <span>Restricted-Access Joinery & Ancient Timber Vault</span>
              </div>
              <div className="text-right">
                <span className="text-[#7A5B3E] font-medium block">Arthur (Todd James) Henderson</span>
                <span>Principal · Operational Since 1997</span>
              </div>
            </div>
          </div>

          {/* Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl md:text-4xl text-[#1C1B18] leading-tight">
              "For our clients, privacy is not an option or a contractual afterthought—it is the foundational prerequisite of their lives and our relationship."
            </h3>

            <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
              Founded in 1997, Restorations by Henderson & Co. operates away from public registries, architectural competitions, and media exposure. Our client roster includes Emirati royal households in the Arabian Gulf, dynastic families in East Asia, and private UHNW estate owners across Europe and the remote high country of New Zealand.
            </p>

            <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
              Every project is conducted under encrypted administrative protocols. Our master craftsmen are vetted with high-security clearances, and our remote workshop in New Zealand functions behind private mountain perimeters—allowing delicate components, bullet-resistant sashes, and 45,000-year-old ancient timbers to be shaped in total seclusion prior to private air transport.
            </p>

            {/* In-House Capabilities List */}
            <div className="pt-6 border-t border-[#E5E1D8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-[#E5E1D8]">
                <div className="font-semibold text-[#1C1B18] mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7A5B3E]" />
                  <span>Zero-Leak Non-Disclosure Record</span>
                </div>
                <p className="text-[#706B62]">29-year unblemished record. All photography, drawings, and logs remain locked in private physical client vaults.</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E1D8]">
                <div className="font-semibold text-[#1C1B18] mb-1 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-[#7A5B3E]" />
                  <span>Stealth Ballistic & EMP Integration</span>
                </div>
                <p className="text-[#706B62]">Concealing BR4–BR7 armour cores, Faraday shielding, and biometric safe rooms behind authentic 19th-century boiserie.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Sovereign Discretion */}
        <div id="philosophy" className="pt-12 border-t border-[#E5E1D8]">
          <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-8">
            The Four Pillars of Sovereign Practice
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">01.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Bilateral Secrecy Covenants</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Legally binding multi-jurisdictional non-disclosure agreements with substantial liquidated damages. Works are catalogued exclusively by encrypted alphanumeric codes.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">02.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Untraceable Atelier & Vault</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Operating from secluded New Zealand southern high-country coordinates with zero roadside signage or commercial traffic. Access is granted strictly by prior accreditation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">03.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">45,000-Year Timber Reserves</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                Exclusive allocation of carbon-dated Ancient Swamp Kauri and centuries-old salvaged native heartwoods, complete with university radiocarbon provenance certificates.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-serif text-xl text-[#7A5B3E]">04.</div>
              <h4 className="font-serif text-xl text-[#1C1B18]">Vetted In-House Personnel Only</h4>
              <p className="text-xs text-[#59554E] leading-relaxed">
                We never engage unknown sub-contractors. Every artisan on your estate is a full-time, vetted staff member with extensive tenure under Founder Arthur Henderson.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

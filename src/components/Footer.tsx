import React from 'react';
import { Logo } from './Logo';
import { Lock, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1B18] text-[#D8D4CA] pt-16 pb-12 border-t border-[#302D27]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#302D27]">
          {/* Brand & Sovereign Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="full" light />
            <p className="text-xs text-[#A8A398] max-w-sm leading-relaxed pt-1">
              Confidential historical restoration, fortified private sanctuaries, and rare ancient timber joinery for sovereign royal families, Emirati dynasties, and high-profile private clients globally. Led by Founder Arthur (Todd James) Henderson. Operational since 1997.
            </p>
            <div className="text-xs text-[#827D74] flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#B89053]" />
              <span>Est. 1997 · Strict Bilateral Non-Disclosure Covenant</span>
            </div>
          </div>

          {/* Selected Classified Works */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-white/50 text-[11px] font-semibold">
              Classified Records
            </div>
            <ul className="space-y-2 text-[#C2BEB4]">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Sanctuary VII (Coastal Sovereign Compound)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Imperial Pavilion (East Asia)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Alpine High-Country Redoubt (NZ)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Citadel Enclave (Mediterranean)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Diplomatic Palais & Vault (Central Europe)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Ridge Atoll Sanctuary (Oceania)</a></li>
            </ul>
          </div>

          {/* Secure Practice & Dispatch */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-white/50 text-[11px] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89053]" />
              <span>The Private Practice</span>
            </div>
            <div className="space-y-2 text-[#C2BEB4]">
              <div>Private Atelier & Timber Curing Vaults</div>
              <div className="text-[#827D74]">Southern Alpine Sector, Remote Conservation Boundary, South Island, New Zealand</div>
              <div className="pt-1">Administrative Dispatch & Courier:</div>
              <div className="text-[#827D74]">Diplomatic Bag / P.O. Box 4902, Southern Alpine District, New Zealand</div>
              <div className="pt-1 flex items-center gap-1.5 text-[#B89053]">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:private-office@hendersonrestorations.co.nz" className="hover:underline font-mono">
                  private-office@hendersonrestorations.co.nz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827D74]">
          <div>
            © {new Date().getFullYear()} Restorations by Henderson & Co. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#B89053]" />
              <span>Multi-Jurisdictional Non-Disclosure Covenant</span>
            </span>
            <span>·</span>
            <span>Encrypted Archival Standard</span>
            <span>·</span>
            <span>Zero Public Disclosure Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Logo } from './Logo';
import { Lock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenDiscretionProtocol: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiscretionProtocol }) => {
  return (
    <footer className="bg-[#1C1B18] text-[#D8D4CA] pt-16 pb-12 border-t border-[#302D27]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#302D27]">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="full" light />
            <p className="text-xs text-[#A8A398] max-w-sm leading-relaxed pt-1">
              Private architectural conservation, salvaged native timber joinery, and secluded estate extensions across the Arabian Gulf, East Asia, Continental Europe, and the South Pacific. Led by Founder Arthur T.J Henderson. Operating quietly under bilateral non-disclosure covenants since 1997.
            </p>
            <div className="text-xs text-[#827D74] flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#B89053]" />
              <span>Est. 1997 · Secluded High-Country Atelier · Global Traveling Team</span>
            </div>
          </div>

          {/* Selected Works */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-white/50 text-[11px] font-semibold">
              Selected Works (Redacted)
            </div>
            <ul className="space-y-2 text-[#C2BEB4]">
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Coastal Domain (Arabian Gulf)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Forest Sanctuary (East Asia)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Courtyard Oasis (Peninsula)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Sea-Cliff Citadel (Mediterranean)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Diplomatic Residence (Europe)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">High-Country Basin (New Zealand)</a></li>
            </ul>
          </div>

          {/* Workshop & Correspondence */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-white/50 text-[11px] font-semibold">
              The Atelier & Correspondence
            </div>
            <div className="space-y-2 text-[#C2BEB4]">
              <div className="font-medium text-white">The Henderson Atelier & Seasoning Yards</div>
              <div className="text-[#827D74]">Upper Ahuriri Basin, Ben Ohau Range, South Island, New Zealand</div>
              <div className="text-[11px] text-[#A8A398] italic">Unmarked high-country domain · Access by private arrangement only</div>
              <div className="pt-2">Courier & Postal Dispatch:</div>
              <div className="text-[#827D74]">Private Bag 14, Remote Rural Service, Canterbury 7949, New Zealand</div>
              <div className="pt-1 text-[#827D74]">
                Direct Line: <a href="tel:+6436858120" className="text-[#C2BEB4] hover:text-white transition-colors font-mono">+64 (03) 685 8120</a>
              </div>
              <div className="text-[#827D74]">
                Private Office: <a href="mailto:office@hendersonrestorations.co.nz" className="text-[#C2BEB4] hover:text-white transition-colors font-mono">office@hendersonrestorations.co.nz</a>
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
            <button
              onClick={onOpenDiscretionProtocol}
              className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
            >
              Policy of Secrecy & NDAs
            </button>
            <span>·</span>
            <span>Heritage Conservation Standards</span>
            <span>·</span>
            <span>Permanent In-House Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

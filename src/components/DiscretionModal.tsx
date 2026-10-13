import React from 'react';
import { X, Lock, ShieldCheck, FileCheck, EyeOff, Package, UserCheck } from 'lucide-react';

interface DiscretionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const DiscretionModal: React.FC<DiscretionModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FAF9F6] border border-[#DCD6CA] w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#1C1B18] text-white flex items-center justify-between border-b border-[#302D27]">
          <div className="flex items-center gap-2.5 text-xs tracking-wider">
            <Lock className="w-4 h-4 text-[#B89053]" />
            <span className="uppercase text-[#E5D7C7] font-medium">Practice Policy: Confidentiality & Secrecy</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 md:p-10 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-1">
              Restorations by Henderson & Co. · Established 1997
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1B18]">
              The Five Covenants of Discretion
            </h2>
            <p className="text-sm text-[#59554E] mt-3 leading-relaxed">
              For ultra-high-net-worth families, royal households, and sovereign patrons across the Arabian Gulf, East Asia, and Europe, privacy is not merely a preference—it is a fundamental security requirement. Since our establishment in 1997, our studio has operated under strict confidentiality protocols.
            </p>
          </div>

          <div className="space-y-6 border-t border-[#E5E1D8] pt-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1C1B18] text-[#E5D7C7] flex items-center justify-center shrink-0 text-xs font-semibold">
                01
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1C1B18] font-medium">Bilateral Non-Disclosure Agreements</h3>
                <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                  Before a single floorplan, aerial survey, or personal specification is shared, we execute a mutual NDA governed by New Zealand or English common law. Both parties are legally protected from the very first conversation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1C1B18] text-[#E5D7C7] flex items-center justify-center shrink-0 text-xs font-semibold">
                02
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1C1B18] font-medium">Zero Public Marketing & No Design Awards</h3>
                <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                  We never submit completed private estates to architectural competitions, trade magazines, or digital design awards. Our work exists for the private enjoyment of the families who commission it, not for public spectacle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1C1B18] text-[#E5D7C7] flex items-center justify-center shrink-0 text-xs font-semibold">
                03
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1C1B18] font-medium">Unmarked Transport & Unbranded Logistics</h3>
                <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                  Joinery fabricated at our New Zealand workshop is packed into unbranded timber maritime crates carrying only customs consignment codes. Vehicles on-site bear zero exterior branding or commercial signage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1C1B18] text-[#E5D7C7] flex items-center justify-center shrink-0 text-xs font-semibold">
                04
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1C1B18] font-medium">Permanent In-House Craftsmen Only</h3>
                <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                  We do not hire temporary agency workers or unknown local subcontractors to work inside your residence. Every carpenter, joiner, and stone conservator is a full-time, vetted employee of our New Zealand workshop with established tenure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1C1B18] text-[#E5D7C7] flex items-center justify-center shrink-0 text-xs font-semibold">
                05
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#1C1B18] font-medium">Anonymized Records & Offline Encrypted Storage</h3>
                <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                  All archival photographs are taken solely with written consent and stripped of exterior horizon lines or identifying landmarks. Architectural drawings and digital files are stored on isolated, encrypted offline servers.
                </p>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="p-6 bg-[#F4F3EF] border border-[#E5E1D8] space-y-4">
            <div className="text-xs text-[#706B62] leading-relaxed">
              If your family office, legal counsel, or royal protocol office requires custom non-disclosure covenants or security clearance documentation prior to preliminary discussions, Arthur T.J Henderson is available to coordinate directly with your representatives.
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer shadow-xs"
              >
                Request Confidential NDA Discussion
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 text-xs text-[#706B62] hover:text-[#1C1B18] transition-colors cursor-pointer"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

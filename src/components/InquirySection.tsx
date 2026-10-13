import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Shield, AlertCircle, Lock, KeyRound, FileCheck, Globe, Mail, ShieldAlert } from 'lucide-react';

interface InquirySectionProps {
  prefilledProject?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState({
    representativeName: '',
    familyOffice: '',
    email: '',
    secureChannel: '',
    jurisdiction: 'Arabian Gulf / Middle East',
    scope: 'Sovereign Heritage Restoration & Fortification',
    estimatedBudget: '$5M – $15M USD',
    ndaAgreed: false,
    confidentialNotes: prefilledProject ? `Inquiry regarding classified dossier: ${prefilledProject}` : '',
  });

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        confidentialNotes: `Inquiry regarding classified dossier: ${prefilledProject}`,
      }));
    }
  }, [prefilledProject]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.representativeName.trim() || !formData.email.trim() || !formData.secureChannel.trim()) {
      setError('Please provide your name, verification email, and secure contact channel for administrative vetting.');
      return;
    }
    if (!formData.ndaAgreed) {
      setError('You must confirm willingness to execute our standard Bilateral Non-Disclosure Covenant prior to confidential discussions.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 bg-[#F4F3EF] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Private Office & Administrative Clearance</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Initiate Confidential Dialogue
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3 leading-relaxed">
              Restorations by Henderson & Co. operates under strict policy discretion. We limit global commitments to 3–4 sovereign and private dynasty commissions annually, ensuring Arthur (Todd James) Henderson’s undivided personal oversight.
            </p>
          </div>
          <div className="text-xs text-[#706B62] space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span className="font-medium text-[#1C1B18]">Administrative Review Queue: Active</span>
            </div>
            <div>Bilateral Non-Disclosure Agreements Executed Prior to Detail Release</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Discreet Location & Security Protocols */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#E5E1D8] space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4">
                <h3 className="font-serif text-2xl text-[#1C1B18]">
                  The Private Office
                </h3>
                <span className="text-[10px] font-mono uppercase bg-[#F3F0EB] px-2 py-1 text-[#7A5B3E] border border-[#DCD6CA]">
                  RESTRICTED ACCESS
                </span>
              </div>

              <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                To safeguard client privacy and maintain total operational security, physical access to our New Zealand facilities is conducted strictly via private invitation, prior accreditation, and secure escort.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Atelier & Curing Vault Location</span>
                    <span className="text-[#706B62]">
                      Southern Alpine Sector, Remote Conservation Boundary, South Island, New Zealand
                    </span>
                    <span className="text-[11px] text-[#7A5B3E] block mt-0.5 font-mono">
                      (Coordinates & Private Air-Strip Details Disclosed Upon Vetting)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Administrative Dispatch & Courier</span>
                    <span className="text-[#706B62]">
                      Diplomatic Bag / P.O. Box 4902, Southern Alpine District, New Zealand
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Direct Electronic Inquiries</span>
                    <a href="mailto:private-office@hendersonrestorations.co.nz" className="text-[#1C1B18] hover:text-[#7A5B3E] transition-colors font-mono">
                      private-office@hendersonrestorations.co.nz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <KeyRound className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Encrypted Voice / Signal</span>
                    <span className="text-[#706B62]">
                      Signal Protocol ID provided via verified diplomatic transmission
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Protocol Box */}
            <div className="bg-[#EFECE6] p-6 border border-[#DCD6CA] space-y-3 text-xs">
              <div className="font-semibold uppercase tracking-wider text-[#7A5B3E] flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <span>The Four-Stage Vetting Protocol</span>
              </div>
              <ul className="space-y-2.5 text-[#59554E]">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#7A5B3E] font-semibold">01.</span>
                  <span>Administrative Identity Verification of Representative or Family Office Trustee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#7A5B3E] font-semibold">02.</span>
                  <span>Execution of Mutual Bilateral Non-Disclosure Agreement (NDA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#7A5B3E] font-semibold">03.</span>
                  <span>Encrypted Discovery Briefing with Founder Arthur (Todd James) Henderson.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#7A5B3E] font-semibold">04.</span>
                  <span>Private In-Person Inspection of Materials Vault & Unredacted Case Studies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Confidential Vetting & Commission Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white p-10 border border-[#E5E1D8] text-center space-y-6">
                <div className="w-14 h-14 bg-[#7A5B3E]/10 rounded-full flex items-center justify-center mx-auto text-[#7A5B3E]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1B18]">
                  Transmission Received
                </h3>
                <p className="text-sm text-[#59554E] max-w-md mx-auto leading-relaxed">
                  Your communication has been encrypted and routed directly to the Private Office administrator and Founder Arthur (Todd James) Henderson. An encrypted verification response and mutual NDA packet will be dispatched within 24 hours.
                </p>
                <div className="pt-6 border-t border-[#E5E1D8] text-xs font-mono text-[#706B62]">
                  Encrypted Dispatch Reference: NZ-SEC-{Math.floor(100000 + Math.random() * 900000)} · Sealed Transmission
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      ...formData,
                      confidentialNotes: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs text-[#7A5B3E] underline hover:text-[#1C1B18]"
                >
                  Submit supplementary documentation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 border border-[#E5E1D8] space-y-6">
                <div className="border-b border-[#E5E1D8] pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7A5B3E] mb-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>ENCRYPTED INQUIRY FORM</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1C1B18]">
                    Confidential Commission Registration
                  </h3>
                  <p className="text-xs text-[#706B62] mt-1">
                    All inputs remain strictly confidential under our foundational privacy covenants.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Representative Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Principal / Representative Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.representativeName}
                      onChange={(e) => setFormData({ ...formData, representativeName: e.target.value })}
                      placeholder="e.g. Dr. H. Al-Mansoor / Legal Counsel"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>

                  {/* Family Office / Entity */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Entity / Royal Household / Family Office
                    </label>
                    <input
                      type="text"
                      value={formData.familyOffice}
                      onChange={(e) => setFormData({ ...formData, familyOffice: e.target.value })}
                      placeholder="e.g. Private Dynasty Trust / Confidential"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Verification Email */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Verification Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="counsel@family-trust.ch"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>

                  {/* Secure Channel */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Secure Phone / Signal Channel *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.secureChannel}
                      onChange={(e) => setFormData({ ...formData, secureChannel: e.target.value })}
                      placeholder="+971 50 ... / +41 22 ..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Geographic Jurisdiction */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Territory / Jurisdiction
                    </label>
                    <select
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      <option value="Arabian Gulf / Middle East">Arabian Gulf / Middle East (Emirati & Royal Estates)</option>
                      <option value="East Asia (Dynasty Domain)">East Asia (Sovereign & Private Compounds)</option>
                      <option value="Southern Alps / New Zealand">Southern Alps & Lakes / New Zealand</option>
                      <option value="Continental Europe (Palais & Alpine)">Continental Europe (Private Palais & Alpine)</option>
                      <option value="Pacific Atoll / Island Enclave">Pacific Atoll / Private Island</option>
                      <option value="Confidential Global Jurisdiction">Other Confidential Global Jurisdiction</option>
                    </select>
                  </div>

                  {/* Commission Scope */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Commission Typology
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      <option value="Sovereign Heritage Restoration & Fortification">Historical Palace Restoration & Fortification</option>
                      <option value="Subterranean Vault & Private Archive">Subterranean Vault & Art Archive</option>
                      <option value="Ancient Swamp Kauri Allocation">Ancient 45,000-Year Kauri Joinery Allocation</option>
                      <option value="Stealth Ballistic Joinery & Acoustic Isolation">Stealth Ballistic Fenestration & EMP Shielding</option>
                      <option value="Full Sovereign Estate Masterplan">Full Sovereign Estate Masterplan</option>
                    </select>
                  </div>
                </div>

                {/* Confidential Notes */}
                <div>
                  <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                    Confidential Commission Overview & Preliminary Directives
                  </label>
                  <textarea
                    rows={4}
                    value={formData.confidentialNotes}
                    onChange={(e) => setFormData({ ...formData, confidentialNotes: e.target.value })}
                    placeholder="Provide generalized architectural directives (e.g. 19th-century maritime compound requiring stone consolidation, sub-floor vault, and private security fenestration; strict client confidentiality mandate)..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E] leading-relaxed"
                  />
                </div>

                {/* Bilateral NDA Agreement Checkbox */}
                <div className="p-4 bg-[#FAF9F6] border border-[#DCD6CA] flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="ndaAgreed"
                    checked={formData.ndaAgreed}
                    onChange={(e) => setFormData({ ...formData, ndaAgreed: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-[#7A5B3E] focus:ring-[#7A5B3E] border-[#DCD6CA] cursor-pointer"
                  />
                  <label htmlFor="ndaAgreed" className="text-xs text-[#59554E] cursor-pointer leading-relaxed">
                    <strong className="text-[#1C1B18]">Bilateral NDA Covenant Acceptance:</strong> I understand that all consultations, property identifiers, and material specifications are protected under strict international non-disclosure covenants. I confirm authority to represent the aforementioned principal or family office.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Routing Transmission to Administrator...</span>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-[#B89053]" />
                      <span>Transmit to Private Office Administrator Under NDA</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#706B62] text-center">
                  All communications are encrypted end-to-end. Restorations by Henderson & Co. operates with an unblemished zero-leak discretion policy active since 1997.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

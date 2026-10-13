import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Mail, Phone, MapPin, Lock, ShieldCheck, FileText } from 'lucide-react';

interface InquirySectionProps {
  prefilledProject?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    roleOrTitle: 'Principal / Family Member',
    estateOrOffice: '',
    email: '',
    phone: '',
    contactPreference: 'Email & Secure Phone',
    region: 'Middle East & Arabian Gulf',
    scope: 'Historic Stone & Timber Estate Conservation',
    consultationType: 'Bilateral NDA Execution First',
    ndaAgreed: false,
    message: prefilledProject ? `Inquiring regarding: ${prefilledProject}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring regarding: ${prefilledProject}`,
      }));
    }
  }, [prefilledProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and a confidential email or secure phone number so Arthur T.J Henderson may reply.');
      return;
    }
    if (!formData.ndaAgreed) {
      setError('Please acknowledge our confidentiality standard before submitting.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 bg-[#F4F3EF] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#7A5B3E]" />
              <span>The Private Office · Confidential Correspondence</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Initiate a Private Dialogue
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3 leading-relaxed">
              We limit our practice to three or four substantial residential commissions each year to ensure Founder Arthur T.J Henderson’s personal oversight on every estate. All inquiries are treated with absolute discretion.
            </p>
          </div>
          <div className="text-xs text-[#706B62] space-y-1">
            <div className="font-medium text-[#1C1B18]">Reviewing Works for 2026 & 2027 Calendar</div>
            <div>Direct Principal Review by Arthur T.J Henderson within 48 Hours</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Workshop Location & Protocol */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#E5E1D8] space-y-6 shadow-xs">
              <h3 className="font-serif text-2xl text-[#1C1B18]">
                The Atelier & Seasoning Yards
              </h3>

              <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                To safeguard the privacy of our patrons and maintain the quiet concentration required for our timber joinery, our New Zealand seasoning yards and workshop are situated on an unmarked high-country station. The premises are closed to the public; visits are arranged strictly by private invitation for confirmed clients.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E5E1D8] text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Atelier & Seasoning Yards</span>
                    <span className="text-[#706B62] leading-relaxed">
                      Upper Ahuriri Basin, Ben Ohau Range, South Island, New Zealand
                    </span>
                    <span className="text-[11px] text-[#7A5B3E] block mt-0.5">
                      (Access by Private Arrangement Only · Unmarked Domain)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Postal Dispatch & Courier</span>
                    <span className="text-[#706B62]">
                      Private Bag 14, Remote Rural Service, Canterbury 7949, New Zealand
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Private Office Inquiries</span>
                    <a href="mailto:office@hendersonrestorations.co.nz" className="text-[#1C1B18] hover:text-[#7A5B3E] transition-colors font-mono">
                      office@hendersonrestorations.co.nz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Direct Atelier Telephone</span>
                    <a href="tel:+6436858120" className="text-[#1C1B18] hover:text-[#7A5B3E] transition-colors font-mono">
                      +64 (03) 685 8120
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Work Box */}
            <div className="bg-[#EFECE6] p-6 border border-[#DCD6CA] space-y-3 text-xs">
              <div className="font-semibold uppercase tracking-wider text-[#7A5B3E] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Practice Protocol</span>
              </div>
              <ul className="space-y-2.5 text-[#59554E] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#7A5B3E] font-bold">1.</span>
                  <span><strong>Direct Consultation:</strong> A confidential discussion with Arthur T.J Henderson to review your estate’s history, microclimate, and conservation goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A5B3E] font-bold">2.</span>
                  <span><strong>Bilateral NDA:</strong> Mutual non-disclosure covenant executed before any architectural plans, aerial photography, or family details are shared.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A5B3E] font-bold">3.</span>
                  <span><strong>Principal Inspection:</strong> Arthur T.J Henderson travels personally to the estate to inspect stone, timber decay, and local environmental stress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7A5B3E] font-bold">4.</span>
                  <span><strong>Permanent Artisans:</strong> Dedicated in-house craftsmen from New Zealand on-site until final handover. Zero third-party subcontractors.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white p-10 border border-[#E5E1D8] text-center space-y-6 shadow-xs">
                <div className="w-14 h-14 bg-[#7A5B3E]/10 rounded-full flex items-center justify-center mx-auto text-[#7A5B3E]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1B18]">
                  Inquiry Received Under Confidential Protocol
                </h3>
                <p className="text-sm text-[#59554E] max-w-md mx-auto leading-relaxed">
                  Thank you. Your message has been routed directly to Arthur T.J Henderson. All details will remain strictly confidential. Arthur T.J Henderson or his private secretary will be in contact within forty-eight hours.
                </p>
                <div className="pt-6 border-t border-[#E5E1D8] text-xs text-[#706B62]">
                  Private Bag 14, Remote Rural Service, New Zealand · office@hendersonrestorations.co.nz
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      ...formData,
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs text-[#7A5B3E] underline hover:text-[#1C1B18] cursor-pointer"
                >
                  Send another confidential inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 border border-[#E5E1D8] space-y-6 shadow-xs">
                <div className="border-b border-[#E5E1D8] pb-4">
                  <h3 className="font-serif text-2xl text-[#1C1B18]">
                    Confidential Commission Inquiry
                  </h3>
                  <p className="text-xs text-[#706B62] mt-1">
                    Please provide an initial overview of your residence. All information is protected by legal confidentiality.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Your Name / Representative *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Al-Nuaimi / Lord Sterling"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>

                  {/* Role / Capacity */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Capacity / Representation
                    </label>
                    <select
                      value={formData.roleOrTitle}
                      onChange={(e) => setFormData({ ...formData, roleOrTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      <option value="Principal / Family Member">Principal / Family Member</option>
                      <option value="Family Office Director / Trustee">Family Office Director / Trustee</option>
                      <option value="Royal Chamberlain / Private Secretary">Royal Chamberlain / Private Secretary</option>
                      <option value="Legal Counsel / Solicitor">Legal Counsel / Solicitor</option>
                      <option value="Coordinating Architect of Record">Coordinating Architect of Record</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Estate / Family Office */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Estate, Family Office, or Trust
                    </label>
                    <input
                      type="text"
                      value={formData.estateOrOffice}
                      onChange={(e) => setFormData({ ...formData, estateOrOffice: e.target.value })}
                      placeholder="e.g. Private Family Office (Optional)"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="confidential@office-domain.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Telephone */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Secure Phone / Direct Line
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 ... / +44 ... / +64 ..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>

                  {/* Consultation Preference */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Preferred Step
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      <option value="Bilateral NDA Execution First">Execute Mutual NDA First</option>
                      <option value="Direct Telephone Consultation">Direct Phone Call with Arthur T.J Henderson</option>
                      <option value="Courier Dispatch of Physical Monograph">Courier Physical Linen Folio & Timber Box</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Region */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Property Territory
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      <option value="Middle East & Arabian Gulf">Middle East & Arabian Gulf Coastline</option>
                      <option value="East Asia & Royal Domains">East Asia (Japan, Singapore & Regional Domains)</option>
                      <option value="Continental Europe">Continental Europe & Mediterranean Promontories</option>
                      <option value="Pacific & Alpine New Zealand">New Zealand High Country & South Pacific</option>
                      <option value="Other Global Sanctuary">Other Private Global Estate</option>
                    </select>
                  </div>

                  {/* Scope */}
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Intended Scope
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      <option value="Historic Stone & Timber Estate Conservation">Historic Stone & Timber Estate Conservation</option>
                      <option value="Bespoke High-Performance Timber Joinery & Sashes">Bespoke Timber Joinery & Sashes (Extreme Climates)</option>
                      <option value="Contemporary Glass & Timber Pavilion">Contemporary Glass & Timber Pavilion Addition</option>
                      <option value="Confidential Acoustic Salons & Private Library">Confidential Acoustic Salons & Council Chambers</option>
                      <option value="Subterranean Thermal & Seismic Engineering">Subterranean Thermal & Seismic Conservation</option>
                    </select>
                  </div>
                </div>

                {/* Notes / Message */}
                <div>
                  <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                    Initial Overview for Arthur T.J Henderson
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the nature of the property, its approximate period, any structural, climatic, or acoustic challenges, and your desired timeframe..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E] leading-relaxed"
                  />
                </div>

                {/* Discretion Checkbox */}
                <div className="p-4 bg-[#FAF9F6] border border-[#DCD6CA] flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="ndaAgreed"
                    checked={formData.ndaAgreed}
                    onChange={(e) => setFormData({ ...formData, ndaAgreed: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-[#7A5B3E] focus:ring-[#7A5B3E] border-[#DCD6CA] cursor-pointer"
                  />
                  <label htmlFor="ndaAgreed" className="text-xs text-[#59554E] cursor-pointer leading-relaxed">
                    <strong className="text-[#1C1B18]">Bilateral Confidentiality Standard:</strong> I understand that Restorations by Henderson & Co. operates under strict secrecy, and all discussions, site particulars, and architectural documents are protected under professional legal confidence.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? 'Transmitting to Arthur T.J Henderson...' : 'Submit Confidential Inquiry'}
                </button>

                <p className="text-[11px] text-[#706B62] text-center">
                  Restorations by Henderson & Co. Ltd. · Operational continuously since 1997 · Governed by New Zealand and English common law covenants.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

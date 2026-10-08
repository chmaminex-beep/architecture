import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Clock, Calendar, FileText, Send, AlertCircle, Sparkles, Building2 } from 'lucide-react';

interface InquirySectionProps {
  prefilledProject?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: 'Ponsonby',
    customSuburb: '',
    projectType: 'Heritage Villa Restoration',
    plansStatus: 'Concept Drawings in Progress',
    budgetRange: '$500,000 – $1,000,000 NZD',
    timeline: '3 to 6 Months',
    message: prefilledProject ? `I am inquiring regarding a restoration or renovation project similar to "${prefilledProject}".` : '',
    hasHeritageConsent: 'Unsure / Need Guidance',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const aucklandSuburbs = [
    'Herne Bay',
    'Ponsonby',
    'Grey Lynn',
    'Devonport',
    'Remuera',
    'Parnell',
    'Mount Eden',
    'Epsom',
    'Takapuna',
    'Omaha / Matakana Coast',
    'Other Auckland Suburb'
  ];

  const projectTypes = [
    'Heritage Villa Restoration (Victorian 1880–1905)',
    'Edwardian & Arts/Crafts Estate Restoration',
    'Luxury Contemporary Pavilion & Villa Extension',
    'Bespoke Joinery & Vacuum Sash Window Retrofit',
    'Complete Ground-Up Architectural Renovation',
  ];

  const plansStatuses = [
    'Consented Architectural Drawings Ready',
    'Concept Drawings with Architect',
    'Seeking Design-Build / Architect Recommendation',
    'Early Feasibility & Pre-Purchase Advice',
  ];

  const budgetRanges = [
    '$250,000 – $500,000 NZD',
    '$500,000 – $1,000,000 NZD',
    '$1,000,000 – $2,500,000 NZD',
    '$2,500,000+ NZD',
  ];

  const timelines = [
    'Immediate (Next 1–3 Months)',
    '3 to 6 Months',
    '6 to 12 Months',
    'Planning for Next Year (2027)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please complete your name, email, and contact number so Todd can review your inquiry.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    // Simulate reliable dispatch
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
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              Project Inquiries & Private Consultations
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Begin the Conversation
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3">
              We take on a limited roster of 4–6 major residential restorations and bespoke extensions each year to ensure Todd’s personal oversight on every joint and sill.
            </p>
          </div>
          <div className="text-xs text-[#706B62] space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-700" />
              <span className="font-medium text-[#1C1B18]">Currently Booking Q3/Q4 2026 & 2027 Works</span>
            </div>
            <div>Direct Principal Review: Within 24 Business Hours</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Studio Contact & Trust Signals */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#E5E1D8] space-y-6">
              <h3 className="font-serif text-2xl text-[#1C1B18]">
                Auckland Studio & Mill
              </h3>

              <p className="text-xs md:text-sm text-[#59554E] leading-relaxed">
                Our central joinery workshop and timber storage mill is situated in Morningside, minutes from Auckland's premier heritage precincts.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E5E1D8] text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Workshop Address</span>
                    <span className="text-[#706B62]">14 McDonald Street, Morningside, Auckland 1025</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Direct Telephone</span>
                    <a href="tel:+6493764820" className="text-[#1C1B18] hover:text-[#7A5B3E] transition-colors">
                      +64 (09) 376 4820
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Inquiry Email</span>
                    <a href="mailto:inquiries@restoredbytodd.co.nz" className="text-[#1C1B18] hover:text-[#7A5B3E] transition-colors">
                      inquiries@restoredbytodd.co.nz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1B18] block">Operating Hours</span>
                    <span className="text-[#706B62]">Monday – Friday: 7:00 AM – 5:30 PM NZST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auckland Heritage Consultation Checklist */}
            <div className="bg-[#EFECE6] p-6 border border-[#DCD6CA] space-y-3 text-xs">
              <div className="font-semibold uppercase tracking-wider text-[#7A5B3E]">
                What to Prepare for Your Discovery Call
              </div>
              <ul className="space-y-2 text-[#59554E]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                  <span>Property address & approximate construction era (e.g. 1890s Villa, 1920s Bungalow).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                  <span>Existing architectural floor plans or preliminary sketches (if available).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                  <span>Key priorities: structural levelling, sash insulation, or modern living pavilion.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                  <span>Known heritage covenants or Auckland Council Special Character notations.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Comprehensive Architectural Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white p-10 border border-[#E5E1D8] text-center space-y-6">
                <div className="w-14 h-14 bg-[#7A5B3E]/10 rounded-full flex items-center justify-center mx-auto text-[#7A5B3E]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1B18]">
                  Thank You, {formData.name}
                </h3>
                <p className="text-sm text-[#59554E] max-w-md mx-auto leading-relaxed">
                  Your project inquiry regarding your <span className="font-semibold text-[#1C1B18]">{formData.suburb}</span> residence has been received directly by Todd Macpherson. Todd will review your architectural notes and phone you within 24 business hours to arrange an initial on-site consultation.
                </p>
                <div className="pt-6 border-t border-[#E5E1D8] text-xs text-[#706B62]">
                  Reference ID: NZ-RBT-{Math.floor(100000 + Math.random() * 900000)} · A confirmation has been sent to {formData.email}
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      ...formData,
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs text-[#7A5B3E] underline hover:text-[#1C1B18]"
                >
                  Submit another inquiry or add details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 border border-[#E5E1D8] space-y-6">
                <div className="border-b border-[#E5E1D8] pb-4">
                  <h3 className="font-serif text-2xl text-[#1C1B18]">
                    Property & Project Consultation Form
                  </h3>
                  <p className="text-xs text-[#706B62] mt-1">
                    Direct confidential review by Principal Builder Todd.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Primary Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. William Pemberton"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. wpemberton@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +64 21 890 1234"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Auckland Suburb / Locality
                    </label>
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      {aucklandSuburbs.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Typology & Drawing Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Primary Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Architectural Plans Status
                    </label>
                    <select
                      value={formData.plansStatus}
                      onChange={(e) => setFormData({ ...formData, plansStatus: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      {plansStatuses.map((ps) => (
                        <option key={ps} value={ps}>{ps}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Investment & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Anticipated Investment Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                      Target Construction Start
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E]"
                    >
                      {timelines.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Vision & Notes */}
                <div>
                  <label className="block text-xs font-medium text-[#1C1B18] uppercase tracking-wider mb-1.5">
                    Project Vision & Architectural Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property (e.g. 1902 double-bay villa with decayed veranda fretwork; looking to extend rear for open kitchen & living with floor-to-ceiling glass; would like to restore all existing sash windows and kauri floors)..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#DCD6CA] focus:bg-white focus:outline-none focus:border-[#7A5B3E] leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry to Todd...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry to Principal Craftsman</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#706B62] text-center">
                  Your architectural vision and property address are kept strictly private. Restored by Todd operates with full professional indemnity and Master Build 10-Year Guarantee cover.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

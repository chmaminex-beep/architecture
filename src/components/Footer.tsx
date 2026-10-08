import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1B18] text-[#D8D4CA] pt-16 pb-12 border-t border-[#302D27]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#302D27]">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl text-white block">
              Restored by Todd
            </span>
            <p className="text-xs text-[#A8A398] max-w-sm leading-relaxed">
              Forensic heritage restoration and bespoke luxury residential additions across Auckland, New Zealand. Led by Master Craftsman Todd Macpherson.
            </p>
            <div className="text-xs text-[#827D74]">
              Est. 2004 · Tāmaki Makaurau, New Zealand
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-white/50 text-[11px] font-semibold">
              Selected Works
            </div>
            <ul className="space-y-2 text-[#C2BEB4]">
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Marine Parade Villa (Herne Bay)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Ponsonby Street Pavilion</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Victoria Avenue Residence (Remuera)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Richmond Road Joinery (Grey Lynn)</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Maritime Villa (Devonport)</a></li>
            </ul>
          </div>

          {/* Practice & Journal */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="uppercase tracking-widest text-white/50 text-[11px] font-semibold">
              The Practice
            </div>
            <div className="space-y-2 text-[#C2BEB4]">
              <div>Registered Master Builders Association NZ (#38102)</div>
              <div>Heritage New Zealand Pouhere Taonga Recognized Practitioner</div>
              <div>Licensed Building Practitioner (LBP Carpentry & Site 2)</div>
              <div className="pt-2 text-[#827D74]">
                14 McDonald Street, Morningside, Auckland · +64 (09) 376 4820
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827D74]">
          <div>
            © {new Date().getFullYear()} Restored by Todd Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Auckland Special Character Overlay Compliance</span>
            <span>·</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

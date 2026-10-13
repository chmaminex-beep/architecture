import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenDiscretionProtocol: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenDiscretionProtocol }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Works', href: '#portfolio' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Atelier Philosophy', href: '#philosophy' },
    { label: 'Monographs', href: '#journal' },
    { label: 'The Private Office', href: '#inquiry' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E1D8] shadow-xs'
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs border-b border-[#E5E1D8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element / mark) */}
        <a
          href="#"
          className="flex items-center hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          aria-label="Restorations by Henderson & Co. Home"
        >
          <Logo variant="compact" />
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Text Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-[#59554E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1C1B18] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7A5B3E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenDiscretionProtocol}
            className="hover:text-[#1C1B18] transition-colors whitespace-nowrap shrink-0 text-xs text-[#7A5B3E] font-semibold cursor-pointer"
          >
            Policy of Secrecy
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors rounded-none border border-[#1C1B18] hover:border-[#7A5B3E] whitespace-nowrap cursor-pointer shadow-xs"
          >
            Confidential Inquiries
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1B18] hover:text-[#7A5B3E] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E5E1D8] px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#1C1B18]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E5E1D8]/50 hover:text-[#7A5B3E] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiscretionProtocol();
              }}
              className="py-2 text-left border-b border-[#E5E1D8]/50 text-[#7A5B3E] font-medium"
            >
              Policy of Secrecy & Bilateral NDAs
            </button>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors"
              >
                Confidential Inquiries
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

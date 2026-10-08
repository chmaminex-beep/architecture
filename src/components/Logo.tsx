import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'mark-only';
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'compact',
  light = false
}) => {
  const textColor = light ? 'text-white' : 'text-[#1C1B18]';
  const accentColor = '#B89053'; // Refined architectural gold/bronze
  const subColor = light ? 'text-[#A8A398]' : 'text-[#7A5B3E]';

  // Architectural Crest Monogram Mark
  const Emblem = (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8 shrink-0 transition-transform duration-300 hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke={accentColor}
        strokeWidth="1.2"
        strokeDasharray="2 1"
        className="opacity-75"
      />
      <circle
        cx="20"
        cy="20"
        r="16.5"
        stroke={accentColor}
        strokeWidth="0.8"
      />
      {/* Central Architectural Compass / Framing Lines */}
      <path
        d="M20 7V33M7 20H33"
        stroke={accentColor}
        strokeWidth="0.5"
        strokeOpacity="0.4"
      />
      {/* Stylized Interlocking H & C Monogram */}
      <text
        x="13"
        y="25"
        fill={light ? '#FFFFFF' : '#1C1B18'}
        fontFamily="Cormorant Garamond, serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="-0.5"
      >
        H
      </text>
      <text
        x="22"
        y="25"
        fill={accentColor}
        fontFamily="Cormorant Garamond, serif"
        fontSize="13"
        fontWeight="600"
      >
        C
      </text>
      <circle cx="20" cy="20" r="1.5" fill={accentColor} />
    </svg>
  );

  if (variant === 'mark-only') {
    return Emblem;
  }

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        {Emblem}
        <div className="flex flex-col">
          <span className={`font-serif text-xl sm:text-2xl font-medium tracking-tight ${textColor} leading-tight`}>
            Restorations by Henderson & Co.
          </span>
          <span className={`text-[10px] uppercase tracking-widest font-sans font-medium ${subColor}`}>
            Architectural Heritage & Luxury Renovations · Auckland
          </span>
        </div>
      </div>
    );
  }

  // Compact variant for Top Bar Contract (Single clean line with mark)
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {Emblem}
      <span className={`font-serif text-xl sm:text-2xl font-medium tracking-tight ${textColor} whitespace-nowrap`}>
        Restorations by Henderson & Co.
      </span>
    </div>
  );
};

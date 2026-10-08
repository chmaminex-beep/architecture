import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Original Condition / Structural Consolidation',
  afterLabel = 'Completed Master Craftsmanship & Modern Pavilion',
  title = 'The Anatomy of Transformation',
  subtitle = 'Ponsonby Heritage Villa · 1905 to Contemporary Living',
  description = 'Drag the slider to examine how our team structurally preserved the 120-year-old street frontage while opening the rear into an expansive light-filled architectural pavilion.'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-[#FAF9F6] border-y border-[#E5E1D8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              Forensic Preservation & Extension
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              {title}
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="text-xs text-[#706B62] flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-[#7A5B3E]" />
            <span>Interactive comparison · Drag handle horizontally</span>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize border border-[#DCD6CA] shadow-xs"
        >
          {/* AFTER Image (Background) */}
          <img
            src={afterImage}
            alt="Completed architectural restoration"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'pavilion')}
          />

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="Original heritage state during restoration"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: '100%'
              }}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, 'craft')}
            />
            {/* Before Tint Filter for vintage / structural realism */}
            <div className="absolute inset-0 bg-[#352F27]/20 mix-blend-multiply pointer-events-none" />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1B18] text-white border-2 border-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
              <ArrowLeftRight className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Floating State Labels */}
          <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs text-white uppercase tracking-wider font-medium border border-white/10">
              {beforeLabel}
            </div>
          </div>
          <div className="absolute bottom-5 right-5 z-20 pointer-events-none">
            <div className="bg-[#7A5B3E]/90 backdrop-blur-md px-3.5 py-1.5 text-xs text-white uppercase tracking-wider font-medium border border-white/10">
              {afterLabel}
            </div>
          </div>
        </div>

        {/* Technical Sub-Caption */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-[#E5E1D8]/60 text-xs text-[#59554E]">
          <div>
            <span className="font-semibold text-[#1C1B18] block mb-1">Structural Reinforcement</span>
            Replaced failing unreinforced brick foundations with seismic concrete ring beam and grade 350 flitched steel portal frames.
          </div>
          <div>
            <span className="font-semibold text-[#1C1B18] block mb-1">Moulding & Joinery Replication</span>
            100% in-house cutter profiling of original 1905 kauri architraves, fretwork brackets, and double-hung sash window stiles.
          </div>
          <div>
            <span className="font-semibold text-[#1C1B18] block mb-1">Modern Thermal Envelope</span>
            Integrated continuous thermal insulation, vacuum-insulated double glazing, and hydronic radiant in-slab heating.
          </div>
        </div>
      </div>
    </div>
  );
};

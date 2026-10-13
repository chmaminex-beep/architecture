import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Quote, FileKey, AlertCircle } from 'lucide-react';
import { Project } from '../data/projects';
import { handleImageError } from '../utils/imageFallback';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FAF9F6] border border-[#DCD6CA] w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-2xl relative flex flex-col">
        {/* Modal Top Security Classification Bar */}
        <div className="px-6 py-4 bg-[#1C1B18] text-white flex items-center justify-between border-b border-[#302D27]">
          <div className="flex items-center gap-3 text-xs tracking-wider font-mono">
            <span className="text-[#B89053] font-semibold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>CLASSIFIED COMMISSION</span>
            </span>
            <span className="text-white/40">/</span>
            <span className="text-[#A8A398]">{project.regionCode}</span>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{project.territory}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-10">
          {/* Title Area */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#7A5B3E] mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{project.ndaStatus}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#59554E] mt-2 font-serif italic">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Monograph View */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full bg-[#1C1B18] overflow-hidden border border-[#DCD6CA]">
              <img
                src={project.gallery[activeImageIndex] || project.heroImage}
                alt={`${project.title} monograph excerpt ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'villa')}
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs px-3 py-1.5 text-white text-[11px] font-mono border border-white/20">
                Redacted Photographic Excerpt · Plate {activeImageIndex + 1} of {project.gallery.length}
              </div>
            </div>

            {/* Thumbnail switcher if multiple images */}
            {project.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#7A5B3E] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Monograph thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, 'villa')}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Redaction Notice Alert */}
          <div className="p-4 bg-[#F3F0EB] border-l-3 border-[#7A5B3E] text-xs text-[#59554E] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Discretion Notice:</strong> In compliance with the client family’s security mandate, precise topographic contours, satellite azimuths, and full interior elevations are withheld from this public monograph. Complete unredacted schematics are viewable solely in-person at our private New Zealand atelier under a mutual non-disclosure agreement.
            </p>
          </div>

          {/* Narrative & Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#E5E1D8]">
            {/* Left Column: Project Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-[#1C1B18] mb-3">Architectural & Forensic Scope</h3>
                <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E1D8]/60">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold">
                    The Structural & Security Challenge
                  </div>
                  <p className="text-xs text-[#59554E] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold">
                    The Craftsmanship Solution
                  </div>
                  <p className="text-xs text-[#59554E] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Rare Materials Handled */}
              <div className="pt-4 border-t border-[#E5E1D8]/60">
                <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold mb-2">
                  Rare & Geological Materials Deployed
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1C1B18]">
                  {project.materialsUsed.map((mat, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                      <span>{mat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Specifications & Testimonial */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F4F3EF] p-6 border border-[#E5E1D8]">
                <h4 className="text-xs uppercase tracking-widest text-[#7A5B3E] font-semibold mb-4 flex items-center gap-1.5">
                  <FileKey className="w-4 h-4" />
                  <span>Dossier Key Parameters</span>
                </h4>
                <dl className="space-y-3 text-xs">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 pb-2 border-b border-[#E5E1D8]/60 last:border-0 last:pb-0">
                      <dt className="text-[#706B62] shrink-0">{spec.label}</dt>
                      <dd className="text-[#1C1B18] font-medium text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {project.testimonial && (
                <div className="bg-white p-6 border border-[#E5E1D8] relative">
                  <Quote className="w-6 h-6 text-[#7A5B3E]/30 mb-2" />
                  <p className="text-xs md:text-sm text-[#1C1B18] font-serif italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#E5E1D8] text-xs">
                    <span className="font-semibold text-[#1C1B18] block">{project.testimonial.author}</span>
                    <span className="text-[#706B62] font-mono text-[11px]">{project.testimonial.location}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full py-4 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Lock className="w-3.5 h-3.5 text-[#B89053]" />
                <span>Request Private Dossier Access Under NDA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

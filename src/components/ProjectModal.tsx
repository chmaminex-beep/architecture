import React, { useState } from 'react';
import { X, Quote, Lock, ShieldCheck } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FAF9F6] border border-[#DCD6CA] w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-2xl relative flex flex-col">
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#1C1B18] text-white flex items-center justify-between border-b border-[#302D27]">
          <div className="flex items-center gap-3 text-xs tracking-wider">
            <span className="text-[#E5D7C7] font-medium flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#B89053]" />
              <span>{project.territoryTag}</span>
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">{project.scope}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/60 tabular-nums">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-10">
          {/* Title Area */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-1">
              Private Commission Archive · {project.region}
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#59554E] mt-2 font-serif italic">
              {project.subtitle}
            </p>
          </div>

          {/* Photographic View */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full bg-[#1C1B18] overflow-hidden border border-[#DCD6CA]">
              <img
                src={project.gallery[activeImageIndex] || project.heroImage}
                alt={`${project.title} photographic study ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'villa')}
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs px-3 py-1.5 text-white text-[11px] border border-white/10 flex items-center gap-2">
                <span>Plate {activeImageIndex + 1} of {project.gallery.length}</span>
                <span>·</span>
                <span>{project.territoryTag}</span>
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
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, 'villa')}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Discretion Notice Banner */}
          <div className="p-4 bg-[#F4F3EF] border border-[#E5E1D8] flex items-start gap-3 text-xs">
            <ShieldCheck className="w-4 h-4 text-[#7A5B3E] shrink-0 mt-0.5" />
            <div className="text-[#59554E] leading-relaxed">
              <strong className="text-[#1C1B18]">Policy of Secrecy & Redacted Records:</strong> {project.discretionNotice}
            </div>
          </div>

          {/* Narrative & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#E5E1D8]">
            {/* Left Column: Context, Challenge, Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-[#1C1B18] mb-3">Architectural Context</h3>
                <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E1D8]/60">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold">
                    The Conservation Challenge
                  </div>
                  <p className="text-xs text-[#59554E] leading-relaxed">
                    {project.architecturalChallenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold">
                    The Craftsmanship Approach
                  </div>
                  <p className="text-xs text-[#59554E] leading-relaxed">
                    {project.craftApproach}
                  </p>
                </div>
              </div>

              {/* Note from Arthur T.J Henderson */}
              {project.founderNote && (
                <div className="p-5 bg-[#F4F3EF] border border-[#DCD6CA] space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold">
                    Note from Arthur T.J Henderson (Founder & Principal)
                  </div>
                  <p className="text-xs md:text-sm text-[#4A463F] font-serif italic leading-relaxed">
                    "{project.founderNote}"
                  </p>
                </div>
              )}

              {/* Materials Used */}
              <div className="pt-4 border-t border-[#E5E1D8]/60">
                <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold mb-2">
                  Key Materials & Native Timbers
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#1C1B18]">
                  {project.materials.map((mat, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                      <span>{mat}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Specifications & Representative Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F4F3EF] p-6 border border-[#E5E1D8]">
                <h4 className="text-xs uppercase tracking-widest text-[#7A5B3E] font-semibold mb-4">
                  Commission Particulars
                </h4>
                <dl className="space-y-3 text-xs">
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 pb-2 border-b border-[#E5E1D8]/60 last:border-0 last:pb-0">
                      <dt className="text-[#706B62] shrink-0">{detail.label}</dt>
                      <dd className="text-[#1C1B18] font-medium text-right">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {project.representativeStatement && (
                <div className="bg-white p-6 border border-[#E5E1D8] relative">
                  <Quote className="w-6 h-6 text-[#7A5B3E]/30 mb-2" />
                  <p className="text-xs md:text-sm text-[#1C1B18] font-serif italic leading-relaxed">
                    "{project.representativeStatement.quote}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#E5E1D8] text-xs">
                    <span className="text-[#706B62]">{project.representativeStatement.designation}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full py-4 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer shadow-xs"
              >
                Inquire Regarding Similar Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

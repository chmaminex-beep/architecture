import React, { useState } from 'react';
import { X, MapPin, Calendar, Compass, ShieldCheck, Quote, ChevronRight, Check } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in">
      <div
        className="bg-[#FAF9F6] w-full max-w-5xl overflow-hidden border border-[#DCD6CA] shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-md px-6 py-4 border-b border-[#E5E1D8] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-[#706B62]">
            <span className="uppercase tracking-widest text-[#7A5B3E] font-medium">{project.categoryLabel}</span>
            <span>·</span>
            <span>{project.suburb}, {project.region}</span>
            <span>·</span>
            <span>{project.era}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1C1B18] hover:text-[#7A5B3E] transition-colors cursor-pointer rounded-full hover:bg-[#EFECE6]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-10">
          {/* Title Area */}
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#59554E] mt-2 font-serif italic">
              {project.subtitle}
            </p>
          </div>

          {/* Gallery View */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full bg-[#1C1B18] overflow-hidden border border-[#DCD6CA]">
              <img
                src={project.gallery[activeImageIndex] || project.heroImage}
                alt={`${project.title} detailed photograph ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
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
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Narrative & Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#E5E1D8]">
            {/* Left Column: Project Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-[#1C1B18] mb-3">The Architectural Context</h3>
                <p className="text-sm md:text-base text-[#59554E] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E1D8]/60">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold">
                    The Heritage Challenge
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

              {/* Native Timbers Stewardship */}
              <div className="pt-4 border-t border-[#E5E1D8]/60">
                <div className="text-xs uppercase tracking-wider text-[#7A5B3E] font-semibold mb-2">
                  Native & Heritage Timbers Handled
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1C1B18]">
                  {project.timbersUsed.map((timber, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E]" />
                      <span>{timber}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Specifications & Testimonial */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F4F3EF] p-6 border border-[#E5E1D8]">
                <h4 className="text-xs uppercase tracking-widest text-[#7A5B3E] font-semibold mb-4">
                  Project Specifications
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
                    <span className="text-[#706B62]">{project.testimonial.location}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full py-3.5 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer"
              >
                Inquire About a Similar Residence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

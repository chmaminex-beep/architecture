import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, Lock, ShieldCheck } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { handleImageError } from '../utils/imageFallback';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenInquiry: (projectTitle?: string) => void;
}

type RegionFilter = 'all' | 'Middle East & Arabian Gulf' | 'East Asia & Royal Domains' | 'Continental Europe' | 'Pacific & Alpine New Zealand';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onOpenInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<RegionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Commissions' },
    { id: 'Middle East & Arabian Gulf', label: 'Middle East & Gulf' },
    { id: 'East Asia & Royal Domains', label: 'East Asia' },
    { id: 'Continental Europe', label: 'Continental Europe' },
    { id: 'Pacific & Alpine New Zealand', label: 'Pacific & New Zealand' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesRegion = activeFilter === 'all' || project.region === activeFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.territoryTag.toLowerCase().includes(query) ||
        project.scope.toLowerCase().includes(query) ||
        project.materials.some((m) => m.toLowerCase().includes(query));

      return matchesRegion && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#7A5B3E]" />
              <span>Selected Works Archive · 1997–2026 · Governed by Bilateral NDAs</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Private Residences & Architectural Restorations
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3 leading-relaxed">
              Out of strict respect for our patrons, personal family identities, municipal addresses, and verifiable coordinates are withheld as a company policy. The photographic records below present material studies, joinery profiles, and conservation solutions documented with the consent of our clients.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#706B62] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search region, timber, or scope..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-[#DCD6CA] focus:outline-none focus:border-[#7A5B3E] transition-colors"
            />
          </div>
        </div>

        {/* Filter Controls (Segmented Clean Typography) */}
        <div className="flex items-center gap-1 overflow-x-auto pb-4 mb-10 border-b border-[#E5E1D8]/60 text-xs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as RegionFilter)}
              className={`px-4 py-2 font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap border-b-2 ${
                activeFilter === tab.id
                  ? 'border-[#7A5B3E] text-[#1C1B18] bg-[#F3F0EB]'
                  : 'border-transparent text-[#706B62] hover:text-[#1C1B18] hover:bg-[#F8F7F3]'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-auto text-xs text-[#706B62] hidden sm:block">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'commission' : 'commissions'} catalogued
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-[#706B62] bg-white border border-[#E5E1D8] p-8">
            <p className="font-serif text-2xl text-[#1C1B18] mb-2">No projects match your search criteria.</p>
            <p className="text-xs">Try selecting a different region or clearing the search bar.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs text-[#7A5B3E] underline hover:text-[#1C1B18] cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const isLargeCard = idx === 0 || idx === 3;
              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer bg-white border border-[#E5E1D8] hover:border-[#B5A898] transition-all duration-300 flex flex-col justify-between ${
                    isLargeCard ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  {/* Image View */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, 'villa')}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs p-2 text-[#1C1B18] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    {/* Subtle Discretion Badge on Image */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 text-white text-[10px] tracking-wider uppercase flex items-center gap-1.5 border border-white/10">
                      <ShieldCheck className="w-3 h-3 text-[#E5D7C7]" />
                      <span>{project.territoryTag}</span>
                    </div>
                  </div>

                  {/* Card Content (Zero-Pill Discipline) */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#706B62] mb-2 flex-wrap">
                        <span className="text-[#7A5B3E] font-medium">{project.region}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.scope}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums font-mono text-[11px]">{project.year}</span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl text-[#1C1B18] group-hover:text-[#7A5B3E] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs md:text-sm text-[#59554E] mt-2 line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Bottom Metadata & Link */}
                    <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#706B62]">
                      <span className="text-[11px] text-[#7A5B3E] truncate max-w-[200px]">
                        {project.materials[0]}
                      </span>
                      <span className="text-[11px] font-medium text-[#1C1B18] group-hover:underline flex items-center gap-1 shrink-0">
                        Review Monograph →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quiet Footnote about Full Dossier Inquiries */}
        <div className="mt-12 p-6 bg-[#F4F3EF] border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="text-[#59554E] max-w-2xl leading-relaxed">
            <strong className="text-[#1C1B18]">Notice to Family Offices, Private Secretaries & Counsel:</strong> Detailed joinery sections, structural calculations, and complete site folios are held in our private archives. They may be examined in person at our New Zealand workshop or reviewed via encrypted digital dispatch upon execution of a mutual non-disclosure agreement.
          </div>
          <button
            onClick={() => onOpenInquiry()}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors shrink-0 whitespace-nowrap cursor-pointer"
          >
            Request Private Dossier
          </button>
        </div>
      </div>
    </section>
  );
};

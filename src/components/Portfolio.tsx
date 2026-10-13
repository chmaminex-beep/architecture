import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, Lock, ShieldCheck, FileKey } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { handleImageError } from '../utils/imageFallback';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'sovereign' | 'estates' | 'maritime' | 'joinery';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Classified Commissions' },
    { id: 'sovereign', label: 'Royal & Sovereign Compounds' },
    { id: 'estates', label: 'Dynastic Sanctuaries' },
    { id: 'maritime', label: 'Maritime Fortresses' },
    { id: 'joinery', label: 'Rare Ancient Timber' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (activeFilter === 'sovereign') {
        matchesCategory = project.classification.toLowerCase().includes('sovereign') || project.classification.toLowerCase().includes('royal');
      } else if (activeFilter === 'estates') {
        matchesCategory = project.classification.toLowerCase().includes('estate') || project.classification.toLowerCase().includes('family office');
      } else if (activeFilter === 'maritime') {
        matchesCategory = project.title.toLowerCase().includes('maritime') || project.title.toLowerCase().includes('coastal') || project.title.toLowerCase().includes('citadel') || project.title.toLowerCase().includes('atoll');
      } else if (activeFilter === 'joinery') {
        matchesCategory = project.materialsUsed.some(m => m.toLowerCase().includes('kauri') || m.toLowerCase().includes('joinery'));
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.territory.toLowerCase().includes(query) ||
        project.classification.toLowerCase().includes(query) ||
        project.regionCode.toLowerCase().includes(query) ||
        project.materialsUsed.some((m) => m.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Restricted Portfolio · Redacted Visual Monographs · 1997–2026</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Classified Commissions & Sovereign Domains
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3 leading-relaxed">
              In accordance with our strict non-disclosure policy, all client identities, precise geographic coordinates, and identifying exterior elevations are permanently redacted. The monographs below present anonymized structural excerpts, security assemblies, and material studies.
            </p>
          </div>

          {/* Search by Territory / Material */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#706B62] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter territory, code, or material..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#DCD6CA] focus:outline-none focus:border-[#7A5B3E] transition-colors"
            />
          </div>
        </div>

        {/* NDA Protocol Notice Box */}
        <div className="mb-10 p-4 bg-[#F3F0EB] border border-[#DCD6CA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#59554E]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#7A5B3E] shrink-0" />
            <span>
              <strong>Protocol Notice:</strong> Full unredacted architectural drawings, high-resolution photographic dossiers, and timber provenance certificates are released exclusively under bilateral non-disclosure agreements following principal vetting.
            </span>
          </div>
          <span className="text-[#7A5B3E] font-medium shrink-0 flex items-center gap-1.5">
            <FileKey className="w-3.5 h-3.5" />
            <span>Encrypted Archival Standard</span>
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-4 mb-10 border-b border-[#E5E1D8]/60 text-xs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as FilterCategory)}
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
            Displaying {filteredProjects.length} classified records
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-[#706B62]">
            <p className="font-serif text-2xl text-[#1C1B18] mb-2">No classified records matched your search query.</p>
            <p className="text-xs">Try clearing query terms or search by "Gulf", "Sovereign", "Kauri", or "Alps".</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs text-[#7A5B3E] underline hover:text-[#1C1B18]"
            >
              Reset all parameters
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
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, 'villa')}
                    />
                    {/* Classified Stamp Overlay */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs px-2.5 py-1 text-white text-[10px] uppercase tracking-widest font-mono border border-white/20 flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-[#B89053]" />
                      <span>{project.regionCode}</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs p-2 text-[#1C1B18] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Discrete Metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#706B62] mb-2 flex-wrap">
                        <span className="text-[#7A5B3E] font-medium">{project.classification}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.territory}</span>
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

                    {/* Bottom Specs & NDA Badge */}
                    <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#706B62]">
                      <span className="flex items-center gap-1 text-[#7A5B3E] text-[11px] font-medium">
                        <Lock className="w-3 h-3" />
                        <span>{project.ndaStatus.split('·')[0]}</span>
                      </span>
                      <span className="text-[11px] underline group-hover:text-[#1C1B18]">
                        Review Monograph →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

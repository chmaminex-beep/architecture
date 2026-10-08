import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { handleImageError } from '../utils/imageFallback';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'heritage-villa' | 'luxury-renovation' | 'edwardian-bungalow' | 'bespoke-joinery';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'heritage-villa', label: 'Heritage Villas' },
    { id: 'luxury-renovation', label: 'Luxury Renovations' },
    { id: 'edwardian-bungalow', label: 'Edwardian & Bungalows' },
    { id: 'bespoke-joinery', label: 'Bespoke Joinery' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              The Portfolio · 1997–2026 · Operational Since 1997
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Selected Heritage Restorations & Luxury Additions
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3">
              Explore nearly three decades of forensic timber restorations, seamless contemporary pavilions, and bespoke architectural fenestration across Auckland.
            </p>
          </div>

          {/* Search by Suburb / Era */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#706B62] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search suburb, era, or timber..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#DCD6CA] focus:outline-none focus:border-[#7A5B3E] transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Bar - Allowed as functional controls) */}
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
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>

        {/* Projects Grid (Bento Style with Asymmetric Anchor) */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-[#706B62]">
            <p className="font-serif text-2xl text-[#1C1B18] mb-2">No projects matched your search criteria.</p>
            <p className="text-xs">Try clearing your filters or searching for "Ponsonby", "Herne Bay", or "Kauri".</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs text-[#7A5B3E] underline hover:text-[#1C1B18]"
            >
              Reset all filters
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
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs p-2 text-[#1C1B18] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content (Zero-Pill Metadata Rule Compliant) */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Clean Unboxed Metadata with Typographic Separators */}
                      <div className="flex items-center gap-2 text-xs text-[#706B62] mb-2">
                        <span className="text-[#7A5B3E] font-medium">{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.suburb}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{project.year}</span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl text-[#1C1B18] group-hover:text-[#7A5B3E] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs md:text-sm text-[#59554E] mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Timber & Architectural Details */}
                    <div className="pt-4 border-t border-[#E5E1D8]/60 flex items-center justify-between text-xs text-[#706B62]">
                      <span className="truncate max-w-[220px]">
                        {project.era}
                      </span>
                      <span className="text-[#1C1B18] font-medium group-hover:underline flex items-center gap-1">
                        View Case Study
                        <ArrowUpRight className="w-3 h-3 inline" />
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

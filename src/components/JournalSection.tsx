import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';
import { handleImageError } from '../utils/imageFallback';

interface JournalSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Timber Science', 'Modern Additions', 'Joinery Craft', 'Heritage Consents'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <section id="journal" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E5E1D8]">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#7A5B3E] font-medium mb-2">
              The Craftsman’s Journal
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] tracking-tight">
              Essays on Architectural Restoration & Timber Science
            </h2>
            <p className="text-sm md:text-base text-[#59554E] mt-3">
              Written from our Morningside workshop bench and on-site across Auckland villas. Technical methodologies, timber diagnostics, and structural solutions.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#1C1B18] text-white border-[#1C1B18]'
                    : 'bg-white text-[#706B62] border-[#DCD6CA] hover:border-[#1C1B18] hover:text-[#1C1B18]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured First Article + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Featured Article (First) */}
          {filteredArticles.length > 0 && (
            <div
              onClick={() => onSelectArticle(filteredArticles[0])}
              className="lg:col-span-7 bg-white border border-[#E5E1D8] hover:border-[#B5A898] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
                <img
                  src={filteredArticles[0].heroImage}
                  alt={filteredArticles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, 'craft')}
                />
              </div>
              <div className="p-8 space-y-4">
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#706B62]">
                  <span className="text-[#7A5B3E] font-medium">{filteredArticles[0].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredArticles[0].publishDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredArticles[0].readTime}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-[#1C1B18] group-hover:text-[#7A5B3E] transition-colors leading-snug">
                  {filteredArticles[0].title}
                </h3>

                <p className="text-sm text-[#59554E] leading-relaxed line-clamp-3">
                  {filteredArticles[0].excerpt}
                </p>

                <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs">
                  <span className="text-[#706B62]">By {filteredArticles[0].author.name}</span>
                  <span className="text-[#1C1B18] font-semibold flex items-center gap-1 group-hover:underline">
                    Read Essay
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Stack (Articles 1 & 2) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {filteredArticles.slice(1, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white border border-[#E5E1D8] hover:border-[#B5A898] transition-all cursor-pointer group p-6 flex flex-col justify-between flex-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#706B62]">
                    <span className="text-[#7A5B3E] font-medium">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-[#1C1B18] group-hover:text-[#7A5B3E] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#59554E] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs">
                  <span className="text-[#706B62]">By {article.author.name}</span>
                  <span className="text-[#1C1B18] font-semibold flex items-center gap-1 group-hover:underline">
                    Read Essay
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row if more articles */}
        {filteredArticles.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.slice(3).map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white border border-[#E5E1D8] hover:border-[#B5A898] transition-all cursor-pointer group p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#706B62]">
                    <span className="text-[#7A5B3E] font-medium">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#1C1B18] group-hover:text-[#7A5B3E] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#59554E] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs">
                  <span className="text-[#706B62]">By {article.author.name}</span>
                  <span className="text-[#1C1B18] font-semibold flex items-center gap-1 group-hover:underline">
                    Read Essay
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

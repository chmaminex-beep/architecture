import React from 'react';
import { X, Clock, Calendar, Bookmark, ArrowRight, Lightbulb } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenInquiry }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in">
      <div
        className="bg-[#FAF9F6] w-full max-w-4xl overflow-hidden border border-[#DCD6CA] shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-md px-6 py-4 border-b border-[#E5E1D8] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-[#706B62]">
            <span className="uppercase tracking-widest text-[#7A5B3E] font-medium">{article.category}</span>
            <span>·</span>
            <span>{article.publishDate}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1C1B18] hover:text-[#7A5B3E] transition-colors cursor-pointer rounded-full hover:bg-[#EFECE6]"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Scroll Body */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-12 space-y-8">
          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1C1B18] leading-[1.15] text-balance">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#E5E1D8]">
              <div className="w-10 h-10 rounded-full bg-[#1C1B18] text-[#F4F3EF] flex items-center justify-center font-serif text-sm border border-[#7A5B3E]/40 shrink-0">
                TM
              </div>
              <div className="text-xs">
                <span className="font-semibold text-[#1C1B18] block">{article.author.name}</span>
                <span className="text-[#706B62]">{article.author.role} · Restored by Todd</span>
              </div>
            </div>
          </div>

          {/* Featured Article Image */}
          <div className="aspect-[16/9] w-full bg-[#1C1B18] overflow-hidden border border-[#DCD6CA]">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Lead Paragraph */}
          <div className="text-base md:text-lg text-[#1C1B18] font-serif leading-relaxed italic border-l-2 border-[#7A5B3E] pl-6 py-1">
            "{article.content.lead}"
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-sm md:text-base text-[#4A463F] leading-relaxed">
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-serif text-2xl text-[#1C1B18] font-medium pt-2">
                  {section.heading}
                </h2>
                <p>{section.body}</p>

                {section.craftsmanTip && (
                  <div className="bg-[#F3F0EB] p-5 border-l-2 border-[#7A5B3E] my-4 text-xs md:text-sm text-[#3A362F]">
                    <div className="flex items-center gap-2 text-[#7A5B3E] font-semibold uppercase tracking-wider text-xs mb-1">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Todd’s Workshop Rule</span>
                    </div>
                    <p className="leading-relaxed">{section.craftsmanTip}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Architectural Takeaways */}
          <div className="bg-[#FAF8F5] p-6 border border-[#E5E1D8] space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#7A5B3E] font-semibold">
              Craftsman’s Summary & Key Principles
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-[#4A463F]">
              {article.content.takeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A5B3E] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Footer CTA */}
          <div className="pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#706B62]">
              Have questions about this technique on your property?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1B18] hover:bg-[#7A5B3E] transition-colors cursor-pointer"
            >
              Discuss With Todd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

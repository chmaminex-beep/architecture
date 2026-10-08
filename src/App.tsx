/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Portfolio } from './components/Portfolio';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { JournalSection } from './components/JournalSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { Project } from './data/projects';
import { Article } from './data/articles';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [inquiryPrefill, setInquiryPrefill] = useState<string>('');

  const handleOpenInquiry = (projectName?: string) => {
    if (projectName) {
      setInquiryPrefill(projectName);
    }
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1B18] flex flex-col font-sans selection:bg-[#7A5B3E]/15 selection:text-[#1C1B18]">
      {/* Top Bar Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Architectural Hero */}
        <Hero
          onExplorePortfolio={handleExplorePortfolio}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider
          beforeImage="/src/assets/images/craft_kauri_timber_joinery_1791295657642.jpg"
          afterImage="/src/assets/images/project_ponsonby_extension_1791295645669.jpg"
          beforeLabel="1905 Heritage Fabric & Structural Consolidation"
          afterLabel="Restored Villa & Cantilevered Glazed Pavilion"
          title="From Century-Old Timber to Modern Masterpiece"
          subtitle="Ponsonby Street Villa Transformation · Auckland"
          description="Slide across to examine how our master team structurally preserved the 120-year-old kauri weatherboard street frontage while opening the rear into an expansive light-filled architectural pavilion."
        />

        {/* Extensive Architectural Portfolio Showcase */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Craftsmanship Code & Todd's Story */}
        <CraftsmanshipSection />

        {/* Integrated Blog / Craftsman's Journal */}
        <JournalSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Project Inquiries & Private Consultations Form */}
        <InquirySection
          prefilledProject={inquiryPrefill}
        />
      </main>

      {/* Refined Architectural Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => handleOpenInquiry(title)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenInquiry={() => handleOpenInquiry()}
      />
    </div>
  );
}

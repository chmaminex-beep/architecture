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
import craftKauri from './assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import projectPonsonby from './assets/images/project_ponsonby_extension_1791295645669.jpg';

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
          beforeImage={craftKauri}
          afterImage={projectPonsonby}
          beforeLabel="Structural Consolidation & Subterranean Vault Assembly"
          afterLabel="Completed Sovereign Pavilion & Glazed Sanctuary"
          title="The Anatomy of Transformation · Sovereign Commission"
          subtitle="Classified Private Compound · East Asia Domain (EA-DYNA-02)"
          description="Slide across to examine how our master team preserved centuries-old hand-hewn structural timber columns while interfacing an expansive 20-metre cantilevered glass pavilion under strict bilateral non-disclosure covenants."
        />

        {/* Extensive Architectural Portfolio Showcase */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Craftsmanship Code & Arthur Henderson's Story */}
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

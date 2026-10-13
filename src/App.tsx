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
import { DiscretionModal } from './components/DiscretionModal';
import { Project } from './data/projects';
import { Article } from './data/articles';
import craftKauri from './assets/images/craft_kauri_timber_joinery_1791295657642.jpg';
import projectPonsonby from './assets/images/project_ponsonby_extension_1791295645669.jpg';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [discretionModalOpen, setDiscretionModalOpen] = useState(false);
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
      {/* Top Bar Navigation (Clean 3-Zone Contract) */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenDiscretionProtocol={() => setDiscretionModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Architectural Hero */}
        <Hero
          onExplorePortfolio={handleExplorePortfolio}
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenDiscretionProtocol={() => setDiscretionModalOpen(true)}
        />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider
          beforeImage={craftKauri}
          afterImage={projectPonsonby}
          beforeLabel="Structural Timber Consolidation & Joinery Scarfing"
          afterLabel="Completed Living Pavilion & Cantilevered Gallery"
          title="The Anatomy of Transformation · Confidential Commission"
          subtitle="Forest Sanctuary & Hillside Pavilion · East Asia Domain"
          description="Drag the slider to examine how our team stabilized centuries-old hand-hewn structural columns with concealed internal flitches while introducing an expansive 18-metre cantilevered glass pavilion opening directly onto the protected moss garden."
        />

        {/* Extensive Architectural Portfolio Showcase */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenInquiry={(title) => handleOpenInquiry(title)}
        />

        {/* Craftsmanship Code & Arthur T.J Henderson's Atelier */}
        <CraftsmanshipSection />

        {/* Integrated Blog / Craftsman's Journal */}
        <JournalSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Project Inquiries & Private Office Form */}
        <InquirySection
          prefilledProject={inquiryPrefill}
        />
      </main>

      {/* Refined Architectural Footer */}
      <Footer
        onOpenDiscretionProtocol={() => setDiscretionModalOpen(true)}
      />

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

      <DiscretionModal
        isOpen={discretionModalOpen}
        onClose={() => setDiscretionModalOpen(false)}
        onOpenInquiry={() => {
          setDiscretionModalOpen(false);
          handleOpenInquiry();
        }}
      />
    </div>
  );
}

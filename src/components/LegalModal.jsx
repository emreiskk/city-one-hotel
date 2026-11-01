import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { LogoEmblem } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { legalTabs, legalData } from '../data/legalDocuments';

export const LegalModal = ({ isOpen, onClose, initialTab = 'aydinlatma' }) => {
  useBodyScrollLock(isOpen);
  const { currentLang } = useLanguage();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [prevInitialTab, setPrevInitialTab] = useState(initialTab);
  const scrollContainerRef = useRef(null);

  // Official React pattern: Adjust state when prop changes without triggering cascading effect renders
  if (initialTab !== prevInitialTab) {
    setPrevInitialTab(initialTab);
    setActiveTab(initialTab);
  }

  // ESC key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Tab switch with smooth scroll to top
  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  const langKey = legalData[currentLang] ? currentLang : 'tr';
  const langContent = legalData[langKey];
  const activeDoc = langContent.documents[activeTab] || langContent.documents.aydinlatma;
  const controller = langContent.controller;
  const ui = langContent.ui;

  return createPortal(
    <div
      ref={scrollContainerRef}
      data-modal-scrollable
      className="fixed inset-0 z-[150] bg-hotel-950 text-slate-100 overflow-y-auto min-h-screen flex flex-col selection:bg-gold-500/30 selection:text-gold-200"
      role="dialog"
      aria-modal="true"
      aria-label={ui.portalTitle}
    >
      {/* Top Navigation Header - 100% Consistent with Navbar.jsx & GalleryModal.jsx */}
      <header className="sticky top-0 z-40 bg-hotel-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-2.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full box-border">
          <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
            
            {/* Left: Brand Identity & Portal Context */}
            <div className="flex items-center gap-2 sm:gap-3 select-none py-0.5 min-w-0">
              <LogoEmblem size="sm" className="shrink-0" />
              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-serif font-bold text-sm xs:text-base sm:text-xl text-white tracking-wide truncate">
                    City One Hotel
                  </span>
                  <span className="inline-block text-gold-400 font-sans text-[8px] sm:text-[10px] tracking-wider font-semibold uppercase px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25 shrink-0">
                    Kayseri
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-tight whitespace-nowrap truncate">
                  {ui.portalTitle}
                </span>
              </div>
            </div>

            {/* Right: Actions (Language Switcher, Close) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <LanguageSwitcher variant="dropdown" direction="down" />

              <span className="h-5 w-[1px] bg-slate-800 hidden sm:block" />

              {/* Clean Close Icon */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700/60 transition-colors flex items-center justify-center cursor-pointer shrink-0 active:scale-95"
                aria-label={ui.closeButton || 'Kapat'}
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile-Only Document Selector (Hidden on Tablet md: and Desktop) */}
      <div className="md:hidden sticky top-[57px] sm:top-[65px] z-30 bg-hotel-950/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <label htmlFor="mobile-legal-select" className="sr-only">
          {ui.selectDocLabel}
        </label>
        <div className="relative">
          <select
            id="mobile-legal-select"
            value={activeTab}
            onChange={(e) => handleSelectTab(e.target.value)}
            className="w-full bg-hotel-900 text-slate-100 text-xs font-medium rounded-xl border border-slate-800 py-3 pl-4 pr-10 appearance-none focus:outline-none focus:border-gold-400 cursor-pointer shadow-inner"
          >
            {legalTabs.map((tab) => (
              <option key={tab.id} value={tab.id} className="bg-hotel-900 text-white">
                {tab[currentLang] || tab.tr}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-gold-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Editorial Main Reading Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Tablet & Desktop Left Minimalist Sidebar (md:col-span-4) */}
          <aside className="hidden md:block md:col-span-4 sticky top-24 space-y-8 pr-6 border-r border-slate-800/60">
            <div>
              <p className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest mb-3">
                {ui.sidebarTitle}
              </p>
              <nav className="space-y-1" aria-label={ui.sidebarTitle}>
                {legalTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const label = tab[currentLang] || tab.tr;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleSelectTab(tab.id)}
                      className={`w-full text-left py-2.5 px-3 rounded-lg text-xs transition-colors cursor-pointer block ${
                        isActive
                          ? 'bg-hotel-900 text-gold-300 font-semibold border-l-2 border-gold-400 shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-900/60 border-l-2 border-transparent font-normal'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Data Controller Details */}
            <div className="pt-6 border-t border-slate-800/60 text-xs text-slate-400 space-y-2">
              <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                {controller.title}
              </p>
              <p className="text-white font-medium text-xs leading-snug">
                {controller.companyName}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {controller.address}
              </p>
              <div className="pt-2 text-[11px] space-y-1 text-slate-300">
                <p>
                  <span className="text-slate-500">Tel: </span> 
                  <a href={`tel:${controller.phone.split('/')[0].trim()}`} className="hover:text-gold-300 transition-colors">
                    {controller.phone}
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">E-Posta: </span> 
                  <a href={`mailto:${controller.email}`} className="hover:text-gold-300 transition-colors">
                    {controller.email}
                  </a>
                </p>
                <p className="text-slate-500 text-[10px] pt-1">
                  {controller.tradeRegistry}
                </p>
              </div>
            </div>
          </aside>

          {/* Right Reading Content (md:col-span-8) */}
          <section className="md:col-span-8 space-y-8">
            
            {/* Document Header */}
            <header className="space-y-3 pb-6 border-b border-slate-800/80">
              <p className="text-[11px] font-semibold text-gold-400 tracking-wider uppercase">
                City One Hotel Kayseri • {ui.portalTitle}
              </p>
              <h1 className="font-serif text-xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {activeDoc.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {activeDoc.subtitle}
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                {ui.lastUpdated}
              </p>
            </header>

            {/* Document Sections */}
            <div className="space-y-8 sm:space-y-10 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {activeDoc.sections.map((section, sIdx) => (
                <article key={sIdx} className="space-y-3">
                  <h2 className="font-serif text-sm sm:text-base font-bold text-white tracking-tight pb-1.5 border-b border-slate-800/40">
                    {section.heading}
                  </h2>
                  <div className="space-y-2.5 text-slate-300 leading-relaxed text-justify">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile Data Controller Block (Unboxed - Hidden on Tablet & Desktop) */}
            <div className="md:hidden mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                {controller.title}
              </p>
              <p className="text-white font-medium">
                {controller.companyName}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {controller.address}
              </p>
              <p className="text-[11px] text-slate-400">
                {controller.phone} • <a href={`mailto:${controller.email}`} className="text-gold-300 hover:underline">{controller.email}</a>
              </p>
              <p className="text-[10px] text-slate-500 pt-1">
                {controller.tradeRegistry}
              </p>
            </div>

            {/* Bottom Contact Note */}
            <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <p className="text-center sm:text-left leading-relaxed">
                {ui.contactNotice}{' '}
                <a href={`mailto:${controller.email}`} className="text-gold-300 hover:underline font-medium">
                  {controller.email}
                </a>
              </p>
            </div>

          </section>

        </div>
      </main>

      {/* Discreet Editorial Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-[11px] text-slate-500 bg-hotel-950 mt-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 City One Hotel Kayseri • {ui.allRightsReserved}</p>
          <div className="flex items-center gap-3 text-slate-400">
            {legalTabs.map((tab, idx) => (
              <React.Fragment key={tab.id}>
                {idx > 0 && <span className="text-slate-700">•</span>}
                <button
                  type="button"
                  onClick={() => handleSelectTab(tab.id)}
                  className="hover:text-gold-300 cursor-pointer transition-colors"
                >
                  {tab[currentLang] || tab.tr}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>
    </div>,
    document.body
  );
};

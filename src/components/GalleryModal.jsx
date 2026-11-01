import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, Camera, Play, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { LogoEmblem } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { PhotoLightboxModal } from './PhotoLightboxModal';
import { VideoModal } from './VideoModal';
import { RAW_GALLERY_ITEMS } from '../data/galleryData';
import { galleryLocalization } from '../data/galleryLocalization';

export const GalleryModal = ({ isOpen, onClose, initialCategory = 'all' }) => {
  useBodyScrollLock(isOpen);
  const { currentLang, content } = useLanguage();
  const { gallerySection } = content;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [prevInitialCategory, setPrevInitialCategory] = useState(initialCategory);
  
  const scrollContainerRef = useRef(null);

  // Lightbox & Video Player State
  const [lightboxData, setLightboxData] = useState({ 
    isOpen: false, 
    items: [], 
    images: [], 
    initialIndex: 0, 
    title: '' 
  });
  const [videoModalData, setVideoModalData] = useState({ 
    isOpen: false, 
    videoUrl: '', 
    title: '', 
    subtitle: '' 
  });

  // State synchronization pattern when prop changes
  if (initialCategory !== prevInitialCategory) {
    setPrevInitialCategory(initialCategory);
    setActiveCategory(initialCategory);
  }

  // ESC key listener (only close gallery if lightbox and video modal are closed)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (!lightboxData.isOpen && !videoModalData.isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, lightboxData.isOpen, videoModalData.isOpen]);

  const loc = galleryLocalization[currentLang] || galleryLocalization.tr;
  const ui = loc.ui || galleryLocalization.tr.ui;

  // Category Configuration - 100% consistent with RoomsSection.jsx & existing design
  const categories = useMemo(() => {
    return [
      { id: 'all', label: ui.categories?.all || gallerySection?.categories?.all || 'Tüm Galeri' },
      { id: 'rooms', label: ui.categories?.rooms || gallerySection?.categories?.rooms || 'Odalar & Süitler' },
      { id: 'halls', label: ui.categories?.halls || gallerySection?.categories?.halls || 'Balo & Kongre Salonları' },
      { id: 'spa', label: ui.categories?.spa || gallerySection?.categories?.spa || 'SPA, Havuz & Hamam' },
      { id: 'dining', label: ui.categories?.dining || gallerySection?.categories?.dining || 'Restoran & Açık Büfe' },
      { id: 'exterior', label: ui.categories?.exterior || gallerySection?.categories?.exterior || 'Dış Cephe & Lobi' },
      { id: 'videos', label: ui.categories?.videos || gallerySection?.categories?.videos || 'Canlı Video Turları' }
    ];
  }, [ui, gallerySection]);

  // Localized items
  const galleryItems = useMemo(() => {
    return RAW_GALLERY_ITEMS.map((item) => {
      const localized = loc.items?.[item.id] || galleryLocalization.tr.items?.[item.id] || {};
      return {
        ...item,
        title: localized.title || 'City One Hotel',
        subtitle: localized.subtitle || ''
      };
    });
  }, [loc]);

  // Filtered view items
  const filteredItems = useMemo(() => {
    return activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  const allPhotoItems = useMemo(() => {
    return galleryItems.filter(i => i.type === 'photo');
  }, [galleryItems]);

  const handleSelectCategory = useCallback((catId) => {
    setActiveCategory(catId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleItemClick = (item) => {
    if (item.type === 'video') {
      setVideoModalData({
        isOpen: true,
        videoUrl: item.videoUrl,
        title: item.title,
        subtitle: item.subtitle
      });
    } else {
      const currentCategoryPhotos = activeCategory === 'all'
        ? allPhotoItems
        : allPhotoItems.filter(p => p.category === activeCategory);
      const currentCategoryPhotoUrls = currentCategoryPhotos.map(p => p.src);
      const idx = currentCategoryPhotos.findIndex(p => p.id === item.id);
      setLightboxData({
        isOpen: true,
        items: currentCategoryPhotos,
        images: currentCategoryPhotoUrls,
        initialIndex: idx >= 0 ? idx : 0,
        title: item.title
      });
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={scrollContainerRef}
      data-modal-scrollable
      className="fixed inset-0 z-[140] bg-hotel-950 text-slate-100 overflow-y-auto min-h-screen flex flex-col selection:bg-gold-500/30 selection:text-gold-200"
      role="dialog"
      aria-modal="true"
      aria-label={ui.portalTitle}
    >
      {/* 1. Top Navigation Header - 100% Consistent with Navbar.jsx */}
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
                  {ui.portalTitle || gallerySection?.title || 'Fotoğraf & Video Galerisi'}
                </span>
              </div>
            </div>

            {/* Right: Actions (Language Switcher & Close) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <LanguageSwitcher variant="dropdown" direction="down" />

              <span className="h-5 w-[1px] bg-slate-800 hidden sm:block" />

              {/* Clean Close Icon */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700/60 transition-colors flex items-center justify-center cursor-pointer shrink-0 active:scale-95"
                aria-label={ui.closeModal || 'Kapat'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Section Header - 100% Faithful to Typography Design System */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionBadge icon={Camera} className="mb-3">
            {ui.portalBadge || gallerySection?.sectionBadge || 'OTELİMİZDEN GERÇEK KARELER'}
          </SectionBadge>
          <Heading as="h1" size="2xl" className="mb-4">
            {ui.portalTitle || gallerySection?.title || 'City One Hotel Fotoğraf & Video Galerisi'}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {ui.portalSubtitle || gallerySection?.subtitle || "Erciyes Dağı eteklerinde yükselen zarafet; salonlarımız, odalarımız, 1500 m² SPA'mız ve zengin gastronomi dünyamızın gerçek görüntüleri."}
          </Subtitle>
        </div>

        {/* Category Filter - 100% Faithful to RoomsSection & Quiet Luxury Design (No outer box, no icons, pure clean pills) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gold-500/10 text-gold-300 border border-gold-400/30'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Media Grid - Pure Quiet Luxury Architectural Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isVideo = item.type === 'video';
            const displayImg = isVideo ? item.thumbnail : item.src;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-hotel-900/40 border border-slate-800/80 cursor-pointer transition-colors duration-300 hover:border-slate-700/80"
                onClick={() => handleItemClick(item)}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={displayImg}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/90 via-hotel-950/20 to-transparent pointer-events-none" />

                  {/* Top Badge: Type Indicator */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    {isVideo ? (
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-slate-200 text-[10px] font-medium tracking-wider uppercase border border-white/10 flex items-center gap-1.5">
                        <Play className="w-2.5 h-2.5 fill-gold-400 text-gold-400" />
                        <span>{loc.watchLabel || 'CANLI VİDEO'}</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-gold-400 text-[10px] font-medium tracking-wider uppercase border border-white/10">
                        {loc.photoLabel || 'FOTOĞRAF'}
                      </span>
                    )}
                  </div>

                  {/* Play / Expand Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-hotel-950/80 border border-gold-400/50 backdrop-blur-md flex items-center justify-center text-gold-400 shadow-lg">
                      {isVideo ? (
                        <Play className="w-5 h-5 fill-gold-400 ml-0.5" />
                      ) : (
                        <Maximize2 className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
                    <h3 className="font-serif text-base font-medium text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300/80 mt-0.5 line-clamp-1 font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Lightbox for Photos */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        items={lightboxData.items}
        images={lightboxData.images}
        initialIndex={lightboxData.initialIndex}
        title={lightboxData.title}
        onClose={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Video Modal for MP4s */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        videoUrl={videoModalData.videoUrl}
        title={videoModalData.title}
        subtitle={videoModalData.subtitle}
        onClose={() => setVideoModalData(prev => ({ ...prev, isOpen: false }))}
      />
    </div>,
    document.body
  );
};

export default GalleryModal;

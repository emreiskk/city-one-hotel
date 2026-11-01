import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { 
  Camera, 
  Play, 
  Maximize2, 
  ArrowRight
} from 'lucide-react';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { VideoModal } from '../components/VideoModal';
import { GalleryModal } from '../components/GalleryModal';
import { RAW_GALLERY_ITEMS, SHOWCASE_ITEM_IDS } from '../data/galleryData';
import { galleryLocalization } from '../data/galleryLocalization';

export const GallerySection = () => {
  const { content, currentLang } = useLanguage();
  const { gallerySection } = content;

  // State: Active Category for Homepage Showcase & Modals
  const [activeCategory, setActiveCategory] = useState('all');
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryModalCategory, setGalleryModalCategory] = useState('all');

  // Mobile Swipe Carousel State & Scroll Ref
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  // Listen for navigation events from navbar/menus & custom triggers
  useEffect(() => {
    const handleNav = (e) => {
      if (e.detail?.target === '#gallery') {
        if (e.detail?.galleryCategory) {
          setActiveCategory(e.detail.galleryCategory);
          setActiveSlide(0);
          if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }
      }
    };

    const handleOpenGalleryEvent = (e) => {
      setGalleryModalCategory(e.detail?.category || 'all');
      setIsGalleryModalOpen(true);
    };

    window.addEventListener('cityone-navigate', handleNav);
    window.addEventListener('cityone-open-gallery', handleOpenGalleryEvent);
    return () => {
      window.removeEventListener('cityone-navigate', handleNav);
      window.removeEventListener('cityone-open-gallery', handleOpenGalleryEvent);
    };
  }, []);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    setActiveSlide(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const loc = galleryLocalization[currentLang] || galleryLocalization.tr;
  const ui = loc.ui || galleryLocalization.tr.ui;

  // Prepare full localized items
  const allGalleryItems = useMemo(() => {
    return RAW_GALLERY_ITEMS.map((item) => {
      const localized = loc.items?.[item.id] || galleryLocalization.tr.items?.[item.id] || {};
      return {
        ...item,
        title: localized.title || 'City One Hotel',
        subtitle: localized.subtitle || ''
      };
    });
  }, [loc]);

  // Curated real media items for homepage showcase (up to 6 items)
  const displayedItems = useMemo(() => {
    if (activeCategory === 'all') {
      return SHOWCASE_ITEM_IDS
        .map(id => allGalleryItems.find(item => item.id === id))
        .filter(Boolean);
    }
    return allGalleryItems
      .filter(item => item.category === activeCategory)
      .slice(0, 6);
  }, [activeCategory, allGalleryItems]);

  const allPhotoItems = useMemo(() => {
    return allGalleryItems.filter(i => i.type === 'photo');
  }, [allGalleryItems]);

  const totalCardsCount = displayedItems.length;

  // Handle carousel scroll on mobile to update dot indicator
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.offsetWidth * 0.84;
    const index = Math.round(scrollLeft / (cardWidth + 20));
    setActiveSlide(Math.max(0, Math.min(index, totalCardsCount - 1)));
  };

  // Category configuration matching existing design
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

  const handleItemClick = (item) => {
    if (item.type === 'video') {
      setVideoModalData({
        isOpen: true,
        videoUrl: item.videoUrl,
        title: item.title,
        subtitle: item.subtitle
      });
    } else {
      const activePhotos = activeCategory === 'all'
        ? allPhotoItems
        : allPhotoItems.filter(p => p.category === activeCategory);
      const activePhotoUrls = activePhotos.map(p => p.src);
      const idx = activePhotos.findIndex(p => p.id === item.id);
      setLightboxData({
        isOpen: true,
        items: activePhotos,
        images: activePhotoUrls,
        initialIndex: idx >= 0 ? idx : 0,
        title: item.title
      });
    }
  };

  const openPortalWithCategory = (catId = 'all') => {
    setGalleryModalCategory(catId);
    setIsGalleryModalOpen(true);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-hotel-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <SectionBadge icon={Camera} className="mb-3">
            {ui.showcaseBadge || gallerySection?.sectionBadge || 'OTELİMİZDEN GERÇEK KARELER'}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {ui.showcaseTitle || gallerySection?.title || 'City One Hotel Fotoğraf & Video Galerisi'}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {ui.showcaseSubtitle || gallerySection?.subtitle || "Erciyes Dağı eteklerinde yükselen zarafet; salonlarımız, odalarımız, 1500 m² SPA'mız ve zengin gastronomi dünyamızın gerçek görüntüleri."}
          </Subtitle>

          {/* Understated Header Action - Discrete, Quiet-Luxury Standard */}
          <div className="mt-5 flex items-center justify-center">
            <button
              type="button"
              onClick={() => openPortalWithCategory(activeCategory)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer shadow-sm active:scale-95 group"
            >
              <Camera className="w-3.5 h-3.5 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>{ui.exploreAllButton || 'Tüm Fotoğraf & Video Arşivini Aç (31)'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs - 100% Consistent with Rooms, Dining & Spa Sections */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 px-4 sm:mx-0 sm:justify-center sm:flex-wrap">
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

        {/* Editorial Showcase: Mobile Touch Swipe Carousel / Desktop 3-Column Magazine Grid */}
        <div 
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex lg:grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-1"
        >
          {displayedItems.map((item) => {
            const isVideo = item.type === 'video';
            const displayImg = isVideo ? item.thumbnail : item.src;

            return (
              <div
                key={item.id}
                className="w-[84vw] sm:w-[360px] lg:w-auto shrink-0 lg:shrink snap-center group relative overflow-hidden rounded-2xl bg-hotel-900/40 border border-slate-800/80 cursor-pointer transition-all duration-300 hover:border-gold-400/40 hover:shadow-2xl hover:-translate-y-1"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/95 via-hotel-950/20 to-transparent pointer-events-none" />

                  {/* Top Badge: Type Indicator */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    {isVideo ? (
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-slate-200 text-[10px] font-medium tracking-wider uppercase border border-white/10 flex items-center gap-1.5 shadow-sm">
                        <Play className="w-2.5 h-2.5 fill-gold-400 text-gold-400" />
                        <span>{loc.watchLabel || 'CANLI VİDEO'}</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-gold-400 text-[10px] font-medium tracking-wider uppercase border border-white/10 shadow-sm">
                        {loc.photoLabel || 'FOTOĞRAF'}
                      </span>
                    )}
                  </div>

                  {/* Center Hover Action Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-hotel-950/90 border border-gold-400/60 backdrop-blur-md flex items-center justify-center text-gold-400 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      {isVideo ? (
                        <Play className="w-5 h-5 fill-gold-400 ml-0.5" />
                      ) : (
                        <Maximize2 className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Text Information */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
                    <h3 className="font-serif text-base font-medium text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300/80 mt-1 line-clamp-1 font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-Only Carousel Slide Dots & Counter Indicator */}
        <div className="flex lg:hidden items-center justify-between pt-3 px-1">
          <div className="flex items-center gap-1.5">
            {[...Array(totalCardsCount)].map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx 
                    ? 'w-5 bg-gold-400' 
                    : 'w-1.5 bg-slate-700/80'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
            <span className="text-slate-500">{ui.swipeHint || 'Kaydırarak keşfedin'}</span>
            <span className="font-mono text-gold-400/90">{activeSlide + 1} / {totalCardsCount}</span>
          </div>
        </div>

      </div>

      {/* Full-Screen Gallery Portal Modal */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        initialCategory={galleryModalCategory}
        onClose={() => setIsGalleryModalOpen(false)}
      />

      {/* Direct Lightbox for Showcase Photos */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        items={lightboxData.items}
        images={lightboxData.images}
        initialIndex={lightboxData.initialIndex}
        title={lightboxData.title}
        onClose={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Direct Video Modal for Showcase MP4s */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        videoUrl={videoModalData.videoUrl}
        title={videoModalData.title}
        subtitle={videoModalData.subtitle}
        onClose={() => setVideoModalData(prev => ({ ...prev, isOpen: false }))}
      />

    </section>
  );
};

export default GallerySection;

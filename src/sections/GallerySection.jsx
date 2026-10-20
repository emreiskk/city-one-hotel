import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { 
  Camera, 
  Play, 
  Maximize2, 
  Building2, 
  BedDouble, 
  Briefcase, 
  Waves, 
  UtensilsCrossed, 
  Film 
} from 'lucide-react';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { VideoModal } from '../components/VideoModal';
import { galleryLocalization } from '../data/galleryLocalization';

const RAW_GALLERY_ITEMS = [
  // Videos
  {
    id: 'v-kayseri',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/halls/kayseri/kayseri-1.jpg',
    videoUrl: '/assets/hotel/videos/kayseri-salonu.mp4'
  },
  {
    id: 'v-sini',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/dining/sini-restaurant-750.jpg',
    videoUrl: '/assets/hotel/videos/sini-salonu.mp4'
  },
  {
    id: 'v-gelin',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/spa/gelin-hamami.jpg',
    videoUrl: '/assets/hotel/videos/gelin-hamami.mp4'
  },
  {
    id: 'v-tour1',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/exterior/discephe-1.jpg',
    videoUrl: '/assets/hotel/videos/hotel-tour-04.mp4'
  },

  // Exterior & Lobby
  {
    id: 'g-ext-1',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/exterior/discephe-1.jpg'
  },
  {
    id: 'g-ext-2',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/exterior/discephe-2.jpg'
  },
  {
    id: 'g-ext-3',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/exterior/discephe-3.jpg'
  },
  {
    id: 'g-lobby-1',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/lobby/lobi-1.jpg'
  },
  {
    id: 'g-lobby-2',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/lobby/lobi-2.jpg'
  },

  // Rooms
  {
    id: 'g-room-standart',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/standart-1.jpg'
  },
  {
    id: 'g-room-superior',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/superior-1.jpg'
  },
  {
    id: 'g-room-double',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/double-1.jpg'
  },
  {
    id: 'g-room-family',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/family-1.jpg'
  },
  {
    id: 'g-room-jakuzi',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/jakuzi-1.jpg'
  },
  {
    id: 'g-room-jakuzi-det',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/jakuzi-detail.jpg'
  },
  {
    id: 'g-room-banyo',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/banyo-1.jpg'
  },

  // Halls
  {
    id: 'g-hall-kayseri',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/kayseri/kayseri-1.jpg'
  },
  {
    id: 'g-hall-kayseri-2',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/kayseri/kayseri-3.jpg'
  },
  {
    id: 'g-hall-erciyes',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/erciyes/erciyes-1.jpg'
  },
  {
    id: 'g-hall-yelken',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/yelken/yelken-1.jpg'
  },
  {
    id: 'g-hall-efes',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/efes/efes-1.jpg'
  },
  {
    id: 'g-hall-kapadokya',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/kapadokya/kapadokya-1.jpg'
  },

  // SPA
  {
    id: 'g-spa-pool',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/havuz-1.jpg'
  },
  {
    id: 'g-spa-hamam-1',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/hamam-1.jpg'
  },
  {
    id: 'g-spa-gelin',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/gelin-hamami.jpg'
  },
  {
    id: 'g-spa-vitamin',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/vitamin-bar-1.jpg'
  },

  // Dining
  {
    id: 'g-dining-sini',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/sini-restaurant-750.jpg'
  },
  {
    id: 'g-dining-bk-1',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/breakfast/breakfast-1.jpg'
  },
  {
    id: 'g-dining-bk-2',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/breakfast/breakfast-2.jpg'
  },
  {
    id: 'g-dining-bk-3',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/breakfast/breakfast-3.jpg'
  },
  {
    id: 'g-dining-ala',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/alacarte/alacarte-1.jpg'
  }
];

export const GallerySection = () => {
  const { content, currentLang } = useLanguage();
  const { gallerySection } = content;
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxData, setLightboxData] = useState({ isOpen: false, items: [], images: [], initialIndex: 0, title: '' });
  const [videoModalData, setVideoModalData] = useState({ isOpen: false, videoUrl: '', title: '', subtitle: '' });

  // Listen for navigation events from sub-menus
  useEffect(() => {
    const handleNav = (e) => {
      if (e.detail?.target === '#gallery' && e.detail?.galleryCategory) {
        setActiveCategory(e.detail.galleryCategory);
      }
    };
    window.addEventListener('cityone-navigate', handleNav);
    return () => window.removeEventListener('cityone-navigate', handleNav);
  }, []);

  const loc = galleryLocalization[currentLang] || galleryLocalization.tr;

  const galleryCategories = [
    { id: 'all', label: gallerySection?.categories?.all || 'Tüm Galeri', icon: Camera },
    { id: 'exterior', label: gallerySection?.categories?.exterior || 'Dış Cephe & Lobi', icon: Building2 },
    { id: 'rooms', label: gallerySection?.categories?.rooms || 'Odalar & Süitler', icon: BedDouble },
    { id: 'halls', label: gallerySection?.categories?.halls || 'Balo & Kongre Salonları', icon: Briefcase },
    { id: 'spa', label: gallerySection?.categories?.spa || 'SPA, Havuz & Hamam', icon: Waves },
    { id: 'dining', label: gallerySection?.categories?.dining || 'Restoran & Açık Büfe', icon: UtensilsCrossed },
    { id: 'videos', label: gallerySection?.categories?.videos || 'Canlı Video Turları', icon: Film },
  ];

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

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const allPhotoItems = galleryItems.filter(i => i.type === 'photo');
  const allPhotoUrls = allPhotoItems.map(i => i.src);

  const handleItemClick = (item) => {
    if (item.type === 'video') {
      setVideoModalData({
        isOpen: true,
        videoUrl: item.videoUrl,
        title: item.title,
        subtitle: item.subtitle
      });
    } else {
      const idx = allPhotoItems.findIndex(p => p.src === item.src);
      setLightboxData({
        isOpen: true,
        items: allPhotoItems,
        images: allPhotoUrls,
        initialIndex: idx >= 0 ? idx : 0,
        title: item.title
      });
    }
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative border-t border-slate-800">
      
      {/* Decorative ambient lights strictly in warm gold palette */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <SectionBadge icon={Camera} className="mb-4">
            {gallerySection?.sectionBadge || 'OTELİMİZDEN GERÇEK KARELER'}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {gallerySection?.title || 'City One Hotel Fotoğraf & Video Galerisi'}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {gallerySection?.subtitle || "Erciyes Dağı eteklerinde yükselen zarafet; salonlarımız, odalarımız, 1500 m² SPA'mız ve zengin gastronomi dünyamızın gerçek görüntüleri."}
          </Subtitle>
        </div>

        {/* Filter Navigation - Mobilde yan yana yatay kaydırma (no-scrollbar), Webde ortalı yan yana */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 px-4 sm:mx-0 sm:justify-center sm:flex-wrap">
          {galleryCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gold-gradient text-white font-semibold shadow-lg shadow-gold-500/25 border border-gold-400/40'
                    : 'bg-hotel-900/90 text-slate-300 border border-slate-800/90 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => {
            const isVideo = item.type === 'video';
            const displayImg = isVideo ? item.thumbnail : item.src;

            return (
              <Card
                key={item.id}
                variant="elevated"
                hover={true}
                className="group relative overflow-hidden rounded-2xl bg-hotel-900 border-slate-800 cursor-pointer p-0"
                onClick={() => handleItemClick(item)}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={displayImg}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hotel-950 via-hotel-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge: Type Indicator (Tamamen Çok Dilli) */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {isVideo ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-rose-600/90 backdrop-blur-md text-white border border-rose-400/40 flex items-center gap-1 shadow-lg">
                        <Play className="w-3 h-3 fill-white" /> {loc.watchLabel || gallerySection?.watchLabel || 'CANLI VİDEO'}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-hotel-950/80 backdrop-blur-md text-gold-300 border border-gold-500/20">
                        {loc.photoLabel || gallerySection?.photoLabel || 'FOTOĞRAF'}
                      </span>
                    )}
                  </div>

                  {/* Play / Expand Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gold-gradient text-white flex items-center justify-center shadow-gold-glow/60 border border-gold-300/40">
                      {isVideo ? (
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      ) : (
                        <Maximize2 className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300/90 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>

      {/* Lightbox for Photos */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        items={lightboxData.items}
        images={lightboxData.images}
        initialIndex={lightboxData.initialIndex}
        title={lightboxData.title}
        onClose={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Video Modal for MP4s with Localized Tour Badges */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        videoUrl={videoModalData.videoUrl}
        title={videoModalData.title}
        subtitle={videoModalData.subtitle}
        videoTourBadge={loc.videoTourBadge}
        verticalTourBadge={loc.verticalTourBadge}
        onClose={() => setVideoModalData(prev => ({ ...prev, isOpen: false }))}
      />

    </section>
  );
};

export default GallerySection;

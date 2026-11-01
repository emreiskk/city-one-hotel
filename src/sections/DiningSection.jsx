import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Utensils, Coffee, ChefHat, Users, Maximize2, Camera } from 'lucide-react';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';

export default function DiningSection({ onOpenBooking }) {
  const { content } = useLanguage();
  const { diningSection, hotel } = content;
  const [activeTab, setActiveTab] = useState('breakfast'); // 'breakfast', 'sini', 'alacarte'
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [], initialIndex: 0, title: '' });

  const modes = {
    sini: {
      title: diningSection.modes?.sini?.title || '750 Kişilik Sini Restaurant',
      subtitle: diningSection.modes?.sini?.subtitle || "Kayseri'nin En Büyük Davet ve Ziyafet Salonu",
      images: [diningSection.image],
      badge: diningSection.modes?.sini?.badge || '750 Kişi Kapasite'
    },
    breakfast: {
      title: diningSection.modes?.breakfast?.title || 'Zengin Kayseri Açık Büfe Kahvaltı',
      subtitle: diningSection.modes?.breakfast?.subtitle || 'Hakiki Pastırma, Sıcak Su Böreği & 100+ Çeşit',
      images: diningSection.breakfastGallery || [diningSection.image],
      badge: diningSection.modes?.breakfast?.badge || '12 Fotoğraf'
    },
    alacarte: {
      title: diningSection.modes?.alacarte?.title || 'La Brasserie A La Carte',
      subtitle: diningSection.modes?.alacarte?.subtitle || 'Seçkin Dünya ve Kayseri Mutfağı',
      images: diningSection.alacarteGallery || [diningSection.image],
      badge: diningSection.modes?.alacarte?.badge || '5 Fotoğraf'
    }
  };

  const currentMode = modes[activeTab] || modes.breakfast;
  const currentPhoto = currentMode.images[activePhotoIdx] || currentMode.images[0];

  const handleModeChange = (modeKey) => {
    setActiveTab(modeKey);
    setActivePhotoIdx(0);
  };

  const handleOpenLightbox = () => {
    setLightboxData({
      isOpen: true,
      images: currentMode.images,
      initialIndex: activePhotoIdx,
      title: currentMode.title
    });
  };

  return (
    <section id="dining" className="py-16 sm:py-24 lg:py-32 bg-hotel-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionBadge icon={Utensils} className="mb-3">
            {diningSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {diningSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {diningSection.subtitle}
          </Subtitle>
        </div>

        {/* Quiet Luxury Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => handleModeChange('breakfast')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'breakfast'
                ? 'bg-gold-500/10 text-gold-300 border border-gold-400/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
            <span>{diningSection.tabBreakfast || 'Açık Büfe Kahvaltı'} (12)</span>
          </button>

          <button
            onClick={() => handleModeChange('sini')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'sini'
                ? 'bg-gold-500/10 text-gold-300 border border-gold-400/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
            <span>{diningSection.tabSini || 'Sini Restaurant'} (750)</span>
          </button>

          <button
            onClick={() => handleModeChange('alacarte')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'alacarte'
                ? 'bg-gold-500/10 text-gold-300 border border-gold-400/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <ChefHat className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
            <span>{diningSection.tabAlacarte || 'A La Carte Restoran'} (5)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Visual Showcase with Discreet Editorial Overlay */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-slate-800/80 group cursor-pointer bg-slate-900"
                onClick={handleOpenLightbox}
              >
                <img
                  src={currentPhoto}
                  alt={currentMode.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Discreet Image Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <div className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-slate-300 text-[11px] font-medium tracking-wide flex items-center gap-1.5 border border-white/5">
                    <Camera className="w-3 h-3 text-gold-400" />
                    <span>{activePhotoIdx + 1} / {currentMode.images.length}</span>
                  </div>

                  <div className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-gold-400 text-[11px] font-medium flex items-center gap-1.5 border border-white/5">
                    <Maximize2 className="w-3 h-3" />
                    <span>{content.gallerySection?.zoomLabel || 'Büyüt'}</span>
                  </div>
                </div>

                {/* Editorial Caption Bar */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-hotel-950/80 backdrop-blur-md border border-slate-800/80 flex items-center gap-3.5">
                  <ChefHat className="w-6 h-6 text-gold-400 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-serif font-medium text-white block truncate">{currentMode.title}</span>
                    <span className="text-xs text-slate-300 block truncate font-light">{currentMode.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Minimalist Thumbnail Bar */}
              {currentMode.images.length > 1 && (
                <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  {currentMode.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        idx === activePhotoIdx
                          ? 'border-gold-400 ring-1 ring-gold-400/50'
                          : 'border-slate-800 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Features Column: Single Architectural Dossier */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="rounded-2xl bg-hotel-900/40 border border-slate-800/80 divide-y divide-slate-800/80">
              {diningSection.features.map((feature, idx) => (
                <div key={idx} className="p-5 sm:p-6 transition-colors duration-200 hover:bg-hotel-900/60">
                  <div className="flex items-start gap-4">
                    <div className="font-serif text-gold-400/90 text-sm font-medium tracking-widest mt-0.5 shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-white mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={() => onOpenBooking()}
                className="flex-1 w-full"
              >
                {diningSection.bookWithBreakfast || 'Kahvaltı Dahil Rezervasyon'}
              </Button>
              <Button
                as="a"
                href={`tel:${hotel.phoneRaw}`}
                variant="dark"
                size="md"
                className="flex-1 w-full"
              >
                {diningSection.reserveTable || 'Restoran Masa Rezervasyonu'}
              </Button>
            </div>
          </div>

        </div>

      </div>

      {/* Photo Lightbox */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        images={lightboxData.images}
        initialIndex={lightboxData.initialIndex}
        title={lightboxData.title}
        onClose={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
      />

    </section>
  );
}
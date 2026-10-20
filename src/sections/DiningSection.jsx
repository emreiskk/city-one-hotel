import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { Button } from '../design-system/Button';
import { Utensils, Coffee, ChefHat, Users, Maximize2, Camera, Clock } from 'lucide-react';
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
    <section id="dining" className="py-14 sm:py-20 lg:py-28 bg-hotel-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <SectionBadge icon={Utensils} className="mb-4">
            {diningSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {diningSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {diningSection.subtitle}
          </Subtitle>

          {/* Operational Hours Quick Strip */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>{diningSection.hours.breakfast}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>{diningSection.hours.dinner}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{diningSection.hours.roomService}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              <span>{diningSection.capacityBadge}</span>
            </span>
          </div>
        </div>

        {/* Gallery Mode Filter Tabs - Mobilde yan yana yatay kaydırma, webde ortalı yan yana */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 px-4 sm:mx-0 sm:justify-center sm:flex-wrap">
          <button
            onClick={() => handleModeChange('breakfast')}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'breakfast'
                ? 'bg-gold-gradient text-hotel-950 font-bold shadow-md shadow-gold-500/20 border border-gold-400'
                : 'bg-hotel-900/90 text-slate-300 border border-slate-800/90 hover:border-gold-500/40 hover:text-white'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 shrink-0" />
            <span>{diningSection.tabBreakfast || 'Açık Büfe Kahvaltı'} (12)</span>
          </button>

          <button
            onClick={() => handleModeChange('sini')}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'sini'
                ? 'bg-gold-gradient text-hotel-950 font-bold shadow-md shadow-gold-500/20 border border-gold-400'
                : 'bg-hotel-900/90 text-slate-300 border border-slate-800/90 hover:border-gold-500/40 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5 shrink-0" />
            <span>{diningSection.tabSini || 'Sini Restaurant'} (750)</span>
          </button>

          <button
            onClick={() => handleModeChange('alacarte')}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'alacarte'
                ? 'bg-gold-gradient text-hotel-950 font-bold shadow-md shadow-gold-500/20 border border-gold-400'
                : 'bg-hotel-900/90 text-slate-300 border border-slate-800/90 hover:border-gold-500/40 hover:text-white'
            }`}
          >
            <ChefHat className="w-3.5 h-3.5 shrink-0" />
            <span>{diningSection.tabAlacarte || 'A La Carte Restoran'} (5)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Visual Showcase with Interactive Carousel / Thumbnails */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div 
              className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full shadow-2xl border border-slate-700/80 group cursor-pointer bg-slate-900"
              onClick={handleOpenLightbox}
            >
              <img
                src={currentPhoto}
                alt={currentMode.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent" />
              
              {/* Zoom badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs bg-hotel-950/85 backdrop-blur-md text-gold-300 border border-gold-500/20 flex items-center gap-1.5 z-10">
                <Maximize2 className="w-3.5 h-3.5" /> {content.gallerySection?.zoomLabel || 'Büyüt'}
              </div>

              {/* Photo Count indicator */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs bg-hotel-950/85 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1 z-10">
                <Camera className="w-3.5 h-3.5 text-gold-400" />
                <span>{activePhotoIdx + 1} / {currentMode.images.length}</span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-hotel-950/85 backdrop-blur-md border border-white/10 flex items-center gap-3">
                <ChefHat className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">{currentMode.title}</span>
                  <span className="text-[11px] text-slate-300">{currentMode.subtitle}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {currentMode.images.length > 1 && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
                {currentMode.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activePhotoIdx
                        ? 'border-gold-400 scale-105 shadow-gold-glow/40'
                        : 'border-transparent opacity-50 hover:opacity-100'
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

          {/* Features Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3 sm:space-y-4 h-full">
            {diningSection.features.map((feature, idx) => (
              <Card
                key={idx}
                variant="elevated"
                hover={true}
                className="p-3.5 sm:p-5 border-slate-800 hover:border-gold-500/40"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    {idx === 0 ? <Users className="w-5 h-5" /> : idx === 1 ? <Coffee className="w-5 h-5" /> : <ChefHat className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
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

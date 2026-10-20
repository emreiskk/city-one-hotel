import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { 
  Waves, 
  Flame, 
  Droplets, 
  HeartHandshake, 
  Citrus, 
  Dumbbell,
  CheckCircle2, 
  Clock, 
  Calendar,
  Play,
  Maximize2
} from 'lucide-react';
import { VideoModal } from '../components/VideoModal';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';

const tabIcons = {
  pool: Waves,
  hamam: Droplets,
  fitness: Dumbbell,
  vitamin: Citrus,
  sauna: Flame,
  gelin: HeartHandshake,
  massage: HeartHandshake
};

export default function SpaSection({ onOpenBooking }) {
  const { content } = useLanguage();
  const { spaSection, hotel, hero } = content;
  const [activeTabId, setActiveTabId] = useState(spaSection.tabs[0].id);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [], initialIndex: 0, title: '' });

  // Listen for navigation events to activate specific SPA tabs
  useEffect(() => {
    const handleNav = (e) => {
      if (e.detail?.target === '#spa' && e.detail?.spaTab) {
        setActiveTabId(e.detail.spaTab);
      }
    };
    window.addEventListener('cityone-navigate', handleNav);
    return () => window.removeEventListener('cityone-navigate', handleNav);
  }, []);

  const activeTab = spaSection.tabs.find(t => t.id === activeTabId) || spaSection.tabs[0];
  const IconComponent = tabIcons[activeTab.id] || Waves;
  const hasVideo = Boolean(activeTab.video);
  const tabImages = activeTab.images || [activeTab.image];

  const handleVisualClick = () => {
    if (hasVideo) {
      setVideoModalOpen(true);
    } else {
      setLightboxData({
        isOpen: true,
        images: tabImages,
        initialIndex: 0,
        title: `${activeTab.title} - ${activeTab.subtitle}`
      });
    }
  };

  return (
    <section id="spa" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative overflow-hidden border-t border-slate-800">
      
      {/* Ambient background blur strictly in warm gold theme */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <SectionBadge icon={Waves} className="mb-4">
            {spaSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {spaSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {spaSection.subtitle}
          </Subtitle>
        </div>

        {/* Compact Ultra-Luxury Metrics Strip (Mobilde devasa kutular yerine zarif ve ince şerit) */}
        <div className="rounded-2xl border border-slate-800/80 bg-hotel-900/60 backdrop-blur-md grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80 mb-6 sm:mb-8 overflow-hidden shadow-xl">
          {spaSection.stats.map((stat, idx) => (
            <div
              key={idx}
              className="py-3 px-3 sm:py-4 sm:px-5 text-center flex flex-col justify-center items-center hover:bg-gold-500/5 transition-colors"
            >
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gold-400 tracking-tight block">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 sm:mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Buttons Navigation (Mobilde yan yana yatay kaydırma, webde ortalı yan yana) */}
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 px-4 sm:mx-0 mb-6 sm:mb-8 scroll-smooth sm:justify-center sm:flex-wrap">
          {spaSection.tabs.map((tab) => {
            const TabIcon = tabIcons[tab.id] || Waves;
            const isActive = tab.id === activeTabId;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-gold-gradient text-hotel-950 font-bold shadow-md shadow-gold-500/20 border border-gold-400'
                    : 'bg-hotel-900/90 text-slate-300 border border-slate-800/90 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <Card variant="elevated" hover={false} className="p-4 sm:p-7 lg:p-9 border-slate-800/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div 
                className="relative group overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-auto lg:h-full w-full bg-slate-900 min-h-[260px] sm:min-h-[320px] cursor-pointer"
                onClick={handleVisualClick}
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent" />
                
                {/* Play or Zoom Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gold-gradient text-white flex items-center justify-center shadow-gold-glow/60 border border-gold-300/40">
                    {hasVideo ? (
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    ) : (
                      <Maximize2 className="w-6 h-6" />
                    )}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-1 text-xs text-slate-200 backdrop-blur-md bg-hotel-950/80 p-2 sm:p-2.5 rounded-xl border border-white/10">
                  <span className="font-semibold text-gold-300 text-xs sm:text-sm truncate">{activeTab.title}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-gold-400 shrink-0 font-medium">
                    <Clock className="w-3.5 h-3.5 shrink-0" /> {spaSection.hoursBadge || '09:00 - 23:00'}
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Features Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-2.5 sm:mb-3">
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{activeTab.subtitle}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {activeTab.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                  {activeTab.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activeTab.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                {hasVideo && (
                  <Button
                    type="button"
                    variant="gold"
                    size="md"
                    fullWidth
                    icon={Play}
                    iconPosition="left"
                    onClick={() => setVideoModalOpen(true)}
                    className="cursor-pointer mb-2"
                  >
                    {spaSection.videoTourButton || 'Gelin Hamamı Canlı Video Turunu İzle'}
                  </Button>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="gold"
                    size="md"
                    icon={Calendar}
                    iconPosition="left"
                    onClick={() => onOpenBooking()}
                    className="flex-1 w-full"
                  >
                    {hero.ctaPrimary}
                  </Button>
                  <Button
                    as="a"
                    href={`tel:${hotel.phoneRaw}`}
                    variant="dark"
                    size="md"
                    className="flex-1 w-full"
                  >
                    {spaSection.infoLineButton || 'SPA Bilgi Hattı'}
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </Card>

      </div>

      {/* Video Modal if applicable */}
      {hasVideo && (
        <VideoModal
          isOpen={videoModalOpen}
          videoUrl={activeTab.video}
          title={activeTab.title}
          subtitle={activeTab.subtitle}
          onClose={() => setVideoModalOpen(false)}
        />
      )}

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

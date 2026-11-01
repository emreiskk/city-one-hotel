import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Briefcase, Users, Maximize2, Phone, Play, Camera } from 'lucide-react';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { VideoModal } from '../components/VideoModal';

export default function MeetingsSection() {
  const { content, currentLang } = useLanguage();
  const { meetingsSection, hotel } = content;
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [], initialIndex: 0, title: '' });
  const [videoModalData, setVideoModalData] = useState({ isOpen: false, videoUrl: '', title: '', subtitle: '' });

  const handleOpenGallery = (hall) => {
    const images = hall.gallery && hall.gallery.length > 0 ? hall.gallery : [hall.image];
    setLightboxData({
      isOpen: true,
      images,
      initialIndex: 0,
      title: `${hall.name} - Fotoğraf Galerisi`
    });
  };

  const handleOpenVideo = (hall) => {
    if (!hall.video) return;
    setVideoModalData({
      isOpen: true,
      videoUrl: hall.video,
      title: hall.name,
      subtitle: `${hall.capacity} Kapasite • ${hall.type}`
    });
  };

  return (
    <section id="meetings" className="py-16 sm:py-24 lg:py-32 bg-hotel-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionBadge icon={Briefcase} className="mb-3">
            {meetingsSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {meetingsSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {meetingsSection.subtitle}
          </Subtitle>
        </div>

        {/* Meeting Halls 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {meetingsSection.halls.map((hall) => {
            const hasVideo = Boolean(hall.video);
            const galleryCount = hall.gallery ? hall.gallery.length : 1;

            return (
              <div
                key={hall.id}
                className="rounded-2xl bg-hotel-900/40 border border-slate-800/80 overflow-hidden flex flex-col justify-between group transition-colors duration-300 hover:border-slate-700/80"
              >
                {/* Visual Area */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => handleOpenGallery(hall)}
                >
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top Bar Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-slate-300 text-[11px] font-medium tracking-wide flex items-center gap-1.5 border border-white/5">
                      <Camera className="w-3 h-3 text-gold-400" />
                      <span>{galleryCount}</span>
                    </span>

                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-gold-400 text-[10px] tracking-wider uppercase font-medium border border-white/5">
                      {hall.type}
                    </span>
                  </div>

                  {/* Play Video Overlay Button if Video exists */}
                  {hasVideo && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenVideo(hall);
                      }}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-hotel-950/80 border border-gold-400/50 backdrop-blur-md flex items-center justify-center text-gold-400 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"
                      title={meetingsSection.watchTourButton || 'Video Tur'}
                    >
                      <Play className="w-5 h-5 fill-gold-400 ml-0.5" />
                    </button>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => handleOpenGallery(hall)}
                      className="font-serif text-lg sm:text-xl font-medium text-white mb-3 group-hover:text-gold-300 transition-colors cursor-pointer"
                    >
                      {hall.name}
                    </h3>

                    {/* Capacity & Area */}
                    <div className="flex items-center gap-5 text-xs text-slate-300 mb-5 pb-4 border-b border-slate-800/80 font-light">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gold-400/80" />
                        <span>{hall.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-gold-400/80" />
                        <span>{hall.area}</span>
                      </div>
                    </div>

                    {/* Feature Bullets */}
                    <ul className="space-y-2 mb-6">
                      {hall.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
                          <span className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    {hasVideo && (
                      <Button
                        type="button"
                        variant="gold"
                        size="sm"
                        fullWidth
                        icon={Play}
                        iconPosition="left"
                        onClick={() => handleOpenVideo(hall)}
                        className="cursor-pointer"
                      >
                        {meetingsSection.watchTourButton || (currentLang === 'en' ? 'Watch Video Tour' : currentLang === 'de' ? 'Video-Rundgang ansehen' : currentLang === 'ru' ? 'Смотреть видеотур' : 'Salonu Canlı İzle')}
                      </Button>
                    )}
                    <Button
                      as="a"
                      href={`tel:${hotel.phoneRaw}`}
                      variant="outline"
                      size="sm"
                      fullWidth
                      icon={Phone}
                      iconPosition="left"
                    >
                      {meetingsSection.contactForHalls || 'Teklif & Rezervasyon Al'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox for Hall Photos */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        images={lightboxData.images}
        initialIndex={lightboxData.initialIndex}
        title={lightboxData.title}
        onClose={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Video Modal for Hall Videos */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        videoUrl={videoModalData.videoUrl}
        title={videoModalData.title}
        subtitle={videoModalData.subtitle}
        onClose={() => setVideoModalData(prev => ({ ...prev, isOpen: false }))}
      />

    </section>
  );
}
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { Briefcase, Users, Maximize2, Check, Phone, Play, Camera } from 'lucide-react';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { VideoModal } from '../components/VideoModal';

export default function MeetingsSection() {
  const { content } = useLanguage();
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
    <section id="meetings" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <SectionBadge icon={Briefcase} className="mb-4">
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
              <Card
                key={hall.id}
                variant="elevated"
                hover={true}
                className="flex flex-col h-full bg-hotel-900 border-slate-800 group"
              >
                {/* Visual Area */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-800 cursor-pointer"
                  onClick={() => handleOpenGallery(hall)}
                >
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent" />
                  
                  {/* Top Left: Gallery Count */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-hotel-950/85 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
                      <Camera className="w-3 h-3 text-gold-400" /> {galleryCount} {content.roomsSection?.ui?.photosCount || 'Fotoğraf'}
                    </span>
                    {hasVideo && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-600/90 text-white flex items-center gap-1 shadow-md">
                        <Play className="w-3 h-3 fill-white" /> {content.gallerySection?.watchLabel || 'Video'}
                      </span>
                    )}
                  </div>

                  {/* Top Right: Hall Type */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-hotel-950/80 backdrop-blur-md text-gold-300 border border-gold-500/20 z-10">
                    {hall.type}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => handleOpenGallery(hall)}
                      className="font-serif text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold-300 transition-colors cursor-pointer"
                    >
                      {hall.name}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-slate-300 mb-5 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gold-400" />
                        <span>{hall.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                        <span>{hall.area}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {hall.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
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
                        {meetingsSection.watchTourButton || (content.currentLang === 'en' ? 'Watch Video Tour' : content.currentLang === 'de' ? 'Video-Rundgang ansehen' : content.currentLang === 'ru' ? 'Смотреть видеотур по залу' : 'Salonu Canlı İzle (Video Tur)')}
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
              </Card>
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

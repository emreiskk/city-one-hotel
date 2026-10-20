import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { 
  Users, 
  Maximize2, 
  Bed, 
  BedDouble,
  Eye, 
  Check, 
  Calendar, 
  Info
} from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export default function RoomsSection({ onSelectRoomForBooking }) {
  const { content } = useLanguage();
  const { roomsSection, bookingModal } = content;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);
  const [activeModalPhotoIndex, setActiveModalPhotoIndex] = useState(0);

  useBodyScrollLock(Boolean(selectedRoomDetail));

  // Listen for navigation events from navbar/hamburger submenus
  useEffect(() => {
    const handleNav = (e) => {
      if (e.detail?.target === '#rooms') {
        if (e.detail?.category) {
          setActiveCategory(e.detail.category);
        }
        if (e.detail?.subId) {
          const found = roomsSection.rooms.find(r => r.id === e.detail.subId);
          if (found) {
            handleOpenRoomDetail(found);
          }
        }
      }
    };
    window.addEventListener('cityone-navigate', handleNav);
    return () => window.removeEventListener('cityone-navigate', handleNav);
  }, [roomsSection.rooms]);

  // Filtrelenmiş odalar
  const filteredRooms = activeCategory === 'all'
    ? roomsSection.rooms
    : roomsSection.rooms.filter(room => room.category === activeCategory);

  const handleOpenRoomDetail = (room) => {
    setSelectedRoomDetail(room);
    setActiveModalPhotoIndex(0);
  };

  return (
    <section id="rooms" className="py-14 sm:py-20 lg:py-28 bg-hotel-900/50 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <SectionBadge icon={BedDouble} className="mb-4">
            {roomsSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {roomsSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {roomsSection.subtitle}
          </Subtitle>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 text-xs text-gold-300">
            <Info className="w-3.5 h-3.5 text-gold-400" />
            <span>{roomsSection.pricingNote}</span>
          </div>
        </div>

        {/* Category Filters - Mobilde yan yana yatay kaydırma (no-scrollbar), Webde ortalı yan yana */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-1 px-1 -mx-4 px-4 sm:mx-0 sm:justify-center sm:flex-wrap">
          {roomsSection.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gold-gradient text-hotel-950 font-bold shadow-md shadow-gold-500/20 border border-gold-400'
                    : 'bg-hotel-900/90 text-slate-300 border border-slate-800/90 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => {
            const roomImages = room.images || [room.image];
            return (
              <Card
                key={room.id}
                variant="elevated"
                hover={true}
                className="flex flex-col h-full bg-hotel-900 border-slate-800 group"
              >
                {/* Room Image Container */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-800 cursor-pointer"
                  onClick={() => handleOpenRoomDetail(room)}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Top Bar Badges (Flex container preventing collisions on narrow/mobile cards) */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-start justify-between gap-1.5 z-10 pointer-events-none">
                    <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                      <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider bg-hotel-950/90 backdrop-blur-md text-gold-300 border border-gold-500/30 whitespace-nowrap shadow-sm">
                        {room.categoryLabel}
                      </span>
                      {room.popular && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider bg-gold-gradient text-white shadow-md whitespace-nowrap">
                          {room.tag}
                        </span>
                      )}
                    </div>

                    {roomImages.length > 1 && (
                      <div className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-hotel-950/90 backdrop-blur-md text-slate-200 border border-white/10 whitespace-nowrap shrink-0 shadow-sm">
                        📷 {roomImages.length}
                      </div>
                    )}
                  </div>

                  {/* Price Overlay Badge */}
                  <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-hotel-950/90 backdrop-blur-md border border-white/10 text-right z-10">
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {bookingModal.perNightRate}
                    </span>
                    <span className="font-serif text-lg font-bold text-gold-400">
                      {room.formattedPrice}
                    </span>
                  </div>
                </div>

                {/* Room Details Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => handleOpenRoomDetail(room)}
                      className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-2 cursor-pointer"
                    >
                      {room.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-5">
                      {room.shortDesc}
                    </p>

                    {/* Room Meta Badges (Size, Capacity, Bed) */}
                    <div className="grid grid-cols-2 gap-2 mb-5 pb-5 border-b border-slate-800/80 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <Bed className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                    </div>

                    {/* Amenity Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                      {room.amenities.length > 4 && (
                        <button
                          type="button"
                          onClick={() => handleOpenRoomDetail(room)}
                          className="text-xs text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1 pt-1 cursor-pointer"
                        >
                          +{room.amenities.length - 4} {roomsSection.ui?.moreAmenities || 'özellik daha'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-stretch gap-2.5">
                    <Button
                      variant="gold"
                      size="sm"
                      icon={Calendar}
                      iconPosition="left"
                      onClick={() => onSelectRoomForBooking(room)}
                      className="flex-1"
                    >
                      {roomsSection.ui?.bookRoom || bookingModal.confirmButton.replace('Rezervasyonu', 'Odayı')}
                    </Button>
                    <Button
                      variant="dark"
                      size="sm"
                      icon={Eye}
                      onClick={() => handleOpenRoomDetail(room)}
                      aria-label={roomsSection.ui?.inspectDetails || 'Detayları İncele'}
                      className="shrink-0 aspect-square !p-0 flex items-center justify-center cursor-pointer"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>

      {/* Room Detail Modal with Multi-Photo Gallery */}
      {selectedRoomDetail && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedRoomDetail(null);
          }}
        >
          <div data-modal-scrollable className="bg-hotel-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overscroll-contain shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedRoomDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white z-10 cursor-pointer"
            >
              ✕
            </button>

            {/* Main Active Photo */}
            {(() => {
              const modalImages = selectedRoomDetail.images || [selectedRoomDetail.image];
              const activePhoto = modalImages[activeModalPhotoIndex] || selectedRoomDetail.image;

              return (
                <div className="mb-6">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950 mb-3">
                    <img
                      src={activePhoto}
                      alt={selectedRoomDetail.name}
                      className="w-full h-full object-cover"
                    />
                    {modalImages.length > 1 && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs bg-black/70 text-slate-200 border border-white/10">
                        {activeModalPhotoIndex + 1} / {modalImages.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Row */}
                  {modalImages.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {modalImages.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveModalPhotoIndex(idx)}
                          className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            idx === activeModalPhotoIndex
                              ? 'border-gold-400 scale-105 shadow-gold-glow/40'
                              : 'border-transparent opacity-60 hover:opacity-100'
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
              );
            })()}

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">
                  {selectedRoomDetail.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedRoomDetail.name}
                </h3>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-xs text-slate-400 block">{bookingModal.perNightRate}</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400">
                  {selectedRoomDetail.formattedPrice}
                </span>
              </div>
            </div>

            {/* Room Meta Badges (Size in m², Capacity, Bed) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Maximize2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span><strong className="text-white">{roomsSection.ui?.modalArea || 'Alan:'}</strong> {selectedRoomDetail.size}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="w-4 h-4 text-gold-400 shrink-0" />
                <span><strong className="text-white">{roomsSection.ui?.modalCapacity || 'Kapasite:'}</strong> {selectedRoomDetail.capacity}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 col-span-1">
                <Bed className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="truncate"><strong className="text-white">{roomsSection.ui?.modalBed || 'Yatak:'}</strong> {selectedRoomDetail.bedType}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedRoomDetail.shortDesc}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {roomsSection.ui?.modalAmenitiesTitle || 'Oda Özellikleri & Konfor Ayrıcalıkları'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {selectedRoomDetail.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <Check className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="gold"
                fullWidth
                size="md"
                icon={Calendar}
                iconPosition="left"
                onClick={() => {
                  const r = selectedRoomDetail;
                  setSelectedRoomDetail(null);
                  onSelectRoomForBooking(r);
                }}
              >
                {roomsSection.ui?.confirmBook || 'Bu Odayı Rezerve Et'}
              </Button>
              <Button
                variant="dark"
                size="md"
                onClick={() => setSelectedRoomDetail(null)}
              >
                {bookingModal.cancelButton}
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}

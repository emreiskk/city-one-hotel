import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { 
  Users, 
  Maximize2, 
  Bed, 
  BedDouble,
  Eye, 
  Calendar, 
  Info
} from 'lucide-react';
import { RoomDetailModal } from '../components/RoomDetailModal';

export default function RoomsSection({ onSelectRoomForBooking }) {
  const { content } = useLanguage();
  const { roomsSection, bookingModal } = content;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);

  const handleOpenRoomDetail = (room) => {
    setSelectedRoomDetail(room);
  };

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
            setSelectedRoomDetail(found);
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

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => {
            const roomImages = room.images || [room.image];
            return (
              <article
                key={room.id}
                className="flex flex-col h-full rounded-2xl overflow-hidden bg-hotel-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors group"
              >
                {/* Room Image Container - Clean & Uncluttered */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => handleOpenRoomDetail(room)}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Discreet Category Tag */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-hotel-950/80 backdrop-blur-md text-slate-200 border border-white/10 shadow-sm">
                      {room.categoryLabel}
                    </span>
                  </div>

                  {roomImages.length > 1 && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-medium bg-hotel-950/80 backdrop-blur-md text-slate-300 border border-white/10 shadow-sm pointer-events-none">
                      {roomImages.length} Fotoğraf
                    </div>
                  )}
                </div>

                {/* Room Details Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title and Price in Clean Editorial Hierarchy */}
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 
                        onClick={() => handleOpenRoomDetail(room)}
                        className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors cursor-pointer truncate"
                      >
                        {room.name}
                      </h3>
                      <span className="font-serif text-base sm:text-lg font-bold text-gold-400 whitespace-nowrap shrink-0">
                        {room.formattedPrice}
                      </span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {room.shortDesc}
                    </p>

                    {/* Room Meta (Size, Capacity, Bed) */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pb-4 mb-4 border-b border-slate-800/80 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                        <span>{room.size}</span>
                      </div>
                      <span className="text-slate-700">•</span>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                        <span>{room.capacity}</span>
                      </div>
                      <span className="text-slate-700">•</span>
                      <div className="flex items-center gap-1.5 truncate">
                        <Bed className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                    </div>

                    {/* Amenity Highlights - Refined Typography Bullets */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-6">
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-hotel-950/60 border border-slate-800 text-[11px] text-slate-300">
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 4 && (
                        <button
                          type="button"
                          onClick={() => handleOpenRoomDetail(room)}
                          className="px-2 py-1 rounded-lg text-[11px] text-gold-400 hover:text-gold-300 font-medium cursor-pointer"
                        >
                          +{room.amenities.length - 4}
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
                      className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] !p-0 flex items-center justify-center cursor-pointer"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Room Detail Modal with Multi-Photo Gallery - Wide Horizontal on Web */}
      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onSelectRoom={(r) => onSelectRoomForBooking(r)}
      />

    </section>
  );
}

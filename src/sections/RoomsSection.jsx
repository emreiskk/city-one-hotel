import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { siteContent } from '../config/siteContent';
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
  const { roomsSection, bookingModal } = siteContent;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);

  useBodyScrollLock(Boolean(selectedRoomDetail));

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

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {roomsSection.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gold-gradient text-white shadow-gold-glow/40 scale-105 border border-gold-400/40'
                    : 'bg-hotel-900/90 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => (
            <Card
              key={room.id}
              variant="elevated"
              hover={true}
              className="flex flex-col h-full bg-hotel-900 border-slate-800 group"
            >
              {/* Room Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Popular or Category Tag */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-hotel-950/80 backdrop-blur-md text-gold-300 border border-gold-500/30">
                    {room.categoryLabel}
                  </span>
                  {room.popular && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-gold-gradient text-white shadow-lg">
                      {room.tag}
                    </span>
                  )}
                </div>

                {/* Price Overlay Badge */}
                <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-hotel-950/90 backdrop-blur-md border border-white/10 text-right">
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
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
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
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                    {room.amenities.length > 4 && (
                      <button
                        type="button"
                        onClick={() => setSelectedRoomDetail(room)}
                        className="text-xs text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1 pt-1"
                      >
                        +{room.amenities.length - 4} özellik daha
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
                    {bookingModal.confirmButton.replace('Rezervasyonu', 'Odayı')}
                  </Button>
                  <Button
                    variant="dark"
                    size="sm"
                    icon={Eye}
                    onClick={() => setSelectedRoomDetail(room)}
                    aria-label="Detayları İncele"
                    className="shrink-0 aspect-square !p-0 flex items-center justify-center"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>

      {/* Room Detail Modal */}
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
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
            >
              ✕
            </button>

            <img
              src={selectedRoomDetail.image}
              alt={selectedRoomDetail.name}
              className="w-full aspect-[16/9] object-cover rounded-xl mb-6"
            />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">
                  {selectedRoomDetail.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {selectedRoomDetail.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">{bookingModal.perNightRate}</span>
                <span className="font-serif text-2xl font-bold text-gold-400">
                  {selectedRoomDetail.formattedPrice}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedRoomDetail.shortDesc}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Oda Özellikleri & Konfor Ayrıcalıkları
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {selectedRoomDetail.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
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
                Bu Odayı Rezerve Et
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

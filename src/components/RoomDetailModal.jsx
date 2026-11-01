import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Calendar, 
  Maximize2, 
  Users, 
  Bed, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '../design-system/Button';
import { useLanguage } from '../context/LanguageContext';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export const RoomDetailModal = ({ 
  room, 
  onClose, 
  onSelectRoom, 
  actionLabel 
}) => {
  const isOpen = Boolean(room);
  useBodyScrollLock(isOpen);

  const { content } = useLanguage();
  const { roomsSection, bookingModal } = content;

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [prevRoomId, setPrevRoomId] = useState(room?.id);

  // Official React pattern: reset state during render when prop changes
  if (room?.id !== prevRoomId) {
    setPrevRoomId(room?.id);
    setActivePhotoIndex(0);
  }

  // ESC key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!room) return null;

  const modalImages = room.images && room.images.length > 0 ? room.images : [room.image];
  const activePhoto = modalImages[activePhotoIndex] || room.image;

  return createPortal(
    <div
      className="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={room.name}
    >
      <div
        data-modal-scrollable
        className="relative w-full max-w-5xl xl:max-w-6xl max-h-[92vh] sm:max-h-[88vh] bg-hotel-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button at Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-slate-400 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center z-30 cursor-pointer shadow-lg active:scale-95"
          aria-label={bookingModal?.cancelButton || 'Kapat'}
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 overscroll-contain">
          
          {/* 
            Harmonious 2-Row Responsive Grid:
            - Desktop: Row 1 = Main Photo (Left) & Room Details (Right)
                       Row 2 = Thumbnails (Left) & Action Buttons (Right)
            - The divider line above the buttons is perfectly aligned on the horizontal axis with the thumbnail cards.
            - Mobile: Ordered cleanly 1 -> 2 -> 3 -> 4 (Photo -> Thumbnails -> Info -> Buttons)
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-4 items-stretch">
            
            {/* ============================================================ */}
            {/* 1. Main Featured Photo                                       */}
            {/* Order 1 on mobile, Col 1-6 Row 1 on desktop                  */}
            {/* ============================================================ */}
            <div className="order-1 lg:order-none lg:col-span-6 lg:row-start-1 flex flex-col justify-center">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/80 shadow-xl group">
                <img
                  src={activePhoto}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Photo Counter Badge */}
                {modalImages.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/75 text-slate-200 border border-white/10 backdrop-blur-md">
                    {activePhotoIndex + 1} / {modalImages.length}
                  </div>
                )}
              </div>
            </div>

            {/* ============================================================ */}
            {/* 2. Thumbnails Strip                                          */}
            {/* Order 2 on mobile, Col 1-6 Row 2 on desktop                  */}
            {/* ============================================================ */}
            <div className="order-2 lg:order-none lg:col-span-6 lg:row-start-2 flex items-center">
              {modalImages.length > 1 ? (
                <div className="grid grid-cols-4 gap-2 sm:gap-2.5 w-full">
                  {modalImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === activePhotoIndex
                          ? 'border-gold-400 ring-2 ring-gold-400/30 opacity-100 scale-[1.02]'
                          : 'border-slate-800/80 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`${room.name} (${idx + 1}/${modalImages.length})`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="hidden lg:block h-12" />
              )}
            </div>

            {/* ============================================================ */}
            {/* 3. Room Details & Amenities (Right Column Top)               */}
            {/* Order 3 on mobile, Col 7-12 Row 1 on desktop                 */}
            {/* ============================================================ */}
            <div className="order-3 lg:order-none lg:col-span-6 lg:row-start-1 flex flex-col justify-between space-y-3.5">
              <div className="space-y-3.5">
                
                {/* 1. Category & Tag - Under the category, unboxed, elegant */}
                <div className="space-y-0.5 pr-12 sm:pr-14">
                  <span className="text-[11px] sm:text-xs font-semibold text-gold-400 uppercase tracking-wider block truncate">
                    {room.categoryLabel}
                  </span>
                  {room.tag && (
                    <p className="text-xs text-slate-400 font-light tracking-wide truncate">
                      {room.tag}
                    </p>
                  )}
                </div>

                {/* 2. Room Title & Price - Perfectly aligned on the SAME horizontal baseline */}
                <div className="flex items-baseline justify-between gap-3 sm:gap-4 pb-3 border-b border-slate-800/80">
                  <h2 className="font-serif text-lg sm:text-2xl font-bold text-white tracking-wide min-w-0 truncate">
                    {room.name}
                  </h2>
                  
                  <div className="flex items-baseline gap-1.5 shrink-0 text-right">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400 whitespace-nowrap">
                      {room.formattedPrice}
                    </span>
                    <span className="text-xs text-slate-400 font-normal whitespace-nowrap">
                      / {bookingModal?.nightUnit || 'gece'}
                    </span>
                  </div>
                </div>

                {/* 3. Specs List (Alan, Kapasite, Yatak) - Clean vertical stack (hep alt alta) */}
                <div className="py-2.5 border-b border-slate-800/60 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="text-slate-400 font-normal">{roomsSection.ui?.modalArea || 'Alan'}:</span>
                    <span className="text-white font-medium">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="text-slate-400 font-normal">{roomsSection.ui?.modalCapacity || 'Kapasite'}:</span>
                    <span className="text-white font-medium">{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="text-slate-400 font-normal">{roomsSection.ui?.modalBed || 'Yatak'}:</span>
                    <span className="text-white font-medium">{room.bedType}</span>
                  </div>
                </div>

                {/* 4. Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {room.shortDesc}
                </p>

                {/* 5. Amenities Section - Airy 2-column checklist */}
                <div className="space-y-2 pt-0.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {roomsSection.ui?.modalAmenitiesTitle || 'Oda Özellikleri & Konfor Ayrıcalıkları'}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                    {room.amenities.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ============================================================ */}
            {/* 4. Action Buttons & Divider Line (Right Column Bottom)       */}
            {/* Order 4 on mobile, Col 7-12 Row 2 on desktop                 */}
            {/* Divider is aligned horizontally with top of thumbnail strip  */}
            {/* ============================================================ */}
            <div className="order-4 lg:order-none lg:col-span-6 lg:row-start-2 border-t border-slate-800/80 pt-3 flex items-center justify-end gap-3 shrink-0">
              <Button
                type="button"
                variant="dark"
                size="sm"
                onClick={onClose}
                className="px-5 py-2.5 text-xs sm:text-sm shrink-0 cursor-pointer"
              >
                {bookingModal?.cancelButton || 'Kapat'}
              </Button>

              <Button
                variant="gold"
                size="sm"
                icon={actionLabel ? ArrowRight : Calendar}
                iconPosition="right"
                onClick={() => {
                  onSelectRoom(room);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide shadow-lg cursor-pointer shrink-0"
              >
                {actionLabel || roomsSection.ui?.confirmBook || 'Bu Odayı Seç'}
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default RoomDetailModal;
